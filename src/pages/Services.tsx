import React from 'react';
import { siteConfig } from '../data/siteConfig';

interface PageProps {
  onNavigate: (path: string) => void;
}

export const ServicesPage: React.FC<PageProps> = ({ onNavigate }) => {
  return (
    <div>
      {/* Hero */}
      <section className="pt-16 pb-20 sm:pt-24 sm:pb-28 border-b border-sand/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-petrol/70">
              Our Capabilities
            </p>
            <h1 className="mt-4 text-4xl sm:text-5xl font-medium tracking-tight text-petrol leading-tight">
              Practical digital tools for local businesses.
            </h1>
            <p className="mt-3 text-xl font-medium text-petrol/80 font-arabic">
              حلول رقمية عملية للأعمال المحلية.
            </p>
            <p className="mt-6 text-base sm:text-lg text-charcoal/80 font-light leading-relaxed">
              We help local businesses establish a stronger presence where their customers discover,
              evaluate, and interact with them—from Google and digital touchpoints to custom websites
              and lightweight digital experiences.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Capability 01: Google Presence ─── */}
      <section className="py-20 sm:py-28 border-b border-sand/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <div className="font-mono text-sm font-medium text-petrol/50">01</div>
              <h2 className="mt-3 text-3xl sm:text-4xl font-medium tracking-tight text-petrol">
                Google Presence
              </h2>
              <p className="mt-1 text-base text-sand-muted font-arabic">
                التواجد على جوجل
              </p>
              <p className="mt-6 text-base text-charcoal/80 font-light leading-relaxed">
                Before a customer walks through your door, they search on Google. If your business
                isn&apos;t properly represented there—or if the information is wrong, incomplete, or
                missing—you&apos;re invisible at the moment that matters most.
              </p>
              <p className="mt-4 text-base text-charcoal/80 font-light leading-relaxed">
                WASL helps you get the foundation right: an accurate, trustworthy Google Business
                presence that lets customers discover you with confidence and make the decision to visit.
              </p>
              <div className="mt-6 h-px w-12 bg-sand"></div>
              <p className="mt-4 text-sm text-petrol font-medium">
                Help customers find you and make a more confident decision.
              </p>
            </div>

            <div className="lg:col-span-7">
              <div className="rounded-xl border border-sand/50 bg-white/70 p-6 sm:p-8 shadow-2xs">
                <h3 className="text-xs font-semibold uppercase tracking-widest text-petrol/70">
                  What this includes
                </h3>
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    'Google Business Profile setup & optimization',
                    'Accurate business information & categories',
                    'Location and contact details',
                    'Business photos & visual presentation',
                    'Customer review strategy guidance',
                    'NFC & QR review cards and displays',
                    'Physical review touchpoints for counters',
                    'Understanding why reviews build trust',
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2.5">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-sand shrink-0"></span>
                      <span className="text-sm text-charcoal/85 font-light">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 rounded-xl border border-sand/40 bg-alabaster p-5">
                <p className="text-xs text-petrol/80 font-medium">Why it matters for local businesses</p>
                <p className="mt-2 text-sm text-charcoal/80 font-light leading-relaxed">
                  Most customers in Jordan check Google Maps before visiting a café, restaurant, or
                  service business. An accurate profile with genuine reviews is often the difference
                  between a customer choosing you or walking past. This is the most practical first
                  step a business can take toward a stronger digital presence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Capability 02: Websites ─── */}
      <section className="py-20 sm:py-28 border-b border-sand/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <div className="font-mono text-sm font-medium text-petrol/50">02</div>
              <h2 className="mt-3 text-3xl sm:text-4xl font-medium tracking-tight text-petrol">
                Websites
              </h2>
              <p className="mt-1 text-base text-sand-muted font-arabic">
                المواقع الإلكترونية
              </p>
              <p className="mt-6 text-base text-charcoal/80 font-light leading-relaxed">
                A website that actually represents the business—not a generic template forced onto it.
                Designed around who you are, what you offer, where you are, and how your customers
                actually interact with you.
              </p>
              <p className="mt-4 text-base text-charcoal/80 font-light leading-relaxed">
                Every website we build is fast, mobile-first, and focused on giving the customer a
                clear path to the information they need: your menu, services, location, hours, and
                a direct way to reach you.
              </p>
              <div className="mt-6 h-px w-12 bg-sand"></div>
              <p className="mt-4 text-sm text-petrol font-medium">
                No generic template. A digital home that reflects the actual business.
              </p>
            </div>

            <div className="lg:col-span-7">
              <div className="rounded-xl border border-sand/50 bg-white/70 p-6 sm:p-8 shadow-2xs">
                <h3 className="text-xs font-semibold uppercase tracking-widest text-petrol/70">
                  What we build
                </h3>
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    'Business websites',
                    'Café & coffee shop websites',
                    'Restaurant websites',
                    'Barbershop & salon websites',
                    'Service-business websites',
                    'Landing pages',
                    'Digital menus',
                    'Product & service showcases',
                    'Contact & WhatsApp integration',
                    'Google Maps integration',
                    'Mobile-first responsive design',
                    'Arabic & English interfaces',
                    'Custom visual design',
                    'Lightweight, fast implementation',
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2.5">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-sand shrink-0"></span>
                      <span className="text-sm text-charcoal/85 font-light">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 rounded-xl border border-sand/40 bg-alabaster p-5">
                <p className="text-xs text-petrol/80 font-medium">Why it matters for local businesses</p>
                <p className="mt-2 text-sm text-charcoal/80 font-light leading-relaxed">
                  A customer who finds your Google listing may want to see more before visiting—your
                  full menu, your atmosphere, your working hours. A well-designed website gives them
                  that confidence without relying on scattered social media posts or outdated
                  third-party listings.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Capability 03: NFC & QR Touchpoints ─── */}
      <section className="py-20 sm:py-28 border-b border-sand/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <div className="font-mono text-sm font-medium text-petrol/50">03</div>
              <h2 className="mt-3 text-3xl sm:text-4xl font-medium tracking-tight text-petrol">
                NFC &amp; QR Touchpoints
              </h2>
              <p className="mt-1 text-base text-sand-muted font-arabic">
                نقاط التواصل الذكية
              </p>
              <p className="mt-6 text-base text-charcoal/80 font-light leading-relaxed">
                A customer taps or scans. The physical experience becomes digital in seconds.
                No app downloads, no complicated steps. Just a direct bridge between the
                counter and the phone in their hand.
              </p>
              <p className="mt-4 text-base text-charcoal/80 font-light leading-relaxed">
                This is where the name <strong className="text-petrol font-medium">وصل</strong> becomes
                tangible—WASL connects the physical business to its digital presence through real
                objects that sit on your counter, on your wall, or in your customer&apos;s hand.
              </p>
              <div className="mt-6 h-px w-12 bg-sand"></div>
              <p className="mt-4 text-sm text-petrol font-medium">
                The physical business connects to its digital presence.
              </p>
            </div>

            <div className="lg:col-span-7">
              <div className="rounded-xl border border-sand/50 bg-white/70 p-6 sm:p-8 shadow-2xs">
                <h3 className="text-xs font-semibold uppercase tracking-widest text-petrol/70">
                  Touchpoint applications
                </h3>
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    'Google review cards',
                    'NFC business cards',
                    'QR review displays',
                    'Countertop QR stands',
                    'Digital menu access points',
                    'Website access touchpoints',
                    'WhatsApp contact cards',
                    'Social & profile access',
                    'Other scan-to-action experiences',
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2.5">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-sand shrink-0"></span>
                      <span className="text-sm text-charcoal/85 font-light">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 rounded-xl border border-sand/40 bg-alabaster p-5">
                <p className="text-xs text-petrol/80 font-medium">Why it matters for local businesses</p>
                <p className="mt-2 text-sm text-charcoal/80 font-light leading-relaxed">
                  A satisfied customer at the counter is your strongest digital advocate—but only if
                  leaving a review or accessing your menu takes seconds, not effort. NFC and QR
                  touchpoints remove the friction between a good experience and the digital action
                  that follows it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Capability 04: Custom Digital Experiences ─── */}
      <section className="py-20 sm:py-28 border-b border-sand/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <div className="font-mono text-sm font-medium text-petrol/50">04</div>
              <h2 className="mt-3 text-3xl sm:text-4xl font-medium tracking-tight text-petrol">
                Custom Digital Experiences
              </h2>
              <p className="mt-1 text-base text-sand-muted font-arabic">
                التجارب الرقمية المخصصة
              </p>
              <p className="mt-6 text-base text-charcoal/80 font-light leading-relaxed">
                Sometimes a business needs something more specific than a standard website.
                An interactive digital menu for a restaurant. A service catalog for a salon.
                A specialized landing page for a seasonal event. A WhatsApp-based customer flow.
              </p>
              <p className="mt-4 text-base text-charcoal/80 font-light leading-relaxed">
                WASL can build lightweight digital experiences designed around the way your
                customers actually interact with your business—practical tools that solve
                real problems without unnecessary complexity.
              </p>
              <div className="mt-6 h-px w-12 bg-sand"></div>
              <p className="mt-4 text-sm text-petrol font-medium">
                Practical tools built around real customer behavior.
              </p>
            </div>

            <div className="lg:col-span-7">
              <div className="rounded-xl border border-sand/50 bg-white/70 p-6 sm:p-8 shadow-2xs">
                <h3 className="text-xs font-semibold uppercase tracking-widest text-petrol/70">
                  Examples of what we can build
                </h3>
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    'Interactive digital menus',
                    'Restaurant & café menu experiences',
                    'Product catalogs',
                    'Service catalogs',
                    'Interactive landing pages',
                    'Simple customer interaction flows',
                    'Custom contact forms',
                    'WhatsApp-based customer flows',
                    'Specialized web tools',
                    'Small business utilities',
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2.5">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-sand shrink-0"></span>
                      <span className="text-sm text-charcoal/85 font-light">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 rounded-xl border border-sand/40 bg-alabaster p-5">
                <p className="text-xs text-petrol/80 font-medium">Why it matters for local businesses</p>
                <p className="mt-2 text-sm text-charcoal/80 font-light leading-relaxed">
                  Every business has unique workflows. A barbershop needs something different from a
                  restaurant, and a specialty coffee roaster operates differently from a retail shop.
                  Custom digital experiences let you serve your customers in a way that generic
                  platforms never will.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Maintenance ─── */}
      <section className="py-20 sm:py-28 border-b border-sand/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-sand/60 bg-white/70 p-8 sm:p-12 shadow-2xs">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <p className="text-xs font-semibold uppercase tracking-widest text-petrol/70">
                  Ongoing Support
                </p>
                <h2 className="mt-3 text-2xl sm:text-3xl font-medium tracking-tight text-petrol">
                  We don&apos;t disappear after launch.
                </h2>
                <p className="mt-1 text-base text-sand-muted font-arabic">
                  ما بنختفي بعد التسليم.
                </p>
                <p className="mt-4 text-base text-charcoal/80 font-light leading-relaxed">
                  A digital presence isn&apos;t a one-time project. Menus change, business hours shift,
                  new services are added, and small improvements make a real difference over time.
                  WASL provides ongoing maintenance so your digital touchpoints stay accurate,
                  current, and effective.
                </p>
              </div>

              <div className="lg:col-span-5">
                <div className="space-y-3">
                  {[
                    'Website content updates',
                    'Menu and pricing updates',
                    'Business information changes',
                    'Minor improvements and refinements',
                    'Technical maintenance and fixes',
                    'Continued improvements over time',
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-sand shrink-0"></span>
                      <span className="text-sm text-charcoal/85 font-light">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Built Around the Business ─── */}
      <section className="py-20 sm:py-28 border-b border-sand/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-petrol/70">
              Built Around the Business
            </p>
            <h2 className="mt-4 text-3xl sm:text-4xl font-medium tracking-tight text-petrol">
              No two local businesses operate the same way.
            </h2>
            <p className="mt-2 text-base text-petrol/80 font-arabic">
              لا يوجد عملان محليان يعملان بنفس الطريقة.
            </p>
            <div className="mx-auto my-8 h-px w-16 bg-sand"></div>
            <p className="text-base text-charcoal/80 font-light leading-relaxed">
              A café, restaurant, barbershop, salon, retail shop, and professional service may all
              need completely different digital touchpoints. Before building anything, we ask the
              questions that matter:
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { question: 'What does the business do?', arabic: 'ماذا يقدم العمل؟' },
              { question: 'How do customers discover it?', arabic: 'كيف يكتشفه العملاء؟' },
              { question: 'What do customers need before visiting?', arabic: 'ماذا يحتاج العميل قبل الزيارة؟' },
              { question: 'What happens when they arrive?', arabic: 'ماذا يحدث عند وصولهم؟' },
              { question: 'Where does friction exist?', arabic: 'أين تكمن العقبات؟' },
              { question: 'What digital tools would actually help?', arabic: 'ما الأدوات الرقمية المفيدة فعلاً؟' },
            ].map((item) => (
              <div
                key={item.question}
                className="rounded-xl border border-sand/50 bg-white/70 p-5 shadow-2xs text-center"
              >
                <p className="text-base font-medium text-petrol">{item.question}</p>
                <p className="mt-1 text-xs text-sand-muted font-arabic">{item.arabic}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="text-base text-petrol font-medium max-w-xl mx-auto">
              Then we build only what makes sense. WASL is not about selling unnecessary technology.
            </p>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-20 sm:py-28 bg-petrol text-alabaster">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-alabaster">
              Let&apos;s discuss what your business actually needs.
            </h2>
            <p className="mt-3 text-lg font-medium text-sand font-arabic">
              خلّينا نحكي عن اللي عملك فعلاً بحاجته.
            </p>
            <p className="mt-6 text-base text-alabaster/75 font-light leading-relaxed">
              We start every project with a conversation—understanding the business before
              recommending any tools or solutions.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <button
                type="button"
                onClick={() => onNavigate('/contact')}
                className="rounded-lg bg-sand px-6 py-3 text-sm font-semibold text-petrol transition-colors duration-200 hover:bg-sand-light shadow-xs"
              >
                Talk to WASL
              </button>
              <a
                href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-sand/50 bg-petrol-dark/50 px-6 py-3 text-sm font-medium text-alabaster transition-colors duration-200 hover:bg-petrol-dark"
              >
                <span>WhatsApp</span>
                <svg className="h-4 w-4 text-sand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
