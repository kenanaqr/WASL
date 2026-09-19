import React, { useState, useEffect } from 'react';
import { siteConfig } from '../../data/siteConfig';
import waslLogo from '../../assets/WASL logo.png';

interface NavbarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPath, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [demosDropdownOpen, setDemosDropdownOpen] = useState(false);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Handle escape key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const handleLinkClick = (path: string) => {
    onNavigate(path);
    setMobileMenuOpen(false);
    setDemosDropdownOpen(false);
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (currentPath === '/') {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    } else {
      onNavigate('/');
    }
    setMobileMenuOpen(false);
    setDemosDropdownOpen(false);
  };

  const isDemoActive = currentPath.startsWith('/demos');

  return (
    <header className={`sticky top-0 z-50 w-full transition-colors duration-300 motion-reduce:transition-none ${mobileMenuOpen ? 'bg-alabaster border-transparent' : 'border-b border-sand/40 bg-alabaster/95'}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8 relative z-50">
        {/* Brand: Logo asset + Brand Name */}
        <a
          href="/"
          onClick={handleLogoClick}
          className="flex items-center gap-3.5 group"
          aria-label="WASL | وصل Homepage"
        >
          <img
            src={waslLogo}
            alt="WASL Logo"
            width={512}
            height={512}
            className="h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-105 motion-reduce:transition-none motion-reduce:transform-none"
          />
          <div className="flex items-baseline gap-2">
            <span className="text-xl font-bold tracking-tight text-petrol">
              {siteConfig.companyName}
            </span>
            <span className="text-sand-muted text-sm font-light">|</span>
            <span className="text-base font-semibold text-petrol/90 font-arabic">
              {siteConfig.arabicName}
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:items-center md:gap-7">
          {siteConfig.navLinks.map((link) => {
            const isActive = currentPath === link.path;
            return (
              <a
                key={link.path}
                href={link.path}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.path);
                }}
                className={`text-sm font-medium transition-colors duration-200 ${
                  isActive
                    ? 'text-petrol font-semibold border-b-2 border-petrol pb-0.5'
                    : 'text-charcoal-muted hover:text-petrol'
                }`}
              >
                {link.label}
              </a>
            );
          })}

          {/* Portfolio Demos Dropdown */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setDemosDropdownOpen((prev) => !prev)}
              onBlur={() => setTimeout(() => setDemosDropdownOpen(false), 200)}
              className={`inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-sm font-medium transition-colors duration-200 ${
                isDemoActive
                  ? 'bg-sand/30 text-petrol font-semibold'
                  : 'text-charcoal-muted hover:bg-sand/20 hover:text-petrol'
              }`}
            >
              <span>Work Concepts</span>
              <svg
                className={`h-3.5 w-3.5 transition-transform duration-200 motion-reduce:transition-none ${
                  demosDropdownOpen ? 'rotate-180' : ''
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {demosDropdownOpen && (
              <div className="absolute right-0 mt-2 w-60 rounded-lg border border-sand/40 bg-alabaster py-2 shadow-md">
                <div className="px-3.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-charcoal-muted/70">
                  Interactive Concepts
                </div>
                {siteConfig.demoLinks.map((demo) => {
                  const isActive = currentPath === demo.path;
                  return (
                    <a
                      key={demo.id}
                      href={demo.path}
                      onClick={(e) => {
                        e.preventDefault();
                        handleLinkClick(demo.path);
                      }}
                      className={`flex flex-col px-3.5 py-2 text-sm transition-colors ${
                        isActive
                          ? 'bg-sand/30 font-semibold text-petrol'
                          : 'text-charcoal hover:bg-sand/15'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span>{demo.name}</span>
                        <span className="text-xs font-arabic text-charcoal-muted">
                          {demo.arabicName}
                        </span>
                      </div>
                    </a>
                  );
                })}
              </div>
            )}
          </div>

          {/* Primary Action Button */}
          <a
            href="/contact"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('/contact');
            }}
            className="rounded-lg bg-petrol px-4 py-2 text-sm font-medium text-alabaster transition-colors duration-200 hover:bg-petrol-dark"
          >
            Talk to WASL
          </a>
        </nav>

        {/* Mobile menu trigger */}
        <div className="flex md:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="relative z-50 inline-flex items-center justify-center rounded-lg p-2 text-petrol hover:bg-sand/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-petrol/50"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <div className="relative h-5 w-6">
              <span className={`absolute left-0 block h-0.5 w-full bg-current transition-all duration-300 ease-in-out motion-reduce:transition-none ${mobileMenuOpen ? 'top-2 rotate-45' : 'top-0'}`} />
              <span className={`absolute left-0 top-2 block h-0.5 w-full bg-current transition-all duration-300 ease-in-out motion-reduce:transition-none ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
              <span className={`absolute left-0 block h-0.5 w-full bg-current transition-all duration-300 ease-in-out motion-reduce:transition-none ${mobileMenuOpen ? 'top-2 -rotate-45' : 'top-4'}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Overlay */}
      <div 
        id="mobile-menu"
        className={`fixed inset-0 z-40 flex flex-col bg-sand pt-[60px] border-t border-charcoal/5 shadow-sm transition-all duration-300 ease-out md:hidden motion-reduce:transition-none ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        <div 
          className={`flex-1 overflow-y-auto px-6 pb-6 pt-6 flex flex-col transition-transform duration-300 ease-out delay-[25ms] motion-reduce:transition-none motion-reduce:transform-none ${
            mobileMenuOpen ? 'translate-y-0' : '-translate-y-2'
          }`}
        >
          <nav className="flex flex-col space-y-1">
            {siteConfig.navLinks.map((link) => (
              <a
                key={link.path}
                href={link.path}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.path);
                }}
                className={`text-[21px] font-medium tracking-tight transition-colors min-h-[44px] flex items-center ${
                  currentPath === link.path ? 'text-petrol font-semibold' : 'text-charcoal hover:text-petrol'
                }`}
              >
                {link.label}
              </a>
            ))}

            <div className="pt-5 border-t border-charcoal/10 mt-3">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-charcoal/50 mb-1 pl-1">
                Work Concepts
              </p>
              <div className="flex flex-col space-y-0">
                {siteConfig.demoLinks.map((demo) => (
                  <a
                    key={demo.id}
                    href={demo.path}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(demo.path);
                    }}
                    className={`text-[19px] transition-colors min-h-[44px] flex items-center justify-between ${
                      currentPath === demo.path ? 'text-petrol font-semibold' : 'text-charcoal/90 hover:text-petrol'
                    }`}
                  >
                    <span>{demo.name}</span>
                    <span className="text-sm font-arabic text-charcoal/50">{demo.arabicName}</span>
                  </a>
                ))}
              </div>
            </div>
          </nav>

          <div className="mt-8 mb-4 border-t border-transparent">
            <a
              href="/contact"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('/contact');
              }}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-petrol px-4 py-3.5 text-base font-semibold text-alabaster transition-colors hover:bg-petrol-dark min-h-[44px] shadow-sm"
            >
              <span>Talk to WASL</span>
              <span aria-hidden="true" className="text-lg leading-none">&rarr;</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

