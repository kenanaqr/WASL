// WASL Pulse: browser script. Copied byte-for-byte into each website.
//
// It counts visits and taps on business links. It sets no cookies, keeps no ID and
// stores no address. The only things kept in the browser are a session mark with a
// source word, and the team opt-out flag on devices that asked for it.

import { isSource, sourceFromReferrer, sourceFromSearch } from './rules.ts';
import type { Metric, Source } from './rules.ts';

export interface SiteRules {
  // Gets an absolute link. Answers which business metric it is, or null to ignore it.
  classify(href: string): Metric | null;
}

// Everything the script needs from the browser, so the logic can be tested without one.
export interface PulseEnv {
  hostname: string;
  search: string;
  referrer: string;
  webdriver: boolean;
  // The visitor asked not to be tracked (Global Privacy Control or Do Not Track).
  privacyOptOut: boolean;
  getHash(): string;
  onHashChange(handler: () => void): void;
  readSession(): string | null;
  writeSession(value: string): void;
  readOff(): boolean;
  writeOff(off: boolean): void;
  send(body: string): void;
  onTap(handler: (href: string) => void): void;
}

const SESSION_MARK = '1';
const NO_COUNT_HASH = '#wasl-no-count';
const COUNT_HASH = '#wasl-count';

// Team devices: opening a page with #wasl-no-count stops counting on this device,
// #wasl-count starts it again. The part after # never leaves the browser.
export function applyOptOutHash(hash: string, env: Pick<PulseEnv, 'writeOff'>): void {
  const command = hash.toLowerCase();
  if (command === NO_COUNT_HASH) env.writeOff(true);
  else if (command === COUNT_HASH) env.writeOff(false);
}

// The session mark is "1." plus the source word, for example "1.google".
export function readSessionSource(raw: string | null): Source | null {
  if (!raw) return null;
  const [mark, word] = raw.split('.');
  return mark === SESSION_MARK && isSource(word) ? word : null;
}

function run(rules: SiteRules, env: PulseEnv): void {
  applyOptOutHash(env.getHash(), env);
  env.onHashChange(() => applyOptOutHash(env.getHash(), env));

  if (env.webdriver || env.privacyOptOut) return;

  const send = (metric: Metric, source: Source) => {
    if (env.readOff()) return;
    env.send(JSON.stringify({ m: metric, s: source }));
  };

  // One visit per browser tab session.
  let source = readSessionSource(env.readSession());
  if (source === null) {
    source = sourceFromSearch(env.search) ?? sourceFromReferrer(env.referrer, env.hostname);
    env.writeSession(`${SESSION_MARK}.${source}`);
    send('visit', source);
  }

  const sessionSource = source;
  env.onTap((href) => {
    try {
      const metric = rules.classify(href);
      if (metric) send(metric, sessionSource);
    } catch {
      // A site's rules must never disturb the page.
    }
  });
}

const SESSION_KEY = 'wasl_pulse';
const OFF_KEY = 'wasl_pulse_off';

function browserEnv(): PulseEnv | null {
  if (typeof window === 'undefined' || typeof document === 'undefined') return null;
  const nav = navigator as Navigator & { globalPrivacyControl?: boolean };
  return {
    hostname: location.hostname,
    search: location.search,
    referrer: document.referrer,
    webdriver: navigator.webdriver === true,
    privacyOptOut: nav.globalPrivacyControl === true || navigator.doNotTrack === '1',
    getHash: () => location.hash,
    onHashChange: (handler) => window.addEventListener('hashchange', handler),
    readSession: () => {
      try {
        return sessionStorage.getItem(SESSION_KEY);
      } catch {
        return null;
      }
    },
    writeSession: (value) => {
      try {
        sessionStorage.setItem(SESSION_KEY, value);
      } catch {
        // Storage is blocked: the visit is simply counted once per page load.
      }
    },
    readOff: () => {
      try {
        return localStorage.getItem(OFF_KEY) === '1';
      } catch {
        return false;
      }
    },
    writeOff: (off) => {
      try {
        if (off) localStorage.setItem(OFF_KEY, '1');
        else localStorage.removeItem(OFF_KEY);
      } catch {
        // Storage is blocked: the device cannot be switched off.
      }
    },
    send: (body) => {
      try {
        navigator.sendBeacon('/_p/e', body);
      } catch {
        // Counting must never disturb the page.
      }
    },
    onTap: (handler) => {
      // One page-wide listener, so no component has to be edited.
      document.addEventListener(
        'click',
        (event) => {
          if (!event.isTrusted || !(event.target instanceof Element)) return;
          const anchor = event.target.closest('a[href]');
          const raw = anchor ? anchor.getAttribute('href') : null;
          if (!raw) return;
          let href: string;
          try {
            href = new URL(raw, document.baseURI).href;
          } catch {
            return;
          }
          handler(href);
        },
        true,
      );
    },
  };
}

let started = false;

// Call once from the site. Pass a test environment as the second argument in tests.
export function startPulse(rules: SiteRules, env?: PulseEnv | null): void {
  try {
    if (env === undefined) {
      if (started) return;
      started = true;
    }
    const active = env === undefined ? browserEnv() : env;
    if (active) run(rules, active);
  } catch {
    // Counting must never disturb the page.
  }
}
