import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { useGSAP } from '@gsap/react';

import waslLogo from '../../../assets/WASL logo.png';

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

const PETROL = '#18414B';
const SAND = '#DCCCB6';

type Strand = 'petrol' | 'sand';
const STRANDS: Strand[] = ['sand', 'petrol'];

/**
 * Ribbon centerlines traced from the alpha of logo-petrol.png / logo-sand.png,
 * in logo-local coordinates (0,0 = top-left of the 353x234 artwork). They are
 * the spine of the real mark, not an approximation of it.
 */
const RIBBON: Record<Strand, string> = {
  petrol: "M 87.0,39.0 Q 68.0,44.0 64.0,46.0 Q 60.0,48.0 56.0,50.5 Q 52.0,53.0 45.5,59.5 Q 39.0,66.0 34.0,74.0 Q 29.0,82.0 26.0,94.0 Q 23.0,106.0 23.0,114.0 Q 23.0,122.0 24.5,127.0 Q 26.0,132.0 28.0,135.0 Q 30.0,138.0 32.0,139.0 Q 34.0,140.0 38.5,140.0 Q 43.0,140.0 52.5,147.0 Q 62.0,154.0 67.0,156.5 Q 72.0,159.0 76.5,160.0 Q 81.0,161.0 89.0,161.0 Q 97.0,161.0 101.0,160.0 Q 105.0,159.0 111.5,155.0 Q 118.0,151.0 162.0,105.5 Q 206.0,60.0 213.5,55.5 Q 221.0,51.0 232.5,48.5 Q 244.0,46.0 254.0,46.5 Q 264.0,47.0 273.0,50.0 Q 282.0,53.0 287.5,56.5 Q 293.0,60.0 299.5,66.5 Q 306.0,73.0 310.0,79.5 Q 314.0,86.0 314.5,92.0 Q 315.0,98.0 317.0,101.5 Q 319.0,105.0 320.5,111.5 Q 322.0,118.0 321.0,130.0 Q 320.0,142.0 316.0,152.0 Q 312.0,162.0 306.0,169.5 Q 300.0,177.0 290.0,184.0 Q 280.0,191.0 273.0,193.5 Q 266.0,196.0 261.5,196.5 Q 257.0,197.0 254.8,197.3 L 252.5,197.5",
  sand: "M 222.0,148.0 Q 236.0,158.0 240.0,159.5 Q 244.0,161.0 252.0,161.5 Q 260.0,162.0 268.0,160.0 Q 276.0,158.0 284.0,150.5 Q 292.0,143.0 294.0,137.0 Q 296.0,131.0 296.0,127.5 Q 296.0,124.0 299.0,121.5 Q 302.0,119.0 303.5,119.5 Q 305.0,120.0 306.5,122.0 Q 308.0,124.0 308.5,130.5 Q 309.0,137.0 307.0,145.0 Q 305.0,153.0 300.5,160.5 Q 296.0,168.0 287.0,177.0 Q 278.0,186.0 273.5,187.5 Q 269.0,189.0 259.5,190.0 Q 250.0,191.0 238.0,189.5 Q 226.0,188.0 215.0,182.0 Q 204.0,176.0 197.0,169.5 Q 190.0,163.0 161.0,130.5 Q 132.0,98.0 128.5,94.5 Q 125.0,91.0 92.5,73.0 Q 60.0,55.0 58.0,52.5 Q 56.0,50.0 52.0,51.5 Q 48.0,53.0 46.5,54.5 Q 45.0,56.0 45.5,89.5 Q 46.0,123.0 47.5,121.0 Q 49.0,119.0 49.0,116.0 Q 49.0,113.0 44.0,113.5 Q 39.0,114.0 43.5,113.5 Q 48.0,113.0 48.0,109.5 Q 48.0,106.0 50.0,100.5 Q 52.0,95.0 59.0,87.5 Q 66.0,80.0 72.0,77.5 Q 78.0,75.0 85.5,74.5 Q 93.0,74.0 103.0,77.5 Q 113.0,81.0 118.5,85.5 Q 124.0,90.0 136.0,78.0 Q 148.0,66.0 134.5,57.5 Q 121.0,49.0 108.5,47.0 Q 96.0,45.0 83.5,47.0 Q 71.0,49.0 69.0,51.5 Q 67.0,54.0 61.5,57.0 Q 56.0,60.0 48.5,70.0 Q 41.0,80.0 38.5,88.5 Q 36.0,97.0 36.0,103.0 Q 36.0,109.0 37.5,115.0 Q 39.0,121.0 42.0,122.0 Q 45.0,123.0 47.5,129.5 Q 50.0,136.0 56.0,141.0 Q 62.0,146.0 65.0,148.5 L 68.0,151.0",
};

