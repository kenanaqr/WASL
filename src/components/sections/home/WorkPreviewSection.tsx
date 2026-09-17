import React from 'react';

interface WorkPreviewCardProps {
  title: string;
  category: string;
  arabicCategory: string;
  conceptLabel: string;
  description: string;
  tags: string[];
  path: string;
  accentColor: string;
  accentBadge: string;
  previewDetails: {
    mockHeader: string;
    mockTag: string;
    mockFeature: string;
  };
  onNavigate: (path: string) => void;
}

export const WorkPreviewCard: React.FC<WorkPreviewCardProps> = ({
  title,
  category,
  arabicCategory,
  conceptLabel,
  description,
  tags,
  path,
  accentColor,
  accentBadge,
  previewDetails,
  onNavigate,
}) => {
  return (
    <div className="group flex flex-col justify-between rounded-xl border border-sand/60 bg-white/90 shadow-2xs transition-all duration-300 hover:border-petrol/40 hover:shadow-sm">
      {/* Browser/Screenshot Mockup Placeholder (Prepared to receive real screenshots seamlessly) */}
      <div className="relative overflow-hidden rounded-t-xl border-b border-sand/40 bg-alabaster">
        {/* Mockup Top Browser Bar */}
        <div className="flex items-center justify-between border-b border-sand/30 bg-alabaster/80 px-4 py-2 text-[11px] text-charcoal-muted">
          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-sand/80"></span>
            <span className="h-2 w-2 rounded-full bg-sand/60"></span>
            <span className="h-2 w-2 rounded-full bg-sand/40"></span>
          </div>
          <span className="font-mono text-[10px] text-charcoal-muted/70 truncate max-w-[140px]">
            wasljo.com{path}
          </span>
          <span className="text-[10px] uppercase tracking-wider font-semibold text-petrol/70">
            {conceptLabel}
          </span>
        </div>

        {/* Mockup Canvas / Future Screenshot Container */}
        <div className="relative flex h-52 flex-col justify-between p-6 transition-transform duration-300 group-hover:scale-[1.01]">
          <div className="flex items-start justify-between">
            <span className={`inline-block rounded-md px-2.5 py-1 text-xs font-medium ${accentBadge}`}>
              {category} • {arabicCategory}
            </span>
            <span className="text-xs font-mono text-charcoal-muted">Concept Preview</span>
          </div>

          <div className="space-y-1">
            <div className="text-xs font-mono uppercase tracking-wider text-sand-muted">
              {previewDetails.mockTag}
            </div>
            <div className="text-xl font-medium text-petrol">
              {previewDetails.mockHeader}
            </div>
            <p className="text-xs text-charcoal-muted line-clamp-1">
              {previewDetails.mockFeature}
            </p>
          </div>

          <div className="flex items-center gap-2 border-t border-sand/30 pt-3 text-[11px] text-charcoal-muted">
            <span className={`h-1.5 w-1.5 rounded-full ${accentColor}`}></span>
            <span>Interactive prototype available</span>
          </div>
        </div>
      </div>

      {/* Card Content & Metadata */}
      <div className="flex flex-1 flex-col justify-between p-6">
        <div>
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium uppercase tracking-widest text-petrol/70">
              {conceptLabel}
            </span>
            <span className="text-xs font-arabic font-medium text-petrol/80">
              {arabicCategory}
            </span>
          </div>

          <h3 className="mt-2 text-xl font-medium tracking-tight text-petrol">
            {title}
          </h3>

          <p className="mt-2 text-sm text-charcoal/80 font-light leading-relaxed">
            {description}
          </p>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md bg-alabaster px-2 py-0.5 text-[11px] font-medium text-charcoal-muted border border-sand/30"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Action Link */}
        <div className="mt-6 pt-4 border-t border-sand/30">
          <button
            type="button"
            onClick={() => onNavigate(path)}
            className="inline-flex w-full items-center justify-between rounded-lg bg-alabaster px-4 py-2.5 text-sm font-medium text-petrol transition-colors duration-200 hover:bg-petrol hover:text-alabaster"
          >
            <span>Explore {category} Concept</span>
            <span aria-hidden="true">&rarr;</span>
          </button>
        </div>
      </div>
    </div>
  );
};

