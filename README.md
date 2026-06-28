# EPDC Site Factory

EPDC Site Factory is a documentation-first workspace for designing a deterministic pipeline that turns structured project specifications into execution-ready prompt artifacts for future Codex-driven work.

The repository currently defines architecture, schemas, contracts, and local CLI layers. It does not call Codex, call any AI model, generate websites, implement orchestration, or implement memory.

## Current Architecture

The current pipeline is:

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

`Generated Prompts`

`↓`

`Codex Handoff Layer`

`↓`

`Codex`

Current execution stops before Codex. The repository prepares deterministic artifacts only.

## Active Layers

### Specification Layer

- Canonical schema: `specs/schema.md`
- Realistic examples: `specs/examples/`

### Planning Layer

- Planner skill: `skills/planner.md`
- Planner output schema: `planner/task-schema.json`
- Example planner output: `planner/example-output.json`

### Agent and Skill Contracts

- Codex repository instructions: `AGENTS.md`
- Agent registry: `docs/agent-registry.md`
- Agent contracts: `agents/`
- EPDC skill contracts: `skills/`
- Repo-scoped Codex skills: `.agents/skills/`

### Context Engine

- Architecture and schema: `context-engine/`
- Canonical context format: JSON context package
- CLI: `npm run assemble-context`

### Prompt Layer

- Prompt guidance documents: `prompts/`
- Prompt builder schema and executable templates: `prompt-builder/`
- CLI: `npm run build-prompt`

### Task Runner

- Task runner docs and schema: `task-runner/`
- CLI: `npm run run-tasks`

### Codex Handoff Layer

- Handoff docs and schema: `codex-handoff/`
- CLI: `npm run prepare-handoff`

## Source Examples vs Generated Artifacts

Source examples:

- `specs/examples/`
- `prompt-builder/examples/`
- `codex-handoff/examples/`

Generated artifacts:

- `generated-prompts/`
- `generated-prompts/tasks/`
- `codex-handoff/output/`

The source example directories document intended structures. The generated-artifact directories contain deterministic outputs produced by repository scripts.

## Canonical Context Format

The canonical context package format is JSON.

Reason:

- The Context Engine already assembles structured objects.
- JSON provides one stable format for the Context Engine, Prompt Builder, and Task Runner.
- Human-readable markdown context examples may still exist for illustration, but they are not the canonical executable format.

## Repository Structure

```text
epdc-site-factory/
├── .agents/
├── AGENTS.md
├── README.md
├── agents/
├── codex-handoff/
├── context-engine/
├── docs/
├── generated-prompts/
├── planner/
├── prompt-builder/
├── prompts/
├── scripts/
├── skills/
├── specs/
├── task-runner/
└── templates/
```

## CLI Entry Points

- `npm run assemble-context`
- `npm run build-prompt`
- `npm run run-tasks`
- `npm run prepare-handoff`

## Design Principles

- Keep specifications as the source of truth.
- Keep every layer deterministic and inspectable.
- Keep Codex-specific repository guidance separate from architecture documentation.
- Separate contracts from generated artifacts.
- Separate context assembly from prompt rendering.
- Separate prompt rendering from Codex handoff.
- Avoid external dependencies unless clearly justified.

## Out Of Scope

The repository still does not implement:

- Codex execution
- AI model calls
- Website generation
- Orchestration
- Memory
- External API integration

## Current Status

The project has progressed from scaffolding into a deterministic pre-execution pipeline:

- Specification schema defined
- Planner contract defined
- Agent and skill contracts defined
- Context assembly implemented
- Prompt generation implemented
- Task runner implemented
- Codex handoff packaging implemented

The next stages should build on this cleanup baseline rather than adding new overlapping formats.
