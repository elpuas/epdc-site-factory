# Execution Schema

This document defines the canonical execution-package structure for EPDC Site Factory.

## Purpose

An execution package prepares a handoff document for a future execution surface and defines where results should be returned.

It exists to separate:

- Handoff preparation
- Execution preparation
- Execution results
- Review

## Canonical Structure

Every execution package should follow this JSON shape:

```json
{
  "executionId": "generated-prompts--generated-frontend-prompt-execution",
  "promptMode": "execution",
  "projectId": "harbor-point-dental-studio",
  "taskId": "frontend-site-foundation",
  "targetProjectPath": "projects/harbor-point-dental-studio",
  "allowedFiles": [
    "projects/harbor-point-dental-studio/src/layouts/BaseLayout.astro",
    "projects/harbor-point-dental-studio/src/components/site/Header.astro"
  ],
  "executionIntent": "implement",
  "sourceHandoff": "codex-handoff/output/generated-prompts/generated-frontend-prompt-handoff.md",
  "sourcePrompt": "generated-prompts/generated-frontend-prompt.md",
  "category": "frontend",
  "status": "prepared",
  "promptPayload": "# Prompt ...",
  "expectedOutputs": [
    "Implement the requested frontend changes only in the allowed files"
  ],
  "implementationGoal": "Implement the shared site foundation for the target project.",
  "expectedResultPath": "execution/results/generated-prompts/generated-frontend-prompt/result.json",
  "reviewRequirements": {
    "reviewer": "future-qa-layer",
    "approvalStatus": "pending-review",
    "mustReview": [],
    "successConditions": [],
    "failureConditions": [],
    "approvalProcess": []
  },
  "boundaries": [
    "Modify only the declared allowed files inside the target project path."
  ]
}
```

## Supported Execution Intents

- `plan`
- `implement`
- `review`
- `revise`

## Field Definitions

### `executionId`

- Stable identifier for the execution package
- Derived deterministically from the handoff identifier

### `promptMode`

- Declares whether the source prompt is `planning` or `execution`
- Allows planning prompts and execution prompts to coexist without ambiguity

### `projectId`

- Stable project identifier carried into the execution package

### `taskId`

- Stable planner task identifier carried into the execution package

### `targetProjectPath`

- Explicit repository path for the project surface the runtime may inspect or modify

### `allowedFiles`

- Explicit file allowlist for bounded runtime execution
- May be empty for planning-only prompt packages

### `executionIntent`

- Declares whether the runtime package is for `plan`, `implement`, `review`, or `revise`
- Replaces ambiguous planning-only assumptions

### `sourceHandoff`

- Relative path to the handoff document used to build the package

### `sourcePrompt`

- Relative path to the generated prompt referenced by the handoff document

### `category`

- Task or prompt category such as `frontend`, `backend`, `seo`, `content`, or `qa`

### `status`

- Current execution-workflow state
- Initial value: `prepared`

### `promptPayload`

- Full prompt body carried forward from the handoff document
- Must be preserved without semantic modification

### `expectedOutputs`

- Runtime-facing output expectations carried directly into the package

### `implementationGoal`

- Explicit statement of the scoped runtime goal
- Used to keep execution bounded without inference

### `expectedResultPath`

- Predeclared repository path for a future execution result artifact

### `reviewRequirements`

- Required review expectations for the package
- Used later by QA or other review-aware workflow layers

### `boundaries`

- Non-negotiable execution-workflow restrictions
- Must align with the execution intent
- Must not repeat pre-runtime-only restrictions that conflict with implementation work

## Supporting Manifest

The CLI also writes `execution/packages/manifest.json`.

Each manifest entry contains:

- `promptMode`
- `projectId`
- `taskId`
- `sourceHandoff`
- `category`
- `executionPackage`
- `expectedResultPath`
