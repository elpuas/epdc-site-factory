# EPDC Site Factory Architecture Guide

This document is the primary architecture entry point for engineers joining EPDC Site Factory after Sprint 017.

It describes the system as it exists today. It does not redesign the factory.

## Vision

EPDC Site Factory is a specification-driven preparation system for AI-assisted website delivery.

Its job is to turn business requirements into deterministic, execution-ready work artifacts that an external AI runtime can consume in a bounded, reviewable way.

The long-term vision is a full specification-to-project pipeline where:

- the specification is the source of truth
- planning is explicit and traceable
- implementation standards are reusable
- runtime execution is bounded by contract
- generated output is validated against business requirements
- validation feeds improvements back into the factory

Today, the repository proves the preparation side of that vision and part of the runtime boundary. It does not automatically execute external AI runtimes from repository scripts.

## Why This Exists

This is not just a prompt repo.

It exists to provide a deterministic preparation pipeline that turns business specifications into execution-ready AI runtime work.

Without that layer, prompt-driven work tends to lose:

- scope discipline
- task ownership
- file boundaries
- requirement traceability
- validation clarity

EPDC Site Factory exists to formalize those concerns before execution begins.

The Factory prepares deterministic artifacts and defines runtime contracts for external AI runtimes such as Codex. Automatic runtime execution is still out of scope, but Codex runtime validation has already been performed manually and documented through runtime artifacts.

## Core Philosophy

- The Factory owns preparation.
- The Runtime owns execution.
- External knowledge sources belong to runtime configuration.
- Memory is intentionally future work.

## Current Architecture

The current pipeline is:

```text
Business Specification
↓
Specification Schema
↓
Planner
↓
Task Runner
↓
Context Engine
↓
Planning Prompt
↓
Execution Prompt
↓
Execution Package
↓
Runtime
↓
External AI Runtime, such as Codex
↓
Generated Project
↓
Validation
↓
Factory Improvements
```

The practical ownership split is:

```text
Factory
  specification -> planning -> context -> prompts -> handoff -> execution package

Runtime
  package consumption -> runtime delivery -> file changes -> logs -> review artifacts
```

The repository does not automatically call Codex. It does include:

- Codex handoff packages
- execution packages
- runtime foundation contracts
- Codex runtime validation artifacts
- planning-versus-execution prompt validation

That is the correct Sprint 017 framing: deterministic preparation plus documented and manually validated runtime contracts.

## Layer Responsibility Table

| Layer | Responsibility | Current State |
| --- | --- | --- |
| Specification | Define business scope, requirements, and acceptance criteria | Implemented as schema plus examples |
| Planner | Convert specification scope into categorized tasks with priorities and dependencies | Documented contract plus static example output |
| Task Runner | Iterate planner tasks and generate task-level prompt artifacts | Implemented script |
| Context Engine | Assemble canonical JSON context packages with task, agent, domain contracts, constraints, and runtime metadata | Implemented script |
| Prompt Builder | Render deterministic planning and execution prompts from context packages | Implemented script |
| Execution Package | Preserve prompt payload, runtime scope, expected outputs, and review requirements in a runtime-consumable contract | Implemented script and docs |
| Runtime | Consume packages, deliver prompts, capture logs and changed files, manage attempts and review flow | Documented and manually validated |
| External AI Runtime | Perform scoped implementation or review work under runtime control | Not auto-invoked by repository scripts; Codex validated manually through artifacts |
| Validation | Audit outputs against requirements and feed learnings back into contracts | Implemented through docs, project evidence, and runtime result artifacts |

## Layer Details

### Specification

Location:

- `SPEC.md`
- `specs/schema.md`
- `specs/examples/`

Owns:

- project identity
- business goals
- technical requirements
- pages
- features
- SEO requirements
- content requirements
- integrations
- acceptance criteria

Current state:

- documentation-first
- canonical schema exists
- example specs exist
- no automated spec validation CLI yet

### Planner

Location:

- `skills/planner.md`
- `planner/task-schema.json`
- `planner/example-output.json`

Owns:

- task decomposition
- category assignment
- priority assignment
- dependency ordering

Current state:

