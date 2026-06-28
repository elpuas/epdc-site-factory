# Prompt Architecture

This document defines the prompt layer for EPDC Site Factory.

## Workflow

`SPEC`

`↓`

`Planner`

`↓`

`Task Runner`

`↓`

`Context Assembly Engine`

`↓`

`Prompt Guidance`

`↓`

`Prompt Builder Templates`

`↓`

`Prompt Builder`

`↓`

`Generated Prompts`

## Prompt Layer Split

The prompt layer has two distinct source types.

### Prompt Guidance

Location:

- `prompts/`

Purpose:

- Describe how prompts for each role should be assembled
- Explain source inputs, boundaries, and expected outputs
- Provide architecture guidance, not executable templates
- Remain internal Factory guidance, not Codex custom prompts

### Prompt Builder Templates

Location:

- `prompt-builder/templates/`

Purpose:

- Define the final render structure used by the builder
- Provide placeholder-based executable prompt-file templates

## Why The Split Exists

The guidance documents explain prompt intent and responsibilities. The builder templates define the final file shape.

Keeping them separate allows the repository to:

- Evolve prompt guidance without rewriting builder templates unnecessarily
- Keep executable templates minimal and deterministic
- Distinguish source documentation from generated artifacts

## Canonical Inputs

The Prompt Builder consumes:

- Planner-scoped task ownership
- Canonical JSON context packages
- Agent contracts
- Domain contracts
- Builder templates

## Output

The output is a generated prompt artifact in `generated-prompts/`.

These prompt files are then eligible for downstream packaging by the Codex Handoff Layer.

## Boundary

This prompt layer does not:

- Call Codex
- Call any AI model
- Execute prompts
- Generate websites
- Implement orchestration
- Implement memory

## Codex Terminology Note

The `prompts/` directory is an EPDC Factory layer.

It is not the Codex custom-prompts surface described in the official Codex docs. Codex custom prompts are deprecated and live under a user Codex home directory, not inside the repository. For reusable repository-shared Codex instructions, prefer `AGENTS.md` and `.agents/skills/`.
