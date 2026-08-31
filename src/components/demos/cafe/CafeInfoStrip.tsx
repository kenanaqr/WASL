import React from 'react';

export const CafeInfoStrip: React.FC = () => {
  return (
    <div className="border-b border-cafe-stone/40 bg-cafe-cream py-4">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6 lg:px-8">
        
        {/* Core Info */}
        <div className="flex items-center gap-3 text-center sm:text-left">
          <span className="font-cafe-body text-xs sm:text-sm text-cafe-espresso/80">
            Amman
          </span>
          <span className="text-cafe-stone">&middot;</span>
          <span className="font-cafe-body text-xs sm:text-sm font-medium text-cafe-espresso">
            7:30 AM — 12:00 AM
          </span>
          <span className="text-cafe-stone">&middot;</span>
          <span className="font-cafe-body text-xs sm:text-sm text-cafe-espresso/80">
            Everyday
          </span>
        </div>

        {/* Quick Links */}
        <div className="flex items-center gap-6">
          <a
            href="#visit"
            className="group flex items-center gap-1.5 font-cafe-body text-xs sm:text-sm text-cafe-espresso transition-colors hover:text-cafe-terracotta"
          >
            <svg className="h-4 w-4 text-cafe-olive transition-colors group-hover:text-cafe-terracotta" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Directions
          </a>
          
          <a
            href="https://wa.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-1.5 font-cafe-body text-xs sm:text-sm text-cafe-espresso transition-colors hover:text-cafe-terracotta"
          >
            <svg className="h-4 w-4 text-cafe-olive transition-colors group-hover:text-cafe-terracotta" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            WhatsApp
          </a>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-1.5 font-cafe-body text-xs sm:text-sm text-cafe-espresso transition-colors hover:text-cafe-terracotta"
          >
            <svg className="h-4 w-4 text-cafe-olive transition-colors group-hover:text-cafe-terracotta" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Instagram
          </a>
        </div>
        
      </div>
    </div>
  );
};
