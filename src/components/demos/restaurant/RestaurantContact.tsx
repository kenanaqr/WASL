import React from 'react';
import { darConfig } from '../../../data/demos/restaurantConfig';

export const RestaurantContact: React.FC = () => {
  return (
    <section className="bg-dar-burgundy py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        
        <h2 className="font-dar-display text-4xl sm:text-5xl text-dar-ivory mb-6">
          Planning a table?
        </h2>
        
        <p className="font-dar-body text-lg text-dar-ivory/80 max-w-xl mx-auto mb-12">
          For reservations and larger gatherings, contact {darConfig.name.split(' ')[0]} directly.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <a
            href={darConfig.contact.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto rounded-sm bg-dar-ivory px-8 py-4 font-dar-body text-xs uppercase tracking-widest text-dar-midnight transition-colors hover:bg-white"
          >
            WhatsApp Us
          </a>
          
          <a
            href={darConfig.contact.phoneLink}
            className="w-full sm:w-auto rounded-sm border border-dar-ivory/40 bg-transparent px-8 py-4 font-dar-body text-xs uppercase tracking-widest text-dar-ivory transition-colors hover:bg-dar-ivory/10 hover:border-dar-ivory"
          >
            Call {darConfig.contact.phone}
          </a>
        </div>
        
      </div>
    </section>
  );
};
