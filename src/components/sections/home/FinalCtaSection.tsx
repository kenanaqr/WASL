import React from 'react';
import { siteConfig } from '../../../data/siteConfig';

interface FinalCtaSectionProps {
  onNavigate: (path: string) => void;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({ onNavigate }) => {
  return (
    <section className="py-24 sm:py-32 bg-alabaster">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-petrol leading-tight mb-4">
          Ready to get closer to your customers?
        </h2>
        <p className="text-lg sm:text-xl font-medium text-petrol/80 font-arabic mb-12">
          مستعد لتقريب عملك من عملائك؟
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-sm bg-petrol px-8 py-4 text-sm font-semibold uppercase tracking-[0.1em] text-alabaster transition-colors duration-200 hover:bg-petrol-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-petrol focus-visible:ring-offset-2"
          >
            <span>WhatsApp</span>
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>

          <button
            type="button"
            onClick={() => onNavigate('/contact')}
            className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-sm border border-petrol/20 bg-transparent px-8 py-4 text-sm font-semibold uppercase tracking-[0.1em] text-petrol transition-colors duration-200 hover:bg-petrol/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-petrol focus-visible:ring-offset-2"
          >
            <span>Contact</span>
          </button>
        </div>
      </div>
    </section>
  );
};
