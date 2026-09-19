import React from 'react';
import signatureImg from '../../../assets/demos/cafe/signature.webp';
import v60Img from '../../../assets/demos/cafe/v60.webp';
import cheesecakeImg from '../../../assets/demos/cafe/cheesecake.webp';

export const CafeSignatures: React.FC = () => {
  return (
    <section className="bg-cafe-cream py-24 sm:py-32 border-t border-cafe-stone/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="mb-16 md:mb-24 md:flex md:items-end md:justify-between">
          <div className="max-w-2xl">
            <h2 className="font-cafe-display text-3xl sm:text-4xl text-cafe-espresso">
              Signature Items
            </h2>
            <p className="mt-4 font-cafe-body text-lg text-cafe-olive">
              The classics we've perfected, and the seasonal experiments we love sharing.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          
          {/* Item 1 */}
          <div className="group">
            <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-sm bg-cafe-stone/20 mb-6">
              <img
                src={signatureImg}
                alt="NARA Flat White"
                width={1024}
                height={1024}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="flex justify-between items-baseline mb-2">
              <h3 className="font-cafe-display text-2xl text-cafe-espresso">NARA Flat White</h3>
              <span className="font-cafe-body text-sm font-medium text-cafe-espresso">3.25 JOD</span>
            </div>
            <p className="font-cafe-body text-cafe-espresso/80 text-sm leading-relaxed">
              Our signature house blend pulled short, textured with velvety microfoam. Perfectly balanced notes of dark chocolate, toasted hazelnut, and sweet cherry.
            </p>
          </div>

          {/* Item 2 */}
          <div className="group">
            <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-sm bg-cafe-stone/20 mb-6">
              <img
                src={v60Img}
                alt="Seasonal V60"
                width={1024}
                height={1024}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="flex justify-between items-baseline mb-2">
              <h3 className="font-cafe-display text-2xl text-cafe-espresso">Seasonal V60</h3>
              <span className="font-cafe-body text-sm font-medium text-cafe-espresso">3.50 JOD</span>
            </div>
            <p className="font-cafe-body text-cafe-espresso/80 text-sm leading-relaxed">
              A rotating selection of single-origin beans meticulously hand-brewed to highlight bright, tea-like floral and fruit notes. Served in a carafe.
            </p>
          </div>

          {/* Item 3 */}
          <div className="group">
            <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-sm bg-cafe-stone/20 mb-6">
              <img
                src={cheesecakeImg}
                alt="Basque Cheesecake"
                width={1024}
                height={1024}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="flex justify-between items-baseline mb-2">
              <h3 className="font-cafe-display text-2xl text-cafe-espresso">Basque Cheesecake</h3>
              <span className="font-cafe-body text-sm font-medium text-cafe-espresso">4.50 JOD</span>
            </div>
            <p className="font-cafe-body text-cafe-espresso/80 text-sm leading-relaxed">
              Baked daily in small batches. Intentionally scorched exterior yielding to a rich, molten vanilla bean cream center.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
