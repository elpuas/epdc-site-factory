# Skills Architecture

This document explains how EPDC Site Factory connects specifications, planning, task output, implementation skills, and future agents.

## Workflow

`SPEC`

`↓`

`Planner`

`↓`

`Tasks`

`↓`

`Skills`

`↓`

`Future Agents`

## Step 1 - SPEC

The specification defines what a project requires.

It captures:

- Business goals
- Technical requirements
- Page requirements
- Features
- SEO requirements
- Content expectations
- Integrations
- Acceptance criteria

The specification is the source of truth. Everything downstream should stay traceable to it.

## Step 2 - Planner

The Planner Skill translates the specification into structured work.

It does this by:

- Reading the full specification
- Interpreting scope and constraints
- Breaking the work into discrete tasks
- Assigning task categories
- Preserving dependencies and priority

The planner does not implement the work. It defines the work.

## Step 3 - Tasks

The planner output is the handoff contract between planning and implementation knowledge.

Each task identifies:

- What needs to be done
- Which category owns it
- How important it is
- What it depends on

This task layer is important because it prevents future implementation work from skipping directly from a high-level specification into ad hoc execution.

## Step 4 - Skills

Skills define how each category of work should be approached.

Current core skills:

- `skills/astro.md`
- `skills/supabase.md`
- `skills/seo.md`
- `skills/qa.md`
- `skills/content.md`

These skills provide implementation guidance for:

- Frontend structure and Astro standards
- Backend and Supabase rules when backend scope exists
- Search optimization standards
- Quality assurance expectations
- Content organization and conversion patterns

Skills do not decide project scope. They interpret tasks within their domain.

## Terminology Boundary

The files in `skills/` are EPDC domain-contract documents.

They are not the same thing as Codex-discoverable skill packages.

Current Codex convention:

- repo-scoped Codex skills live in `.agents/skills/`
- each Codex skill is a folder with a `SKILL.md`
- Codex uses the folder metadata for discovery and loads the full instructions only when the skill is selected

EPDC keeps `skills/` because these documents define stable domain standards that the Factory pipeline references directly. If EPDC later migrates selected guidance into Codex skill packages, that should happen as an explicit future migration rather than by overloading the existing `skills/` directory.

## Step 5 - Future Agents

Future agents are expected to use tasks plus skills together.

The intended relationship is:

- The specification says what the project needs.
- The planner says what work must be done.
- The skills say how that work should be carried out.
- Future agents would apply those skills to execute the tasks.

This repository does not implement those agents yet. Sprint 004 only defines the knowledge layer they would rely on.

## Design Principles

- Specifications define scope.
- Planner output defines work.
- Skills define implementation standards.
- Future agents should be replaceable without changing the specification format.
- Each layer should remain understandable on its own.

## Current Boundary

This architecture documentation does not implement:

- AI systems
- Orchestration
- Agent lifecycle management
- Code generation
- Website generation

It only defines the knowledge flow that future execution systems would consume.
