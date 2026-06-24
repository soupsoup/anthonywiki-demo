---
title: CLAUDE.md and AGENTS.md
summary: File-based memory for AI agents — structured Markdown files that give Claude and other AI tools persistent context across sessions without platform-managed memory.
categories:
  - Concepts
  - AI
  - Tools
lastModified: "2026-04-09"
infobox:
  _title: "CLAUDE.md / AGENTS.md"
  Type: "File-based memory pattern"
  Format: Markdown
  Works with: "Claude Code, Cursor, VS Code, API"
  Scope: "Project-level"
  Complements: "Claude native memory"
  Popularized by: "Hannah Stulberg, Anthropic docs"
---

**CLAUDE.md** and **AGENTS.md** are structured Markdown files that give AI coding agents persistent context across sessions. They solve the same problem as platform-managed memory — agents starting blind every time — but through a file in the project directory rather than a cloud service.

The pattern is simple: put a Markdown file in your project root, and any Claude session reading that directory picks up the context automatically. No configuration, no API, no special tooling.

## CLAUDE.md

A briefing file placed at a project root (or home directory) that [[Claude]] reads at the start of each session. Typically contains:

- **Who you are** — role, background, working style
- **What this project is** — purpose, architecture, current state
- **How you work** — preferences, conventions, things to avoid
- **Active context** — current tasks, open questions, recent decisions

The file travels with the project. Anyone (or any agent) who clones the repo and opens it gets the same context. It's institutional knowledge externalized into a file.

### Example structure

```markdown
# Project Context

## About me
VP of Newsletters at Meridian Skills. Focus: editorial quality, automation,
AI tools for content teams.

## This project
ReyesWiki — a personal encyclopedia running on Next.js.
Articles in /content/articles/ as Markdown with YAML frontmatter.

## Preferences
- Write in the voice defined in writing-preferences.md
- Use [[wiki links]] for cross-references between articles
- Keep article slugs lowercase-hyphenated

## Current focus
- Adding articles from tech-kb Obsidian vault
- Improving backlink coverage across all articles
```

## AGENTS.md

Aimed at multi-agent orchestration rather than single-session context. Where CLAUDE.md tells an agent about the project and user, AGENTS.md tells it about the agent ecosystem:

- Available tools and how to use them
- Workflow conventions for autonomous runs
- Inter-agent communication patterns
- What to do when blocked or uncertain

AGENTS.md is most relevant when running Claude in fully agentic mode — long-running autonomous tasks where the agent needs to know how to make decisions without interrupting the user.

## How it relates to other memory mechanisms

| Mechanism | Scope | Who controls it | Works offline |
|-----------|-------|-----------------|---------------|
| CLAUDE.md | Project | User | Yes |
| AGENTS.md | Multi-agent workflow | User | Yes |
| Native memory (Settings → Memory) | Account | Platform | No |
| RAG / vector store | Unlimited corpus | Developer | Depends |

CLAUDE.md and native memory are complementary, not competing. Native memory carries account-level preferences everywhere. CLAUDE.md carries project-specific context that varies per codebase or folder.

## Where it works

The pattern works in any interface that reads the file system:

- **Claude Code** — reads CLAUDE.md from project root automatically
- **Cursor / VS Code** — AI coding assistants pick it up
- **Claude.ai Projects** — upload as project knowledge
- **API** — include in system prompt manually
- **Cowork** — reads files from the connected folder

## The "no-code" angle

CLAUDE.md requires no development setup. Creating and maintaining a Markdown file is sufficient to give Claude meaningful, durable context. For non-developers using Claude for document work, research, or content operations, CLAUDE.md functions as a personal briefing document the AI always has available.

## Relationship to DESIGN.md

[[DESIGN.md]] completes the trilogy — three Markdown specification files that together define a project completely for an AI:

| File | Defines |
|------|---------|
| `CLAUDE.md` | How to build it (behavior, conventions) |
| `AGENTS.md` | How agents coordinate |
| `DESIGN.md` | How it should look (visual system) |

## See also

- [[claude|Claude]] — the primary tool that reads CLAUDE.md
- [[ai-agent-memory|AI Agent Memory]] — the broader persistence problem this addresses
- [[design-md|DESIGN.md]] — the visual counterpart to CLAUDE.md
- [[obsidian|Obsidian]] — markdown-as-memory at the PKM level
