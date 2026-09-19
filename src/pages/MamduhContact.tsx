import React, { useEffect, useState } from 'react';
const waslLogo = '/wasl-hero-logo.webp';

/**
 * Canonical URL for WASL website.
 */
const WASL_WEBSITE_URL = 'https://wasljo.com/';

/**
 * Official WASL Instagram URL.
 */
const WASL_INSTAGRAM_URL = 'https://www.instagram.com/wasljo/';

interface MamduhContactPageProps {
  onNavigate?: (path: string) => void;
}

export const MamduhContactPage: React.FC<MamduhContactPageProps> = () => {
  const [saved, setSaved] = useState(false);

  // Set noindex, nofollow for this personal contact page
  useEffect(() => {
    let metaRobots = document.querySelector('meta[name="robots"]') as HTMLMetaElement | null;
    const created = !metaRobots;
    if (!metaRobots) {
      metaRobots = document.createElement('meta');
      metaRobots.name = 'robots';
      document.head.appendChild(metaRobots);
    }
    const previousContent = metaRobots.content;
    metaRobots.content = 'noindex, nofollow';

    const previousTitle = document.title;
    document.title = 'Mamdouh Al Khaldi | WASL';

    return () => {
      if (created && metaRobots && metaRobots.parentNode) {
        metaRobots.parentNode.removeChild(metaRobots);
      } else if (metaRobots) {
        metaRobots.content = previousContent;
      }
      document.title = previousTitle;
    };
  }, []);

  const handleSaveContact = () => {
    const vCardContent = [
      'BEGIN:VCARD',
      'VERSION:3.0',
      'N:Al Khaldi;Mamdouh;;;',
      'FN:Mamdouh Al Khaldi',
      'ORG:WASL',
      'TITLE:Co-Founder & CMO',
      'TEL;TYPE=CELL,VOICE:+962797720319',
      'EMAIL;TYPE=INTERNET:mamduhak@wasljo.com',
      'URL;TYPE=website:https://wasljo.com/',
      'URL;TYPE=instagram:https://www.instagram.com/wasljo/',
      'NOTE:WASL | وصل - Co-Founder & CMO',
      'END:VCARD',
    ].join('\r\n');

    const blob = new Blob([vCardContent], { type: 'text/vcard;charset=utf-8' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Mamdouh-Al-Khaldi.vcf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setTimeout(() => window.URL.revokeObjectURL(url), 1000);

    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  // Mamdouh personal contact actions ONLY (WhatsApp, Call, Email - no LinkedIn)
  const personalContactActions = [
    {
      id: 'whatsapp',
      label: 'WhatsApp',
      detail: '+962 79 772 0319',
      href: 'https://wa.me/962797720319',
      isExternal: true,
      actionHint: 'Chat',
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
        </svg>
      ),
    },
    {
      id: 'call',
      label: 'Call',
      detail: '+962 79 772 0319',
      href: 'tel:+962797720319',
      isExternal: false,
      actionHint: 'Dial',
      icon: (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.75}
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
      ),
    },
    {
      id: 'email',
      label: 'Email',
      detail: 'mamduhak@wasljo.com',
      href: 'mailto:mamduhak@wasljo.com',
      isExternal: false,
      actionHint: 'Send',
      icon: (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.75}
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-alabaster text-charcoal flex flex-col items-center justify-center px-4 py-8 sm:py-12 selection:bg-petrol selection:text-sand">
      <main className="w-full max-w-md">
        {/* Digital Contact Card Container */}
        <div className="rounded-3xl border border-sand/40 bg-white p-6 sm:p-8 shadow-xs space-y-6">
          {/* Header Brand Badge */}
          <div className="flex items-center justify-between pb-5 border-b border-sand/30">
            <a
              href={WASL_WEBSITE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 group"
              aria-label="WASL Website"
            >
              <img
                src={waslLogo}
                alt="WASL Logo"
                width={353}
                height={234}
                className="h-7 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
              />
              <div className="flex items-baseline gap-1.5">
                <span className="text-base font-bold tracking-tight text-petrol">WASL</span>
                <span className="text-sand-muted text-xs font-light">|</span>
                <span className="text-sm font-semibold text-petrol font-arabic">وصل</span>
              </div>
            </a>

            <span className="inline-flex items-center rounded-full bg-sand/20 px-2.5 py-0.5 text-[11px] font-medium text-petrol tracking-wide">
              NFC Contact
            </span>
          </div>

          {/* Profile Identity */}
          <div className="text-center pt-1 pb-1">
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-petrol">
              Mamdouh Al Khaldi
            </h1>
            <p className="mt-1 text-base font-medium text-charcoal-muted font-arabic">
              ممدوح الخالدي
            </p>

            <div className="mt-2.5 text-sm font-semibold text-petrol tracking-tight">
              Co-Founder & CMO
            </div>

            <div className="mt-1.5 flex items-center justify-center gap-2 text-xs text-charcoal-muted">
              <span className="font-semibold text-petrol">WASL</span>
              <span className="text-sand-muted font-light">|</span>
              <span className="font-arabic font-medium text-petrol/90">وصل</span>
              <span className="text-sand-muted">•</span>
              <span>Amman, Jordan</span>
            </div>
          </div>

          {/* Section 1: Contact */}
          <div className="space-y-2.5">
            <div className="flex items-center justify-between px-1">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-sand-muted">
                Contact
              </span>
              <span className="text-[11px] text-sand-muted font-arabic">
                تواصل
              </span>
            </div>

            <div className="space-y-2">
              {personalContactActions.map((action) => (
                <a
                  key={action.id}
                  href={action.href}
                  target={action.isExternal ? '_blank' : undefined}
                  rel={action.isExternal ? 'noopener noreferrer' : undefined}
                  className="rounded-xl border border-sand/40 bg-alabaster/40 hover:bg-alabaster hover:border-sand p-3 sm:p-3.5 flex items-center justify-between transition-all duration-150 group"
                  aria-label={action.label}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="h-9 w-9 sm:h-10 sm:w-10 rounded-lg bg-white border border-sand/30 flex items-center justify-center text-petrol group-hover:text-petrol-dark group-hover:border-sand/60 transition-colors shrink-0">
                      {action.icon}
                    </div>
                    <div className="min-w-0 text-left">
                      <div className="text-sm font-semibold text-petrol group-hover:text-petrol-dark transition-colors truncate">
                        {action.label}
                      </div>
                      <div className="text-xs text-charcoal-muted truncate">
                        {action.detail}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 text-xs text-sand-muted group-hover:text-petrol transition-colors shrink-0 pl-2">
                    <span className="hidden sm:inline font-medium">{action.actionHint}</span>
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </a>
              ))}
            </div>

            {/* Save Contact Button */}
            <div className="pt-1">
              <button
                type="button"
                onClick={handleSaveContact}
                className={`w-full rounded-xl py-3 px-4 text-sm font-medium transition-all duration-200 flex items-center justify-center gap-2 border cursor-pointer ${
                  saved
                    ? 'bg-petrol-dark text-sand-light border-petrol-dark scale-[0.99]'
                    : 'bg-white text-petrol border-sand/60 hover:bg-alabaster hover:border-sand active:scale-[0.99]'
                }`}
                aria-label="Save Mamdouh Al Khaldi contact to phone"
              >
                {saved ? (
                  <>
                    <svg className="h-4 w-4 text-sand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Contact Downloaded</span>
                  </>
                ) : (
                  <>
                    <svg className="h-4 w-4 text-petrol/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.75}
                        d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                      />
                    </svg>
                    <span>Save Contact</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Section 2: WASL Brand Actions */}
          <div className="pt-5 border-t border-sand/30 space-y-2.5">
            <div className="flex items-center justify-between px-1">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-sand-muted">
                WASL
              </span>
              <span className="text-[11px] text-sand-muted font-arabic">
                وصل
              </span>
            </div>

            <div className="space-y-2">
              {/* Primary Brand CTA: Visit WASL */}
              <a
                href={WASL_WEBSITE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full rounded-xl bg-petrol text-alabaster hover:bg-petrol-dark hover:text-sand-light px-5 py-3.5 text-center transition-all duration-150 flex items-center justify-center gap-2 shadow-xs group text-sm font-semibold"
              >
                <span>Visit WASL</span>
                <svg
                  className="h-4 w-4 text-sand transition-transform duration-150 group-hover:translate-x-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>

              {/* Secondary Brand CTA: Follow WASL on Instagram */}
              <a
                href={WASL_INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full rounded-xl border border-sand-muted bg-sand-muted hover:brightness-95 text-petrol px-4 py-2.5 text-center transition-all duration-150 flex items-center justify-center gap-2 text-xs sm:text-sm font-medium group"
              >
                <svg className="h-4 w-4 text-petrol shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                <span>Follow WASL on Instagram</span>
              </a>
            </div>
          </div>
        </div>

        {/* Minimal Under-Card Brand Signature */}
        <div className="mt-6 text-center text-xs text-charcoal-muted/70 space-y-1">
          <p className="font-arabic text-sm text-petrol/80">
            وصل — نقرب الأعمال من عملائها
          </p>
          <p>© {new Date().getFullYear()} WASL | وصل. All rights reserved.</p>
        </div>
      </main>
    </div>
  );
};
