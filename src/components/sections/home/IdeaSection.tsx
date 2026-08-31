import React from 'react';

export const IdeaSection: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 border-b border-sand/40 bg-alabaster">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          {/* Label */}
          <p className="text-xs font-semibold uppercase tracking-widest text-petrol/70">
            The Idea
          </p>

          {/* Headline */}
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-petrol leading-tight">
            The closer the connection, <br />
            the stronger the business.
          </h2>

          <p className="mt-3 text-lg font-medium text-petrol/80 font-arabic">
            كلما اقترب الوصل، ازدهر العمل.
          </p>

          {/* Understated editorial divider */}
          <div className="mx-auto my-8 h-px w-20 bg-sand"></div>

          {/* Narrative copy with significant whitespace */}
          <div className="space-y-6 text-base sm:text-lg text-charcoal/80 font-light leading-relaxed">
            <p>
              A great local business is never just a storefront, a menu, or a transaction.
              It is a living relationship built on familiarity, trust, and shared daily rituals.
            </p>
            <p>
              Yet too often, modern digital tools create distance instead of closeness—cluttered
              templates, impersonal platforms, and friction at the moments that matter.
            </p>
            <p className="text-petrol font-normal">
              WASL builds thoughtful digital touchpoints designed to remove that distance:
              making it effortless for customers to discover who you are, visit your space,
              and stay connected.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
