import React from 'react';
import { siteConfig } from '../../../data/siteConfig';
import { ConnectionGraphic } from './ConnectionGraphic';

interface HeroSectionProps {
  onNavigate: (path: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 sm:pt-20 sm:pb-28 border-b border-sand/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Text Content */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Small brand/context label */}
            <div className="inline-flex items-center gap-2 rounded-full border border-sand/70 bg-white/80 px-3.5 py-1 text-xs font-medium text-petrol mb-6 shadow-2xs">
              <span className="font-bold tracking-tight">{siteConfig.companyName}</span>
              <span className="text-sand-muted">|</span>
              <span className="font-arabic font-medium">{siteConfig.arabicName}</span>
              <span className="h-1 w-1 rounded-full bg-sand-muted"></span>
              <span className="text-charcoal-muted">Amman, Jordan</span>
            </div>

            {/* Large headline communicating the connection concept */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-petrol leading-[1.12]">
              Bringing businesses <br className="hidden sm:inline" />
              closer to their customers.
            </h1>

            {/* Arabic companion line */}
            <p className="mt-4 text-xl font-medium text-petrol/85 font-arabic">
              نقرب الأعمال من عملائها.
            </p>

            {/* Short supporting paragraph */}
            <p className="mt-5 text-base sm:text-lg text-charcoal/80 max-w-xl leading-relaxed font-light">
              WASL designs focused websites, search touchpoints, and physical digital interactions
              built around the authentic relationship between local businesses and the people they serve.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => onNavigate('/contact')}
                className="rounded-lg bg-petrol px-6 py-3 text-sm font-medium text-alabaster transition-colors duration-200 hover:bg-petrol-dark shadow-xs"
              >
                Start a conversation
              </button>
              <button
                type="button"
                onClick={() => onNavigate('/work')}
                className="rounded-lg border border-sand/80 bg-white/80 px-6 py-3 text-sm font-medium text-petrol transition-colors duration-200 hover:bg-sand/20"
              >
                Explore our work
              </button>
            </div>

            {/* Subtle brand meaning note */}
            <div className="mt-10 pt-6 border-t border-sand/40 flex items-center gap-3 text-xs text-charcoal-muted">
              <span className="font-semibold text-petrol font-arabic text-sm">وصل</span>
              <span>•</span>
              <span className="italic">to connect, to reach, connection.</span>
            </div>
          </div>

          {/* Connection Visual */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="w-full max-w-md rounded-2xl border border-sand/50 bg-white/60 p-8 shadow-xs">
              <ConnectionGraphic />
              <div className="mt-6 flex items-center justify-between text-xs text-charcoal-muted border-t border-sand/30 pt-4">
                <span className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-sand"></span>
                  <span>The Local Business</span>
                </span>
                <span className="font-arabic font-medium text-petrol">نقطة التقاء</span>
                <span className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-petrol"></span>
                  <span>The Customer</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
