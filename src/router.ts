import { useEffect, useState } from 'react';

/**
 * Lightweight, zero-dependency hash-based client router.
 * Supports back/forward browser history and direct URL hash sharing.
 */
export function useRouter() {
  const getPath = () => {
    const hash = window.location.hash;
    if (hash && hash !== '#' && hash !== '#/') {
      return hash.replace(/^#/, '');
    }
    const pathname = window.location.pathname;
    if (pathname && pathname !== '/') {
      return pathname.replace(/\/$/, '');
    }
    return '/';
  };

  const [currentPath, setCurrentPath] = useState<string>(getPath);

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(getPath());
      window.scrollTo(0, 0);
    };

    window.addEventListener('hashchange', handleLocationChange);
    window.addEventListener('popstate', handleLocationChange);
    return () => {
      window.removeEventListener('hashchange', handleLocationChange);
      window.removeEventListener('popstate', handleLocationChange);
    };
  }, []);

  const navigate = (path: string) => {
    window.location.hash = path === '/' ? '#/' : `#${path}`;
  };

  return {
    currentPath,
    navigate,
  };
}
