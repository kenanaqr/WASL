import React from 'react';

export const RestaurantStory: React.FC = () => {
  return (
    <section id="story" className="bg-dar-midnight py-24 sm:py-32 relative overflow-hidden">
      {/* Subtle decorative background element */}
      <div className="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 rounded-full border border-dar-brass/5 opacity-50 blur-xl pointer-events-none"></div>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-dar-display text-4xl sm:text-5xl md:text-6xl text-dar-ivory leading-tight mb-8">
          A table shaped by the Levant.
        </h2>
        
        <div className="space-y-8 font-dar-body text-base sm:text-lg text-dar-stone leading-relaxed max-w-2xl mx-auto">
          <p>
            At DAR, we believe that the best meals are those shared. Our kitchen draws inspiration from the rich culinary traditions of the Levant, interpreting familiar flavors through a contemporary lens. We source the finest regional ingredients to create dishes that are both comforting and unexpectedly refined.
          </p>
          <p>
            More than just dining, DAR is about the warmth of true hospitality. We have designed a space where time slows down, conversations flow freely, and every detail—from the weight of the ceramics to the ambient lighting—is crafted to make you feel completely at home.
          </p>
        </div>
        
        <div className="mt-16 pt-8 border-t border-dar-brass/10 w-24 mx-auto"></div>
      </div>
    </section>
  );
};
