---
title: Iterable
summary: Email marketing and automation platform. Meridian Skills migrated its industry newsletters from Mailchimp to Iterable in late March/early April 2026. Now the primary sending infrastructure for Prompt, Scale, and Exploit.
categories:
  - Tools
  - Meridian Skills
lastModified: "2026-04-11"
infobox:
  _title: "Iterable"
  Type: "Email marketing platform"
  Used by: "Meridian Skills newsletter team"
  Migrated from: "Mailchimp"
  Migration date: "April 2026"
---

**Iterable** is the email marketing and automation platform Meridian Skills migrated to from Mailchimp in late March/early April 2026. It is now the sending infrastructure for all three Meridian Skills industry newsletters: [[prompt-pluralsight|SIGNAL]], [[scale-pluralsight|ORBIT]], and [[exploit-pluralsight|BREACH]].

## Migration

Subscriber migration from Mailchimp was handled by the platform's migration support team, with a walkthrough of the new platform in March 2026. The target migration date slipped slightly due to vacations; the actual migration completed before April 1.

## How it works for newsletters

Each newsletter type (AI, cloud, cybersecurity) has its own template folder and message channel within the single "Meridian Skills Industry Newsletters" channel structure. Subscribers can unsubscribe from individual newsletters or the entire channel. Subscriber lists are segmented by newsletter type and by Meridian Skills vs. external subscribers.

Campaign creation starts by cloning from a template folder. The template mirrors the current newsletter format: top weekly briefing sections, article titles with CTAs, course highlights, quote of the week, reading recommendations, and a survey section.

**Drafting workflow**: Continue using Google Docs for drafting and QA. Use Shift+Cmd+V when pasting into Iterable to strip formatting. Font standard: 14pt, color #555.

## Key features

- **A/B testing**: Subject line, pre-header, from name, email body, send time. Recommended approach: 10% variant A, 10% variant B, 80% gets the winner after a set test period
- **Analytics**: Messaging Insights dashboard, heat maps, campaign-by-campaign performance, audience retention data. UTM parameters flow to Tableau and Adobe Analytics
- **Scheduling**: Project timezone (Central Time) or recipient timezone
- **Welcome journey**: Configured to trigger for new subscribers with a 5-minute delay
- **Alerts**: Configurable for unusual open/bounce/unsubscribe rates

## Limitations

- No collaborative editing or suggestion mode (unlike Google Docs) — continue drafting externally
- No HTML customization
- No "last five issues" link feature
- Dark mode rendering handled by email clients, not the platform

## See also

- [[prompt-pluralsight|SIGNAL]]
- [[scale-pluralsight|ORBIT]]
- [[exploit-pluralsight|BREACH]]
- [[newshub|Meridian Wire]]
