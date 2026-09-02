import React from 'react';
import touchpointImg from '../../../assets/demos/restaurant/touchpoint.jpg';

export const RestaurantDigitalConnection: React.FC = () => {
  return (
    <section className="bg-dar-midnight py-24 sm:py-32 border-t border-dar-brass/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 bg-[#121110] rounded-sm p-8 md:p-16 border border-dar-brass/10">
          
          <div className="max-w-xl text-center md:text-left">
            <h2 className="font-dar-display text-3xl sm:text-4xl text-dar-ivory mb-6">
              Connected dining.
            </h2>
            <p className="font-dar-body text-dar-stone text-base leading-relaxed mb-8">
              Every table at DAR features a subtle touchpoint. Simply tap your phone to instantly access the digital menu, request the bill, or save our location for next time.
            </p>
            
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full border border-dar-brass/20 text-xs font-dar-body uppercase tracking-widest text-dar-brass">
                Menu
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full border border-dar-brass/20 text-xs font-dar-body uppercase tracking-widest text-dar-brass">
                Directions
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full border border-dar-brass/20 text-xs font-dar-body uppercase tracking-widest text-dar-brass">
                Contact
              </span>
            </div>
          </div>

          <div className="flex-shrink-0 relative group">
            <div className="h-48 w-48 md:h-64 md:w-64 rounded-sm overflow-hidden bg-dar-stone/5 border border-dar-brass/20 transition-colors group-hover:border-dar-brass/40">
              <img
                src={touchpointImg}
                alt="DAR Physical Touchpoint Card"
                className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            
            <div className="absolute -bottom-6 text-center w-full">
              <span className="font-dar-body text-[10px] uppercase tracking-[0.2em] text-dar-stone/40">Physical Touchpoint Concept</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
