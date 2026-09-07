import React, { useState, useRef, useEffect } from 'react';
import { threeBrothersMenu, menuAddOns, restaurantInfo } from './menuData';
import type { MenuItem, MenuCategory } from './menuData';

import heroSeafoodImg from '../../../assets/three-brothers/tb_hero_seafood.jpg';
import wingsChickenImg from '../../../assets/three-brothers/tb_wings_chicken.jpg';
import sandwichesBurgerImg from '../../../assets/three-brothers/tb_sandwiches_burger.jpg';
import familyFeastImg from '../../../assets/three-brothers/tb_family_feast.jpg';
import appetizersImg from '../../../assets/three-brothers/tb_appetizers.jpg';
import dessertsImg from '../../../assets/three-brothers/tb_desserts.jpg';

interface FeaturedDish {
  name: string;
  price: string;
  category: string;
  description: string;
  image: string;
  tag: string;
  targetCat: string;
}

const featuredDishes: FeaturedDish[] = [
  {
    name: '3 Brothers Feast',
    price: '$20.99',
    category: 'Value Meals',
    description: '2pc fish with 4 jumbo shrimp & 4 oysters · Served with fries & coleslaw.',
    image: familyFeastImg,
    tag: 'Seafood Feast',
    targetCat: 'combos',
  },
  {
    name: 'Whiting Fish Fillet Dinner',
    price: '$12.99',
    category: 'Seafood Dinners',
    description: '2pc crispy whiting fillets with choice of 2 sides (fries, slaw, hush puppies, green beans).',
    image: heroSeafoodImg,
    tag: 'Dinner Special',
    targetCat: 'seafood',
  },
  {
    name: 'Whole Wings (6pc with Fries)',
    price: '$11.99',
    category: 'Whole Wings',
    description: 'Crispy whole wings tossed in BBQ, Buffalo, Lemon Pepper, or Garlic Parmesan.',
    image: wingsChickenImg,
    tag: 'Whole Wings Combo',
    targetCat: 'whole-wings',
  },
  {
    name: '3 Brothers Burger',
    price: '$12.99',
    category: 'Sandwiches & Burgers',
    description: 'Double beef patties with melted American cheese, lettuce, tomato, pickles & fries.',
    image: sandwichesBurgerImg,
    tag: 'Signature Burger',
    targetCat: 'sandwiches',
  },
  {
    name: 'Fried Green Tomatoes',
    price: '$5.99',
    category: 'Appetizers',
    description: 'Fresh sliced green tomatoes in crispy cornmeal crust with remoulade sauce.',
    image: appetizersImg,
    tag: 'Fresh Appetizer',
    targetCat: 'appetizers',
  },
  {
    name: 'Strawberry Cheesecake',
    price: '$4.99',
    category: 'Desserts',
    description: 'Rich, creamy New York style cheesecake topped with sweet glazed strawberries.',
    image: dessertsImg,
    tag: 'Dessert Favorite',
    targetCat: 'desserts',
  },
];

const MenuItemRow: React.FC<{ item: MenuItem }> = ({ item }) => (
  <div className="flex items-start justify-between gap-4 py-3 border-b border-tb-charcoal/5 last:border-b-0">
    <div className="flex-1 min-w-0">
      <span className="font-tb-body text-sm sm:text-base font-medium text-tb-charcoal">
        {item.name}
      </span>
      {item.note && (
        <p className="mt-0.5 font-tb-body text-xs text-tb-charcoal-light/70 leading-relaxed">
          {item.note}
        </p>
      )}
    </div>
    <div className="flex-shrink-0 text-right">
      {item.priceLabel ? (
        <div className="flex flex-col gap-0.5">
          <span className="font-tb-body text-sm font-semibold text-tb-charcoal">
            {item.price}
            <span className="font-normal text-xs text-tb-charcoal-light/60 ml-1">{item.priceLabel}</span>
          </span>
          {item.priceAlt && (
            <span className="font-tb-body text-sm font-semibold text-tb-charcoal">
              {item.priceAlt}
              {item.priceAltLabel && (
                <span className="font-normal text-xs text-tb-charcoal-light/60 ml-1">{item.priceAltLabel}</span>
              )}
            </span>
          )}
        </div>
      ) : (
        <span className="font-tb-body text-sm sm:text-base font-semibold text-tb-charcoal">
          {item.price}
        </span>
      )}
    </div>
  </div>
);

const MenuCategorySection: React.FC<{ category: MenuCategory }> = ({ category }) => (
  <div id={`menu-${category.id}`} className="scroll-mt-28">
    <div className="mb-4">
      <h3 className="font-tb-display text-xl sm:text-2xl font-bold uppercase text-tb-charcoal tracking-tight">
        {category.name}
      </h3>
      {category.note && (
        <p className="mt-1 font-tb-body text-xs sm:text-sm text-tb-sage leading-relaxed">
          {category.note}
        </p>
      )}
    </div>
    <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-tb-charcoal/5">
      {category.items.map((item, idx) => (
        <MenuItemRow key={`${category.id}-${idx}`} item={item} />
      ))}
    </div>
  </div>
);

