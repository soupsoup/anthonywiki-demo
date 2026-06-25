import Link from "next/link";
import { getAllCategories } from "@/lib/articles";

export const metadata = { title: "Categories — AnthonyWiki" };

export default async function CategoriesPage() {
  const categories = await getAllCategories();

  return (
    <div>
      <div className="wiki-page-tabs">
        <span className="wiki-page-tab active">Categories</span>
      </div>
      <h1 className="wiki-page-title">Categories ({categories.length})</h1>

      {categories.length === 0 ? (
        <p style={{ color: "var(--color-subtle)", fontFamily: "var(--font-family-sans)" }}>
          No categories yet. Add <code>categories:</code> to an article&apos;s frontmatter.
        </p>
      ) : (
        <div style={{ columns: "3 160px", columnGap: "1.5rem", fontFamily: "var(--font-family-sans)" }}>
          {categories.map(cat => (
            <div key={cat.name} style={{ breakInside: "avoid", marginBottom: "0.375rem" }}>
              <Link href={`/category/${encodeURIComponent(cat.name)}`}>{cat.name}</Link>
              <span style={{ color: "var(--color-subtle)", fontSize: "0.8125rem" }}> ({cat.count})</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
