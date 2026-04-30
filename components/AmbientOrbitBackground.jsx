"use client";

export default function AmbientOrbitBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-[1] overflow-hidden opacity-30 max-sm:opacity-15">
      <div className="absolute inset-[-18%]">
        <svg
          viewBox="0 0 1200 900"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-full"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="ambient-line-grad" x1="170" y1="130" x2="1040" y2="780">
              <stop stopColor="#c9a15a" stopOpacity="0.02" />
              <stop offset="0.48" stopColor="#c9a15a" stopOpacity="0.36" />
              <stop offset="1" stopColor="#c9a15a" stopOpacity="0.04" />
            </linearGradient>
            <radialGradient id="ambient-glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#c9a15a" stopOpacity="0.28" />
              <stop offset="42%" stopColor="#c9a15a" stopOpacity="0.08" />
              <stop offset="100%" stopColor="#c9a15a" stopOpacity="0" />
            </radialGradient>
            <filter id="ambient-blur" x="0" y="0" width="1200" height="900" filterUnits="userSpaceOnUse">
              <feGaussianBlur stdDeviation="26" />
            </filter>
          </defs>

          <circle cx="760" cy="510" r="260" fill="url(#ambient-glow)" filter="url(#ambient-blur)" />

          <g className="orbit-slow">
            <ellipse cx="760" cy="510" rx="520" ry="132" transform="rotate(-22 760 510)" stroke="url(#ambient-line-grad)" strokeWidth="1" />
            <ellipse cx="760" cy="510" rx="456" ry="106" transform="rotate(-8 760 510)" stroke="#c9a15a" strokeOpacity="0.2" strokeWidth="1" />
            <ellipse cx="760" cy="510" rx="380" ry="82" transform="rotate(10 760 510)" stroke="#c9a15a" strokeOpacity="0.16" strokeWidth="1" />
          </g>

          <g className="orbit-slower">
            <ellipse cx="760" cy="510" rx="600" ry="178" transform="rotate(18 760 510)" stroke="#c9a15a" strokeOpacity="0.12" strokeWidth="1" />
            <ellipse cx="760" cy="510" rx="318" ry="62" transform="rotate(34 760 510)" stroke="#f5f2eb" strokeOpacity="0.06" strokeWidth="1" />
            <ellipse cx="760" cy="510" rx="235" ry="44" transform="rotate(-36 760 510)" stroke="#c9a15a" strokeOpacity="0.22" strokeWidth="1" />
          </g>

          <g fill="#c9a15a">
            <circle cx="336" cy="362" r="2.2" fillOpacity="0.3" />
            <circle cx="438" cy="610" r="3.4" fillOpacity="0.42" />
            <circle cx="552" cy="272" r="2.8" fillOpacity="0.34" />
            <circle cx="665" cy="705" r="2.4" fillOpacity="0.24" />
            <circle cx="760" cy="510" r="3.8" fillOpacity="0.58" />
            <circle cx="846" cy="326" r="2.4" fillOpacity="0.32" />
            <circle cx="936" cy="640" r="3.2" fillOpacity="0.4" />
            <circle cx="1032" cy="446" r="2.7" fillOpacity="0.28" />
            <circle cx="1094" cy="736" r="2.2" fillOpacity="0.22" />
            <circle cx="220" cy="724" r="1.8" fillOpacity="0.2" />
            <circle cx="112" cy="420" r="2" fillOpacity="0.18" />
            <circle cx="1110" cy="210" r="2.1" fillOpacity="0.22" />
          </g>
        </svg>
      </div>
    </div>
  );
}
