"use client";

export default function OrbitalVisual() {
  return (
    <div className="pointer-events-none fixed bottom-[-220px] right-[-220px] z-[1] h-[900px] w-[900px] opacity-50 max-sm:bottom-[-260px] max-sm:right-[-300px] max-sm:opacity-25">
      <svg
        viewBox="0 0 900 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="orbital-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#c9a15a" stopOpacity="0.34" />
            <stop offset="38%" stopColor="#c9a15a" stopOpacity="0.12" />
            <stop offset="72%" stopColor="#c9a15a" stopOpacity="0.04" />
            <stop offset="100%" stopColor="#c9a15a" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="orbital-stroke" x1="138" y1="130" x2="760" y2="765">
            <stop stopColor="#c9a15a" stopOpacity="0.08" />
            <stop offset="0.48" stopColor="#c9a15a" stopOpacity="0.64" />
            <stop offset="1" stopColor="#c9a15a" stopOpacity="0.12" />
          </linearGradient>
          <linearGradient id="orbital-fade" x1="225" y1="170" x2="720" y2="610">
            <stop stopColor="#f5f2eb" stopOpacity="0.08" />
            <stop offset="0.55" stopColor="#c9a15a" stopOpacity="0.35" />
            <stop offset="1" stopColor="#c9a15a" stopOpacity="0.02" />
          </linearGradient>
          <filter id="orbital-blur" x="0" y="0" width="900" height="900" filterUnits="userSpaceOnUse">
            <feGaussianBlur stdDeviation="22" />
          </filter>
        </defs>

        <circle cx="450" cy="450" r="260" fill="url(#orbital-glow)" filter="url(#orbital-blur)" />
        <circle cx="450" cy="450" r="72" fill="#c9a15a" fillOpacity="0.055" />
        <circle cx="450" cy="450" r="10" fill="#c9a15a" fillOpacity="0.55" />

        <circle cx="450" cy="450" r="118" stroke="url(#orbital-stroke)" strokeWidth="1" />
        <circle cx="450" cy="450" r="178" stroke="#c9a15a" strokeOpacity="0.18" strokeWidth="1" />
        <circle cx="450" cy="450" r="246" stroke="url(#orbital-fade)" strokeWidth="1" />
        <circle cx="450" cy="450" r="318" stroke="#c9a15a" strokeOpacity="0.12" strokeWidth="1" />
        <circle cx="450" cy="450" r="386" stroke="#c9a15a" strokeOpacity="0.08" strokeWidth="1" />

        <path d="M450 64V836" stroke="#c9a15a" strokeOpacity="0.08" strokeWidth="1" />
        <path d="M64 450H836" stroke="#c9a15a" strokeOpacity="0.08" strokeWidth="1" />
        <path d="M176.9 176.9L723.1 723.1" stroke="#c9a15a" strokeOpacity="0.09" strokeWidth="1" />
        <path d="M723.1 176.9L176.9 723.1" stroke="#c9a15a" strokeOpacity="0.09" strokeWidth="1" />
        <path d="M279 94L621 806" stroke="#c9a15a" strokeOpacity="0.055" strokeWidth="1" />
        <path d="M806 279L94 621" stroke="#c9a15a" strokeOpacity="0.055" strokeWidth="1" />

        <path
          d="M210 450C210 317.45 317.45 210 450 210C582.55 210 690 317.45 690 450"
          stroke="#c9a15a"
          strokeOpacity="0.46"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M694 450C694 584.76 584.76 694 450 694C315.24 694 206 584.76 206 450"
          stroke="#f5f2eb"
          strokeOpacity="0.08"
          strokeWidth="1"
          strokeLinecap="round"
        />
        <path
          d="M450 132C625.63 132 768 274.37 768 450"
          stroke="#c9a15a"
          strokeOpacity="0.25"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M450 768C274.37 768 132 625.63 132 450"
          stroke="#c9a15a"
          strokeOpacity="0.18"
          strokeWidth="1.5"
          strokeLinecap="round"
        />

        <g fill="#c9a15a">
          <circle cx="450" cy="204" r="4" fillOpacity="0.72" />
          <circle cx="624" cy="276" r="3" fillOpacity="0.5" />
          <circle cx="696" cy="450" r="4" fillOpacity="0.62" />
          <circle cx="624" cy="624" r="3" fillOpacity="0.46" />
          <circle cx="450" cy="696" r="4" fillOpacity="0.6" />
          <circle cx="276" cy="624" r="3" fillOpacity="0.48" />
          <circle cx="204" cy="450" r="4" fillOpacity="0.56" />
          <circle cx="276" cy="276" r="3" fillOpacity="0.42" />
          <circle cx="768" cy="450" r="3.5" fillOpacity="0.5" />
          <circle cx="132" cy="450" r="3.5" fillOpacity="0.42" />
          <circle cx="450" cy="132" r="3.5" fillOpacity="0.5" />
          <circle cx="450" cy="768" r="3.5" fillOpacity="0.42" />
        </g>

        <g stroke="#c9a15a" strokeOpacity="0.12" strokeWidth="1">
          <circle cx="450" cy="450" r="28" />
          <circle cx="450" cy="450" r="44" />
          <circle cx="450" cy="450" r="538" />
        </g>
      </svg>
    </div>
  );
}
