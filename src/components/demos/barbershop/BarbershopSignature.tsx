import React from 'react';
import { lineaConfig } from '../../../data/demos/barbershopConfig';
import beardImg from '../../../assets/demos/barbershop/beard.jpg';

export const BarbershopSignature: React.FC = () => {
  const sig = lineaConfig.signature;

  return (
    <section className="bg-linea-bone py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden rounded-sm">

          {/* Image */}
          <div className="h-80 lg:h-auto relative overflow-hidden">
            <img
              src={beardImg}
              alt="The LINEA Session"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>

          {/* Content */}
          <div className="bg-linea-carbon p-10 sm:p-16 flex flex-col justify-center">
            <span className="font-linea-body text-[11px] uppercase tracking-[0.2em] text-linea-copper mb-6">
              Signature Service
            </span>

            <h3 className="font-linea-display text-3xl sm:text-4xl font-semibold text-linea-bone tracking-tight mb-2">
              {sig.name}
            </h3>
            <p className="font-linea-arabic text-lg text-linea-copper/80 mb-8">
              {sig.arabicName}
            </p>

            <p className="font-linea-body text-base text-linea-slate leading-relaxed mb-10">
              {sig.description}
            </p>

            <div className="flex items-center justify-between border-t border-linea-slate/15 pt-8">
              <span className="font-linea-display text-2xl font-medium text-linea-copper">
                {sig.price}
              </span>
              <a
                href={lineaConfig.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-sm bg-linea-copper px-6 py-3 font-linea-body text-[11px] uppercase tracking-[0.15em] text-white transition-colors hover:bg-linea-copper/80"
              >
                Book via WhatsApp
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
