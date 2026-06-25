import Link from "next/link";
import { searchArticles } from "@/lib/articles";

interface Props {
  searchParams: Promise<{ q?: string }>;
}

function highlight(text: string, query: string): string {
  if (!query) return text;
  const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return text.replace(new RegExp(`(${escaped})`, "gi"), "<mark>$1</mark>");
}

export default async function SearchPage({ searchParams }: Props) {
  const { q } = await searchParams;
  const query = q?.trim() || "";
  const results = query ? await searchArticles(query) : [];

  return (
    <div>
      <div className="wiki-page-tabs">
        <span className="wiki-page-tab active">Search</span>
      </div>

      <h1 className="wiki-page-title">Search results</h1>

      <form method="GET" action="/search" style={{ marginBottom: "1.25rem" }}>
        <div className="wiki-search-form" style={{ maxWidth: "500px" }}>
          <input
            className="wiki-search-input"
            type="search"
            name="q"
            defaultValue={query}
            placeholder="Search AnthonyWiki"
            autoFocus
          />
          <button className="wiki-search-btn" type="submit">Search</button>
        </div>
      </form>

      {query && (
        <p style={{ fontFamily: "var(--font-family-sans)", fontSize: "0.875rem", color: "var(--color-subtle)", marginBottom: "1rem" }}>
          {results.length === 0
            ? `No results for "${query}".`
            : `Found ${results.length} result${results.length !== 1 ? "s" : ""} for "${query}".`}
        </p>
      )}

      {results.length === 0 && query && (
        <div className="wiki-ambox">
          <span className="wiki-ambox-icon">🔍</span>
          No articles match your search. You can{" "}
          <Link href="/wiki/new">create a new article</Link> about this topic.
        </div>
      )}

      <ul className="wiki-search-results">
        {results.map((article) => (
          <li key={article.slug} className="wiki-search-result">
            <h3 className="wiki-search-result-title">
              <Link
                href={`/wiki/${article.slug}`}
                dangerouslySetInnerHTML={{ __html: highlight(article.title, query) }}
              />
            </h3>
            {article.summary && (
              <p
                className="wiki-search-result-summary"
                dangerouslySetInnerHTML={{ __html: highlight(article.summary, query) }}
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
