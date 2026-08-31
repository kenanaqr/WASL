import React from 'react';
import { darConfig } from '../../../data/demos/restaurantConfig';

export const RestaurantVisit: React.FC = () => {
  return (
    <section id="visit" className="bg-dar-midnight py-24 sm:py-32 border-t border-dar-brass/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          <div>
            <h2 className="font-dar-display text-4xl sm:text-5xl text-dar-ivory mb-12">Visit</h2>
            
            <div className="space-y-12">
              <div>
                <h3 className="font-dar-body text-xs font-semibold uppercase tracking-widest text-dar-brass mb-4">Location</h3>
                <p className="font-dar-body text-xl text-dar-ivory/90 mb-2">{darConfig.address.split(',')[0]}</p>
                <p className="font-dar-body text-dar-stone mb-4">{darConfig.address.split(',').slice(1).join(',').trim()}</p>
                <p className="font-dar-body text-xs text-dar-stone/50 italic mb-6">{darConfig.addressSub}</p>
                
                <a
                  href="https://google.com/maps"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block border-b border-dar-burgundy pb-1 font-dar-body text-sm tracking-wide text-dar-ivory transition-colors hover:text-dar-burgundy"
                >
                  Get Directions &rarr;
                </a>
              </div>

              <div>
                <h3 className="font-dar-body text-xs font-semibold uppercase tracking-widest text-dar-brass mb-4">Hours</h3>
                <div className="space-y-3 font-dar-body text-lg text-dar-ivory/90">
                  {darConfig.hours.map((hour, idx) => (
                    <div key={idx} className="flex justify-between max-w-xs border-b border-dar-brass/10 pb-2">
                      <span className="text-dar-stone">{hour.day}</span>
                      <span>{hour.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-dar-body text-xs font-semibold uppercase tracking-widest text-dar-brass mb-4">Contact</h3>
                <div className="flex flex-col gap-4">
                  <a href={darConfig.contact.whatsappLink} target="_blank" rel="noopener noreferrer" className="font-dar-body text-lg text-dar-ivory/90 hover:text-dar-burgundy transition-colors">
                    WhatsApp: {darConfig.contact.whatsapp}
                  </a>
                  <a href={darConfig.contact.phoneLink} className="font-dar-body text-lg text-dar-ivory/90 hover:text-dar-burgundy transition-colors">
                    Call: {darConfig.contact.phone}
                  </a>
                  <a href={darConfig.contact.instagramLink} target="_blank" rel="noopener noreferrer" className="font-dar-body text-lg text-dar-ivory/90 hover:text-dar-burgundy transition-colors">
                    Instagram: {darConfig.contact.instagram}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="h-[400px] lg:h-auto w-full bg-[#121110] rounded-sm flex items-center justify-center border border-dar-brass/10 relative overflow-hidden group">
            {/* Minimalist Map Visualization Graphic */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#A58A5B" strokeWidth="0.5"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
                {/* A few abstract "street" lines */}
                <path d="M -100 200 L 800 50" fill="none" stroke="#A58A5B" strokeWidth="2" opacity="0.5"/>
                <path d="M 200 -100 L 150 800" fill="none" stroke="#A58A5B" strokeWidth="2" opacity="0.5"/>
              </svg>
            </div>
            
            <div className="text-center relative z-10">
              <div className="h-4 w-4 bg-dar-burgundy rounded-full mx-auto mb-4 ring-4 ring-dar-burgundy/20 animate-pulse"></div>
              <span className="font-dar-body text-xs text-dar-brass uppercase tracking-[0.2em]">{darConfig.location}</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
