import React from 'react';

interface Principle {
  title: string;
  arabicTitle: string;
  body: string;
}

const principles: Principle[] = [
  {
    title: 'Built for the local business',
    arabicTitle: 'مصمم خصيصاً للعمل المحلي',
    body: 'We design for physical storefronts, neighborhood cafés, and local services in Jordan—spaces where human connection matters most.',
  },
  {
    title: 'Designed around the customer',
    arabicTitle: 'محوره تجربة العميل الحقيقية',
    body: 'Every button, menu layout, and link is evaluated by how quickly a customer can find what they need without cognitive friction.',
  },
  {
    title: 'Simple technology',
    arabicTitle: 'تقنية بسيطة وعملية',
    body: 'Zero bloated dependencies or unnecessary dashboards. We build fast, reliable, lightweight systems that simply do their job.',
  },
  {
    title: 'Human interaction first',
    arabicTitle: 'الأولوية للتواصل الإنساني',
    body: 'Digital tools should never replace the welcoming warmth of your team; they should pave the way for it.',
  },
];

export const WhyWaslSection: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 border-b border-sand/40 bg-alabaster">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Core Idea Column */}
          <div className="lg:col-span-5">
            <p className="text-xs font-semibold uppercase tracking-widest text-petrol/70">
              Why WASL
            </p>
            <h2 className="mt-4 text-3xl sm:text-4xl font-medium tracking-tight text-petrol leading-tight">
              We don&apos;t build websites for businesses. <br />
              We build better connections between businesses and their customers.
            </h2>
            <p className="mt-4 text-base text-petrol/80 font-arabic">
              لا نكتفي ببناء مواقع إلكترونية؛ بل نصنع جسور وصل أوثق بينك وبين عملائك.
            </p>
            <p className="mt-6 text-base text-charcoal/80 font-light leading-relaxed">
              Anyone can set up an off-the-shelf template. But templates ignore the nuance of local
              hospitality, local habits, and the personal trust that sustains Jordanian businesses.
            </p>
          </div>

          {/* Principles Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {principles.map((principle) => (
              <div
                key={principle.title}
                className="rounded-xl border border-sand/50 bg-white/70 p-6 shadow-2xs"
              >
                <div className="h-1.5 w-6 rounded-full bg-sand"></div>
                <h3 className="mt-4 text-lg font-medium text-petrol">
                  {principle.title}
                </h3>
                <p className="mt-0.5 text-xs text-sand-muted font-arabic">
                  {principle.arabicTitle}
                </p>
                <p className="mt-3 text-sm text-charcoal/80 font-light leading-relaxed">
                  {principle.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
