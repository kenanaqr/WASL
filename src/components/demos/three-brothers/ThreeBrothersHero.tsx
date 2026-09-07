import React from 'react';
import { restaurantInfo } from './menuData';
import heroSeafoodImg from '../../../assets/three-brothers/tb_hero_seafood.jpg';

interface ThreeBrothersHeroProps {
  onScrollTo: (id: string) => void;
}

export const ThreeBrothersHero: React.FC<ThreeBrothersHeroProps> = ({ onScrollTo }) => {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden bg-tb-charcoal">
      {/* Branded background composition — olive/charcoal gradient with texture */}
      <div className="absolute inset-0 z-0">
        {/* Base gradient using brand colors */}
        <div className="absolute inset-0 bg-gradient-to-br from-tb-charcoal via-tb-olive/85 to-tb-charcoal" />
        {/* Subtle pattern overlay for texture */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '32px 32px',
          }}
        />
        {/* Warm vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-tb-charcoal/90 via-transparent to-tb-charcoal/40" />
      </div>

      {/* Decorative accent lines */}
      <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-tb-orange via-tb-olive to-tb-orange z-10" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: Primary Messaging & CTAs */}
          <div className="lg:col-span-7">
            {/* Supporting Location Indicator */}
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md border border-white/15 px-4 py-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-tb-orange animate-pulse" />
              <span className="font-tb-body text-xs sm:text-sm font-semibold tracking-wide text-white/90">
                {restaurantInfo.locationContext}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-tb-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold uppercase text-white leading-[0.92] tracking-tight">
              Seafood,
              <br />
              Chicken
              <br />
              <span className="text-tb-orange">& More.</span>
            </h1>

            {/* Made to Order Tagline */}
            <div className="mt-6 sm:mt-7 flex items-center gap-3">
              <span className="h-0.5 w-10 bg-tb-orange rounded-full" />
              <p className="font-tb-display text-2xl sm:text-3xl uppercase tracking-wider text-tb-cream font-bold">
                {restaurantInfo.subtitle}
              </p>
            </div>

            {/* Direct descriptive copy */}
            <p className="mt-4 font-tb-body text-base sm:text-lg text-white/80 max-w-xl leading-relaxed">
              Whiting, catfish, tilapia, and jumbo shrimp seafood dinners, crispy whole wings, chicken tenders, burgers, and sandwiches — prepared fresh to your order in Louisville.
            </p>

            {/* Primary CTAs */}
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button
                onClick={() => onScrollTo('order')}
                className="w-full sm:w-auto rounded-lg bg-tb-orange px-8 py-4 font-tb-body text-sm sm:text-base font-semibold text-white transition-all hover:bg-tb-orange-light hover:shadow-lg hover:shadow-tb-orange/25 active:scale-[0.99]"
              >
                Order Online
              </button>
              <button
                onClick={() => onScrollTo('menu')}
                className="w-full sm:w-auto rounded-lg border-2 border-white/25 bg-white/5 backdrop-blur-sm px-8 py-4 font-tb-body text-sm sm:text-base font-semibold text-white transition-all hover:bg-white/10 hover:border-white/40 active:scale-[0.99]"
              >
                View Menu
              </button>
            </div>

            {/* Secondary actions: Call & Directions */}
            <div className="mt-7 flex flex-wrap items-center gap-6 pt-2 border-t border-white/10">
              <a
                href={`tel:${restaurantInfo.phone.replace(/-/g, '')}`}
                className="flex items-center gap-2 font-tb-body text-sm text-white/70 hover:text-white transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-tb-orange">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span className="font-medium">Call {restaurantInfo.phone}</span>
              </a>
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(`${restaurantInfo.address.street}, ${restaurantInfo.address.city}, ${restaurantInfo.address.state} ${restaurantInfo.address.zip}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-tb-body text-sm text-white/70 hover:text-white transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-tb-sage">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span className="font-medium">2001 7th Street Rd, Louisville</span>
              </a>
            </div>
          </div>

          {/* Right Column: Hero Seafood Platter Photography Showcase */}
          <div className="lg:col-span-5">
            <div className="relative group rounded-3xl overflow-hidden bg-white/5 border-2 border-white/15 p-2 shadow-2xl backdrop-blur-sm transition-all duration-300 hover:border-tb-orange/50">
              <div className="relative aspect-[16/10] sm:aspect-[4/3] rounded-2xl overflow-hidden">
                <img
                  src={heroSeafoodImg}
                  alt="Three Brothers Restaurant Seafood Platter with Whiting, Shrimp, and Hush Puppies"
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Top Badge */}
                <div className="absolute top-4 left-4 inline-flex items-center gap-2 rounded-full bg-black/60 backdrop-blur-md border border-white/20 px-3 py-1.5">
                  <span className="w-2 h-2 rounded-full bg-tb-orange animate-pulse" />
                  <span className="font-tb-body text-xs font-semibold text-white tracking-wide">
                    Signature Seafood Platter
                  </span>
                </div>

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="font-tb-display text-xl sm:text-2xl font-bold uppercase tracking-wide drop-shadow-md">
                    Whiting Fillets & Jumbo Shrimp
                  </p>
                  <p className="mt-1 font-tb-body text-xs text-white/80 line-clamp-2">
                    Served with hush puppies, crispy fries, coleslaw, and tartar sauce — prepared fresh to order.
                  </p>
                </div>
              </div>

              {/* Guarantees Bar */}
              <div className="px-4 py-3 flex items-center justify-between text-xs text-white/70">
                <span className="flex items-center gap-1.5 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-tb-sage" />
                  100% Pure Vegetable Oil
                </span>
                <span className="text-tb-orange font-semibold">Cooked Hot to Order</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle background brand mark */}
      <div className="absolute right-0 bottom-0 pointer-events-none select-none opacity-[0.03]">
        <span className="font-tb-display text-[26rem] font-bold text-white leading-none">
          3
        </span>
      </div>
    </section>
  );
};
