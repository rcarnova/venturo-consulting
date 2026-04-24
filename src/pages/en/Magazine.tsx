import { SEO } from "@/components/SEO";
import HeaderEN from "@/components/en/HeaderEN";
import FooterEN from "@/components/en/FooterEN";
import ArticleCard from "@/components/ArticleCard";

const articles = [
  {
    category: "organizational culture",
    title: "Bookish influencers and talent's new hunger for substance.",
    excerpt:
      "Millennials and Gen Z follow those who read, not those who show. Talent wants environments where people actually think: declared employer branding is no longer enough.",
    date: "Apr 24, 2026",
    readTime: "6 min",
    link: "/en/magazine/bookish-talents-substance",
    author: "Rosario",
    tags: ["organizational culture", "employer branding", "talent", "identity"],
  },
  {
    category: "branding",
    title: "The brand manual is a relic. Identity is culture.",
    excerpt:
      "A strong identity isn't measured by the thickness of the manual, but by how deeply it has entered people.",
    date: "Apr 14, 2026",
    readTime: "6 min",
    link: "/en/magazine/brand-manual-relic",
    author: "Rosario",
    tags: ["branding", "organizational culture", "identity"],
  },
  {
    category: "organizational culture",
    title: "Who is truly present? Identity, leadership and employer branding.",
    excerpt:
      "Organizations that fail to attract talent don't have a strategy or budget problem: they have a presence problem.",
    date: "Apr 19, 2026",
    readTime: "4 min",
    link: "/en/magazine/presence-identity",
    author: "Rosario",
    tags: ["organizational culture", "employer branding", "leadership", "identity"],
  },
  {
    category: "organizational culture",
    title: "Closeness is born from intentionality, not technology.",
    excerpt:
      "It's not remote vs office. It's present vs elsewhere. The quality of attention you bring into a room matters more than where that room is.",
    date: "Apr 12, 2026",
    readTime: "4 min",
    link: "/en/magazine/presence-intentionality",
    author: "Rosario",
    tags: ["organizational culture", "leadership", "engagement", "presence"],
  },
  {
    category: "organizational culture",
    title: "It's not (only) a skills problem. AI and organizational culture.",
    excerpt:
      "AI projects don't get stuck in datacenters, but in meetings and conversations that never happen. Adoption is, first of all, a question of identity.",
    date: "Apr 5, 2026",
    readTime: "6 min",
    link: "/en/magazine/ai-skills-culture",
    author: "Rosario",
    tags: ["organizational culture", "AI", "leadership", "change"],
  },
  {
    category: "organizational culture",
    title: "The cost of the unsaid. Why 70% of employees aren't really there.",
    excerpt:
      "Employee disengagement doesn't come from nowhere: it comes from the unsaid that piles up, layer after layer, until it becomes culture.",
    date: "Mar 29, 2026",
    readTime: "6 min",
    link: "/en/magazine/cost-of-the-unsaid",
    author: "Rosario",
    tags: ["organizational culture", "leadership", "engagement", "listening"],
  },
  {
    category: "organizational culture",
    title: "AI will give us more listening. But listening is something else.",
    excerpt:
      "How new sentiment analysis tools risk repeating the survey mistake: collecting data without changing anything.",
    date: "Mar 22, 2026",
    readTime: "5 min",
    link: "/en/magazine/ai-listening",
    author: "Rosario",
    tags: ["organizational culture", "employer branding", "engagement", "leadership", "listening", "AI"],
  },
  {
    category: "organizational culture",
    title: "Culture is never wrong. It's just culture.",
    excerpt:
      "I've seen many companies give up. I'm not talking about business. I'm talking about culture.",
    date: "Mar 15, 2026",
    readTime: "4 min",
    link: "/en/magazine/culture-is-never-wrong",
    author: "Rosario",
    tags: ["organizational culture", "change"],
  },
  {
    category: "Organization",
    title: "Responsibility isn't delegated. It's claimed.",
    excerpt:
      "In healthy organizations people don't wait for someone to assign them responsibility. They demand it.",
    date: "Mar 8, 2026",
    readTime: "4 min",
    link: "/en/magazine/responsibility-is-claimed",
    author: "Rosario",
    tags: ["organization"],
  },
  {
    category: "Culture",
    title: "Values aren't posters. They're promises.",
    excerpt:
      "Companies make promises constantly. But as they taught us as children: promises must be kept.",
    date: "Mar 1, 2026",
    readTime: "4 min",
    link: "/en/magazine/values-are-promises",
    author: "Rosario",
    tags: ["organizational culture"],
  },
];

const MagazineEN = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="WHY — Articles on organizational culture and employer branding"
        description="Every organization has a why. Articles on employer branding, organizational culture, leadership and internal communication."
        canonical="https://venturoconsulting.it/en/magazine"
        lang="en"
        alternateUrls={{
          it: "https://venturoconsulting.it/magazine",
          en: "https://venturoconsulting.it/en/magazine",
        }}
      />
      <HeaderEN />
      <main className="pt-20">
        <section className="bg-white py-16 md:py-20 pb-0">
          <div className="max-w-[1200px] mx-auto px-5 md:px-8">
            <h1
              className="text-[80px] md:text-[120px] lg:text-[160px] font-bold tracking-tight leading-none text-foreground"
              style={{ fontFamily: "'Space Grotesk', system-ui, sans-serif" }}
            >
              WHY
            </h1>
            <p
              className="mt-4 text-sm md:text-base font-mono tracking-wide uppercase"
              style={{
                fontFamily: "'IBM Plex Mono', monospace",
                color: "#666",
                letterSpacing: "0.08em",
              }}
            >
              every organization has a why.
            </p>
          </div>
        </section>

        <section className="pt-10 pb-16 bg-background">
          <div className="max-w-[1200px] mx-auto px-5 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
              {articles.map((article, index) => (
                <ArticleCard key={index} {...article} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <FooterEN />
    </div>
  );
};

export default MagazineEN;
