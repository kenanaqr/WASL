import React from 'react';
import { darConfig } from '../../../data/demos/restaurantConfig';
import heroImg from '../../../assets/demos/restaurant/hero.webp';

interface RestaurantHeroProps {
  onScrollTo: (id: string) => void;
}

export const RestaurantHero: React.FC<RestaurantHeroProps> = ({ onScrollTo }) => {
  return (
    <section id="home" className="relative min-h-[85vh] flex flex-col justify-center overflow-hidden bg-dar-midnight">
      
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImg}
          alt="DAR Restaurant Interior"
          width={1264}
          height={848}
          fetchPriority="high"
          className="h-full w-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dar-midnight via-dar-midnight/40 to-dar-midnight/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center mt-12">
        
        <p className="font-dar-body text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] text-dar-brass mb-8">
          {darConfig.descriptor} · {darConfig.location}
        </p>

        <h1 className="font-dar-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-dar-ivory leading-tight max-w-4xl">
          A table worth <br className="hidden sm:block" />
          gathering around.
        </h1>
        
        <p className="mt-6 font-dar-arabic text-2xl sm:text-3xl text-dar-ivory/80">
          مائدة تستحق أن نجتمع حولها.
        </p>

        <div className="mt-16 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto">
          <button
            onClick={() => onScrollTo('menu')}
            className="w-full sm:w-auto rounded-sm bg-dar-burgundy px-10 py-4 font-dar-body text-xs uppercase tracking-widest text-dar-ivory transition-colors hover:bg-dar-ivory hover:text-dar-midnight"
          >
            Explore the Menu
          </button>
          <button
            onClick={() => onScrollTo('visit')}
            className="w-full sm:w-auto rounded-sm border border-dar-brass/40 bg-transparent px-10 py-4 font-dar-body text-xs uppercase tracking-widest text-dar-ivory transition-colors hover:bg-dar-brass/10 hover:border-dar-brass"
          >
            Visit {darConfig.name.split(' ')[0]}
          </button>
        </div>
        
      </div>
      
    </section>
  );
};
