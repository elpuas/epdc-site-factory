# Task Runner Architecture

This document defines the Task Runner layer for EPDC Site Factory.

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

`Generated Task Prompts`

## Step 1 - SPEC

The specification defines the original project scope.

## Step 2 - Planner Output

The planner converts that scope into ordered tasks with categories, priorities, and dependencies.

## Step 3 - Task Runner

The Task Runner reads the planner output and processes tasks deterministically in planner order.

Its responsibilities are:

- Iterate over tasks
- Match each task to its category
- Request a canonical JSON context package for that task
- Trigger prompt generation for that task
- Write category-sequenced prompt files
- Report the generated output set

## Step 4 - Context Assembly Engine

The Context Engine provides the task-specific JSON context package required by the runner.

## Step 5 - Prompt Builder

The Prompt Builder consumes that JSON context package and applies the correct template for the task category.

## Step 6 - Generated Task Prompts

The outputs are deterministic markdown prompt files in:

- `generated-prompts/tasks/`

These files can later be packaged by the Codex Handoff Layer.

## Boundaries

The Task Runner owns:

- Planner-output iteration
- Category routing
- Task-level prompt-file naming
- Run reporting

The Task Runner does not own:

- Context-package schema design
- Prompt-template design
- Codex execution
- AI calls
- Website generation
- Memory
- Orchestration
