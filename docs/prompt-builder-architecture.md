# Prompt Builder Architecture

This document defines the first working Prompt Builder layer for EPDC Site Factory.

## Workflow

`SPEC`

`↓`

`Planner`

`↓`

`Tasks`

`↓`

`Context Assembly Engine`

`↓`

`Prompt Builder`

`↓`

`Prompt File`

## Step 1 - SPEC

The specification remains the source of truth for project scope.

## Step 2 - Planner

The planner turns specification requirements into structured tasks.

## Step 3 - Tasks

Tasks determine the work unit, category ownership, and relevant dependencies.

## Step 4 - Context Assembly Engine

The context engine builds the input package the prompt builder consumes.

## Step 5 - Prompt Builder

The prompt builder:

- Reads a context package
- Chooses the correct template
- Assembles the final prompt
- Writes a deterministic prompt file

## Step 6 - Prompt File

The output is a rebuildable prompt file stored under `generated-prompts/`.

## Boundaries

The Prompt Builder does not:

- Call Codex
- Call any AI model
- Generate websites
- Implement memory
- Execute prompts