- planner contract is documented
- repository uses a static example planner output
- no live planner implementation exists

### Task Runner

Location:

- `task-runner/`
- `scripts/run-tasks.js`

Owns:

- iteration across planner tasks
- category-to-template routing
- generation of task-level planning prompts
- generation of task-level execution prompts

Current state:

- implemented
- reads `planner/example-output.json`
- writes deterministic artifacts under `generated-prompts/tasks/` and `generated-prompts/execution/tasks/`

### Context Engine

Location:

- `context-engine/`
- `scripts/assemble-context.js`

Owns:

- canonical JSON context packaging
- agent and domain-contract loading
- constraint packaging
- expected-output packaging
- runtime metadata attachment in execution mode

Current state:

- implemented
- JSON is the canonical executable format
- runtime allowlists and project scope are currently repository-defined mappings

### Prompt Builder

Location:

- `prompt-builder/`
- `execution-prompts/`
- `prompts/`
- `scripts/build-prompt.js`

Owns:

- deterministic prompt rendering
- planning-prompt template rendering
- execution-prompt template rendering
- separation between prompt guidance and executable templates

Current state:

- implemented
- supports `planning` and `execution` modes
- writes output into `generated-prompts/` and `generated-prompts/execution/`

### Execution Package

Location:

- `codex-handoff/`
- `execution/`
- `scripts/prepare-codex-handoff.js`
- `scripts/create-execution-package.js`

Owns:

- handoff packaging
- payload preservation
- runtime scope declaration
- expected result path declaration
- downstream review requirement declaration

Current state:

- implemented
- Codex Handoff is an explicit layer in the repository
- execution packages preserve prompt mode and runtime metadata

### Runtime

Location:

- `runtime/`
- `runtime/codex/`
- `runtime/results/`

Owns:

- execution-time behavior after package creation
- prompt delivery to an external AI runtime
- runtime logs
- attempt records
- retry handling
- review artifact capture

Current state:

- documented, not automated by repository scripts
- Codex runtime is documented in detail
- manual validation artifacts exist for bounded Codex work

### External AI Runtime

Examples:

- Codex
- other future runtime surfaces

Owns:

- actual implementation or review execution
- model-time behavior
- tool use during execution, as configured by the runtime

Current state:

- outside the factory
- not automatically called by the repository
- Codex has been manually validated via runtime attempt artifacts

### Validation

Location:

- `projects/harbor-point-dental-studio/`
- `runtime/results/`
- `docs/project-generation-learnings.md`
- `docs/generated-project-audit.md`
- `docs/codex-runtime-validation.md`
- `docs/execution-prompt-validation.md`
- `docs/execution-prompt-comparison.md`

Owns:

- evidence collection
- audit findings
- review notes
- contract feedback into future factory improvements

Current state:

- implemented as documentation plus generated evidence
- includes both generated-project validation and runtime-boundary validation

## Data Flow

```text
Business Specification
↓
Specification Schema
↓
Planner
↓
Task Runner
↓
Context Engine
↓
Planning Prompt
↓
Execution Prompt
↓
Execution Package
↓
Runtime
↓
External AI Runtime, such as Codex
↓
Generated Project
↓
Validation
↓
Factory Improvements
```

### 1. Business Specification -> Specification Schema

The raw business brief is normalized into the repository's canonical specification format so downstream planning can rely on stable fields and vocabulary.

### 2. Specification Schema -> Planner

The planner converts the normalized specification into structured work: tasks, priorities, dependencies, and category ownership.

### 3. Planner -> Task Runner

The task plan becomes deterministic downstream input. The Task Runner processes tasks in planner order and routes each one to the proper prompt path.

### 4. Task Runner -> Context Engine

For each task, the Context Engine assembles the required execution context: specification summary, agent contract, domain contracts, constraints, expected outputs, and runtime metadata when relevant.

### 5. Context Engine -> Planning Prompt

The Prompt Builder renders the planning-oriented version of the task. This artifact is architecture-facing and useful for design, decomposition, and domain reasoning.

### 6. Planning Prompt -> Execution Prompt

The execution-oriented version of the task is rendered as a separate contract. It declares the target project, allowed files, execution intent, expected outputs, and implementation goal explicitly.

