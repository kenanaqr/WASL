import { useEffect, useState } from 'react';

const KNOWN_ROUTES = new Set([
  '/',
  '/services',
  '/work',
  '/about',
  '/contact',
  '/contact/kenan',
  '/contact/mamduh',
  '/demos/cafe',
  '/demos/restaurant',
  '/demos/barbershop',
]);

export function normalizePath(rawPath: string): string {
  if (!rawPath || rawPath === '/') {
    return '/';
  }
  // Strip any query parameters or hash fragments
  const clean = rawPath.split(/[?#]/)[0];
  if (!clean || clean === '/') {
    return '/';
  }
  // Ensure leading slash and remove trailing slashes
  const withLeadingSlash = clean.startsWith('/') ? clean : `/${clean}`;
  return withLeadingSlash.replace(/\/+$/, '') || '/';
}

function getResolvedRoute(): string {
  if (typeof window === 'undefined') {
    return '/';
  }

  const hash = window.location.hash;

  // Handle legacy hash routes like /#/services or /#services
  if (hash) {
    if (hash === '#' || hash === '#/') {
      const cleanPath = normalizePath(window.location.pathname);
      window.history.replaceState(null, '', cleanPath);
      return cleanPath;
    }

    if (hash.startsWith('#/')) {
      const target = normalizePath(hash.slice(1));
      window.history.replaceState(null, '', target);
      return target;
    }

    const candidate = normalizePath(hash.slice(1));
    if (KNOWN_ROUTES.has(candidate)) {
      window.history.replaceState(null, '', candidate);
      return candidate;
    }
  }

  // Handle path-based routes
  const pathname = normalizePath(window.location.pathname);
  if (window.location.pathname !== pathname) {
    window.history.replaceState(null, '', pathname);
  }
  return pathname;
}

/**
 * Lightweight, zero-dependency History API client router.
 * Supports clean path URLs, back/forward history, and legacy hash URL migration.
 */
export function useRouter() {
  const [currentPath, setCurrentPath] = useState<string>(getResolvedRoute);

  useEffect(() => {
    const handlePopState = () => {
      const nextPath = getResolvedRoute();
      setCurrentPath(nextPath);
      window.scrollTo(0, 0);
    };

    const handleHashChange = () => {
      const hash = window.location.hash;
      if (!hash) return;
      if (
        hash === '#' ||
        hash === '#/' ||
        hash.startsWith('#/') ||
        KNOWN_ROUTES.has(normalizePath(hash.slice(1)))
      ) {
        const nextPath = getResolvedRoute();
        setCurrentPath(nextPath);
        window.scrollTo(0, 0);
      }
    };

    window.addEventListener('popstate', handlePopState);
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const navigate = (path: string) => {
    const targetPath = normalizePath(path);
    if (window.location.pathname !== targetPath || window.location.hash) {
      window.history.pushState(null, '', targetPath);
      setCurrentPath(targetPath);
      window.scrollTo(0, 0);
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }
  };

  return {
    currentPath,
    navigate,
  };
}
