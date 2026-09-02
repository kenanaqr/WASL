import React from 'react';
import { lineaConfig } from '../../../data/demos/barbershopConfig';

interface BarbershopInfoStripProps {
  onScrollTo: (id: string) => void;
}

export const BarbershopInfoStrip: React.FC<BarbershopInfoStripProps> = ({ onScrollTo }) => {
  return (
    <div className="border-b border-linea-slate/15 bg-linea-carbon py-3.5 relative z-20">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 sm:flex-row sm:px-6 lg:px-8">

        {/* Core Info */}
        <div className="flex items-center gap-3 text-center sm:text-left">
          <span className="font-linea-body text-xs text-linea-slate tracking-wide">
            {lineaConfig.location}
          </span>
          <span className="text-linea-copper text-xs">&middot;</span>
          <span className="font-linea-body text-xs font-medium text-linea-bone tracking-wide">
            10:00 AM — 11:00 PM
          </span>
          <span className="text-linea-copper text-xs">&middot;</span>
          <span className="font-linea-body text-xs text-linea-slate tracking-wide">
            Daily
          </span>
        </div>

        {/* Quick Actions */}
        <div className="flex items-center gap-6">
          <a
            href={lineaConfig.contact.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 font-linea-body text-[11px] uppercase tracking-[0.12em] text-linea-bone transition-colors hover:text-linea-copper"
          >
            <svg className="h-3.5 w-3.5 text-linea-copper/70 group-hover:text-linea-copper transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            WhatsApp
          </a>

          <a
            href="https://google.com/maps"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 font-linea-body text-[11px] uppercase tracking-[0.12em] text-linea-bone transition-colors hover:text-linea-copper"
          >
            <svg className="h-3.5 w-3.5 text-linea-copper/70 group-hover:text-linea-copper transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Directions
          </a>

          <button
            onClick={() => onScrollTo('services')}
            className="group flex items-center gap-2 font-linea-body text-[11px] uppercase tracking-[0.12em] text-linea-bone transition-colors hover:text-linea-copper"
          >
            <svg className="h-3.5 w-3.5 text-linea-copper/70 group-hover:text-linea-copper transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            Services
          </button>
        </div>

      </div>
    </div>
  );
};
