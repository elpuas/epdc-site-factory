# Runtime Schema

This document defines the canonical runtime input, output, and status contract for EPDC Site Factory.

## Purpose

The runtime schema defines the minimum shape required for an execution surface to consume a factory output and return reviewable artifacts.

It exists to separate:

- factory-owned preparation artifacts
- runtime-owned execution artifacts
- QA-owned approval outcomes

## Canonical Runtime Contract

Every runtime execution should be representable with this shape:

```json
{
  "runtimeExecutionId": "generated-prompts--generated-frontend-prompt--codex--attempt-001",
  "runtimeName": "codex",
  "status": "pending",
  "inputs": {
    "executionPackage": "execution/packages/generated-prompts/generated-frontend-prompt-execution.json",
    "generatedPrompt": "generated-prompts/generated-frontend-prompt.md",
    "projectSpecification": "specs/examples/dentist.md"
  },
  "outputs": {
    "generatedFilesPath": "runtime/results/generated-prompts/generated-frontend-prompt/codex/attempt-001/files/",
    "runtimeLogsPath": "runtime/results/generated-prompts/generated-frontend-prompt/codex/attempt-001/runtime-log.json",
    "reviewNotesPath": "runtime/results/generated-prompts/generated-frontend-prompt/codex/attempt-001/review-notes.md"
  },
  "review": {
    "reviewStatus": "pending",
    "reviewOwner": "qa-layer",
    "notes": []
  },
  "attempt": {
    "number": 1,
    "retryOf": null
  }
}
```

## Inputs

The runtime must accept these inputs:

### Execution Package

- The canonical execution artifact created by `execution/`
- Defines prompt payload, category, boundaries, expected results, review requirements, and explicit runtime scope

### Generated Prompt

- The prompt artifact referenced by the execution package lineage
- Used as the direct runtime prompt input or as a validation reference when the execution package already embeds the prompt payload

### Project Specification

- The original project specification that defines business scope and acceptance intent
- Used to keep runtime execution aligned with the source contract

## Outputs

The runtime must return these outputs:

### Generated Files

- The files created or modified by the runtime attempt
- Must be stored in a deterministic runtime-owned results location

### Runtime Logs

- Structured execution records for the attempt
- Must include runtime identity, timestamps, status changes, failure details, and retry lineage

### Review Notes

- Human-reviewable notes for QA or runtime review
- Can include scope concerns, file summaries, blocking issues, and approval context

## Status Values

Supported runtime execution states:

### `pending`

- Runtime input exists but execution has not started

### `running`

- The runtime is actively processing the execution package

### `completed`

- The runtime produced reviewable output and logs
- Completion does not imply approval

### `failed`

- The runtime stopped without producing an acceptable reviewable output
- Failure details must be recorded in runtime logs

### `approved`

- QA or the designated review process accepted the runtime output
- This is a post-review state, not an execution-only state

## State Transition Rules

- `pending` -> `running`
- `running` -> `completed`
- `running` -> `failed`
- `completed` -> `approved`
- `failed` -> `pending` for a new retry attempt with preserved lineage

## Runtime Logging Requirements

Each attempt log should record:

- `runtimeExecutionId`
- `runtimeName`
- `status`
- `inputReferences`
- `startedAt`
- `endedAt`
- `generatedFiles`
- `failures`
- `reviewOutcome`
- `retryHistory`

## Boundary

This schema does not define:

- MCP implementation details
- factory prompt generation rules
- memory behavior
- runtime-specific APIs

It defines only the minimum cross-runtime contract.

## Runtime Scope Rule

When the execution package provides:

- `projectId`
- `taskId`
- `targetProjectPath`
- `allowedFiles`
- `executionIntent`
- `expectedOutputs`
- `implementationGoal`

the runtime must consume those values directly.

The runtime must not infer them from unrelated repository context.
