# Roadmap

## Phase 1 - Repository Structure

- Create the base repository layout
- Add foundational documentation
- Establish early conventions for scripts, agents, domain contracts, and project storage

## Phase 2 - Specifications

Status: Sprint 002 completed

- Define the specification format
- Add examples for different business types
- Establish validation rules for project briefs

### Sprint 002 - Specification System

- Added the canonical specification schema in `specs/schema.md`
- Added realistic example specifications for dentist, clinic, and lawyer projects
- Added a top-level `schema.md` entrypoint for the specification format

## Phase 3 - Planning And Domain Contracts

Status: Sprint 004 completed

- Define planning output contracts
- Standardize reusable implementation knowledge
- Establish domain-specific implementation contracts

### Sprint 003 - Planner Contract Design

- Added `skills/planner.md`
- Added `planner/task-schema.json`
- Added `planner/example-output.json`
- Added `docs/planning-process.md`

### Sprint 004 - Core Domain Contracts Foundation

- Added implementation guidance for Astro, Supabase, SEO, QA, and Content
- Added `docs/skills-architecture.md`

## Phase 4 - Agent Contracts

Status: Sprint 005 completed

- Define agent responsibilities and handoff boundaries
- Keep planner and specialist roles separate

### Sprint 005 - Agent Definitions

- Added full contracts for Planner, Frontend, Backend, SEO, QA, and Content agents
- Converted `AGENTS.md` into the central registry
- Added `docs/agent-architecture.md`

## Phase 5 - Prompt Design

Status: Sprint 008 completed

- Define reusable prompt structure
- Define prompt guidance documents
- Add deterministic builder templates and CLI output

### Sprint 006 - Prompt Generation Layer

- Added prompt guidance documents in `prompts/`
- Added `prompt-builder/prompt-schema.md`
- Added source prompt examples in `prompt-builder/examples/`
- Added `docs/prompt-architecture.md`

### Sprint 008 - Prompt Builder CLI

- Added `scripts/build-prompt.js`
- Added executable builder templates in `prompt-builder/templates/`
- Added prompt artifacts in `generated-prompts/`
- Added `docs/prompt-builder-architecture.md`

## Phase 6 - Context And Task Preparation

Status: Sprint 010 completed

- Assemble execution context deterministically
- Turn planner output into task-level prompts
- Clean up overlapping formats and clarify layer boundaries

### Sprint 007 - Context Assembly Engine

- Added `context-engine/`
- Added `scripts/assemble-context.js`
- Added `docs/context-architecture.md`

### Sprint 009 - Task Runner Foundation

- Added `task-runner/`
- Added `scripts/run-tasks.js`
- Added task-level prompt artifacts in `generated-prompts/tasks/`
- Added `docs/task-runner-architecture.md`

### Sprint 010 - Architecture Cleanup + Codex Handoff Layer

- Resolved active documentation merge conflicts
- Updated the repository docs to reflect the current architecture
- Chose JSON as the canonical context-package format
- Clarified the distinction between prompt guidance documents and builder templates
- Clarified source examples versus generated artifacts
- Added the Codex Handoff layer in `codex-handoff/`
- Added `scripts/prepare-codex-handoff.js`
- Added `docs/codex-handoff-architecture.md`

## Phase 7 - Execution Handoff

Status: Sprint 011 completed

- Package generated prompts for execution surfaces
- Preserve deterministic boundaries before model execution
- Prepare execution packages and result flow without invoking Codex yet

### Sprint 011 - Execution Workflow Foundation

- Added the Execution Workflow layer in `execution/`
- Added `scripts/create-execution-package.js`
- Added execution-package examples and review-process documentation
- Added `execution/results/README.md` to define the future execution-output structure
- Added `docs/execution-architecture.md`

## Phase 8 - Runtime Foundation

Status: Sprint 016 completed

- Define the runtime boundary after execution-package creation
- Document runtime responsibilities, logs, retries, and review flow
- Document runtime-specific MCP strategy without implementation

### Sprint 014 - Runtime Foundation

- Added `runtime/README.md` and `runtime/runtime-schema.md`
- Added Codex runtime contracts in `runtime/codex/`
- Added `docs/runtime-architecture.md`
- Added `docs/factory-vs-runtime.md`
- Documented preferred MCP strategy for runtime-layer knowledge access
- Clarified that the factory stops at execution packages and the runtime begins at external execution consumption