/**
 * Where each strand passes closest to the heart of the mark, as a fraction of
 * that strand's length. This is the connection point: the dots arrive here and
 * the ribbon grows outward from it in both directions.
 */
const MEET_T: Record<Strand, number> = { petrol: 0.4662, sand: 0.3663 };

/**
 * The stretch of the sand strand that runs behind the petrol band in the
 * finished mark — found by walking the spine and testing the artwork for warm
 * sand ink. There is no sand to reveal along it, only petrol that belongs to
 * the other strand, so the mask holds it shut. Sand then emerges from behind
 * petrol the way the mark is actually woven.
 */
const OCCLUDED: Partial<Record<Strand, [number, number]>> = { sand: [0.325, 0.412] };

const LOGO_W = 353;
const LOGO_H = 234;

/**
 * Pinned scroll left over after the timeline finishes: the beat between the
 * mark completing and the hero handing over. Also the margin that absorbs
 * scrub lag, so the mark is never still assembling when the pin releases.
 */
const BREATHE_RATIO = 0.1;
const BREATHE_MAX = 80;

/**
 * Scrub smoothing. SMOOTH_TAU is the time constant used through the body of the
 * animation — roughly the feel of a 0.7 numeric scrub. Past LOCK_FROM it tapers
 * toward TAU_MIN so the timeline converges on the scroll before the pin
 * releases, instead of trailing it into the handover.
 */
const SMOOTH_TAU = 0.3;
// Set just below where the text begins (T.text = 0.8) so the whole resolution —
// mark settling plus text rising — sits inside the tightening zone and has
// converged by the release. That stretch is low-motion, so losing smoothing
// there is not perceptible.
const LOCK_FROM = 0.78;
const TAU_MIN = 0.03;

/**
 * Comet trail: each layer is the head's position delayed by `lag` in TIMELINE
 * time, so the gap between head and tail is velocity * lag. The trail therefore
 * stretches when the dot is moving fast and retracts to nothing as it settles —
 * the decay is a consequence of the motion, not a scripted fade.
 * Ordered back-to-front so the bright core paints on top.
 */
const TRAIL_LAYERS = [
  { lag: 0.13, width: 1.2, opacity: 0.13 },
  { lag: 0.085, width: 1.8, opacity: 0.26 },
  { lag: 0.047, width: 2.5, opacity: 0.5 },
  { lag: 0.021, width: 3.2, opacity: 0.92 },
];

/** Sand reads lighter than petrol on ivory, so its trail carries a little more weight. */
const STRAND_GAIN: Record<Strand, { width: number; opacity: number }> = {
  petrol: { width: 1, opacity: 1 },
  sand: { width: 1.3, opacity: 1.15 },
};

/**
 * Reveal mask widths, sized per strand from the measured artwork: the petrol
 * ribbon runs up to ~18px thick, the sand ribbon ~14px, so each gets a widest
 * band that covers its own ink with a small margin and no more. (A band wider
 * than the strand needs would also uncover the faint ghost outline baked into
 * logo-sand.png alongside the solid ribbon.) The narrower layers run slightly
 * ahead so weight builds behind the growth front instead of switching on at
 * full thickness.
 */
const MASK_LAYERS: Record<Strand, { width: number; lag: number }[]> = {
  petrol: [
    { width: 10, lag: 0 },
    { width: 17, lag: 0.02 },
    { width: 24, lag: 0.04 },
  ],
  sand: [
    { width: 8, lag: 0 },
    { width: 13, lag: 0.02 },
    { width: 18, lag: 0.04 },
  ],
};

interface Layout {
  viewBox: string;
  logo: { x: number; y: number };
  label: { w: number; h: number; y: number; sandX: number; petrolX: number };
  approach: Record<Strand, string>;
}

/**
 * Both strands enter from the top of the frame and descend inward. The last
 * control point of each approach sits on the strand's own tangent at the
 * connection point, so the dot arrives already moving the way the ribbon will
 * grow — the motion transfers into the mark rather than stopping and handing off.
 */
