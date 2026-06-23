# Codex Execution Process

This document defines the intended Codex runtime process after the factory has produced an execution package.

## Inputs

- Execution Package
- Prompt Files
- Specification

## Outputs

- Generated Files
- Runtime Report
- Review Report

## Process

### 1. Load runtime inputs

- Read the execution package.
- Confirm the package status and expected result path.
- Load the referenced prompt file and project specification.
- Validate that the package, prompt, and specification all point to the same project lineage.

### 2. Start runtime attempt

- Create a runtime execution record with status `pending`.
- Allocate an attempt identifier.
- Transition the attempt to `running` when Codex execution begins.

### 3. Deliver prompt to Codex

- Pass the prompt payload to Codex without changing its meaning.
- Provide the project specification and execution metadata as runtime context.
- Keep the runtime bounded to the category and deliverables declared by the package.

### 4. Capture generated files

- Record every file created or modified by the runtime attempt.
- Store the generated files in a deterministic runtime-owned output structure.
- Preserve enough metadata for QA to trace changes back to the originating package.

### 5. Produce runtime report

- Record attempt timing, runtime identity, input references, status transitions, changed files, and any failure details.
- If execution fails, mark the attempt as `failed` and preserve partial evidence.
- If execution succeeds, mark the attempt as `completed`.

### 6. Produce review report

- Summarize generated files, unresolved concerns, boundary compliance, and any review-needed notes.
- Route the report to QA review before final approval.

### 7. Resolve approval state

- QA review can mark the output approved or request revision.
- Only reviewed outputs may move to `approved`.
- Revision requests should trigger a retry-capable follow-up attempt rather than overwrite the prior record.

## Failure Handling

- Failures must be explicit, logged, and tied to an attempt identifier.
- A failed attempt must preserve error context, partial output references, and the failure stage.
- Failure does not erase prior completed attempts or prior review notes.

## Retry Handling

- Retries should create a new attempt record under the same runtime lineage.
- Retries may follow transient runtime failure, incomplete output, or review-requested revision.
- The retry history should remain visible in the runtime log and review report chain.

## Boundary

This process does not define:

- Codex invocation mechanics
- MCP implementation
- factory-side prompt generation
- project assembly logic inside the factory
