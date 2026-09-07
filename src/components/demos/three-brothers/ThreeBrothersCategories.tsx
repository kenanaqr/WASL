import React from 'react';
import seafoodCatfishImg from '../../../assets/three-brothers/tb_seafood_catfish_shrimp.jpg';
import wingsChickenImg from '../../../assets/three-brothers/tb_wings_chicken.jpg';
import sandwichesBurgerImg from '../../../assets/three-brothers/tb_sandwiches_burger.jpg';

interface ThreeBrothersCategoriesProps {
  onScrollTo: (id: string) => void;
}

export const ThreeBrothersCategories: React.FC<ThreeBrothersCategoriesProps> = ({ onScrollTo }) => {
  return (
    <section id="about" className="bg-tb-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* About & Direct Food Offering Introduction */}
        <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 rounded-full bg-tb-olive/10 px-3.5 py-1.5 mb-4">
            <span className="font-tb-body text-xs font-semibold uppercase tracking-wider text-tb-olive">
              Louisville, KY · Prepared to Order
            </span>
          </div>
          <h2 className="font-tb-display text-3xl sm:text-4xl md:text-5xl font-bold uppercase text-tb-charcoal tracking-tight">
            Something for Every Appetite.
          </h2>
          <p className="mt-4 font-tb-body text-base sm:text-lg text-tb-charcoal-light leading-relaxed">
            Seafood dinners, fish, shrimp, wings, chicken, sandwiches, burgers and more — prepared to order.
          </p>
          <div className="mt-4 h-1 w-12 bg-tb-orange mx-auto rounded-full" />
        </div>

        {/* Category Presentations — Asymmetric Hierarchy prioritizing Seafood */}
        <div className="space-y-8 sm:space-y-10">
          {/* Priority 1: Seafood — STRONGEST CATEGORY */}
          <div className="relative rounded-3xl bg-gradient-to-br from-tb-cream via-tb-white to-tb-cream/70 border-2 border-tb-olive/25 p-6 sm:p-10 lg:p-12 shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md hover:border-tb-olive/45">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Seafood Information */}
              <div className="lg:col-span-6 xl:col-span-7">
                <div className="inline-flex items-center gap-2 rounded-full bg-tb-olive text-white px-3.5 py-1 text-xs font-bold uppercase tracking-wider mb-4">
                  <span>01 · Primary Speciality</span>
                </div>
                <h3 className="font-tb-display text-3xl sm:text-4xl lg:text-5xl font-bold uppercase text-tb-charcoal tracking-tight">
                  Seafood
                </h3>
                <p className="mt-2 font-tb-display text-lg sm:text-xl text-tb-olive font-semibold uppercase tracking-wide">
                  Fish, shrimp and seafood dinners.
                </p>
                <p className="mt-3 font-tb-body text-sm sm:text-base text-tb-charcoal-light leading-relaxed max-w-xl">
                  Whiting, Tilapia, Catfish fillets, Catfish nuggets, Ocean Perch, Cod, Alaskan Salmon, Fried Pan Oysters, Clam Strips, Frog Legs, and Regular or Jumbo Cajun Shrimp.
                </p>

                {/* Sides guarantee banner */}
                <div className="mt-6 rounded-xl bg-tb-olive/10 border border-tb-olive/15 p-3.5">
                  <p className="font-tb-body text-xs sm:text-sm font-medium text-tb-charcoal">
                    <span className="font-bold text-tb-olive uppercase tracking-wider">Dinner Sides:</span> Choose any two — Fries · Coleslaw · Hush Puppies · Green Beans
                  </p>
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => onScrollTo('menu')}
                    className="inline-flex items-center gap-2 rounded-xl bg-tb-olive px-6 py-3.5 font-tb-body text-sm font-semibold text-white transition-all hover:bg-tb-olive/90 shadow-sm hover:shadow active:scale-[0.99]"
                  >
                    View Seafood Menu
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </button>
                  <span className="font-tb-body text-xs text-tb-sage font-medium">
                    Served hot with house tartar sauce & lemon
                  </span>
                </div>
              </div>

              {/* Seafood Visual Showcase */}
              <div className="lg:col-span-6 xl:col-span-5">
                <div className="relative group rounded-2xl overflow-hidden shadow-lg border border-tb-olive/20 aspect-[4/3] bg-tb-cream">
                  <img
                    src={seafoodCatfishImg}
                    alt="Three Brothers Crispy Fried Catfish and Cajun Jumbo Shrimp"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                    <span className="font-tb-display text-sm sm:text-base font-bold uppercase tracking-wide drop-shadow">
                      Catfish Fillets & Cajun Shrimp
                    </span>
                    <span className="font-tb-body text-xs font-semibold bg-tb-orange px-2 py-0.5 rounded">
                      Featured
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Priorities 2 & 3: Wings & Chicken + Sandwiches & Burgers */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Priority 2: Wings & Chicken */}
            <div className="rounded-3xl bg-tb-cream/50 border border-tb-charcoal/10 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-lg hover:border-tb-orange/30">
              <div className="relative aspect-[16/10] overflow-hidden bg-tb-cream group">
                <img
                  src={wingsChickenImg}
                  alt="Three Brothers Crispy Whole Wings and Chicken Tenders"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                <div className="absolute top-3 left-3">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-black/60 backdrop-blur-md px-3 py-1 font-tb-body text-xs font-semibold text-white">
                    02 · Wings & Chicken
                  </span>
                </div>
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <span className="font-tb-display text-lg font-bold uppercase tracking-wide">
                    Whole Wings & Hand-Breaded Tenders
                  </span>
                </div>
              </div>

              <div className="p-6 sm:p-8 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="font-tb-display text-2xl font-bold uppercase text-tb-charcoal tracking-tight">
                    Wings & Chicken
                  </h3>
                  <p className="mt-1 font-tb-display text-sm sm:text-base text-tb-orange font-semibold uppercase tracking-wide">
                    Whole wings, wings pieces and tenders.
                  </p>
                  <p className="mt-3 font-tb-body text-sm text-tb-charcoal-light leading-relaxed">
                    Whole wings with fries (4pc to 50pc), party wings, and tender combos. Tossed in BBQ, Buffalo, Lemon Pepper, or Garlic Parmesan.
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-tb-charcoal/5 flex items-center justify-between">
                  <span className="font-tb-body text-xs text-tb-sage font-medium">Add basket of fries for $5.99</span>
                  <button
                    onClick={() => onScrollTo('menu')}
                    className="inline-flex items-center gap-1.5 font-tb-body text-sm font-semibold text-tb-orange hover:text-tb-orange-light transition-colors"
                  >
                    View Wings
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Priority 3: Sandwiches & Burgers */}
            <div className="rounded-3xl bg-tb-cream/50 border border-tb-charcoal/10 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-lg hover:border-tb-burgundy/30">
              <div className="relative aspect-[16/10] overflow-hidden bg-tb-cream group">
                <img
                  src={sandwichesBurgerImg}
                  alt="Three Brothers Signature Burger and Philly Cheesesteak with Fries"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                <div className="absolute top-3 left-3">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-black/60 backdrop-blur-md px-3 py-1 font-tb-body text-xs font-semibold text-white">
                    03 · Sandwiches & Burgers
                  </span>
                </div>
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <span className="font-tb-display text-lg font-bold uppercase tracking-wide">
                    3 Brothers Burger & Philly Cheesesteak
                  </span>
                </div>
              </div>

              <div className="p-6 sm:p-8 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="font-tb-display text-2xl font-bold uppercase text-tb-charcoal tracking-tight">
                    Sandwiches & Burgers
                  </h3>
                  <p className="mt-1 font-tb-display text-sm sm:text-base text-tb-burgundy font-semibold uppercase tracking-wide">
                    Fish sandwiches, burgers, Philly cheesesteaks and more.
                  </p>
                  <p className="mt-3 font-tb-body text-sm text-tb-charcoal-light leading-relaxed">
                    Crispy fish sandwiches, the 3 Brothers Burger, grilled salmon sandwiches, gyro (lamb meat), and chicken philly.
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-tb-charcoal/5 flex items-center justify-between">
                  <span className="font-tb-body text-xs text-tb-sage font-medium">All served with French Fries</span>
                  <button
                    onClick={() => onScrollTo('menu')}
                    className="inline-flex items-center gap-1.5 font-tb-body text-sm font-semibold text-tb-burgundy hover:text-tb-burgundy/80 transition-colors"
                  >
                    View Sandwiches
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
