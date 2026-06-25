# Starter Validation

## Validation Scope

This document validates the Sprint 018 Astro starter against:

- current official Astro recommendations reviewed on 2026-06-25
- the current EPDC architectural conventions
- the sprint requirement to keep the starter minimal and non-business-specific

Starter location:

- `starters/astro-minimal/`

## Validation Results

### Folder structure

Validated:

- `src/components/`
- `src/layouts/`
- `src/pages/`
- `src/data/`
- `src/styles/`
- `public/`

Result:

- Pass. The starter includes every required directory from the sprint brief.

### Configuration files

Validated:

- `package.json`
- `astro.config.mjs`
- `tsconfig.json`
- `.gitignore`

Result:

- Pass. The starter includes the canonical Astro root files missing from the first generated validation project.

### TypeScript configuration

Validated:

- `tsconfig.json` extends `astro/tsconfigs/strict`
- `include` is set to `[".astro/types.d.ts", "**/*"]`
- `exclude` is set to `["dist"]`

Result:

- Pass. This matches Astro’s current documented recommendation for TypeScript projects.

### Compatibility with current Astro recommendations

Validated against current official references:

- `npm create astro@latest` currently defaults to the `basics` template
- the official starter currently uses `astro` `^7.0.2`
- the official starter currently uses `astro/tsconfigs/strict`
- the official project structure documentation lists `src/pages`, `src/components`, `src/layouts`, `src/styles`, `public`, `package.json`, `astro.config.mjs`, and `tsconfig.json`

Result:

- Pass. The starter intentionally remains close to the official CLI output and project structure.

### Consistency with EPDC conventions

Validated:

- TypeScript-first
- static-first
- predictable source directories
- content separated from rendering
- reusable base layout

Result:

- Pass. Each convention documented in Sprint 018 is implemented directly in starter files.

### Practical starter build

Validated:

- copied `starters/astro-minimal/` to `/private/tmp/epdc-astro-minimal-validate`
- ran `npm install`
- ran `npm run build`

Result:

- Pass. The starter installed successfully and produced a static build with one generated route at `/index.html`.

## Intentional Differences From Astro Defaults

The EPDC starter does intentionally differ from the current official `basics` template.

### Difference 1

Astro default:

- Ships demo assets, favicons, and welcome-page content.

EPDC choice:

- Removes demo content and placeholder icons.

Reason:

- Generated projects need a neutral baseline and project-specific assets.

### Difference 2

Astro default:

- Uses `src/layouts/Layout.astro`.

EPDC choice:

- Uses `src/layouts/BaseLayout.astro`.

Reason:

- The naming is clearer once multiple layouts exist in Blueprint-driven projects.

### Difference 3

Astro default:

- Does not include `src/data/` in the starter.

EPDC choice:

- Adds `src/data/site.ts`.

Reason:

- Shared facts need one typed canonical source for generated projects.

### Difference 4

Astro default:

- Keeps starter styles embedded in the demo components.

EPDC choice:

- Adds `src/styles/global.css`.

Reason:

- Shared styles need a stable extension point for future Blueprint layers.

## Recommendation

The starter is valid for Factory ownership because it:

- stays aligned with the current official Astro experience
- introduces only a small number of documented EPDC conventions
- avoids business-specific code
- gives future Blueprints a deterministic base without taking over runtime execution
