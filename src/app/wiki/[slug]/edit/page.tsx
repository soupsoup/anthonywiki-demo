"use client";
import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";

export default function EditPage() {
  const params = useParams();
  const slug = params.slug as string;
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const router = useRouter();

  useEffect(() => {
    fetch(`/api/articles/${slug}`)
      .then(r => r.json())
      .then(d => { setContent(d.content || ""); setLoading(false); })
      .catch(() => setLoading(false));
  }, [slug]);

  async function handleSave() {
    setSaving(true);
    const res = await fetch("/api/articles", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ slug, content }),
    });
    if (res.ok) {
      router.push(`/wiki/${slug}`);
      router.refresh();
    } else {
      alert("Failed to save.");
      setSaving(false);
    }
  }

  if (loading) return <p style={{ fontFamily: "var(--font-family-sans)" }}>Loading…</p>;

  return (
    <div>
      <div className="wiki-page-tabs">
        <a href={`/wiki/${slug}`} className="wiki-page-tab">Article</a>
        <span className="wiki-page-tab active">Edit</span>
      </div>

      <h1 className="wiki-page-title">Editing: {slug.replace(/-/g, " ")}</h1>

      <div className="wiki-ambox">
        <span className="wiki-ambox-icon">✏️</span>
        Edit the Markdown source below. Use <code>[[Article Name]]</code> for wiki links.
        The frontmatter at the top controls the title, infobox, categories, and more.
      </div>

      <textarea
        className="wiki-edit-area"
        value={content}
        onChange={e => setContent(e.target.value)}
        spellCheck={false}
      />

      <div style={{ marginTop: "0.75rem", display: "flex", gap: "0.5rem" }}>
        <button className="wiki-btn wiki-btn-primary" onClick={handleSave} disabled={saving}>
          {saving ? "Saving…" : "✓ Save changes"}
        </button>
        <a href={`/wiki/${slug}`} className="wiki-btn">Cancel</a>
      </div>

      <div className="wiki-article-meta">
        <strong>Editing tips:</strong>{" "}
        <code>[[Link]]</code> links to another article.{" "}
        <code>[[Link|Text]]</code> shows custom text.{" "}
        Use <code>## Heading</code> for sections.
      </div>
    </div>
  );
}