const LAYOUTS: Record<'desktop' | 'mobile', Layout> = {
  desktop: {
    viewBox: '0 0 1000 600',
    logo: { x: 323.5, y: 183 },
    label: { w: 300, h: 80, y: 100, sandX: 55, petrolX: 645 },
    approach: {
      sand: 'M 205,190 C 300,206 421.1,242.5 484.4,313.4',
      petrol: 'M 795,190 C 700,206 553.1,218.8 487,287',
    },
  },
  mobile: {
    viewBox: '0 0 600 1000',
    logo: { x: 123.5, y: 383 },
    label: { w: 230, h: 80, y: 158, sandX: 48, petrolX: 322 },
    approach: {
      sand: 'M 163,250 C 174,344 211.1,431.3 284.4,513.4',
      petrol: 'M 437,250 C 426,344 363.6,408 287,487',
    },
  },
};

/** Timeline beats, in normalized scroll progress. */
const T = {
  labelOut: 0.1,
  labelOutDur: 0.22,
  // Starts almost immediately: any gap here is scroll that moves nothing.
  journey: 0.01,
  journeyDur: 0.43,
  absorb: 0.44,
  unfurl: 0.44,
  // Ends where the growth stops being visible. Beyond ~0.82 the widest band was
  // still nominally growing but adding well under 1% of its coverage, which is
  // scroll the viewer reads as nothing happening.
  unfurlDur: 0.34,
  settle: 0.82,
  settleDur: 0.06,
  // Starts while the last of the ribbon is still settling so there is no dead
  // beat. The staggered lines land exactly on progress 1 — the breathing room
  // before the hero releases is held in the pinned distance instead (see
  // BREATHE_RATIO), so the timeline itself carries no idle tail.
  text: 0.8,
  textDur: 0.13,
  textStagger: 0.02,
};

function useIsMobile(): boolean {
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== 'undefined' ? window.innerWidth < 768 : false
  );
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const query = window.matchMedia('(max-width: 767px)');
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    query.addEventListener('change', handler);
    return () => query.removeEventListener('change', handler);
  }, []);
  return isMobile;
}

function usePrefersReducedMotion(): boolean {
  const [prefers, setPrefers] = useState(() =>
    typeof window !== 'undefined'
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
      : false
  );
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handler = (e: MediaQueryListEvent) => setPrefers(e.matches);
    query.addEventListener('change', handler);
    return () => query.removeEventListener('change', handler);
  }, []);
  return prefers;
}

interface HeroExperienceProps {
  onNavigate: (path: string) => void;
}