### 7. Execution Prompt -> Execution Package

The runtime-facing prompt lineage is wrapped into transport artifacts. In the current repository this passes through the Codex Handoff layer and then into a machine-readable execution package.

### 8. Execution Package -> Runtime

The runtime consumes the package and owns execution-time concerns: delivery, logs, attempt history, retries, and review artifact capture.

### 9. Runtime -> External AI Runtime, such as Codex

The runtime delivers the prompt payload and supporting metadata to an external AI surface, which performs the bounded work.

### 10. External AI Runtime -> Generated Project

Execution produces changed files or review output against a target project boundary.

### 11. Generated Project -> Validation

Generated output is checked against the specification, the task contract, file boundaries, and review expectations.

### 12. Validation -> Factory Improvements

Validation findings feed back into the factory as stronger schemas, better skills, cleaner prompt contracts, and clearer architectural boundaries.

## Repository Tour

These are the major working directories a new engineer needs to understand.

- `specs/`: canonical specification schema and example specifications
- `planner/`: planner schema and example task output
- `skills/`: reusable implementation standards by domain
- `agents/`: role contracts for planner and specialist agents
- `context-engine/`: context packaging contract and examples
- `prompt-builder/`: planning prompt schema, examples, and templates
- `execution-prompts/`: runtime-facing execution prompt templates
- `execution/`: execution package contract, examples, generated packages, and result-path conventions
- `runtime/`: runtime boundary docs, Codex runtime docs, and runtime validation artifacts
- `codex-handoff/`: handoff packaging layer and generated handoff output
- `generated-prompts/`: deterministic generated planning and execution prompts
- `projects/`: generated project validation evidence
- `docs/`: architecture, validation, roadmap, and sprint history
- `scripts/`: active CLI entry points for the preparation pipeline

Additional context:

- `templates/` is reserved for future starter or template systems.
- `memory/` documents future memory work only.

## Validation History

### First Generated Project

Sprint 012 created the first validation project in `projects/harbor-point-dental-studio/`.

What it validated:

- the specification and planner contracts could support a coherent Astro project structure
- shared layout, shared data, and page-level metadata could be translated into files
- the factory could preserve traceability from tasks to project output

What it did not validate:

- automated end-to-end generation
- full sitemap completion
- backend completion
- structured-data completion

What was learned:

- missing business facts block publishable output quickly
- reduced validation builds need explicit rules
- implementation standards needed refinement, especially in the Astro domain contract

### Runtime Validation

Sprint 015 validated one bounded Codex runtime task, `frontend-site-foundation`, against the Harbor Point project.

What it validated:

- execution-package lineage was usable for bounded runtime work
- allowed-file discipline was practical
- runtime-owned artifacts such as `runtime-log.json`, `review-notes.md`, and `file-summary.md` were workable

What it exposed:

- planning prompts were not strong enough as implementation contracts
- the runtime had to infer too much from repository context

### Planning vs Execution Prompt Validation

Sprint 016 introduced execution prompts. Sprint 017 compared the same bounded task using planning-prompt lineage versus execution-prompt lineage.

What it validated:

- execution prompts are a better bounded runtime contract than planning prompts
- explicit `executionIntent`, `targetProjectPath`, `allowedFiles`, `expectedOutputs`, and `implementationGoal` reduced ambiguity and runtime assumptions
- the controlled comparison improved from `retry-recommended` to `approved`

What remains unresolved:

- some planning-oriented wording still survives in execution prompts
- missing business facts still limit implementation completeness
- review vocabulary is clearer but not fully enforced as a machine-readable repository contract

## Design Decisions

### Planning prompts and execution prompts are separate

Planning prompts answer what should be done.

Execution prompts answer what may be changed, where, and why.

This split was required because bounded runtime work needs explicit implementation contracts, not just architectural guidance.

### The Factory is separate from the Runtime

The factory owns deterministic preparation.

The runtime owns execution-time behavior.

This keeps logs, retries, live tool access, and runtime-specific configuration out of the factory layer.

### External knowledge sources belong to runtime configuration

Astro docs, Supabase docs, GitHub APIs, and other live references are runtime concerns because they are environment-specific and execution-time specific.

