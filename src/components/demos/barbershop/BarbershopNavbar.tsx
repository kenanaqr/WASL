import React, { useState } from 'react';
import { lineaConfig } from '../../../data/demos/barbershopConfig';

interface BarbershopNavbarProps {
  onNavigate: (path: string) => void;
  onScrollTo: (id: string) => void;
}

export const BarbershopNavbar: React.FC<BarbershopNavbarProps> = ({ onNavigate, onScrollTo }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    e.preventDefault();
    onScrollTo(target);
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { label: 'Home', target: 'home' },
    { label: 'Services', target: 'services' },
    { label: 'Work', target: 'work' },
    { label: 'About', target: 'about' },
    { label: 'Visit', target: 'visit' },
  ];

  return (
    <header id="linea-navbar" className="sticky top-0 z-50 w-full bg-linea-carbon/95 backdrop-blur-sm border-b border-linea-slate/15">

      {/* Desktop Back to WASL */}
      <div className="absolute top-1/2 -translate-y-1/2 left-5 z-50 hidden md:block">
        <button
          onClick={() => onNavigate('/work')}
          className="group flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-linea-slate transition-colors hover:text-linea-bone font-linea-body"
        >
          <span className="transition-transform group-hover:-translate-x-0.5">&larr;</span>
          Back to WASL
        </button>
      </div>

      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Brand */}
        <div className="flex-1 flex justify-center md:justify-center">
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, 'home')}
            className="flex items-baseline gap-3 group"
          >
            <span className="font-linea-display text-2xl font-semibold tracking-[0.15em] text-linea-bone transition-colors group-hover:text-linea-copper">
              LINEA
            </span>
            <span className="font-linea-arabic text-sm text-linea-copper tracking-widest">
              لاينا
            </span>
          </a>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex md:items-center md:gap-8 absolute right-8">
          {navLinks.map((link) => (
            <a
              key={link.target}
              href={`#${link.target}`}
              onClick={(e) => handleNavClick(e, link.target)}
              className="font-linea-body text-[11px] uppercase tracking-[0.15em] text-linea-slate transition-colors hover:text-linea-bone"
            >
              {link.label}
            </a>
          ))}
          <a
            href={lineaConfig.contact.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-sm bg-linea-copper px-5 py-2 font-linea-body text-[11px] uppercase tracking-[0.15em] text-white transition-colors hover:bg-linea-copper/80"
          >
            WhatsApp
          </a>
        </nav>

        {/* Mobile Toggle */}
        <div className="md:hidden absolute right-4 top-1/2 -translate-y-1/2">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-linea-slate p-2 transition-colors hover:text-linea-bone"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-linea-slate/15 bg-linea-carbon px-4 py-8">
          <nav className="flex flex-col space-y-5 text-center">
            {navLinks.map((link) => (
              <a
                key={link.target}
                href={`#${link.target}`}
                onClick={(e) => handleNavClick(e, link.target)}
                className="font-linea-body text-sm uppercase tracking-[0.15em] text-linea-slate transition-colors hover:text-linea-bone"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 mt-2 border-t border-linea-slate/10 flex flex-col gap-3">
              <a
                href={lineaConfig.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full rounded-sm bg-linea-copper px-5 py-3 font-linea-body text-sm uppercase tracking-[0.15em] text-white"
              >
                WhatsApp
              </a>
            </div>
          </nav>
        </div>
      )}

      {/* Mobile WASL Back Button */}
      <div className="md:hidden border-t border-linea-slate/10 bg-linea-carbon flex justify-center py-2">
        <button
          onClick={() => onNavigate('/work')}
          className="flex items-center gap-2 text-xs font-medium text-linea-slate transition-colors hover:text-linea-bone font-linea-body"
        >
          <span>&larr;</span>
          Back to WASL
        </button>
      </div>

    </header>
  );
};
