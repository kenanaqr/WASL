import React from 'react';

const steps = [
  {
    title: 'Google Presence',
    arabicTitle: 'التواجد على جوجل',
    note: 'Get found where customers search.',
  },
  {
    title: 'Website',
    arabicTitle: 'موقع إلكتروني',
    note: 'Give your business a digital home.',
  },
  {
    title: 'QR & NFC',
    arabicTitle: 'نقاط ذكية',
    note: 'Connect physical space to digital actions.',
  },
  {
    title: 'Custom Experiences',
    arabicTitle: 'تجارب مخصصة',
    note: 'Build what the business specifically needs.',
  },
];

export const BuildFurtherSection: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-alabaster border-t border-sand/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Concept */}
          <div className="lg:col-span-5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-petrol/80 mb-4">
              Practical path
            </p>
            <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-petrol leading-tight">
              Start simple.{' '}
              <br className="hidden sm:inline" />
              Build further.
            </h2>
            <p className="mt-2 text-base font-medium text-petrol/80 font-arabic">
              ابدأ ببساطة. ثم ابنِ أكثر.
            </p>
            <p className="mt-6 text-base text-charcoal/75 font-light leading-relaxed max-w-md">
              A business does not need everything at once. Start with what creates the most value now. Add more as the business grows.
            </p>
          </div>

          {/* Progression */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {steps.map((step, index) => (
                <div
                  key={step.title}
                  className="relative rounded-lg border border-sand/50 bg-white/60 p-5"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full border border-sand/60 text-xs font-mono font-medium text-petrol/80">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    {index < steps.length - 1 && (
                      <span className="text-sand/60 text-xs" aria-hidden="true">→</span>
                    )}
                  </div>
                  <h3 className="text-base font-medium text-petrol">
                    {step.title}
                  </h3>
                  <p className="mt-0.5 text-xs text-petrol/80 font-arabic">
                    {step.arabicTitle}
                  </p>
                  <p className="mt-2 text-sm text-charcoal/70 font-light">
                    {step.note}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs text-charcoal-muted font-light">
              This is not a mandatory sequence — we start wherever makes the most sense.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
