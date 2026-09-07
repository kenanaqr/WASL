import React from 'react';

export const CustomerJourney: React.FC = () => {
  return (
    <section className="bg-alabaster py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4 lg:gap-8 border-t border-petrol/20 pt-16">
          
          <div className="flex flex-col relative group">
            <span className="text-xs font-bold text-petrol-light mb-6 tracking-widest">01</span>
            <h3 className="text-2xl font-bold mb-2 text-petrol">FIND</h3>
            <p className="text-sm font-semibold uppercase tracking-widest text-charcoal-muted mb-8">Google / Maps</p>
            {/* Interface Artifact */}
            <div className="w-full aspect-[4/3] bg-white rounded-md shadow-sm border border-neutral-200 p-4 flex flex-col gap-3 group-hover:-translate-y-2 transition-transform duration-500">
              <div className="w-1/2 h-3 bg-neutral-200 rounded-full"></div>
              <div className="w-3/4 h-2 bg-neutral-100 rounded-full"></div>
              <div className="flex gap-2 mt-auto">
                <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center text-xs">↗</div>
                <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center text-xs">📞</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col relative group">
            <span className="text-xs font-bold text-petrol-light mb-6 tracking-widest">02</span>
            <h3 className="text-2xl font-bold mb-2 text-petrol">EXPLORE</h3>
            <p className="text-sm font-semibold uppercase tracking-widest text-charcoal-muted mb-8">Website / Menu</p>
            {/* Interface Artifact */}
            <div className="w-full aspect-[4/3] bg-petrol rounded-md shadow-sm border border-petrol-dark p-4 flex flex-col gap-3 group-hover:-translate-y-2 transition-transform duration-500">
              <div className="w-full h-24 bg-petrol-light/20 rounded-sm mb-2"></div>
              <div className="w-1/3 h-2 bg-alabaster/40 rounded-full mx-auto"></div>
              <div className="w-1/4 h-2 bg-alabaster/20 rounded-full mx-auto"></div>
            </div>
          </div>

          <div className="flex flex-col relative group">
            <span className="text-xs font-bold text-petrol-light mb-6 tracking-widest">03</span>
            <h3 className="text-2xl font-bold mb-2 text-petrol">ACT</h3>
            <p className="text-sm font-semibold uppercase tracking-widest text-charcoal-muted mb-8">WhatsApp / Call</p>
            {/* Interface Artifact */}
            <div className="w-full aspect-[4/3] bg-green-500 rounded-md shadow-sm p-4 flex flex-col justify-end group-hover:-translate-y-2 transition-transform duration-500">
              <div className="w-3/4 h-8 bg-white rounded-t-xl rounded-br-xl ml-auto mb-2 opacity-90"></div>
              <div className="w-2/3 h-8 bg-green-400 rounded-t-xl rounded-bl-xl mr-auto"></div>
            </div>
          </div>

          <div className="flex flex-col relative group">
            <span className="text-xs font-bold text-petrol-light mb-6 tracking-widest">04</span>
            <h3 className="text-2xl font-bold mb-2 text-petrol">RETURN</h3>
            <p className="text-sm font-semibold uppercase tracking-widest text-charcoal-muted mb-8">Review / Revisit</p>
            {/* Interface Artifact */}
            <div className="w-full aspect-[4/3] bg-warm-sand rounded-md shadow-sm border border-warm-sand/50 p-4 flex flex-col items-center justify-center gap-2 group-hover:-translate-y-2 transition-transform duration-500">
              <div className="flex gap-1">
                <span className="text-2xl text-petrol">★</span>
                <span className="text-2xl text-petrol">★</span>
                <span className="text-2xl text-petrol">★</span>
                <span className="text-2xl text-petrol">★</span>
                <span className="text-2xl text-petrol">★</span>
              </div>
              <div className="w-1/2 h-2 bg-petrol/20 rounded-full mt-2"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
