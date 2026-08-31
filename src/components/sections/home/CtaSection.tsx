import React from 'react';
import { siteConfig } from '../../../data/siteConfig';

interface CtaSectionProps {
  onNavigate: (path: string) => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({ onNavigate }) => {
  return (
    <section className="py-24 sm:py-32 bg-petrol text-alabaster">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-sand">
            Let&apos;s Connect
          </p>

          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-alabaster leading-tight">
            Let&apos;s make the connection closer.
          </h2>

          <p className="mt-3 text-xl font-medium text-sand font-arabic">
            لنجعل الوصل أقرب وأبسط.
          </p>

          <p className="mt-6 text-base sm:text-lg text-alabaster/75 font-light leading-relaxed max-w-xl mx-auto">
            Whether you run a coffee shop in Webdeh, a restaurant in Abdoun, or a service business
            in Amman, let&apos;s discuss how better digital touchpoints can serve your customers.
          </p>

          {/* Action CTAs */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => onNavigate('/contact')}
              className="rounded-lg bg-sand px-7 py-3.5 text-sm font-semibold text-petrol transition-colors duration-200 hover:bg-sand-light shadow-xs"
            >
              Talk to WASL
            </button>

            <a
              href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-sand/50 bg-petrol-dark/50 px-6 py-3.5 text-sm font-medium text-alabaster transition-colors duration-200 hover:bg-petrol-dark"
            >
              <span>Message on WhatsApp</span>
              <svg className="h-4 w-4 text-sand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
          </div>

          <div className="mt-8 text-xs text-sand/60">
            <span>Direct inquiries: </span>
            <span className="font-mono text-sand/80">{siteConfig.contact.email}</span>
            <span className="mx-2">•</span>
            <span>{siteConfig.contact.location}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
