# Planning Vs Execution Prompts

## Purpose

Sprint 016 separates planning prompts from execution prompts.

This change keeps the planning layer intact while giving the runtime a prompt contract that is explicitly implementation-oriented.

## Planning Prompt

Planning prompts are for:

- task design
- architecture
- decomposition

Planning prompts should help an agent decide what needs to be built and how work should be broken down.

Planning prompts do not assume the runtime will create or modify concrete files.

## Execution Prompt

Execution prompts are for:

- file creation
- file modification
- review work
- implementation work

Execution prompts should help an implementation runtime perform scoped work without inferring missing boundaries.

## Core Difference

Planning prompts answer:

- What work exists?
- How should the work be structured?
- What standards and constraints apply?

Execution prompts answer:

- Which project is being changed?
- Which task is in scope?
- Which files are allowed?
- What is the runtime expected to output?
- Is the runtime planning, implementing, reviewing, or revising?

## Required Execution Context

Execution prompts must explicitly contain:

- `projectId`
- `taskId`
- `targetProjectPath`
- `allowedFiles`
- `expectedOutputs`
- `implementationGoal`

The runtime must not infer these values from unrelated repository context.

## Coexistence Rule

- Planning prompts remain in `generated-prompts/` and `generated-prompts/tasks/`
- Execution prompts live in `generated-prompts/execution/` and `generated-prompts/execution/tasks/`
- Planning prompts are not removed
- Execution prompts do not replace planning prompts

## Builder Mode Selection

Examples:

```bash
npm run build-prompt frontend
npm run build-prompt frontend execution
npm run run-tasks
npm run run-tasks execution
```
