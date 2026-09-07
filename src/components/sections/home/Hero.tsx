import React from 'react';

interface HeroProps {
  onNavigate: (path: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section className="relative flex flex-col justify-center bg-alabaster pt-32 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col items-center text-center gap-6 lg:gap-8">
        
        {/* Small brand label */}
        <div className="mb-4">
          <span className="text-sm font-bold tracking-widest uppercase text-petrol-light">WASL | وصل</span>
        </div>

        <div className="max-w-4xl flex flex-col items-center">
          <h1 className="font-cafe-display text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] text-petrol font-semibold tracking-tight leading-[1.05] mb-6">
            Your business,<br />closer to your customer.
          </h1>
          <p className="text-xl sm:text-2xl text-charcoal-muted max-w-2xl font-medium mb-4">
            Websites, Google presence, and digital touchpoints for local businesses.
          </p>
          <p className="font-arabic text-2xl sm:text-3xl text-petrol-light/60">
            نقرب الأعمال من عملائها.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mt-8">
          <a
            href="https://wa.me/962000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-petrol text-alabaster text-sm font-bold uppercase tracking-widest rounded-sm transition-all hover:bg-petrol-light focus:outline-none focus-visible:ring-2 focus-visible:ring-petrol focus-visible:ring-offset-2"
          >
            Start a conversation
          </a>
          <button
            onClick={() => onNavigate('/work')}
            className="inline-flex items-center justify-center px-8 py-4 bg-transparent border border-petrol/20 text-petrol text-sm font-bold uppercase tracking-widest rounded-sm transition-all hover:bg-petrol/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-petrol focus-visible:ring-offset-2"
          >
            Explore our work
          </button>
        </div>
      </div>
    </section>
  );
};
