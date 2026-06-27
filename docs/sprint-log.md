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

## Sprint 018

Goal:
Create the official EPDC Astro Starter so future generated projects begin from a maintained Astro foundation instead of relying on an external runtime to bootstrap Astro from scratch.

Completed:

- Added the canonical starter in `starters/astro-minimal/`.
- Added root Astro bootstrap files: `package.json`, `astro.config.mjs`, `tsconfig.json`, and `.gitignore`.
- Added the canonical source structure: `src/components/`, `src/layouts/`, `src/pages/`, `src/data/`, `src/styles/`, and `public/`.
- Added a minimal `BaseLayout.astro`, `index.astro`, `site.ts`, and `global.css` as the stable EPDC foundation.
- Added `docs/astro-starter.md` to document why the starter exists, how it differs from the current official Astro starter, and how future Blueprints should extend it.
- Added `docs/starter-validation.md` to validate structure, configuration, TypeScript setup, and every intentional difference from Astro defaults.
- Updated `docs/roadmap.md`.

Dependencies added:

- None to the Factory repository root. The starter declares its own Astro dependency for future generated projects.

Decisions made:

- Keep the starter as close as possible to the current official Astro `basics` scaffold.
- Remove official demo content instead of carrying starter branding into generated projects.
- Add only the EPDC conventions that provide a stable long-term architectural baseline: `src/data/`, `src/styles/`, and `BaseLayout.astro`.
- Do not integrate the starter into project generation in this sprint.

Known limitations:

- The starter is documented and implemented, but not yet wired into the Factory generation pipeline.
- Blueprints and Patterns remain future work.
- Runtime execution remains external to the Factory.

Next:
Starter Integration Planning
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

## Sprint 014

Goal:
Define the Runtime Foundation layer that begins after execution-package creation.

Completed:

- Added `runtime/README.md`.
- Added `runtime/runtime-schema.md`.
- Added `runtime/codex/README.md`.
- Added `runtime/codex/config-example.toml`.
- Added `runtime/codex/execution-process.md`.
- Added `runtime/codex/mcp-strategy.md`.
- Added `docs/runtime-architecture.md`.
- Added `docs/factory-vs-runtime.md`.
- Updated `docs/roadmap.md`.

Dependencies added:

- None. This sprint changed documentation only.

Runtime decisions:

- The factory stops at deterministic execution-package preparation.
- The runtime begins when an external execution surface consumes that package.
- Runtime outputs must include generated files, runtime logs, and review notes.
- Approval is a post-runtime review state, not an execution-complete state.

Runtime boundary decisions:

- Prompt generation remains factory-owned.
- Prompt delivery, retries, runtime logging, and generated file capture are runtime-owned.
- QA review remains downstream from runtime execution even when a runtime produces its own review report.

MCP strategy decisions:

- Astro Docs, Supabase, and GitHub are the preferred MCP categories for future Codex runtime use.
- MCP configuration belongs to the runtime layer because it is execution-time and environment-specific.
- MCP access does not belong to the factory layer because the factory must stay deterministic and runtime-agnostic.

Known limitations:

- No runtime execution is implemented.
- No MCP integration is implemented.
- The runtime layer is documented for Codex only in this sprint, though the architecture is written to support other runtimes later.

Next:
Prompt And Planner Refinement For Full Generation

## Sprint 015

Goal:
Validate the Codex Runtime with one real bounded execution task.

Completed:

- Created a runtime validation attempt for `frontend-site-foundation` against `projects/harbor-point-dental-studio/`.
- Modified only the allowed shared frontend files in the Harbor Point project:
  - `src/layouts/BaseLayout.astro`
  - `src/components/site/Header.astro`
  - `src/components/site/Footer.astro`
- Added runtime attempt artifacts in `runtime/results/frontend-site-foundation/codex/attempt-001/`.
- Added `docs/codex-runtime-validation.md`.
- Updated `docs/roadmap.md`.

Dependencies added:

- None. This sprint used the existing repository files only.

Runtime validation decisions:

- Validate one task only instead of attempting full project execution.
- Treat the existing Harbor Point project as the runtime target because the factory report already mapped `frontend-site-foundation` to specific files.
- Preserve safe fallbacks when required business data was still missing from the source specification.

What the validation proved:

- Codex can consume the existing package lineage and produce reviewable bounded output.
- The runtime results structure is workable for logs, review notes, and file summaries.
- Allowed-file enforcement is practical for a controlled execution task.

Known limitations:

- The execution package and generated prompt are still planning-oriented rather than implementation-oriented.
- The current package boundaries still include pre-runtime restrictions that conflict with code-producing validation.
- Missing contact data in the source specification prevented a full click-to-call implementation.

