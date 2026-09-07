import React from 'react';
import { restaurantInfo } from './menuData';

export const ThreeBrothersVisit: React.FC = () => {
  const { address, hours, phone } = restaurantInfo;
  const fullAddress = `${address.street}, ${address.city}, ${address.state} ${address.zip}`;
  const mapsUrl = `https://maps.google.com/?q=${encodeURIComponent(fullAddress)}`;

  return (
    <section id="visit" className="bg-tb-white py-16 sm:py-24 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-tb-display text-3xl sm:text-4xl md:text-5xl font-bold uppercase text-tb-charcoal tracking-tight">
            Visit Us
          </h2>
          <div className="mt-3 h-1 w-12 bg-tb-orange mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 max-w-5xl mx-auto">
          {/* Map embed */}
          <div className="rounded-2xl overflow-hidden bg-tb-cream h-72 sm:h-80 lg:h-full min-h-[320px]">
            <iframe
              title="Three Brothers Restaurant Location"
              src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${encodeURIComponent(fullAddress)}`}
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Info */}
          <div className="flex flex-col justify-center">
            {/* Address */}
            <div className="mb-8">
              <h3 className="font-tb-display text-lg font-bold uppercase text-tb-charcoal tracking-tight mb-3">
                Location
              </h3>
              <p className="font-tb-body text-base text-tb-charcoal-light leading-relaxed">
                {address.street}
                <br />
                {address.city}, {address.state} {address.zip}
              </p>
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 mt-3 font-tb-body text-sm font-semibold text-tb-orange hover:text-tb-orange-light transition-colors"
              >
                Get Directions
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </a>
            </div>

            {/* Hours */}
            <div className="mb-8">
              <h3 className="font-tb-display text-lg font-bold uppercase text-tb-charcoal tracking-tight mb-3">
                Hours
              </h3>
              <div className="font-tb-body text-sm space-y-2">
                <div className="flex justify-between max-w-xs">
                  <span className="text-tb-charcoal-light">Mon – Thu</span>
                  <span className="font-medium text-tb-charcoal">{hours.monThu}</span>
                </div>
                <div className="flex justify-between max-w-xs">
                  <span className="text-tb-charcoal-light">Friday</span>
                  <span className="font-medium text-tb-charcoal">{hours.fri}</span>
                </div>
                <div className="flex justify-between max-w-xs">
                  <span className="text-tb-charcoal-light">Saturday</span>
                  <span className="font-medium text-tb-charcoal">{hours.sat}</span>
                </div>
                <div className="flex justify-between max-w-xs">
                  <span className="text-tb-charcoal-light">Sunday</span>
                  <span className="font-medium text-tb-burgundy">{hours.sun}</span>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="mb-8">
              <h3 className="font-tb-display text-lg font-bold uppercase text-tb-charcoal tracking-tight mb-3">
                Contact
              </h3>
              <a
                href={`tel:${phone.replace(/-/g, '')}`}
                className="inline-flex items-center gap-2 font-tb-body text-base font-medium text-tb-charcoal hover:text-tb-orange transition-colors"
              >
                <svg className="w-5 h-5 text-tb-olive" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {phone}
              </a>
            </div>

            {/* Catering callout */}
            <div id="catering" className="rounded-xl bg-tb-olive/10 p-6 scroll-mt-28">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-tb-olive/20 text-tb-olive flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-tb-display text-base font-bold uppercase text-tb-charcoal mb-1">
                    Catering Available
                  </h4>
                  <p className="font-tb-body text-sm text-tb-charcoal-light leading-relaxed mb-3">
                    Planning an event? Call us to discuss catering options.
                  </p>
                  <a
                    href={`tel:${phone.replace(/-/g, '')}`}
                    className="inline-flex items-center gap-1.5 font-tb-body text-sm font-semibold text-tb-orange hover:text-tb-orange-light transition-colors"
                  >
                    Call for Catering
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
