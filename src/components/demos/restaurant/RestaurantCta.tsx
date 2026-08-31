import React from 'react';
import { darConfig } from '../../../data/demos/restaurantConfig';

interface RestaurantCtaProps {
  onScrollTo: (id: string) => void;
}

export const RestaurantCta: React.FC<RestaurantCtaProps> = ({ onScrollTo }) => {
  return (
    <section className="bg-dar-midnight py-32 sm:py-48 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        <h2 className="font-dar-display text-4xl sm:text-5xl md:text-6xl text-dar-ivory leading-tight max-w-3xl mx-auto">
          A good table brings people closer.
        </h2>
        
        <p className="mt-8 font-dar-arabic text-2xl sm:text-3xl text-dar-brass">
          المائدة الطيبة تقرّب القلوب.
        </p>

        <div className="mt-16 flex flex-col sm:flex-row justify-center items-center gap-6">
          <button
            onClick={() => onScrollTo('menu')}
            className="w-full sm:w-auto rounded-sm bg-dar-burgundy px-10 py-4 font-dar-body text-xs uppercase tracking-widest text-dar-ivory transition-colors hover:bg-dar-ivory hover:text-dar-midnight"
          >
            Explore the Menu
          </button>
          
          <a
            href={darConfig.contact.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto text-center rounded-sm border border-dar-brass/40 bg-transparent px-10 py-4 font-dar-body text-xs uppercase tracking-widest text-dar-ivory transition-colors hover:bg-dar-brass/10 hover:border-dar-brass"
          >
            Contact {darConfig.name.split(' ')[0]}
          </a>
        </div>

      </div>
    </section>
  );
};
