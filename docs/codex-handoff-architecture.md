# Codex Handoff Architecture

This document defines the Codex Handoff Layer for EPDC Site Factory.

## Workflow

`SPEC`

`↓`

`Planner`

`↓`

`Task Runner`

`↓`

`Context Engine`

`↓`

`Prompt Builder`

`↓`

`Codex Handoff Layer`

`↓`

`Codex`

## Responsibilities

The Codex Handoff Layer is responsible for:

- Reading generated prompt files
- Attaching handoff metadata
- Preserving prompt payloads unchanged
- Writing deterministic handoff documents
- Emitting a manifest of prepared handoffs

## Inputs

- Prompt files from `generated-prompts/`
- Task prompt files from `generated-prompts/tasks/`

## Outputs

- Handoff documents in `codex-handoff/output/`
- A JSON manifest at `codex-handoff/output/manifest.json`

## Why This Layer Exists

This layer exists so prompt generation and prompt execution stay separate.

That separation makes it possible to:

- Review execution-ready payloads before using them
- Route prompts to future execution surfaces without rebuilding them
- Keep the non-AI pipeline deterministic and testable

## Boundaries

This layer does not:

- Call Codex
- Call any AI model
- Execute prompts
- Generate websites
- Implement orchestration
- Implement memory

It only prepares the final handoff package.
