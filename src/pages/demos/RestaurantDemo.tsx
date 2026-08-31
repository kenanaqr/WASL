import React from 'react';

interface DemoProps {
  onNavigate: (path: string) => void;
}

export const RestaurantDemo: React.FC<DemoProps> = ({ onNavigate }) => {
  return (
    <div className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between border-b border-neutral-200 pb-6">
          <div>
            <div className="inline-flex items-center gap-2 rounded-md bg-red-50 px-2.5 py-1 text-xs font-semibold text-red-800">
              <span>Interactive Portfolio Prototype</span>
              <span>•</span>
              <span>مطعم</span>
            </div>
            <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-neutral-950 sm:text-4xl">
              Restaurant & Dining Demo
            </h1>
            <p className="mt-2 text-neutral-500">
              Prototype architecture for contemporary casual and fine dining venues.
            </p>
          </div>
          <button
            type="button"
            onClick={() => onNavigate('/work')}
            className="rounded-md border border-neutral-300 px-4 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-50"
          >
            &larr; Back to Work
          </button>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          <div className="rounded-xl border border-dashed border-neutral-300 p-8 text-center">
            <h2 className="text-lg font-bold text-neutral-800">Full Course Menu</h2>
            <p className="mt-2 text-sm text-neutral-500">
              Appetizers, main courses, chef specials, and allergen filters.
            </p>
          </div>
          <div className="rounded-xl border border-dashed border-neutral-300 p-8 text-center">
            <h2 className="text-lg font-bold text-neutral-800">Table Reservation Flow</h2>
            <p className="mt-2 text-sm text-neutral-500">
              Party size selector, date/time pickers, and direct reservation messaging.
            </p>
          </div>
          <div className="rounded-xl border border-dashed border-neutral-300 p-8 text-center">
            <h2 className="text-lg font-bold text-neutral-800">Catering & Events</h2>
            <p className="mt-2 text-sm text-neutral-500">
              Private dining inquiries, party packages, and event hosting.
            </p>
          </div>
        </div>

        <div className="mt-12 rounded-xl bg-neutral-50 p-6 text-center border border-neutral-200">
          <p className="text-sm text-neutral-500">
            Demo UI placeholder. Final culinary styling and interactions will be implemented in subsequent phases.
          </p>
        </div>
      </div>
    </div>
  );
};
