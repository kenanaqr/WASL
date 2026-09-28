// WASL Pulse: link and source rules.
// Pure functions only (no browser or Worker APIs), so the same file runs in the
// browser, in the collector and in the tests. Copied byte-for-byte into each website.

export const METRICS = [
  'visit',
  'call',
  'whatsapp',
  'directions',
  'order',
  'review',
  'email',
  'instagram',
  'facebook',
] as const;

export const SOURCES = [
  'direct',
  'google',
  'maps',
  'instagram',
  'facebook',
  'tiktok',
  'whatsapp',
  'stand',
  'other',
] as const;

export type Metric = (typeof METRICS)[number];
export type Source = (typeof SOURCES)[number];

export function isMetric(value: unknown): value is Metric {
  return typeof value === 'string' && (METRICS as readonly string[]).includes(value);
}

export function isSource(value: unknown): value is Source {
  return typeof value === 'string' && (SOURCES as readonly string[]).includes(value);
}

// ---------------------------------------------------------------------------
// Link rules. Each helper takes an absolute link (a.href) and answers yes or no.
// ---------------------------------------------------------------------------

function parse(href: string): URL | null {
  try {
    return new URL(href);
  } catch {
    return null;
  }
}

function parseWeb(href: string): URL | null {
  const url = parse(href);
  return url && (url.protocol === 'https:' || url.protocol === 'http:') ? url : null;
}

function safeDecode(text: string): string {
  try {
    return decodeURIComponent(text);
  } catch {
    return text;
  }
}

function hostIs(url: URL, domain: string): boolean {
  const host = url.hostname.toLowerCase();
  return host === domain || host.endsWith('.' + domain);
}

function firstSegment(url: URL): string {
  return (url.pathname.split('/')[1] ?? '').toLowerCase();
}

// Digits only; a leading 00 (international prefix) is dropped.
function digitsOf(text: string): string {
  const digits = text.replace(/\D/g, '');
  return digits.startsWith('00') ? digits.slice(2) : digits;
}

// `numbers` lists every accepted form as digits only, for example '962797720319'.
// Leave it out to accept any number.
export function isTel(href: string, numbers?: readonly string[]): boolean {
  const url = parse(href);
  if (!url || url.protocol !== 'tel:') return false;
  const number = digitsOf(safeDecode(url.pathname).split(/[;,]/)[0] ?? '');
  if (!number) return false;
  return numbers ? numbers.includes(number) : true;
}

export function isWhatsApp(href: string, numbers?: readonly string[]): boolean {
  const url = parseWeb(href);
  if (!url) return false;
  const host = url.hostname.toLowerCase();
  let number = '';
  if (host === 'wa.me') {
    number = digitsOf(safeDecode(url.pathname.split('/')[1] ?? ''));
  } else if (host === 'api.whatsapp.com' && url.pathname === '/send') {
    number = digitsOf(url.searchParams.get('phone') ?? '');
  }
  if (!number) return false;
  return numbers ? numbers.includes(number) : true;
}

// A Google address: google.com, google.jo, google.com.jo, google.co.uk (not google.evil.com).
const GOOGLE_TLD = 'google\\.[a-z]{2,3}(?:\\.[a-z]{2})?';
const GOOGLE_HOST = new RegExp(`(?:^|\\.)${GOOGLE_TLD}$`);
const GOOGLE_MAPS_HOST = new RegExp(`^maps\\.${GOOGLE_TLD}$`);
const GOOGLE_WEB_HOST = new RegExp(`^(?:www\\.)?${GOOGLE_TLD}$`);

// Google Maps or Apple Maps links (the Directions button).
export function isMaps(href: string): boolean {
  const url = parseWeb(href);
  if (!url) return false;
  const host = url.hostname.toLowerCase();
  if (GOOGLE_MAPS_HOST.test(host)) return true;
  if (GOOGLE_WEB_HOST.test(host)) {
    return url.pathname === '/maps' || url.pathname.startsWith('/maps/');
  }
  if (host === 'maps.app.goo.gl' || host === 'maps.apple.com') return true;
  return host === 'goo.gl' && url.pathname.startsWith('/maps');
}

const ORDER_DOMAINS = ['ubereats.com', 'doordash.com', 'postmates.com'];

