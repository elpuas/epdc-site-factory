---
name: content
description: Use when a task involves EPDC content planning or execution, including page hierarchy, messaging structure, CTA placement, service-page organization, local-business content, or multilingual content requirements.
---

# Content Skill

## When To Use

Use this skill when the task involves:

- page messaging structure
- CTA design and placement
- service-page content patterns
- local-business content consistency
- multilingual content requirements
- page-level content hierarchy that affects implementation

Do not use this skill for:

- frontend structure decisions that do not depend on content requirements
- backend scope, data storage, or integration behavior
- SEO-only technical implementation without messaging or page-purpose impact

## Required Context

- `AGENTS.md`
- `specs/schema.md`
- the active project specification
- the assigned planner task
- `agents/content.md` when the content agent contract is in play
- `prompts/content.md` when task-level prompt guidance matters
- supporting frontend or SEO context when page hierarchy depends on those surfaces

## Instructions

1. Start from the specification, sitemap, and page purpose.
2. Give each page one primary conversion or informational objective.
3. Structure content in a scannable order: context, value, proof, detail, action.
4. Keep CTA wording specific to the business action the user should take.
5. Keep business name, address, phone, hours, and operational details consistent across surfaces.
6. Keep service pages focused on one user intent when search or conversion clarity depends on it.
7. Preserve multilingual meaning and operational accuracy when multiple languages are required.
8. Use placeholders or TODOs for missing business facts rather than inventing claims, testimonials, or credentials.
9. Coordinate with SEO and frontend constraints when content decisions affect metadata, page structure, or local targeting.

## Constraints

- Do not invent business claims, trust signals, service areas, or testimonials.
- Do not replace clear CTAs with generic marketing filler.
- Do not treat multilingual support as partial if the specification promises it.
- Do not absorb frontend ownership while defining content structure.
- Do not approve page-ready content when critical operational facts are still unknown unless the task explicitly allows placeholders.

## EPDC Standards

- Content must map directly to the specification and planned page structure.
- Primary conversion pages should combine clarity, trust, and a visible next step.
- Service pages should follow repeatable patterns without becoming generic.
- Local-business content should be specific, accurate, and operationally useful.
- Multilingual support must be complete wherever promised.

## References

- `agents/content.md`
- `prompts/content.md`
- `specs/schema.md`
- `docs/planning-process.md`
