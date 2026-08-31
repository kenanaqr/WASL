import React from 'react';

interface ServiceItem {
  number: string;
  title: string;
  arabicTitle: string;
  description: string;
  focus: string;
}

const services: ServiceItem[] = [
  {
    number: '01',
    title: 'Websites',
    arabicTitle: 'المواقع الإلكترونية',
    description:
      'Fast, clear, and elegant websites tailored to local businesses. Designed to communicate who you are immediately without generic agency fluff or bloated code.',
    focus: 'Clarity, speed, and mobile ease',
  },
  {
    number: '02',
    title: 'Google Presence',
    arabicTitle: 'التواجد على خرائط وجوجل',
    description:
      'Structured business profiles, accurate location data, and trustworthy touchpoints right where local customers search when making real-time decisions.',
    focus: 'Discovery, location accuracy, and trust',
  },
  {
    number: '03',
    title: 'NFC & QR Touchpoints',
    arabicTitle: 'نقاط التواصل الذكية',
    description:
      'Physical counter displays, smart cards, and frictionless scan-to-action touchpoints that bridge the physical counter with your digital presence in seconds.',
    focus: 'Seamless counter-to-phone interaction',
  },
  {
    number: '04',
    title: 'Digital Experiences',
    arabicTitle: 'التجارب الرقمية المتخصصة',
    description:
      'Practical digital systems—interactive specialty menus, table booking flows, or grooming appointments—crafted around how your customer actually behaves.',
    focus: 'Frictionless customer journeys',
  },
];

export const ServicesSection: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 border-b border-sand/40 bg-alabaster">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-petrol/70">
            What We Do
          </p>
          <h2 className="mt-4 text-3xl sm:text-4xl font-medium tracking-tight text-petrol">
            Four ways of creating connection.
          </h2>
          <p className="mt-2 text-base text-petrol/70 font-arabic">
            أربعة مسارات لبناء وصل حقيقي بين عملك وعملائك.
          </p>
          <p className="mt-4 text-base text-charcoal/80 font-light leading-relaxed">
            We don’t sell fragmented packages or bloated software. Every capability is focused on
            making the connection between your business and your customer simpler and more natural.
          </p>
        </div>

        {/* Editorial Four-Way Layout (Not SaaS feature cards) */}
        <div className="mt-16 divide-y divide-sand/40 border-y border-sand/40">
          {services.map((service) => (
            <div
              key={service.number}
              className="py-10 sm:py-12 grid grid-cols-1 md:grid-cols-12 gap-6 items-baseline transition-colors duration-200 hover:bg-white/40 px-4 -mx-4 rounded-xl"
            >
              <div className="md:col-span-2 font-mono text-sm font-medium text-petrol/60">
                {service.number}
              </div>

              <div className="md:col-span-4">
                <h3 className="text-2xl font-medium tracking-tight text-petrol">
                  {service.title}
                </h3>
                <span className="mt-1 block text-sm text-sand-muted font-arabic">
                  {service.arabicTitle}
                </span>
              </div>

              <div className="md:col-span-6 space-y-2">
                <p className="text-base text-charcoal/85 font-light leading-relaxed">
                  {service.description}
                </p>
                <div className="pt-2 text-xs font-medium text-petrol/75 flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-sand"></span>
                  <span>{service.focus}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
