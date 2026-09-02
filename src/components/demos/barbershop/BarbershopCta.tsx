import React from 'react';
import { lineaConfig } from '../../../data/demos/barbershopConfig';

export const BarbershopCta: React.FC = () => {
  return (
    <section className="bg-linea-carbon py-32 sm:py-44 relative overflow-hidden">

      {/* Subtle decorative accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-linea-copper/5 pointer-events-none"></div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center relative z-10">

        <h2 className="font-linea-display text-4xl sm:text-5xl md:text-6xl font-semibold text-linea-bone leading-tight tracking-tight max-w-2xl mx-auto">
          Ready for a sharper look?
        </h2>

        <p className="mt-6 font-linea-arabic text-xl sm:text-2xl text-linea-copper">
          جاهز لإطلالة أرتب؟
        </p>

        <div className="mt-14 flex flex-col sm:flex-row justify-center items-center gap-4">
          <a
            href={lineaConfig.contact.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto rounded-sm bg-linea-copper px-10 py-4 font-linea-body text-[11px] uppercase tracking-[0.15em] text-white transition-colors hover:bg-linea-bone hover:text-linea-carbon"
          >
            WhatsApp
          </a>

          <a
            href="https://google.com/maps"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto text-center rounded-sm border border-linea-bone/25 bg-transparent px-10 py-4 font-linea-body text-[11px] uppercase tracking-[0.15em] text-linea-bone transition-colors hover:bg-linea-bone/10 hover:border-linea-bone/50"
          >
            Get Directions
          </a>
        </div>

      </div>
    </section>
  );
};