export const HeroExperience: React.FC<HeroExperienceProps> = ({ onNavigate: _onNavigate }) => {
  void _onNavigate;

  const containerRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const prefersReducedMotion = usePrefersReducedMotion();

  const layout = LAYOUTS[isMobile ? 'mobile' : 'desktop'];

  const approachRefs = useRef<Record<Strand, SVGPathElement | null>>({ petrol: null, sand: null });
  const trailRefs = useRef<Record<Strand, (SVGPathElement | null)[]>>({ petrol: [], sand: [] });
  const maskRefs = useRef<Record<Strand, (SVGPathElement | null)[]>>({ petrol: [], sand: [] });
  const ribbonRefs = useRef<Record<Strand, SVGPathElement | null>>({ petrol: null, sand: null });
  const frontRefs = useRef<Record<Strand, (SVGPathElement | null)[]>>({ petrol: [], sand: [] });
  const occluderRefs = useRef<Record<Strand, SVGPathElement | null>>({ petrol: null, sand: null });

  useGSAP(() => {
    if (prefersReducedMotion) return;

    // Path metrics, measured from the live DOM so they stay correct across breakpoints.
    const metrics = {} as Record<Strand, { approachLen: number; ribbonLen: number; meetLen: number }>;
    for (const strand of STRANDS) {
      const approachLen = approachRefs.current[strand]?.getTotalLength() ?? 0;
      const ribbonLen = ribbonRefs.current[strand]?.getTotalLength() ?? 0;
      metrics[strand] = { approachLen, ribbonLen, meetLen: ribbonLen * MEET_T[strand] };

      const gap = OCCLUDED[strand];
      const occluder = occluderRefs.current[strand];
      if (gap && occluder && ribbonLen) {
        occluder.style.strokeDasharray = `${(gap[1] - gap[0]) * ribbonLen} ${ribbonLen * 2}`;
        occluder.style.strokeDashoffset = `${-gap[0] * ribbonLen}`;
      }
    }

    // Proxies the timeline animates; a single applier turns them into dash geometry.
    const head = { petrol: { v: 0 }, sand: { v: 0 } };
    const tail = {
      petrol: TRAIL_LAYERS.map(() => ({ v: 0 })),
      sand: TRAIL_LAYERS.map(() => ({ v: 0 })),
    };
    const spread = {
      petrol: MASK_LAYERS.petrol.map(() => ({ v: 0 })),
      sand: MASK_LAYERS.sand.map(() => ({ v: 0 })),
    };

    const setDash = (el: SVGPathElement | null, from: number, to: number, pathLen: number) => {
      if (!el) return;
      const len = to - from;
      if (len <= 0.5) {
        el.style.visibility = 'hidden';
        return;
      }
      el.style.visibility = 'visible';
      el.style.strokeDasharray = `${len} ${pathLen + len + 10}`;
      el.style.strokeDashoffset = `${-from}`;
    };

    const apply = () => {
      for (const strand of STRANDS) {
        const { approachLen, ribbonLen, meetLen } = metrics[strand];

        // Comet trail: visible arc runs from each delayed tail up to the head.
        const h = head[strand].v * approachLen;
        TRAIL_LAYERS.forEach((_, i) => {
          setDash(trailRefs.current[strand][i], tail[strand][i].v * approachLen, h, approachLen);
        });

        // Ribbon: grows out of the connection point at a uniform rate in both
        // directions, so the shorter side simply finishes first.
        const reach = Math.max(meetLen, ribbonLen - meetLen);
        MASK_LAYERS[strand].forEach((_, i) => {
          const s = spread[strand][i].v * reach;
          const back = Math.min(s, meetLen);
          const fwd = Math.min(s, ribbonLen - meetLen);
          setDash(maskRefs.current[strand][i], meetLen - back, meetLen + fwd, ribbonLen);
        });

        // A short bright edge riding each growth front, where the ribbon is
        // materialising.
        const lead = spread[strand][0].v * reach;
        const fwdLead = Math.min(lead, ribbonLen - meetLen);
        const backLead = Math.min(lead, meetLen);
        const win = 16;
        setDash(frontRefs.current[strand][0], meetLen + fwdLead - Math.min(win, fwdLead), meetLen + fwdLead, ribbonLen);
        setDash(frontRefs.current[strand][1], meetLen - backLead, meetLen - backLead + Math.min(win, backLead), ribbonLen);
      }
    };

    // Park each dot on the head of its own approach so the resting state already
    // shows the two starting points.
    for (const strand of STRANDS) {
      gsap.set(`.dot-${strand}`, {
        transformOrigin: '50% 50%',
        motionPath: {
          path: `#approach-${strand}`,
          align: `#approach-${strand}`,
          alignOrigin: [0.5, 0.5],
          start: 0,
          end: 0,
        },
      });
    }
    gsap.set('.growth-front', { opacity: 0 });
    gsap.set('.final-line', { opacity: 0, y: 14 });

    const tl = gsap.timeline({ paused: true });
    tl.eventCallback('onUpdate', apply);

    // Scroll drives a target; the timeline eases toward it on the ticker. This
    // is a scrub, just one whose smoothing is not constant.
    //
    // A plain numeric scrub trails the scroll by roughly (velocity x scrub), so
    // whatever is outstanding when the pin releases is the mark still assembling
    // as the hero slides away. Padding the pin to cover that is self-defeating:
    // sized for fast scrolling it becomes dead scroll for slow scrolling, which
    // is the opposite complaint.
    //
    // So the smoothing tapers instead. Through the body of the animation the
    // time constant is full and the motion is fluid; past LOCK_FROM it falls
    // away, so by the end of the range the timeline is locked to the scroll and
    // has already arrived. Smoothness where it is felt, convergence where it
    // matters — and the leftover pinned distance stays a small deliberate beat
    // rather than a lag allowance.
    let target = 0;
    let current = 0;

    const trigger = ScrollTrigger.create({
      trigger: containerRef.current,
      start: 'top top',
      // Measured from the sticky child rather than the viewport. 'bottom bottom'
      // resolves against window.innerHeight, but the child is sized in svh, and
      // on a phone innerHeight exceeds svh by the browser chrome — so the
      // timeline used to finish a chrome-height before the pin let go, and that
      // gap was pinned scroll with nothing left to animate.
      end: () => {
        const track = containerRef.current?.offsetHeight ?? 0;
        const frame = stickyRef.current?.offsetHeight ?? 0;
        const pin = Math.max(1, track - frame);
        return `+=${Math.max(1, pin - Math.min(BREATHE_MAX, pin * BREATHE_RATIO))}`;
      },
      invalidateOnRefresh: true,
      onUpdate: (self) => { target = self.progress; },
      onRefresh: (self) => { target = self.progress; },
    });

    const tick = (_time: number, deltaMs: number) => {
      if (current === target) return;
      const lock = target <= LOCK_FROM ? 0 : (target - LOCK_FROM) / (1 - LOCK_FROM);
      const tau = Math.max(TAU_MIN, SMOOTH_TAU * (1 - lock));
      const k = 1 - Math.exp(-(deltaMs / 1000) / tau);
      const next = current + (target - current) * k;
      current = Math.abs(target - next) < 0.0005 ? target : next;
      tl.progress(current);
    };
    gsap.ticker.add(tick);

    // The labels hand over to the motion rather than cutting away from it.
    tl.to('.initial-label', { opacity: 0, ease: 'power1.inOut', duration: T.labelOutDur }, T.labelOut);

    // --- Journey: dot + trail head share one easing so the trail is literally
    // the dot's own history — a calm departure, momentum through the middle
    // (where the trail stretches), and a settle into the connection (where it
    // retracts to nothing on its own). Quadratic rather than cubic: a cubic
    // ease-in opened so gently that the opening scroll moved the dots
    // imperceptibly, which reads as lag rather than restraint.
    const flowEase = 'power1.inOut';
    for (const strand of STRANDS) {
      tl.to(
        `.dot-${strand}`,
        {
          motionPath: { path: `#approach-${strand}`, align: `#approach-${strand}`, alignOrigin: [0.5, 0.5] },
          duration: T.journeyDur,
          ease: flowEase,
        },
        T.journey
      );
      tl.to(head[strand], { v: 1, duration: T.journeyDur, ease: flowEase }, T.journey);
      TRAIL_LAYERS.forEach((layer, i) => {
        tl.to(tail[strand][i], { v: 1, duration: T.journeyDur, ease: flowEase }, T.journey + layer.lag);
      });
    }

    // --- Contact: the dots bloom fractionally and dissolve as the mark takes over.
    tl.to('.dot-petrol, .dot-sand', { scale: 1.3, duration: 0.03, ease: 'power2.out' }, T.absorb);
    tl.to('.dot-petrol, .dot-sand', { scale: 0, opacity: 0, duration: 0.06, ease: 'power2.in' }, T.absorb + 0.03);
    tl.to('.trail', { opacity: 0, duration: 0.07, ease: 'power1.out' }, T.absorb + 0.02);

    // --- Formation: the ribbon unfurls out of the connection point.
    for (const strand of STRANDS) {
      MASK_LAYERS[strand].forEach((layer, i) => {
        tl.to(
          spread[strand][i],
          { v: 1, duration: T.unfurlDur, ease: 'power1.out' },
          T.unfurl + layer.lag
        );
      });
    }
    tl.to('.growth-front', { opacity: 0.8, duration: 0.04, ease: 'power1.out' }, T.unfurl);
    tl.to('.growth-front', { opacity: 0, duration: 0.24, ease: 'power2.in' }, T.unfurl + 0.12);

    // --- Resolution: the literal brand asset settles in over a reveal that has
    // already converged on it (the two are identical to within antialiasing), so
    // there is nothing to see cross over. The reveal is only dropped afterwards,
    // which keeps the composite from thinning mid-transition.
    tl.to('.wasl-final', { opacity: 1, duration: T.settleDur, ease: 'sine.inOut' }, T.settle);
    tl.set('.ribbon-reveal', { opacity: 0 }, T.settle + T.settleDur);

    tl.to(
      '.final-line',
      { opacity: 1, y: 0, duration: T.textDur, ease: 'power2.out', stagger: T.textStagger },
      T.text
    );

    apply();

    // Dev affordance: ?heroProgress=0.42 freezes the timeline at one beat.
    const frozen = new URLSearchParams(window.location.search).get('heroProgress');
    if (frozen !== null) {
      const at = parseFloat(frozen);
      setTimeout(() => {
        trigger.disable();
        gsap.ticker.remove(tick);
        tl.progress(at);
        apply();
        (window as unknown as { __hero?: (p: number) => void }).__hero = (p: number) => {
          tl.progress(p);
          apply();
        };
      }, 300);
    }

    return () => {
      gsap.ticker.remove(tick);
      trigger.kill();
    };
  }, { dependencies: [isMobile, prefersReducedMotion], scope: containerRef });

  if (prefersReducedMotion) {
    return (
      <section className="relative bg-alabaster">
        <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
          <img src={waslLogo} alt="" aria-hidden="true" className="w-[210px] sm:w-[300px] h-auto" />
          <div className="mt-10 text-center">
            <p className="text-2xl sm:text-3xl font-semibold tracking-tight text-petrol">WASL</p>
            <p className="mt-1 text-base sm:text-lg font-medium text-petrol/80 font-arabic">وصل</p>
          </div>
          <h1 className="mt-6 text-center text-xl sm:text-2xl font-medium tracking-tight text-charcoal/90 max-w-lg">
            Bringing businesses closer to their customers.
          </h1>
          <p className="mt-2 text-center text-base font-medium text-petrol/70 font-arabic">
            نقرب الأعمال من عملائها.
          </p>
        </div>
      </section>
    );
  }

  const translate = `translate(${layout.logo.x} ${layout.logo.y})`;
  // Same unit as the sticky child (svh), so the split is exactly what it looks
  // like: (height - 100svh) of scrubbed animation, then 100svh of the finished
  // hero clearing the screen. In vh this drifted on phones, because vh measures
  // the chrome-hidden viewport while the child measures the chrome-shown one —
  // which stretched the animation and pushed the release out. On desktop the two
  // units are identical, so this leaves that case unchanged.
  // Now that the timeline's end is derived from the pin distance, a longer
  // track cannot reintroduce dead scroll — the animation simply spreads over
  // it. Mobile is back to a generous run; 145svh crossed too fast, which left
  // scrub lag visible at the handover.
  const scrollHeight = '165svh';

  const renderLabel = (strand: Strand, english: string, arabic: string) => (
    <foreignObject
      x={strand === 'sand' ? layout.label.sandX : layout.label.petrolX}
      y={layout.label.y}
      width={layout.label.w}
      height={layout.label.h}
      className="initial-label"
    >
      <div className="flex flex-col items-center text-center">
        <p className="text-[10px] sm:text-sm font-semibold uppercase tracking-[0.16em] sm:tracking-[0.2em] text-charcoal/60">
          {english}
        </p>
        <p className="mt-1 text-xs sm:text-base font-medium text-petrol/50 font-arabic">{arabic}</p>
      </div>
    </foreignObject>
  );

  return (
    <section className="relative bg-alabaster">
      <h1 className="sr-only">Bringing businesses closer to their customers.</h1>

      <div ref={containerRef} style={{ height: scrollHeight }} className="relative w-full">
        {/* svh keeps the composition inside the visible viewport when mobile
            browser chrome is showing; h-screen is the fallback. */}
        <div
          ref={stickyRef}
          className="sticky top-0 h-screen w-full overflow-hidden"
          style={{ height: '100svh' }}
        >
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <svg
              viewBox={layout.viewBox}
              className="w-full h-full max-h-[88vh] max-w-[1200px]"
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                {STRANDS.map((strand) => (
                  <path
                    key={strand}
                    id={`approach-${strand}`}
                    ref={(el) => { approachRefs.current[strand] = el; }}
                    d={layout.approach[strand]}
                    fill="none"
                  />
                ))}

                {STRANDS.map((strand) => (
                  <mask key={strand} id={`mask-${strand}`}>
                    <g transform={translate}>
                      {MASK_LAYERS[strand].map((layer, i) => (
                        <path
                          key={layer.width}
                          ref={(el) => { maskRefs.current[strand][i] = el; }}
                          d={RIBBON[strand]}
                          fill="none"
                          stroke="white"
                          strokeWidth={layer.width}
                          strokeLinecap="round"
                          // The traced spine has a few very tight turns; miter
                          // joins throw spikes off them at these widths.
                          strokeLinejoin="round"
                          style={{ visibility: 'hidden' }}
                        />
                      ))}
                      {OCCLUDED[strand] && (
                        <path
                          ref={(el) => { occluderRefs.current[strand] = el; }}
                          d={RIBBON[strand]}
                          fill="none"
                          stroke="black"
                          strokeWidth={30}
                          strokeLinecap="butt"
                        />
                      )}
                    </g>
                  </mask>
                ))}
              </defs>

              {renderLabel('sand', 'YOUR BUSINESS', 'عملك')}
              {renderLabel('petrol', 'YOUR CUSTOMERS', 'عملاؤك')}

              {/* Measurement-only copies of the ribbon spines. */}
              <g transform={translate} opacity={0} aria-hidden="true">
                {STRANDS.map((strand) => (
                  <path
                    key={strand}
                    ref={(el) => { ribbonRefs.current[strand] = el; }}
                    d={RIBBON[strand]}
                    fill="none"
                  />
                ))}
              </g>

              {/* Both strands uncover the finished mark itself rather than the
                  colour-separated layers: those layers only composite correctly
                  as a pair (each carries semi-transparent blend pixels where the
                  other crosses it), so revealing one ahead of the other washed
                  the overlaps out. Reading from the real asset means every pixel
                  that appears is final from the moment it appears. */}
              <g className="ribbon-reveal">
                <image href={waslLogo} x={layout.logo.x} y={layout.logo.y} width={LOGO_W} height={LOGO_H} mask="url(#mask-sand)" />
                <image href={waslLogo} x={layout.logo.x} y={layout.logo.y} width={LOGO_W} height={LOGO_H} mask="url(#mask-petrol)" />
              </g>

              <g className="wasl-final" style={{ opacity: 0 }}>
                <image href={waslLogo} x={layout.logo.x} y={layout.logo.y} width={LOGO_W} height={LOGO_H} />
              </g>

              {/* Bright edges riding the two growth fronts of each strand. */}
              <g transform={translate}>
                {STRANDS.map((strand) =>
                  [0, 1].map((dir) => (
                    <path
                      key={`${strand}-${dir}`}
                      ref={(el) => { frontRefs.current[strand][dir] = el; }}
                      className="growth-front"
                      d={RIBBON[strand]}
                      fill="none"
                      stroke={strand === 'petrol' ? PETROL : SAND}
                      strokeWidth={strand === 'petrol' ? 2.4 : 3}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{ visibility: 'hidden' }}
                    />
                  ))
                )}
              </g>

              {/* Comet trails. */}
              {STRANDS.map((strand) =>
                TRAIL_LAYERS.map((layer, i) => (
                  <path
                    key={`${strand}-${i}`}
                    ref={(el) => { trailRefs.current[strand][i] = el; }}
                    className="trail"
                    d={layout.approach[strand]}
                    fill="none"
                    stroke={strand === 'petrol' ? PETROL : SAND}
                    strokeWidth={layer.width * STRAND_GAIN[strand].width}
                    strokeLinecap="round"
                    opacity={Math.min(1, layer.opacity * STRAND_GAIN[strand].opacity)}
                    style={{ visibility: 'hidden' }}
                  />
                ))
              )}

              <circle r="4.5" fill={SAND} className="dot-sand" />
              <circle r="4" fill={PETROL} className="dot-petrol" />
            </svg>
          </div>

          {/* The mark is centred in the viewBox, which is centred in this
              container, so on phones the lock-up is anchored to that centre and
              pushed clear by the mark's own half-height (117 viewBox units of a
              600-unit-wide box = 19.5vw while width-limited, which is every
              phone) plus a fixed gap. A percentage from the bottom cannot hold
              that spacing: it collapsed into the mark on shorter viewports.
              Desktop keeps its existing bottom anchor. */}
          <div className="absolute inset-x-0 top-1/2 mt-[calc(19.5vw+54px)] md:top-auto md:mt-0 md:bottom-[12%] flex flex-col items-center px-6 text-center pointer-events-none">
            <p className="final-line text-2xl sm:text-3xl font-semibold tracking-tight text-petrol">WASL</p>
            <p className="final-line mt-1 text-base sm:text-lg font-medium text-petrol/80 font-arabic">وصل</p>
            <p className="final-line mt-5 text-lg sm:text-2xl font-medium tracking-tight text-charcoal/90 max-w-lg">
              Bringing businesses closer to their customers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