### Sprint 015 - Codex Runtime Validation

- Validated one bounded Codex runtime attempt against `frontend-site-foundation`
- Wrote runtime attempt artifacts under `runtime/results/frontend-site-foundation/codex/attempt-001/`
- Confirmed the runtime could stay within allowed Harbor Point frontend files
- Added `docs/codex-runtime-validation.md` with execution-package, prompt, and schema findings
- Identified the remaining contract gap between planning-oriented prompts and implementation-oriented runtime execution

### Sprint 016 - Execution Prompt System

- Added runtime-facing execution prompt templates in `execution-prompts/`
- Extended the prompt builder and task runner with `planning` and `execution` modes
- Added explicit runtime scope fields to execution packages: `projectId`, `taskId`, `targetProjectPath`, `allowedFiles`, and `executionIntent`
- Added execution prompt context fields for `expectedOutputs` and `implementationGoal`
- Added `docs/planning-vs-execution-prompts.md` and `docs/execution-prompt-validation.md`
- Updated runtime and execution docs to document explicit scope instead of runtime inference

### Sprint 017 - Execution Prompt Validation

- Added a second bounded runtime validation attempt under `runtime/results/frontend-site-foundation/codex/attempt-002/`
- Compared Attempt 001 and Attempt 002 in `docs/execution-prompt-comparison.md`
- Confirmed the Sprint 017 validation remained a single controlled comparison on the same Harbor Point allowlisted task without generating a new project or expanding task scope
- Confirmed execution prompts improved ambiguity control, runtime assumptions, file targeting, and runtime compliance for `frontend-site-foundation`
- Recorded remaining issues without redesigning the runtime or execution architecture:
  - execution prompts still inherit some planning-oriented wording
  - missing business facts still limit full contact-detail implementation

## Phase 9 - Memory

- Design working memory structures
- Explore long-term knowledge storage
- Evaluate SQLite and retrieval strategies

## Phase 10 - Project Generation

Status: Sprint 022 completed

- Generate websites from specifications
- Validate outputs through QA
- Store completed projects in the workspace

### Sprint 012 - First Generated Astro Project

- Added the first generated validation project in `projects/harbor-point-dental-studio/`
- Generated a minimal Astro page set with shared layout, header, footer, and structured site data
- Added `projects/harbor-point-dental-studio/FACTORY_REPORT.md` to document task coverage, missing information, and specification improvements
- Added `docs/project-generation-learnings.md` to capture what worked, what failed, and what still needs redesign

### Sprint 013 - Generated Project Audit And Contract Refinement

- Audited the first generated Astro project in `docs/generated-project-audit.md`
- Refined `skills/astro.md` based on evidence from the generated project
- Updated `specs/schema.md` to require clearer business-detail inputs when relevant
- Added `docs/factory-improvements.md` to distinguish implemented versus deferred improvements

### Sprint 018 - Astro Starter Foundation

- Added the canonical Astro starter in `starters/astro-minimal/`
- Aligned the starter to the current official Astro scaffold instead of requiring runtime bootstrap from scratch
- Documented the starter architecture in `docs/astro-starter.md`
- Added validation findings in `docs/starter-validation.md`
- Clarified the intended future flow from Factory to Astro Starter to Blueprints before runtime execution

### Sprint 022 - Project Assembly Engine

- Added the deterministic Assembly Engine contract in `assembler/README.md` and `assembler/assembly-schema.md`
- Added `scripts/assemble-project.js` as the first project assembly CLI
- Replaced the placeholder `create-project` command with a working deterministic assembler entrypoint
- Implemented Starter copy, Blueprint copy, project data copy, placeholder asset copy, manifest generation, and pre-runtime validation
- Generated the first assembled project in `projects/demo-clinic/`
- Added `project.json` as the canonical manifest for assembled projects
- Added `docs/project-assembly-validation.md`
- Confirmed the Factory can now deterministically assemble runnable Astro projects without invoking AI or Runtime

## Phase 11 - Vertical Platforms

Status: Sprint 021 completed

- Define reusable market-specific platform architecture on top of the Astro starter
- Separate vertical blueprint knowledge from project-specific content
- Prepare the Factory transition from infrastructure-only work into reusable commercial platforms

