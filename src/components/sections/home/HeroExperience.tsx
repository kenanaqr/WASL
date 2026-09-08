import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { useGSAP } from '@gsap/react';

import waslLogo from '../../../assets/WASL logo.png';

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

/**
 * Hook to detect mobile viewport.
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
 * Hook to detect prefers-reduced-motion.
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

interface HeroExperienceProps {
  onNavigate: (path: string) => void;
}

export const HeroExperience: React.FC<HeroExperienceProps> = ({ onNavigate: _onNavigate }) => {
  void _onNavigate;

  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const prefersReducedMotion = usePrefersReducedMotion();

  // Desktop paths
  const desktopPetrolPath = "M 100,300 Q 200,400 363,348 C 328,283 403,228 500,300 C 604,373 654,333 634,258";
  const desktopSandPath = "M 900,300 Q 800,400 634,348 C 669,283 594,228 500,300 C 394,373 344,333 364,258";

  // Mobile paths
  const mobilePetrolPath = "M 300,100 Q 50,300 163,548 C 128,483 203,428 300,500 C 404,573 454,533 434,458";
  const mobileSandPath = "M 300,900 Q 550,700 434,548 C 469,483 394,428 300,500 C 194,573 144,533 164,458";

  const petrolPath = isMobile ? mobilePetrolPath : desktopPetrolPath;
  const sandPath = isMobile ? mobileSandPath : desktopSandPath;
  
  const viewBox = isMobile ? "0 0 600 1000" : "0 0 1000 600";
  const logoX = isMobile ? 123.5 : 323.5;
  const logoY = isMobile ? 383 : 183;
  const logoWidth = 353;
  const logoHeight = 234;

  const searchParams = new URLSearchParams(typeof window !== 'undefined' ? window.location.search : '');
  const isDebug = searchParams.has('debugHero');
  const debugProgressRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (prefersReducedMotion) return;

    const paths = gsap.utils.toArray<SVGPathElement>('.draw-path');
    paths.forEach(p => {
      const length = p.getTotalLength();
      gsap.set(p, { strokeDasharray: length, strokeDashoffset: length });
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 1, 
        onUpdate: (self) => {
          if (isDebug && debugProgressRef.current) {
            debugProgressRef.current.innerText = `Scroll: ${self.progress.toFixed(3)} | Time: ${tl.time().toFixed(1)}s`;
          }
        }
      }
    });

    // Master mapping: timeline duration 100 = 0% to 100% scroll
    
    // Labels for absolute clarity
    tl.addLabel("start", 0);
    tl.addLabel("labels-fade", 5);
    tl.addLabel("motion-start", 10);
    tl.addLabel("handoff", 95);
    tl.addLabel("end", 100);

    // Initial labels fade out
    tl.to('.initial-label', { opacity: 0, duration: 15, ease: "power1.inOut" }, "labels-fade");

    // TRUE VECTOR DRAWING PHASE
    // We no longer mask a PNG. We literally draw the vector ribbon. This prevents any "forward leaking" of geometry.
    const pathDuration = 73;
    
    // The Dot (Leading Edge)
    tl.to('.dot-petrol', {
      motionPath: { path: '#master-petrol', align: '#master-petrol', alignOrigin: [0.5, 0.5] },
      duration: pathDuration, ease: "power2.inOut"
    }, "motion-start");
    
    tl.to('.dot-sand', {
      motionPath: { path: '#master-sand', align: '#master-sand', alignOrigin: [0.5, 0.5] },
      duration: pathDuration, ease: "power2.inOut"
    }, "motion-start");

    // Thin trailing line
    tl.to('.thin-petrol, .thin-sand', { 
      strokeDashoffset: 0, duration: pathDuration, ease: "power2.inOut" 
    }, "motion-start");

    // Progressive thicker vector strokes (The Tapered Brush)
    const lagDelays = [4, 8, 12]; 
    const widths = [15, 30, 50];
    
    widths.forEach((width, index) => {
      const delay = lagDelays[index];
      const startTime = 10 + delay;
      
      // Hide the thick paths initially to prevent round-linecap dot artifacts at origin
      gsap.set(`.thick-petrol-${width}, .thick-sand-${width}`, { opacity: 0 });
      tl.set(`.thick-petrol-${width}, .thick-sand-${width}`, { opacity: 1 }, startTime);

      tl.to(`.thick-petrol-${width}, .thick-sand-${width}`, { 
        strokeDashoffset: 0, duration: pathDuration, ease: "power2.inOut" 
      }, startTime);
    });

    // FIDELITY HANDOFF (95 - 100)
    // The thickest path finishes exactly at 10 + 12 + 73 = 95s.
    // The vector stage perfectly crossfades into the exact raster WASL logo.
    tl.to('.vector-stage', { opacity: 0, duration: 5, ease: "none" }, "handoff");
    tl.to('.composed-logo', { opacity: 1, duration: 5, ease: "none" }, "handoff");

    // Final Text gracefully fades in
    tl.to('.final-text', { opacity: 1, duration: 4, ease: "power1.out" }, 96);

    // Development visual test mode (freeze at progress via query param)
    const urlProgress = searchParams.get('heroProgress');
    if (isDebug && urlProgress) {
      setTimeout(() => {
        tl.scrollTrigger?.disable();
        tl.progress(parseFloat(urlProgress));
      }, 500);
    }
    
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

  const scrollHeight = isMobile ? '160vh' : '180vh';

  return (
    <section className="relative bg-alabaster">
      <h1 className="sr-only">Bringing businesses closer to their customers.</h1>

      {isDebug && (
        <div 
          ref={debugProgressRef}
          className="fixed top-4 right-4 z-50 bg-black text-white px-4 py-2 font-mono text-sm rounded shadow-lg pointer-events-none"
        >
          Scroll: 0.000 | Time: 0.0s
        </div>
      )}

      <div ref={containerRef} style={{ height: scrollHeight }} className="relative w-full">
        <div className="sticky top-0 flex h-screen w-full flex-col items-center justify-center overflow-hidden">
          
          {/* SVG Vector Stage */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <svg 
              viewBox={viewBox} 
              className="w-full h-full max-h-[90vh] max-w-[1200px]"
              preserveAspectRatio="xMidYMid meet"
            >
              <foreignObject 
                x={isMobile ? 150 : 0} 
                y={isMobile ? 10 : 200} 
                width="300" height="80" 
                className="initial-label"
              >
                <div className="flex flex-col items-center text-center">
                  <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-charcoal/60">YOUR BUSINESS</p>
                  <p className="mt-1 text-sm sm:text-base font-medium text-petrol/50 font-arabic">عملك</p>
                </div>
              </foreignObject>

              <foreignObject 
                x={isMobile ? 150 : 700} 
                y={isMobile ? 920 : 200} 
                width="300" height="80" 
                className="initial-label"
              >
                <div className="flex flex-col items-center text-center">
                  <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-charcoal/60">YOUR CUSTOMERS</p>
                  <p className="mt-1 text-sm sm:text-base font-medium text-petrol/50 font-arabic">عملاؤك</p>
                </div>
              </foreignObject>

              {/* TRUE VECTOR STAGE (No PNG Masking) */}
              <g className="vector-stage">
                {/* Master Paths (invisible, used for MotionPath tracking) */}
                <path id="master-petrol" d={petrolPath} fill="none" />
                <path id="master-sand" d={sandPath} fill="none" />

                {/* Sand Ribbon (Bottom layer) */}
                <path d={sandPath} fill="none" stroke="#dcccb6" strokeWidth="2" className="draw-path thin-sand" />
                <path d={sandPath} fill="none" stroke="#dcccb6" strokeWidth="15" strokeLinecap="round" className="draw-path thick-sand-15" />
                <path d={sandPath} fill="none" stroke="#dcccb6" strokeWidth="30" strokeLinecap="round" className="draw-path thick-sand-30" />
                <path d={sandPath} fill="none" stroke="#dcccb6" strokeWidth="50" strokeLinecap="round" className="draw-path thick-sand-50" />

                {/* Petrol Ribbon (Top layer) */}
                <path d={petrolPath} fill="none" stroke="#18414b" strokeWidth="2" className="draw-path thin-petrol" />
                <path d={petrolPath} fill="none" stroke="#18414b" strokeWidth="15" strokeLinecap="round" className="draw-path thick-petrol-15" />
                <path d={petrolPath} fill="none" stroke="#18414b" strokeWidth="30" strokeLinecap="round" className="draw-path thick-petrol-30" />
                <path d={petrolPath} fill="none" stroke="#18414b" strokeWidth="50" strokeLinecap="round" className="draw-path thick-petrol-50" />

                {/* Leading Dots */}
                <circle r="4" fill="#18414b" className="dot-petrol" />
                <circle r="4" fill="#dcccb6" className="dot-sand" />
              </g>

              {/* Composed PNG Logo (crossfades exactly at the end for ultimate fidelity) */}
              <g className="composed-logo" style={{ opacity: 0 }}>
                <image 
                  href={waslLogo} 
                  x={logoX} y={logoY} 
                  width={logoWidth} height={logoHeight} 
                />
              </g>
            </svg>
          </div>

          {/* Final Text Container */}
          <div className="final-text absolute inset-0 flex flex-col items-center justify-center pointer-events-none" style={{ opacity: 0 }}>
            {/* Offset downwards so it sits below the final logo */}
            <div className="mt-[280px] text-center">
              <p className="text-2xl sm:text-3xl font-semibold tracking-tight text-petrol">WASL</p>
              <p className="mt-1 text-base sm:text-lg font-medium text-petrol/80 font-arabic">وصل</p>
              <h1 className="mt-6 text-xl sm:text-2xl font-medium tracking-tight text-charcoal/90 max-w-lg mx-auto">
                Bringing businesses closer to their customers.
              </h1>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