interface WorkPreviewSectionProps {
  onNavigate: (path: string) => void;
}

export const WorkPreviewSection: React.FC<WorkPreviewSectionProps> = ({ onNavigate }) => {
  return (
    <section className="py-24 sm:py-32 border-b border-sand/40 bg-alabaster">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-petrol/70">
              Our Work
            </p>
            <h2 className="mt-4 text-3xl sm:text-4xl font-medium tracking-tight text-petrol">
              Built around the business, <br className="hidden sm:inline" />
              not around a template.
            </h2>
            <p className="mt-2 text-base text-petrol/70 font-arabic">
              مصممة لخصوصية كل عمل، وليست قوالب مكررة.
            </p>
            <p className="mt-4 text-base text-charcoal/80 font-light leading-relaxed">
              Explore our live prototype concepts created for three foundational local business models.
              Each concept demonstrates how thoughtful digital touchpoints elevate daily operations.
            </p>
          </div>

          <button
            type="button"
            onClick={() => onNavigate('/work')}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-petrol hover:underline underline-offset-4"
          >
            <span>View all work overview</span>
            <span>&rarr;</span>
          </button>
        </div>

        {/* 3 Portfolio Concepts Grid */}
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          <WorkPreviewCard
            title="Specialty Coffee & Roastery"
            category="Café"
            arabicCategory="مقهى ومحمص"
            conceptLabel="WASL Concept — Café"
            description="Designed for the quick morning rush and relaxed afternoon stays. Highlights bean origin profiles, seasonal specialty drinks, and tap-to-view digital menus."
            tags={['Digital Menu', 'Bean Origin Showcase', 'Google Profile Touchpoint']}
            path="/demos/cafe"
            accentColor="bg-amber-700"
            accentBadge="bg-amber-50 text-amber-900 border border-amber-200"
            previewDetails={{
              mockHeader: 'Origin, Roast & Ritual',
              mockTag: 'Daily Brew Architecture',
              mockFeature: 'Frictionless QR menu with zero app download needed',
            }}
            onNavigate={onNavigate}
          />

          <WorkPreviewCard
            title="Casual & Fine Dining"
            category="Restaurant"
            arabicCategory="مطعم وتجربة ضيافة"
            conceptLabel="WASL Concept — Restaurant"
            description="Celebrates culinary craftsmanship. Balances mood and visual appetite with clear course breakdowns, direct reservation prompts, and private dining inquiries."
            tags={['Full Course Showcase', 'Table Inquiries', 'Location & Hours']}
            path="/demos/restaurant"
            accentColor="bg-red-800"
            accentBadge="bg-red-50 text-red-900 border border-red-200"
            previewDetails={{
              mockHeader: 'Seasonal Flavors & Gathering',
              mockTag: 'Dining Experience',
              mockFeature: 'Instant WhatsApp reservation and group dining inquiries',
            }}
            onNavigate={onNavigate}
          />

          <WorkPreviewCard
            title="Modern Grooming Lounge"
            category="Barbershop"
            arabicCategory="صالون حلاقة وعناية"
            conceptLabel="WASL Concept — Barbershop"
            description="Focused on precision, personal rapport, and repeat clients. Showcases stylist specialties, transparent grooming service tiers, and smooth chair bookings."
            tags={['Service Menu', 'Master Barber Profiles', 'Appointment Scheduling']}
            path="/demos/barbershop"
            accentColor="bg-stone-800"
            accentBadge="bg-stone-100 text-stone-900 border border-stone-300"
            previewDetails={{
              mockHeader: 'Craft, Detail & Chair Availability',
              mockTag: 'Grooming Studio',
              mockFeature: 'Fast appointment selection linked straight to WhatsApp',
            }}
            onNavigate={onNavigate}
          />
        </div>
      </div>
    </section>
  );
};
