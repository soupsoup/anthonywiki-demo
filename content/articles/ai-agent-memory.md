---
title: AI Agent Memory
summary: The problem of persistent state in LLM-based agents — how to give AI systems memory that survives beyond a single session.
categories:
  - Concepts
  - AI
lastModified: "2026-04-09"
infobox:
  _title: "AI Agent Memory"
  Type: Concept
  Core problem: Stateless LLMs
  Key mechanisms: "File-based, native, RAG, fine-tuning"
  Related tools: "[[Claude]], [[Obsidian]]"
---

**AI agent memory** refers to the mechanisms that allow LLM-based agents to retain information across sessions. By default, LLMs are stateless — every conversation starts from a blank context window. For casual chat, users can re-establish context manually. For agentic workflows, that's a hard constraint: an agent that can't remember what it did yesterday can't accumulate knowledge, build on prior work, or adapt to a user's preferences over time.

Memory is increasingly treated as foundational infrastructure for the next generation of AI tools — not a nice-to-have but a prerequisite for agents doing serious, ongoing work.

## The memory stack

There are several distinct layers where persistence can live, each with different scope, control, and tradeoffs:

| Layer | Mechanism | Scope | Controlled by |
|-------|-----------|-------|---------------|
| In-context | System prompt, conversation history | Session only | Developer |
| File-based | [[CLAUDE.md and AGENTS.md\|CLAUDE.md]], AGENTS.md, wiki files | Project / long-term | User |
| Native platform | Settings → Memory (Claude, ChatGPT) | Account-level | Platform |
| External store | RAG, vector DB, knowledge graph | Unlimited | Developer |
| Fine-tuning | Model weights | Permanent | Developer |

Most real agent workflows combine layers: file-based context for project knowledge, native memory for user preferences, and RAG for large document corpora.

## Emerging patterns

### Markdown-as-memory

Storing agent memory as plain `.md` files is gaining traction because Markdown is human-readable, version-controllable, diff-friendly, and LLM-native. [[CLAUDE.md and AGENTS.md|CLAUDE.md]] is the clearest example — a structured briefing document the agent reads at session start. The same pattern appears in tools like [[Obsidian]] used as a personal knowledge base that an agent can query and update.

### Personal knowledge bases as shared memory

Users building wiki-style knowledge stores create something closer to a shared working memory between human and agent. The wiki becomes a persistent context layer neither party has to reconstruct from scratch. This is the model behind [[ReyesWiki]] itself — and behind the `tech-kb` Obsidian vault it draws from.

### Hierarchical memory

Separating short-term (session), medium-term (project), and long-term (account) memory into distinct stores with different update frequencies. Each layer has a different freshness expectation and different update cost.

### Ambient learning

Tools like [[Pattrns]] take a different approach: instead of explicit memory files the user maintains, an ambient intelligence layer watches user actions and infers preferences automatically — learning taste through behavior rather than declaration.

## Open problems

**Memory decay** — when to forget stale information. A fact that was true six months ago may now be wrong. Most current implementations have no automatic expiry or staleness detection.

**Memory conflict** — handling contradictions across memory sources. If the file says one thing and the native memory says another, which wins? Current systems mostly leave this to the user to manage.

**Memory privacy** — what the platform retains vs. what the user controls. File-based approaches give full user control; native platform memory hands retention decisions to the provider.

**Retrieval accuracy** — knowing which memory is relevant to a given query. With small memory stores this is trivial; at scale it becomes a hard retrieval problem, which is why external vector stores and RAG exist.

## See also

- [[claude|Claude]] — Claude's native memory + CLAUDE.md approach
- [[claude-md-agents-md|CLAUDE.md and AGENTS.md]] — the file-based memory pattern
- [[pattrns|Pattrns]] — ambient memory through behavioral observation
- [[obsidian|Obsidian]] — markdown-as-memory in practice
