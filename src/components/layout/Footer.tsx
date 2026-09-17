import React from 'react';
import { siteConfig } from '../../data/siteConfig';
import waslLogo from '../../assets/WASL logo.png';

interface FooterProps {
  onNavigate: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (e: React.MouseEvent, path: string) => {
    e.preventDefault();
    onNavigate(path);
  };

  return (
    <footer className="border-t border-petrol/20 bg-petrol text-alabaster">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-5">
          {/* Brand and Description */}
          <div className="space-y-4 md:col-span-2">
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-alabaster/10 p-1.5 backdrop-blur-xs">
                <img
                  src={waslLogo}
                  alt="WASL Logo"
                  className="h-8 w-auto brightness-200"
                />
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-xl font-bold tracking-tight text-alabaster">
                  {siteConfig.companyName}
                </span>
                <span className="text-sand/50 text-sm font-light">|</span>
                <span className="text-base font-medium text-sand font-arabic">
                  {siteConfig.arabicName}
                </span>
              </div>
            </div>
            <p className="text-sm text-alabaster/70 max-w-sm leading-relaxed">
              {siteConfig.tagline}
            </p>
            <p className="text-xs text-sand/70 tracking-wide">
              {siteConfig.contact.location}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-sand">
              Navigation
            </h3>
            <ul className="mt-4 space-y-2.5">
              {siteConfig.navLinks.map((link) => (
                <li key={link.path}>
                  <a
                    href={link.path}
                    onClick={(e) => handleLinkClick(e, link.path)}
                    className="text-sm text-alabaster/75 hover:text-alabaster transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Work Concepts */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-sand">
              Work Concepts
            </h3>
            <ul className="mt-4 space-y-2.5">
              {siteConfig.demoLinks.map((demo) => (
                <li key={demo.id}>
                  <a
                    href={demo.path}
                    onClick={(e) => handleLinkClick(e, demo.path)}
                    className="text-sm text-alabaster/75 hover:text-alabaster transition-colors duration-200 flex items-center gap-2"
                  >
                    <span>{demo.name}</span>
                    <span className="text-xs font-arabic text-sand/60">({demo.arabicName})</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Inquiries / Contact */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-sand">
              Contact
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-alabaster/75">
              <li>
                <span className="text-sand/60 block text-xs">Phone</span>
                <a
                  href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, '')}`}
                  className="font-mono text-xs hover:text-alabaster transition-colors"
                >
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li>
                <span className="text-sand/60 block text-xs">WhatsApp</span>
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs hover:text-alabaster transition-colors"
                >
                  {siteConfig.contact.whatsapp}
                </a>
              </li>
              <li>
                <span className="text-sand/60 block text-xs">Email</span>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-xs hover:text-alabaster transition-colors"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
              <li>
                <span className="text-sand/60 block text-xs">Location</span>
                <span className="text-xs">{siteConfig.contact.location}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-alabaster/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-alabaster/50">
          <p>© {currentYear} {siteConfig.companyName} | {siteConfig.arabicName}. All rights reserved.</p>
          <p className="text-sand/60 font-arabic text-sm">وصل — نقرب الأعمال من عملائها.</p>
        </div>
      </div>
    </footer>
  );
};
