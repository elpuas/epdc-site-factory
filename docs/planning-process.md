# Planning Process

This document defines how EPDC Site Factory moves from a project specification to structured implementation tasks.

## Workflow

`SPEC`

`↓`

`Planning`

`↓`

`Task Breakdown`

`↓`

`Specialized Agents`

## Step 1 - SPEC

The process begins with a project specification written in the canonical format defined in `specs/schema.md`.

The specification is the source of truth for:

- Project identity
- Business goals
- Technical requirements
- Required pages
- Required features
- SEO expectations
- Content expectations
- Integrations
- Acceptance criteria

At this stage, the specification describes what must be built. It does not describe how agents execute the work.

## Step 2 - Planning

The Planner Skill reads the specification and translates it into structured implementation work.

Its job is to:

- Interpret scope
- Identify implementation concerns
- Separate work by category
- Preserve dependencies
- Reflect acceptance criteria in the task plan

Planning is a transformation step between requirements and execution. It should reduce ambiguity without inventing unsupported scope.

## Step 3 - Task Breakdown

The output of planning is a structured task list.

Each task must include:

- `id`
- `title`
- `description`
- `category`
- `priority`
- `dependencies`

The planner groups work into these categories:

- `frontend`
- `backend`
- `seo`
- `content`
- `qa`

The task breakdown should answer:

- What must be implemented?
- In what order should it happen?
- Which specialized concern owns each task?
- What work blocks other work?
- How will acceptance criteria be validated later?

## Step 4 - Specialized Agents

After planning, the structured task list becomes the handoff surface for specialized agents.

Those future agents are expected to consume tasks by category:

- Frontend work goes to the Frontend Agent.
- Backend work goes to the Backend Agent.
- SEO work goes to the SEO Agent.
- Content work can be handled by a future content-capable workflow or planning extension.
- QA work goes to the QA Agent.

This repository does not implement that execution flow yet. The current purpose is to define the contract that would make that future workflow possible.

## Planning Principles

- The specification remains the source of truth.
- Planning should create explicit and actionable work units.
- Task order should follow dependencies, not guesswork.
- Conversion-critical work should be prioritized early.
- QA should validate the specification, not invent new requirements.

## Example Flow

For the dentist specification:

1. The planner reads the required pages, appointment form, local SEO requirements, and acceptance criteria.
2. The planner identifies shared frontend structure, page-specific work, content preparation, form-delivery needs, metadata work, and QA checks.
3. The planner assigns each task to a category and defines dependencies.
4. The resulting output becomes a structured task plan that future specialized agents could execute.

## Current Boundary

This planning process documentation does not implement:

- AI task generation
- Agent routing or orchestration
- Memory or retrieval
- Website generation

It only defines the workflow contract between specification authoring and future implementation work.
