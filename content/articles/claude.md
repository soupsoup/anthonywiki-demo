---
title: Claude
summary: Anthropic's AI assistant, available via web, API, mobile, and desktop — increasingly used as an ongoing collaborator with persistent memory and agentic capabilities.
categories:
  - AI
  - Tools
lastModified: "2026-04-09"
image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/1px-Nextjs-logo.svg.png"
infobox:
  _title: "Claude"
  Developer: Anthropic
  Released: "2023"
  Current models: "Opus 4, Sonnet 4, Haiku 4.5"
  Memory: "Settings → Memory (March 2026)"
  Interfaces: "Web, API, mobile, desktop (Cowork)"
  Website: "claude.ai"
---

**Claude** is an AI assistant developed by Anthropic, available via web chat, API, mobile app, and a desktop application called Cowork. As of early 2026, Claude has made significant moves into persistent memory and agentic workflows — shifting from a stateless conversational tool toward something closer to an ongoing collaborator.

[[anthony-derosa|Marcus Reyes]] uses Claude extensively across his work at [[pluralsight|Meridian Skills]] and for personal knowledge management, including as the engine behind [[ReyesWiki]].

## Model family

Anthropic releases Claude in three tiers targeting different use cases and cost points:

| Model | Positioning |
|-------|-------------|
| Claude Opus | Highest capability, complex reasoning |
| Claude Sonnet | Balanced capability and speed |
| Claude Haiku | Fast and lightweight |

## Memory

Stateless by default, Claude added two distinct memory systems. See also: [[AI Agent Memory]], [[CLAUDE.md and AGENTS.md]].

### Native memory (March 2026)

Anthropic launched a native memory feature in March 2026, accessible at **Settings → Memory**. Claude can now remember facts about the user across sessions — preferences, ongoing projects, context — without requiring users to re-establish it manually. The announcement drew 605K views on X, reflecting high pent-up demand.

- Managed at the account level by Anthropic
- Works across all Claude interfaces automatically
- No user-maintained files required

### File-based memory (CLAUDE.md / AGENTS.md)

A manual, file-based approach that predates native memory and remains complementary to it. Users maintain a structured Markdown file that Claude reads at the start of each session. See [[CLAUDE.md and AGENTS.md]] for the full pattern.

The two approaches cover different scopes: native memory is profile-level and follows you across projects; CLAUDE.md is project-level and travels with the codebase or folder.

## Interfaces

**Claude.ai** — the primary web interface. Supports Projects (persistent context), file uploads, and multi-modal input.

**API** — used by developers to integrate Claude into products and agents. The Claude Agent SDK enables building custom agentic workflows.

**Claude Code** — a terminal-based coding agent. Reads CLAUDE.md from the project root automatically.

**Cowork** — the desktop application, aimed at non-developers. Connects Claude to folders on the user's machine, enabling file management, document creation, and task automation. Powers [[ReyesWiki]].

**Mobile** — iOS and Android apps with voice and camera input.

## Agentic use

Claude is increasingly used as an agent — running multi-step tasks autonomously, using tools, reading and writing files, and browsing the web. Practical agentic workflows include:

- Tax prep and bookkeeping (processing PDFs, CSVs, and statements into organized workspaces)
- Research synthesis across large document sets
- Wiki and knowledge base management
- Code review, writing, and editing pipelines

The memory infrastructure — both native and file-based — is what makes these workflows durable. Without persistent context, every agent run starts blind.

## Skills

Claude supports a plugin-style system called **skills** — reusable instruction bundles that extend Claude's behavior for specific tasks. Skills are Markdown files following a defined format, installable in Claude Code or Cowork. Examples include [[Stop Slop]] (removing AI writing patterns) and design system skills.

## Cowork: desktop use case

A notable real-world use pattern: connecting Cowork to a folder of financial documents for tax preparation. Users reported saving 6–8 hours on bookkeeping by having Claude organize documents, reconcile discrepancies, generate P&L summaries, and produce a one-page accountant briefing — all from a folder of unstructured PDFs and CSVs.

## See also

- [[ai-agent-memory|AI Agent Memory]] — the persistence problem Claude's memory features address
- [[claude-md-agents-md|CLAUDE.md and AGENTS.md]] — file-based memory in practice
- [[stop-slop|Stop Slop]] — skill for removing AI writing patterns from Claude's output
- [[pluralsight|Meridian Skills]] — where Marcus uses Claude professionally
