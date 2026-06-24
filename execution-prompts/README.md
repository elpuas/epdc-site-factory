# Execution Prompts

This directory contains the runtime-facing prompt templates used to generate execution prompts.

## Purpose

Execution prompts are distinct from planning prompts.

They exist to prepare implementation or review work for a runtime such as Codex without forcing the runtime to infer:

- project identity
- task identity
- target project path
- allowed files
- expected outputs
- implementation intent

## Template Set

- `templates/frontend-implementation.md`
- `templates/backend-implementation.md`
- `templates/seo-implementation.md`
- `templates/qa-review.md`
- `templates/content-implementation.md`

## Design Rules

- Execution prompts are runtime-facing, not architecture-facing.
- Execution prompts must contain explicit runtime context.
- Execution prompts must stay bounded to the declared `targetProjectPath` and `allowedFiles`.
- Execution prompts must coexist with the planning prompts in `prompt-builder/templates/`.
- Execution prompts do not replace planning prompts.

## Generated Output

The prompt builder writes execution prompt artifacts under:

- `generated-prompts/execution/`
- `generated-prompts/execution/tasks/`

Planning prompts remain under:

- `generated-prompts/`
- `generated-prompts/tasks/`
