# Generated Prompts

This directory stores deterministic prompt files produced by the EPDC executable layers.

## Contents

- Root-level generated prompts created by `npm run build-prompt`
- Task-level generated prompts created by `npm run run-tasks`

## Current Task Output Directory

- `generated-prompts/tasks/`

## Behavior

- Generated files are build artifacts.
- Re-running the CLI commands overwrites the existing outputs with deterministic content.
- No AI calls or Codex integration happen while generating these files.
