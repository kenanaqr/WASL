import React from 'react';

export const WhatWeBuild: React.FC = () => {
  return (
    <section className="bg-petrol py-24 sm:py-32 text-alabaster">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-20 sm:mb-24">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-warm-sand mb-4">
            What your customers need.
          </h2>
          <p className="font-cafe-display text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight">
            The foundation of a modern local business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 border-t border-petrol-light/20 pt-16">
          
          <div className="flex flex-col">
            <span className="text-xs font-bold text-warm-sand mb-6 tracking-widest">01</span>
            <h3 className="text-2xl font-bold mb-2">GET FOUND</h3>
            <p className="text-sm text-petrol-light font-semibold uppercase tracking-widest mb-6">Google Presence</p>
            <p className="text-base text-alabaster/80 leading-relaxed max-w-sm">
              Make it easy to discover the right information.
            </p>
          </div>

          <div className="flex flex-col">
            <span className="text-xs font-bold text-warm-sand mb-6 tracking-widest">02</span>
            <h3 className="text-2xl font-bold mb-2">GET SEEN</h3>
            <p className="text-sm text-petrol-light font-semibold uppercase tracking-widest mb-6">Websites</p>
            <p className="text-base text-alabaster/80 leading-relaxed max-w-sm">
              Give your business a digital home that feels like you.
            </p>
          </div>

          <div className="flex flex-col">
            <span className="text-xs font-bold text-warm-sand mb-6 tracking-widest">03</span>
            <h3 className="text-2xl font-bold mb-2">GET CONNECTED</h3>
            <p className="text-sm text-petrol-light font-semibold uppercase tracking-widest mb-6">NFC + QR</p>
            <p className="text-base text-alabaster/80 leading-relaxed max-w-sm">
              Turn physical moments into instant digital actions.
            </p>
          </div>

          <div className="flex flex-col">
            <span className="text-xs font-bold text-warm-sand mb-6 tracking-widest">04</span>
            <h3 className="text-2xl font-bold mb-2">GO FURTHER</h3>
            <p className="text-sm text-petrol-light font-semibold uppercase tracking-widest mb-6">Custom Experiences</p>
            <p className="text-base text-alabaster/80 leading-relaxed max-w-sm">
              Build practical digital experiences around your customers.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};
