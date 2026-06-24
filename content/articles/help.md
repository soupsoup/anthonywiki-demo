---
title: Help
summary: Help documentation for ReyesWiki — how to create, edit, and link articles.
categories:
  - Help
  - Meta
lastModified: "2026-04-09"
infobox:
  _title: "Quick Reference"
  Create article: "Click 'New article'"
  Edit article: "Click 'Edit' tab"
  Wiki link: "[[Article Name]]"
  External link: "[text](url)"
  Image: "![alt](url)"
  Bold: "**bold**"
  Italic: "*italic*"
---

This is the help page for **ReyesWiki**. See [[Getting Started]] for a full tutorial.

## Quick start

1. Click **New article** in the navigation to create an article
2. Give it a URL slug (e.g., `my-topic`)
3. Fill in the frontmatter (title, categories, summary)
4. Write your article in [[Markdown]]
5. Click **Save article**

## Frontmatter reference

Each article starts with YAML frontmatter:

```yaml
---
title: Article Title
summary: One-line description
categories:
  - Category Name
lastModified: "2026-01-01"
image: "https://example.com/image.jpg"
imageCaption: "Image caption text"
infobox:
  _title: "Infobox Header"
  Key: Value
---
```

All fields are optional except `title`.

## Wiki link syntax

| Syntax | Result |
|--------|--------|
| `[[Article]]` | Link to article |
| `[[Article\|Text]]` | Link with custom text |

## Markdown quick reference

| Syntax | Result |
|--------|--------|
| `# H1` | Heading 1 |
| `## H2` | Heading 2 |
| `**bold**` | **bold** |
| `*italic*` | *italic* |
| `- item` | Bullet list |
| `1. item` | Numbered list |
| `` `code` `` | Inline code |
| `[text](url)` | External link |
| `![alt](url)` | Image |
| `> quote` | Blockquote |

## See also

- [[Getting Started]] — full tutorial
- [[Markdown]] — detailed Markdown guide
