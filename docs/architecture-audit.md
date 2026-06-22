# Architecture Audit

## Scope

This audit reviews the repository as it exists after Sprint 009.

The goal is to identify:

- Duplicate concepts
- Duplicate documentation
- Duplicate scripts or logic
- Overlapping responsibilities
- Obsolete files
- Inconsistent naming
- Architecture drift between sprints

This report does not propose code changes beyond recommendations. No files were deleted or refactored as part of the audit.

## Summary

The repository is still directionally coherent, but it is starting to accumulate duplication at the documentation layer and overlap at the executable-layer boundary.

The main problems are:

- Too many architecture documents restating the same workflow with small wording changes
- Two separate prompt-definition layers with overlapping intent
- Build artifacts committed alongside source examples
- Layer-boundary leakage between the Context Engine, Prompt Builder, and Task Runner
- Unresolved merge conflicts in active documentation
- Legacy placeholder files that no longer match the current architecture

The architecture can still support Sprint 010, but cleanup should happen first or the next sprint will deepen the drift.

## Duplicated Concepts

### 1. Repeated workflow architecture documents

These files all describe adjacent versions of the same pipeline:

- [README.md](/Users/alfredonavas/REACT/EPDC%20Site%20Factory/README.md)
- [docs/planning-process.md](/Users/alfredonavas/REACT/EPDC%20Site%20Factory/docs/planning-process.md)
- [docs/skills-architecture.md](/Users/alfredonavas/REACT/EPDC%20Site%20Factory/docs/skills-architecture.md)
- [docs/agent-architecture.md](/Users/alfredonavas/REACT/EPDC%20Site%20Factory/docs/agent-architecture.md)
- [docs/prompt-architecture.md](/Users/alfredonavas/REACT/EPDC%20Site%20Factory/docs/prompt-architecture.md)
- [docs/context-architecture.md](/Users/alfredonavas/REACT/EPDC%20Site%20Factory/docs/context-architecture.md)
- [docs/prompt-builder-architecture.md](/Users/alfredonavas/REACT/EPDC%20Site%20Factory/docs/prompt-builder-architecture.md)
- [docs/task-runner-architecture.md](/Users/alfredonavas/REACT/EPDC%20Site%20Factory/docs/task-runner-architecture.md)

Observation:

- These are not exact duplicates, but they restate the same flow repeatedly.
- The difference between them is often the current focus layer, not a clearly separate audience or responsibility.
- This creates multiple sources of truth for the same system narrative.

### 2. Two prompt-definition layers for the same responsibility

These files describe how prompts should be constructed:

- `prompts/*.md`
- `prompt-builder/prompt-schema.md`
- `prompt-builder/templates/*.md`

Observation:

- `prompts/*.md` are described as prompt templates, but they function more like assembly guidance or design docs.
- `prompt-builder/templates/*.md` are the actual render templates.
- `prompt-builder/prompt-schema.md` defines the canonical structure shared by both.

Impact:

- The repository currently has conceptual prompt templates and executable prompt templates.
- The naming does not make the difference obvious.

### 3. Duplicate generated prompt examples

These files are exact duplicates by content:

- `prompt-builder/examples/generated-frontend-prompt.md`
- `generated-prompts/generated-frontend-prompt.md`

- `prompt-builder/examples/generated-backend-prompt.md`
- `generated-prompts/generated-backend-prompt.md`

- `prompt-builder/examples/generated-seo-prompt.md`
- `generated-prompts/generated-seo-prompt.md`

Observation:

- One set is positioned as examples.
- The other set is positioned as build output.
- Keeping both committed creates redundant maintenance.

### 4. Specification entrypoint duplication

These files point to the specification concept:

- [specs/schema.md](/Users/alfredonavas/REACT/EPDC%20Site%20Factory/specs/schema.md)
- [schema.md](/Users/alfredonavas/REACT/EPDC%20Site%20Factory/schema.md)
- [SPEC.md](/Users/alfredonavas/REACT/EPDC%20Site%20Factory/SPEC.md)

Observation:

- `specs/schema.md` is the real canonical schema.
- `schema.md` is a valid lightweight entrypoint.
- `SPEC.md` is now a legacy example format and does not align with the canonical `specs/` system.