### Sprint 019 - Dental Platform Design

- Added the first vertical platform design package in `design/dental-platform/`
- Documented Costa Rica dental market findings as reusable architectural patterns in `design/dental-platform/market-research.md`
- Defined the canonical dental sitemap in `design/dental-platform/page-structure.md`
- Defined future dental blueprint component contracts in `design/dental-platform/component-map.md`
- Defined the canonical `src/data/` model for dental projects in `design/dental-platform/data-model.md`
- Documented content organization, conversion strategy, and SEO architecture for dental clinics
- Added `design/dental-platform/future-blueprint.md` to clarify what belongs to the starter, blueprint, project data, runtime, and future knowledge layers
- Added `docs/dental-platform-validation.md`
- Marked the Factory transition from infrastructure foundations into reusable vertical platforms

### Sprint 020 - Dental Blueprint v1

- Added the first reusable Blueprint in `blueprints/dentist/`
- Implemented the canonical dental component set as reusable Astro components with typed props
- Added a simple `BaseLayout.astro` and generic page templates for Home, About, Services, Single Service, Doctors, Blog, Blog Post, FAQ, Contact, and Privacy Policy
- Added placeholder `data/` modules that model the future `src/data/` contract without embedding real business content
- Added generic SVG placeholder assets plus Blueprint composition and data-flow notes
- Added `blueprints/dentist/README.md`
- Added `docs/dental-blueprint-validation.md`
- Confirmed the Blueprint remains independent from the starter integration, runtime, prompt builder, and generated project pipeline

### Sprint 021 - Blueprint Data Integration

- Refactored `blueprints/dentist/` so layouts, page templates, and reusable components consume typed props instead of Blueprint-local business content
- Replaced Blueprint-local placeholder data ownership with a shared presentation contract in `blueprints/dentist/types.ts`
- Validated the canonical architecture through `projects/dental-demo/`, a full placeholder project that extends `starters/astro-minimal/`
- Added project-owned data modules for clinic identity, navigation, heroes, services, doctors, testimonials, locations, FAQs, SEO, footer content, schema, blog content, and privacy content
- Confirmed the Blueprint is now the canonical presentation layer and the generated project is the canonical content owner
- Added `docs/blueprint-data-validation.md`
- Updated `blueprints/dentist/README.md`, `docs/factory-improvements.md`, and `docs/sprint-log.md`

## Phase 12 - Codex Interoperability

Status: Sprint 024 completed

- Align repository instruction surfaces with current official Codex conventions
- Clarify the boundary between EPDC domain contracts and Codex-native skill packaging
- Introduce Codex-native repository scaffolding only where it provides immediate architectural value

### Sprint 023 - Codex Repository Standardization

- Audited the repository against the current Codex manual, `AGENTS.md` guidance, skills guidance, and plugin build guidance
- Added `docs/codex-standardization-audit.md`
- Restored `AGENTS.md` to its official repository-instructions role
- Moved the agent registry to `docs/agent-registry.md`
- Added the first repo-scoped Codex skill package in `.agents/skills/factory-repository-map/`
- Fixed `scripts/create-execution-package.js` so execution-package generation no longer fails when a handoff omits an explicit source-prompt field
- Clarified the boundary between EPDC `skills/`, repo-scoped Codex skills, and internal prompt-guidance docs
- Updated `README.md`, `docs/skills-architecture.md`, `docs/prompt-architecture.md`, `prompts/README.md`, and architecture references to reflect the current boundary model

### Sprint 024 - Codex Knowledge Architecture Standardization

- Audited the repository against the current official Codex guidance for `AGENTS.md`, instruction hierarchy, skills, customization, and knowledge discovery
- Added `docs/codex-knowledge-architecture.md`
- Migrated the reusable workflow files from `skills/` into real Codex skill packages under `.agents/skills/`
- Added active Factory skills for `planner`, `astro`, `content`, `seo`, `qa`, and `supabase`, alongside the existing `factory-repository-map` skill
- Switched the active repository references and context assembly path to load `.agents/skills/*/SKILL.md` as the source of truth
- Reduced `skills/` to legacy migration notes instead of leaving reusable workflows there as the active surface
- Updated architecture, agent, and prompt docs to explain the final split between repo-scoped skills, developer docs, agent contracts, and prompt assets
