/**
 * Abstract "illumination" backdrop for the homepage hero.
 * Pure CSS + inline SVG, no raster assets. Respects prefers-reduced-motion.
 */
const HeroLightBackdrop = () => {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {/* Layer 1 — dark canvas behind everything (so light reads) */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0F0F0F] via-[#1a1a1a] to-[#0a0a0a]" />

      {/* Layer 2 — main warm spotlight from top-right */}
      <div
        className="absolute inset-0 motion-safe:animate-[lumenBreath_9s_ease-in-out_infinite]"
        style={{
          background:
            "radial-gradient(ellipse 80% 70% at 85% 10%, rgba(255,236,180,0.95) 0%, rgba(255,225,140,0.55) 18%, rgba(255,210,100,0.22) 38%, rgba(0,0,0,0) 65%)",
        }}
      />

      {/* Layer 3 — neon-yellow brand core */}
      <div
        className="absolute inset-0 motion-safe:animate-[lumenBreath_11s_ease-in-out_infinite_0.5s]"
        style={{
          background:
            "radial-gradient(circle 28% at 88% 6%, rgba(225,255,0,0.55) 0%, rgba(225,255,0,0.18) 35%, rgba(225,255,0,0) 65%)",
        }}
      />

      {/* Layer 4 — diagonal volumetric light rays */}
      <svg
        className="absolute inset-0 w-full h-full motion-safe:animate-[lumenBreath_13s_ease-in-out_infinite_1s]"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMaxYMin slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="rayGradient" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFF4C2" stopOpacity="0.85" />
            <stop offset="35%" stopColor="#FFE89A" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#FFE89A" stopOpacity="0" />
          </linearGradient>
        </defs>

        <g style={{ mixBlendMode: "screen" }}>
          <polygon points="1440,0 1440,60 60,900 0,900" fill="url(#rayGradient)" opacity="0.7" />
          <polygon points="1440,0 1440,20 360,900 240,900" fill="url(#rayGradient)" opacity="0.55" />
          <polygon points="1440,90 1440,160 580,900 480,900" fill="url(#rayGradient)" opacity="0.45" />
          <polygon points="1440,200 1440,260 800,900 720,900" fill="url(#rayGradient)" opacity="0.35" />
          <polygon points="1440,330 1440,380 1000,900 940,900" fill="url(#rayGradient)" opacity="0.25" />
          <polygon points="1440,470 1440,510 1180,900 1120,900" fill="url(#rayGradient)" opacity="0.18" />
        </g>
      </svg>

      {/* Layer 5 — readability scrim on the left where headline sits */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(8,8,8,0.55) 0%, rgba(8,8,8,0.25) 35%, rgba(8,8,8,0) 60%)",
        }}
      />

      {/* Layer 6 — bottom fade to background */}
      <div
        className="absolute inset-x-0 bottom-0 h-32"
        style={{
          background:
            "linear-gradient(to bottom, rgba(15,15,15,0) 0%, hsl(var(--background)) 100%)",
        }}
      />
    </div>
  );
};

export default HeroLightBackdrop;
