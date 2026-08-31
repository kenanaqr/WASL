import React from 'react';
import atmosphereImg from '../../../assets/demos/cafe/atmosphere.jpg';
import counterImg from '../../../assets/demos/cafe/counter.jpg';
import pastryImg from '../../../assets/demos/cafe/pastry_display.jpg';

export const CafeGallery: React.FC = () => {
  return (
    <section className="bg-[#FAF8F5] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="mb-12">
          <h2 className="font-cafe-display text-2xl sm:text-3xl text-cafe-espresso text-center">
            The Atmosphere
          </h2>
        </div>

        {/* Asymmetric Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6">
          
          {/* Main large image */}
          <div className="md:col-span-8 md:row-span-2">
            <div className="aspect-w-4 aspect-h-3 sm:aspect-h-2 h-full w-full overflow-hidden rounded-sm bg-cafe-stone/20">
              <img
                src={atmosphereImg}
                alt="Cafe Atmosphere"
                className="h-full w-full object-cover transition-transform duration-1000 hover:scale-105"
                loading="lazy"
              />
            </div>
          </div>
          
          {/* Top right smaller image */}
          <div className="md:col-span-4 h-64 md:h-auto">
            <div className="h-full w-full overflow-hidden rounded-sm bg-cafe-stone/20">
              <img
                src={counterImg}
                alt="Cafe Counter"
                className="h-full w-full object-cover transition-transform duration-1000 hover:scale-105"
                loading="lazy"
              />
            </div>
          </div>
          
          {/* Bottom right smaller image */}
          <div className="md:col-span-4 h-64 md:h-auto">
            <div className="h-full w-full overflow-hidden rounded-sm bg-cafe-stone/20">
              <img
                src={pastryImg}
                alt="Pastry Display"
                className="h-full w-full object-cover transition-transform duration-1000 hover:scale-105"
                loading="lazy"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
