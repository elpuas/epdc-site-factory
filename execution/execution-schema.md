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
  "sourceHandoff": "codex-handoff/output/generated-prompts/generated-frontend-prompt-handoff.md",
  "sourcePrompt": "generated-prompts/generated-frontend-prompt.md",
  "category": "frontend",
  "status": "prepared",
  "promptPayload": "# Prompt ...",
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
    "Do not call Codex."
  ]
}
```

## Field Definitions

### `executionId`

- Stable identifier for the execution package
- Derived deterministically from the handoff identifier

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

### `expectedResultPath`

- Predeclared repository path for a future execution result artifact

### `reviewRequirements`

- Required review expectations for the package
- Used later by QA or other review-aware workflow layers

### `boundaries`

- Non-negotiable execution-workflow restrictions

Required boundaries:

- No Codex calls
- No AI model calls
- No website generation
- No orchestration
- No memory

## Supporting Manifest

The CLI also writes `execution/packages/manifest.json`.

Each manifest entry contains:

- `sourceHandoff`
- `category`
- `executionPackage`
- `expectedResultPath`
