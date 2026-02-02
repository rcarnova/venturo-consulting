import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";

const articles = [
  {
    category: "Organizzazione",
    title: "Ruoli vaghi = Tutto rallenta",
    excerpt:
      '"Pensavo lo facessi tu." Se questa frase circola nella tua azienda, hai un problema di ownership. Non di persone.',
    date: "22 gen 2025",
    readTime: "6 min",
    link: "/magazine/ruoli-vaghi-tutto-rallenta",
    imageUrl:
      "https://via.placeholder.com/800x450/3B82F6/FFFFFF?text=Organizzazione",
  },
  {
    category: "Cultura",
    title: "Cultura implicita = Cultura inesistente",
    excerpt:
      "I tuoi valori non sono sui poster. Sono nei comportamenti per cui assumi, promuovi e licenzi. Se non li rendi espliciti, ogni manager li interpreta a modo suo.",
    date: "29 gen 2025",
    readTime: "7 min",
    link: "/magazine/cultura-implicita-cultura-inesistente",
    imageUrl: "https://via.placeholder.com/800x450/8B5CF6/FFFFFF?text=Cultura",
  },
];

const Magazine = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-white py-16">
          <div className="max-w-[1200px] mx-auto px-5 md:px-8">
            <h1
              className="text-3xl md:text-5xl font-extrabold text-foreground mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Magazine
            </h1>
            <p
              className="text-lg md:text-xl font-normal"
              style={{ color: "#444" }}
            >
              Cultura organizzativa senza retorica
            </p>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="py-16 bg-background">
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
