---
title: Pattrns
summary: A visual AI interface for parallel knowledge work, with an ambient intelligence layer called Dots that learns your taste through actions rather than declarations.
categories:
  - AI
  - Tools
  - PKM
lastModified: "2026-04-09"
infobox:
  _title: "Pattrns"
  Creator: "Divya Ranjan (@divyaranjan_)"
  AI layer: "Dots"
  Powered by: "Anthropic Agent SDK"
  Storage: "Local (privacy-first)"
  Status: "Invite-only beta (as of Apr 2026)"
  Platform: "Mac only (initially)"
---

**Pattrns** is a visual AI interface for knowledge work, built by Divya Ranjan. It runs parallel work sessions in visual threads — similar to how the brain handles multiple active contexts — alongside an ambient intelligence layer called **Dots** that learns user preferences through observation rather than explicit instruction.

The product addresses a problem Ranjan identified in his own workflow: AI had made him 10x faster, but constant context-switching across tools was making the cognitive load unsustainable. More AI output daily than any brain could process, and no interface that connected the dots automatically.

## Core concepts

### Visual threads

Instead of a single linear chat, Pattrns presents work as parallel visual threads — research in one board, brainstorming in another, execution in a third. You switch between them instantly. Each thread maintains its own context, so the AI already knows what each board is about from the cards, structure, and history within it. No re-explaining when you switch contexts.

### Dots: ambient intelligence

Dots is the persistent intelligence layer underneath Pattrns. The key distinction from other memory systems is *how* it learns: through actions, not words.

Rather than asking users to declare preferences ("I like concise answers", "always use bullet points"), Dots watches what users curate, engage with, correct, and build on — and infers taste from that behavioral signal. The model is borrowed from PageRank: content you return to ranks higher in Dots' understanding of what matters to you.

This is tracked in a board called **"Me"** — an auto-organized, constantly-updated memory graph of who you are and what you care about. Users can see it, edit it, and chat with it directly.

### Local-first privacy

Everything stays local — conversations are JSONL files, Git tracks history, and nothing is stored online. The vault is literally a folder you own. Ranjan frames this as a mission statement, not a feature: "your brain is a folder you own."

## Onboarding

Day one: import past AI chats (Claude, ChatGPT) and notes (Apple Notes, Notion, Evernote). Dots reads through everything, builds the initial Me board, resolves conflicts, and has working context from the start.

Week one: work across multiple project boards simultaneously. AI stays oriented to each because it sees the cards and structure in each thread.

Month one: Dots has observed enough to know specifics — in a given project, you hate rounded corners; when debugging, you prefer logs over breakpoints. Every correction teaches it. Every card sharpens its model of you.

## Technical layer

Pattrns is powered by Anthropic's Agent SDK. Users can bring their own MCPs (Model Context Protocol connectors) and build custom skills — if a skill doesn't exist, Dots can help create it. Repeated tasks get flagged automatically as candidates for skill automation.

Conversations support Slack-style reply threads for drilling into thoughts without losing the main thread, and a TLDR button for catching up in seconds.

## The Karpathy connection

Ranjan launched Pattrns in response to Andrej Karpathy's viral post about using LLMs to build personal knowledge bases. Karpathy's framing: "AI made you faster. Your brain didn't get bigger." Pattrns is an attempt at an interface designed for that asymmetry — one that handles organization automatically so the human can focus on thinking and creating.

## Positioning

Ranjan distinguishes two types of AI power users:

1. Those who want fully autonomous agents — give a prompt, get a result
2. Those who sit with the AI, plan, and execute step by step so their exact taste makes it into the output

Pattrns is built for the second group.

## See also

- [[ai-agent-memory|AI Agent Memory]] — the persistence problem Dots addresses through ambient learning
- [[obsidian|Obsidian]] — another local-first approach to knowledge management
- [[claude|Claude]] — the underlying model powering Pattrns via the Agent SDK
