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
    const linkId = 'font-demo-barbershop';
    if (!document.getElementById(linkId)) {
      const link = document.createElement('link');
      link.id = linkId;
      link.rel = 'stylesheet';
      link.href = 'https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&family=Sora:wght@300;400;500;600;700&family=Tajawal:wght@300;400;500;700&display=swap';
      document.head.appendChild(link);
    }
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
