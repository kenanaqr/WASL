import React from 'react';
import { siteConfig } from '../data/siteConfig';

interface PageProps {
  onNavigate: (path: string) => void;
}

export const AboutPage: React.FC<PageProps> = ({ onNavigate }) => {
  return (
    <div className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
            About Us
          </p>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-neutral-950 sm:text-5xl">
            {siteConfig.companyName} | {siteConfig.arabicName}
          </h1>
          <p className="mt-6 text-xl text-neutral-700 leading-relaxed font-light">
            {siteConfig.tagline}
          </p>
          <div className="mt-8 space-y-6 text-base text-neutral-600 leading-relaxed">
            <p>
              WASL is a forward-thinking digital design and technology practice founded in Jordan.
              We specialize in crafting focused, modern websites and digital touchpoints that help local
              businesses connect seamlessly with their audiences.
            </p>
            <p>
              From neighborhood specialty coffee shops and culinary dining destinations to premier
              grooming studios, our digital solutions combine contemporary visual design with
              intuitive user experiences.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3 border-t border-neutral-200 pt-8">
            <div>
              <div className="text-2xl font-bold text-neutral-900">Amman</div>
              <div className="text-sm text-neutral-500">Based in Jordan</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-neutral-900">Bilingual</div>
              <div className="text-sm text-neutral-500">Arabic & English native</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-neutral-900">End-to-End</div>
              <div className="text-sm text-neutral-500">Design to production code</div>
            </div>
          </div>

          <div className="mt-12">
            <button
              type="button"
              onClick={() => onNavigate('/contact')}
              className="rounded-md bg-neutral-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800"
            >
              Get in touch with us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
