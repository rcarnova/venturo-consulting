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
      {/* Layer 1 — warm radial glow from top-right */}
      <div
        className="absolute inset-0 motion-safe:animate-[lumenBreath_9s_ease-in-out_infinite]"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 88% 8%, rgba(255,248,220,0.85) 0%, rgba(255,248,220,0.45) 22%, rgba(255,248,220,0.15) 42%, rgba(255,255,255,0) 65%)",
        }}
      />

      {/* Layer 2 — subtle neon-yellow brand accent in the core of the beam */}
      <div
        className="absolute inset-0 motion-safe:animate-[lumenBreath_11s_ease-in-out_infinite_0.5s]"
        style={{
          background:
            "radial-gradient(circle 35% at 92% 4%, rgba(225,255,0,0.22) 0%, rgba(225,255,0,0.08) 30%, rgba(225,255,0,0) 60%)",
        }}
      />

      {/* Layer 3 — diagonal light rays */}
      <svg
        className="absolute inset-0 w-full h-full motion-safe:animate-[lumenBreath_13s_ease-in-out_infinite_1s]"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMaxYMin slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="rayGradient" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFF8DC" stopOpacity="0.55" />
            <stop offset="40%" stopColor="#FFF8DC" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#FFF8DC" stopOpacity="0" />
          </linearGradient>
          <radialGradient id="coreGlow" cx="92%" cy="2%" r="35%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.7" />
            <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Rays as thin polygons emanating from top-right */}
        <g style={{ mixBlendMode: "screen" }}>
          <polygon points="1440,0 1440,40 100,900 0,900" fill="url(#rayGradient)" opacity="0.35" />
          <polygon points="1440,0 1440,15 380,900 280,900" fill="url(#rayGradient)" opacity="0.28" />
          <polygon points="1440,80 1440,140 600,900 520,900" fill="url(#rayGradient)" opacity="0.22" />
          <polygon points="1440,180 1440,230 820,900 760,900" fill="url(#rayGradient)" opacity="0.18" />
          <polygon points="1440,300 1440,340 1020,900 980,900" fill="url(#rayGradient)" opacity="0.14" />
        </g>

        {/* Bright core */}
        <rect x="0" y="0" width="1440" height="900" fill="url(#coreGlow)" />
      </svg>

      {/* Layer 4 — soft bottom vignette to anchor text */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(255,255,255,0) 55%, rgba(250,250,250,0.6) 100%)",
        }}
      />
    </div>
  );
};

export default HeroLightBackdrop;
