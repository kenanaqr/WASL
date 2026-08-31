import React from 'react';

export const StartSimpleSection: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 border-b border-sand/40 bg-alabaster">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Concept Column */}
          <div className="lg:col-span-5">
            <p className="text-xs font-semibold uppercase tracking-widest text-petrol/70">
              Start Simple, Build Further
            </p>
            <h2 className="mt-4 text-3xl sm:text-4xl font-medium tracking-tight text-petrol leading-tight">
              Every business starts somewhere.
            </h2>
            <p className="mt-3 text-base text-petrol/80 font-arabic">
              كل عمل يبدأ من نقطة — ابدأ من اللي يفيدك اليوم.
            </p>
            <p className="mt-6 text-base text-charcoal/80 font-light leading-relaxed">
              A local business doesn&apos;t need to invest in a complicated digital system from day one.
              WASL helps you build the digital foundation that makes sense for where you are
              today—and gives you room to build further tomorrow.
            </p>
          </div>

          {/* Progressive Path */}
          <div className="lg:col-span-7">
            <div className="relative space-y-0">
              {/* Connecting vertical line */}
              <div className="absolute left-4 sm:left-5 top-6 bottom-6 w-px bg-sand/60 hidden sm:block" aria-hidden="true"></div>

              {[
                {
                  label: 'Foundation',
                  title: 'Google Presence & Reviews',
                  arabicTitle: 'التواجد على جوجل والمراجعات',
                  description: 'Get your business properly listed and visible where customers search. Set up review touchpoints so satisfied visitors become visible advocates.',
                },
                {
                  label: 'Connection',
                  title: 'NFC & QR Touchpoints',
                  arabicTitle: 'نقاط التواصل الذكية',
                  description: 'Physical cards and displays that make leaving a review, viewing a menu, or contacting you as easy as a tap or scan.',
                },
                {
                  label: 'Presence',
                  title: 'A Website That Represents You',
                  arabicTitle: 'موقع إلكتروني يعكس هويتك',
                  description: 'When the business is ready for a full digital home, we design a website around its real identity, services, and customers.',
                },
                {
                  label: 'Experience',
                  title: 'Custom Digital Experiences',
                  arabicTitle: 'التجارب الرقمية المخصصة',
                  description: 'Interactive menus, service catalogs, customer flows, or other specialized tools built when the business needs them.',
                },
              ].map((step, index) => (
                <div
                  key={step.title}
                  className="relative flex items-start gap-5 py-5"
                >
                  {/* Step indicator */}
                  <div className="relative z-10 flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-sand/70 bg-alabaster text-xs sm:text-sm font-mono font-medium text-petrol/80 shrink-0">
                    {String(index + 1).padStart(2, '0')}
                  </div>

                  <div className="flex-1 rounded-xl border border-sand/40 bg-white/60 p-5 shadow-2xs">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[11px] font-medium uppercase tracking-wider text-sand-muted">
                        {step.label}
                      </span>
                      <span className="text-xs text-sand-muted font-arabic">
                        {step.arabicTitle}
                      </span>
                    </div>
                    <h3 className="mt-2 text-lg font-medium text-petrol">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm text-charcoal/80 font-light leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-6 text-xs text-charcoal-muted pl-14 font-light">
              This is not a mandatory sequence. Every business has different needs—we
              start wherever makes the most sense and build from there.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
