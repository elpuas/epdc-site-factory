# Blueprint Data Validation

## Sprint 021 Scope

This document validates that the Dental Blueprint can render a complete Astro website using only structured project data.

Validation target:

- `projects/dental-demo/`

Presentation layer:

- `blueprints/dentist/`

## Verification Checklist

### 1. Every visible section renders from `src/data`

Confirmed in `projects/dental-demo/src/data/`:

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

Confirmed in `projects/dental-demo/src/pages/`:

- each project route imports Blueprint page templates
- each route passes project-owned data into the Blueprint through props
- service-detail and blog-post pages select project-owned records before rendering

### 2. No Blueprint component contains business-specific content

Confirmed:

- `blueprints/dentist/components/` now consume typed props from `blueprints/dentist/types.ts`
- visible section titles, CTA copy, labels, and trust content are supplied by project data
- Blueprint-local content modules under `blueprints/dentist/data/` were removed

### 3. Components remain reusable

Confirmed reusable components:

- `Header`
- `Footer`
- `Hero`
- `ServiceCards`
- `ClinicIntro`
- `BenefitsGrid`
- `DoctorGrid`
- `TrustLogos`
- `Testimonials`
- `GoogleReviews`
- `FAQSection`
- `AppointmentCTA`
- `ContactSection`
- `LocationsSection`
- `WhatsAppFloatingButton`
- `BlogGrid`

Confirmed behavior:

- each component receives typed props
- no component imports project business data directly
- no component contains clinic-specific identities, doctor records, testimonials, or addresses

### 4. The generated project owns all business content

Confirmed in `projects/dental-demo/`:

- fictional clinic identity, doctors, services, testimonials, FAQs, addresses, phone numbers, WhatsApp number, and hours all live in project `src/data`
- project routes compose the final page state and hand it to the Blueprint
- placeholder assets are stored under `public/images/` inside the project

### 5. Placeholder project exists and extends the Astro Starter

Confirmed:

- `projects/dental-demo/` was created from `starters/astro-minimal/`
- the project keeps the starter bootstrap files
- the project replaces the starter landing page with Blueprint-backed routes

### 6. Placeholder assets load from the project

Confirmed:

- `projects/dental-demo/public/images/placeholder-hero.svg`
- `projects/dental-demo/public/images/placeholder-doctor.svg`
- `projects/dental-demo/public/images/placeholder-blog.svg`
- `projects/dental-demo/public/images/placeholder-badge.svg`

### 7. Build and dev validation

Validated locally during Sprint 021:

- `npm install`
- `npm run build`
- `npm run dev`

Result:

- the placeholder project builds successfully
- the dev server starts successfully

## Architectural Discoveries

- The Blueprint needs a shared contract file (`blueprints/dentist/types.ts`) so projects can own content without duplicating presentation types.
- Page templates remain useful inside `blueprints/dentist/pages/`, but they should be treated as importable presentation templates rather than route owners.
- The consuming project must pass its own `BaseLayout.astro` into the Blueprint layout boundary; hard-importing the starter layout from inside the Blueprint did not build reliably across project boundaries.
- The canonical dental project model needed two additional project-owned modules, `blog.ts` and `privacy.ts`, to cover the full validated sitemap cleanly.

## Current Limitations

- `schema.ts` is present as the canonical structured-data owner, but the Blueprint validation sprint does not yet wire JSON-LD into the starter layout.
- The demo project validates architecture and rendering only. It does not add runtime integration, prompt-builder changes, or deployment logic.
