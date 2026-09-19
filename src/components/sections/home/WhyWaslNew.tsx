import React from 'react';

const reasons = [
  {
    title: 'Built around the business',
    arabicTitle: 'مصمم حول عملك',
    description: 'We don’t use generic templates. Every touchpoint is built to reflect how your business actually operates.',
  },
  {
    title: 'Practical technology',
    arabicTitle: 'تقنية عملية',
    description: 'No bloated dashboards or tech for its own sake. We build lightweight, fast tools that simply work.',
  },
  {
    title: 'Local understanding',
    arabicTitle: 'فهم محلي',
    description: 'We live and work in the same neighborhoods. We know how customers here search, interact, and build trust.',
  },
  {
    title: 'Direct collaboration',
    arabicTitle: 'تعاون مباشر',
    description: 'No account managers or layers of separation. You work directly with the small team building your project.',
  },
];

export const WhyWaslNew: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-petrol">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sand/80 mb-4">
            Why WASL
          </p>
          <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-alabaster">
            A practical partner.
          </h2>
          <p className="mt-2 text-base font-medium text-sand/80 font-arabic">
            شريك عملي.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {reasons.map((reason) => (
            <div key={reason.title} className="flex flex-col border-t border-petrol-light/20 pt-6">
              <h3 className="text-lg font-medium text-alabaster mb-1">
                {reason.title}
              </h3>
              <p className="text-xs font-medium text-sand/80 font-arabic mb-3">
                {reason.arabicTitle}
              </p>
              <p className="text-sm text-alabaster/70 font-light leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
