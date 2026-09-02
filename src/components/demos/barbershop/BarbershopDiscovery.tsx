import React from 'react';

export const BarbershopDiscovery: React.FC = () => {
  return (
    <section className="bg-linea-bone py-24 border-t border-linea-slate/10">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">

        <h2 className="font-linea-display text-3xl sm:text-4xl font-semibold text-linea-carbon tracking-tight mb-5">
          Found nearby.<br />Chosen for the work.
        </h2>

        <p className="font-linea-body text-base text-linea-slate max-w-lg mx-auto mb-10">
          LINEA shows up when you search for quality barbering in Amman. Find us on Google Maps for directions to our Jabal Al-Weibdeh location.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-5">
          <a
            href="https://google.com/maps"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 bg-linea-carbon border border-linea-carbon px-6 py-3 rounded-sm transition-colors hover:bg-linea-carbon/90"
          >
            <svg className="h-4 w-4 text-linea-copper" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <span className="font-linea-body text-sm tracking-wide text-linea-bone">Find LINEA on Google</span>
          </a>

          <a
            href="https://google.com/maps"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 font-linea-body text-sm tracking-wide text-linea-carbon hover:text-linea-copper transition-colors"
          >
            Get Directions &rarr;
          </a>
        </div>

      </div>
    </section>
  );
};
