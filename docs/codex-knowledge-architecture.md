# Codex Knowledge Architecture

Reviewed on: June 28, 2026

## Objective

Standardize the EPDC Site Factory knowledge architecture so it aligns with the current official Codex model without redesigning the Factory pipeline.

Official Codex sources reviewed for this audit:

- Codex manual section: [Custom instructions with AGENTS.md](https://developers.openai.com/codex/guides/agents-md)
- Codex manual section: [Agent Skills](https://developers.openai.com/codex/skills)
- Codex manual section: [Build plugins](https://developers.openai.com/codex/plugins/build)
- Codex manual section: [Customization](https://developers.openai.com/codex/concepts/customization)
- Codex manual section: [Advanced configuration](https://developers.openai.com/codex/config-advanced)

Key official constraints used in this sprint:

- `AGENTS.md` is the durable repository-instructions surface and is discovered by directory hierarchy.
- Repo-scoped Codex skills live under `.agents/skills/<skill-name>/SKILL.md`.
- A Codex skill is a reusable workflow package, not a general documentation page.
- Skills use progressive disclosure and should remain self-contained packages.
- Plugins are the installable distribution unit; direct skill folders are for local or repo-scoped authoring.

## Current Repository Knowledge Inventory

The repository currently contains six distinct knowledge types:

| Knowledge Type | Repository Surface | Purpose |
| --- | --- | --- |
| Repository instructions | `AGENTS.md`, future nested `AGENTS.md` files | Persistent Codex guidance for working in this repo |
| Repo-scoped Codex skills | `.agents/skills/` | Reusable Codex-native workflows for this repo |
| EPDC domain contracts | `skills/` | Stable implementation standards consumed by the Factory architecture |
| Developer and architecture documentation | `docs/`, `README.md`, subsystem READMEs | Explain the system to engineers |
| Prompt and execution references | `prompts/`, `execution-prompts/` | Define source guidance and runtime-facing prompt templates |
| Runtime and assembly contracts | `runtime/`, `assembler/`, `blueprints/`, `starters/`, `specs/` | Define deterministic inputs, outputs, and implementation assets |

## Classification Of Existing `skills/` Documents

The current `skills/` directory is not a Codex skill package surface. Each file was classified individually against the official Codex skill definition.

| Current File | Classification | Recommended Destination | Reasoning |
| --- | --- | --- | --- |
| `skills/planner.md` | Planning contract | Keep in `skills/` for now as a legacy path, but treat it as an EPDC planning contract | It defines planner inputs, outputs, task categories, and constraints for the Factory. It is not a reusable Codex workflow package and is not authored in `SKILL.md` format. |
| `skills/astro.md` | Domain contract | Keep in `skills/` for now as a legacy path, but treat it as an EPDC frontend domain contract | It explains Astro implementation standards for EPDC-generated projects. It documents project architecture rather than a Codex-invoked workflow. |
| `skills/content.md` | Domain contract | Keep in `skills/` for now as a legacy path, but treat it as an EPDC content domain contract | It describes content standards and conversion rules. It is reference guidance, not a self-contained agent workflow package. |
| `skills/seo.md` | Domain contract | Keep in `skills/` for now as a legacy path, but treat it as an EPDC SEO domain contract | It captures SEO standards for the Factory. It does not define a Codex skill trigger, package structure, or workflow lifecycle. |
| `skills/qa.md` | Domain contract | Keep in `skills/` for now as a legacy path, but treat it as an EPDC QA domain contract | It defines validation expectations and release criteria. It is a standards document rather than a Codex skill. |
| `skills/supabase.md` | Domain contract | Keep in `skills/` for now as a legacy path, but treat it as an EPDC backend domain contract | It defines backend decision rules for Supabase-backed work. It is architecture guidance, not a Codex package workflow. |

### Audit Conclusion

No document currently stored under `skills/` qualifies as a true Codex skill under the official package model.

The only confirmed repo-scoped Codex skill currently in the repository is:

- `.agents/skills/factory-repository-map/SKILL.md`

That package already follows the official Codex skill structure and should remain in `.agents/skills/`.

## Final Knowledge Architecture

The canonical architecture after this sprint is:

| Responsibility | Canonical Surface | Notes |
| --- | --- | --- |
| Repository instructions for Codex | `AGENTS.md` and future nested `AGENTS.md` files | Must stay small, operational, and repository-specific |
| Repo-scoped Codex workflows | `.agents/skills/` | Use only for true Codex skills with `SKILL.md` packages |
| EPDC domain contracts | `skills/` | Legacy path retained for compatibility; these are not Codex skills |
| Developer documentation | `docs/`, `README.md`, subsystem READMEs | Human-oriented explanation of architecture and decisions |
| Reference and prompt guidance | `prompts/`, `execution-prompts/` | Source guidance and templates, not skills |
| Runtime contracts | `runtime/`, `execution/`, `codex-handoff/` | Define post-factory execution boundaries |
| Implementation assets | `blueprints/`, `starters/` | Reusable code and project scaffolding assets |
| Project specifications | `specs/` | Canonical input contract for planning and assembly |

## Mapping From Current Structure To Canonical Meaning

| Current Structure | Canonical Meaning After Sprint 024 | Migration Decision |
| --- | --- | --- |
| `AGENTS.md` | Repository instructions | Keep in place |
| `.agents/skills/` | Repo-scoped Codex skill packages | Keep in place and use for future Codex-native workflows |
| `skills/` | EPDC domain contracts on a legacy path | Keep path for now, change terminology, do not treat as Codex skills |
| `docs/skills-architecture.md` | EPDC domain-contract architecture doc | Keep file for continuity, update content to reflect Codex terminology |
| `prompts/` | Factory prompt-guidance documents | Keep in place |
| `execution-prompts/` | Runtime-facing prompt templates | Keep in place |
| `runtime/` | Runtime contracts and runtime validation docs | Keep in place |
| `specs/` | Project specification contracts | Keep in place |
| `blueprints/` | Reusable implementation assets | Keep in place |
| `starters/` | Canonical project starters | Keep in place |

## Architectural Rationale

### 1. Why `AGENTS.md` stays narrow

Official Codex guidance is explicit that `AGENTS.md` is the persistent instruction surface loaded before work begins. Mixing developer documentation or architecture exposition into `AGENTS.md` weakens instruction discovery and makes hierarchy harder to reason about.

### 2. Why `skills/` is not migrated in this sprint

The documents under `skills/` are already embedded in the deterministic Factory architecture and are referenced across planning, context, and prompt layers. Moving them into `.agents/skills/` would imply they are Codex skill packages, which would be inaccurate according to the official skill model.

The low-risk correction is terminology, not relocation.

### 3. Why `.agents/skills/` remains the only Codex skill surface

Official Codex skills are package workflows with `SKILL.md`, optional references, and optional scripts. Using `.agents/skills/` only for actual Codex workflows keeps discovery behavior predictable and prevents documentation pages from being mistaken for invocable capabilities.

### 4. Why external knowledge should be referenced, not copied

Official Codex guidance supports lightweight skills with progressive disclosure. The Factory should therefore reference authoritative external sources when a workflow depends on them instead of maintaining duplicate internal copies that will drift.

## Recommendations

### Implemented In Sprint 024

- Establish `docs/codex-knowledge-architecture.md` as the canonical audit and architecture record for Codex-facing knowledge boundaries.
- Keep `AGENTS.md` limited to repository instructions.
- Preserve `.agents/skills/` as the only repo-scoped Codex skill surface.
- Reclassify the contents of `skills/` as EPDC domain contracts instead of Codex skills.
- Update active architecture docs and supporting terminology so the repository stops describing those domain contracts as Codex skills.

### Deferred By Design

- Do not rename the `skills/` directory in this sprint.
- Do not move existing `skills/*.md` files into `.agents/skills/`.
- Do not convert domain contracts into plugin packages.
- Do not redesign the runtime, blueprint, starter, or assembly systems.

These changes would be broader architectural migrations, not low-risk standardization.

## Validation Checklist

- Every document currently under `skills/` was classified individually.
- No non-skill document was moved into `.agents/skills/`.
- The existing repo-scoped Codex skill package remains in the official package structure.
- `AGENTS.md` remains dedicated to repository instructions.
- No duplicate copy of official Codex documentation was introduced.

## Next Step

If EPDC later wants Codex-native reusable workflows for planning, frontend execution, QA review, or runtime operations, each one should be created as a new package under `.agents/skills/<name>/SKILL.md` and should reference the relevant EPDC domain contracts instead of duplicating them.
