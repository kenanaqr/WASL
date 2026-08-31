import React from 'react';
import { siteConfig } from '../data/siteConfig';

interface PageProps {
  onNavigate: (path: string) => void;
}

export const WorkPage: React.FC<PageProps> = ({ onNavigate }) => {
  return (
    <div className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
            Selected Work & Prototypes
          </p>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-neutral-950 sm:text-5xl">
            Our Work
          </h1>
          <p className="mt-4 text-lg text-neutral-600">
            Explore our ready-to-deploy digital templates and live business prototypes. All live directly inside this application.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {siteConfig.demoLinks.map((demo) => (
            <div
              key={demo.id}
              className="flex flex-col overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-xs"
            >
              <div className="flex h-44 items-center justify-center bg-neutral-100 border-b border-neutral-100 p-6 text-center">
                <div>
                  <span className="text-3xl font-black text-neutral-300">WASL</span>
                  <div className="mt-1 text-sm font-semibold text-neutral-700">{demo.name} Prototype</div>
                </div>
              </div>
              <div className="flex flex-1 flex-col justify-between p-6">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                      Concept Demo
                    </span>
                    <span className="text-xs font-semibold text-neutral-700">{demo.arabicName}</span>
                  </div>
                  <h3 className="mt-2 text-xl font-bold text-neutral-900">{demo.name}</h3>
                  <p className="mt-2 text-sm text-neutral-600">{demo.description}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-neutral-100">
                  <button
                    type="button"
                    onClick={() => onNavigate(demo.path)}
                    className="w-full rounded-md bg-neutral-900 py-2.5 text-center text-sm font-medium text-white transition hover:bg-neutral-800"
                  >
                    Open Live Demo &rarr;
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
