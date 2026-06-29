# Codex Skills Architecture

This document explains how EPDC Site Factory separates Codex-native skills from developer documentation, agent contracts, and prompt assets.

## Current Split

| Surface | Role |
| --- | --- |
| `AGENTS.md` | Repository instructions for Codex |
| `.agents/skills/` | Repo-scoped Codex-native reusable workflows |
| `agents/` | EPDC agent contracts that define role boundaries |
| `docs/` | Developer and architecture documentation |
| `prompts/` and `execution-prompts/` | Prompt-generation assets |
| `skills/` | Legacy migration directory, not the active workflow source of truth |

## Active Factory Skills

The current active Codex skills are:

- `.agents/skills/planner/SKILL.md`
- `.agents/skills/astro/SKILL.md`
- `.agents/skills/content/SKILL.md`
- `.agents/skills/seo/SKILL.md`
- `.agents/skills/qa/SKILL.md`
- `.agents/skills/supabase/SKILL.md`
- `.agents/skills/factory-repository-map/SKILL.md`

Each active skill follows the official Codex package format:

- one folder per skill
- `SKILL.md` with `name` and `description` frontmatter
- explicit workflow instructions
- progressive-disclosure friendly references

## Workflow Relationship

`SPEC`

`↓`

`Planner Skill`

`↓`

`Tasks`

`↓`

`Specialist Skills`

`↓`

`Agent Contracts`

`↓`

`Prompt and Runtime Artifacts`

## Architectural Rules

### 1. Skills teach reusable execution behavior

Codex skills should tell the agent how to perform a task:

- when to use the skill
- what context must be loaded
- what instructions to follow
- what constraints to preserve
- what references matter

### 2. Agent contracts stay outside the skill system

The `agents/` directory still defines role boundaries such as Planner, Frontend, Backend, SEO, Content, and QA. Those files explain ownership and outputs, but they are not skill packages.

### 3. Developer documentation stays in `docs/`

Architecture explanation, migration rationale, audits, roadmap records, and sprint records should remain outside `.agents/skills/`.

### 4. Prompt assets stay in prompt directories

`prompts/` and `execution-prompts/` remain source assets for deterministic prompt generation. They are not Codex skills and they are not repository instructions.

## Migration Rule

If a file teaches a reusable agent workflow, it belongs in `.agents/skills/`.

If a file primarily explains the project to humans, it belongs in `docs/`.

If a file defines role ownership, it belongs in `agents/`.
