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

## Sprint 005

Goal:
Define the first production-ready agent contracts.

Completed:

- Replaced the placeholder documents in `agents/planner.md`, `agents/frontend.md`, `agents/backend.md`, `agents/seo.md`, and `agents/qa.md` with full agent contracts.
- Added `agents/content.md` to define the new Content Agent contract.
- Converted `AGENTS.md` into the central agent registry with links to each specialized definition.
- Created `docs/agent-architecture.md` to document the flow from specification to planner agent to task breakdown to specialized agents to outputs.
- Updated `docs/roadmap.md` with Sprint 005 status and deliverables.

Next:
Orchestration Contract Design

## Sprint 006

Goal:
Design the Prompt Generation Layer.

Completed:

- Added prompt templates for Planner, Frontend, Backend, SEO, QA, and Content agents in `prompts/`.
- Added `prompt-builder/README.md` and `prompt-builder/prompt-schema.md` to define prompt assembly inputs and the reusable prompt structure.
- Added realistic dentist-based prompt examples in `prompt-builder/examples/frontend-prompt.md`, `prompt-builder/examples/backend-prompt.md`, and `prompt-builder/examples/seo-prompt.md`.
- Added `docs/prompt-architecture.md` to document the flow from specification to planner to tasks to agent to skill to prompt builder to Codex.
- Updated `docs/roadmap.md` with Sprint 006 status and deliverables.

Next:
Prompt Routing Design
