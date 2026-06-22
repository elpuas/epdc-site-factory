# Sprint Log

## Sprint 002

Goal:
Design the specification system.

Completed:

- Created the canonical specification schema in `specs/schema.md`.
- Created realistic example specifications for dentist, clinic, and lawyer projects in `specs/examples/`.
- Added a top-level `schema.md` entrypoint for the canonical schema.
- Updated `docs/roadmap.md`.

Next:
Planner Skill Design

## Sprint 003

Goal:
Design the Planner Skill.

Completed:

- Added `skills/planner.md`.
- Added `planner/task-schema.json`.
- Added `planner/example-output.json`.
- Added `docs/planning-process.md`.
- Updated `docs/roadmap.md`.

Next:
Core Skills Foundation

## Sprint 004

Goal:
Define the core implementation skills that future agents will use.

Completed:

- Added implementation guidance for Astro, Supabase, SEO, QA, and Content.
- Added `docs/skills-architecture.md`.
- Updated `docs/roadmap.md`.

Next:
Agent Definitions

## Sprint 005

Goal:
Define the first production-ready agent contracts.

Completed:

- Added full contracts for Planner, Frontend, Backend, SEO, QA, and Content agents.
- Converted `AGENTS.md` into the central registry.
- Added `docs/agent-architecture.md`.
- Updated `docs/roadmap.md`.

Next:
Prompt Generation Layer

## Sprint 006

Goal:
Design the Prompt Generation Layer.

Completed:

- Added prompt guidance documents in `prompts/`.
- Added `prompt-builder/README.md` and `prompt-builder/prompt-schema.md`.
- Added realistic dentist-based prompt examples in `prompt-builder/examples/`.
- Added `docs/prompt-architecture.md`.
- Updated `docs/roadmap.md`.

Next:
Context Assembly Engine

## Sprint 007

Goal:
Create the first executable layer of the EPDC Site Factory through the Context Assembly Engine.

Completed:

- Added `context-engine/README.md` and `context-engine/context-schema.md`.
- Added context examples based on the dentist specification.
- Added `scripts/assemble-context.js`.
- Updated `package.json` with `npm run assemble-context`.
- Added `docs/context-architecture.md`.
- Updated `docs/roadmap.md`.

Next:
Prompt Builder CLI

## Sprint 008

Goal:
Create the first working Prompt Builder.

Completed:

- Added `scripts/build-prompt.js` to assemble deterministic prompt files.
- Added executable builder templates in `prompt-builder/templates/`.
- Added prompt artifacts in `generated-prompts/`.
- Added generated-output examples in `prompt-builder/examples/`.
- Added `docs/prompt-builder-architecture.md`.
- Updated `prompt-builder/README.md`, `docs/prompt-architecture.md`, `package.json`, and `docs/roadmap.md`.

Dependencies added:

- None. The builder uses the existing Node.js runtime and built-in modules only.

Decisions made:

- Prompt guidance remains documented in `prompts/`.
- Final render templates live in `prompt-builder/templates/`.
- Prompt rendering uses static markdown templates with placeholder replacement.

Known limitations:

- The builder relies on repository-defined example targets.
- Prompt output remains a deterministic artifact only.

Next:
Task Runner Foundation

## Sprint 009

Goal:
Create the Task Runner Foundation.

Completed:

- Added `task-runner/README.md` and `task-runner/task-runner-schema.md`.
- Added `task-runner/examples/task-run-output.json`.
- Added `scripts/run-tasks.js`.
- Extended `scripts/assemble-context.js` for task-based context assembly across all planner categories.
- Added `docs/task-runner-architecture.md`.
- Updated `package.json` and `docs/roadmap.md`.

Dependencies added:

- None. The task runner uses the existing Node.js runtime and built-in modules only.

Decisions made:

- Task prompt file naming is deterministic and category-sequenced.
- The runner processes tasks in planner order.
- The runner reuses the existing context and prompt layers.

Known limitations:

- The runner currently operates on `planner/example-output.json`.
- Task prompt artifacts remain pre-execution outputs only.

Next:
Architecture Cleanup + Codex Handoff Layer

## Sprint 010

Goal:
Clean up architecture drift and add the Codex Handoff Layer.

Completed:

- Resolved merge conflicts in `docs/sprint-log.md`, `docs/prompt-builder-architecture.md`, and `prompt-builder/README.md`.
- Updated `README.md` to reflect the current architecture and active CLI pipeline.
- Chose JSON as the canonical context-package format and updated context-related docs accordingly.
- Clarified the distinction between prompt guidance documents in `prompts/` and executable builder templates in `prompt-builder/templates/`.
- Clarified source examples versus generated artifacts in the prompt and handoff layers.
- Refactored the Prompt Builder and Task Runner to consume canonical JSON context packages directly.
- Added `codex-handoff/README.md`, `codex-handoff/handoff-schema.md`, and handoff examples for frontend, backend, and SEO.
- Added `docs/codex-handoff-architecture.md`.
- Added `scripts/prepare-codex-handoff.js`.
- Updated `package.json` with `npm run prepare-handoff`.
- Updated `docs/roadmap.md`.

Dependencies added:

- None. The cleanup and handoff layer use the existing Node.js runtime and built-in modules only.

Cleanup decisions:

- Keep JSON as the only canonical executable context-package format.
- Keep `prompts/` as source guidance and `prompt-builder/templates/` as executable templates.
- Treat `prompt-builder/examples/` and `codex-handoff/examples/` as source examples.
- Treat `generated-prompts/` and `codex-handoff/output/` as generated artifacts.

Context-format decision:

- The Context Engine, Prompt Builder, and Task Runner now align around a JSON context package.
- Human-readable markdown examples may remain for reference, but they are not the executable source format.

Handoff design decisions:

- The handoff layer packages generated prompt files without modifying prompt payload meaning.
- The handoff layer writes markdown handoff documents plus a JSON manifest.
- The handoff layer stays strictly pre-execution and does not cross the Codex boundary.

Known limitations:

- The handoff layer packages local prompt artifacts only.
- Codex integration remains intentionally unimplemented.
- Older placeholder files outside the active pipeline still exist and can be cleaned in a later sprint if needed.

Next:
Execution Boundary Validation
