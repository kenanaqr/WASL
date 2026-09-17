import React, { useState, useEffect } from 'react';
import cafeTouchpoint from '../../../assets/demos/cafe/qr_stand.webp';
import restaurantTouchpoint from '../../../assets/demos/restaurant/touchpoint.webp';
import barberTouchpoint from '../../../assets/demos/barbershop/touchpoint.webp';

const images = [
  { src: cafeTouchpoint, alt: 'NARA Café digital touchpoint', label: 'NARA | Café' },
  { src: restaurantTouchpoint, alt: 'DAR Restaurant digital touchpoint', label: 'DAR | Restaurant' },
  { src: barberTouchpoint, alt: 'LINEA Barbershop digital touchpoint', label: 'LINEA | Barbershop' }
];

export const HeroVisual: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000); // Crossfade every 4 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-alabaster pb-24 sm:pb-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[100rem] mx-auto">
        <div className="relative aspect-[4/5] sm:aspect-[4/3] lg:aspect-[21/9] w-full overflow-hidden rounded-md bg-neutral-100 shadow-2xl">
          
          {images.map((image, index) => (
            <div 
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            >
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-full object-cover object-center"
              />
              
              {/* Optional subtle overlay label */}
              <div className="absolute bottom-6 right-6 bg-petrol/80 backdrop-blur-sm px-4 py-2 rounded-sm text-alabaster text-xs font-bold tracking-widest uppercase">
                {image.label}
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};
