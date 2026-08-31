import React from 'react';
import exteriorImg from '../../../assets/demos/cafe/exterior.jpg';

export const CafeVisit: React.FC = () => {
  return (
    <section id="visit" className="bg-[#FAF8F5] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          <div>
            <h2 className="font-cafe-display text-4xl sm:text-5xl text-cafe-espresso mb-8">Visit Us</h2>
            
            <div className="space-y-12">
              <div>
                <h3 className="font-cafe-body text-xs font-semibold uppercase tracking-widest text-cafe-olive mb-4">Location</h3>
                <p className="font-cafe-body text-xl text-cafe-espresso/90 mb-2">Jabal Amman — Rainbow Street</p>
                <p className="font-cafe-body text-cafe-stone mb-4">Amman, Jordan</p>
                <p className="font-cafe-body text-xs text-cafe-olive/60 italic mb-6">(Fictional concept address)</p>
                
                <a
                  href="https://google.com/maps"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block border-b border-cafe-terracotta pb-1 font-cafe-body text-sm font-medium text-cafe-espresso transition-colors hover:text-cafe-terracotta"
                >
                  Get Directions &rarr;
                </a>
              </div>

              <div>
                <h3 className="font-cafe-body text-xs font-semibold uppercase tracking-widest text-cafe-olive mb-4">Hours</h3>
                <div className="space-y-2 font-cafe-body text-lg text-cafe-espresso/90">
                  <div className="flex justify-between max-w-xs">
                    <span>Sat–Thu</span>
                    <span>7:30 AM – 12:00 AM</span>
                  </div>
                  <div className="flex justify-between max-w-xs">
                    <span>Friday</span>
                    <span>8:00 AM – 12:00 AM</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-cafe-body text-xs font-semibold uppercase tracking-widest text-cafe-olive mb-4">Contact</h3>
                <div className="flex flex-col gap-3">
                  <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="font-cafe-body text-lg text-cafe-espresso/90 hover:text-cafe-terracotta transition-colors">
                    WhatsApp: +962 7 0000 0000
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="font-cafe-body text-lg text-cafe-espresso/90 hover:text-cafe-terracotta transition-colors">
                    Instagram: @nara.cafe.demo
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="h-[400px] lg:h-auto w-full bg-cafe-stone/20 rounded-sm overflow-hidden">
            <img
              src={exteriorImg}
              alt="NARA Cafe Exterior"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>

        </div>

      </div>
    </section>
  );
};
