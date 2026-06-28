# Codex Repository Standardization Audit

Reviewed on: June 28, 2026

## Objective

Audit EPDC Site Factory against the current official Codex repository conventions and apply only low-risk changes that improve long-term interoperability.

This sprint evaluated:

- repository instructions
- instruction hierarchy
- repository entry points
- skill organization
- documentation boundaries
- prompt-system boundaries
- naming consistency

## Official Codex Sources Reviewed

Primary official guidance reviewed during this audit:

- Codex manual: [developers.openai.com/codex/codex-manual.md](https://developers.openai.com/codex/codex-manual.md)
- Codex manual section: [Custom instructions with AGENTS.md](https://developers.openai.com/codex/guides/agents-md)
- Codex manual section: [Agent Skills](https://developers.openai.com/codex/skills)
- Codex manual section: [Build plugins](https://developers.openai.com/codex/plugins/build)
- Current official examples repository: [github.com/openai/plugins](https://github.com/openai/plugins)
- Legacy skills repository status: [github.com/openai/skills](https://github.com/openai/skills)

Important current-state findings from those sources:

- `AGENTS.md` is the repository instruction surface and should stay small, durable, and repository-specific.
- Codex discovers project instructions by walking from repo root to the current working directory, using the closest file as the most specific override.
- Repo-scoped Codex skills live under `.agents/skills/` and use folder packages with `SKILL.md`.
- Reusable Codex distribution is now plugin-first. The official `openai/skills` repository is deprecated and points users to the plugin workflow and the `openai/plugins` repository.
- Codex custom prompts are deprecated. Reusable repository-shared behavior should prefer `AGENTS.md` and skills.

## Current Repository Structure

Current EPDC architecture remains:

`SPEC -> Planner -> Task Runner -> Context Engine -> Prompt Builder -> Generated Prompts -> Codex Handoff -> Runtime docs / Assembly assets`

The repository currently combines three different kinds of knowledge:

1. Codex-facing repository guidance
2. EPDC architecture and domain contracts
3. Deterministic factory and assembly assets

Before this sprint, those boundaries were partially blurred:

- `AGENTS.md` was acting as an agent registry rather than a Codex instruction file.
- `skills/` used Codex terminology, but the files were EPDC domain-contract documents, not Codex skill packages.
- `prompts/` could be mistaken for Codex custom prompts even though it is an internal Factory guidance layer.

## Areas Already Aligned

### 1. Repository-root instructions exist

The repository already had a top-level `AGENTS.md`, which matches the official Codex instruction-discovery model.

Rationale:

- The surface existed in the correct place.
- The divergence was about content, not location.

### 2. Knowledge is split into durable repository-owned layers

EPDC already separates long-lived knowledge into directories such as `agents/`, `skills/`, `docs/`, `runtime/`, `assembler/`, `starters/`, and `blueprints/`.

Rationale:

- This is compatible with Codex’s preference for durable repository guidance plus reusable workflows.
- The repo is already organized around inspectable artifacts instead of hidden runtime state.

### 3. Prompt generation is repository-owned and deterministic

The prompt builder, execution packages, and assembly pipeline are documented and scripted rather than ad hoc.

Rationale:

- This aligns with Codex’s broader emphasis on explicit context, repeatable workflows, and inspectable artifacts.

### 4. The architecture already distinguishes local repository knowledge from runtime execution

EPDC separates factory preparation from runtime execution and review.

Rationale:

- That boundary is compatible with current Codex guidance around instruction surfaces, runtime context, and external integrations.

## Areas That Differ

### 1. `AGENTS.md` content did not match official Codex guidance

Previous state:

- `AGENTS.md` was a central agent registry.
- It primarily documented architecture instead of giving Codex operational repository guidance.

Official convention:

- `AGENTS.md` should contain persistent repository instructions, routing hints, commands, and review expectations.

Why this matters:

- Using `AGENTS.md` as an architecture registry weakens its value as an instruction surface.
- It also makes instruction hierarchy less clear for future nested overrides.

### 2. `skills/` uses Codex vocabulary for non-Codex package artifacts

Current state:

- `skills/*.md` are domain contracts consumed by the EPDC pipeline.
- They are not discoverable Codex skills.

Official convention:

- Repo-scoped Codex skills live in `.agents/skills/<skill-name>/SKILL.md`.

Why this matters:

- The current naming is understandable inside EPDC, but it diverges from the current Codex package format.
- A future migration should be deliberate instead of assuming these files already satisfy Codex skill expectations.

### 3. The repository had no repo-scoped Codex skill package surface

Current state before this sprint:

- No `.agents/skills/` tree existed.

Official convention:

- Repo-level Codex skills belong in `.agents/skills/`.

Why this matters:

- Without that surface, the repo could not expose Codex-native reusable workflows without overloading other directories.

### 4. `prompts/` terminology could be confused with deprecated Codex custom prompts

Current state:

- `prompts/` is an EPDC architecture layer.

Official convention:

- Codex custom prompts are deprecated and are not a repo-shared surface.

Why this matters:

- The repo should state clearly that `prompts/` is an internal Factory layer, not a Codex prompt-package mechanism.

## Low-Risk Changes Applied In Sprint 023

### 1. Restored `AGENTS.md` to the official Codex role

Applied change:

- Rewrote `AGENTS.md` as a repository instruction file.
- Added repository purpose, routing guidance, boundaries, and validation commands.

Rationale:

- This is the highest-value alignment change with minimal migration risk.
- It makes the instruction hierarchy behave the way current Codex expects.

### 2. Moved the agent registry out of `AGENTS.md`

Applied change:

- Added `docs/agent-registry.md`.
- Moved the registry content there.

Rationale:

- The registry remains documented without occupying the Codex instruction surface.
- This preserves EPDC architecture while aligning `AGENTS.md` with its official role.

### 3. Added a repo-scoped Codex skill package

Applied change:

- Added `.agents/skills/factory-repository-map/SKILL.md`.

Rationale:

- This introduces the current Codex skill package format without migrating the existing EPDC domain contracts.
- It gives the repository a valid Codex-native skills surface immediately.

### 4. Clarified documentation boundaries

Applied change:

- Updated `README.md`, `docs/skills-architecture.md`, `docs/prompt-architecture.md`, `prompts/README.md`, `docs/architecture/README.md`, and `docs/architecture-audit.md`.

Rationale:

- The main interoperability risk in this repo was terminology drift, not missing functionality.
- Boundary clarification reduces ambiguity without forcing a structural redesign.

### 5. Fixed execution-package generation fallback behavior

Applied change:

- Updated `scripts/create-execution-package.js` so handoffs without an explicit `Source prompt` field derive that value from the handoff path instead of crashing.

Rationale:

- The sprint validation requirement exposed a real deterministic-script failure.
- The fix is narrow, backward-compatible, and directly supports the completion rule that existing scripts continue working.

## Recommended Changes

These recommendations are evidence-based but not all were implemented in this sprint.

### 1. Keep `AGENTS.md` small and operational

Recommendation:

- Continue using `AGENTS.md` only for durable Codex guidance, repository routing, commands, and review expectations.

Rationale:

- This follows the current official instruction hierarchy.
- It preserves room for nested `AGENTS.md` files later.

### 2. Keep EPDC domain contracts in `skills/` for now

Recommendation:

- Do not migrate `skills/*.md` in this sprint.
- Treat them as EPDC domain-contract documents until a dedicated migration sprint is approved.

Rationale:

- These files are already wired into the deterministic Factory architecture.
- A direct move to `.agents/skills/` would conflate two different responsibilities: EPDC domain standards and Codex skill packaging.

### 3. Use `.agents/skills/` for future Codex-native workflows

Recommendation:

- Add new repo-shared Codex workflows under `.agents/skills/` instead of `skills/`.

Rationale:

- This follows the official format immediately.
- It allows gradual adoption without destabilizing the current architecture.

### 4. Keep `prompts/` as an internal Factory layer, but document it aggressively

Recommendation:

- Do not rename `prompts/` yet.
- Keep clarifying that it is internal guidance for the EPDC prompt builder rather than a Codex custom-prompt mechanism.

Rationale:

- The current layer name still makes sense inside the Factory.
- Documentation clarification removes most of the interoperability risk without breaking existing references.

## Deferred Changes

### 1. Full migration of `skills/` to Codex skill packages

Deferred because:

- It would require deciding which existing files are domain standards, which are reusable workflows, and which belong in plugin packages.
- That is a design migration, not a low-risk cleanup.

### 2. Plugin packaging for EPDC reusable workflows

Deferred because:

- EPDC currently has architecture contracts and one repo-scoped skill, but not yet a mature set of Codex-native workflows that clearly justify plugin packaging.

### 3. Prompt-system naming cleanup

Deferred because:

- Renaming `prompts/`, `execution-prompts/`, or related scripts would create broad documentation churn for limited immediate value.

### 4. Agent-contract reorganization

Deferred because:

- The existing `agents/` contract set is coherent inside the Factory.
- The main interoperability issue was the misuse of `AGENTS.md`, which is now corrected.

## Naming Assessment

Overall naming is internally consistent, but there are two places where clarification matters:

- `skills/` means EPDC domain contracts, not Codex skill packages.
- `prompts/` means internal Factory prompt guidance, not Codex custom prompts.

Recommendation:

- Preserve current EPDC terminology where it describes real Factory concepts.
- Add documentation guards where Codex uses the same words differently.

Rationale:

- Alignment should reduce ambiguity, not erase useful repository-specific concepts.

## Final Assessment

EPDC Site Factory already aligned with Codex in one important way: it is explicit, documentation-first, and organized around durable repository artifacts.

Its biggest divergences were not architectural quality problems. They were surface-level Codex interoperability issues:

- `AGENTS.md` had the wrong job
- `skills/` used overloaded terminology
- `prompts/` needed a Codex-specific disclaimer
- `.agents/skills/` was missing

Sprint 023 resolves the low-risk part of that gap without redesigning the Factory.

## Future Sprint Candidates

- Skill package migration audit and extraction plan
- EPDC plugin packaging strategy
- Prompt-system terminology cleanup
- Runtime instruction-surface refinement for Codex-specific execution workflows
