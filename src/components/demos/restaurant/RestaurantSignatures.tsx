import React from 'react';
import { darConfig } from '../../../data/demos/restaurantConfig';
import eggplantImg from '../../../assets/demos/restaurant/eggplant.webp';
import lambImg from '../../../assets/demos/restaurant/lamb.webp';
import basbousaImg from '../../../assets/demos/restaurant/basbousa.webp';

export const RestaurantSignatures: React.FC = () => {
  // We extract the specific signature items from the config
  const eggplant = darConfig.menu.mains.find(item => item.name === 'Charred Eggplant');
  const lamb = darConfig.menu.mains.find(item => item.name === 'Lamb Shoulder');
  const basbousa = darConfig.menu.desserts.find(item => item.name === 'Pistachio Basbousa');

  return (
    <section className="bg-dar-midnight py-24 sm:py-32 border-t border-dar-brass/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="mb-16 md:mb-24 text-center">
          <h2 className="font-dar-display text-4xl sm:text-5xl text-dar-ivory mb-4">
            Signatures
          </h2>
          <div className="h-px w-16 bg-dar-brass mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          
          {/* Eggplant */}
          {eggplant && (
            <div className="group flex flex-col">
              <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-sm bg-dar-stone/5 mb-8">
                <img
                  src={eggplantImg}
                  alt={eggplant.name}
                  className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="flex justify-between items-baseline mb-3 border-b border-dar-brass/20 pb-3">
                <h3 className="font-dar-display text-2xl text-dar-ivory">{eggplant.name}</h3>
                <span className="font-dar-body text-sm font-semibold tracking-widest text-dar-brass">{eggplant.price}</span>
              </div>
              <p className="font-dar-body text-dar-stone text-sm leading-relaxed">
                {eggplant.description}
              </p>
            </div>
          )}

          {/* Lamb */}
          {lamb && (
            <div className="group flex flex-col">
              <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-sm bg-dar-stone/5 mb-8">
                <img
                  src={lambImg}
                  alt={lamb.name}
                  className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="flex justify-between items-baseline mb-3 border-b border-dar-brass/20 pb-3">
                <h3 className="font-dar-display text-2xl text-dar-ivory">{lamb.name}</h3>
                <span className="font-dar-body text-sm font-semibold tracking-widest text-dar-brass">{lamb.price}</span>
              </div>
              <p className="font-dar-body text-dar-stone text-sm leading-relaxed">
                {lamb.description}
              </p>
            </div>
          )}

          {/* Basbousa */}
          {basbousa && (
            <div className="group flex flex-col">
              <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-sm bg-dar-stone/5 mb-8">
                <img
                  src={basbousaImg}
                  alt={basbousa.name}
                  className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="flex justify-between items-baseline mb-3 border-b border-dar-brass/20 pb-3">
                <h3 className="font-dar-display text-2xl text-dar-ivory">{basbousa.name}</h3>
                <span className="font-dar-body text-sm font-semibold tracking-widest text-dar-brass">{basbousa.price}</span>
              </div>
              <p className="font-dar-body text-dar-stone text-sm leading-relaxed">
                {basbousa.description}
              </p>
            </div>
          )}

        </div>
      </div>
    </section>
  );
};
