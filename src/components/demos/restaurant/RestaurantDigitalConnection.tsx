import React from 'react';

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
            <div className="h-48 w-48 md:h-64 md:w-64 bg-[#1a1917] rounded-sm flex flex-col items-center justify-center border border-dar-brass/20 transition-colors group-hover:border-dar-brass/40 relative overflow-hidden">
              
              {/* Concept styling for a physical table card */}
              <div className="w-2/3 h-3/4 bg-dar-midnight border border-dar-brass/30 shadow-2xl flex flex-col items-center justify-center p-4 relative z-10">
                <span className="font-dar-display text-lg text-dar-ivory mb-4">DAR</span>
                
                {/* Generic QR code representation */}
                <div className="w-16 h-16 bg-white p-1">
                  <svg className="w-full h-full text-dar-midnight" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3 3h8v8H3V3zm2 2v4h4V5H5zm8-2h8v8h-8V3zm2 2v4h4V5h-4zM3 13h8v8H3v-8zm2 2v4h4v-4H5zm13-2h3v2h-3v-2zm-3 0h2v2h-2v-2zm3 3h3v2h-3v-2zm-3 0h2v2h-2v-2zm3 3h3v2h-3v-2zm-3 0h2v2h-2v-2z"/>
                  </svg>
                </div>
                
                <span className="mt-4 font-dar-body text-[10px] uppercase tracking-widest text-dar-stone/60">Tap to connect</span>
              </div>

              {/* Decorative lighting effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-dar-brass/5 to-transparent pointer-events-none"></div>
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
