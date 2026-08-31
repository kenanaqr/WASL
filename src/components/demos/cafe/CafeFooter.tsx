import React from 'react';

interface CafeFooterProps {
  onScrollTo: (id: string) => void;
}

export const CafeFooter: React.FC<CafeFooterProps> = ({ onScrollTo }) => {
  return (
    <footer className="bg-[#1C1512] py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          
          <div className="md:col-span-2">
            <span className="font-cafe-display text-2xl text-cafe-cream">NARA | نارا</span>
            <p className="mt-4 font-cafe-body text-sm text-cafe-stone/60 max-w-xs">
              Coffee · Breakfast · Amman
            </p>
          </div>

          <div>
            <h4 className="font-cafe-body text-xs font-semibold uppercase tracking-widest text-cafe-olive mb-6">Navigation</h4>
            <ul className="space-y-4">
              <li>
                <button onClick={() => onScrollTo('home')} className="font-cafe-body text-sm text-cafe-stone/80 hover:text-cafe-cream transition-colors">Home</button>
              </li>
              <li>
                <button onClick={() => onScrollTo('menu')} className="font-cafe-body text-sm text-cafe-stone/80 hover:text-cafe-cream transition-colors">Menu</button>
              </li>
              <li>
                <button onClick={() => onScrollTo('story')} className="font-cafe-body text-sm text-cafe-stone/80 hover:text-cafe-cream transition-colors">Our Story</button>
              </li>
              <li>
                <button onClick={() => onScrollTo('visit')} className="font-cafe-body text-sm text-cafe-stone/80 hover:text-cafe-cream transition-colors">Visit</button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-cafe-body text-xs font-semibold uppercase tracking-widest text-cafe-olive mb-6">Contact</h4>
            <ul className="space-y-4 font-cafe-body text-sm text-cafe-stone/80">
              <li>+962 7 0000 0000</li>
              <li>WhatsApp</li>
              <li>Instagram</li>
            </ul>
          </div>

        </div>

        <div className="mt-24 pt-8 border-t border-cafe-stone/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-cafe-body text-xs text-cafe-stone/40">
            &copy; {new Date().getFullYear()} NARA Cafe. All rights reserved.
          </p>
          <div className="text-right">
            <span className="font-cafe-body text-xs text-cafe-stone/40">A WASL Concept</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