export function isOrder(href: string, domains: readonly string[] = ORDER_DOMAINS): boolean {
  const url = parseWeb(href);
  return !!url && domains.some((domain) => hostIs(url, domain));
}

export function isGoogleReview(href: string): boolean {
  const url = parseWeb(href);
  if (!url) return false;
  const host = url.hostname.toLowerCase();
  if (host === 'g.page') return /^\/r\/[^/]+\/review\/?$/.test(url.pathname);
  return host === 'search.google.com' && url.pathname.startsWith('/local/writereview');
}

// Leave `handle` out to accept any Instagram page or profile.
export function isInstagram(href: string, handle?: string): boolean {
  const url = parseWeb(href);
  if (!url || !hostIs(url, 'instagram.com')) return false;
  const segment = firstSegment(url);
  if (!segment) return false;
  return handle ? segment === handle.toLowerCase() : true;
}

// Leave `page` out to accept any Facebook page.
export function isFacebook(href: string, page?: string): boolean {
  const url = parseWeb(href);
  if (!url || !(hostIs(url, 'facebook.com') || hostIs(url, 'fb.com'))) return false;
  const segment = firstSegment(url);
  if (!segment) return false;
  return page ? segment === page.toLowerCase() : true;
}

// Every address must belong to `domain` (no leading @). Leave it out to accept any mailto.
export function isMailto(href: string, domain?: string): boolean {
  const url = parse(href);
  if (!url || url.protocol !== 'mailto:') return false;
  const addresses = safeDecode(url.pathname)
    .split(',')
    .map((address) => address.trim().toLowerCase())
    .filter(Boolean);
  if (addresses.length === 0) return false;
  return domain ? addresses.every((address) => address.endsWith('@' + domain.toLowerCase())) : true;
}

// ---------------------------------------------------------------------------
// Source rules. Only a source word is ever kept, never an address.
// ---------------------------------------------------------------------------

// ?src=stand or ?src=qr in the address means a table stand or QR code.
export function sourceFromSearch(search: string): Source | null {
  const value = new URLSearchParams(search).get('src');
  const word = value ? value.toLowerCase() : '';
  return word === 'stand' || word === 'qr' ? 'stand' : null;
}

const APP_SOURCES: ReadonlyArray<readonly [string, Source]> = [
  ['com.google.android.googlequicksearchbox', 'google'],
  ['com.instagram.android', 'instagram'],
  ['com.facebook.', 'facebook'],
  ['com.whatsapp', 'whatsapp'],
  ['com.zhiliaoapp.musically', 'tiktok'],
];

function stripWww(host: string): string {
  return host.startsWith('www.') ? host.slice(4) : host;
}

// `referrer` is document.referrer, `ownHostname` is location.hostname.
export function sourceFromReferrer(referrer: string, ownHostname: string): Source {
  if (!referrer) return 'direct';

  if (referrer.startsWith('android-app://')) {
    const app = referrer.slice('android-app://'.length);
    const match = APP_SOURCES.find(([prefix]) => app.startsWith(prefix));
    return match ? match[1] : 'other';
  }

  const url = parse(referrer);
  const host = url ? url.hostname.toLowerCase() : '';
  if (!url || !host) return 'other';
  if (stripWww(host) === stripWww(ownHostname.toLowerCase())) return 'direct';

  const googleHost = GOOGLE_HOST.test(host);
  if (GOOGLE_MAPS_HOST.test(host) || host === 'maps.app.goo.gl') return 'maps';
  if (googleHost && (url.pathname === '/maps' || url.pathname.startsWith('/maps/'))) return 'maps';
  if (host === 'goo.gl' && url.pathname.startsWith('/maps')) return 'maps';
  if (googleHost) return 'google';
  if (/(?:^|\.)instagram\.com$/.test(host)) return 'instagram';
  if (/(?:^|\.)(?:facebook\.com|fb\.com|fb\.me)$/.test(host)) return 'facebook';
  if (/(?:^|\.)tiktok\.com$/.test(host)) return 'tiktok';
  if (host === 'wa.me' || /(?:^|\.)whatsapp\.(?:com|net)$/.test(host)) return 'whatsapp';
  return 'other';
}
