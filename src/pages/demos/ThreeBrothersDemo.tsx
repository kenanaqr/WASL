import React, { useEffect } from 'react';
import {
  ThreeBrothersNavbar,
  ThreeBrothersHero,
  ThreeBrothersCategories,
  ThreeBrothersMenu,
  ThreeBrothersOrder,
  ThreeBrothersVisit,
  ThreeBrothersFooter,
} from '../../components/demos/three-brothers';

interface ThreeBrothersDemoProps {
  onNavigate: (path: string) => void;
}

export const ThreeBrothersDemo: React.FC<ThreeBrothersDemoProps> = ({ onNavigate }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const navbar = document.getElementById('tb-navbar');
      const offset = navbar ? navbar.offsetHeight : 0;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="min-h-screen bg-tb-white font-tb-body text-tb-charcoal selection:bg-tb-orange selection:text-white antialiased">
      <ThreeBrothersNavbar onNavigate={onNavigate} onScrollTo={handleScrollTo} />

      <main>
        <ThreeBrothersHero onScrollTo={handleScrollTo} />
        <ThreeBrothersCategories onScrollTo={handleScrollTo} />
        <ThreeBrothersMenu />
        <ThreeBrothersOrder />
        <ThreeBrothersVisit />
      </main>

      <ThreeBrothersFooter onScrollTo={handleScrollTo} />
    </div>
  );
};
