import React, { useRef, useMemo } from 'react';
import { useScrollProgress } from '../../../hooks/useScrollProgress';
import logoPetrol from '../../../assets/logo-petrol.png';
import logoSand from '../../../assets/logo-sand.png';
import waslLogo from '../../../assets/WASL logo.png';

/**
 * Scroll-animation configuration.
 * Adjust these values to tune the feel of the convergence.
 */
const CONFIG = {
  /** Height of the scroll container on desktop (controls animation duration). */
  desktopScrollHeight: '170vh',
  /** Height of the scroll container on mobile (<768px). */
  mobileScrollHeight: '150vh',
  /** Desktop: horizontal separation distance per side (px). */
  desktopSeparation: 140,
  /** Mobile: vertical separation distance per side (px). */
  mobileSeparation: 90,
};

/**
 * Attempt to detect mobile. We use this to switch between horizontal (desktop)
 * and vertical (mobile) convergence direction. The component also uses CSS
 * media queries for layout, so this is only for transform direction.
 */
function useIsMobile(): boolean {
  const [isMobile, setIsMobile] = React.useState(() =>
    typeof window !== 'undefined' ? window.innerWidth < 768 : false
  );

  React.useEffect(() => {
    if (typeof window === 'undefined') return;
    const query = window.matchMedia('(max-width: 767px)');
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    query.addEventListener('change', handler);
    return () => query.removeEventListener('change', handler);
  }, []);

  return isMobile;
}

/**
 * Attempt to detect if the user prefers reduced motion.
 */
function usePrefersReducedMotion(): boolean {
  const [prefers, setPrefers] = React.useState(() =>
    typeof window !== 'undefined'
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
      : false
  );

  React.useEffect(() => {
    if (typeof window === 'undefined') return;
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handler = (e: MediaQueryListEvent) => setPrefers(e.matches);
    query.addEventListener('change', handler);
    return () => query.removeEventListener('change', handler);
  }, []);

  return prefers;
}

/**
 * Helper to calculate a cubic Bezier curve point
 */
function getBezierPoint(t: number, p0: number, p1: number, p2: number, p3: number): number {
  const u = 1 - t;
  const tt = t * t;
  const uu = u * u;
  const uuu = uu * u;
  const ttt = tt * t;

  let p = uuu * p0;
  p += 3 * uu * t * p1;
  p += 3 * u * tt * p2;
  p += ttt * p3;

  return p;
}

/**
 * Map a value from one range to a clamped 0–1 range.
 */
function mapRange(value: number, inMin: number, inMax: number): number {
  const raw = (value - inMin) / (inMax - inMin);
  return Math.max(0, Math.min(1, raw));
}

interface HeroExperienceProps {
  onNavigate: (path: string) => void;
}

