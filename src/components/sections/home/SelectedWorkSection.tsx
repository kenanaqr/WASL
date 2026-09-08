import React from 'react';
import naraHero from '../../../assets/demos/cafe/hero.jpg';
import darHero from '../../../assets/demos/restaurant/hero.jpg';
import lineaHero from '../../../assets/demos/barbershop/hero.jpg';

interface ProjectProps {
  name: string;
  arabicName: string;
  type: string;
  image: string;
  imageAlt: string;
  path: string;
  onNavigate: (path: string) => void;
  /** Flip layout: image right, text left */
  reversed?: boolean;
}

const Project: React.FC<ProjectProps> = ({
  name,
  arabicName,
  type,
  image,
  imageAlt,
  path,
  onNavigate,
  reversed,
}) => {
  return (
    <div
      className={`grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center ${
        reversed ? 'lg:direction-rtl' : ''
      }`}
    >
      {/* Image */}
      <div className={`lg:col-span-8 ${reversed ? 'lg:order-2' : 'lg:order-1'}`}>
        <button
          type="button"
          onClick={() => onNavigate(path)}
          className="group relative block w-full overflow-hidden rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-sand focus-visible:ring-offset-4 focus-visible:ring-offset-petrol"
          aria-label={`View ${name} project`}
        >
          <div className="relative aspect-[16/10] sm:aspect-[16/9] overflow-hidden">
            <img
              src={image}
              alt={imageAlt}
              className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03]"
              loading="lazy"
            />
            {/* Subtle overlay on hover */}
            <div className="absolute inset-0 bg-petrol-dark/0 transition-colors duration-500 group-hover:bg-petrol-dark/10" />
          </div>
        </button>
      </div>

      {/* Text */}
      <div
        className={`lg:col-span-4 flex flex-col ${
          reversed ? 'lg:order-1 lg:items-end lg:text-right' : 'lg:order-2 items-start'
        }`}
      >
        <div className="flex items-baseline gap-3 mb-1">
          <h3 className="text-2xl sm:text-3xl font-medium tracking-tight text-alabaster">
            {name}
          </h3>
          <span className="text-base font-medium text-sand/60 font-arabic">{arabicName}</span>
        </div>
        <p className="text-sm font-medium uppercase tracking-[0.15em] text-sand/50 mb-4">
          {type}
        </p>
        <p className="text-xs text-alabaster/40 mb-5">
          Independent concept project by WASL
        </p>
        <button
          type="button"
          onClick={() => onNavigate(path)}
          className="inline-flex items-center gap-2 text-sm font-medium text-sand hover:text-alabaster transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-sand focus-visible:ring-offset-2 focus-visible:ring-offset-petrol rounded-sm"
        >
          <span>View project</span>
          <span aria-hidden="true">&rarr;</span>
        </button>
      </div>
    </div>
  );
};

interface SelectedWorkSectionProps {
  onNavigate: (path: string) => void;
}

export const SelectedWorkSection: React.FC<SelectedWorkSectionProps> = ({ onNavigate }) => {
  return (
    <section className="py-24 sm:py-32 bg-petrol">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="mb-16 sm:mb-20">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sand/60 mb-4">
            Selected Work
          </p>
          <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-alabaster">
            Three concepts. Three industries.
          </h2>
          <p className="mt-2 text-base font-medium text-sand/50 font-arabic">
            ثلاثة مشاريع. ثلاث صناعات.
          </p>
        </div>

        {/* Projects */}
        <div className="space-y-20 sm:space-y-28">
          <Project
            name="NARA"
            arabicName="نارا"
            type="Café"
            image={naraHero}
            imageAlt="NARA café concept — specialty coffee and breakfast"
            path="/demos/cafe"
            onNavigate={onNavigate}
          />
          <Project
            name="DAR"
            arabicName="دار"
            type="Restaurant"
            image={darHero}
            imageAlt="DAR restaurant concept — contemporary Levantine dining"
            path="/demos/restaurant"
            onNavigate={onNavigate}
            reversed
          />
          <Project
            name="LINEA"
            arabicName="لاينا"
            type="Barbershop"
            image={lineaHero}
            imageAlt="LINEA barbershop concept — modern grooming studio"
            path="/demos/barbershop"
            onNavigate={onNavigate}
          />
        </div>
      </div>
    </section>
  );
};
