import { Link } from "react-router-dom";

interface ArticleCardProps {
  category: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  link: string;
  imageUrl?: string;
  author?: string;
  tags?: string[];
  index?: number;
}

// Abstract, high-contrast gradient backgrounds (white text always legible)
const COVER_BACKGROUNDS: string[] = [
  // 1 — Magenta / indigo grain mesh (ref: image-8)
  "radial-gradient(120% 90% at 100% 60%, #FF1F8F 0%, transparent 55%), radial-gradient(90% 80% at 80% 100%, #FF4FA8 0%, transparent 60%), radial-gradient(80% 70% at 20% 30%, #1E3A8A 0%, transparent 60%), radial-gradient(60% 60% at 0% 0%, #0B1020 0%, #050510 100%)",
  // 2 — Sunset prism (ref: image-7)
  "linear-gradient(135deg, #0B1233 0%, #2A1A5E 25%, #C0185C 55%, #FF6B3D 85%, #FFC15E 100%)",
  // 3 — Monochrome wave (ref: image-6)
  "radial-gradient(120% 100% at 100% 0%, #1A1A1A 0%, #0A0A0A 60%), repeating-linear-gradient(115deg, rgba(255,255,255,0.08) 0px, rgba(255,255,255,0.08) 1px, transparent 1px, transparent 6px)",
  // 4 — Fuchsia noir (brand)
  "radial-gradient(100% 80% at 0% 100%, #FF006E 0%, transparent 55%), radial-gradient(90% 90% at 100% 0%, #2A0A1F 0%, #0A0A0A 70%)",
  // 5 — Electric teal storm
  "radial-gradient(110% 90% at 0% 0%, #00D4C8 0%, transparent 50%), radial-gradient(90% 80% at 100% 100%, #6B21A8 0%, transparent 60%), linear-gradient(180deg, #0A0F1F 0%, #0A0A1A 100%)",
  // 6 — Ember
  "radial-gradient(120% 100% at 100% 100%, #FF3D00 0%, transparent 55%), radial-gradient(80% 80% at 0% 30%, #7A0F1F 0%, transparent 65%), linear-gradient(180deg, #1A0808 0%, #050202 100%)",
  // 7 — Cobalt grain
  "radial-gradient(100% 90% at 50% 0%, #1E40AF 0%, transparent 60%), radial-gradient(80% 70% at 100% 100%, #FF006E 0%, transparent 55%), linear-gradient(180deg, #050818 0%, #0A0A1A 100%)",
  // 8 — Yellow-fuchsia clash (brand accents)
  "radial-gradient(90% 80% at 100% 0%, #E1FF00 0%, transparent 45%), radial-gradient(110% 90% at 0% 100%, #FF006E 0%, transparent 55%), linear-gradient(135deg, #0F0F0F 0%, #1A0A1A 100%)",
  // 9 — Deep violet aurora
  "radial-gradient(120% 100% at 0% 0%, #4C1D95 0%, transparent 60%), radial-gradient(90% 80% at 100% 60%, #DB2777 0%, transparent 55%), linear-gradient(180deg, #0A051A 0%, #08040F 100%)",
  // 10 — Forest dusk
  "radial-gradient(110% 90% at 100% 0%, #0F766E 0%, transparent 55%), radial-gradient(90% 80% at 0% 100%, #064E3B 0%, transparent 60%), linear-gradient(180deg, #04140F 0%, #020A07 100%)",
  // 11 — Crimson noir
  "radial-gradient(100% 90% at 50% 100%, #B91C1C 0%, transparent 55%), radial-gradient(80% 70% at 0% 0%, #1F0606 0%, transparent 60%), linear-gradient(180deg, #0A0303 0%, #050101 100%)",
  // 12 — Cyan / magenta split
  "linear-gradient(125deg, #0EA5E9 0%, #1E3A8A 40%, #831843 75%, #FF006E 100%)",
  // 13 — Charcoal lines
  "radial-gradient(100% 80% at 30% 30%, #2A2A2A 0%, transparent 60%), repeating-linear-gradient(75deg, rgba(255,255,255,0.06) 0px, rgba(255,255,255,0.06) 1px, transparent 1px, transparent 8px), linear-gradient(180deg, #0F0F0F 0%, #050505 100%)",
];

const ArticleCard = ({
  category,
  title,
  excerpt,
  date,
  readTime,
  link,
  tags,
  index = 0,
}: ArticleCardProps) => {
  const background = COVER_BACKGROUNDS[index % COVER_BACKGROUNDS.length];
  return (
    <Link to={link} className="group block">
      <article
        className="bg-white rounded-xl overflow-hidden cursor-pointer transition-all duration-300 ease-out hover:-translate-y-1"
        style={{
          border: "1px solid rgba(0,0,0,0.08)",
          boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.12)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.06)";
        }}
      >
        {/* Typographic Cover */}
        <div
          className="relative w-full overflow-hidden flex items-end p-6"
          style={{
            aspectRatio: "16/9",
            background,
            backgroundColor: "#141414",
          }}
        >
          {/* Subtle dark veil bottom-left for text legibility */}
          <div
            aria-hidden
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(180deg, rgba(0,0,0,0) 35%, rgba(0,0,0,0.45) 100%)",
            }}
          />
          <span
            className="relative text-white font-bold text-2xl md:text-3xl leading-tight"
            style={{
              fontFamily: "'Space Grotesk', system-ui, sans-serif",
              lineHeight: 1.1,
              display: "-webkit-box",
              WebkitLineClamp: 4,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {title}
          </span>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Category Tag */}
          <span
            className="inline-block text-xs font-semibold text-white uppercase tracking-wide mb-3 px-3 py-1 rounded"
            style={{
              backgroundColor: "#FF006E",
              letterSpacing: "0.05em",
            }}
          >
            {category}
          </span>

          <p
            className="text-sm text-muted-foreground mb-4 line-clamp-3"
            style={{ lineHeight: 1.6, color: "#444" }}
          >
            {excerpt}
          </p>

          {/* Metadata */}
          <div
            className="flex items-center gap-4 text-sm mb-4"
            style={{ color: "#666" }}
          >
            <span>{date}</span>
            <span>•</span>
            <span>{readTime}</span>
          </div>

          {/* Tags */}
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2.5 py-1 rounded-full border"
                  style={{
                    borderColor: "#FF006E",
                    color: "#FF006E",
                    fontFamily: "'IBM Plex Mono', monospace",
                    letterSpacing: "0.03em",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </article>
    </Link>
  );
};

export default ArticleCard;