export const ThreeBrothersMenu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(threeBrothersMenu[0].id);
  const navRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  // Scroll category nav to keep active item visible
  useEffect(() => {
    if (navRef.current) {
      const activeBtn = navRef.current.querySelector(`[data-cat="${activeCategory}"]`) as HTMLElement;
      if (activeBtn) {
        const container = navRef.current;
        const scrollLeft = activeBtn.offsetLeft - container.offsetWidth / 2 + activeBtn.offsetWidth / 2;
        container.scrollTo({ left: scrollLeft, behavior: 'smooth' });
      }
    }
  }, [activeCategory]);

  // Intersection observer for auto-highlight
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const id = entry.target.id.replace('menu-', '');
            setActiveCategory(id);
          }
        }
      },
      { rootMargin: '-30% 0px -60% 0px', threshold: 0 }
    );

    const elements = section.querySelectorAll('[id^="menu-"]');
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollToCategory = (categoryId: string) => {
    setActiveCategory(categoryId);
    const element = document.getElementById(`menu-${categoryId}`);
    if (element) {
      const navbar = document.getElementById('tb-navbar');
      const navbarHeight = navbar ? navbar.getBoundingClientRect().height : 0;
      const categoryNav = 56; // approximate sticky nav height
      const offset = navbarHeight + categoryNav + 16;
      const top = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section id="menu" ref={sectionRef} className="bg-tb-cream py-16 sm:py-24 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12 sm:mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full bg-tb-orange/10 px-3.5 py-1.5 mb-4">
            <span className="font-tb-body text-xs font-semibold uppercase tracking-wider text-tb-orange">
              Fresh & Made to Order
            </span>
          </div>
          <h2 className="font-tb-display text-3xl sm:text-4xl md:text-5xl font-bold uppercase text-tb-charcoal tracking-tight">
            Our Menu
          </h2>
          <p className="mt-3 font-tb-body text-sm sm:text-base text-tb-charcoal-light">
            {restaurantInfo.motto}
          </p>
          <div className="mt-3 h-1 w-12 bg-tb-orange mx-auto rounded-full" />
        </div>

        {/* Featured Items Visual Showcase */}
        <div className="mb-16 sm:mb-20">
          <div className="flex items-center justify-between mb-6 pb-3 border-b border-tb-charcoal/10">
            <div>
              <h3 className="font-tb-display text-2xl sm:text-3xl font-bold uppercase text-tb-charcoal tracking-tight">
                Featured Items
              </h3>
              <p className="font-tb-body text-xs sm:text-sm text-tb-charcoal-light mt-0.5">
                Popular selections prepared fresh to order in Louisville
              </p>
            </div>
            <span className="font-tb-body text-xs text-tb-sage font-semibold uppercase tracking-wider hidden sm:inline">
              100% Vegetable Oil
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredDishes.map((dish) => (
              <div
                key={dish.name}
                className="group rounded-2xl bg-white border border-tb-charcoal/10 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden bg-tb-cream">
                    <img
                      src={dish.image}
                      alt={dish.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="rounded-full bg-black/60 backdrop-blur-md px-2.5 py-1 font-tb-body text-[11px] font-semibold text-white">
                        {dish.tag}
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="font-tb-display text-lg font-bold uppercase text-tb-charcoal tracking-tight leading-snug">
                        {dish.name}
                      </h4>
                      <span className="font-tb-body text-base font-bold text-tb-orange flex-shrink-0">
                        {dish.price}
                      </span>
                    </div>
                    <p className="mt-2 font-tb-body text-xs text-tb-charcoal-light leading-relaxed">
                      {dish.description}
                    </p>
                  </div>
                </div>

                <div className="px-5 pb-5 pt-0">
                  <button
                    onClick={() => scrollToCategory(dish.targetCat)}
                    className="w-full inline-flex items-center justify-center gap-1.5 rounded-lg bg-tb-cream/70 hover:bg-tb-cream py-2 font-tb-body text-xs font-semibold text-tb-charcoal transition-colors"
                  >
                    View in {dish.category}
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Full Menu Categories (Fast-to-scan digital menu) */}
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <h3 className="font-tb-display text-2xl font-bold uppercase text-tb-charcoal tracking-tight">
              Complete Menu
            </h3>
            <p className="font-tb-body text-xs sm:text-sm text-tb-charcoal-light">
              Full list of dishes, sides, and prices from the physical restaurant menu
            </p>
          </div>

          {/* Sticky category nav */}
          <div className="sticky top-16 sm:top-20 z-30 -mx-4 sm:-mx-6 lg:-mx-8 mb-8">
            <div className="bg-tb-cream/95 backdrop-blur-md border-b border-tb-charcoal/5 py-3 px-4 sm:px-6 lg:px-8">
              <div
                ref={navRef}
                className="flex gap-2 overflow-x-auto scrollbar-hide pb-1"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {threeBrothersMenu.map((cat) => (
                  <button
                    key={cat.id}
                    data-cat={cat.id}
                    onClick={() => scrollToCategory(cat.id)}
                    className={`flex-shrink-0 rounded-full px-4 py-2 font-tb-body text-xs sm:text-sm font-medium transition-all whitespace-nowrap ${
                      activeCategory === cat.id
                        ? 'bg-tb-olive text-white shadow-sm'
                        : 'bg-white/70 text-tb-charcoal-light hover:bg-white hover:text-tb-charcoal'
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Menu categories */}
          <div className="space-y-10 sm:space-y-14">
            {threeBrothersMenu.map((category) => (
              <MenuCategorySection key={category.id} category={category} />
            ))}
          </div>

          {/* Add-ons */}
          <div className="mt-12 sm:mt-16 bg-tb-olive/5 rounded-xl p-6 sm:p-8 border border-tb-olive/10">
            <h3 className="font-tb-display text-lg font-bold uppercase text-tb-charcoal tracking-tight mb-4">
              Add-Ons
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {menuAddOns.map((addon, idx) => (
                <span key={idx} className="font-tb-body text-sm text-tb-charcoal-light">
                  {addon}
                </span>
              ))}
            </div>
          </div>

          {/* Note */}
          <p className="mt-6 text-center font-tb-body text-xs text-tb-charcoal-light/50">
            Prices may vary. Menu items subject to availability.
          </p>
        </div>
      </div>
    </section>
  );
};
