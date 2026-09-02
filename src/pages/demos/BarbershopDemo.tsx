import React, { useEffect } from 'react';
import {
  BarbershopNavbar,
  BarbershopHero,
  BarbershopInfoStrip,
  BarbershopStory,
  BarbershopServices,
  BarbershopSignature,
  BarbershopGallery,
  BarbershopTeam,
  BarbershopDiscovery,
  BarbershopConnection,
  BarbershopVisit,
  BarbershopCta,
  BarbershopFooter,
} from '../../components/demos/barbershop';

interface BarbershopDemoProps {
  onNavigate: (path: string) => void;
}

export const BarbershopDemo: React.FC<BarbershopDemoProps> = ({ onNavigate }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    const navbar = document.getElementById('linea-navbar');

    if (element && navbar) {
      const navbarHeight = navbar.getBoundingClientRect().height;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;

      window.scrollTo({
        top: elementPosition - navbarHeight,
        behavior: 'smooth',
      });
    } else if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-linea-carbon font-linea-body text-linea-bone selection:bg-linea-copper selection:text-white antialiased">
      <BarbershopNavbar onNavigate={onNavigate} onScrollTo={handleScrollTo} />

      <main>
        <BarbershopHero onScrollTo={handleScrollTo} />
        <BarbershopInfoStrip onScrollTo={handleScrollTo} />
        <BarbershopStory />
        <BarbershopServices />
        <BarbershopSignature />
        <BarbershopGallery />
        <BarbershopTeam />
        <BarbershopDiscovery />
        <BarbershopConnection />
        <BarbershopVisit />
        <BarbershopCta />
      </main>

      <BarbershopFooter onScrollTo={handleScrollTo} />
    </div>
  );
};
