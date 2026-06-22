# Context Assembly Engine

The Context Assembly Engine gathers the materials needed for one unit of downstream work and packages them into a canonical JSON context package.

## Purpose

This layer connects:

- Specification scope
- Planner tasks
- Agent ownership
- Skill requirements
- Shared execution constraints

into one deterministic package that downstream layers can consume.

## Canonical Format

The canonical context-package format is JSON.

Why:

- The builder and runner need structured data, not presentation-oriented markdown
- JSON removes ambiguity between source examples and executable artifacts
- The Context Engine already assembles structured objects

Human-readable markdown context examples may still exist as source examples, but the working scripts use JSON context packages.

## Inputs

The Context Engine loads material from:

- `specs/`
- `planner/`
- `agents/`
- `skills/`

## Output

The output is a context package shaped by `context-engine/context-schema.md`.

The current CLI prints:

- `Assembled Context`
- A JSON representation of the assembled package

## CLI

Entrypoint:

- `scripts/assemble-context.js`

Examples:

```bash
npm run assemble-context frontend
npm run assemble-context backend
npm run assemble-context seo
```

## Boundary

This layer does not:

- Call Codex
- Call any AI model
- Generate prompts
- Generate websites
- Implement orchestration
- Implement memory
