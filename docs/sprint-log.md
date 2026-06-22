# Sprint Log

## Sprint 002

Goal:
Design the specification system.

Completed:

- Created the canonical specification schema in `specs/schema.md`.
- Created realistic example specifications for dentist, clinic, and lawyer projects in `specs/examples/`.
- Added a top-level `schema.md` file that points to the canonical schema and examples.
- Updated `docs/roadmap.md` with Sprint 002 status and deliverables.
- Defined a validation checklist to help future planner and QA work consume consistent project briefs.

Next:
Planner Skill Design

## Sprint 003

Goal:
Design the Planner Skill.

Completed:

- Replaced `skills/planner.md` with a full planner skill definition covering purpose, responsibilities, inputs, outputs, planning rules, task categories, prioritization rules, and constraints.
- Created `planner/task-schema.json` to define the canonical planner output structure.
- Created `planner/example-output.json` using the dentist specification as a realistic planning example.
- Created `docs/planning-process.md` to document the flow from specification to planning to task breakdown to specialized agents.
- Updated `docs/roadmap.md` with Sprint 003 status and deliverables.

Next:
Frontend Skill Design

## Sprint 004

Goal:
Define the core implementation skills that future agents will use.

Completed:

- Replaced `skills/astro.md` with Astro + TypeScript implementation guidance covering structure, component rules, performance, accessibility, best practices, and EPDC standards.
- Replaced `skills/supabase.md` with backend guidance covering database scope, authentication, security, migrations, and EPDC standards.
- Replaced `skills/seo.md` with implementation guidance covering technical SEO, local SEO, metadata, OpenGraph, structured data, sitemap, robots, and EPDC standards.
- Replaced `skills/qa.md` with release-oriented QA guidance covering functional, responsive, accessibility, performance, and SEO verification.
- Added `skills/content.md` to define content structure, page hierarchy, calls to action, service-page guidance, local-business content, and multilingual content rules.
- Added `docs/skills-architecture.md` to document the flow from specification to planner to tasks to skills to future agents.
- Updated `docs/roadmap.md` with Sprint 004 status and deliverables.

Next:
Agent Contract Design
