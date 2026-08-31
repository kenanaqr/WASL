import React from 'react';

interface PageProps {
  onNavigate: (path: string) => void;
}

const servicesList = [
  {
    title: 'Custom Website Design & Development',
    arabicTitle: 'تصميم وتطوير المواقع المخصصة',
    desc: 'Bespoke, high-performance web applications tailored to the Jordanian market.',
  },
  {
    title: 'Digital Ordering & Menu Systems',
    arabicTitle: 'أنظمة القوائم والطلب الرقمي',
    desc: 'Interactive, lightning-fast digital solutions for cafés and restaurants.',
  },
  {
    title: 'Appointment & Booking Portals',
    arabicTitle: 'بوابات الحجز والمواعيد',
    desc: 'Frictionless customer booking flows for barbershops, salons, and service providers.',
  },
  {
    title: 'Bilingual Localization (Arabic & English)',
    arabicTitle: 'التعريب والتوطين الثنائي',
    desc: 'Seamless RTL and LTR support with localized typography and tone.',
  },
];

export const ServicesPage: React.FC<PageProps> = ({ onNavigate }) => {
  return (
    <div className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
            What We Do
          </p>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-neutral-950 sm:text-5xl">
            Services
          </h1>
          <p className="mt-4 text-lg text-neutral-600">
            Tailored digital solutions built to give Jordanian businesses a distinct online presence.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2">
          {servicesList.map((service, index) => (
            <div
              key={index}
              className="rounded-xl border border-neutral-200 bg-white p-8 shadow-xs"
            >
              <div className="text-xs font-mono text-neutral-400">0{index + 1}</div>
              <div className="mt-3 flex items-baseline justify-between">
                <h3 className="text-xl font-bold text-neutral-900">{service.title}</h3>
              </div>
              <p className="mt-1 text-sm font-medium text-neutral-500">{service.arabicTitle}</p>
              <p className="mt-3 text-sm text-neutral-600">{service.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-2xl bg-neutral-50 border border-neutral-200 p-8 text-center sm:p-12">
          <h3 className="text-2xl font-bold text-neutral-900">Have a custom requirement?</h3>
          <p className="mt-2 text-neutral-600 max-w-xl mx-auto text-sm">
            We adapt to each business workflow to create digital tools that deliver tangible results.
          </p>
          <button
            type="button"
            onClick={() => onNavigate('/contact')}
            className="mt-6 rounded-md bg-neutral-900 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-neutral-800"
          >
            Discuss Your Project
          </button>
        </div>
      </div>
    </div>
  );
};
