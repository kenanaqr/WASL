import React from 'react';
import { siteConfig } from '../data/siteConfig';

interface PageProps {
  onNavigate?: (path: string) => void;
}

export const ContactPage: React.FC<PageProps> = ({ onNavigate }) => {
  return (
    <div className="py-16 sm:py-24 bg-alabaster">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-wider text-sand-muted">
            Reach Out
          </p>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-petrol sm:text-5xl">
            Contact Us
          </h1>
          <p className="mt-4 text-lg text-charcoal/80 font-light leading-relaxed">
            Let&apos;s talk about building your business&apos;s next digital home.
          </p>
        </div>

        {/* Two-Column Content */}
        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12 items-stretch">
          {/* LEFT: Direct Contact Details */}
          <div className="rounded-xl border border-sand/40 bg-white p-6 sm:p-8 shadow-xs flex flex-col justify-between">
            <div>
              <h2 className="text-xl font-bold text-petrol">Direct Contact Details</h2>
              <p className="mt-1 text-xs text-charcoal-muted">
                Reach our team directly for inquiries and partnerships.
              </p>

              <dl className="mt-6 space-y-4 text-sm">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between py-1 border-b border-sand/20">
                  <dt className="text-xs font-medium uppercase tracking-wider text-charcoal-muted">Phone</dt>
                  <dd>
                    <a
                      href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, '')}`}
                      className="font-mono font-medium text-petrol hover:text-petrol-dark transition-colors"
                      aria-label={`Call WASL at ${siteConfig.contact.phone}`}
                    >
                      {siteConfig.contact.phone}
                    </a>
                  </dd>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between py-1 border-b border-sand/20">
                  <dt className="text-xs font-medium uppercase tracking-wider text-charcoal-muted">WhatsApp</dt>
                  <dd>
                    <a
                      href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono font-medium text-petrol hover:text-petrol-dark transition-colors inline-flex items-center gap-1.5"
                      aria-label="Message WASL on WhatsApp"
                    >
                      <span>{siteConfig.contact.whatsapp}</span>
                      <svg className="h-3.5 w-3.5 text-sand-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  </dd>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between py-1 border-b border-sand/20">
                  <dt className="text-xs font-medium uppercase tracking-wider text-charcoal-muted">Email</dt>
                  <dd>
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="font-medium text-petrol hover:text-petrol-dark transition-colors"
                      aria-label={`Email WASL at ${siteConfig.contact.email}`}
                    >
                      {siteConfig.contact.email}
                    </a>
                  </dd>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between py-1 border-b border-sand/20">
                  <dt className="text-xs font-medium uppercase tracking-wider text-charcoal-muted">Location</dt>
                  <dd className="font-medium text-charcoal">
                    {siteConfig.contact.location}
                  </dd>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between py-1">
                  <dt className="text-xs font-medium uppercase tracking-wider text-charcoal-muted">Instagram</dt>
                  <dd>
                    <a
                      href={siteConfig.contact.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-petrol hover:text-petrol-dark transition-colors inline-flex items-center gap-1.5"
                      aria-label="Follow WASL on Instagram"
                    >
                      <span>@wasljo</span>
                      <svg className="h-3.5 w-3.5 text-sand-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          </div>

          {/* RIGHT: Send an Inquiry */}
          <div className="rounded-xl border border-sand/40 bg-white p-6 sm:p-8 shadow-xs flex flex-col justify-between">
            <div>
              <h2 className="text-xl font-bold text-petrol">Send an inquiry</h2>
              <p className="mt-3 text-sm text-charcoal/80 font-light leading-relaxed">
                Have a project in mind? Reach out directly and we&apos;ll get back to you.
              </p>
              <p className="mt-1 text-xs text-sand-muted font-arabic">
                جاهزون لنسمع عن فكرتك ومشروعك القادم.
              </p>
            </div>

            <div className="mt-8 space-y-3">
              <a
                href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full rounded-xl bg-petrol text-alabaster hover:bg-petrol-dark hover:text-sand-light px-5 py-3.5 text-center transition-all duration-150 flex items-center justify-between shadow-xs group text-sm font-semibold"
                aria-label="WhatsApp Us"
              >
                <span>WhatsApp Us</span>
                <span className="text-sand group-hover:translate-x-0.5 transition-transform">→</span>
              </a>

              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="w-full rounded-xl border border-sand/50 bg-alabaster/50 hover:bg-alabaster hover:border-sand text-petrol px-5 py-3.5 text-center transition-all duration-150 flex items-center justify-between group text-sm font-medium"
                aria-label="Email Us"
              >
                <span>Email Us</span>
                <span className="text-sand-muted group-hover:text-petrol group-hover:translate-x-0.5 transition-all">→</span>
              </a>
            </div>
          </div>
        </div>

        {/* Restrained Founders Section */}
        <div className="mt-16 sm:mt-24 pt-12 border-t border-sand/30">
          <div className="max-w-2xl">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-petrol">
              Our Founders
            </h2>
            <p className="mt-1 text-sm text-charcoal-muted">
              Connect directly with our founding team.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {siteConfig.founders.map((founder) => (
              <div
                key={founder.name}
                className="rounded-xl border border-sand/40 bg-white p-6 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-baseline justify-between gap-2">
                    <h3 className="text-lg font-bold text-petrol">
                      {founder.name}
                    </h3>
                    {founder.arabicName && (
                      <span className="text-xs font-arabic text-charcoal-muted">
                        {founder.arabicName}
                      </span>
                    )}
                  </div>
                  <p className="mt-1 text-xs font-medium uppercase tracking-wider text-sand-muted">
                    {founder.role}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-sand/20">
                  <a
                    href={founder.path}
                    onClick={(e) => {
                      if (onNavigate) {
                        e.preventDefault();
                        onNavigate(founder.path);
                      }
                    }}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-petrol hover:text-petrol-dark transition-colors group"
                    aria-label={`View contact card for ${founder.name}`}
                  >
                    <span>View contact</span>
                    <span className="text-sand-muted group-hover:text-petrol group-hover:translate-x-0.5 transition-all">→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
