import React from 'react';
import interiorImg from '../../../assets/demos/restaurant/interior.jpg';

export const RestaurantGallery: React.FC = () => {
  return (
    <section className="bg-dar-midnight py-24 sm:py-32 border-t border-dar-brass/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="mb-16 md:mb-24 flex justify-between items-end">
          <h2 className="font-dar-display text-3xl sm:text-4xl text-dar-ivory">
            The Experience
          </h2>
          <span className="hidden md:block font-dar-body text-xs uppercase tracking-[0.3em] text-dar-brass">
            Dar / دار
          </span>
        </div>

        {/* Asymmetrical Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6">
          
          {/* Main large image (Interior) */}
          <div className="md:col-span-7 h-96 md:h-[600px]">
            <div className="h-full w-full overflow-hidden rounded-sm bg-dar-stone/5">
              <img
                src={interiorImg}
                alt="DAR Restaurant Interior"
                className="h-full w-full object-cover transition-transform duration-1000 hover:scale-105"
                loading="lazy"
              />
            </div>
          </div>
          
          <div className="md:col-span-5 flex flex-col gap-4 sm:gap-6">
            {/* Top right smaller image (Atmosphere / placeholder) */}
            <div className="h-64 md:h-2/3">
              <div className="h-full w-full overflow-hidden rounded-sm bg-[#1a1917] flex items-center justify-center border border-dar-brass/10">
                <span className="font-dar-body text-xs text-dar-stone/40 uppercase tracking-[0.2em]">Atmosphere Placeholder</span>
              </div>
            </div>
            
            {/* Bottom right text/accent */}
            <div className="h-32 md:h-1/3 bg-dar-burgundy/10 rounded-sm p-8 flex flex-col justify-center border border-dar-burgundy/20">
              <p className="font-dar-display text-2xl text-dar-ivory italic">
                "Where time slows down."
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
