# Astro Starter

## Purpose

The EPDC Astro Starter exists so the Factory can begin future generated projects from a maintained Astro foundation instead of expecting an external AI runtime to bootstrap Astro from scratch.

This changes the factory boundary in a controlled way:

- the Factory will own the reusable Astro baseline
- Blueprints will extend that baseline in future sprints
- the external runtime will focus on bounded implementation work instead of framework initialization

Sprint 018 creates the starter only. It does not integrate the starter into the generation pipeline yet.

## Why The Factory Starts From A Starter

The current factory architecture prepares prompts and execution packages well, but the first generated validation project proved that generated output could still lack a full Astro bootstrap contract.

A maintained starter improves:

- consistency across future projects
- alignment with current Astro defaults
- deterministic file expectations for Blueprints and execution prompts
- lower runtime variance when an external AI system begins implementation

## Official Astro Baseline

Research date:

- 2026-06-25

Primary references:

- https://docs.astro.build/en/getting-started/
- https://docs.astro.build/en/install-and-setup/
- https://docs.astro.build/en/basics/project-structure/
- https://docs.astro.build/en/guides/typescript/
- https://docs.astro.build/en/guides/build-with-ai/
- https://docs.astro.build/en/concepts/islands/

Observed current defaults from the official CLI:

- `npm create astro@latest` currently defaults to the `basics` template.
- The generated starter currently uses `astro` `^7.0.2`.
- The generated starter currently uses `astro/tsconfigs/strict`.
- The generated starter includes demo assets, demo welcome content, a single layout, and starter favicons.

## Current Factory Differences Before Sprint 018

Compared with the current Astro recommendations, the existing factory conventions had three practical gaps:

1. The current Factory expected the runtime to create the Astro bootstrap surface.
2. The first generated validation project in `projects/harbor-point-dental-studio/` did not include root bootstrap files such as `package.json`, `astro.config.mjs`, and `tsconfig.json`.
3. The current `skills/astro.md` described folder conventions, but the repository did not yet maintain one canonical starter that Blueprints could extend.

These differences are why the starter is being introduced now.

## Canonical Starter Files

The canonical starter lives in:

- `starters/astro-minimal/`

Canonical files inside the starter:

- `package.json`
- `astro.config.mjs`
- `tsconfig.json`
- `.gitignore`
- `src/layouts/BaseLayout.astro`
- `src/pages/index.astro`
- `src/data/site.ts`
- `src/styles/global.css`

Canonical directories inside the starter:

- `src/components/`
- `src/layouts/`
- `src/pages/`
- `src/data/`
- `src/styles/`
- `public/`

## Files Expected To Change Per Generated Project

These files should be treated as project-variable surfaces:

- `src/pages/`
- `src/components/`
- `src/data/site.ts`
- `src/styles/global.css`
- `public/`
- `README.md`

These files should usually remain stable unless Astro itself changes or the starter contract is intentionally revised:

- `package.json`
- `astro.config.mjs`
- `tsconfig.json`
- `.gitignore`

## EPDC Conventions Implemented

Only conventions implemented directly in the starter are considered official here:

- TypeScript-first project configuration.
- Static-first Astro foundation with no client hydration in the starter.
- Stable `src/components`, `src/layouts`, `src/pages`, `src/data`, and `src/styles` directories.
- Separation of shared site content from rendering through `src/data/site.ts`.
- Predictable layout entrypoint through `src/layouts/BaseLayout.astro`.

## Customizations From The Official Astro Starter

Every deviation from the official starter is intentional and documented below.

### 1. Remove the demo landing assets and welcome component

Astro default:

- The official `basics` starter ships demo assets, `Welcome.astro`, and a branded landing page.

EPDC change:

- The EPDC starter removes all demo content.

Maintenance benefit:

- Future generated projects start from a neutral baseline with no cleanup step and no risk that demo assets survive into generated output.

### 2. Rename `Layout.astro` to `BaseLayout.astro`

Astro default:

- The official starter uses a single `src/layouts/Layout.astro`.

EPDC change:

- The starter uses `src/layouts/BaseLayout.astro`.

Maintenance benefit:

- The name scales better once projects add more layouts and makes the shared layout role explicit for Blueprints and execution prompts.

### 3. Add `src/data/site.ts`

Astro default:

- The official starter does not include a dedicated shared data module.

EPDC change:

- The starter adds a typed `src/data/site.ts` module.

Maintenance benefit:

- Shared site facts have one canonical location from the first generated page, which reduces drift across layouts, components, and future blueprint output.

### 4. Add `src/styles/global.css`

Astro default:

- The official starter keeps styles inline in starter component files.

EPDC change:

- The starter adds `src/styles/global.css` and imports it in the base layout.

Maintenance benefit:

- Shared styles gain a stable entrypoint that future Blueprints can extend without rewriting layout internals.

### 5. Keep `public/` but omit starter icons

Astro default:

- The official starter includes default favicon files.

EPDC change:

- The EPDC starter keeps `public/` but does not ship default icons.

Maintenance benefit:

- Generated projects should supply project-specific assets, and omitting placeholder icons avoids accidental carryover into production output.

### 6. Keep Astro strict TypeScript instead of a looser template

Astro default:

- Astro recommends `strict` or `strictest` when a project plans to write TypeScript.

EPDC change:

- The starter uses Astro’s `strict` template directly.

Maintenance benefit:

- This stays aligned with Astro’s recommendation while giving the Factory typed data modules and predictable editor behavior from the first generated project.

## Build With AI Implications

Astro’s Build with AI guidance emphasizes staying connected to current documentation instead of relying on stale framework knowledge.

That affects EPDC in two ways:

- the Factory starter should stay close to official Astro defaults so it remains easy to refresh when Astro changes
- future runtime and Blueprint work should consume current Astro guidance rather than freezing framework assumptions into prompts indefinitely

## Future Integration Flow

This sprint does not integrate the starter yet.

The intended future flow is:

```text
Business Specification
↓
Factory
↓
Astro Starter
↓
Blueprints
↓
Execution Prompt
↓
Execution Package
↓
Runtime
↓
External AI Runtime
↓
Generated Project
```

## Blueprint Relationship

Future Blueprints should extend the starter by:

- adding page structures
- adding component families
- adding project-specific content and metadata
- adding optional integration surfaces only when the specification requires them

Blueprints should not redefine Astro bootstrap files unless the starter contract changes intentionally.
