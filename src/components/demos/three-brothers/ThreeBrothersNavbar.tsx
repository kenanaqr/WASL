import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import logoHorizontalImg from '../../../assets/three-brothers/3Brotherslogo-horizontal.png';

interface ThreeBrothersNavbarProps {
  onNavigate: (path: string) => void;
  onScrollTo: (id: string) => void;
}

export const ThreeBrothersNavbar: React.FC<ThreeBrothersNavbarProps> = ({ onNavigate, onScrollTo }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Avoid calling setState synchronously
    const rafId = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(rafId);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll and prevent layout shift while mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      const originalOverflow = document.body.style.overflow;
      const originalPaddingRight = document.body.style.paddingRight;

      const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
      if (scrollBarWidth > 0) {
        document.body.style.paddingRight = `${scrollBarWidth}px`;
      }
      document.body.style.overflow = 'hidden';

      return () => {
        document.body.style.overflow = originalOverflow;
        document.body.style.paddingRight = originalPaddingRight;
      };
    }
  }, [mobileMenuOpen]);

  // Support Escape key to close the drawer
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  // Auto-close drawer on viewport resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [mobileMenuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, target: string) => {
    e.preventDefault();
    document.body.style.overflow = '';
    document.body.style.paddingRight = '';
    setMobileMenuOpen(false);
    requestAnimationFrame(() => {
      onScrollTo(target);
    });
  };

  const navLinks = [
    { label: 'Menu', target: 'menu' },
    { label: 'Catering', target: 'catering' },
    { label: 'Visit', target: 'visit' },
  ];

  return (
    <>
      <header
        id="tb-navbar"
        className={`sticky top-0 z-40 w-full transition-[background-color,box-shadow] duration-300 ${
          scrolled && !mobileMenuOpen
            ? 'bg-tb-white/95 backdrop-blur-md shadow-sm'
            : 'bg-tb-white'
        }`}
      >
        {/* Desktop Back to WASL */}
        <div className="absolute top-4 left-4 z-40 hidden md:block">
          <button
            onClick={() => onNavigate('/work')}
            className="group flex items-center gap-2 rounded-full bg-tb-charcoal/5 px-3 py-1.5 font-tb-body text-xs font-medium text-tb-charcoal/60 transition-colors hover:bg-tb-charcoal/10 hover:text-tb-charcoal"
          >
            <span className="transition-transform group-hover:-translate-x-0.5">&larr;</span>
            Back to WASL
          </button>
        </div>

        <div className="mx-auto flex h-16 sm:h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Horizontal Logo Lockup: [ SYMBOL ] [ 3/Brothers ] */}
          <div className="flex items-center flex-shrink-0">
            <button
              onClick={(e) => handleNavClick(e, 'home')}
              className="flex items-center text-left group transition-opacity hover:opacity-90"
              aria-label="Three Brothers Home"
            >
              <img
                src={logoHorizontalImg}
                alt="Three Brothers"
                className="h-9 sm:h-11 md:h-12 w-auto object-contain"
              />
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

            {/* Animated Hamburger / X Morph Button in Navbar */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden relative z-40 flex h-10 w-10 items-center justify-center rounded-lg text-tb-charcoal transition-colors hover:bg-tb-charcoal/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-tb-orange active:scale-95"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
              aria-controls="tb-mobile-drawer"
            >
              <span className="sr-only">{mobileMenuOpen ? 'Close menu' : 'Open menu'}</span>
              <div className="relative h-5 w-5 pointer-events-none" aria-hidden="true">
                <span
                  className={`absolute left-0 top-[2px] h-0.5 w-5 bg-tb-charcoal rounded-full transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none origin-center ${
                    mobileMenuOpen ? 'translate-y-[7px] rotate-45' : 'translate-y-0 rotate-0'
                  }`}
                />
                <span
                  className={`absolute left-0 top-[9px] h-0.5 w-5 bg-tb-charcoal rounded-full transition-all duration-200 ease-out motion-reduce:transition-none ${
                    mobileMenuOpen ? 'opacity-0 translate-x-1.5' : 'opacity-100 translate-x-0'
                  }`}
                />
                <span
                  className={`absolute left-0 top-[16px] h-0.5 w-5 bg-tb-charcoal rounded-full transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none origin-center ${
                    mobileMenuOpen ? '-translate-y-[7px] -rotate-45' : 'translate-y-0 rotate-0'
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Top-Level Portal: Mounted directly to document.body for robust viewport positioning & stacking */}
      {mounted &&
        createPortal(
          <div className="md:hidden">
            {/* Subtle Backdrop Overlay: Layer 3 (z-[90]), above website content */}
            <div
              className={`fixed inset-0 z-[90] bg-tb-charcoal/40 backdrop-blur-[2px] transition-opacity duration-300 ease-out motion-reduce:transition-none ${
                mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
              }`}
              onClick={() => setMobileMenuOpen(false)}
              aria-hidden="true"
            />

            {/* Slide-in Drawer: Layer 1 (z-[100]), on top of everything */}
            <aside
              id="tb-mobile-drawer"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile Navigation Menu"
              aria-hidden={!mobileMenuOpen}
              className={`fixed inset-y-0 right-0 z-[100] w-[82vw] max-w-sm bg-tb-white shadow-[-8px_0_30px_rgba(0,0,0,0.12)] border-l border-tb-charcoal/5 flex flex-col justify-between transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none ${
                mobileMenuOpen ? 'translate-x-0' : 'translate-x-full pointer-events-none'
              }`}
            >
              {/* Drawer Header with brand mark & close button */}
              <div className="flex h-16 sm:h-20 items-center justify-between px-5 border-b border-tb-charcoal/5 flex-shrink-0">
                <div className="flex items-center">
                  <img
                    src={logoHorizontalImg}
                    alt="Three Brothers"
                    className="h-8 w-auto object-contain"
                  />
                </div>
                {/* Close Button: Layer 1/2 top right, fully accessible */}
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex h-10 w-10 items-center justify-center rounded-lg text-tb-charcoal transition-colors hover:bg-tb-charcoal/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-tb-orange active:scale-95"
                  aria-label="Close navigation menu"
                >
                  <span className="sr-only">Close menu</span>
                  <div className="relative h-5 w-5 pointer-events-none" aria-hidden="true">
                    <span className="absolute left-0 top-[9px] h-0.5 w-5 bg-tb-charcoal rounded-full rotate-45" />
                    <span className="absolute left-0 top-[9px] h-0.5 w-5 bg-tb-charcoal rounded-full -rotate-45" />
                  </div>
                </button>
              </div>

              {/* Drawer Scrollable Content */}
              <div className="flex-1 overflow-y-auto px-5 py-6 flex flex-col justify-between">
                <nav className="flex flex-col space-y-1.5" aria-label="Mobile Navigation Links">
                  {navLinks.map((link, idx) => (
                    <button
                      key={link.target}
                      onClick={(e) => handleNavClick(e, link.target)}
                      style={{
                        transitionDelay: mobileMenuOpen ? `${80 + idx * 40}ms` : '0ms',
                      }}
                      className={`group flex items-center justify-between w-full py-3.5 px-3.5 rounded-xl font-tb-display text-lg uppercase font-bold tracking-wide text-tb-charcoal hover:bg-tb-charcoal/5 hover:text-tb-orange transition-all duration-300 ease-out text-left motion-reduce:transition-none motion-reduce:transform-none ${
                        mobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
                      }`}
                    >
                      <span>{link.label}</span>
                      <span className="text-tb-charcoal/20 group-hover:text-tb-orange group-hover:translate-x-1 transition-all duration-200">
                        &rarr;
                      </span>
                    </button>
                  ))}
                </nav>

                {/* Quick Contact & Action Section */}
                <div
                  style={{
                    transitionDelay: mobileMenuOpen ? '200ms' : '0ms',
                  }}
                  className={`pt-6 mt-4 border-t border-tb-charcoal/5 space-y-3.5 transition-all duration-300 ease-out motion-reduce:transition-none motion-reduce:transform-none ${
                    mobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
                  }`}
                >
                  <a
                    href="tel:5024097447"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-2.5 font-tb-body text-sm font-medium text-tb-charcoal/80 py-2.5 px-3 rounded-lg hover:bg-tb-charcoal/5 transition-colors"
                  >
                    <svg className="w-4 h-4 text-tb-orange flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>502-409-7447</span>
                  </a>

                  <div className="px-3 text-xs text-tb-sage font-medium">
                    2001 7th Street Rd · Louisville, KY
                  </div>

                  <button
                    onClick={(e) => handleNavClick(e, 'order')}
                    className="w-full rounded-xl bg-tb-orange py-3.5 px-4 font-tb-body text-sm font-bold text-white shadow-md shadow-tb-orange/20 hover:bg-tb-orange-light active:scale-[0.99] transition-all"
                  >
                    Order Online
                  </button>
                </div>
              </div>

              {/* Drawer Footer: Back to WASL */}
              <div
                style={{
                  transitionDelay: mobileMenuOpen ? '240ms' : '0ms',
                }}
                className={`border-t border-tb-charcoal/5 bg-tb-cream/40 py-3 px-5 flex justify-center flex-shrink-0 transition-all duration-300 ease-out motion-reduce:transition-none motion-reduce:transform-none ${
                  mobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
                }`}
              >
                <button
                  onClick={() => onNavigate('/work')}
                  className="flex items-center gap-2 font-tb-body text-xs font-medium text-tb-charcoal/50 hover:text-tb-charcoal transition-colors py-1 px-2"
                >
                  <span>&larr;</span>
                  Back to WASL
                </button>
              </div>
            </aside>
          </div>,
          document.body
        )}
    </>
  );
};
