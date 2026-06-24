import Link from "next/link";
import { getArticlesByCategory, getAllCategories } from "@/lib/articles";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ name: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { name } = await params;
  return { title: `Category:${decodeURIComponent(name)} — ReyesWiki` };
}

export async function generateStaticParams() {
  const cats = await getAllCategories();
  return cats.map((c) => ({ name: encodeURIComponent(c.name) }));
}

export default async function CategoryPage({ params }: Props) {
  const { name } = await params;
  const category = decodeURIComponent(name);
  const articles = await getArticlesByCategory(category);

  return (
    <div>
      <div className="wiki-page-tabs">
        <span className="wiki-page-tab active">Category</span>
      </div>

      <h1 className="wiki-page-title">Category: {category}</h1>

      {articles.length === 0 ? (
        <p style={{ fontFamily: "var(--font-family-sans)", color: "var(--color-subtle)" }}>
          No articles in this category yet.
        </p>
      ) : (
        <>
          <p style={{ fontFamily: "var(--font-family-sans)", fontSize: "0.875rem", color: "var(--color-subtle)" }}>
            {articles.length} article{articles.length !== 1 ? "s" : ""} in this category.
          </p>
          <ul style={{ fontFamily: "var(--font-family-sans)", paddingLeft: "1.5rem" }}>
            {articles.map((a) => (
              <li key={a.slug} style={{ marginBottom: "0.5rem" }}>
                <Link href={`/wiki/${a.slug}`} style={{ fontSize: "1rem" }}>{a.title}</Link>
                {a.summary && (
                  <span style={{ color: "var(--color-subtle)", fontSize: "0.8125rem" }}>
                    {" "}— {a.summary}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
