import React from 'react';
import { restaurantInfo } from './menuData';
import logoImg from '../../../assets/three-brothers/3Brotherslogo-transparent.png';

interface ThreeBrothersFooterProps {
  onScrollTo: (id: string) => void;
}

export const ThreeBrothersFooter: React.FC<ThreeBrothersFooterProps> = ({ onScrollTo }) => {
  const { address, phone, hours } = restaurantInfo;

  return (
    <footer className="bg-tb-charcoal py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-xl bg-white/95 p-1 flex items-center justify-center shadow-sm">
                <img
                  src={logoImg}
                  alt="Three Brothers Restaurant Logo"
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-tb-display text-xl font-bold uppercase text-white tracking-wide">
                  Three Brothers
                </span>
                <span className="font-tb-body text-xs text-tb-sage font-semibold tracking-wider uppercase">
                  Louisville, KY
                </span>
              </div>
            </div>
            <p className="mt-4 font-tb-body text-sm text-white/50 leading-relaxed">
              {restaurantInfo.tagline}
              <br />
              {restaurantInfo.subtitle}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-tb-body text-xs font-semibold uppercase tracking-widest text-tb-sage mb-6">
              Navigation
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'Home', target: 'home' },
                { label: 'Menu', target: 'menu' },
                { label: 'Order', target: 'order' },
                { label: 'Catering', target: 'catering' },
                { label: 'Visit', target: 'visit' },
              ].map((link) => (
                <li key={link.target}>
                  <button
                    onClick={() => onScrollTo(link.target)}
                    className="font-tb-body text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-tb-body text-xs font-semibold uppercase tracking-widest text-tb-sage mb-6">
              Hours
            </h4>
            <div className="font-tb-body text-sm space-y-2 text-white/60">
              <div className="flex justify-between max-w-[200px]">
                <span>Mon – Thu</span>
                <span className="text-white/80">{hours.monThu}</span>
              </div>
              <div className="flex justify-between max-w-[200px]">
                <span>Friday</span>
                <span className="text-white/80">{hours.fri}</span>
              </div>
              <div className="flex justify-between max-w-[200px]">
                <span>Saturday</span>
                <span className="text-white/80">{hours.sat}</span>
              </div>
              <div className="flex justify-between max-w-[200px]">
                <span>Sunday</span>
                <span className="text-tb-orange">{hours.sun}</span>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-tb-body text-xs font-semibold uppercase tracking-widest text-tb-sage mb-6">
              Contact
            </h4>
            <ul className="space-y-3 font-tb-body text-sm text-white/60">
              <li>
                <a href={`tel:${phone.replace(/-/g, '')}`} className="hover:text-white transition-colors">
                  {phone}
                </a>
              </li>
              <li>
                {address.street}
                <br />
                {address.city}, {address.state} {address.zip}
              </li>
              <li className="pt-2">
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(`${address.street}, ${address.city}, ${address.state} ${address.zip}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-tb-orange hover:text-tb-orange-light transition-colors font-medium"
                >
                  Get Directions
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Delivery platforms */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 flex-wrap justify-center">
            <span className="font-tb-body text-xs text-white/30 uppercase tracking-wider">Order via</span>
            {restaurantInfo.delivery.map((platform) => (
              <span
                key={platform}
                className="font-tb-body text-sm font-medium text-white/50"
              >
                {platform}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-4 text-white/30">
            <span className="font-tb-body text-xs">{restaurantInfo.features[1]}</span>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-tb-body text-xs text-white/30">
            &copy; {new Date().getFullYear()} Three Brothers Restaurant. All rights reserved.
          </p>
          <span className="font-tb-body text-xs text-white/30">
            A WASL Prototype
          </span>
        </div>
      </div>
    </footer>
  );
};
