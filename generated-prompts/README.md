# Generated Prompts

This directory stores deterministic prompt artifacts produced by the repository CLIs.

## Artifact Status

Everything in this directory is generated output.

These files are not prompt-design source documents. Source examples live in `prompt-builder/examples/`.

## Sources

Generated prompts come from:

- Canonical JSON context packages
- Prompt builder templates
- Planner output
- Agent and skill contracts

## Producers

- `npm run build-prompt`
- `npm run run-tasks`

## Layout

- Root-level generated prompts from standalone builder targets
- `generated-prompts/tasks/` for task-level prompt output

## Behavior

- Re-running the CLIs overwrites these artifacts deterministically
- No Codex execution occurs here
- No AI calls occur here
