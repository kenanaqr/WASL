// WASL Pulse: site Worker. One file, copied byte-for-byte into each website.
//
// It handles only /_p/*. Every other request goes to the site's own files, unchanged.
// It has no imports and no packages, so the websites need nothing new.
//
// Privacy: nothing about the visitor is stored or logged. The visitor's IP address is
// used for the rate limit only. Only operation names are logged.

interface AssetsBinding {
  fetch(request: Request): Promise<Response>;
}

interface PulseBinding {
  record(siteId: string, metric: string, source: string): Promise<void> | void;
}

interface LimiterBinding {
  limit(options: { key: string }): Promise<{ success: boolean }>;
}

interface WorkerEnv {
  ASSETS: AssetsBinding;
  PULSE?: PulseBinding;
  PULSE_LIMITER?: LimiterBinding;
  // This site's own id, from its wrangler config. The browser never chooses it.
  SITE_ID: string;
}

interface WaitContext {
  waitUntil(promise: Promise<unknown>): void;
}

// The same lists as the database CHECKs and site/rules.ts (a test keeps them in step).
const METRICS: readonly string[] = [
  'visit',
  'call',
  'whatsapp',
  'directions',
  'order',
  'review',
  'email',
  'instagram',
  'facebook',
];

const SOURCES: readonly string[] = [
  'direct',
  'google',
  'maps',
  'instagram',
  'facebook',
  'tiktok',
  'whatsapp',
  'stand',
  'other',
];

const EVENT_PATH = '/_p/e';
const MAX_BODY_BYTES = 128;

const BOT_WORDS = [
  'bot',
  'crawl',
  'spider',
  'slurp',
  'headless',
  'lighthouse',
  'preview',
  'facebookexternalhit',
  'curl/',
  'wget/',
  'python',
  'java/',
  'go-http',
  'node-fetch',
  'axios',
  'httpclient',
  'libwww',
  'scrapy',
  'phantomjs',
  'selenium',
  'puppeteer',
  'pingdom',
  'uptime',
  'monitor',
];

// A missing User-Agent is treated as a bot. "Cubot" is a real phone brand, so it is
// removed before looking for "bot". "whatsapp" and "telegram" are not on the list on
// purpose: their link-preview robots never run the browser script, and real visitors
// in those apps' in-app browsers must still be counted.
function looksLikeBot(userAgent: string | null): boolean {
  if (!userAgent) return true;
  const text = userAgent.toLowerCase().replaceAll('cubot', '');
  return BOT_WORDS.some((word) => text.includes(word));
}

function reply(status: number, extraHeaders?: Record<string, string>): Response {
  const headers = new Headers({ 'Cache-Control': 'no-store', 'X-Robots-Tag': 'noindex' });
  if (extraHeaders) {
    for (const [name, value] of Object.entries(extraHeaders)) headers.set(name, value);
  }
  return new Response(null, { status, headers });
}

// Every refusal looks the same, so the answers tell an attacker nothing.
function refuse(): Response {
  return reply(204);
}

// Returns the event when the request passes checks 1 to 5, otherwise null.
async function readEvent(request: Request, url: URL): Promise<{ m: string; s: string } | null> {
  // 1. Small: a missing or odd Content-Length is refused (sendBeacon always sends one).
  const length = request.headers.get('Content-Length');
  if (length === null || !/^\d{1,4}$/.test(length) || Number(length) > MAX_BODY_BYTES) return null;

  // 2. Same-site: a browser that says the request is not same-origin is refused.
  const fetchSite = request.headers.get('Sec-Fetch-Site');
  if (fetchSite !== null && fetchSite !== 'same-origin') return null;

  // 3. The Origin, when present, must be this site's own.
  const origin = request.headers.get('Origin');
  if (origin !== null && origin !== url.origin) return null;

  // 4. Not a bot.
  if (looksLikeBot(request.headers.get('User-Agent'))) return null;

  // 5. Exactly {"m": <metric>, "s": <source>}, both on the lists.
  let text: string;
  try {
    text = await request.text();
  } catch {
    return null;
  }
  if (new TextEncoder().encode(text).length > MAX_BODY_BYTES) return null;

  let data: unknown;
  try {
    data = JSON.parse(text);
  } catch {
    return null;
  }
  if (typeof data !== 'object' || data === null || Array.isArray(data)) return null;
  const keys = Object.keys(data);
  if (keys.length !== 2 || !keys.includes('m') || !keys.includes('s')) return null;
  const { m, s } = data as Record<string, unknown>;
  if (typeof m !== 'string' || typeof s !== 'string') return null;
  if (!METRICS.includes(m) || !SOURCES.includes(s)) return null;
  return { m, s };
}

async function forward(pulse: PulseBinding, siteId: string, metric: string, source: string) {
  try {
    await pulse.record(siteId, metric, source);
  } catch {
    console.error('pulse_forward_error');
  }
}

export default {
  async fetch(request: Request, env: WorkerEnv, ctx: WaitContext): Promise<Response> {
    const url = new URL(request.url);

    // Not ours: the site's own files, untouched.
    if (!url.pathname.startsWith('/_p/')) return env.ASSETS.fetch(request);

    if (url.pathname !== EVENT_PATH) return reply(404);
    if (request.method !== 'POST') return reply(405, { Allow: 'POST' });

    const event = await readEvent(request, url);
    if (!event) return refuse();

    // 6. Rate limit by visitor address (used here only, never stored or logged).
    const limiter = env.PULSE_LIMITER;
    if (!limiter) {
      console.error('pulse_limiter_missing');
      return refuse();
    }
    const address = request.headers.get('CF-Connecting-IP');
    if (!address) return refuse();
    let allowed = false;
    try {
      allowed = (await limiter.limit({ key: address })).success;
    } catch {
      console.error('pulse_limiter_error');
    }
    if (!allowed) return refuse();

    // 7. Count it, under this site's own id.
    if (!env.PULSE || typeof env.SITE_ID !== 'string' || !env.SITE_ID) return refuse();
    ctx.waitUntil(forward(env.PULSE, env.SITE_ID, event.m, event.s));
    return refuse();
  },
};
