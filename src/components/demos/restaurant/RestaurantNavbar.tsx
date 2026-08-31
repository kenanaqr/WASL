import React, { useState } from 'react';

interface RestaurantNavbarProps {
  onNavigate: (path: string) => void;
  onScrollTo: (id: string) => void;
}

export const RestaurantNavbar: React.FC<RestaurantNavbarProps> = ({ onNavigate, onScrollTo }) => {
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
    <header id="dar-navbar" className="sticky top-0 z-50 w-full bg-dar-midnight border-b border-dar-brass/20">
      
      {/* Desktop Floating WASL Back Button */}
      <div className="absolute top-1/2 -translate-y-1/2 left-6 z-50 hidden md:block">
        <button
          onClick={() => onNavigate('/work')}
          className="group flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-dar-stone transition-colors hover:text-dar-ivory"
        >
          <span className="transition-transform group-hover:-translate-x-0.5">&larr;</span>
          Back to WASL
        </button>
      </div>

      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Brand */}
        <div className="flex-1 flex justify-center md:justify-center">
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, 'home')}
            className="flex flex-col items-center group"
          >
            <span className="font-dar-display text-3xl font-medium tracking-widest text-dar-ivory transition-colors group-hover:text-dar-brass">
              DAR
            </span>
            <span className="font-dar-arabic text-sm text-dar-brass mt-1 tracking-widest">
              دار
            </span>
          </a>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex md:items-center md:gap-10 absolute right-8">
          {navLinks.map((link) => (
            <a
              key={link.target}
              href={`#${link.target}`}
              onClick={(e) => handleNavClick(e, link.target)}
              className="font-dar-body text-xs uppercase tracking-widest text-dar-stone transition-colors hover:text-dar-ivory"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#menu"
            onClick={(e) => handleNavClick(e, 'menu')}
            className="rounded-sm bg-dar-burgundy px-5 py-2 font-dar-body text-xs uppercase tracking-widest text-dar-ivory transition-colors hover:bg-dar-ivory hover:text-dar-midnight"
          >
            View Menu
          </a>
        </nav>

        {/* Mobile Toggle */}
        <div className="md:hidden absolute right-4 top-1/2 -translate-y-1/2">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-dar-stone p-2 transition-colors hover:text-dar-ivory"
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
        <div className="md:hidden border-t border-dar-brass/20 bg-dar-midnight px-4 py-8">
          <nav className="flex flex-col space-y-6 text-center">
            {navLinks.map((link) => (
              <a
                key={link.target}
                href={`#${link.target}`}
                onClick={(e) => handleNavClick(e, link.target)}
                className="font-dar-body text-base uppercase tracking-widest text-dar-stone transition-colors hover:text-dar-ivory"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-6 mt-4 border-t border-dar-brass/10">
              <a
                href="#menu"
                onClick={(e) => handleNavClick(e, 'menu')}
                className="inline-block w-full rounded-sm bg-dar-burgundy px-5 py-3 font-dar-body text-sm uppercase tracking-widest text-dar-ivory"
              >
                View Menu
              </a>
            </div>
          </nav>
        </div>
      )}

      {/* Mobile WASL Back Button */}
      <div className="md:hidden border-t border-dar-brass/10 bg-[#121110] flex justify-center py-2.5">
        <button
          onClick={() => onNavigate('/work')}
          className="flex items-center gap-2 text-xs font-medium text-dar-stone transition-colors hover:text-dar-ivory"
        >
          <span>&larr;</span>
          Back to WASL
        </button>
      </div>
      
    </header>
  );
};
