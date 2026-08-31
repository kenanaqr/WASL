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
                A local perspective for Jordanian businesses.
              </h2>

              <p className="text-base text-charcoal/80 font-light leading-relaxed">
                We live and work in the same neighborhoods as the businesses we support. We understand
                how people in Jordan discover places, how they message on WhatsApp, how they prefer
                menus presented, and why authentic warmth matters more than tech gimmicks.
              </p>

              <div className="pt-2 flex items-center gap-6 text-sm text-petrol font-medium">
                <span className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-sand"></span>
                  Native Bilingual (Arabic / English)
                </span>
                <span className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-sand"></span>
                  Local Market Relevance
                </span>
              </div>
            </div>

            {/* Arabic Context */}
            <div className="lg:col-span-6 border-t lg:border-t-0 lg:border-l border-sand/40 pt-8 lg:pt-0 lg:pl-12 font-arabic text-right">
              <h3 className="text-2xl sm:text-3xl font-bold text-petrol leading-snug">
                وصل — فكرة أردنية تفهم خصوصية مجتمعنا.
              </h3>
              <p className="mt-4 text-base text-charcoal/80 leading-relaxed font-normal">
                كل مقهى، مطعم، ومحل تجاري في الأردن يحمل طابعه الخاص وعلاقة فريدة بزبائنه. مهمتنا في{' '}
                <strong className="text-petrol">{siteConfig.companyName}</strong> هي بناء حضور رقمي يليق
                بهذا الطابع ويجعل التواصل سهلاً وعفوياً دون تعقيد.
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
