# Roadmap

## Phase 1 - Repository Structure

- Create the base repository layout
- Add foundational documentation
- Establish early conventions for scripts, agents, skills, and project storage

## Phase 2 - Specifications

Status: Sprint 002 completed

- Define the specification format
- Add examples for different business types
- Establish validation rules for project briefs

### Sprint 002 - Specification System

- Added the canonical specification schema in `specs/schema.md`
- Added realistic example specifications for dentist, clinic, and lawyer projects
- Added a top-level `schema.md` entrypoint for the specification format

## Phase 3 - Planning And Skills

Status: Sprint 004 completed

- Define planning output contracts
- Standardize reusable implementation knowledge
- Establish domain-specific skill guidance

### Sprint 003 - Planner Skill Design

- Added `skills/planner.md`
- Added `planner/task-schema.json`
- Added `planner/example-output.json`
- Added `docs/planning-process.md`

### Sprint 004 - Core Skills Foundation

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

- Package generated prompts for execution surfaces
- Preserve deterministic boundaries before model execution
- Prepare for future Codex integration without invoking it yet

## Phase 8 - Memory

- Design working memory structures
- Explore long-term knowledge storage
- Evaluate SQLite and retrieval strategies

## Phase 9 - Project Generation

- Generate websites from specifications
- Validate outputs through QA
- Store completed projects in the workspace
