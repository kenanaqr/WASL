import React from 'react';
import storyImg from '../../../assets/demos/cafe/story.webp';

export const CafeStory: React.FC = () => {
  return (
    <section id="story" className="bg-cafe-cream py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
          
          {/* Story Text */}
          <div className="max-w-xl">
            <h2 className="font-cafe-display text-4xl sm:text-5xl text-cafe-espresso leading-tight">
              Made for the <br />
              <span className="italic text-cafe-terracotta">everyday ritual.</span>
            </h2>
            <div className="mt-8 space-y-6 font-cafe-body text-lg text-cafe-espresso/80 leading-relaxed">
              <p>
                NARA was born from a simple belief: the best moments of the day are often the quietest. 
                Whether it's a meticulously crafted morning pour-over, a shared pastry over conversation, 
                or a few moments of solitude with a book, we exist to elevate these daily rhythms.
              </p>
              <p>
                We source exceptional coffees, bake with uncompromising ingredients, 
                and design our space to feel like an extension of your own living room—just with much better coffee.
              </p>
            </div>
            
            <div className="mt-12">
              <span className="block font-cafe-arabic text-xl text-cafe-olive mb-2">
                نصنع يومك بكل حب وعناية
              </span>
            </div>
          </div>

          {/* Story Image */}
          <div className="relative">
            <div className="aspect-w-3 aspect-h-4 md:aspect-w-4 md:aspect-h-5 overflow-hidden rounded-sm bg-cafe-stone/20">
              <img
                src={storyImg}
                alt="Coffee preparation at NARA"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -left-6 h-24 w-24 border border-cafe-olive/30 -z-10 hidden sm:block"></div>
          </div>

        </div>
      </div>
    </section>
  );
};
