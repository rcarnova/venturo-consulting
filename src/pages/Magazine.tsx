import { SEO } from "@/components/SEO";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import confusioneNeiRuoli from "@/assets/confusione-nei-ruoli.png";
import culturaOrg from "@/assets/cultura-org.png";

const articles = [
  {
    category: "cultura organizzativa",
    title: "La cultura non è mai sbagliata. È solo cultura.",
    excerpt:
      "Ho visto molte aziende arrendersi. Non parlo di business. Parlo di cultura.",
    date: "10 mar 2026",
    readTime: "4 min",
    link: "/magazine/la-cultura-non-e-mai-sbagliata",
    author: "Rosario",
    tags: ["cultura organizzativa", "cambiamento"],
  },
  {
    category: "Organizzazione",
    title: "La responsabilità non si delega. Si conquista.",
    excerpt:
      "Nelle organizzazioni sane le persone non aspettano che qualcuno assegni loro responsabilità. Le pretendono.",
    date: "10 mar 2026",
    readTime: "4 min",
    link: "/magazine/la-responsabilita-non-si-delega",
    author: "Rosario",
    tags: ["organizzazione"],
  },
  {
    category: "Cultura",
    title: "Cultura implicita = Cultura inesistente",
    excerpt:
      "I tuoi valori non sono sui poster. Sono nei comportamenti per cui assumi, promuovi e licenzi. Se non li rendi espliciti, ogni manager li interpreta a modo suo.",
    date: "29 gen 2025",
    readTime: "7 min",
    link: "/magazine/cultura-implicita-cultura-inesistente",
  },
];

const Magazine = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="WHY — Articoli su cultura organizzativa ed employer branding"
        description="Ogni organizzazione ha un perché. Articoli su employer branding, cultura organizzativa, leadership e comunicazione interna."
        canonical="https://venturo.it/magazine"
        lang="it"
      />
      <Header />
      <main className="pt-20">
        {/* Editorial Header */}
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
              ogni organizzazione ha un perché.
            </p>
          </div>
        </section>

        {/* Articles Grid */}
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
      <Footer />
    </div>
  );
};

export default Magazine;
