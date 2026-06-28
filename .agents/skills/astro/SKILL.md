---
name: astro
description: Use when a task involves EPDC frontend implementation planning or execution in Astro and TypeScript, including route structure, layouts, shared components, page composition, project bootstrap, or static-first frontend decisions.
---

# Astro Skill

## When To Use

Use this skill when the task involves:

- Astro page or route structure
- layout boundaries
- shared frontend components
- project bootstrap for a generated Astro site
- static-first rendering decisions
- frontend implementation constraints that affect accessibility, performance, or content structure

Do not use this skill for:

- backend-only data handling or authentication design
- SEO-only analysis that does not affect page structure
- content-only hierarchy work that does not require frontend structure decisions

## Required Context

Load the minimum relevant context before acting:

- `AGENTS.md`
- `specs/schema.md`
- the active project specification
- the assigned planner task
- `agents/frontend.md` when a frontend agent contract is in play
- `docs/planning-process.md` when task interpretation depends on planning boundaries
- `docs/astro-starter.md` when starter ownership or bootstrap boundaries matter
- `blueprints/` or `starters/` assets when the task touches reusable implementation layers

## Instructions

1. Start from the specification and assigned task, not from generic Astro habits.
2. Keep the project static-first unless the specification explicitly requires interaction.
3. Map planned pages directly to readable route files under `src/pages/`.
4. Introduce `src/layouts/` as soon as multiple public pages need shared shell behavior.
5. Use `src/components/` only for real repetition or clearly shared UI responsibilities.
6. Keep shared business facts in typed `src/data/` modules when multiple pages consume them.
7. Keep page composition easy to scan; do not hide simple page-specific structure behind unnecessary abstractions.
8. Use semantic HTML, visible focus states, and consistent heading hierarchy by default.
9. Prefer CSS and native browser behavior before adding client-side JavaScript.
10. Surface missing business facts as explicit TODOs or reporting notes instead of inventing them.

## Constraints

- Do not create or expand project scope beyond the assigned task.
- Do not assume client hydration is acceptable unless the specification supports it.
- Do not hardcode business facts that should come from shared project data.
- Do not introduce speculative framework folders or abstractions.
- Do not absorb backend, SEO, or content ownership when the task only requires frontend structure.

## EPDC Standards

- Keep frontend implementation static-first unless the specification clearly requires richer behavior.
- Keep shared CTAs consistent across conversion-critical pages.
- Keep contact information consistent across all relevant pages.
- Favor simple, auditable architecture over clever abstractions.
- Keep content, presentation, and utility logic clearly separated.

## References

- `agents/frontend.md`
- `docs/astro-starter.md`
- `blueprints/dentist/README.md`
- `starters/astro-minimal/README.md`
- `specs/schema.md`
