import React, { useState } from 'react';
import { siteConfig } from '../../data/siteConfig';
import waslLogo from '../../assets/WASL logo.png';

interface NavbarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPath, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [demosDropdownOpen, setDemosDropdownOpen] = useState(false);

  const handleLinkClick = (path: string) => {
    onNavigate(path);
    setMobileMenuOpen(false);
    setDemosDropdownOpen(false);
  };

  const isDemoActive = currentPath.startsWith('/demos');

  return (
    <header className="sticky top-0 z-50 w-full border-b border-sand/40 bg-alabaster/95">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Brand: Logo asset + Brand Name */}
        <a
          href="#/"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick('/');
          }}
          className="flex items-center gap-3.5 group"
          aria-label="WASL | وصل Homepage"
        >
          <img
            src={waslLogo}
            alt="WASL Logo"
            className="h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
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
                href={`#${link.path}`}
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
                className={`h-3.5 w-3.5 transition-transform duration-200 ${
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
                      href={`#${demo.path}`}
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
            href="#/contact"
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
            className="inline-flex items-center justify-center rounded-lg p-2 text-petrol hover:bg-sand/20"
            aria-label="Toggle Menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="border-b border-sand/40 bg-alabaster px-4 pt-3 pb-6 md:hidden">
          <div className="flex flex-col space-y-3">
            {siteConfig.navLinks.map((link) => (
              <a
                key={link.path}
                href={`#${link.path}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.path);
                }}
                className={`text-base font-medium py-1 ${
                  currentPath === link.path ? 'text-petrol font-semibold' : 'text-charcoal-muted'
                }`}
              >
                {link.label}
              </a>
            ))}

            <div className="pt-3 border-t border-sand/30">
              <p className="text-xs font-semibold uppercase tracking-wider text-charcoal-muted/70 mb-2">
                Work Concepts
              </p>
              <div className="flex flex-col space-y-2 pl-2">
                {siteConfig.demoLinks.map((demo) => (
                  <a
                    key={demo.id}
                    href={`#${demo.path}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(demo.path);
                    }}
                    className={`text-sm ${
                      currentPath === demo.path ? 'text-petrol font-semibold' : 'text-charcoal-muted'
                    }`}
                  >
                    {demo.name} ({demo.arabicName})
                  </a>
                ))}
              </div>
            </div>

            <div className="pt-2">
              <a
                href="#/contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick('/contact');
                }}
                className="block text-center rounded-lg bg-petrol px-4 py-2.5 text-sm font-medium text-alabaster"
              >
                Talk to WASL
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