### The Factory does not execute AI directly

No repository script automatically calls Codex or another AI runtime.

That does not mean the repository stops conceptually before Codex. It means the runtime boundary is explicit and external execution is not owned by the factory scripts.

### Specifications drive the entire pipeline

Every downstream layer depends on stable scope, which is why the specification remains the source of truth for planning, prompting, runtime packaging, and validation.

### JSON is the canonical executable interchange format

The active scripts operate on structured JSON context and package data. Markdown examples remain useful for documentation, but JSON is the canonical executable representation.

## Current Limitations

- No automatic invocation of Codex or other AI runtimes from repository scripts
- No live planner implementation
- No orchestration implementation
- No memory implementation
- No starter system beyond reserved `templates/`
- No blueprint system
- No pattern library
- No factory-owned knowledge layer
- No dynamic file-allowlist generation from richer planning output
- No automated validation of generated projects against the full specification
- project assembly currently requires explicit blueprint and project-name arguments
- `scripts/run-orchestrator.js` is not implemented

## Roadmap Direction

The direction already documented in `docs/roadmap.md` is:

1. improve runtime review vocabulary and retry handling
2. add future memory and knowledge layers
3. strengthen project-generation contracts
4. add future starter, blueprint, and reusable pattern systems
5. support broader runtime options beyond the current Codex-focused documentation

These are future phases, not present-day architecture.

## Developer Guide

### Add a New Domain Contract Or Codex Skill

1. Decide whether the addition is an EPDC domain contract or a Codex skill package.
2. For an EPDC domain contract, add a markdown document under `skills/`.
3. Keep domain contracts documentation-first: purpose, responsibilities, boundaries, and working rules.
4. Update `scripts/assemble-context.js` so the right tasks include the domain contract in `requiredSkills`.
5. Update prompt guidance or templates only if the contract changes rendered prompt requirements.
6. For a repo-scoped Codex skill, add a folder with `SKILL.md` under `.agents/skills/`.

Rule:

- domain contracts define standards, not project scope

### Add a new Agent

1. Add the new agent contract under `agents/`.
2. Register it in `docs/agent-registry.md`.
3. Define its domain boundary and constraints clearly.
4. Update task-category routing only if the architecture genuinely supports that new ownership path.

Rule:

- agents own domain interpretation, not planning authority or runtime behavior

### Add a new Runtime

1. Create a new runtime documentation area under `runtime/`.
2. Define its contract: inputs, outputs, logs, retries, review flow, and execution process.
3. Reuse the existing execution package contract instead of redefining factory outputs.
4. Add runtime result artifacts under `runtime/results/` when validation occurs.

Rule:

- do not move runtime concerns back into the factory

### Add a new Blueprint (future)

There is no blueprint system yet.

For now:

1. document the need rather than quietly implementing a hidden blueprint layer
2. keep starter-like material under `templates/` until a real blueprint contract exists
3. avoid injecting blueprint-specific logic into planner, context, prompts, or runtime layers prematurely

### Validate a generated project

Current validation is manual and evidence-driven.

Use this process:

1. compare the output against the source specification
2. compare the output against planner tasks and task IDs
3. inspect project evidence such as `FACTORY_REPORT.md`
4. inspect runtime artifacts such as `runtime-log.json`, `review-notes.md`, and `file-summary.md` when runtime work is involved
5. confirm file changes stayed inside the declared scope
6. record missing facts, deferred scope, and review outcomes explicitly

## Practical Working Model

```text
specs/              define scope
planner/            define work
skills/             define standards
agents/             define ownership
context-engine/     assemble execution context
prompt-builder/     render planning prompts
execution-prompts/  render execution prompts
codex-handoff/      package prompts for runtime delivery
execution/          package runtime inputs
runtime/            define and validate execution behavior
generated-prompts/  hold deterministic prompt artifacts
projects/           hold generated project evidence
docs/               explain architecture and learnings
scripts/            run the active factory pipeline
```

If a change affects deterministic preparation, it belongs in the factory.

If a change affects execution-time behavior, logs, retries, knowledge access, or review flow, it belongs in the runtime.

That boundary is the most important rule in the repository.