### 5. Example-output duplication across documentation and generated artifacts

The repository stores the same conceptual outputs in multiple places:

- Handwritten example prompts in `prompt-builder/examples/*.md`
- Generated prompt outputs in `prompt-builder/examples/generated-*.md`
- Build outputs in `generated-prompts/`
- Task-runner outputs in `generated-prompts/tasks/`

Observation:

- There is no clear rule for which directories are source examples versus reproducible artifacts.

## Overlapping Responsibilities

### 1. Agents and Skills overlap in domain definition

Examples:

- [agents/frontend.md](/Users/alfredonavas/REACT/EPDC%20Site%20Factory/agents/frontend.md) and [skills/astro.md](/Users/alfredonavas/REACT/EPDC%20Site%20Factory/skills/astro.md)
- [agents/planner.md](/Users/alfredonavas/REACT/EPDC%20Site%20Factory/agents/planner.md) and [skills/planner.md](/Users/alfredonavas/REACT/EPDC%20Site%20Factory/skills/planner.md)

Observation:

- Agent files define purpose, responsibilities, outputs, and constraints.
- Skill files also define responsibilities and operating rules.
- In several cases, the agent repeats the skill’s behavioral surface in shorter form.

Assessment:

- The split is understandable in theory: agents own role contracts, skills own implementation standards.
- In practice, the documents partially duplicate each other’s “what to do” language.

### 2. Prompt Builder and Context Engine overlap

Relevant files:

- [scripts/assemble-context.js](/Users/alfredonavas/REACT/EPDC%20Site%20Factory/scripts/assemble-context.js)
- [scripts/build-prompt.js](/Users/alfredonavas/REACT/EPDC%20Site%20Factory/scripts/build-prompt.js)
- [context-engine/context-schema.md](/Users/alfredonavas/REACT/EPDC%20Site%20Factory/context-engine/context-schema.md)

Observation:

- The Context Engine assembles a JSON package.
- The documented context schema is markdown-oriented.
- The Prompt Builder parses markdown and performs its own context interpretation.
- The Prompt Builder therefore owns both rendering and part of the context normalization logic.

Assessment:

- The layer boundary is not fully clean.
- Context assembly is not yet represented by one stable artifact format across docs, examples, and scripts.

### 3. Planner and Task Runner overlap

Relevant files:

- [planner/example-output.json](/Users/alfredonavas/REACT/EPDC%20Site%20Factory/planner/example-output.json)
- [scripts/run-tasks.js](/Users/alfredonavas/REACT/EPDC%20Site%20Factory/scripts/run-tasks.js)
- [task-runner/task-runner-schema.md](/Users/alfredonavas/REACT/EPDC%20Site%20Factory/task-runner/task-runner-schema.md)

Observation:

- The planner owns task structure.
- The Task Runner owns task iteration and prompt routing.
- `run-tasks.js` also re-renders task context into markdown and introduces category-to-template routing.

Assessment:

- The Task Runner is correctly downstream of the planner.
- But it currently performs additional transformation work that feels closer to “context packaging” than simple task execution orchestration.

### 4. Task Runner and Context Engine overlap

Relevant files:

- [scripts/run-tasks.js](/Users/alfredonavas/REACT/EPDC%20Site%20Factory/scripts/run-tasks.js)
- [scripts/assemble-context.js](/Users/alfredonavas/REACT/EPDC%20Site%20Factory/scripts/assemble-context.js)

Observation:

- `assemble-context.js` builds a context package object.
- `run-tasks.js` converts that package into markdown on its own with `renderMarkdownContext`.
- That means the Task Runner partially owns context serialization.

Assessment:

- This is the clearest executable overlap in the repository.

### 5. Repeated category routing logic

Relevant files:

- [scripts/assemble-context.js](/Users/alfredonavas/REACT/EPDC%20Site%20Factory/scripts/assemble-context.js)
- [scripts/build-prompt.js](/Users/alfredonavas/REACT/EPDC%20Site%20Factory/scripts/build-prompt.js)
- [scripts/run-tasks.js](/Users/alfredonavas/REACT/EPDC%20Site%20Factory/scripts/run-tasks.js)

Observation:

