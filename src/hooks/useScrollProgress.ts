import { useEffect, useState, useRef, type RefObject } from 'react';

/**
 * Returns a scroll progress value (0–1) based on how far the user has scrolled
 * through a referenced container element.
 *
 * - 0 = container top has just entered the viewport
 * - 1 = container bottom has reached the top of the viewport
 *
 * Respects `prefers-reduced-motion: reduce` by returning 1 immediately.
 * Uses IntersectionObserver to activate/deactivate tracking for performance.
 * Uses requestAnimationFrame to limit updates to display refresh rate.
 */
export function useScrollProgress(containerRef: RefObject<HTMLDivElement | null>): number {
  const [progress, setProgress] = useState(() => {
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return 1;
    }
    return 0;
  });
  const isActiveRef = useRef(false);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    // Respect reduced motion preference
    if (typeof window === 'undefined') return;
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (motionQuery.matches) {
      return;
    }

    const container = containerRef.current;
    if (!container) return;

    const computeProgress = () => {
      if (!isActiveRef.current) return;

      const rect = container.getBoundingClientRect();
      const containerHeight = rect.height;
      const viewportHeight = window.innerHeight;

      // Progress: 0 when the container top is at viewport top,
      // 1 when the container bottom reaches viewport top + viewportHeight
      // i.e. when we've scrolled through (containerHeight - viewportHeight)
      const scrollableDistance = containerHeight - viewportHeight;
      if (scrollableDistance <= 0) {
        setProgress(1);
        return;
      }

      // rect.top starts positive (below viewport) and goes negative (above viewport)
      // When rect.top = 0, we're at the start of the container
      // When rect.top = -(containerHeight - viewportHeight), we've scrolled through it
      const rawProgress = -rect.top / scrollableDistance;
      const clamped = Math.max(0, Math.min(1, rawProgress));
      setProgress(clamped);
    };

    const onScroll = () => {
      if (rafRef.current !== null) return;
      rafRef.current = requestAnimationFrame(() => {
        computeProgress();
        rafRef.current = null;
      });
    };

    // Use IntersectionObserver to activate/deactivate scroll tracking
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          isActiveRef.current = true;
          window.addEventListener('scroll', onScroll, { passive: true });
          computeProgress(); // Compute immediately on intersection
        } else {
          isActiveRef.current = false;
          window.removeEventListener('scroll', onScroll);
          if (rafRef.current !== null) {
            cancelAnimationFrame(rafRef.current);
            rafRef.current = null;
          }
        }
      },
      { threshold: 0, rootMargin: '100px 0px' }
    );

    observer.observe(container);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', onScroll);
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [containerRef]);

  return progress;
}
