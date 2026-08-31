import React, { useEffect } from 'react';
import {
  CafeNavbar,
  CafeHero,
  CafeInfoStrip,
  CafeStory,
  CafeMenu,
  CafeSignatures,
  CafeGallery,
  CafeTestimonials,
  CafeVisit,
  CafeDigitalConnection,
  CafeCta,
  CafeFooter,
} from '../../components/demos/cafe';

interface DemoProps {
  onNavigate: (path: string) => void;
}

export const CafeDemo: React.FC<DemoProps> = ({ onNavigate }) => {
  // Smooth scroll helper
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    const navbar = document.getElementById('cafe-navbar');
    
    if (element && navbar) {
      const navbarHeight = navbar.getBoundingClientRect().height;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      
      window.scrollTo({
        top: elementPosition - navbarHeight,
        behavior: 'smooth'
      });
    } else if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-cafe-cream selection:bg-cafe-terracotta selection:text-cafe-cream antialiased">
      <CafeNavbar onNavigate={onNavigate} onScrollTo={handleScrollTo} />
      
      <main>
        <CafeHero onScrollTo={handleScrollTo} />
        <CafeInfoStrip />
        <CafeStory />
        <CafeMenu />
        <CafeSignatures />
        <CafeGallery />
        <CafeTestimonials />
        <CafeVisit />
        <CafeDigitalConnection />
        <CafeCta onScrollTo={handleScrollTo} />
      </main>

      <CafeFooter onScrollTo={handleScrollTo} />
    </div>
  );
};
