# Codex Knowledge Architecture

Reviewed on: June 28, 2026

## Objective

Align EPDC Site Factory with the official Codex knowledge model by migrating reusable agent workflows into real repo-scoped Codex skill packages while keeping developer documentation, repository instructions, prompt assets, and agent contracts separate.

Official Codex sources reviewed:

- [Custom instructions with AGENTS.md](https://developers.openai.com/codex/guides/agents-md)
- [Agent Skills](https://developers.openai.com/codex/skills)
- [Customization](https://developers.openai.com/codex/concepts/customization)
- [Build plugins](https://developers.openai.com/codex/plugins/build)
- [Advanced configuration](https://developers.openai.com/codex/config-advanced)

## Current Knowledge Inventory

| Surface | Current Role |
| --- | --- |
| `AGENTS.md` | Repository instructions for Codex |
| `.agents/skills/` | Repo-scoped Codex-native skills |
| `agents/` | EPDC role contracts |
| `docs/` | Developer documentation and architecture explanation |
| `prompts/`, `execution-prompts/` | Prompt-generation assets |
| `runtime/`, `assembler/`, `blueprints/`, `starters/`, `specs/` | Runtime, assembly, and implementation contracts |
| `skills/` | Legacy migration directory only |

## Classification Of Former `skills/` Files

Every former file in `skills/` was reviewed against the official Codex skill definition.

| Former File | Classification | Final Destination | Rationale |
| --- | --- | --- | --- |
| `skills/planner.md` | Codex skill | `.agents/skills/planner/SKILL.md` | It teaches a reusable workflow for transforming specifications into structured tasks. |
| `skills/astro.md` | Codex skill | `.agents/skills/astro/SKILL.md` | It teaches reusable Astro frontend execution behavior for EPDC tasks. |
| `skills/content.md` | Codex skill | `.agents/skills/content/SKILL.md` | It teaches reusable content-structure and CTA workflow behavior. |
| `skills/seo.md` | Codex skill | `.agents/skills/seo/SKILL.md` | It teaches reusable SEO implementation and review behavior. |
| `skills/qa.md` | Codex skill | `.agents/skills/qa/SKILL.md` | It teaches reusable validation and release-readiness behavior. |
| `skills/supabase.md` | Codex skill | `.agents/skills/supabase/SKILL.md` | It teaches reusable backend decision and security behavior for Supabase-backed work. |

## Skills Migrated In Sprint 024

The active source of truth is now:

- `.agents/skills/planner/SKILL.md`
- `.agents/skills/astro/SKILL.md`
- `.agents/skills/content/SKILL.md`
- `.agents/skills/seo/SKILL.md`
- `.agents/skills/qa/SKILL.md`
- `.agents/skills/supabase/SKILL.md`
- `.agents/skills/factory-repository-map/SKILL.md`

Each migrated skill now includes:

- official frontmatter with `name` and `description`
- when-to-use guidance
- required context
- instructions
- constraints
- references

## Final Architecture

| Responsibility | Canonical Surface |
| --- | --- |
| Repository instructions | `AGENTS.md` |
| Repo-scoped Codex skills | `.agents/skills/` |
| Developer documentation | `docs/` |
| Agent role contracts | `agents/` |
| Prompt-generation assets | `prompts/`, `execution-prompts/` |
| Runtime and assembly contracts | `runtime/`, `assembler/`, `blueprints/`, `starters/`, `specs/` |

## Mapping

| Before Sprint 024 | After Sprint 024 |
| --- | --- |
| `skills/*.md` were active workflow files | active workflows live in `.agents/skills/*/SKILL.md` |
| `.agents/skills/` contained only `factory-repository-map` | `.agents/skills/` contains multiple real Factory skills |
| `skills/` was overloaded as both knowledge and workflow | `skills/` is no longer the source of truth for reusable workflows |

## Rationale

### Why these files became Codex skills

The official Codex model defines skills as reusable workflows that Codex can discover and invoke. The migrated files fit that definition because they instruct the agent how to perform planning, frontend, content, SEO, QA, and backend-oriented work.

### Why the old `skills/` files were removed from the active path

Leaving those files as the active source of truth would keep the Factory on a non-native structure even after the skill migration. Sprint 024 therefore moved the actual workflow source into `.agents/skills/` and updated the repository to load those packages directly.

### Why not everything became a skill

Developer documentation, architecture explanation, prompt-generation assets, and role contracts are not reusable Codex workflows. They remain in `docs/`, `prompts/`, `execution-prompts/`, and `agents/` respectively.

## Validation Rules For This Architecture

- Reusable agent workflows belong in `.agents/skills/`.
- Human-oriented explanation belongs in `docs/`.
- Role ownership belongs in `agents/`.
- Repository-wide Codex instructions belong in `AGENTS.md`.
- Prompt-generation assets remain outside the skill system.
