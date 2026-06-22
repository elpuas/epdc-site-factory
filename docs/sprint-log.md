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

## Sprint 007

Goal:
Create the first executable layer of the EPDC Site Factory through the Context Assembly Engine.

Completed:

- Added `context-engine/README.md` and `context-engine/context-schema.md` to define the context assembly layer and reusable package structure.
- Added realistic dentist-based context package examples in `context-engine/examples/frontend-context.md`, `context-engine/examples/backend-context.md`, and `context-engine/examples/seo-context.md`.
- Added `scripts/assemble-context.js` to simulate context assembly from local specification, planning, agent, and skill documents.
- Updated `package.json` with an `assemble-context` script entry.
- Added `docs/context-architecture.md` to document the flow from specification to planner to tasks to agent to skill to context assembly engine to context package.
- Updated `docs/roadmap.md` with Sprint 007 status and deliverables.

Next:
Execution Boundary Design

## Sprint 008

Goal:
Create the first working Prompt Builder.

Completed:

- Added `scripts/build-prompt.js` to read a context package, assemble a deterministic prompt, write it into `generated-prompts/`, and print the generated file path.
- Added final render templates in `prompt-builder/templates/` for frontend, backend, SEO, QA, and content prompts.
- Added `generated-prompts/README.md` and deterministic generated prompt output support.
- Added `docs/prompt-builder-architecture.md` and updated `prompt-builder/README.md` to reflect the working builder.

Dependencies added:

- None. The builder uses only the existing Node.js runtime and built-in modules.

Decisions made:

- The builder consumes markdown context packages rather than introducing a second context format.
- Prompt rendering uses static markdown templates with placeholder replacement.

Known limitations:

- Default standalone builds are currently configured for frontend, backend, and SEO.
- QA and content templates exist, but standalone example context files are not included at this layer.

Next:
Task Runner Foundation

## Sprint 009

Goal:
Create the Task Runner Foundation.

Completed:

- Added `task-runner/README.md` and `task-runner/task-runner-schema.md` to define the Task Runner layer and output contract.
- Added `task-runner/examples/task-run-output.json` as the deterministic example report for the example planner output.
- Added `scripts/run-tasks.js` to read `planner/example-output.json`, assemble task-specific context, build prompts, and write them into `generated-prompts/tasks/`.
- Extended `scripts/assemble-context.js` to support all planner categories through task-based context assembly.
- Updated `package.json` with an `npm run run-tasks` command.
- Added `docs/task-runner-architecture.md` to document the flow from planner output through context assembly and prompt building to task prompt files.

Dependencies added:

- None. The task runner uses only the existing Node.js runtime and built-in modules.

Decisions made:

- Task prompt file naming is deterministic and category-sequenced, such as `frontend-001.md`.
- The runner processes tasks in the same order they appear in the planner output.
- The runner reuses the context assembly and prompt builder layers instead of duplicating prompt-generation logic.

Known limitations:

- The task runner currently operates on `planner/example-output.json` only.
- Task prompt context is rendered from the current markdown context schema rather than a typed intermediate artifact format.
- The generated prompt files are deterministic build artifacts and are not yet routed to any execution surface.

Next:
Execution Boundary Design
