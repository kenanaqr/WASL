import React from 'react';

const services = [
  {
    number: '01',
    title: 'Google Presence',
    arabicTitle: 'التواجد على جوجل',
    description:
      'Help businesses present accurate, useful information where customers are already searching.',
  },
  {
    number: '02',
    title: 'Websites',
    arabicTitle: 'المواقع الإلكترونية',
    description:
      'Modern websites designed around the business and its customers — not around a template.',
  },
  {
    number: '03',
    title: 'QR & NFC Touchpoints',
    arabicTitle: 'نقاط التواصل الذكية',
    description:
      'Physical touchpoints that lead customers to useful digital actions in seconds.',
  },
  {
    number: '04',
    title: 'Custom Digital Experiences',
    arabicTitle: 'التجارب الرقمية المخصصة',
    description:
      'Lightweight digital experiences built around specific business needs and customer behavior.',
  },
];

export const WhatWeDoSection: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-alabaster border-t border-sand/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-petrol leading-tight">
            We build the connection.
          </h2>
          <p className="mt-2 text-base sm:text-lg font-medium text-petrol/70 font-arabic">
            نبني الوصل.
          </p>
          <p className="mt-6 text-base sm:text-lg text-charcoal/80 font-light leading-relaxed max-w-xl">
            WASL creates digital touchpoints that bring local businesses closer to the people they want to reach.
          </p>
        </div>

        {/* Four services — clean editorial layout */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {services.map((service) => (
            <div
              key={service.number}
              className="group"
            >
              <div className="flex items-baseline gap-3 mb-4">
                <span className="font-mono text-sm font-medium text-petrol/40">
                  {service.number}
                </span>
                <div className="h-px flex-1 bg-sand/50" />
              </div>
              <h3 className="text-lg sm:text-xl font-medium tracking-tight text-petrol">
                {service.title}
              </h3>
              <p className="mt-1 text-xs text-sand-muted font-arabic">
                {service.arabicTitle}
              </p>
              <p className="mt-3 text-sm text-charcoal/75 font-light leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
