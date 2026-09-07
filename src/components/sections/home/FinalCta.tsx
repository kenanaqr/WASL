import React from 'react';

export const FinalCta: React.FC = () => {
  return (
    <section className="bg-alabaster py-32 sm:py-48 text-center border-t border-petrol/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <h2 className="font-cafe-display text-5xl sm:text-6xl md:text-7xl font-semibold text-petrol tracking-tight mb-16">
          Let's put your business where your customers already are.
        </h2>
        
        <div className="flex justify-center">
          <a
            href="https://wa.me/962000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 px-8 py-5 bg-petrol text-alabaster text-base sm:text-lg font-bold uppercase tracking-widest rounded-sm transition-all hover:bg-petrol-light focus:outline-none focus-visible:ring-2 focus-visible:ring-petrol focus-visible:ring-offset-2 shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            Start a conversation
            {/* Simple SVG icon for WhatsApp or a simple text arrow to keep it minimal */}
            <span className="text-xl leading-none">&rarr;</span>
          </a>
        </div>

      </div>
    </section>
  );
};
