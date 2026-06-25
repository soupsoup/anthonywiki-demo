import Link from "next/link";
import { getAllArticles } from "@/lib/articles";

export default async function MainPage() {
  const articles = await getAllArticles();
  const featured = articles.find((a) => a.categories.includes("Featured")) || articles[0];
  const recent = articles.slice(-5).reverse();

  return (
    <div>
      <h1 className="wiki-page-title" style={{ fontFamily: "Georgia, serif" }}>
        Welcome to AnthonyWiki
      </h1>

      <p style={{ fontFamily: "var(--font-family-sans)", fontSize: "0.9375rem", marginBottom: "1.25rem", color: "var(--color-subtle)" }}>
        AnthonyWiki is a personal encyclopedia — a Wikipedia-style wiki for documenting things that matter.
        It currently has <strong>{articles.length}</strong> article{articles.length !== 1 ? "s" : ""}.
      </p>

      <div className="wiki-main-page-layout">
        {featured && (
          <div className="wiki-featured-article">
            <div className="wiki-featured-header">⭐ Featured article</div>
            <div className="wiki-featured-body">
              {featured.image && (
                <div style={{ flexShrink: 0 }}>
                  <img
                    src={featured.image}
                    alt={featured.imageCaption || featured.title}
                    style={{ width: 120, height: 90, objectFit: "cover", border: "1px solid #a2a9b1" }}
                  />
                </div>
              )}
              <div>
                <strong style={{ fontFamily: "var(--font-family-heading)", fontSize: "1.0625rem" }}>
                  <Link href={`/wiki/${featured.slug}`}>{featured.title}</Link>
                </strong>
                <p style={{ margin: "0.25rem 0 0", fontSize: "0.875rem" }}>{featured.summary}</p>
                <p style={{ margin: "0.5rem 0 0", fontSize: "0.8125rem" }}>
                  <Link href={`/wiki/${featured.slug}`}>Read full article »</Link>
                </p>
              </div>
            </div>
          </div>
        )}

        <div className="wiki-main-page-box">
          <div className="wiki-main-page-box-header">📚 All articles ({articles.length})</div>
          <div className="wiki-main-page-box-body">
            {articles.length === 0 ? (
              <p style={{ color: "var(--color-subtle)", fontFamily: "var(--font-family-sans)" }}>
                No articles yet. <Link href="/wiki/new">Create the first one!</Link>
              </p>
            ) : (
              <ul style={{ margin: 0, padding: "0 0 0 1.25rem", fontFamily: "var(--font-family-sans)" }}>
                {articles.map((a) => (
                  <li key={a.slug}>
                    <Link href={`/wiki/${a.slug}`}>{a.title}</Link>
                    {a.summary && (
                      <span style={{ color: "var(--color-subtle)", fontSize: "0.8125rem" }}>
                        {" "}— {a.summary.slice(0, 80)}{a.summary.length > 80 ? "…" : ""}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className="wiki-main-page-box">
          <div className="wiki-main-page-box-header">🕐 Recent articles</div>
          <div className="wiki-main-page-box-body">
            {recent.length === 0 ? (
              <p style={{ color: "var(--color-subtle)", fontFamily: "var(--font-family-sans)" }}>No articles yet.</p>
            ) : (
              <ul style={{ margin: 0, padding: "0 0 0 1.25rem", fontFamily: "var(--font-family-sans)" }}>
                {recent.map((a) => (
                  <li key={a.slug}>
                    <Link href={`/wiki/${a.slug}`}>{a.title}</Link>
                    <span style={{ color: "var(--color-subtle)", fontSize: "0.8125rem" }}> ({a.lastModified})</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className="wiki-main-page-box" style={{ gridColumn: "1 / -1" }}>
          <div className="wiki-main-page-box-header">🏷️ Browse by category</div>
          <div className="wiki-main-page-box-body">
            {articles.length === 0 ? (
              <p style={{ color: "var(--color-subtle)", fontFamily: "var(--font-family-sans)" }}>No categories yet.</p>
            ) : (
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", fontFamily: "var(--font-family-sans)" }}>
                {[...new Set(articles.flatMap((a) => a.categories))].map((cat) => (
                  <Link
                    key={cat}
                    href={`/category/${encodeURIComponent(cat)}`}
                    style={{
                      padding: "0.1875rem 0.625rem",
                      border: "1px solid #a2a9b1",
                      borderRadius: "2px",
                      fontSize: "0.8125rem",
                      background: "#f8f9fa"
                    }}
                  >
                    {cat}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
