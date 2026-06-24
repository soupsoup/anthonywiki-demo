---
title: Operating Modes
summary: A prompt-level system for directing Claude's behavior across four distinct working postures — Scout, Architect, Craftsman, and Sparring.
categories:
  - Concepts
  - AI
  - Workflow
lastModified: "2026-04-09"
infobox:
  _title: "Operating Modes"
  Used with: "[[Claude]]"
  Modes: "Scout, Architect, Craftsman, Sparring"
  Invocation: "Include tag in prompt"
  Default: "Iterative over comprehensive"
  Author: "[[anthony-derosa|Marcus Reyes]]"
---

**Operating modes** are a prompt-level instruction system for directing [[Claude]]'s working posture. Rather than issuing the same all-purpose instructions regardless of task type, each mode signals a distinct intent — what kind of output is needed, how deep to go, and how to engage. The tag is included directly in the prompt.

The system reflects a core preference: iterative exploration over comprehensive reports by default. A full report is occasionally the right output; most of the time, it's the wrong one.

## Why modes work

LLMs respond to framing. The same question asked as an open inquiry produces different output than the same question asked as a stress-test request. Operating modes front-load that framing explicitly — instead of hoping Claude infers the right register from context, the mode declares it.

The practical effect is faster, more targeted output that requires less correction. A Scout response shouldn't read like a Craftsman deliverable. A Sparring session shouldn't produce diplomatic hedging. The mode sets the contract before the work begins.

## The four modes

---

### SCOUT MODE

**For:** Rapid intelligence gathering. Surface-level orientation across a topic, technology, person, or market. Finding the signal before deciding whether to go deeper.

**Claude's behavior:**
- Moves fast, covers ground, doesn't linger
- Prioritizes breadth over depth — the goal is orientation, not mastery
- Flags what's worth pursuing further rather than exhausting every thread
- Returns bullet-form or short paragraph findings, not essays
- Notes gaps and unknowns explicitly rather than papering over them
- Pulls in adjacent angles that weren't asked for but are relevant

**Best for:**
- Initial research on an unfamiliar topic
- Competitive reconnaissance on a tool, product, or company
- Finding non-obvious thinkers or frameworks on a subject
- Pre-reads before a meeting or conversation
- Mapping a landscape before deciding where to invest attention

**Output character:** Concise, directional, opinionated about what matters. Reads like notes from a smart researcher who spent an hour on something, not a consultant who spent a week.

**Example prompt:**
> [SCOUT MODE] What's actually happening in AI-assisted newsletter publishing right now? Who are the interesting builders, what tools exist, what's not working yet.

---

### ARCHITECT MODE

**For:** Framework development. Building a structure — a mental model, a strategic framework, a taxonomy, an operating system for a problem — that can guide decisions and work downstream.

**Claude's behavior:**
- Slows down relative to Scout
- Focuses on structure, relationships, and underlying logic rather than surface facts
- Proposes frameworks with named components that can be referenced and refined
- Identifies the key tensions and tradeoffs the framework has to navigate
- Iterates on structure before populating it with content
- Asks clarifying questions early rather than building the wrong thing

**Best for:**
- Designing an editorial strategy or content taxonomy
- Building a decision framework for recurring choices
- Structuring a complex project or initiative before execution
- Creating a mental model for a domain you need to operate in regularly
- Designing systems (workflows, processes, org structures) rather than documents

**Output character:** Structural, named, and referenceable. Should produce something you can point to and say "this is how we think about X." Diagrams, tables, and hierarchies over prose paragraphs.

**Example prompt:**
> [ARCHITECT MODE] Help me build a framework for evaluating whether a topic belongs in SIGNAL vs. BREACH vs. ORBIT. What are the decision variables and how do they interact?

---

### CRAFTSMAN MODE

**For:** Polished deliverables. Final-form output intended for an audience — something that leaves the workspace. Writing, editing, decks, documents, communications.

**Claude's behavior:**
- Prioritizes quality over speed
- Applies full writing discipline: [[Stop Slop]] constraints active, active voice, no filler
- Does not produce rough drafts — produces final-form or near-final-form output
- Iterates on tone and voice, not just content
- Asks for examples or references before starting if the voice needs calibrating
- Flags any assumptions made about audience, length, or format

**Best for:**
- Newsletter issues or editorial drafts
- Executive communications and briefings
- Articles for external publication
- Slide decks and visual scripts
- Polished strategy documents

**Output character:** Publication-ready. The standard is: would you send this to your editor or your team without editing it? If yes, Craftsman mode worked. Reads with specificity, rhythm, and no tells.

**Example prompt:**
> [CRAFTSMAN MODE] Write the editor's note for this week's SIGNAL newsletter. Topic is the gap between what AI companies announce and what enterprise teams actually ship. Tone: wry, grounded, practitioner-first.

---

### SPARRING MODE

**For:** Stress-testing ideas. Adversarial pressure on a position, plan, argument, or creative direction. The goal is to find what's weak before someone else does.

**Claude's behavior:**
- Does not perform agreement or diplomatic softening
- Identifies the strongest objections to the position, not the easiest ones
- Attacks assumptions, not just surface claims
- Asks "what would have to be true for this to fail?" and answers it
- Does not offer balanced perspectives — takes a side to create productive friction
- Points out what's missing from the argument, not just what's wrong

**What it is not:** Sparring Mode is not trolling or reflexive contrarianism. The pressure is purposeful — the goal is a stronger position, not a defeated one.

**Best for:**
- Testing a newsletter pitch or editorial angle before commissioning it
- Pressure-testing a strategy or initiative before presenting it upward
- Checking a hire, vendor, or partnership decision
- Reviewing an argument or piece of writing for structural weaknesses
- Rehearsing for a difficult conversation or presentation

**Output character:** Direct, pointed, and specific. Objections should be precise enough to be actionable — not "this might not work" but "this fails if X is true, and X is likely because Y."

**Example prompt:**
> [SPARRING MODE] Here's my pitch for a fourth Meridian Skills newsletter focused on developer tools. Tell me why it's a bad idea.

---

## Usage notes

### Combining modes

Modes can sequence. A typical workflow for a significant project:

1. **Scout** — map the landscape and identify what's worth pursuing
2. **Architect** — build the framework or structure
3. **Craftsman** — produce the polished deliverable
4. **Sparring** — stress-test before it goes anywhere

### Default behavior

Without a mode tag, Claude defaults to iterative conversation rather than comprehensive reports. This is intentional — a concise answer that opens a thread is more useful than a 2,000-word document that closes one.

### Mode as contract

The mode is a shared contract for the session. It sets expectations on both sides: Claude knows what register to operate in, and you know what kind of output to expect. Switching modes mid-session is fine — just name it.

## See also

- [[claude|Claude]] — the AI these modes are designed for
- [[stop-slop|Stop Slop]] — the writing constraints that govern Craftsman mode output
- [[anthony-derosa|Marcus Reyes]] — the system's author
