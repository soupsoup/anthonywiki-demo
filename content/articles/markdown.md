---
title: Markdown
summary: A lightweight markup language for creating formatted text using a plain-text editor.
categories:
  - Technology
  - Reference
lastModified: "2026-04-09"
image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Markdown-mark.svg/200px-Markdown-mark.svg.png"
imageCaption: "The Markdown logo — a large M with a downward arrow."
infobox:
  _title: "Markdown"
  Created by: "John Gruber"
  Year: "2004"
  Extension: ".md, .markdown"
  MIME type: "text/markdown"
  Influenced by: "HTML, setext, atx"
---

**Markdown** is a lightweight markup language created in 2004 by John Gruber and Aaron Swartz. It allows people to write using an easy-to-read, easy-to-write plain text format that converts to structurally valid HTML.

Markdown is the primary markup language used in [[ReyesWiki|ReyesWiki]], as well as platforms like [[GitHub]], Reddit, Stack Overflow, and many more.

## Syntax

### Headings

Headings are created with `#` symbols:

```
# Heading 1
## Heading 2
### Heading 3
```

### Emphasis

```
**bold text**
*italic text*
~~strikethrough~~
```

### Lists

Unordered lists use `-` or `*`:

```
- Item one
- Item two
  - Nested item
```

Ordered lists use numbers:

```
1. First item
2. Second item
3. Third item
```

### Links and images

```
[link text](https://example.com)
![alt text](image-url.jpg)
```

### Code

Inline code uses backticks: `` `code` ``

Code blocks use triple backticks:

````
```python
def hello():
    print("Hello, world!")
```
````

### Tables

```
| Column 1 | Column 2 |
|----------|----------|
| Cell 1   | Cell 2   |
```

### Blockquotes

```
> This is a blockquote.
> It can span multiple lines.
```

## Wiki links

ReyesWiki extends standard Markdown with **wiki links**:

- `[[Article Name]]` — links to an article
- `[[Article Name|Display Text]]` — custom display text

## Variants

Several variants of Markdown exist, each adding features beyond the original spec:

- **CommonMark** — a strict, unambiguous specification
- **GitHub Flavored Markdown (GFM)** — adds tables, task lists, and strikethrough
- **MDX** — adds JSX components for React-based projects

ReyesWiki uses GitHub Flavored Markdown (GFM) via the `remark-gfm` plugin.

## See also

- [[Getting Started]] — how to write articles in this wiki
- [[Wikipedia]] — the other major wiki that uses similar markup
