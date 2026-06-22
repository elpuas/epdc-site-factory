# Task Runner Architecture

This document defines the Task Runner Foundation for EPDC Site Factory.

## Workflow

`SPEC`

`↓`

`Planner Output`

`↓`

`Task Runner`

`↓`

`Context Assembly Engine`

`↓`

`Prompt Builder`

`↓`

`Task Prompt Files`

## Step 1 - SPEC

The specification defines the original project scope.

## Step 2 - Planner Output

The planner converts that scope into ordered tasks with categories, priorities, and dependencies.

## Step 3 - Task Runner

The Task Runner reads the planner output and processes each task in planner order.

Its responsibilities are:

- Iterate over tasks deterministically
- Match each task to its category
- Trigger context assembly for that task
- Trigger prompt generation for that task
- Write a category-sequenced prompt file

## Step 4 - Context Assembly Engine

The context engine builds a task-specific context package from:

- Relevant specification material
- The assigned task
- The owning agent definition
- The required skill definitions
- Shared constraints
- Expected output guidance

## Step 5 - Prompt Builder

The prompt builder consumes that context package and applies the correct template for the task category.

## Step 6 - Task Prompt Files

The outputs are deterministic markdown prompt files in:

- `generated-prompts/tasks/`

Examples:

- `generated-prompts/tasks/frontend-001.md`
- `generated-prompts/tasks/backend-001.md`
- `generated-prompts/tasks/seo-001.md`

## Responsibilities

The Task Runner owns:

- Planner-output iteration
- Category-to-template routing
- Task-level prompt-file naming
- Task-run reporting

The Task Runner does not own:

- Codex execution
- AI calls
- Website generation
- Memory
- Orchestration

## Known Scope

The current implementation supports all categories present in the example planner output:

- `frontend`
- `backend`
- `seo`
- `content`
- `qa`