- Category-target mappings exist in more than one script.
- Template mappings exist in more than one script.
- Default-target handling exists separately from full task-run handling.

Assessment:

- This is not a functional bug yet, but it is drift-prone.

## Obsolete Files

These files appear to be obsolete or at least no longer aligned with the current architecture.

### 1. [SPEC.md](/Users/alfredonavas/REACT/EPDC%20Site%20Factory/SPEC.md)

Reason:

- It represents an older example-spec format outside the canonical `specs/` system.
- It risks suggesting there are two valid spec formats.

### 2. [agents/orchestrator.md](/Users/alfredonavas/REACT/EPDC%20Site%20Factory/agents/orchestrator.md)

Reason:

- It is a placeholder.
- It is not registered in [AGENTS.md](/Users/alfredonavas/REACT/EPDC%20Site%20Factory/AGENTS.md).
- The repo explicitly says orchestration is not implemented in this phase.

### 3. [scripts/create-project.js](/Users/alfredonavas/REACT/EPDC%20Site%20Factory/scripts/create-project.js)

Reason:

- It only prints `Not implemented yet`.
- It does not contribute to the current documented pipeline.

### 4. [scripts/run-orchestrator.js](/Users/alfredonavas/REACT/EPDC%20Site%20Factory/scripts/run-orchestrator.js)

Reason:

- It only prints `Not implemented yet`.
- It advertises an execution surface that the repository still excludes.

### 5. `generated-prompts/` committed build outputs

Reason:

- These are deterministic build artifacts, not source definitions.
- Their presence is harder to justify because `prompt-builder/examples/` already exists.

Note:

- The directory is not useless, but committing its contents alongside equivalent examples is questionable.

## Inconsistent Naming

### 1. `SPEC` vs `Specification`

Examples:

- `SPEC.md`
- Workflow diagrams that start with `SPEC`
- `specs/` and `specs/schema.md`

Issue:

- The repository mixes shorthand and full naming for the same concept.

### 2. `Planner`, `Planner Skill`, and `Planner Agent`

Examples:

- `skills/planner.md`
- `agents/planner.md`
- `docs/planning-process.md`
- `docs/agent-architecture.md`

Issue:

- The distinction exists, but the naming does not always make the boundary explicit in surrounding docs.

### 3. `Prompt Templates` means two different things

Examples:

- `prompts/frontend.md` and peers
- `prompt-builder/templates/frontend-template.md` and peers

Issue:

- Both are described as templates, but only one layer is actually consumed by the builder.

### 4. `Example` vs `Generated Output`

Examples:

- `prompt-builder/examples/generated-frontend-prompt.md`
- `generated-prompts/generated-frontend-prompt.md`

Issue:

- The current naming makes it unclear which file is normative, reproducible, or disposable.

### 5. `Context Package` format ambiguity

Examples:

- `context-engine/context-schema.md` describes markdown sections
- `scripts/assemble-context.js` emits JSON
- `scripts/run-tasks.js` re-renders markdown context

Issue:

- The repository uses one name for more than one concrete representation.

## Architecture Drift Between Sprints

### 1. Unresolved merge conflicts in active docs

Conflict markers exist in:

- [docs/sprint-log.md](/Users/alfredonavas/REACT/EPDC%20Site%20Factory/docs/sprint-log.md)
- [docs/prompt-builder-architecture.md](/Users/alfredonavas/REACT/EPDC%20Site%20Factory/docs/prompt-builder-architecture.md)
- [prompt-builder/README.md](/Users/alfredonavas/REACT/EPDC%20Site%20Factory/prompt-builder/README.md)

Assessment:

- This is the strongest evidence of sprint-to-sprint drift.
- It means the repository currently contains unresolved competing narratives from different change paths.

### 2. README lags the current architecture

Observation:

- [README.md](/Users/alfredonavas/REACT/EPDC%20Site%20Factory/README.md) still describes a much earlier scaffold.
- Its repository structure block does not reflect later sprint additions such as `context-engine/`, `prompt-builder/templates/`, `generated-prompts/`, or `task-runner/`.

### 3. Context format drift

Observation:

- Sprint 007 documented context packages in markdown.
- Sprint 009 operationalized JSON assembly plus markdown re-rendering.
- The current docs do not fully reconcile that shift.

