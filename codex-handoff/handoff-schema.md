# Handoff Schema

This document defines the Codex handoff structure used by EPDC Site Factory.

## Purpose

The handoff document packages a generated prompt with the metadata needed for future Codex execution.

It exists to separate:

- Prompt generation
- Prompt execution

## Canonical Structure

Every handoff document should follow this markdown structure:

```md
# Codex Handoff

## Handoff Metadata

## Responsibilities

## Boundaries

## Expected Output

## Prompt Payload
```

## Section Definitions

### Handoff Metadata

Contains:

- Handoff ID
- Source prompt path
- Category
- Intended consumer
- Preparation status

### Responsibilities

Defines what the handoff layer is expected to preserve for downstream execution.

### Boundaries

Defines what the handoff layer must not do.

Required boundaries:

- No Codex calls
- No AI model calls
- No website generation
- No orchestration
- No memory

### Expected Output

Defines what the downstream execution layer should receive.

### Prompt Payload

Contains the full generated prompt body without semantic modification.

## Supporting Manifest

The CLI also writes `codex-handoff/output/manifest.json` to summarize prepared handoffs.

Each entry contains:

- `sourcePrompt`
- `category`
- `handoffFile`
