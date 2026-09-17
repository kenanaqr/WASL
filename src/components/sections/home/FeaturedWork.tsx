import React from 'react';
import naraHero from '../../../assets/demos/cafe/hero.webp';
import darHero from '../../../assets/demos/restaurant/hero.webp';
import lineaHero from '../../../assets/demos/barbershop/hero.webp';

interface FeaturedWorkProps {
  onNavigate: (path: string) => void;
}

export const FeaturedWork: React.FC<FeaturedWorkProps> = ({ onNavigate }) => {
  return (
    <section className="bg-alabaster py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-20 sm:mb-32">
          <h2 className="font-cafe-display text-4xl sm:text-5xl lg:text-6xl text-petrol font-semibold tracking-tight">
            Three businesses. Three experiences.
          </h2>
        </div>

        <div className="space-y-32 sm:space-y-48">
          
          {/* NARA */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            <div className="lg:col-span-8 order-2 lg:order-1">
              <button 
                onClick={() => onNavigate('/demos/cafe')}
                className="relative aspect-[4/3] w-full overflow-hidden rounded-sm group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-petrol focus-visible:ring-offset-4"
                aria-label="View NARA Concept"
              >
                <div className="absolute inset-0 bg-petrol/0 sm:group-hover:bg-petrol/5 transition-colors z-10 pointer-events-none" />
                <img 
                  src={naraHero} 
                  alt="NARA Café Concept" 
                  className="w-full h-full object-cover transition-transform duration-[1500ms] sm:group-hover:scale-[1.03]"
                  loading="lazy" 
                />
              </button>
            </div>
            <div className="lg:col-span-4 order-1 lg:order-2 flex flex-col items-start">
              <div className="flex items-baseline gap-4 mb-4">
                <span className="text-sm font-bold text-petrol-light">01</span>
                <button onClick={() => onNavigate('/demos/cafe')} className="group/title flex items-center gap-2 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-petrol focus-visible:ring-offset-4 rounded-sm">
                  <h3 className="font-cafe-display text-4xl text-petrol font-semibold tracking-tight group-hover/title:text-petrol-light transition-colors">NARA | نارا</h3>
                  <span className="opacity-0 -translate-x-2 group-hover/title:opacity-100 group-hover/title:translate-x-0 transition-all text-petrol text-2xl leading-none">↗</span>
                </button>
              </div>
              <p className="text-sm font-semibold uppercase tracking-widest text-charcoal-muted mb-8">
                Café · Breakfast · Amman
              </p>
              <button
                onClick={() => onNavigate('/demos/cafe')}
                className="inline-flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-charcoal hover:text-petrol transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-petrol focus-visible:ring-offset-4 rounded-sm"
              >
                View Project &rarr;
              </button>
            </div>
          </div>

          {/* DAR */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            <div className="lg:col-span-4 flex flex-col items-start lg:items-end lg:text-right">
              <div className="flex items-baseline gap-4 mb-4 lg:flex-row-reverse">
                <span className="text-sm font-bold text-petrol-light">02</span>
                <button onClick={() => onNavigate('/demos/restaurant')} className="group/title flex items-center gap-2 text-left lg:text-right lg:flex-row-reverse focus:outline-none focus-visible:ring-2 focus-visible:ring-petrol focus-visible:ring-offset-4 rounded-sm">
                  <h3 className="font-dar-display text-4xl text-petrol font-semibold tracking-tight group-hover/title:text-petrol-light transition-colors">DAR | دار</h3>
                  <span className="opacity-0 lg:translate-x-2 lg:-translate-x-0 -translate-x-2 group-hover/title:opacity-100 group-hover/title:-translate-x-2 lg:group-hover/title:translate-x-0 transition-all text-petrol text-2xl leading-none">↗</span>
                </button>
              </div>
              <p className="text-sm font-semibold uppercase tracking-widest text-charcoal-muted mb-8">
                Contemporary Levantine Dining
              </p>
              <button
                onClick={() => onNavigate('/demos/restaurant')}
                className="inline-flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-charcoal hover:text-petrol transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-petrol focus-visible:ring-offset-4 rounded-sm lg:flex-row-reverse"
              >
                View Project &larr;
              </button>
            </div>
            <div className="lg:col-span-8">
              <button 
                onClick={() => onNavigate('/demos/restaurant')}
                className="relative aspect-[3/4] sm:aspect-[4/5] lg:aspect-[16/9] w-full overflow-hidden rounded-sm group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-petrol focus-visible:ring-offset-4"
                aria-label="View DAR Concept"
              >
                <div className="absolute inset-0 bg-petrol/0 sm:group-hover:bg-petrol/5 transition-colors z-10 pointer-events-none" />
                <img 
                  src={darHero} 
                  alt="DAR Dining Experience" 
                  className="w-full h-full object-cover transition-transform duration-[1500ms] sm:group-hover:scale-[1.03]"
                  loading="lazy" 
                />
              </button>
            </div>
          </div>

          {/* LINEA */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            <div className="lg:col-span-8 order-2 lg:order-1">
              <button 
                onClick={() => onNavigate('/demos/barbershop')}
                className="relative aspect-[16/9] w-full overflow-hidden rounded-sm group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-petrol focus-visible:ring-offset-4"
                aria-label="View LINEA Concept"
              >
                <div className="absolute inset-0 bg-petrol/0 sm:group-hover:bg-petrol/5 transition-colors z-10 pointer-events-none" />
                <img 
                  src={lineaHero} 
                  alt="LINEA Barbering" 
                  className="w-full h-full object-cover transition-transform duration-[1500ms] sm:group-hover:scale-[1.03]"
                  loading="lazy" 
                />
              </button>
            </div>
            <div className="lg:col-span-4 order-1 lg:order-2 flex flex-col items-start">
              <div className="flex items-baseline gap-4 mb-4">
                <span className="text-sm font-bold text-petrol-light">03</span>
                <button onClick={() => onNavigate('/demos/barbershop')} className="group/title flex items-center gap-2 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-petrol focus-visible:ring-offset-4 rounded-sm">
                  <h3 className="font-linea-display text-4xl text-petrol font-semibold tracking-tight group-hover/title:text-petrol-light transition-colors">LINEA | لاينا</h3>
                  <span className="opacity-0 -translate-x-2 group-hover/title:opacity-100 group-hover/title:translate-x-0 transition-all text-petrol text-2xl leading-none">↗</span>
                </button>
              </div>
              <p className="text-sm font-semibold uppercase tracking-widest text-charcoal-muted mb-8">
                Barbering · Grooming · Amman
              </p>
              <button
                onClick={() => onNavigate('/demos/barbershop')}
                className="inline-flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-charcoal hover:text-petrol transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-petrol focus-visible:ring-offset-4 rounded-sm"
              >
                View Project &rarr;
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
