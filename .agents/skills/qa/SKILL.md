---
name: qa
description: Use when a task involves EPDC validation or review work, including specification coverage, functional checks, responsive review, accessibility review, SEO verification, release readiness, and structured findings.
---

# QA Skill

## When To Use

Use this skill when the task involves:

- release-readiness review
- acceptance-criteria validation
- functional testing expectations
- responsive, accessibility, performance, or SEO verification
- structured review findings

Do not use this skill for:

- creating new implementation scope
- content authoring or frontend implementation work
- backend system design unless the goal is review

## Required Context

- `AGENTS.md`
- `specs/schema.md`
- the active project specification
- the assigned planner task
- implementation artifacts or generated files under review
- `agents/qa.md` when the QA agent contract is in play
- supporting Astro, SEO, and content skills when cross-domain review is needed

## Instructions

1. Validate against the specification, task scope, and implementation standards first.
2. Confirm required pages, sections, CTAs, and integrations exist where expected.
3. Review responsive behavior on core page types and conversion-critical surfaces.
4. Review accessibility fundamentals: semantics, headings, keyboard access, labels, and focus states.
5. Review obvious performance risks, especially unnecessary hydration or heavy third-party surfaces.
6. Confirm metadata, sitemap, robots, structured data, and local-business consistency where they are in scope.
7. Write findings so they are explicit, reproducible, and tied to a requirement or standard.
8. State release readiness clearly: approved, rejected, or retry recommended.

## Constraints

- Do not validate against personal taste.
- Do not sign off on missing required scope.
- Do not collapse multiple issues into vague feedback.
- Do not redefine the project while reviewing it.
- Do not ignore conversion-critical, accessibility-critical, or consistency-critical issues.

## EPDC Standards

- Findings must be explicit, reproducible, and traceable to requirements or standards.
- Conversion-critical issues take precedence over cosmetic refinements.
- Cross-page consistency is a release requirement for business details and CTAs.
- Review functional, responsive, accessibility, performance, and SEO concerns before approval.
- Release readiness must be stated clearly.

## References

- `agents/qa.md`
- `specs/schema.md`
- `docs/planning-process.md`
- `prompts/qa.md`
