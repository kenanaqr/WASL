import React from 'react';
import { lineaConfig } from '../../../data/demos/barbershopConfig';

interface BarbershopFooterProps {
  onScrollTo: (id: string) => void;
}

export const BarbershopFooter: React.FC<BarbershopFooterProps> = ({ onScrollTo }) => {
  const navLinks = [
    { label: 'Home', target: 'home' },
    { label: 'Services', target: 'services' },
    { label: 'Work', target: 'work' },
    { label: 'About', target: 'about' },
    { label: 'Visit', target: 'visit' },
  ];

  return (
    <footer className="bg-[#141312] pt-20 pb-10 border-t border-linea-slate/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-20">

          {/* Brand */}
          <div className="md:col-span-4">
            <div className="flex items-baseline gap-3 mb-3">
              <h2 className="font-linea-display text-3xl font-semibold tracking-[0.1em] text-linea-bone">LINEA</h2>
              <span className="font-linea-arabic text-sm text-linea-copper">لاينا</span>
            </div>
            <p className="font-linea-body text-linea-slate text-sm tracking-wide">
              {lineaConfig.descriptor}
            </p>
          </div>

          {/* Navigation */}
          <div className="md:col-span-4">
            <h3 className="font-linea-body text-[11px] font-semibold uppercase tracking-[0.15em] text-linea-copper mb-5">Navigation</h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.target}>
                  <button
                    onClick={() => onScrollTo(link.target)}
                    className="font-linea-body text-sm text-linea-slate hover:text-linea-bone transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <h3 className="font-linea-body text-[11px] font-semibold uppercase tracking-[0.15em] text-linea-copper mb-5">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a href={lineaConfig.contact.whatsappLink} target="_blank" rel="noopener noreferrer" className="font-linea-body text-sm text-linea-slate hover:text-linea-bone transition-colors">
                  WhatsApp: {lineaConfig.contact.whatsapp}
                </a>
              </li>
              <li>
                <a href={lineaConfig.contact.phoneLink} className="font-linea-body text-sm text-linea-slate hover:text-linea-bone transition-colors">
                  Phone: {lineaConfig.contact.phone}
                </a>
              </li>
              <li>
                <a href={lineaConfig.contact.instagramLink} target="_blank" rel="noopener noreferrer" className="font-linea-body text-sm text-linea-slate hover:text-linea-bone transition-colors">
                  Instagram: {lineaConfig.contact.instagram}
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-linea-slate/10">
          <p className="font-linea-body text-xs text-linea-slate/50 mb-3 md:mb-0">
            &copy; {new Date().getFullYear()} LINEA. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-linea-slate/40">
            <span className="font-linea-body text-[10px] uppercase tracking-[0.2em]">A Concept By</span>
            <span className="font-medium text-linea-slate/60 tracking-wider">WASL | وصل</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
