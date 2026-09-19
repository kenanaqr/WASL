import React from 'react';
import { lineaConfig } from '../../../data/demos/barbershopConfig';
import interiorImg from '../../../assets/demos/barbershop/interior.webp';

export const BarbershopVisit: React.FC = () => {
  return (
    <section id="visit" className="bg-linea-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">

          {/* Info */}
          <div>
            <h2 className="font-linea-display text-4xl sm:text-5xl font-semibold text-linea-carbon tracking-tight mb-12">
              Visit
            </h2>

            <div className="space-y-10">

              <div>
                <h3 className="font-linea-body text-[11px] font-semibold uppercase tracking-[0.15em] text-linea-copper mb-4">Location</h3>
                <p className="font-linea-body text-lg text-linea-carbon mb-1">
                  {lineaConfig.address.split('—')[0].trim()}
                </p>
                <p className="font-linea-body text-linea-slate mb-3">
                  {lineaConfig.address.split('—').slice(1).join('—').trim()}
                </p>
                <p className="font-linea-body text-xs text-linea-slate/50 italic mb-5">
                  {lineaConfig.addressSub}
                </p>
                <a
                  href="https://google.com/maps"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block border-b border-linea-copper pb-1 font-linea-body text-sm tracking-wide text-linea-carbon transition-colors hover:text-linea-copper"
                >
                  Get Directions &rarr;
                </a>
              </div>

              <div>
                <h3 className="font-linea-body text-[11px] font-semibold uppercase tracking-[0.15em] text-linea-copper mb-4">Hours</h3>
                <p className="font-linea-body text-lg text-linea-carbon">
                  {lineaConfig.hours}
                </p>
              </div>

              <div>
                <h3 className="font-linea-body text-[11px] font-semibold uppercase tracking-[0.15em] text-linea-copper mb-4">Contact</h3>
                <div className="flex flex-col gap-3">
                  <a href={lineaConfig.contact.whatsappLink} target="_blank" rel="noopener noreferrer" className="font-linea-body text-lg text-linea-carbon hover:text-linea-copper transition-colors">
                    WhatsApp: {lineaConfig.contact.whatsapp}
                  </a>
                  <a href={lineaConfig.contact.phoneLink} className="font-linea-body text-lg text-linea-carbon hover:text-linea-copper transition-colors">
                    Call: {lineaConfig.contact.phone}
                  </a>
                  <a href={lineaConfig.contact.instagramLink} target="_blank" rel="noopener noreferrer" className="font-linea-body text-lg text-linea-carbon hover:text-linea-copper transition-colors">
                    Instagram: {lineaConfig.contact.instagram}
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Interior Image */}
          <div className="h-[400px] lg:h-auto w-full overflow-hidden rounded-sm">
            <img
              src={interiorImg}
              alt="LINEA Barbershop Interior"
              width={1200}
              height={896}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>

        </div>

      </div>
    </section>
  );
};
