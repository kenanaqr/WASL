import React from 'react';
import { restaurantInfo } from './menuData';
import familyFeastImg from '../../../assets/three-brothers/tb_family_feast.jpg';

export const ThreeBrothersOrder: React.FC = () => {
  return (
    <section id="order" className="bg-tb-charcoal py-16 sm:py-24 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 mb-4">
            <span className="font-tb-body text-xs font-semibold uppercase tracking-wider text-tb-orange">
              Order Online or Carry Out
            </span>
          </div>
          <h2 className="font-tb-display text-3xl sm:text-4xl md:text-5xl font-bold uppercase text-white tracking-tight">
            Order Now
          </h2>
          <p className="mt-3 font-tb-body text-sm sm:text-base text-white/60">
            Dine in, carry out, or get it delivered hot to your door.
          </p>
          <div className="mt-3 h-1 w-12 bg-tb-orange mx-auto rounded-full" />
        </div>

        {/* Order options */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto mb-14 sm:mb-16">
          {/* Dine In */}
          <div className="rounded-2xl bg-white/5 border border-white/10 p-8 text-center hover:bg-white/10 transition-colors flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 rounded-xl bg-tb-olive/20 text-tb-sage flex items-center justify-center mx-auto mb-5">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.15c0 .415.336.75.75.75z" />
                </svg>
              </div>
              <h3 className="font-tb-display text-xl font-bold uppercase text-white mb-2">Dine In</h3>
              <p className="font-tb-body text-sm text-white/50 mb-6">
                Visit us at {restaurantInfo.address.street}
              </p>
            </div>
            <a
              href={`https://maps.google.com/?q=${encodeURIComponent(`${restaurantInfo.address.street}, ${restaurantInfo.address.city}, ${restaurantInfo.address.state} ${restaurantInfo.address.zip}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 px-5 py-2.5 font-tb-body text-sm font-medium text-white hover:bg-white/10 transition-colors"
            >
              Get Directions
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </a>
          </div>

          {/* Carry Out */}
          <div className="rounded-2xl bg-white/5 border border-white/10 p-8 text-center hover:bg-white/10 transition-colors flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 rounded-xl bg-tb-orange/20 text-tb-orange flex items-center justify-center mx-auto mb-5">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                </svg>
              </div>
              <h3 className="font-tb-display text-xl font-bold uppercase text-white mb-2">Carry Out</h3>
              <p className="font-tb-body text-sm text-white/50 mb-6">
                Call ahead for hot & fast pickup
              </p>
            </div>
            <a
              href="tel:5024097447"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-tb-orange px-5 py-2.5 font-tb-body text-sm font-semibold text-white hover:bg-tb-orange-light transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {restaurantInfo.phone}
            </a>
          </div>

          {/* Delivery */}
          <div className="rounded-2xl bg-white/5 border border-white/10 p-8 text-center hover:bg-white/10 transition-colors flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 rounded-xl bg-tb-burgundy/20 text-tb-burgundy flex items-center justify-center mx-auto mb-5">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0H18M3.375 14.25h3.75M21 12.75H7.5a.75.75 0 01-.75-.75V4.5a.75.75 0 01.75-.75h6.75a.75.75 0 01.553.244l4.5 4.5a.75.75 0 01.197.506v3.75a.75.75 0 01-.75.75z" />
                </svg>
              </div>
              <h3 className="font-tb-display text-xl font-bold uppercase text-white mb-2">Delivery</h3>
              <p className="font-tb-body text-sm text-white/50 mb-6">
                Order through your favorite app
              </p>
            </div>
            <div className="flex flex-col gap-2">
              {restaurantInfo.delivery.map((platform) => (
                <span
                  key={platform}
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 px-5 py-2 font-tb-body text-xs sm:text-sm font-medium text-white/80"
                >
                  {platform}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Takeout & Packaging Brand Banner */}
        <div className="max-w-5xl mx-auto rounded-3xl overflow-hidden bg-white/5 border border-white/10 p-6 sm:p-8 lg:p-10 backdrop-blur-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-2 rounded-full bg-tb-orange/20 text-tb-orange px-3 py-1 font-tb-body text-xs font-semibold uppercase tracking-wider mb-3">
                Catering & Large Orders
              </span>
              <h3 className="font-tb-display text-2xl sm:text-3xl font-bold uppercase text-white tracking-tight">
                Freshly Packed for Families & Events
              </h3>
              <p className="mt-3 font-tb-body text-sm text-white/75 leading-relaxed">
                Whether you’re ordering the 3 Brothers Feast for dinner or feeding a group with 50-piece wing boxes and fish by the piece, everything is packed hot in custom Three Brothers packaging.
              </p>
              <div className="mt-6 flex flex-wrap gap-4 items-center">
                <a
                  href={`tel:${restaurantInfo.phone.replace(/-/g, '')}`}
                  className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-2.5 font-tb-body text-sm font-semibold text-tb-charcoal hover:bg-white/90 transition-colors"
                >
                  <svg className="w-4 h-4 text-tb-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call {restaurantInfo.phone}
                </a>
                <span className="font-tb-body text-xs text-white/50">
                  {restaurantInfo.address.street}, {restaurantInfo.address.city}, {restaurantInfo.address.state}
                </span>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[16/10] border border-white/10 group">
                <img
                  src={familyFeastImg}
                  alt="Three Brothers Restaurant Takeout Feast with Branded Bag"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 text-white">
                  <span className="font-tb-display text-sm font-bold uppercase tracking-wide">
                    The 3 Brothers Feast
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
