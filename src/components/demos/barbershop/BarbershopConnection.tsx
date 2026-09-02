import React from 'react';
import touchpointImg from '../../../assets/demos/barbershop/touchpoint.jpg';

export const BarbershopConnection: React.FC = () => {
  return (
    <section className="bg-linea-carbon py-24 sm:py-32 border-t border-linea-slate/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col md:flex-row items-center justify-between gap-12 bg-[#1e1d1b] rounded-sm p-8 md:p-14 border border-linea-slate/10">

          <div className="max-w-lg text-center md:text-left">
            <h2 className="font-linea-display text-3xl sm:text-4xl font-semibold text-linea-bone tracking-tight mb-5">
              One tap, everything you need.
            </h2>
            <p className="font-linea-body text-linea-slate text-base leading-relaxed mb-8">
              Every station at LINEA has a discreet NFC touchpoint. Tap your phone to book your next visit, find directions, or leave a review — no app required.
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-3">
              <span className="inline-flex items-center px-3 py-1.5 rounded-full border border-linea-copper/25 text-[11px] font-linea-body uppercase tracking-[0.12em] text-linea-copper">
                Book via WhatsApp
              </span>
              <span className="inline-flex items-center px-3 py-1.5 rounded-full border border-linea-copper/25 text-[11px] font-linea-body uppercase tracking-[0.12em] text-linea-copper">
                Find Us
              </span>
              <span className="inline-flex items-center px-3 py-1.5 rounded-full border border-linea-copper/25 text-[11px] font-linea-body uppercase tracking-[0.12em] text-linea-copper">
                Leave a Review
              </span>
            </div>
          </div>

          <div className="flex-shrink-0 relative group">
            <div className="h-52 w-52 md:h-64 md:w-64 rounded-sm overflow-hidden bg-linea-slate/5 border border-linea-slate/15 transition-colors group-hover:border-linea-copper/30">
              <img
                src={touchpointImg}
                alt="LINEA NFC Touchpoint"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 text-center w-full">
              <span className="font-linea-body text-[10px] uppercase tracking-[0.2em] text-linea-slate/40">Physical Touchpoint Concept</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
