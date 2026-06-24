# Execution Prompt Validation

## Purpose

This document validates the Sprint 016 execution prompt system using `frontend-site-foundation`.

It compares the planning prompt and the execution prompt for the same task.

## Validation Target

- Project: `harbor-point-dental-studio`
- Task: `frontend-site-foundation`
- Planning prompt: `generated-prompts/tasks/frontend-001.md`
- Execution prompt: `generated-prompts/execution/tasks/frontend-001.md`

## Planning Prompt

The planning prompt is designed to:

- define shared site structure
- explain conversion patterns
- describe frontend scope
- produce implementation guidance

It does not explicitly declare:

- target project path
- allowed files
- runtime intent
- implementation goal as a bounded execution contract

## Execution Prompt

The execution prompt is designed to:

- execute the same task inside a declared project boundary
- expose the target project path directly
- expose the allowed file list directly
- expose expected outputs directly
- declare execution intent directly

The execution prompt for `frontend-site-foundation` now contains:

- `projectId`: `harbor-point-dental-studio`
- `taskId`: `frontend-site-foundation`
- `targetProjectPath`: `projects/harbor-point-dental-studio`
- `allowedFiles`: the shared layout, header, footer, and site data files
- `executionIntent`: `implement`
- `implementationGoal`: implement the shared frontend foundation without expanding scope

## Comparison

### Planning prompt strengths

- Good for task design
- Good for architectural framing
- Good for decomposition and dependency awareness

### Planning prompt weakness for runtime use

- Leaves target files implicit
- Leaves runtime intent implicit
- Leaves implementation boundaries too broad for reliable execution

### Execution prompt strengths

- Declares runtime scope explicitly
- Gives Codex a concrete file boundary
- Makes expected outputs machine-readable and human-readable
- Removes the need for the runtime to infer target project information

## Result

Sprint 016 resolves the Sprint 015 gap for `frontend-site-foundation` by introducing a dedicated execution prompt artifact instead of reusing the planning prompt as the implementation prompt.
