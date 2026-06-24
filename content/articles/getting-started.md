---
title: Getting Started
summary: How to create and edit articles in ReyesWiki.
categories:
  - Help
  - Featured
lastModified: "2026-04-09"
image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Wikipedia-logo-v2.svg/200px-Wikipedia-logo-v2.svg.png"
imageCaption: "ReyesWiki is modeled on Wikipedia."
infobox:
  _title: "ReyesWiki Guide"
  Type: Personal wiki
  Engine: Next.js
  Format: Markdown
  Deployed: Vercel
---

**Getting started** with ReyesWiki is easy. This article explains how to write articles, link between them, and organize them with categories.

## Creating an article

Click **New article** in the top navigation or sidebar. You'll see a Markdown editor with a frontmatter template at the top.

The frontmatter is YAML at the top of each file, surrounded by `---`. It controls:

- `title` — the article's display title
- `summary` — one-line description shown in search results
- `categories` — list of category tags
- `image` — URL of a cover image
- `imageCaption` — caption text for the image
- `infobox` — key-value pairs shown in the right-side infobox
- `lastModified` — date string

## Editing an article

Click the **Edit** tab on any article page, or click **Edit this article** at the bottom. You'll see the raw Markdown source. Make your changes, then click **Save changes**.

## Wiki links

Use double brackets to link between articles:

- `[[Article Name]]` creates a link to the article with that name
- `[[Article Name|Display Text]]` shows different text for the link

If the article doesn't exist yet, the link appears in red. Click it to create the article.

## Markdown formatting

ReyesWiki uses standard Markdown:

| Syntax | Result |
|--------|--------|
| `**bold**` | **bold** |
| `*italic*` | *italic* |
| `## Heading` | Section heading |
| `- item` | Bullet list |
| `[text](url)` | External link |
| `![alt](url)` | Image |

## Sections and table of contents

Articles with three or more `##` headings automatically get a **table of contents** (TOC) in the upper left. Link to sections with `#heading-id`.

## Categories

Add categories in the frontmatter:

```yaml
categories:
  - Technology
  - Tutorials
```

Categories appear at the bottom of the article and link to a category page listing all articles in that category.

## Infoboxes

Add an infobox in the frontmatter:

```yaml
infobox:
  _title: "My Infobox Title"
  Founded: "2026"
  Location: "New York"
```

The `_title` key sets the blue header. Other keys become rows in the table.

## See also

- [[Markdown]] — detailed Markdown reference
- [[Wikipedia]] — the inspiration for this wiki
