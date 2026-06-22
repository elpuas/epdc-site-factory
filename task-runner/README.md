# Task Runner

The Task Runner layer reads planner output and generates task-specific prompt files.

## Purpose

This layer connects:

- Planner output
- Task-to-agent ownership
- Context assembly
- Prompt building

into deterministic task prompt files.

## Responsibilities

The Task Runner is responsible for:

- Reading `planner/example-output.json`
- Iterating over tasks
- Matching each task to its agent category
- Assembling a task-specific context package
- Generating a task-specific prompt file
- Writing prompt files into `generated-prompts/tasks/`

## Boundary

The Task Runner does not:

- Integrate Codex
- Call any AI model
- Generate websites
- Implement memory
- Execute prompts

It only converts planned tasks into deterministic prompt files.

## Current Script

- `scripts/run-tasks.js`

## CLI

```bash
npm run run-tasks
```

## Output

The current output format is:

- `generated-prompts/tasks/frontend-001.md`
- `generated-prompts/tasks/backend-001.md`
- `generated-prompts/tasks/seo-001.md`

The runner also generates content and QA task prompts where those categories appear in the planner output.
