---
title: DESIGN.md
summary: A plain-text design system file that AI coding agents read to generate consistent UI — analogous to CLAUDE.md for behavior, but for visual style.
categories:
  - Concepts
  - AI
  - Tools
lastModified: "2026-04-09"
infobox:
  _title: "DESIGN.md"
  Introduced by: "Google Stitch"
  Format: Markdown
  Reads by: "AI coding agents"
  Repository: "VoltAgent/awesome-design-md"
  Analogous to: "CLAUDE.md, AGENTS.md"
---

**DESIGN.md** is a plain-text design system specification that AI coding agents read to generate visually consistent UI. The concept was introduced by Google Stitch — it sits alongside [[CLAUDE.md and AGENTS.md|CLAUDE.md]] (which governs agent behavior) and AGENTS.md (which governs multi-agent orchestration), completing a trifecta of Markdown files that define how an AI should build a project:

| File | Read by | Defines |
|------|---------|---------|
| `CLAUDE.md` | Coding agents | How to build the project |
| `AGENTS.md` | Agent orchestrators | How agents should coordinate |
| `DESIGN.md` | Design agents | How the project should look and feel |

The format is deliberately plain Markdown — no Figma exports, no JSON schemas, no special tooling. Drop it in your project root and any AI coding agent instantly understands the visual language.

## What a DESIGN.md contains

Each file follows the Stitch DESIGN.md format with standard sections:

| Section | What it captures |
|---------|-----------------|
| Visual Theme & Atmosphere | Mood, density, design philosophy |
| Color Palette & Roles | Semantic name + hex + functional role |
| Typography Rules | Font families, full type hierarchy |
| Component Stylings | Buttons, cards, inputs, navigation — with states |
| Layout Principles | Spacing scale, grid, whitespace philosophy |
| Depth & Elevation | Shadow system, surface hierarchy |
| Do's and Don'ts | Design guardrails and anti-patterns |
| Responsive Behavior | Breakpoints, touch targets, collapsing strategy |
| Agent Prompt Guide | Quick color reference, ready-to-use prompts |

## awesome-design-md

VoltAgent maintains an open-source repository of pre-built DESIGN.md files extracted from real websites: **VoltAgent/awesome-design-md** on GitHub. The collection covers 50+ sites across AI tools, developer platforms, infrastructure, design tools, fintech, and consumer brands.

Selected entries:

- **Claude** — warm terracotta accent, clean editorial layout
- **Vercel** — black and white precision, Geist font
- **Linear** — ultra-minimal, precise, purple accent
- **Stripe** — signature purple gradients, weight-300 elegance
- **Notion** — warm minimalism, serif headings, soft surfaces
- **Raycast** — sleek dark chrome, vibrant gradient accents
- **Obsidian** — (if present) note-taking aesthetic

Each site in the repo includes a `DESIGN.md`, a `preview.html` visual catalog, and a `preview-dark.html` dark mode version.

## Usage

1. Copy a site's `DESIGN.md` into your project root
2. Tell your AI agent: "Build me a page that looks like this"
3. The agent reads the design tokens and generates UI matching the style

For custom use cases, you can commission a new DESIGN.md by opening a GitHub issue on the repo, or write one from scratch describing your own visual system.

## Why it matters

Before DESIGN.md, getting an AI coding agent to produce consistent UI required repeating design rules in every prompt — or accepting generic output. DESIGN.md externalizes that visual knowledge into a reusable, versionable file. The same Markdown-as-specification pattern that makes CLAUDE.md effective for behavior works here for aesthetics.

## See also

- [[claude-md-agents-md|CLAUDE.md and AGENTS.md]] — the parallel pattern for agent behavior
- [[claude|Claude]] — the agent that reads and acts on these files
