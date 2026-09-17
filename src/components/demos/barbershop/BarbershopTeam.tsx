import React from 'react';
import { lineaConfig } from '../../../data/demos/barbershopConfig';
import barberImg from '../../../assets/demos/barbershop/barber.webp';

export const BarbershopTeam: React.FC = () => {
  return (
    <section id="about" className="bg-linea-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16 md:mb-20">
          <h2 className="font-linea-display text-3xl sm:text-4xl md:text-5xl font-semibold text-linea-carbon tracking-tight mb-4">
            The team
          </h2>
          <div className="h-px w-12 bg-linea-copper mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">

          {lineaConfig.team.map((member, idx) => (
            <div key={idx} className="group text-center">

              {/* Portrait — using same barber image with slight visual variation via object-position */}
              <div className="aspect-w-3 aspect-h-4 w-full max-w-xs mx-auto overflow-hidden rounded-sm mb-8 bg-linea-bone">
                <img
                  src={barberImg}
                  alt={member.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  style={{ objectPosition: idx === 0 ? 'center 20%' : idx === 1 ? 'center 30%' : 'center 15%' }}
                  loading="lazy"
                />
              </div>

              <h3 className="font-linea-display text-2xl font-semibold text-linea-carbon mb-1">
                {member.name}
              </h3>
              <p className="font-linea-body text-[11px] uppercase tracking-[0.15em] text-linea-copper mb-3">
                {member.role}
              </p>
              <p className="font-linea-body text-sm text-linea-slate">
                {member.specialty}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};
