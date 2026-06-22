# Roadmap

## Phase 1 - Repository Structure

- Create the base repository layout
- Add foundational documentation
- Add placeholders for agents, skills, templates, memory, projects, and scripts

## Phase 2 - Specifications

Status: Sprint 002 completed

- Define the specification format
- Add examples for different business types
- Establish validation rules for project briefs

### Sprint 002 - Specification System

- Added the canonical specification schema in `specs/schema.md`
- Added realistic example specifications for dentist, clinic, and lawyer projects
- Added a top-level `schema.md` entrypoint for the specification format
- Established documentation-first rules for future project briefs

## Phase 3 - Skills

Status: Sprint 004 completed

- Expand skill definitions
- Standardize inputs and outputs
- Define reusable patterns for frontend, backend, SEO, and QA

### Sprint 003 - Planner Skill Design

- Replaced the planner placeholder with a documented Planner Skill contract
- Added a JSON schema for planner task output in `planner/task-schema.json`
- Added a realistic dentist-based planning example in `planner/example-output.json`
- Documented the specification-to-task planning workflow in `docs/planning-process.md`

### Sprint 004 - Core Skills Foundation

- Replaced the Astro, Supabase, SEO, and QA skill placeholders with implementation guidance
- Added the new Content Skill in `skills/content.md`
- Added `docs/skills-architecture.md` to explain the flow from specifications to tasks to skills to future agents
- Established EPDC implementation standards for frontend, backend, content, SEO, and QA knowledge

## Phase 4 - Agent Orchestration

Status: Sprint 005 completed

- Define agent contracts
- Explore task routing and handoffs
- Prototype orchestration flow

### Sprint 005 - Agent Definitions

- Replaced placeholder agent documents with full contracts for Planner, Frontend, Backend, SEO, QA, and Content agents
- Added `agents/content.md` as the dedicated content-agent contract
- Converted `AGENTS.md` into the central registry for all specialized agents
- Added `docs/agent-architecture.md` to document the flow from specification to planner to specialized agents to outputs

## Phase 5 - Prompt Generation Layer

Status: Sprint 008 completed

- Define reusable prompt structure
- Assemble prompts from specifications, tasks, agents, and skills
- Prepare Codex-ready prompt contracts for future execution

### Sprint 006 - Prompt Generation Layer

- Added agent-specific prompt templates in `prompts/`
- Added the prompt builder documentation layer in `prompt-builder/`
- Added realistic dentist-based prompt examples for frontend, backend, and SEO
- Added `docs/prompt-architecture.md` to document the flow from specification to prompt assembly to Codex

### Sprint 008 - Prompt Builder CLI

- Added the working Prompt Builder CLI in `scripts/build-prompt.js`
- Added deterministic final-render templates in `prompt-builder/templates/`
- Added generated prompt outputs in `generated-prompts/`
- Added expected generated-output examples in `prompt-builder/examples/`
- Added `docs/prompt-builder-architecture.md` to document the flow from context package to prompt file

## Phase 6 - Context Assembly Engine

Status: Sprint 007 completed

- Gather specifications, tasks, agent definitions, and skill definitions into context packages
- Provide a deterministic pre-execution assembly layer
- Keep context assembly separate from prompt execution and Codex integration

### Sprint 007 - Context Assembly Engine

- Added the context engine documentation layer in `context-engine/`
- Added example context packages for frontend, backend, and SEO based on the dentist specification
- Added `scripts/assemble-context.js` to simulate context assembly and print `Assembled Context`
- Added `docs/context-architecture.md` to document the flow from specification to context package

## Phase 7 - Memory

- Design working memory structures
- Explore long-term knowledge storage
- Evaluate SQLite and vector retrieval strategies

## Phase 8 - Project Generation

- Generate websites from specifications
- Validate outputs through QA
- Store completed projects in the workspace
