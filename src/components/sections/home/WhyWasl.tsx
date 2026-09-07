import React from 'react';

export const WhyWasl: React.FC = () => {
  return (
    <section className="bg-petrol py-24 sm:py-32 text-alabaster border-t border-petrol-light/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-20">
          <h2 className="font-cafe-display text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight max-w-2xl">
            Built for local businesses.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          
          <div className="flex flex-col border-t border-petrol-light/20 pt-8">
            <h3 className="text-2xl font-bold mb-4">Local by nature.</h3>
            <p className="text-base text-alabaster/80 leading-relaxed">
              We understand how local businesses actually operate.
            </p>
          </div>

          <div className="flex flex-col border-t border-petrol-light/20 pt-8">
            <h3 className="text-2xl font-bold mb-4">Built around you.</h3>
            <p className="text-base text-alabaster/80 leading-relaxed">
              No generic template pretending to be your business.
            </p>
          </div>

          <div className="flex flex-col border-t border-petrol-light/20 pt-8">
            <h3 className="text-2xl font-bold mb-4">Made to evolve.</h3>
            <p className="text-base text-alabaster/80 leading-relaxed">
              We stay available after launch.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
