import React from 'react';
import { siteConfig } from '../../../data/siteConfig';

export const LocalSection: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 border-b border-sand/40 bg-alabaster">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-sand/60 bg-white/70 p-8 sm:p-12 lg:p-16 shadow-2xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* English Context */}
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full border border-sand/60 bg-alabaster px-3 py-1 text-xs font-medium text-petrol">
                <span>Rooted in Amman</span>
                <span>•</span>
                <span className="text-sand-muted">عمّان، الأردن</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-petrol">
                A local partner who understands how the business actually works.
              </h2>

              <p className="text-base text-charcoal/80 font-light leading-relaxed">
                We live and work in the same neighborhoods as the businesses we support. We understand
                how people in Jordan search on Google Maps before visiting, how they rely on WhatsApp
                for quick communication, and why a trustworthy digital presence matters when someone
                is deciding between two businesses on the same street.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4 sm:gap-6 text-sm text-petrol font-medium">
                <span className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-sand"></span>
                  Arabic &amp; English
                </span>
                <span className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-sand"></span>
                  WhatsApp-native communication
                </span>
                <span className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-sand"></span>
                  Local discovery patterns
                </span>
              </div>
            </div>

            {/* Arabic Context */}
            <div className="lg:col-span-6 border-t lg:border-t-0 lg:border-l border-sand/40 pt-8 lg:pt-0 lg:pl-12 font-arabic text-right">
              <h3 className="text-2xl sm:text-3xl font-bold text-petrol leading-snug">
                وصل — شريك محلي يفهم طبيعة عملك.
              </h3>
              <p className="mt-4 text-base text-charcoal/80 leading-relaxed font-normal">
                كل مقهى، مطعم، ومحل تجاري في الأردن يحمل طابعه الخاص وعلاقة فريدة بزبائنه.
                في{' '}
                <strong className="text-petrol">{siteConfig.companyName}</strong> نبني حضوراً
                رقمياً يعكس هوية عملك الحقيقية ويخلّي عملاءك يوصلولك بسهولة — من
                البحث على جوجل لحد ما يدخلوا من بابك.
              </p>
              <div className="mt-6 inline-flex items-center gap-3 text-sm text-sand-muted font-medium">
                <span>عمّان — الأردن</span>
                <span>•</span>
                <span>بكل وضوح وبساطة</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
