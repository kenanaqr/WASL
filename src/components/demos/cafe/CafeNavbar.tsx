import React, { useState } from 'react';

interface CafeNavbarProps {
  onNavigate: (path: string) => void;
  onScrollTo: (id: string) => void;
}

export const CafeNavbar: React.FC<CafeNavbarProps> = ({ onNavigate, onScrollTo }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    e.preventDefault();
    onScrollTo(target);
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { label: 'Home', target: 'home' },
    { label: 'Menu', target: 'menu' },
    { label: 'Our Story', target: 'story' },
    { label: 'Visit', target: 'visit' },
  ];

  return (
    <header id="cafe-navbar" className="sticky top-0 z-50 w-full bg-cafe-cream/90 backdrop-blur-sm border-b border-cafe-stone/30">
      {/* Desktop Floating WASL Back Button */}
      <div className="absolute top-4 left-4 z-50 hidden md:block">
        <button
          onClick={() => onNavigate('/work')}
          className="group flex items-center gap-2 rounded-full bg-cafe-espresso/5 px-3 py-1.5 text-xs font-medium text-cafe-espresso/70 transition-colors hover:bg-cafe-espresso/10 hover:text-cafe-espresso"
        >
          <span className="transition-transform group-hover:-translate-x-0.5">&larr;</span>
          Back to WASL
        </button>
      </div>

      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand */}
        <div className="flex-1 flex justify-center md:justify-start">
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, 'home')}
            className="flex flex-col items-center md:items-start"
          >
            <span className="font-cafe-display text-3xl font-medium tracking-tight text-cafe-espresso">
              NARA
            </span>
            <span className="font-cafe-arabic text-sm text-cafe-olive mt-0.5">
              نارا
            </span>
          </a>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex md:items-center md:gap-8 flex-1 justify-center">
          {navLinks.map((link) => (
            <a
              key={link.target}
              href={`#${link.target}`}
              onClick={(e) => handleNavClick(e, link.target)}
              className="font-cafe-body text-sm text-cafe-espresso/80 transition-colors hover:text-cafe-espresso"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA & Mobile Toggle */}
        <div className="flex flex-1 justify-end items-center gap-4">
          <a
            href="#menu"
            onClick={(e) => handleNavClick(e, 'menu')}
            className="hidden md:inline-flex rounded-sm bg-cafe-espresso px-5 py-2 font-cafe-body text-sm text-cafe-cream transition-colors hover:bg-cafe-terracotta"
          >
            View Menu
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-cafe-espresso p-2 -mr-2"
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
        <div className="md:hidden border-b border-cafe-stone/30 bg-cafe-cream px-4 py-6">
          <nav className="flex flex-col space-y-4 text-center">
            {navLinks.map((link) => (
              <a
                key={link.target}
                href={`#${link.target}`}
                onClick={(e) => handleNavClick(e, link.target)}
                className="font-cafe-body text-lg text-cafe-espresso py-2"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 mt-2 border-t border-cafe-stone/30">
              <a
                href="#menu"
                onClick={(e) => handleNavClick(e, 'menu')}
                className="inline-block w-full rounded-sm bg-cafe-espresso px-5 py-3 font-cafe-body text-sm text-cafe-cream"
              >
                View Menu
              </a>
            </div>
          </nav>
        </div>
      )}

      {/* Mobile WASL Back Button */}
      <div className="md:hidden border-t border-cafe-stone/30 bg-[#FAF8F5] flex justify-center py-2">
        <button
          onClick={() => onNavigate('/work')}
          className="flex items-center gap-2 text-xs font-medium text-cafe-espresso/70 transition-colors hover:text-cafe-espresso"
        >
          <span>&larr;</span>
          Back to WASL
        </button>
      </div>
    </header>
  );
};
