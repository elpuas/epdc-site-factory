# Execution Results

This directory is reserved for future execution output artifacts.

## Expected Structure

Future execution output should be stored under paths declared by execution packages, for example:

- `execution/results/generated-prompts/generated-frontend-prompt/result.json`
- `execution/results/generated-prompts/tasks/frontend-001/result.json`
- `execution/results/generated-prompts/tasks/backend-001/result.json`

## Expected Result Contents

Each future result artifact should preserve:

- The originating execution package identifier
- The source handoff reference
- The source prompt reference
- The category
- The execution status
- The produced output body or artifact references
- The review status

## Boundary

This directory documents structure only in the current phase.

No execution output is implemented here yet.
