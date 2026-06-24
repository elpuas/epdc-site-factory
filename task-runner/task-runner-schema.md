# Task Runner Schema

This document defines the reusable structure for Task Runner output.

## Purpose

The Task Runner output records how planner tasks were converted into generated prompt files.

## Canonical Structure

```json
{
  "sourcePlannerOutput": "planner/example-output.json",
  "generatedAtLayer": "task-runner",
  "promptMode": "execution",
  "tasksProcessed": [
    {
      "taskId": "frontend-core-pages",
      "category": "frontend",
      "contextTarget": "frontend",
      "promptMode": "execution",
      "promptFile": "generated-prompts/execution/tasks/frontend-002.md"
    }
  ]
}
```

## Field Definitions

### sourcePlannerOutput

- Path to the planner output file used by the runner.

### generatedAtLayer

- Stable identifier for the producing layer.
- Current value: `task-runner`

### promptMode

- The prompt mode used for the run
- Supported values: `planning`, `execution`

### tasksProcessed

- Array describing every task the runner converted into a prompt file.

Each entry should contain:

- `taskId`
- `category`
- `contextTarget`
- `promptMode`
- `promptFile`

## Design Rules

- Output must be deterministic for the same planner input.
- Task ordering should follow planner task order.
- Prompt file naming should be sequential by category.
- Every processed task should map to exactly one generated prompt file.
