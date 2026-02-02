import { Link } from "react-router-dom";

interface ArticleCardProps {
  category: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  link: string;
  imageUrl: string;
}

const ArticleCard = ({
  category,
  title,
  excerpt,
  date,
  readTime,
  link,
  imageUrl,
}: ArticleCardProps) => {
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
        {/* Image */}
        <div className="overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="w-full aspect-video object-cover transition-all duration-400 ease-out group-hover:scale-[1.03] group-hover:opacity-95"
          />
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

          {/* Title */}
          <h3
            className="text-xl md:text-2xl font-bold text-foreground leading-tight mb-3 transition-colors duration-200 group-hover:text-[#FF006E] line-clamp-2"
            style={{ lineHeight: 1.3 }}
          >
            {title}
          </h3>

          {/* Excerpt */}
          <p
            className="text-sm text-muted-foreground mb-4 line-clamp-3"
            style={{ lineHeight: 1.6, color: "#444" }}
          >
            {excerpt}
          </p>

          {/* Metadata */}
          <div
            className="flex items-center gap-4 text-sm"
            style={{ color: "#666" }}
          >
            <span>{date}</span>
            <span>•</span>
            <span>{readTime}</span>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default ArticleCard;
