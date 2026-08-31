import React from 'react';
import { siteConfig } from '../data/siteConfig';

interface PageProps {
  onNavigate?: (path: string) => void;
}

export const ContactPage: React.FC<PageProps> = () => {
  return (
    <div className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
            Reach Out
          </p>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-neutral-950 sm:text-5xl">
            Contact Us
          </h1>
          <p className="mt-4 text-lg text-neutral-600">
            Let&apos;s talk about building your business&apos;s next digital home.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Contact Details (Centralized Placeholders) */}
          <div className="space-y-6">
            <div className="rounded-xl border border-neutral-200 bg-neutral-50/50 p-6">
              <h2 className="text-base font-semibold text-neutral-900">Direct Contact Details</h2>
              <p className="mt-1 text-xs text-neutral-400">
                (Configured in siteConfig.ts)
              </p>

              <dl className="mt-6 space-y-4 text-sm">
                <div>
                  <dt className="text-neutral-500">Phone</dt>
                  <dd className="font-mono text-neutral-900 font-medium">{siteConfig.contact.phone}</dd>
                </div>
                <div>
                  <dt className="text-neutral-500">WhatsApp</dt>
                  <dd className="font-mono text-neutral-900 font-medium">{siteConfig.contact.whatsapp}</dd>
                </div>
                <div>
                  <dt className="text-neutral-500">Email</dt>
                  <dd className="font-medium text-neutral-900">{siteConfig.contact.email}</dd>
                </div>
                <div>
                  <dt className="text-neutral-500">Location</dt>
                  <dd className="text-neutral-900 font-medium">{siteConfig.contact.location}</dd>
                </div>
                <div>
                  <dt className="text-neutral-500">Instagram</dt>
                  <dd className="text-neutral-900 font-medium">{siteConfig.contact.instagram}</dd>
                </div>
              </dl>
            </div>
          </div>

          {/* Simple Form Placeholder */}
          <div className="rounded-xl border border-neutral-200 bg-white p-8 shadow-xs">
            <h2 className="text-xl font-bold text-neutral-900">Send an inquiry</h2>
            <form onSubmit={(e) => e.preventDefault()} className="mt-6 space-y-4">
              <div>
                <label className="block text-xs font-medium text-neutral-700">Business / Your Name</label>
                <input
                  type="text"
                  placeholder="Your Name or Business Name"
                  disabled
                  className="mt-1 block w-full rounded-md border border-neutral-300 bg-neutral-50 px-3 py-2 text-sm text-neutral-500 cursor-not-allowed"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-neutral-700">Phone / WhatsApp</label>
                <input
                  type="text"
                  placeholder="+962 7..."
                  disabled
                  className="mt-1 block w-full rounded-md border border-neutral-300 bg-neutral-50 px-3 py-2 text-sm text-neutral-500 cursor-not-allowed"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-neutral-700">Message</label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your project..."
                  disabled
                  className="mt-1 block w-full rounded-md border border-neutral-300 bg-neutral-50 px-3 py-2 text-sm text-neutral-500 cursor-not-allowed"
                />
              </div>
              <p className="text-xs text-neutral-400">
                Inquiry form UI placeholder. Backend / form handler will be configured in subsequent design phase.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
