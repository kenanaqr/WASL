import React from 'react';
import {
  HeroExperience,
  WhatWeDoSection,
  SelectedWorkSection,
  BuildFurtherSection,
  WhyWaslNew,
  FinalCtaSection
} from '../components/sections/home';

interface HomePageProps {
  onNavigate: (path: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <>
      {/* 
        The HeroExperience component contains the scroll-linked logo animation 
        and the brand reveal. It handles both desktop and mobile states,
        as well as reduced-motion preferences.
      */}
      <HeroExperience onNavigate={onNavigate} />

      {/* Services summary */}
      <WhatWeDoSection />

      {/* Selected Work (NARA, DAR, LINEA) */}
      <SelectedWorkSection onNavigate={onNavigate} />

      {/* Start Simple / Build Further */}
      <BuildFurtherSection />

      {/* Why WASL (4 proof points) */}
      <WhyWaslNew />

      {/* Final CTA */}
      <FinalCtaSection onNavigate={onNavigate} />
    </>
  );
};
