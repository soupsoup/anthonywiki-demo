---
title: Stop Slop
summary: A skill that teaches AI models to catch and remove predictable AI writing patterns from prose.
categories:
  - Tools
  - AI
  - Writing
lastModified: "2026-04-09"
infobox:
  _title: "Stop Slop"
  Author: "External contributor"
  Type: "Claude skill / system prompt"
  Source: "Open-source prompt engineering skill"
  License: MIT
  Used by: "[[anthony-derosa|Marcus Reyes]]"
---

**Stop Slop** is a skill file created by a prompt-engineering writer that trains AI models — primarily [[Claude]] — to identify and remove the predictable patterns that mark text as AI-generated. It is installed in [[anthony-derosa|Marcus Reyes]]'s Claude configuration and actively shapes how Claude writes for him.

The core insight: AI models develop recognizable habits. Certain phrases, sentence structures, and rhetorical moves appear so consistently across AI-generated text that readers pattern-match them immediately. Stop Slop catalogs these tells and instructs the model to avoid them.

## What it catches

### Phrases

**Throat-clearing openers** — announcements before the actual point. "Here's the thing:", "The uncomfortable truth is", "It turns out", "Let me be clear". These delay the content without adding to it.

**Emphasis crutches** — fake finality. "Full stop.", "Let that sink in.", "Make no mistake". They signal importance rather than demonstrating it.

**Business jargon** — words that substitute for precision. "Navigate challenges", "unpack", "lean into", "landscape", "game-changer", "deep dive", "circle back".

**Adverbs** — all of them. "Really", "just", "literally", "genuinely", "honestly", "simply", "actually", "deeply", "fundamentally", "inherently". The rule is categorical.

**Vague declaratives** — sentences that assert significance without showing it. "The implications are significant." "The reasons are structural." If a sentence says something matters without naming the specific thing, it gets cut.

### Structures

**Binary contrasts** — "Not X. But Y." / "It's not about X, it's about Y." / "The answer isn't X. It's Y." The negation exists only to set up the reveal. Cut to Y directly.

**Negative listings** — listing what something isn't before revealing what it is. "Not a tool. Not a framework. A philosophy." State the thing.

**Dramatic fragmentation** — short punchy fragments stacked for effect. "Speed. That's it. That's the game." Complete sentences, trust the content.

**False agency** — inanimate things performing human actions. "The complaint becomes a fix." "The decision emerges." "The market rewards." Name the person doing the thing.

**Passive voice** — "Mistakes were made." Find the actor.

**Wh- sentence starters** — sentences beginning with What, When, Where, Which, Who, Why, How. Restructure to lead with the subject.

## Scoring system

Stop Slop includes a 1–10 scoring rubric across five dimensions:

| Dimension | Question |
|-----------|----------|
| Directness | Statements or announcements? |
| Rhythm | Varied or metronomic? |
| Trust | Respects reader intelligence? |
| Authenticity | Sounds human? |
| Density | Anything cuttable? |

Below 35/50: revise.

## Structure

The skill is a folder of Markdown files installable in Claude Code, Claude Projects, or as a system prompt:

```
stop-slop/
├── SKILL.md         # Core rules
├── references/
│   ├── phrases.md   # Banned phrases
│   ├── structures.md # Structural patterns to avoid
│   └── examples.md  # Before/after transformations
```

## How Marcus uses it

Stop Slop is embedded in the system-level writing preferences that govern every Claude interaction. It shapes output at the instruction level — Claude doesn't produce a draft and then run it through a checker; the constraints are applied during generation. The result is prose that reads more direct, more specific, and less like something that came out of a language model.

The writing preferences also include specific [[operating modes]] (SCOUT MODE, ARCHITECT MODE, CRAFTSMAN MODE, SPARRING MODE) and voice guidelines calibrated to executive-level communication.

## See also

- [[claude|Claude]] — the model Stop Slop is primarily designed for
- [[anthony-derosa|Marcus Reyes]] — uses Stop Slop as a permanent writing constraint
