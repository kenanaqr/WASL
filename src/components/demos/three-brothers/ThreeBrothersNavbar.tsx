import React, { useState, useEffect } from 'react';
import logoImg from '../../../assets/three-brothers/3Brotherslogo-transparent.png';

interface ThreeBrothersNavbarProps {
  onNavigate: (path: string) => void;
  onScrollTo: (id: string) => void;
}

export const ThreeBrothersNavbar: React.FC<ThreeBrothersNavbarProps> = ({ onNavigate, onScrollTo }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, target: string) => {
    e.preventDefault();
    onScrollTo(target);
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { label: 'Menu', target: 'menu' },
    { label: 'Catering', target: 'catering' },
    { label: 'Visit', target: 'visit' },
  ];

  return (
    <header
      id="tb-navbar"
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-tb-white/95 backdrop-blur-md shadow-sm'
          : 'bg-tb-white'
      }`}
    >
      {/* Desktop Back to WASL */}
      <div className="absolute top-4 left-4 z-50 hidden md:block">
        <button
          onClick={() => onNavigate('/work')}
          className="group flex items-center gap-2 rounded-full bg-tb-charcoal/5 px-3 py-1.5 font-tb-body text-xs font-medium text-tb-charcoal/60 transition-colors hover:bg-tb-charcoal/10 hover:text-tb-charcoal"
        >
          <span className="transition-transform group-hover:-translate-x-0.5">&larr;</span>
          Back to WASL
        </button>
      </div>

      <div className="mx-auto flex h-16 sm:h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Official Logo */}
        <div className="flex items-center gap-3 flex-shrink-0">
          <button
            onClick={(e) => handleNavClick(e, 'home')}
            className="flex items-center gap-2.5 text-left group"
          >
            <img
              src={logoImg}
              alt="Three Brothers Restaurant Logo"
              className="h-10 sm:h-12 w-auto object-contain rounded"
            />
            <div className="hidden sm:flex flex-col">
              <span className="font-tb-display text-base sm:text-lg font-bold uppercase tracking-wide text-tb-charcoal leading-tight">
                Three Brothers
              </span>
              <span className="font-tb-body text-[10px] sm:text-xs text-tb-sage font-semibold tracking-wider uppercase leading-tight">
                Louisville, KY
              </span>
            </div>
          </button>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex md:items-center md:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.target}
              href={`#${link.target}`}
              onClick={(e) => handleNavClick(e, link.target)}
              className="font-tb-body text-sm font-medium text-tb-charcoal/70 transition-colors hover:text-tb-charcoal"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <a
            href="tel:5024097447"
            className="hidden sm:inline-flex items-center gap-1.5 font-tb-body text-sm font-medium text-tb-charcoal/70 hover:text-tb-charcoal transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span className="hidden lg:inline">502-409-7447</span>
          </a>

          <button
            onClick={(e) => handleNavClick(e, 'order')}
            className="hidden md:inline-flex rounded-lg bg-tb-orange px-5 py-2.5 font-tb-body text-sm font-semibold text-white transition-colors hover:bg-tb-orange-light"
          >
            Order Online
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-tb-charcoal p-2 -mr-2"
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
        <div className="md:hidden border-t border-tb-charcoal/5 bg-tb-white px-4 py-6">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.target}
                onClick={(e) => handleNavClick(e, link.target)}
                className="font-tb-body text-base font-medium text-tb-charcoal py-3 px-2 rounded-lg hover:bg-tb-cream transition-colors text-left"
              >
                {link.label}
              </button>
            ))}
            <div className="pt-4 mt-2 border-t border-tb-charcoal/5 space-y-3">
              <a
                href="tel:5024097447"
                className="flex items-center gap-2 font-tb-body text-sm font-medium text-tb-charcoal/70 py-2 px-2"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                502-409-7447
              </a>
              <button
                onClick={(e) => handleNavClick(e, 'order')}
                className="w-full rounded-lg bg-tb-orange px-5 py-3 font-tb-body text-sm font-semibold text-white"
              >
                Order Online
              </button>
            </div>
          </nav>
        </div>
      )}

      {/* Mobile Back to WASL */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-tb-charcoal/5 bg-tb-cream flex justify-center py-2">
          <button
            onClick={() => onNavigate('/work')}
            className="flex items-center gap-2 font-tb-body text-xs font-medium text-tb-charcoal/50 transition-colors hover:text-tb-charcoal"
          >
            <span>&larr;</span>
            Back to WASL
          </button>
        </div>
      )}
    </header>
  );
};
