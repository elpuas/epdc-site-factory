# Context Assembly Engine

The Context Assembly Engine is the first executable layer in EPDC Site Factory.

## Purpose

This layer gathers the source material needed for a single unit of downstream work and assembles it into a unified context package.

It combines:

- Project specification
- Assigned task
- Agent definition
- Required skill definitions
- Constraints
- Expected output

## Why This Layer Exists

The repository already defines:

- What a project requires through specifications
- What work exists through planner tasks
- Who owns the work through agent contracts
- How the work should be done through skill contracts
- How prompts may later be assembled through the prompt layer

The Context Assembly Engine exists to gather those sources into one reusable package before any future prompt execution or Codex interaction happens.

## Boundary

This layer does not:

- Integrate Codex
- Call any AI model
- Execute prompts
- Generate websites
- Implement orchestration
- Implement memory

It only assembles context.

## Inputs

The engine gathers material from:

- `specs/`
- `planner/`
- `agents/`
- `skills/`

## Output

The output is an assembled context package shaped by `context-engine/context-schema.md`.

The current simulation script prints:

`Assembled Context`

followed by a JSON representation of the assembled package.

## Current Script

Simulation entrypoint:

- `scripts/assemble-context.js`

Optional context targets:

- `frontend`
- `backend`
- `seo`

Example:

```bash
node ./scripts/assemble-context.js frontend
```

## Example Context Packages

Realistic dentist-based examples live in:

- `context-engine/examples/frontend-context.md`
- `context-engine/examples/backend-context.md`
- `context-engine/examples/seo-context.md`
