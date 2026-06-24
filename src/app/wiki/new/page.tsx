"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const TEMPLATE = `---
title: My New Article
summary: A brief one-line description of this article.
categories:
  - General
lastModified: "${new Date().toISOString().split("T")[0]}"
image: ""
imageCaption: ""
infobox:
  _title: "Article"
  Born: ""
  Founded: ""
---

Write your article content here. You can use [[Wiki Links]] to link to other articles.

## Overview

Start with an overview section.

## Details

Add more sections as needed.

## See also

- [[Main Page]]
`;

export default function NewArticlePage() {
  const [content, setContent] = useState(TEMPLATE);
  const [slug, setSlug] = useState("");
  const [saving, setSaving] = useState(false);
  const router = useRouter();

  async function handleSave() {
    if (!slug.trim()) return alert("Please enter a URL slug.");
    setSaving(true);
    const res = await fetch("/api/articles", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ slug, content }),
    });
    if (res.ok) {
      const data = await res.json();
      router.push(`/wiki/${data.slug}`);
      router.refresh();
    } else {
      alert("Failed to save article.");
      setSaving(false);
    }
  }

  return (
    <div>
      <div className="wiki-page-tabs">
        <span className="wiki-page-tab active">New article</span>
      </div>
      <h1 className="wiki-page-title">Create new article</h1>

      <div className="wiki-ambox">
        <span className="wiki-ambox-icon">ℹ️</span>
        Use Markdown to write your article. Use <code>[[Article Name]]</code> for internal links.
        Fill in the frontmatter at the top to set the title, categories, and infobox.
      </div>

      <div style={{ marginBottom: "0.75rem", fontFamily: "var(--font-family-sans)", fontSize: "0.875rem" }}>
        <label style={{ display: "block", marginBottom: "0.25rem", fontWeight: "bold" }}>
          URL slug (e.g. <code>my-article</code>)
        </label>
        <input
          type="text"
          value={slug}
          onChange={e => setSlug(e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, "-"))}
          placeholder="my-article-name"
          style={{
            width: "300px", padding: "0.375rem 0.625rem",
            border: "1px solid #a2a9b1", borderRadius: "2px",
            fontFamily: "var(--font-family-mono)", fontSize: "0.875rem"
          }}
        />
      </div>

      <div className="wiki-edit-toolbar">
        <span style={{ fontFamily: "var(--font-family-sans)", fontSize: "0.8125rem", color: "var(--color-subtle)", alignSelf: "center" }}>
          Markdown editor
        </span>
      </div>

      <textarea
        className="wiki-edit-area"
        value={content}
        onChange={e => setContent(e.target.value)}
        spellCheck={false}
      />

      <div style={{ marginTop: "0.75rem", display: "flex", gap: "0.5rem" }}>
        <button className="wiki-btn wiki-btn-primary" onClick={handleSave} disabled={saving}>
          {saving ? "Saving…" : "✓ Save article"}
        </button>
        <a href="/" className="wiki-btn">Cancel</a>
      </div>
    </div>
  );
}
