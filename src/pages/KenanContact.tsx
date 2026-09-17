import React, { useEffect } from 'react';
import waslLogo from '../assets/WASL logo.png';

const PHONE = '+962791071123';
const DISPLAY_PHONE = '+962 79 107 1123';
const EMAIL = 'kenanaqr@wasljo.com';
const INSTAGRAM = 'https://www.instagram.com/wasljo/';
const WHATSAPP = `https://wa.me/${PHONE.replace(/\D/g, '')}`;

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" stroke="currentColor" strokeWidth="1.8">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h13M13 6l6 6-6 6" />
  </svg>
);

const Icon = ({ children }: { children: React.ReactNode }) => (
  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-petrol/8 text-petrol" aria-hidden="true">
    {children}
  </span>
);

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth="1.8">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.6 3.8 8.8 3c.7-.2 1.4.1 1.7.7l1.3 3.1c.3.6.1 1.3-.4 1.7l-1.8 1.5a14.2 14.2 0 0 0 4.4 4.4l1.5-1.8c.4-.5 1.1-.7 1.7-.4l3.1 1.3c.6.3.9 1 .7 1.7l-.8 2.2c-.3.8-1.1 1.3-1.9 1.3C10.6 18.7 5.3 13.4 5.3 6.5c0-.8.5-1.6 1.3-1.9Z" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth="1.7">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.2 4.8A9.9 9.9 0 0 0 3.4 16.4L2.7 20l3.7-.7A9.9 9.9 0 1 0 19.2 4.8Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.6 7.3c.2-.2.5-.3.7-.1l1.4 1.1c.3.2.3.6.1.9l-.6.8c.7 1.2 1.7 2.1 2.9 2.8l.8-.6c.3-.2.7-.2.9.1l1.1 1.4c.2.2.1.5-.1.7-.6.6-1.5.8-2.3.5-2.6-.9-5.7-4-6.6-6.6-.3-.8-.1-1.7.5-2.3Z" />
  </svg>
);

const MailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth="1.8">
    <rect x="3.5" y="5" width="17" height="14" rx="2" />
    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 7 7.5 6 7.5-6" />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth="1.8">
    <rect x="4" y="4" width="16" height="16" rx="4" />
    <circle cx="12" cy="12" r="3.5" />
    <circle cx="17.2" cy="6.8" r=".8" fill="currentColor" stroke="none" />
  </svg>
);

const ContactCardIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth="1.8">
    <rect x="4" y="3.5" width="16" height="17" rx="2.5" />
    <circle cx="12" cy="9" r="2.3" />
    <path strokeLinecap="round" d="M8.5 16.5c.9-1.7 6.1-1.7 7 0" />
  </svg>
);

const KenanContactPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Kenan Al Aqrabawi | WASL';

    let robots = document.querySelector('meta[name="robots"]');
    const createdRobots = !robots;
    if (!robots) {
      robots = document.createElement('meta');
      robots.setAttribute('name', 'robots');
      document.head.appendChild(robots);
    }
    const previousRobots = robots.getAttribute('content');
    robots.setAttribute('content', 'noindex, nofollow');

    return () => {
      document.title = 'WASL | وصل';
      if (robots) {
        if (createdRobots) robots.remove();
        else if (previousRobots !== null) robots.setAttribute('content', previousRobots);
      }
    };
  }, []);

  const saveContact = () => {
    const vCard = [
      'BEGIN:VCARD',
      'VERSION:3.0',
      'FN:Kenan Al Aqrabawi',
      'ORG:WASL',
      `TEL;TYPE=CELL,VOICE:${PHONE}`,
      `EMAIL;TYPE=INTERNET:${EMAIL}`,
      'URL:https://wasljo.com',
      `X-SOCIALPROFILE;TYPE=instagram:${INSTAGRAM}`,
      'NOTE:WASL | وصل',
      'END:VCARD',
    ].join('\r\n');

    const blob = new Blob([vCard], { type: 'text/vcard;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Kenan-Al-Aqrabawi.vcf';
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
  };

  return (
    <main className="min-h-screen bg-alabaster px-4 py-8 text-charcoal sm:px-6 sm:py-12">
      <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-md items-center justify-center sm:min-h-[calc(100vh-6rem)]">
        <section className="w-full rounded-[28px] border border-sand/50 bg-white p-5 shadow-[0_20px_60px_rgba(24,65,75,0.08)] sm:p-7">
          <div className="flex flex-col items-center text-center">
            <img src={waslLogo} alt="WASL | وصل" className="h-12 w-auto object-contain sm:h-14" />
            <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.2em] text-charcoal-muted/65">Contact</p>
            <h1 className="mt-2 text-2xl font-semibold tracking-tight text-petrol sm:text-3xl">Kenan Al Aqrabawi</h1>
            <p className="mt-2 text-sm text-charcoal-muted">WASL | وصل</p>
          </div>

          <div className="mt-7 space-y-3">
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="group flex min-h-16 items-center gap-3 rounded-2xl border border-petrol/15 bg-petrol px-4 text-left text-alabaster transition-colors hover:bg-petrol-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-petrol/40 focus-visible:ring-offset-2">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/12"><WhatsAppIcon /></span>
              <span className="min-w-0 flex-1"><span className="block text-sm font-semibold">WhatsApp</span><span className="mt-0.5 block truncate text-xs text-white/65">{DISPLAY_PHONE}</span></span>
              <ArrowIcon />
            </a>

            <a href={`tel:${PHONE}`} className="flex min-h-16 items-center gap-3 rounded-2xl border border-sand/55 bg-alabaster px-4 text-left transition-colors hover:border-petrol/20 hover:bg-sand/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-petrol/40 focus-visible:ring-offset-2">
              <Icon><PhoneIcon /></Icon>
              <span className="min-w-0 flex-1"><span className="block text-sm font-semibold text-charcoal">Call</span><span className="mt-0.5 block truncate text-xs text-charcoal-muted">{DISPLAY_PHONE}</span></span>
              <ArrowIcon />
            </a>

            <a href={`mailto:${EMAIL}`} className="flex min-h-16 items-center gap-3 rounded-2xl border border-sand/55 bg-alabaster px-4 text-left transition-colors hover:border-petrol/20 hover:bg-sand/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-petrol/40 focus-visible:ring-offset-2">
              <Icon><MailIcon /></Icon>
              <span className="min-w-0 flex-1"><span className="block text-sm font-semibold text-charcoal">Email</span><span className="mt-0.5 block truncate text-xs text-charcoal-muted">{EMAIL}</span></span>
              <ArrowIcon />
            </a>

            <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="flex min-h-16 items-center gap-3 rounded-2xl border border-sand/55 bg-alabaster px-4 text-left transition-colors hover:border-petrol/20 hover:bg-sand/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-petrol/40 focus-visible:ring-offset-2">
              <Icon><InstagramIcon /></Icon>
              <span className="min-w-0 flex-1"><span className="block text-sm font-semibold text-charcoal">Instagram</span><span className="mt-0.5 block truncate text-xs text-charcoal-muted">@wasljo</span></span>
              <ArrowIcon />
            </a>

            <button type="button" onClick={saveContact} className="flex min-h-16 w-full items-center gap-3 rounded-2xl border border-sand/55 bg-alabaster px-4 text-left transition-colors hover:border-petrol/20 hover:bg-sand/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-petrol/40 focus-visible:ring-offset-2">
              <Icon><ContactCardIcon /></Icon>
              <span className="min-w-0 flex-1"><span className="block text-sm font-semibold text-charcoal">Save Contact</span><span className="mt-0.5 block text-xs text-charcoal-muted">Add Kenan to your contacts</span></span>
              <ArrowIcon />
            </button>
          </div>

          <div className="mt-7 border-t border-sand/40 pt-6 text-center">
            <a href="/" className="inline-flex items-center gap-2 text-sm font-medium text-petrol transition-colors hover:text-petrol-dark focus:outline-none focus-visible:underline">Visit WASL <ArrowIcon /></a>
          </div>
          <p className="mt-4 text-center font-arabic text-xs text-charcoal-muted/60" dir="rtl">وصل — نقرّب الأعمال من عملائها</p>
        </section>
      </div>
    </main>
  );
};

export default KenanContactPage;
