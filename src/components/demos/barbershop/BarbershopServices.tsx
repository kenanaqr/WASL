import React from 'react';
import { lineaConfig } from '../../../data/demos/barbershopConfig';

export const BarbershopServices: React.FC = () => {
  return (
    <section id="services" className="bg-linea-carbon py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <h2 className="font-linea-display text-3xl sm:text-4xl md:text-5xl font-semibold text-linea-bone tracking-tight mb-4">
            Services
          </h2>
          <div className="h-px w-12 bg-linea-copper mx-auto"></div>
        </div>

        <div className="space-y-0">
          {lineaConfig.services.map((service, idx) => (
            <div
              key={idx}
              className="group flex items-baseline justify-between py-7 border-b border-linea-slate/15 transition-colors hover:border-linea-copper/30"
            >
              <div className="flex-1 min-w-0">
                <div className="flex items-baseline gap-4 mb-1.5">
                  <h3 className="font-linea-display text-xl sm:text-2xl font-medium text-linea-bone group-hover:text-linea-copper transition-colors">
                    {service.name}
                  </h3>
                  <span className="font-linea-arabic text-sm text-linea-copper/70">
                    {service.arabicName}
                  </span>
                </div>
                <p className="font-linea-body text-sm text-linea-slate leading-relaxed pr-8">
                  {service.description}
                </p>
              </div>
              <span className="font-linea-body text-sm font-medium tracking-wider text-linea-copper whitespace-nowrap">
                {service.price}
              </span>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center font-linea-body text-xs text-linea-slate/50 italic">
          Fictional concept prices for portfolio demonstration.
        </p>

      </div>
    </section>
  );
};