export const HeroExperience: React.FC<HeroExperienceProps> = ({ onNavigate: _onNavigate }) => {
  void _onNavigate; // Reserved for future CTA use within hero if needed

  const containerRef = useRef<HTMLDivElement>(null);
  const scrollProgress = useScrollProgress(containerRef);
  const isMobile = useIsMobile();
  const prefersReducedMotion = usePrefersReducedMotion();

  // Compute all visual states from scroll progress
  const state = useMemo(() => {
    const p = scrollProgress;

    // Logo convergence: 0.00 → 0.80
    // We want the primary convergence to happen here, slowing down significantly at the end.
    const convergenceRaw = mapRange(p, 0, 0.80);
    // Custom easing: fast start, very slow precise finish
    const convergence = 1 - Math.pow(1 - convergenceRaw, 4);

    // Labels fade out gradually
    const labelsOpacity = 1 - mapRange(p, 0.20, 0.50);

    // Scroll indicator fades out immediately
    const scrollIndicatorOpacity = 1 - mapRange(p, 0.0, 0.10);

    // Crossfade to original logo at the very end
    const crossfadeProgress = mapRange(p, 0.78, 0.85);

    // Wordmark "WASL" and tagline fade in
    const wordmarkOpacity = mapRange(p, 0.82, 0.88);
    const taglineOpacity = mapRange(p, 0.86, 0.94);

    // ─── CHOREOGRAPHY (MAGNETIC ARC + WEAVE) ───
    
    // We animate t from 0 to 1 based on convergence
    const t = convergence;

    // Desktop: Horizontal sweeping arc
    // Mobile: Vertical sweeping arc
    
    // Petrol (Left/Top piece)
    const pStartX = isMobile ? -30 : -200;
    const pStartY = isMobile ? -150 : -80;
    const pCp1X = isMobile ? -80 : -100;
    const pCp1Y = isMobile ? -50 : -150;
    const pCp2X = isMobile ? 20 : 50;
    const pCp2Y = isMobile ? -20 : -20;
    
    const petrolX = getBezierPoint(t, pStartX, pCp1X, pCp2X, 0);
    const petrolY = getBezierPoint(t, pStartY, pCp1Y, pCp2Y, 0);
    const petrolRotate = (1 - t) * (isMobile ? -25 : -15);
    const petrolScale = 1 + ((1 - t) * 0.15); // starts 15% larger

    // Sand (Right/Bottom piece)
    const sStartX = isMobile ? 30 : 200;
    const sStartY = isMobile ? 150 : 80;
    const sCp1X = isMobile ? 80 : 100;
    const sCp1Y = isMobile ? 50 : 150;
    const sCp2X = isMobile ? -20 : -50;
    const sCp2Y = isMobile ? 20 : 20;

    const sandX = getBezierPoint(t, sStartX, sCp1X, sCp2X, 0);
    const sandY = getBezierPoint(t, sStartY, sCp1Y, sCp2Y, 0);
    const sandRotate = (1 - t) * (isMobile ? 25 : 15);
    const sandScale = 1 + ((1 - t) * 0.15); // starts 15% larger

    // Mask expansion: the ribbons reveal themselves as they come in.
    // Starts at 40% revealed, grows to 100% revealed.
    const maskSize = 40 + (convergence * 60);

    // To prevent the "Lego piece" look, we gently fade the opacity
    // of the pieces themselves just at the very beginning
    const pieceOpacity = mapRange(p, 0, 0.1) + (p > 0.1 ? 1 : 0); // 0->1 in first 10%

    return {
      convergence,
      labelsOpacity,
      scrollIndicatorOpacity,
      crossfadeProgress,
      wordmarkOpacity,
      taglineOpacity,
      petrolX, petrolY, petrolRotate, petrolScale,
      sandX, sandY, sandRotate, sandScale,
      maskSize,
      pieceOpacity: Math.min(1, pieceOpacity),
    };
  }, [scrollProgress, isMobile]);

  // ──────────────────────────────────────────────────────
  // REDUCED MOTION: Show the completed state immediately
  // ──────────────────────────────────────────────────────
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

  // ──────────────────────────────────────────────────────
  // ANIMATED VERSION
  // ──────────────────────────────────────────────────────
  const scrollHeight = isMobile ? CONFIG.mobileScrollHeight : CONFIG.desktopScrollHeight;

  // The CSS mask creates soft edges so they don't look like rectangular cutouts when separated.
  const softMaskStyle = {
    WebkitMaskImage: `radial-gradient(circle, black ${state.maskSize - 20}%, transparent ${state.maskSize + 10}%)`,
    maskImage: `radial-gradient(circle, black ${state.maskSize - 20}%, transparent ${state.maskSize + 10}%)`,
  };

  return (
    <section className="relative bg-alabaster">
      <h1 className="sr-only" style={{ opacity: state.taglineOpacity > 0.5 ? 1 : 0 }}>
        Bringing businesses closer to their customers.
      </h1>

      <div ref={containerRef} style={{ height: scrollHeight }} className="relative">
        <div className="sticky top-0 flex h-screen flex-col items-center justify-center overflow-hidden">

          {/* ─── Labels ─── */}
          <div
            className="absolute z-10 text-center will-change-transform"
            style={{
              opacity: state.labelsOpacity,
              ...(isMobile
                ? { top: '15%', left: '50%', transform: `translate(-50%, ${state.convergence * 20}px)` }
                : { top: '30%', left: '15%', transform: `translate(${state.convergence * 30}px, 0)` }),
            }}
          >
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-charcoal/60">
              YOUR BUSINESS
            </p>
            <p className="mt-1 text-sm sm:text-base font-medium text-petrol/50 font-arabic">
              عملك
            </p>
          </div>

          <div
            className="absolute z-10 text-center will-change-transform"
            style={{
              opacity: state.labelsOpacity,
              ...(isMobile
                ? { bottom: '15%', left: '50%', transform: `translate(-50%, ${state.convergence * -20}px)` }
                : { top: '30%', right: '15%', transform: `translate(${state.convergence * -30}px, 0)` }),
            }}
          >
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-charcoal/60">
              YOUR CUSTOMERS
            </p>
            <p className="mt-1 text-sm sm:text-base font-medium text-petrol/50 font-arabic">
              عملاؤك
            </p>
          </div>

          {/* ─── Animation Container ─── */}
          <div className="relative flex items-center justify-center" aria-hidden="true">
            {/* Petrol half */}
            <img
              src={logoPetrol}
              alt=""
              className="absolute h-auto will-change-transform"
              style={{
                width: isMobile ? '220px' : '320px',
                transform: `translate(${state.petrolX}px, ${state.petrolY}px) rotate(${state.petrolRotate}deg) scale(${state.petrolScale})`,
                opacity: (1 - state.crossfadeProgress) * state.pieceOpacity,
                zIndex: 2,
                ...softMaskStyle,
              }}
              draggable={false}
            />

            {/* Sand half */}
            <img
              src={logoSand}
              alt=""
              className="absolute h-auto will-change-transform"
              style={{
                width: isMobile ? '220px' : '320px',
                transform: `translate(${state.sandX}px, ${state.sandY}px) rotate(${state.sandRotate}deg) scale(${state.sandScale})`,
                opacity: (1 - state.crossfadeProgress) * state.pieceOpacity,
                zIndex: 1,
                ...softMaskStyle,
              }}
              draggable={false}
            />

            {/* Original composed logo */}
            <img
              src={waslLogo}
              alt=""
              className="h-auto"
              style={{
                width: isMobile ? '220px' : '320px',
                opacity: state.crossfadeProgress,
                zIndex: 3,
              }}
              draggable={false}
            />
          </div>

          {/* ─── Scroll indicator ─── */}
          <div
            className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-none"
            style={{ opacity: state.scrollIndicatorOpacity }}
            aria-hidden="true"
          >
            <span className="text-[10px] sm:text-xs font-medium uppercase tracking-[0.15em] text-charcoal/40">
              Scroll
            </span>
            <svg
              className="h-4 w-4 text-charcoal/30"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7" />
            </svg>
          </div>

          {/* ─── Brand reveal: WASL wordmark ─── */}
          <div
            className="absolute flex flex-col items-center text-center transition-none"
            style={{
              opacity: state.wordmarkOpacity,
              bottom: isMobile ? '28%' : '22%',
              left: '50%',
              transform: 'translateX(-50%)',
            }}
          >
            <p className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-petrol">
              WASL
            </p>
            <p className="mt-0.5 text-sm sm:text-base font-medium text-petrol/70 font-arabic">
              وصل
            </p>
          </div>

          {/* ─── Tagline ─── */}
          <div
            className="absolute flex flex-col items-center text-center px-6 transition-none"
            style={{
              opacity: state.taglineOpacity,
              bottom: isMobile ? '16%' : '12%',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '100%',
              maxWidth: '480px',
            }}
          >
            <p className="text-base sm:text-lg lg:text-xl font-medium tracking-tight text-charcoal/80">
              Bringing businesses closer to their customers.
            </p>
            <p className="mt-1.5 text-sm sm:text-base font-medium text-petrol/60 font-arabic">
              نقرب الأعمال من عملائها.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
