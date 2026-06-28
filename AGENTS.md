# EPDC Site Factory Instructions

## Repository Purpose

EPDC Site Factory is a documentation-first repository for a deterministic website factory.

The active repository scope is:

- specifications
- planning contracts
- domain guidance
- prompt and execution-package generation
- deterministic project assembly
- runtime documentation

The repository does not currently implement:

- Codex orchestration
- live model execution
- agent memory
- autonomous website generation inside the factory layer

## Instruction Priorities

- Treat this file as repository guidance for Codex.
- Treat nested `AGENTS.md` files as more specific overrides if they are added later.
- Treat `.agents/skills/` as the active source of truth for repo-scoped Codex skills.
- Treat `skills/` as a legacy migration directory, not as the active workflow surface.

## Preferred Entry Points

Start with these files before broad exploration:

1. `README.md`
2. `docs/codex-standardization-audit.md`
3. `docs/architecture/README.md`
4. the subsystem README for the area being changed

Use targeted follow-up reads after that:

- `docs/agent-registry.md` for agent definitions
- `.agents/skills/` for repo-scoped Codex skills
- `agents/` for agent contracts
- `prompts/` for planning-prompt guidance
- `execution-prompts/` for runtime-facing prompt templates
- `runtime/` for post-factory execution documentation
- `assembler/` for deterministic project assembly
- `blueprints/` and `starters/` for reusable implementation assets

## Repository Boundaries

- Keep Codex-specific conventions in `AGENTS.md`, `.agents/skills/`, and related Codex-facing docs.
- Keep developer documentation in `docs/`, implementation-role contracts in `agents/`, prompt assets in `prompts/` and `execution-prompts/`, and runtime or assembly knowledge in `runtime/`, `assembler/`, `starters/`, and `blueprints/`.
- Keep `prompts/` as internal Factory prompt-guidance documents. They are not Codex custom prompts.
- Do not redesign the Factory when a documentation boundary fix is sufficient.
- Prefer additive, low-risk standardization over migrations that would reshape the existing architecture.

## Change Rules

- Preserve the deterministic factory pipeline.
- Reuse official Codex terminology when it improves interoperability.
- Do not relabel existing EPDC concepts unless the change removes real ambiguity.
- Document structural deviations from official Codex conventions before proposing a migration.

## Validation

When repository docs or deterministic scripts change, verify the affected commands still run:

- `npm run assemble-context`
- `npm run build-prompt`
- `npm run run-tasks`
- `npm run prepare-handoff`
- `npm run create-execution-package`
- `npm run create-project -- <blueprint> <project-name>`
