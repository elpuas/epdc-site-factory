# Runtime Foundation

The Runtime Foundation layer defines how an external AI runtime consumes EPDC execution packages after the factory finishes its deterministic work.

## Purpose

The factory now produces:

- execution packages
- generated prompts
- deterministic context and specification references

The runtime layer defines what happens next when a concrete execution surface such as Codex, Claude Code, Cursor, or OpenCode is chosen.

This layer exists to separate:

- factory preparation
- runtime execution
- runtime review
- runtime retry handling

## Inputs

The runtime layer consumes:

- `execution/` package artifacts
- generated prompt artifacts referenced by the package
- project specifications referenced by the package lineage
- explicit runtime scope fields such as `projectId`, `taskId`, `targetProjectPath`, `allowedFiles`, `expectedOutputs`, and `implementationGoal`

## Outputs

The runtime layer produces:

- generated files
- runtime logs
- runtime reports
- review notes

## Core Responsibilities

- Read an execution package without changing its intended scope.
- Deliver the prompt payload to the selected runtime.
- Ensure the runtime also receives the project specification and other required context references.
- Respect the declared `executionIntent` without inferring missing target files or goals.
- Capture generated files in a reviewable output structure.
- Record execution events, failures, retries, and final state transitions.
- Route outputs into QA review before they are treated as approved.

## Required Runtime Behaviors

### Execution package consumption

- Read package metadata and prompt payload exactly as prepared by the factory.
- Respect declared boundaries and expected result locations.
- Keep category and task traceability intact.

### Prompt delivery

- Pass the generated prompt to the selected runtime as an execution input, not as a factory rewrite step.
- Preserve prompt meaning and package lineage.
- Attach the related specification and execution metadata required for scoped execution.
- Do not infer file scope when `allowedFiles` is declared by the execution package.

### Generated file review

- Store generated files in a deterministic output location.
- Produce a runtime report that identifies what changed, what was created, and what requires review.
- Hand the output to QA review before final approval.

### Failure handling

- Mark runtime state as `failed` when execution stops before producing a reviewable output.
- Record the failure reason, failing step, and any recoverable context in runtime logs.
- Do not hide partial output or silently overwrite prior attempts.

### Retry handling

- Retries must create a new attempt record tied to the same runtime input lineage.
- Retry only from runtime-managed causes such as transient tool failure, incomplete output, or review-requested revision.
- Preserve prior logs and review notes so later approval can see the full attempt history.

### Runtime log storage

- Logs should be stored under a runtime-owned results area, not inside the factory planning layers.
- Each execution attempt should have its own log artifact.
- Logs should capture timestamps, runtime identity, input references, status transitions, review outcomes, and retry history.

## Boundary

The Runtime Foundation does not:

- redesign the factory
- change planner, skill, or prompt contracts
- add memory systems
- implement MCP integrations in this sprint
- generate projects inside the factory layer

It only defines the execution boundary that begins after an execution package exists.
