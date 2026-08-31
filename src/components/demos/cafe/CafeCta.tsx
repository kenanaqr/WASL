import React from 'react';

interface CafeCtaProps {
  onScrollTo: (id: string) => void;
}

export const CafeCta: React.FC<CafeCtaProps> = ({ onScrollTo }) => {
  return (
    <section className="bg-cafe-espresso py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        
        <h2 className="font-cafe-display text-4xl sm:text-5xl md:text-6xl text-cafe-cream">
          See you over coffee.
        </h2>
        
        <p className="mt-6 font-cafe-arabic text-2xl sm:text-3xl text-cafe-cream/90">
          نلتقي على فنجان قهوة.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
          <button
            onClick={() => onScrollTo('menu')}
            className="w-full sm:w-auto rounded-sm bg-cafe-cream px-8 py-3.5 font-cafe-body text-sm font-medium text-cafe-espresso transition-colors hover:bg-white"
          >
            View Menu
          </button>
          <button
            onClick={() => onScrollTo('visit')}
            className="w-full sm:w-auto rounded-sm border border-cafe-cream/30 bg-transparent px-8 py-3.5 font-cafe-body text-sm font-medium text-cafe-cream transition-colors hover:bg-cafe-cream/10"
          >
            Get Directions
          </button>
        </div>

      </div>
    </section>
  );
};
