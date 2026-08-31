import React, { useState } from 'react';

type MenuCategory = 'coffee' | 'breakfast' | 'pastries';

interface MenuItem {
  name: string;
  arabicName?: string;
  price: string;
  description?: string;
}

const menuData: Record<MenuCategory, { title: string; arabicTitle: string; items: MenuItem[] }> = {
  coffee: {
    title: 'Coffee',
    arabicTitle: 'قهوة مختصة',
    items: [
      { name: 'Espresso', price: '2.50 JOD' },
      { name: 'Flat White', price: '3.25 JOD' },
      { name: 'Cortado', price: '3.00 JOD' },
      { name: 'V60 Pour Over', price: '3.50 JOD', description: 'Ask about our seasonal single origin beans' },
      { name: 'Cold Brew', price: '3.25 JOD', description: 'Steeped for 18 hours' },
    ],
  },
  breakfast: {
    title: 'Breakfast',
    arabicTitle: 'فطور',
    items: [
      { name: 'Eggs & Sourdough', price: '5.50 JOD', description: 'Poached or scrambled eggs on artisanal sourdough toast' },
      { name: 'Avocado Toast', price: '5.00 JOD', description: 'Smashed avocado, chili flakes, microgreens, lime' },
      { name: 'Shakshuka', price: '5.50 JOD', description: 'Baked eggs in rich spiced tomato sauce with fresh bread' },
      { name: 'Granola & Yogurt', price: '4.50 JOD', description: 'House-made granola, greek yogurt, seasonal berries' },
    ],
  },
  pastries: {
    title: 'Pastries & Sweets',
    arabicTitle: 'مخبوزات وحلويات',
    items: [
      { name: 'Butter Croissant', price: '2.25 JOD' },
      { name: 'Cinnamon Roll', price: '2.75 JOD', description: 'Warm cream cheese frosting' },
      { name: 'Basque Cheesecake', price: '4.50 JOD', description: 'Burnt exterior, creamy center' },
    ],
  },
};

export const CafeMenu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>('coffee');

  return (
    <section id="menu" className="bg-[#FAF8F5] py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="font-cafe-display text-4xl sm:text-5xl text-cafe-espresso">Our Menu</h2>
          <p className="mt-4 font-cafe-arabic text-xl text-cafe-olive">قائمة الطعام</p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center gap-4 sm:gap-8 mb-12 overflow-x-auto pb-4 hide-scrollbar">
          {(Object.keys(menuData) as MenuCategory[]).map((key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`whitespace-nowrap px-4 py-2 font-cafe-body text-sm font-medium transition-all ${
                activeCategory === key
                  ? 'border-b-2 border-cafe-terracotta text-cafe-espresso'
                  : 'border-b-2 border-transparent text-cafe-stone hover:text-cafe-espresso'
              }`}
            >
              {menuData[key].title}
              <span className="ml-2 font-cafe-arabic text-xs text-cafe-olive opacity-80">
                {menuData[key].arabicTitle}
              </span>
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <div className="bg-white p-8 sm:p-12 rounded-sm shadow-sm border border-cafe-stone/20">
          <div className="space-y-8 animate-fade-in">
            {menuData[activeCategory].items.map((item, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-cafe-stone/20 pb-4 last:border-0 last:pb-0">
                <div className="max-w-md">
                  <h3 className="font-cafe-body text-lg font-medium text-cafe-espresso">{item.name}</h3>
                  {item.description && (
                    <p className="mt-1 font-cafe-body text-sm text-cafe-olive">{item.description}</p>
                  )}
                </div>
                <div className="mt-2 sm:mt-0 whitespace-nowrap">
                  <span className="font-cafe-body text-base font-semibold text-cafe-espresso">{item.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <p className="font-cafe-body text-xs text-cafe-stone">
            Prices include all applicable taxes. Please inform us of any allergies.
          </p>
        </div>

      </div>
    </section>
  );
};
