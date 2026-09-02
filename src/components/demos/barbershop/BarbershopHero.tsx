import React from 'react';
import { lineaConfig } from '../../../data/demos/barbershopConfig';
import heroImg from '../../../assets/demos/barbershop/hero.jpg';

interface BarbershopHeroProps {
  onScrollTo: (id: string) => void;
}

export const BarbershopHero: React.FC<BarbershopHeroProps> = ({ onScrollTo }) => {
  return (
    <section id="home" className="relative min-h-[90vh] flex flex-col justify-end overflow-hidden bg-linea-carbon">

      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImg}
          alt="Barber at work"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-linea-carbon via-linea-carbon/50 to-linea-carbon/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pb-20 sm:pb-28">

        <p className="font-linea-body text-[11px] sm:text-xs font-medium uppercase tracking-[0.25em] text-linea-copper mb-6">
          {lineaConfig.descriptor}
        </p>

        <h1 className="font-linea-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold text-linea-bone leading-[0.95] tracking-tight max-w-3xl">
          Sharp by<br />design.
        </h1>

        <p className="mt-5 font-linea-arabic text-xl sm:text-2xl text-linea-bone/70">
          أناقة تبدأ بالتفاصيل.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row items-start gap-4">
          <button
            onClick={() => onScrollTo('services')}
            className="w-full sm:w-auto rounded-sm bg-linea-copper px-8 py-4 font-linea-body text-[11px] uppercase tracking-[0.15em] text-white transition-colors hover:bg-linea-bone hover:text-linea-carbon"
          >
            View Services
          </button>
          <a
            href={lineaConfig.contact.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto text-center rounded-sm border border-linea-bone/30 bg-transparent px-8 py-4 font-linea-body text-[11px] uppercase tracking-[0.15em] text-linea-bone transition-colors hover:bg-linea-bone/10 hover:border-linea-bone/60"
          >
            WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
};
