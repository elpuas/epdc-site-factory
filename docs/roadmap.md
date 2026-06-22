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

Status: Sprint 003 completed

- Expand skill definitions
- Standardize inputs and outputs
- Define reusable patterns for frontend, backend, SEO, and QA

### Sprint 003 - Planner Skill Design

- Replaced the planner placeholder with a documented Planner Skill contract
- Added a JSON schema for planner task output in `planner/task-schema.json`
- Added a realistic dentist-based planning example in `planner/example-output.json`
- Documented the specification-to-task planning workflow in `docs/planning-process.md`

## Phase 4 - Agent Orchestration

- Define agent contracts
- Explore task routing and handoffs
- Prototype orchestration flow

## Phase 5 - Memory

- Design working memory structures
- Explore long-term knowledge storage
- Evaluate SQLite and vector retrieval strategies

## Phase 6 - Project Generation

- Generate websites from specifications
- Validate outputs through QA
- Store completed projects in the workspace
