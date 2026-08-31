import React from 'react';

interface Step {
  number: string;
  title: string;
  arabicTitle: string;
  summary: string;
}

const steps: Step[] = [
  {
    number: '01',
    title: 'Understand',
    arabicTitle: 'نفهم العمل وتفاصيله',
    summary:
      'We learn about the business, your regular customers, and what sets your space apart from the noise.',
  },
  {
    number: '02',
    title: 'Build',
    arabicTitle: 'نبني التجربة الرقمية',
    summary:
      'We design and build the digital touchpoints—fast websites, verified Google presence, and smart physical cards—around that authentic identity.',
  },
  {
    number: '03',
    title: 'Connect',
    arabicTitle: 'نوصلك بعملائك بسلاسة',
    summary:
      'Customers discover, interact with, and revisit your business through a simpler, frictionless digital journey.',
  },
  {
    number: '04',
    title: 'Grow',
    arabicTitle: 'نطور ونوسع الأساس',
    summary:
      'As your business introduces new locations, seasonal offerings, or expanded services, your foundation adapts naturally.',
  },
];

export const ProcessSection: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 border-b border-sand/40 bg-alabaster">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-petrol/70">
            How WASL Works
          </p>
          <h2 className="mt-4 text-3xl sm:text-4xl font-medium tracking-tight text-petrol">
            A deliberate, straightforward process.
          </h2>
          <p className="mt-2 text-base text-petrol/70 font-arabic">
            خطوات واضحة تركز على النتيجة الحقيقية.
          </p>
          <p className="mt-4 text-base text-charcoal/80 font-light leading-relaxed">
            No convoluted agency bureaucracy or endless jargon. We focus directly on understanding
            what your customer needs at each stage of connection.
          </p>
        </div>

        {/* Clean Process Steps Grid */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="relative flex flex-col justify-between rounded-xl border border-sand/50 bg-white/70 p-6 sm:p-7 shadow-2xs"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-petrol/60">
                  <span className="font-semibold text-sm">{step.number}</span>
                  <span className="text-sand-muted">Step 0{index + 1}</span>
                </div>

                <h3 className="mt-5 text-xl font-medium tracking-tight text-petrol">
                  {step.title}
                </h3>
                <p className="mt-1 text-xs text-sand-muted font-arabic">
                  {step.arabicTitle}
                </p>

                <p className="mt-4 text-sm text-charcoal/80 font-light leading-relaxed">
                  {step.summary}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-sand/30 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-sand"></span>
                <span className="text-[11px] font-medium text-petrol/75">
                  Connection phase {step.number}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
