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

## Sprint 011

Goal:
Design the Execution Workflow layer.

Completed:

- Added `execution/README.md`, `execution/execution-schema.md`, and `execution/review-process.md`.
- Added execution-package examples for frontend, backend, and SEO in `execution/examples/`.
- Added `execution/results/README.md` to define the future execution-output structure.
- Added `docs/execution-architecture.md`.
- Added `scripts/create-execution-package.js`.
- Updated `package.json` with `npm run create-execution-package`.
- Updated `docs/roadmap.md`.

Dependencies added:

- None. The execution workflow uses the existing Node.js runtime and built-in modules only.

Decisions made:

- The Execution Workflow consumes handoff documents rather than raw prompt files.
- Execution packages are JSON artifacts that preserve prompt payloads and declare future result paths.
- Review requirements are embedded in execution packages so future QA-aware layers can consume one deterministic contract.

Known limitations:

- The execution workflow does not call Codex or any AI model.
- The execution workflow prepares packages only from local handoff artifacts.
- Future execution results are documented structurally but not implemented.

Future execution plans:

- Attach real execution status transitions when a future execution surface exists.
- Route result artifacts back into structured review and QA workflows.
- Add approval-state updates once the execution boundary is implemented.

Next:
Execution Result Contract Validation

## Sprint 012

Goal:
Validate the factory by generating the first real Astro project.

Completed:

- Generated the first validation project in `projects/harbor-point-dental-studio/`.
- Added a minimal Astro structure with `src/pages/`, `src/components/`, `src/layouts/`, `src/data/`, and `public/`.
- Implemented the required pages: `index.astro`, `about.astro`, `services.astro`, and `contact.astro`.
- Implemented shared layout and site components in `src/layouts/BaseLayout.astro`, `src/components/site/Header.astro`, and `src/components/site/Footer.astro`.
- Added structured project content in `src/data/site.ts`.
- Added `projects/harbor-point-dental-studio/FACTORY_REPORT.md`.
- Added `docs/project-generation-learnings.md`.
- Updated `docs/roadmap.md`.

Dependencies added:

- None. The validation project uses repository source files only.

Decisions made:

- Keep the first generated project intentionally minimal and validation-focused rather than attempting the full sitemap.
- Use TODO markers instead of inventing missing business details from the specification.
- Treat this sprint as a proof that the factory contracts can guide a real project output, even though project generation is still manual.

Known limitations:

- The generated project covers only the minimum page set requested for the sprint.
- Treatment pages, New Patients, Reviews, analytics integration, schema markup, and submission delivery were not completed.
- The output validates the architecture but does not prove automated end-to-end code generation yet.

Future execution plans:

- Expand project generation to cover the full planned sitemap.
- Define the execution-to-project-file contract so future generated prompts can write code outputs more directly.
- Add QA-driven validation against acceptance criteria after generation.

Next:
Full Sitemap Generation Validation

## Sprint 013

Goal:
Audit the first generated Astro project and refine the factory based on evidence.

Completed:

- Added `docs/generated-project-audit.md`.
- Audited Astro structure, specification coverage, skills, prompts, and planner output using the generated Harbor Point Dental Studio project.
- Refined `skills/astro.md` with project bootstrap guidance, folder conventions, TypeScript data guidance, layout rules, and validation-build reporting guidance.
- Updated `specs/schema.md` to require additional business-detail inputs when relevant for local service and professional-service projects.
- Added `docs/factory-improvements.md`.
- Updated `docs/roadmap.md`.

Dependencies added:

- None. This sprint changed documentation only.

Decisions made:

- Refine only the Astro skill because the evidence was strongest there.
- Update the specification schema only for business-detail fields directly tied to repeated TODOs in the generated project.
- Defer prompt, planner, and QA refinements until a later sprint because the audit identified them, but this sprint did not need broader contract changes.

Known limitations:

- The audit is based on one generated project only.
- Prompt and planner issues were documented but not corrected in this sprint.
- The generated project itself was not expanded or rebuilt during this audit sprint.

Future execution plans:

- Use the audit findings to tighten prompt requirements for file-generation outputs.
- Add planner support for bootstrap and validation-mode project generation.
- Add QA review rules for TODO-heavy validation builds.

Next:
Prompt And Planner Refinement For Full Generation
