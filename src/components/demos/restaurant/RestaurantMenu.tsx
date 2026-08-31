import React, { useState } from 'react';
import { darConfig } from '../../../data/demos/restaurantConfig';

type MenuCategory = keyof typeof darConfig.menu;

const categoryLabels: Record<MenuCategory, { en: string; ar: string }> = {
  cold: { en: 'Cold & Small Plates', ar: 'مقبلات باردة' },
  mains: { en: 'Mains', ar: 'الأطباق الرئيسية' },
  grill: { en: 'From the Grill', ar: 'من المشويات' },
  desserts: { en: 'Desserts', ar: 'حلويات' },
  drinks: { en: 'Drinks', ar: 'مشروبات' },
};

export const RestaurantMenu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>('mains');

  return (
    <section id="menu" className="bg-[#121110] py-24 sm:py-32 border-t border-dar-brass/10">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="font-dar-display text-4xl sm:text-5xl text-dar-ivory mb-4">Menu</h2>
          <div className="h-px w-12 bg-dar-brass mx-auto"></div>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-start sm:justify-center gap-6 sm:gap-10 mb-16 overflow-x-auto pb-4 hide-scrollbar">
          {(Object.keys(darConfig.menu) as MenuCategory[]).map((key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className="flex flex-col items-center group whitespace-nowrap min-w-max"
            >
              <span className={`font-dar-body text-xs sm:text-sm uppercase tracking-widest transition-colors mb-2 ${
                activeCategory === key ? 'text-dar-brass' : 'text-dar-stone group-hover:text-dar-ivory'
              }`}>
                {categoryLabels[key].en}
              </span>
              <span className={`font-dar-arabic text-sm transition-colors ${
                activeCategory === key ? 'text-dar-ivory' : 'text-dar-stone/50 group-hover:text-dar-ivory'
              }`}>
                {categoryLabels[key].ar}
              </span>
              {/* Animated underline */}
              <div className={`h-px bg-dar-brass mt-3 transition-all duration-300 ${
                activeCategory === key ? 'w-full' : 'w-0 group-hover:w-1/2'
              }`}></div>
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <div className="min-h-[400px]">
          <div className="space-y-10 animate-fade-in">
            {darConfig.menu[activeCategory].map((item, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row sm:items-baseline justify-between group">
                <div className="max-w-xl">
                  <div className="flex items-baseline gap-4 mb-2">
                    <h3 className="font-dar-display text-2xl text-dar-ivory">{item.name}</h3>
                    {item.arabicName && (
                      <span className="font-dar-arabic text-lg text-dar-brass">{item.arabicName}</span>
                    )}
                  </div>
                  {'description' in item && item.description && (
                    <p className="font-dar-body text-sm text-dar-stone leading-relaxed">{item.description as string}</p>
                  )}
                </div>
                <div className="mt-3 sm:mt-0 whitespace-nowrap">
                  <span className="font-dar-body text-sm font-semibold tracking-widest text-dar-brass">{item.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
};
