---
title: Context Engineering
summary: The practice of managing what context an AI agent receives, how much, and when. Argued by practitioners like Owen Park to matter more than prompt engineering in 2025-2026. Relates closely to agent memory management.
categories:
  - Concepts
  - AI
lastModified: "2026-04-11"
infobox:
  _title: "Context Engineering"
  Type: "AI / agent design concept"
  Distinct from: "Prompt engineering"
  Source: "Conversation with [[stephen-mcgerty|Owen Park]], April 2026"
---

**Context engineering** is the practice of deliberately deciding how much context to give an AI agent, which context, and when to load it. The argument — articulated sharply by [[stephen-mcgerty|Owen Park]] in a conversation with Marcus in April 2026 — is that this has become the core skill in working with AI, surpassing prompt engineering in practical importance.

## The core idea

Prompt engineering focuses on how you phrase requests to an AI. Context engineering focuses on what information the AI has access to when it responds. The two are related but distinct. A well-crafted prompt with a badly managed context window will produce worse results than a mediocre prompt with the right context loaded at the right time.

The key variables:
- **How much context**: More is not better. Too much context dilutes output quality because the model has to weight and attend to more information, and token cost scales accordingly.
- **Which context**: Irrelevant context is worse than no context — it can bias or confuse the agent.
- **When to load it**: Context can be loaded lazily (only when needed) rather than all upfront. The MCP server pattern is one framework for this.

## Practical implications

**Start clean, not accumulative.** A fresh agent with targeted context often produces better output than continuing a long conversation that has accumulated drift. The agent in session 10 of a conversation is working with the biases and framings of sessions 1-9, whether you want it to or not.

**Markdown as memory layer.** For agents that need persistent knowledge, well-structured markdown files are the primary memory mechanism. They need to be written deliberately — what goes in, what stays out, and how it's organized all affect agent performance. See [[ai-agent-memory]].

**Lazy loading.** The MCP server pattern (Model Context Protocol) provides a framework for controlled tooling and skills — essentially a mechanism for loading only the context relevant to the current task, on demand, rather than frontloading everything.

## The orchestrator skill gap

Park's adjacent argument: the skill shortage isn't in prompt writing, it's in what he and Marcus called the orchestrator role. Developers need to move up one level of abstraction — from writing code to directing agents. That requires organizational thinking: roles, delegation, sequencing, memory architecture. It's closer to a product or engineering leadership skill than a programming skill, and it's not innate to most engineers.

## Geopolitical and security context

Two adjacent concerns that informed the conversation:

**Agent security**: Never give agents direct access to sensitive systems (email, databases). Marcus's practice — "agent mail," where agents have their own email address rather than direct inbox access — is one approach. Prompt injection (manipulating an agent through crafted inputs in the environment it's reading) remains the main unresolved security risk.

**Context window cost**: At scale, context management is also a cost management problem. Loading large, irrelevant context into every call is expensive and degrades output.

## See also

- [[ai-agent-memory|AI Agent Memory]]
- [[stephen-mcgerty|Owen Park]]
- [[claude|Claude]]
