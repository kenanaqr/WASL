import React from 'react';
import haircutImg from '../../../assets/demos/barbershop/haircut.jpg';
import resultImg from '../../../assets/demos/barbershop/result.jpg';
import beardImg from '../../../assets/demos/barbershop/beard.jpg';
import toolsImg from '../../../assets/demos/barbershop/tools.jpg';

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
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              loading="lazy"
            />
          </div>

          {/* Right column - stacked */}
          <div className="col-span-2 md:col-span-5 flex flex-col gap-3 sm:gap-4">

            {/* Finished result portrait */}
            <div className="h-60 sm:h-72 md:flex-1 overflow-hidden rounded-sm group">
              <img
                src={resultImg}
                alt="Finished modern haircut"
                className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                loading="lazy"
              />
            </div>

            {/* Bottom row split */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="h-40 sm:h-48 overflow-hidden rounded-sm group">
                <img
                  src={beardImg}
                  alt="Beard grooming"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>
              <div className="h-40 sm:h-48 overflow-hidden rounded-sm group">
                <img
                  src={toolsImg}
                  alt="Barber tools"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
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
