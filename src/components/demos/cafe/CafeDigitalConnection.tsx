import React from 'react';
import qrStandImg from '../../../assets/demos/cafe/qr_stand.jpg';

export const CafeDigitalConnection: React.FC = () => {
  return (
    <section className="bg-cafe-espresso py-24 border-t border-cafe-stone/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between bg-[#231A15] rounded-sm p-8 md:p-12 border border-cafe-stone/10">
          
          <div className="max-w-xl text-center md:text-left mb-8 md:mb-0">
            <h2 className="font-cafe-display text-2xl sm:text-3xl text-cafe-cream mb-4">
              Enjoyed your visit? Tell us about it.
            </h2>
            <p className="font-cafe-body text-cafe-stone/80 text-sm">
              We read every piece of feedback to make NARA better.
            </p>
          </div>

          <div className="flex flex-col items-center gap-4">
            <div className="h-32 w-32 md:h-40 md:w-40 rounded-sm overflow-hidden bg-cafe-stone/20">
              <img
                src={qrStandImg}
                alt="Leave a review QR Code"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="font-cafe-body text-sm font-medium text-cafe-cream hover:text-cafe-terracotta transition-colors"
            >
              Leave a Review &rarr;
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