Next:
Execution Package And Prompt Contract Refinement

## Sprint 016

Goal:
Separate planning prompts from execution prompts without redesigning the factory.

Completed:

- Added `execution-prompts/README.md` and runtime-facing execution templates for frontend, backend, SEO, QA, and content work.
- Extended `scripts/assemble-context.js`, `scripts/build-prompt.js`, and `scripts/run-tasks.js` to support `planning` and `execution` prompt modes.
- Added explicit runtime scope fields to execution prompts and execution packages: `projectId`, `taskId`, `targetProjectPath`, `allowedFiles`, `executionIntent`, `expectedOutputs`, and `implementationGoal`.
- Extended `scripts/prepare-codex-handoff.js` and `scripts/create-execution-package.js` so handoffs and execution packages preserve prompt mode and runtime metadata.
- Added `docs/planning-vs-execution-prompts.md` and `docs/execution-prompt-validation.md`.
- Updated `execution/execution-schema.md`, `prompt-builder/prompt-schema.md`, `prompt-builder/README.md`, `execution/README.md`, `runtime/README.md`, `runtime/runtime-schema.md`, `task-runner/README.md`, and `task-runner/task-runner-schema.md`.
- Regenerated planning and execution prompt artifacts, handoffs, and execution packages for the current example planner output.
- Updated `docs/roadmap.md`.

Dependencies added:

- None. The execution prompt system continues to use the existing Node.js runtime and built-in modules only.

Execution prompt decisions:

- Planning prompts remain in place and keep their existing output paths.
- Execution prompts use a separate template source in `execution-prompts/templates/`.
- Execution prompts render into `generated-prompts/execution/` and `generated-prompts/execution/tasks/`.
- The runtime receives explicit project scope and file scope instead of inferring them from the repository or validation notes.

Package schema changes:

- Added `promptMode` to distinguish planning and execution prompt lineage.
- Added `projectId`, `taskId`, `targetProjectPath`, `allowedFiles`, and `executionIntent` to the execution package contract.
- Added `expectedOutputs` and `implementationGoal` so runtime-facing expectations travel with the package.
- Replaced conflicting pre-runtime boundaries with intent-aligned runtime boundaries.

Runtime improvements:

- The runtime can now consume an execution prompt that declares its project boundary directly.
- `frontend-site-foundation` now has both a planning prompt and an execution prompt for comparison and validation.
- Execution package preparation now preserves the full prompt payload instead of truncating at nested headings.

Known limitations:

- Task-to-file allowlists are still repository-defined examples rather than generated from a richer planning output contract.
- Planning prompt packages still carry empty `allowedFiles` and `targetProjectPath` values because they are intentionally non-implementation artifacts.

Next:
Runtime Retry And Review Vocabulary

## Sprint 017

Goal:
Validate whether the Sprint 016 execution prompt system produces a better bounded runtime contract than the planning prompt used in Sprint 015.

Completed:

- Created `runtime/results/frontend-site-foundation/codex/attempt-002/`.
- Added `runtime-log.json`, `review-notes.md`, and `file-summary.md` for Attempt 002.
- Added `docs/execution-prompt-comparison.md` to compare Attempt 001 and Attempt 002 for `frontend-site-foundation`.
- Updated `docs/roadmap.md`.

Dependencies added:

- None. This sprint used the existing repository files and generated prompt artifacts only.

Validation results:

- Attempt 002 confirmed that execution prompts reduce ambiguity by declaring `executionIntent`, `targetProjectPath`, `allowedFiles`, `expectedOutputs`, and `implementationGoal` directly.
- Attempt 002 reduced runtime assumptions compared with Attempt 001 because the runtime no longer needed to infer project boundaries or file targets from repository context.
- Attempt 002 improved file targeting because the allowlist now travels with the execution prompt and execution package.
- Attempt 002 improved runtime compliance and reviewability enough to move the controlled comparison from `retry-recommended` to `approved`.
- Attempt 002 preserved the same Harbor Point implementation baseline rather than regenerating the task, which kept the sprint focused on prompt-contract validation only.

Execution prompt effectiveness:

- The execution prompt system is a better fit for bounded implementation work than the planning prompt system.
- The main improvement is contract clarity, not a different architecture or a broader implementation surface.
- The Harbor Point shared frontend implementation remained within the same controlled task boundary and did not require a second scope expansion.

Remaining runtime issues:

- Some planning-oriented wording still survives inside execution prompt sections inherited from upstream task definitions.
- Missing business facts in the source specification still prevent full contact-detail completion.
- Review outcomes are documented more clearly through the validation artifacts, but review vocabulary is still a follow-up refinement area.

Next:
Runtime Retry And Review Vocabulary