### 4. Prompt-layer drift

Observation:

- Sprint 006 introduced prompt architecture and `prompts/`.
- Sprint 008 added render templates and generated outputs.
- The repository now has both conceptual prompt docs and executable prompt templates without a consolidated naming model.

### 5. Orchestration placeholders survived after the architecture became more specific

Observation:

- The repo now has concrete Planner, Context Engine, Prompt Builder, and Task Runner layers.
- Placeholder orchestration files and scripts still remain from an earlier scaffold phase.

## Recommended Refactors

### 1. Consolidate architecture narrative documents

Reason:

- The workflow is documented too many times with minor variation.

Risk:

- Low. Mostly documentation movement and clarification.

Impact:

- High. Reduces duplicate sources of truth and makes future sprint updates simpler.

### 2. Rename `prompts/` to reflect guidance rather than executable templates

Reason:

- `prompts/*.md` and `prompt-builder/templates/*.md` currently sound like the same thing.

Risk:

- Medium. Requires link updates across docs.

Impact:

- High. Clarifies the difference between prompt design guidance and builder-consumed templates.

### 3. Choose one canonical context-package format

Reason:

- The current architecture mixes JSON assembly, markdown schema, and markdown regeneration.

Risk:

- Medium. Several docs and scripts refer to the current mixed model.

Impact:

- High. This is the most important executable-boundary cleanup before Sprint 010.

### 4. Move generated prompt artifacts to one clearly defined role

Reason:

- The repository stores both “generated examples” and generated build outputs with duplicate content.

Risk:

- Low.

Impact:

- Medium. Simplifies maintenance and reduces confusion about what is source-controlled on purpose.

### 5. Retire or quarantine obsolete placeholder files

Reason:

- `SPEC.md`, `agents/orchestrator.md`, `scripts/create-project.js`, and `scripts/run-orchestrator.js` no longer represent the active architecture.

Risk:

- Low.

Impact:

- Medium. Reduces false entrypoints and stale conceptual paths.

### 6. Centralize category and template routing configuration

Reason:

- Routing logic is spread across multiple scripts.

Risk:

- Medium. Requires small code movement when implementation starts.

Impact:

- Medium to high. Prevents future drift when categories expand.

### 7. Repair merge conflicts before starting Sprint 010

Reason:

- The repo currently contains unresolved conflict markers in active documentation.

Risk:

- Low.

Impact:

- Critical. This should be treated as blocking cleanup.

## Architecture Assessment

### 1. Is the architecture still coherent?

Yes, but only narrowly.

The major layers still make sense:

- Specification
- Planning
- Agent contracts
- Skills
- Context assembly
- Prompt building
- Task running

The problem is not conceptual collapse. The problem is duplication and boundary blur as each sprint added another explanatory layer.

### 2. Are responsibilities clearly separated?

Partially.

Clear enough:

- Specifications vs planner output
- Agent contracts vs task output
- Prompt Builder vs generated prompt files

Not clear enough:

- Agents vs skills
- Context Engine vs Prompt Builder
- Context Engine vs Task Runner
- Prompt guidance docs vs executable prompt templates

### 3. Is the repository ready for Sprint 010?

Not cleanly.

It is structurally capable of continuing, but it should not move forward without first resolving the documentation conflicts and reducing the most obvious duplication.

### 4. What should be cleaned before continuing?

Highest priority:

- Resolve merge conflicts in active docs
- Decide the canonical context-package format
- Clarify the distinction between prompt guidance and prompt render templates
- Decide whether generated prompts are examples, build artifacts, or both
- Remove or isolate obsolete placeholder files from the active architecture surface

Secondary priority:

- Consolidate architecture docs
- Update `README.md` so it reflects the current repository
- Centralize category-routing configuration used by the executable scripts

## Final Assessment

The repository has a solid conceptual backbone, but it is now showing the normal symptoms of sprint-by-sprint accretion:

- duplicated explanations
- stale placeholders
- ambiguous naming
- boundary leakage between adjacent layers

Sprint 010 should start only after those issues are acknowledged and at least the conflict-marker and canonical-format problems are cleaned up. Those two issues are the main blockers to keeping the next sprint coherent.
