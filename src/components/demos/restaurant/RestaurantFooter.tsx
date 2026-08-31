import React from 'react';
import { darConfig } from '../../../data/demos/restaurantConfig';

interface RestaurantFooterProps {
  onScrollTo: (id: string) => void;
}

export const RestaurantFooter: React.FC<RestaurantFooterProps> = ({ onScrollTo }) => {
  const navLinks = [
    { label: 'Home', target: 'home' },
    { label: 'Menu', target: 'menu' },
    { label: 'Our Story', target: 'story' },
    { label: 'Visit', target: 'visit' },
  ];

  return (
    <footer className="bg-[#121110] pt-24 pb-12 border-t border-dar-brass/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-24">
          
          <div className="md:col-span-5">
            <h2 className="font-dar-display text-4xl text-dar-ivory mb-2">DAR</h2>
            <p className="font-dar-body text-dar-stone text-sm tracking-wide mb-6">
              {darConfig.descriptor} · {darConfig.location}
            </p>
          </div>

          <div className="md:col-span-3">
            <h3 className="font-dar-body text-xs font-semibold uppercase tracking-widest text-dar-brass mb-6">Navigation</h3>
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.target}>
                  <button
                    onClick={() => onScrollTo(link.target)}
                    className="font-dar-body text-sm text-dar-stone hover:text-dar-ivory transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <h3 className="font-dar-body text-xs font-semibold uppercase tracking-widest text-dar-brass mb-6">Contact</h3>
            <ul className="space-y-4">
              <li>
                <a href={darConfig.contact.whatsappLink} target="_blank" rel="noopener noreferrer" className="font-dar-body text-sm text-dar-stone hover:text-dar-ivory transition-colors">
                  WhatsApp: {darConfig.contact.whatsapp}
                </a>
              </li>
              <li>
                <a href={darConfig.contact.phoneLink} className="font-dar-body text-sm text-dar-stone hover:text-dar-ivory transition-colors">
                  Phone: {darConfig.contact.phone}
                </a>
              </li>
              <li>
                <a href={darConfig.contact.instagramLink} target="_blank" rel="noopener noreferrer" className="font-dar-body text-sm text-dar-stone hover:text-dar-ivory transition-colors">
                  Instagram: {darConfig.contact.instagram}
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-dar-brass/10">
          <p className="font-dar-body text-xs text-dar-stone/60 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} {darConfig.name.split(' ')[0]}. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-dar-stone/40">
            <span className="font-dar-body text-[10px] uppercase tracking-[0.2em]">A Concept By</span>
            <span className="font-medium text-dar-stone/60 tracking-wider">WASL | وصل</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
