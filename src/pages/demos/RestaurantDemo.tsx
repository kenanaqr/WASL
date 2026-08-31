import React, { useEffect } from 'react';
import {
  RestaurantNavbar,
  RestaurantHero,
  RestaurantInfoStrip,
  RestaurantStory,
  RestaurantSignatures,
  RestaurantMenu,
  RestaurantGallery,
  RestaurantDiscovery,
  RestaurantContact,
  RestaurantVisit,
  RestaurantDigitalConnection,
  RestaurantCta,
  RestaurantFooter
} from '../../components/demos/restaurant';

interface RestaurantDemoProps {
  onNavigate: (path: string) => void;
}

export const RestaurantDemo: React.FC<RestaurantDemoProps> = ({ onNavigate }) => {
  // Ensure we start at the top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // Calculate offset based on navbar height
      const navbar = document.getElementById('dar-navbar');
      const offset = navbar ? navbar.offsetHeight : 0;
      
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-dar-midnight font-dar-body text-dar-ivory selection:bg-dar-burgundy selection:text-white">
      <RestaurantNavbar onNavigate={onNavigate} onScrollTo={handleScrollTo} />
      
      <main>
        <RestaurantHero onScrollTo={handleScrollTo} />
        <RestaurantInfoStrip onScrollTo={handleScrollTo} />
        <RestaurantStory />
        <RestaurantSignatures />
        <RestaurantMenu />
        <RestaurantGallery />
        <RestaurantDiscovery />
        <RestaurantContact />
        <RestaurantVisit />
        <RestaurantDigitalConnection />
        <RestaurantCta onScrollTo={handleScrollTo} />
      </main>

      <RestaurantFooter onScrollTo={handleScrollTo} />
    </div>
  );
};
