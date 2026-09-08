import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { useGSAP } from '@gsap/react';

import logoPetrol from '../../../assets/logo-petrol.png';
import logoSand from '../../../assets/logo-sand.png';
import waslLogo from '../../../assets/WASL logo.png';

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

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
  const debugProgressRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const prefersReducedMotion = usePrefersReducedMotion();

  const searchParams = new URLSearchParams(typeof window !== 'undefined' ? window.location.search : '');
  const isDebug = searchParams.has('debugHero');
  
  // Debug URL Toggles
  const debugMaskSize = searchParams.has('maskSize') ? parseInt(searchParams.get('maskSize')!) : 45;
  const hideComposed = searchParams.get('hideComposed') === 'true';
  const hideSeparated = searchParams.get('hideSeparated') === 'true';
  const hideDots = searchParams.get('hideDots') === 'true';
  const hideThin = searchParams.get('hideThin') === 'true';

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

  useGSAP(() => {
    if (prefersReducedMotion) return;

    // MEASURE VISIBLE MASTER PATHS ONLY
    const masterPetrol = document.querySelector<SVGPathElement>('#master-petrol');
    const masterSand = document.querySelector<SVGPathElement>('#master-sand');
    const petrolLength = masterPetrol?.getTotalLength() ?? 0;
    const sandLength = masterSand?.getTotalLength() ?? 0;

    // EXPLICIT INITIALIZATION
    gsap.set('.thin-petrol', { strokeDasharray: petrolLength, strokeDashoffset: petrolLength });
    gsap.set(
      `.thick-petrol-10, .thick-petrol-20, .thick-petrol-30, .thick-petrol-${debugMaskSize}`,
      { strokeDasharray: petrolLength, strokeDashoffset: petrolLength }
    );

    gsap.set('.thin-sand', { strokeDasharray: sandLength, strokeDashoffset: sandLength });
    gsap.set(
      `.thick-sand-10, .thick-sand-20, .thick-sand-30, .thick-sand-${debugMaskSize}`,
      { strokeDasharray: sandLength, strokeDashoffset: sandLength }
    );

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 1, 
        onUpdate: (self) => {
          if (isDebug && debugProgressRef.current) {
            const pLen = masterPetrol?.getTotalLength()?.toFixed(1) ?? '0';
            const sLen = masterSand?.getTotalLength()?.toFixed(1) ?? '0';

            const getOffset = (sel: string) => {
              const el = document.querySelector<SVGPathElement>(sel);
              return el ? parseFloat(el.style.strokeDashoffset || '0').toFixed(1) : 'N/A';
            };

            debugProgressRef.current.innerHTML = `
              <strong>Diagnostic HUD</strong><br/>
              Scroll: ${(self.progress * 100).toFixed(1)}% | Time: ${tl.time().toFixed(2)}s<br/>
              Master Petrol Length: ${pLen}<br/>
              Master Sand Length: ${sLen}<br/>
              Mask P10: offset ${getOffset('.thick-petrol-10')}<br/>
              Mask P20: offset ${getOffset('.thick-petrol-20')}<br/>
              Mask P30: offset ${getOffset('.thick-petrol-30')}<br/>
              Mask P${debugMaskSize}: offset ${getOffset(`.thick-petrol-${debugMaskSize}`)}<br/>
              Mask S10: offset ${getOffset('.thick-sand-10')}<br/>
              Mask S20: offset ${getOffset('.thick-sand-20')}<br/>
              Mask S30: offset ${getOffset('.thick-sand-30')}<br/>
              Mask S${debugMaskSize}: offset ${getOffset(`.thick-sand-${debugMaskSize}`)}<br/>
            `;
          }
        }
      }
    });

    // Fade out labels
    tl.to('.initial-label', { opacity: 0, duration: 0.2, ease: "power1.inOut" }, 0.05);

    const motionDuration = 0.70;
    const baseStart = 0.1;

    tl.to('.dot-petrol', {
      motionPath: { path: '#master-petrol', align: '#master-petrol', alignOrigin: [0.5, 0.5] },
      duration: motionDuration, ease: "power1.inOut"
    }, baseStart);
    
    tl.to('.dot-sand', {
      motionPath: { path: '#master-sand', align: '#master-sand', alignOrigin: [0.5, 0.5] },
      duration: motionDuration, ease: "power1.inOut"
    }, baseStart);

    tl.to('.thin-petrol, .thin-sand', { strokeDashoffset: 0, duration: motionDuration, ease: "power1.inOut" }, baseStart);

    const lagStep = 0.02;
    [10, 20, 30, debugMaskSize].forEach((width, index) => {
      const delay = baseStart + ((index + 1) * lagStep);
      tl.to(`.thick-petrol-${width}, .thick-sand-${width}`, { 
        strokeDashoffset: 0, 
        duration: motionDuration, 
        ease: "power1.inOut" 
      }, delay);
    });

    tl.addLabel("handoff", 0.88);
    tl.to('.separated-logo', { opacity: 0, duration: 0.08, ease: "none" }, "handoff");
    tl.to('.composed-logo', { opacity: 1, duration: 0.08, ease: "none" }, "handoff");
    tl.to('.dot-petrol, .dot-sand, .thin-petrol, .thin-sand', { opacity: 0, duration: 0.08 }, "handoff");
    tl.to('.final-text', { opacity: 1, duration: 0.08, ease: "power1.out" }, 0.90);

    const urlProgress = searchParams.get('heroProgress');
    if (isDebug && urlProgress) {
      setTimeout(() => {
        tl.scrollTrigger?.disable();
        tl.progress(parseFloat(urlProgress));
      }, 500);
    }
    
  }, { dependencies: [isMobile, prefersReducedMotion, debugMaskSize], scope: containerRef });

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
          Initializing Diagnostic HUD...
        </div>
      )}

      <div ref={containerRef} style={{ height: scrollHeight }} className="relative w-full">
        <div className="sticky top-0 flex h-screen w-full flex-col items-center justify-center overflow-hidden">
          
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <svg 
              viewBox={viewBox} 
              className="w-full h-full max-h-[90vh] max-w-[1200px]"
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                <path id="master-petrol" d={petrolPath} fill="none" />
                <path id="master-sand" d={sandPath} fill="none" />

                <mask id="mask-petrol">
                  <path d={petrolPath} fill="none" stroke="white" strokeWidth="10" strokeLinecap="round" className="draw-path thick-petrol-10" />
                  <path d={petrolPath} fill="none" stroke="white" strokeWidth="20" strokeLinecap="round" className="draw-path thick-petrol-20" />
                  <path d={petrolPath} fill="none" stroke="white" strokeWidth="30" strokeLinecap="round" className="draw-path thick-petrol-30" />
                  <path d={petrolPath} fill="none" stroke="white" strokeWidth={debugMaskSize} strokeLinecap="round" className={`draw-path thick-petrol-${debugMaskSize}`} />
                </mask>

                <mask id="mask-sand">
                  <path d={sandPath} fill="none" stroke="white" strokeWidth="10" strokeLinecap="round" className="draw-path thick-sand-10" />
                  <path d={sandPath} fill="none" stroke="white" strokeWidth="20" strokeLinecap="round" className="draw-path thick-sand-20" />
                  <path d={sandPath} fill="none" stroke="white" strokeWidth="30" strokeLinecap="round" className="draw-path thick-sand-30" />
                  <path d={sandPath} fill="none" stroke="white" strokeWidth={debugMaskSize} strokeLinecap="round" className={`draw-path thick-sand-${debugMaskSize}`} />
                </mask>
              </defs>

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

              {!hideSeparated && (
                <g className="separated-logo">
                  <image href={logoSand} x={logoX} y={logoY} width={logoWidth} height={logoHeight} mask="url(#mask-sand)" />
                  <image href={logoPetrol} x={logoX} y={logoY} width={logoWidth} height={logoHeight} mask="url(#mask-petrol)" />
                </g>
              )}

              {!hideComposed && (
                <g className="composed-logo" style={{ opacity: 0 }}>
                  <image href={waslLogo} x={logoX} y={logoY} width={logoWidth} height={logoHeight} />
                </g>
              )}

              {!hideThin && (
                <>
                  <path d={petrolPath} fill="none" stroke="#18414b" strokeWidth="2" className="draw-path thin-petrol" />
                  <path d={sandPath} fill="none" stroke="#dcccb6" strokeWidth="2" className="draw-path thin-sand" />
                </>
              )}

              {!hideDots && (
                <>
                  <circle r="4" fill="#18414b" className="dot-petrol" />
                  <circle r="4" fill="#dcccb6" className="dot-sand" />
                </>
              )}
            </svg>
          </div>

          <div className="final-text absolute inset-0 flex flex-col items-center justify-center pointer-events-none" style={{ opacity: 0 }}>
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
