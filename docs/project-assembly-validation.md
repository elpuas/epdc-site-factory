# Project Assembly Validation

## Sprint 022 Scope

This document validates the first deterministic Project Assembly Engine introduced in Sprint 022.

Validation target:

- `projects/demo-clinic/`

Assembly inputs:

- `starters/astro-minimal/`
- `blueprints/dentist/`
- placeholder project data derived from `projects/dental-demo/`
- Blueprint placeholder assets

Assembly command used on 2026-06-28:

```sh
node scripts/assemble-project.js \
  --starter astro-minimal \
  --blueprint dentist \
  --project demo-clinic
```

## Verification Checklist

### 1. Project assembles successfully

Confirmed:

- the assembler created `projects/demo-clinic/`
- the script completed with status `assembled`
- the summary printed the selected starter, blueprint, and output path

### 2. Folder structure is correct

Confirmed folders:

- `projects/demo-clinic/src/`
- `projects/demo-clinic/src/data/`
- `projects/demo-clinic/src/layouts/`
- `projects/demo-clinic/src/pages/`
- `projects/demo-clinic/src/styles/`
- `projects/demo-clinic/public/`
- `projects/demo-clinic/public/images/`
- `projects/demo-clinic/blueprints/dentist/`

### 3. Starter is preserved

Confirmed starter-owned files:

- `package.json`
- `astro.config.mjs`
- `tsconfig.json`
- `.gitignore`
- `src/layouts/BaseLayout.astro`
- `src/styles/global.css`

Confirmed behavior:

- the assembled project keeps the Astro starter bootstrap intact
- the project package name is updated deterministically to `epdc-demo-clinic`
- the starter shell remains the base layout boundary for Blueprint composition

### 4. Blueprint is applied correctly

Confirmed copied Blueprint surfaces:

- `blueprints/dentist/components/`
- `blueprints/dentist/layouts/`
- `blueprints/dentist/pages/`
- `blueprints/dentist/patterns/`
- `blueprints/dentist/placeholders/`
- `blueprints/dentist/types.ts`

Confirmed behavior:

- project route files in `src/pages/` import the copied Blueprint templates from `../../blueprints/dentist/pages/`
- project data modules in `src/data/` import the copied Blueprint types from `../../blueprints/dentist/types`
- the generated project is self-contained and does not depend on Blueprint files outside the project directory

### 5. Project data structure is created

Confirmed in `projects/demo-clinic/src/data/`:

- `site.ts`
- `navigation.ts`
- `hero.ts`
- `about.ts`
- `services.ts`
- `doctors.ts`
- `testimonials.ts`
- `locations.ts`
- `faq.ts`
- `seo.ts`
- `footer.ts`
- `schema.ts`
- `blog.ts`
- `privacy.ts`

### 6. Placeholder assets are copied

Confirmed in `projects/demo-clinic/public/images/`:

- `placeholder-hero.svg`
- `placeholder-doctor.svg`
- `placeholder-blog.svg`
- `placeholder-badge.svg`

### 7. Project manifest is created

Confirmed:

- `projects/demo-clinic/project.json`

Confirmed manifest fields:

- `name`
- `starter`
- `blueprint`
- `factoryVersion`
- `generatedAt`
- `status`

### 8. Local install succeeds

Validated locally on 2026-06-28:

```sh
cd projects/demo-clinic
npm install
```

Result:

- install completed successfully
- `package-lock.json` was generated for the assembled project

### 9. Local build succeeds

Validated locally on 2026-06-28:

```sh
cd projects/demo-clinic
npm run build
```

Result:

- Astro build completed successfully
- 10 static routes were generated:
  - `/`
  - `/about`
  - `/services`
  - `/service-detail`
  - `/doctors`
  - `/blog`
  - `/blog-post`
  - `/faq`
  - `/contact`
  - `/privacy-policy`

### 10. Local dev server starts

Validated locally on 2026-06-28:

```sh
cd projects/demo-clinic
npm run dev -- --host 127.0.0.1 --port 4321
```

Result:

- Astro started successfully
- Astro reported a running dev server at `http://127.0.0.1:4323`
- the port changed from `4321` to `4323`, which indicates Astro selected an available local port during startup

## Result

Sprint 022 successfully establishes the first deterministic Project Assembly Engine.

The Factory can now assemble a runnable Astro project from stable reusable assets without invoking AI, Runtime, Codex, prompt generation, or execution packages.
