import React from 'react';
import haircutImg from '../../../assets/demos/barbershop/haircut.webp';
import resultImg from '../../../assets/demos/barbershop/result.webp';
import beardImg from '../../../assets/demos/barbershop/beard.webp';
import toolsImg from '../../../assets/demos/barbershop/tools.webp';

export const BarbershopGallery: React.FC = () => {
  return (
    <section id="work" className="bg-linea-carbon py-24 sm:py-32 border-t border-linea-slate/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="mb-16 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
          <div>
            <h2 className="font-linea-display text-3xl sm:text-4xl md:text-5xl font-semibold text-linea-bone tracking-tight">
              The work speaks<br className="hidden sm:block" /> for itself.
            </h2>
          </div>
          <span className="font-linea-body text-[11px] uppercase tracking-[0.2em] text-linea-copper">
            Portfolio
          </span>
        </div>

        {/* Asymmetric Editorial Grid — deliberately different from DAR/NARA gallery layouts */}
        <div className="grid grid-cols-2 md:grid-cols-12 gap-3 sm:gap-4">

          {/* Large left - clipper detail */}
          <div className="col-span-2 md:col-span-7 h-72 sm:h-96 md:h-[520px] overflow-hidden rounded-sm group">
            <img
              src={haircutImg}
              alt="Precision fade detail"
              width={1024}
              height={1024}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
          </div>

          {/* Right column - stacked */}
          <div className="col-span-2 md:col-span-5 flex flex-col gap-3 sm:gap-4">

            {/* Finished result portrait */}
            <div className="group relative aspect-[3/4] overflow-hidden rounded-sm bg-neutral-900">
              <img
                src={resultImg}
                alt="Finished modern haircut"
                width={896}
                height={1200}
                className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
            </div>

            {/* Bottom row split */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="group relative aspect-square overflow-hidden rounded-sm bg-neutral-900">
                <img
                  src={beardImg}
                  alt="Beard grooming"
                  width={1024}
                  height={1024}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="group relative aspect-square overflow-hidden rounded-sm bg-neutral-900">
                <img
                  src={toolsImg}
                  alt="Barber tools"
                  width={1024}
                  height={1024}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
