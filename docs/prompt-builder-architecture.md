# Prompt Builder Architecture

This document defines the working Prompt Builder layer for EPDC Site Factory.

## Workflow

`SPEC`

`↓`

`Planner`

`↓`

`Task Runner`

`↓`

`Context Assembly Engine`

`↓`

`Prompt Builder`

`↓`

`Generated Prompt Files`

## Step 1 - SPEC

The specification defines the project scope and remains the source of truth.

It establishes:

- Business goals
- Technical requirements
- Pages
- Features
- SEO requirements
- Content requirements
- Integrations
- Acceptance criteria

## Step 2 - Planner

The planner converts specification scope into structured tasks.

This matters because the Prompt Builder should never guess scope directly from raw project documents.

## Step 3 - Task Runner

The Task Runner determines which task is being converted into a prompt and which category owns that task.

That gives the Prompt Builder a deterministic upstream work unit instead of a broad project-wide request.

## Step 4 - Context Assembly Engine

The Context Engine assembles the canonical JSON context package for that work unit.

That package includes:

- Project specification summary
- Assigned task
- Agent definition
- Required skills
- Constraints
- Expected output

The Prompt Builder consumes this JSON package directly.

## Step 5 - Prompt Builder

The Prompt Builder is responsible for:

- Reading a canonical JSON context package
- Selecting the correct builder template by category
- Rendering prompt sections in a stable order
- Writing a deterministic prompt file

The Prompt Builder does not:

- Call Codex
- Call any AI model
- Execute prompts
- Generate websites
- Implement orchestration
- Implement memory

## Step 6 - Generated Prompt Files

The output of the Prompt Builder is a deterministic markdown prompt file stored in `generated-prompts/`.

These files are:

- Rebuildable
- Derived from source contracts
- Ready for downstream handoff
- Still separate from execution

## Prompt Layer Clarification

The prompt layer has two source types:

- `prompts/`: guidance documents describing how prompts should be assembled
- `prompt-builder/templates/`: executable render templates consumed by the builder

This split exists so architecture guidance can evolve without changing the final prompt-file layout every time.

## Boundaries

The Prompt Builder owns:

- Prompt rendering
- Template application
- Prompt-file writing
- CLI output reporting

The Context Engine owns:

- Context assembly
- Context-package structure
- Source selection for task, agent, and skills

The Task Runner owns:

- Task iteration
- Category routing
- Prompt-file naming for task-level runs

## Current Status

The current implementation supports deterministic prompt generation for:

- `frontend`
- `backend`
- `seo`
- `content`
- `qa`
