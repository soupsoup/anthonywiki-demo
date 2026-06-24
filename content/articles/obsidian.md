---
title: Obsidian
summary: A local-first, Markdown-based personal knowledge management tool used as the backbone of the tech-kb knowledge base.
categories:
  - Tools
  - PKM
lastModified: "2026-04-09"
infobox:
  _title: "Obsidian"
  Developer: Dynalist Inc.
  Type: "Personal knowledge management"
  Format: Markdown (.md)
  Storage: Local-first
  Sync: "Native (paid) or free alternatives"
  Website: "obsidian.md"
  Used for: "tech-kb knowledge base"
---

**Obsidian** is a local-first note-taking and personal knowledge management (PKM) application. Notes are stored as plain Markdown files on your computer — no proprietary format, no cloud lock-in. A graph view shows links between notes. Plugins extend the core with databases, canvas views, calendars, and more.

The `tech-kb` knowledge base at `~/Documents/tech-kb` — the source vault for many articles in [[ReyesWiki]] — runs on Obsidian.

## Why local-first matters

Unlike Notion or Roam, Obsidian stores everything as plain `.md` files in a folder you own. Consequences:

- Files are readable, searchable, and processable by any tool — including AI agents
- Version control with Git works natively
- No vendor lock-in: if Obsidian disappeared tomorrow, your notes remain intact
- AI agents like [[Claude]] can read, update, and reason over the vault directly

This makes Obsidian a natural fit for [[AI Agent Memory|markdown-as-memory]] workflows: the vault becomes a persistent context store that both human and AI can read and write.

## Core features

**Backlinks** — every note shows what links to it, mirrored in [[ReyesWiki]]'s own backlink system.

**Graph view** — visual map of note connections across the vault.

**Dataview plugin** — query notes like a database using inline metadata and a SQL-like syntax.

**Canvas** — freeform visual workspace for spatial note-taking and diagramming.

**Templates** — standardized note structures (the `tech-kb` raw notes use a consistent frontmatter schema).

**Community plugins** — 1,000+ community-built extensions.

## Sync across devices

Obsidian's native Sync costs ~$10/month. Several free alternatives work well:

| Method | Best for | Notes |
|--------|----------|-------|
| iCloud Drive | Mac + iOS | Zero config if vault is in Documents folder |
| Git + Working Copy | Any + iOS | Version-controlled, audit-trailable |
| Syncthing | Any | P2P, no cloud middleman |
| Google Drive / OneDrive | Windows + Android | Simple folder sync |

The `tech-kb` vault lives in `~/Documents/tech-kb`. On a Mac with iCloud Drive syncing the Documents folder, sync to iPhone and iPad is already handled with no additional configuration.

## The tech-kb structure

```
tech-kb/
├── wiki/
│   ├── _index.md         # Master index of all articles
│   ├── concepts/         # Frameworks and abstract ideas
│   ├── tools/            # Software, APIs, platforms
│   ├── people/           # Researchers, founders, builders
│   └── trends/           # Movements and patterns
└── raw/                  # Unprocessed clippings and source material
```

The `raw/` folder holds captured threads, videos, and product pages. The `wiki/` folder holds processed articles distilled from those sources. [[ReyesWiki]] is a downstream publication of this material.

## Relationship to ReyesWiki

The two systems serve different purposes. Obsidian is the private working environment — fast capture, rough notes, unprocessed clippings. ReyesWiki is the published layer — polished articles, cross-linked, shareable. Material flows from `raw/` in the vault → processed `wiki/` notes → ReyesWiki articles.

## See also

- [[ai-agent-memory|AI Agent Memory]] — Obsidian as a markdown-as-memory implementation
- [[claude|Claude]] — AI agent that can read and update the vault
- [[claude-md-agents-md|CLAUDE.md and AGENTS.md]] — file-based memory pattern in the same spirit
