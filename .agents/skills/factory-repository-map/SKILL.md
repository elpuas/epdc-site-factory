---
name: factory-repository-map
description: Use when the task asks about EPDC Site Factory architecture, repository boundaries, documentation ownership, Codex standardization, or which directories to inspect before changing the deterministic pipeline.
---

1. Start with `README.md`, `AGENTS.md`, and `docs/codex-standardization-audit.md`.
2. Use `docs/architecture/README.md` for the cross-repository system map before reading subsystem documents.
3. Route domain questions to the correct layer:
   - `skills/` for EPDC domain contracts
   - `agents/` for agent contracts
   - `prompts/` for planning-prompt guidance
   - `execution-prompts/` for runtime-facing prompts
   - `runtime/` for post-factory execution documentation
   - `assembler/` for deterministic assembly
   - `blueprints/` and `starters/` for reusable implementation assets
4. Do not treat `skills/` as Codex-discoverable skill packages. Repo-scoped Codex skills live under `.agents/skills/`.
5. Prefer low-risk documentation and boundary fixes over architectural redesign unless the task explicitly requires a migration.
