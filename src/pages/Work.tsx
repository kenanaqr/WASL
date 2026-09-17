import React from 'react';
import naraHero from '../assets/demos/cafe/hero.webp';
import darHero from '../assets/demos/restaurant/hero.webp';
import lineaHero from '../assets/demos/barbershop/hero.webp';
import tbHero from '../assets/three-brothers/tb_hero_seafood.webp';

interface PageProps {
  onNavigate: (path: string) => void;
}

interface ProjectItem {
  id: string;
  name: string;
  arabicName: string;
  type: string;
  tag: string;
  description: string;
  image: string;
  path?: string;
  externalUrl?: string;
}

const projects: ProjectItem[] = [
  {
    id: 'cafe',
    name: 'NARA',
    arabicName: 'نارا',
    type: 'Café',
    tag: 'Concept',
    description: 'Digital menu, ambiance showcase, and table reservations for coffee shops.',
    image: naraHero,
    path: '/demos/cafe',
  },
  {
    id: 'restaurant',
    name: 'DAR',
    arabicName: 'دار',
    type: 'Restaurant',
    tag: 'Concept',
    description: 'Culinary showcase, online ordering demo, and dining bookings.',
    image: darHero,
    path: '/demos/restaurant',
  },
  {
    id: 'barbershop',
    name: 'LINEA',
    arabicName: 'لاينا',
    type: 'Barbershop',
    tag: 'Concept',
    description: 'Grooming service menus, stylist profiles, and appointment scheduling.',
    image: lineaHero,
    path: '/demos/barbershop',
  },
  {
    id: 'three-brothers',
    name: 'Three Brothers',
    arabicName: '',
    type: 'Restaurant',
    tag: 'Client Project',
    description: 'Seafood dinners, crispy whole wings, chicken tenders, burgers, and sandwiches — prepared fresh to order in Louisville.',
    image: tbHero,
    externalUrl: 'https://3brothers.rest',
  }
];

export const WorkPage: React.FC<PageProps> = ({ onNavigate }) => {
  return (
    <div className="py-16 sm:py-24 bg-alabaster min-h-screen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-wider text-charcoal-muted">
            Selected Work
          </p>
          <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-charcoal sm:text-5xl">
            Our Work
          </h1>
          <p className="mt-4 text-lg text-charcoal-muted">
            Explore our ready-to-deploy digital templates and live business prototypes. All live directly inside this application.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.id}
              className="flex flex-col overflow-hidden rounded-2xl border border-sand/40 bg-white shadow-sm transition-all hover:shadow-md group"
            >
              {project.externalUrl ? (
                <a
                  href={project.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative h-64 sm:h-72 w-full overflow-hidden bg-neutral-100 border-b border-sand/20 cursor-pointer block"
                  aria-label={`View ${project.name} live website`}
                >
                  <img
                    src={project.image}
                    alt={`${project.name} ${project.type}`}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                </a>
              ) : (
                <a
                  href={project.path}
                  onClick={(e) => {
                    e.preventDefault();
                    if (project.path) onNavigate(project.path);
                  }}
                  className="relative h-64 sm:h-72 w-full overflow-hidden bg-neutral-100 border-b border-sand/20 cursor-pointer block"
                  aria-label={`View ${project.name} project`}
                >
                  <img
                    src={project.image}
                    alt={`${project.name} ${project.type}`}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                </a>
              )}
              <div className="flex flex-1 flex-col justify-between p-7 sm:p-8">
                <div>
                  <div className="flex items-center justify-between">
                    <span className={`text-xs font-bold uppercase tracking-wider ${project.tag === 'Client Project' ? 'text-petrol' : 'text-charcoal-muted/70'}`}>
                      {project.tag}
                    </span>
                    {project.arabicName && (
                      <span className="text-sm font-semibold text-charcoal-muted font-arabic">{project.arabicName}</span>
                    )}
                  </div>
                  <div className="mt-3 flex flex-wrap items-baseline gap-2">
                    <h3 className="text-2xl font-bold tracking-tight text-charcoal">{project.name}</h3>
                    <span className="text-sm font-medium text-charcoal-muted">· {project.type}</span>
                  </div>
                  <p className="mt-3 text-base text-charcoal-muted leading-relaxed line-clamp-2">{project.description}</p>
                </div>
                <div className="mt-8 pt-6 border-t border-sand/30">
                  {project.externalUrl ? (
                    <a
                      href={project.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 rounded-xl bg-petrol py-3.5 text-sm font-medium text-alabaster transition-colors hover:bg-petrol-dark focus:outline-none focus:ring-2 focus:ring-petrol focus:ring-offset-2 focus:ring-offset-white"
                    >
                      <span>View project</span>
                      <span aria-hidden="true" className="text-lg leading-none">&rarr;</span>
                    </a>
                  ) : (
                    <a
                      href={project.path}
                      onClick={(e) => {
                        e.preventDefault();
                        if (project.path) onNavigate(project.path);
                      }}
                      className="w-full flex items-center justify-center gap-2 rounded-xl bg-petrol py-3.5 text-sm font-medium text-alabaster transition-colors hover:bg-petrol-dark focus:outline-none focus:ring-2 focus:ring-petrol focus:ring-offset-2 focus:ring-offset-white"
                    >
                      <span>View project</span>
                      <span aria-hidden="true" className="text-lg leading-none">&rarr;</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
