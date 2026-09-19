import React from 'react';

import heroImg from '../../../assets/demos/cafe/hero.webp';

interface CafeHeroProps {
  onScrollTo: (id: string) => void;
}

export const CafeHero: React.FC<CafeHeroProps> = ({ onScrollTo }) => {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-cafe-espresso">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImg}
          alt="NARA Cafe Interior"
          width={1264}
          height={848}
          fetchPriority="high"
          className="h-full w-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-cafe-espresso/90 via-cafe-espresso/30 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        <p className="font-cafe-body text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-cafe-cream/80 mb-6">
          Coffee · Breakfast · Amman
        </p>

        <h1 className="font-cafe-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-cafe-cream leading-tight">
          A slower way <br className="hidden sm:block" />
          to start the day.
        </h1>
        
        <p className="mt-6 font-cafe-arabic text-2xl sm:text-3xl text-cafe-cream/90">
          لصباحٍ على مهل.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
          <button
            onClick={() => onScrollTo('menu')}
            className="w-full sm:w-auto rounded-sm bg-cafe-cream px-8 py-3.5 font-cafe-body text-sm font-medium text-cafe-espresso transition-colors hover:bg-white"
          >
            Explore the Menu
          </button>
          <button
            onClick={() => onScrollTo('visit')}
            className="w-full sm:w-auto rounded-sm border border-cafe-cream/30 bg-transparent px-8 py-3.5 font-cafe-body text-sm font-medium text-cafe-cream transition-colors hover:bg-cafe-cream/10"
          >
            Find Us
          </button>
        </div>
      </div>
    </section>
  );
};
