import React from 'react';
import {
  HeroSection,
  IdeaSection,
  ServicesSection,
  WorkPreviewSection,
  StartSimpleSection,
  ProcessSection,
  WhyWaslSection,
  LocalSection,
  CtaSection,
} from '../components/sections';

interface HomePageProps {
  onNavigate: (path: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div>
      {/* 1. Hero Section */}
      <HeroSection onNavigate={onNavigate} />

      {/* 2. The Idea Section */}
      <IdeaSection />

      {/* 3. What We Do (Four ways of creating connection) */}
      <ServicesSection />

      {/* 4. Our Work (Cafe, Restaurant, Barbershop Concept Previews) */}
      <WorkPreviewSection onNavigate={onNavigate} />

      {/* 5. Start Simple, Build Further */}
      <StartSimpleSection />

      {/* 6. How WASL Works (01 Understand - 02 Build - 03 Connect - 04 Evolve) */}
      <ProcessSection />

      {/* 7. Why WASL (Connection vs standard agency websites) */}
      <WhyWaslSection />

      {/* 8. About / Local Connection (Rooted in Amman, Jordan) */}
      <LocalSection />

      {/* 9. Final CTA (Talk to WASL & WhatsApp) */}
      <CtaSection onNavigate={onNavigate} />
    </div>
  );
};
