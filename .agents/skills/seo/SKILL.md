---
name: seo
description: Use when a task involves EPDC SEO planning or execution, including metadata, local SEO, sitemap coverage, robots rules, structured data, page-intent alignment, or crawlability requirements.
---

# SEO Skill

## When To Use

Use this skill when the task involves:

- page metadata
- OpenGraph or social preview metadata
- structured data
- sitemap or robots behavior
- local SEO consistency
- page-intent mapping that affects route or page design

Do not use this skill for:

- backend infrastructure work unrelated to discoverability
- content-only drafting that does not affect search intent or local targeting
- frontend implementation that has no SEO consequence

## Required Context

- `AGENTS.md`
- `specs/schema.md`
- the active project specification
- the assigned planner task
- `agents/seo.md` when the SEO agent contract is in play
- frontend or content context when SEO depends on visible structure or messaging
- `prompts/seo.md` when task-level prompt guidance matters

## Instructions

1. Start from the visible business model, page set, and local footprint in the specification.
2. Make every public page crawlable, purposeful, and differentiated by intent.
3. Keep metadata unique and aligned with visible page content.
4. Keep business identity, address, phone, hours, and service-area signals consistent wherever they appear.
5. Use structured data types that match the real business model and visible content.
6. Keep sitemap coverage aligned to actual public pages.
7. Use robots rules intentionally; do not let defaults hide important pages.
8. Coordinate with frontend and content decisions when route structure, headings, or copy affect search intent.
9. Flag missing business facts instead of inventing local or trust signals.

## Constraints

- Do not fabricate locations, reviews, service areas, or authority signals.
- Do not create duplicate intent pages without a clear strategy.
- Do not separate metadata from visible content truth.
- Do not inflate schema types for speculative ranking gains.
- Do not treat SEO as isolated from content or frontend structure.

## EPDC Standards

- SEO work must trace directly back to the specification and planner tasks.
- Local targeting must reflect real business locations or service areas.
- Metadata should be unique on every public page and aligned with on-page content.
- Structured data must be accurate, visible, and business-specific.
- Sitemap and robots behavior should be reviewed as part of every launch checklist.

## References

- `agents/seo.md`
- `prompts/seo.md`
- `specs/schema.md`
- `docs/planning-process.md`
