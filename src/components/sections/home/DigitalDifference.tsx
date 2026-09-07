import React from 'react';

export const DigitalDifference: React.FC = () => {
  return (
    <section className="bg-neutral-100 py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          
          {/* BEFORE (Fragmented) */}
          <div className="flex flex-col gap-12">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-petrol-light mb-4">Before WASL</h3>
              <p className="font-cafe-display text-3xl sm:text-4xl text-petrol font-semibold tracking-tight">
                A disconnected customer experience.
              </p>
            </div>
            
            <div className="relative h-64 sm:h-80 w-full">
              {/* Floating fragmented touchpoints */}
              <div className="absolute top-0 left-0 bg-white p-4 rounded-md shadow-sm border border-neutral-200 rotate-[-3deg]">
                <div className="w-24 h-3 bg-neutral-200 rounded-sm mb-2"></div>
                <div className="w-16 h-2 bg-neutral-100 rounded-sm"></div>
                <span className="text-[10px] font-bold text-petrol/40 uppercase tracking-widest mt-2 block">Google</span>
              </div>

              <div className="absolute top-12 right-4 bg-white p-4 rounded-md shadow-sm border border-neutral-200 rotate-[4deg]">
                <div className="flex gap-2 mb-2">
                  <span className="text-yellow-400 text-xs">★★★★★</span>
                </div>
                <div className="w-32 h-2 bg-neutral-100 rounded-sm"></div>
                <span className="text-[10px] font-bold text-petrol/40 uppercase tracking-widest mt-2 block">Reviews</span>
              </div>

              <div className="absolute top-32 left-8 bg-green-500 p-4 rounded-t-xl rounded-br-xl rounded-bl-sm shadow-sm rotate-[-1deg] w-40">
                <div className="w-full h-2 bg-white/50 rounded-sm mb-2"></div>
                <div className="w-2/3 h-2 bg-white/50 rounded-sm"></div>
                <span className="text-[10px] font-bold text-white uppercase tracking-widest mt-2 block">WhatsApp</span>
              </div>

              <div className="absolute bottom-4 right-12 bg-white p-4 rounded-md shadow-sm border border-neutral-200 rotate-[2deg] w-48">
                <div className="w-full h-20 bg-neutral-100 rounded-sm mb-2 flex items-center justify-center">
                  <span className="text-xs text-neutral-300">Menu PDF</span>
                </div>
              </div>
            </div>
          </div>

          {/* AFTER (Unified) */}
          <div className="flex flex-col gap-12">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-petrol-light mb-4">With WASL</h3>
              <p className="font-cafe-display text-3xl sm:text-4xl text-petrol font-semibold tracking-tight">
                One seamless digital front door.
              </p>
            </div>

            <div className="relative h-64 sm:h-80 w-full flex items-center justify-center">
              {/* Unified interface artifact */}
              <div className="w-64 h-full bg-petrol rounded-t-3xl rounded-b-md shadow-2xl border-4 border-petrol-dark overflow-hidden flex flex-col relative z-10">
                {/* Header */}
                <div className="px-4 py-6 bg-petrol-light/10 text-center border-b border-petrol-light/20">
                  <div className="w-16 h-16 bg-petrol-light/20 rounded-full mx-auto mb-3"></div>
                  <div className="w-24 h-3 bg-alabaster/80 rounded-sm mx-auto mb-2"></div>
                  <div className="w-32 h-2 bg-alabaster/40 rounded-sm mx-auto"></div>
                </div>
                {/* Actions */}
                <div className="p-4 flex gap-2">
                  <div className="flex-1 h-10 bg-alabaster rounded-sm flex items-center justify-center">
                    <span className="text-[10px] font-bold text-petrol uppercase tracking-widest">Order</span>
                  </div>
                  <div className="w-10 h-10 bg-petrol-light/20 rounded-sm"></div>
                </div>
                {/* Content */}
                <div className="p-4 space-y-3">
                  <div className="w-full h-16 bg-petrol-light/10 rounded-sm"></div>
                  <div className="w-full h-16 bg-petrol-light/10 rounded-sm"></div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
