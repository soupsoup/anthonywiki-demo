import Link from "next/link";
import { getAllArticles } from "@/lib/articles";

export const metadata = { title: "All articles — ReyesWiki" };

export default async function AllArticlesPage() {
  const articles = await getAllArticles();
  const sorted = [...articles].sort((a, b) => a.title.localeCompare(b.title));

  // Group by first letter
  const groups: Record<string, typeof sorted> = {};
  sorted.forEach(a => {
    const letter = a.title[0]?.toUpperCase() || "#";
    if (!groups[letter]) groups[letter] = [];
    groups[letter].push(a);
  });

  const letters = Object.keys(groups).sort();

  return (
    <div>
      <div className="wiki-page-tabs">
        <span className="wiki-page-tab active">All articles</span>
      </div>
      <h1 className="wiki-page-title">All articles ({articles.length})</h1>

      <div style={{ fontFamily: "var(--font-family-sans)", fontSize: "0.875rem", marginBottom: "1rem", display: "flex", flexWrap: "wrap", gap: "0.25rem" }}>
        {letters.map(l => <a key={l} href={`#letter-${l}`} style={{ padding: "0.125rem 0.375rem", border: "1px solid #a2a9b1", borderRadius: "2px", background: "#f8f9fa" }}>{l}</a>)}
      </div>

      {letters.map(letter => (
        <div key={letter} style={{ marginBottom: "1.5rem" }}>
          <h2 id={`letter-${letter}`} style={{ fontSize: "1.25rem", borderBottom: "1px solid #eaecf0", paddingBottom: "0.125rem", fontFamily: "var(--font-family-heading)", fontWeight: "normal" }}>{letter}</h2>
          <ul style={{ columns: "3 200px", columnGap: "1.5rem", padding: "0 0 0 1.25rem", margin: 0 }}>
            {groups[letter].map(a => (
              <li key={a.slug} style={{ breakInside: "avoid", marginBottom: "0.25rem" }}>
                <Link href={`/wiki/${a.slug}`}>{a.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      ))}

      {articles.length === 0 && (
        <p style={{ color: "var(--color-subtle)" }}>No articles yet. <Link href="/wiki/new">Create one!</Link></p>
      )}
    </div>
  );
}
