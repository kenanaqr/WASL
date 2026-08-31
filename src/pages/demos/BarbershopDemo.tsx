import React from 'react';

interface DemoProps {
  onNavigate: (path: string) => void;
}

export const BarbershopDemo: React.FC<DemoProps> = ({ onNavigate }) => {
  return (
    <div className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between border-b border-neutral-200 pb-6">
          <div>
            <div className="inline-flex items-center gap-2 rounded-md bg-stone-100 px-2.5 py-1 text-xs font-semibold text-stone-800">
              <span>Interactive Portfolio Prototype</span>
              <span>•</span>
              <span>صالون حلاقة</span>
            </div>
            <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-neutral-950 sm:text-4xl">
              Barbershop & Grooming Studio Demo
            </h1>
            <p className="mt-2 text-neutral-500">
              Prototype architecture for modern barbershops, grooming lounges, and stylists.
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
            <h2 className="text-lg font-bold text-neutral-800">Service Menu & Pricing</h2>
            <p className="mt-2 text-sm text-neutral-500">
              Haircuts, beard sculpting, hot towel treatments, and VIP packages.
            </p>
          </div>
          <div className="rounded-xl border border-dashed border-neutral-300 p-8 text-center">
            <h2 className="text-lg font-bold text-neutral-800">Barber Roster</h2>
            <p className="mt-2 text-sm text-neutral-500">
              Master barbers, chair availability, specialties, and client portfolios.
            </p>
          </div>
          <div className="rounded-xl border border-dashed border-neutral-300 p-8 text-center">
            <h2 className="text-lg font-bold text-neutral-800">Appointment Scheduler</h2>
            <p className="mt-2 text-sm text-neutral-500">
              Step-by-step chair booking with direct WhatsApp appointment confirmation.
            </p>
          </div>
        </div>

        <div className="mt-12 rounded-xl bg-neutral-50 p-6 text-center border border-neutral-200">
          <p className="text-sm text-neutral-500">
            Demo UI placeholder. Stylist scheduling components and grooming aesthetics will be added in subsequent phases.
          </p>
        </div>
      </div>
    </div>
  );
};
