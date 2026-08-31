import { useEffect, useState } from 'react';

/**
 * Lightweight, zero-dependency hash-based client router.
 * Supports back/forward browser history and direct URL hash sharing.
 */
export function useRouter() {
  const getPath = () => {
    const hash = window.location.hash;
    if (!hash || hash === '#' || hash === '#/') {
      return '/';
    }
    return hash.replace(/^#/, '');
  };

  const [currentPath, setCurrentPath] = useState<string>(getPath);

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPath(getPath());
      window.scrollTo(0, 0);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigate = (path: string) => {
    window.location.hash = path === '/' ? '#/' : `#${path}`;
  };

  return {
    currentPath,
    navigate,
  };
}
