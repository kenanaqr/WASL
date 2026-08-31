import React from 'react';

/**
 * Original abstract connection visual inspired by the flowing/converging
 * geometry of the WASL brand—two paths converging, looping, and connecting seamlessly.
 * Clearly separate from and not modifying or tracing the official logo.
 */
export const ConnectionGraphic: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <svg
        viewBox="0 0 500 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto max-w-lg select-none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="petrolPathGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#18414B" stopOpacity="0.95" />
            <stop offset="50%" stopColor="#235663" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#18414B" stopOpacity="0.9" />
          </linearGradient>

          <linearGradient id="sandPathGrad" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#DCCCB6" stopOpacity="0.95" />
            <stop offset="60%" stopColor="#EDE5D8" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#C9B497" stopOpacity="0.9" />
          </linearGradient>

          <linearGradient id="glowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#DCCCB6" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#18414B" stopOpacity="0.05" />
          </linearGradient>
        </defs>

        {/* Ambient subtle backdrop ring */}
        <circle cx="250" cy="160" r="130" stroke="url(#glowGrad)" strokeWidth="1" strokeDasharray="4 6" />

        {/* Path 1 - The Business Path (Warm Sand) */}
        <path
          d="M 60,160 C 60,80 180,60 250,160 C 320,260 440,240 440,160 C 440,90 340,90 270,160"
          stroke="url(#sandPathGrad)"
          strokeWidth="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          className="transition-all duration-700 hover:opacity-90"
        />

        {/* Path 2 - The Customer Path (Deep Petrol) converging and intertwining */}
        <path
          d="M 440,160 C 440,240 320,260 250,160 C 180,60 60,80 60,160 C 60,230 160,230 230,160"
          stroke="url(#petrolPathGrad)"
          strokeWidth="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          className="transition-all duration-700 hover:opacity-90"
        />

        {/* Subtle convergence accent markers */}
        <circle cx="250" cy="160" r="6" fill="#18414B" />
        <circle cx="250" cy="160" r="14" stroke="#DCCCB6" strokeWidth="1.5" strokeDasharray="2 3" />

        {/* Understated guide curves */}
        <path
          d="M 120,160 Q 250,220 380,160"
          stroke="#DCCCB6"
          strokeWidth="1.5"
          strokeDasharray="3 4"
          fill="none"
          opacity="0.6"
        />
      </svg>
    </div>
  );
};
