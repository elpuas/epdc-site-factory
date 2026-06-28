# Dentist Blueprint

## Purpose

`blueprints/dentist/` is the first reusable Blueprint for EPDC Site Factory.

It represents the canonical structure for a modern Costa Rican dental website while remaining generic, static-first, and independent from any real clinic.

This Blueprint is the architectural layer between:

`starters/astro-minimal/` -> `blueprints/dentist/` -> project `src/data/` -> generated website

## Folder Structure

```text
blueprints/dentist/
├── assets/
├── components/
├── layouts/
├── pages/
├── patterns/
├── types.ts
├── placeholders/
└── README.md
```

- `layouts/`: shared page shell and site-wide chrome.
- `components/`: reusable dental-specific UI sections with typed props.
- `pages/`: prop-driven page templates for the canonical dental sitemap.
- `types.ts`: shared TypeScript contracts between the Blueprint and generated projects.
- `patterns/`: composition and data-flow guidance.
- `assets/`: placeholder SVG assets used only for architecture validation.
- `placeholders/`: placeholder asset policy and replacement notes.

## Component Hierarchy

Layout hierarchy:

- Starter `BaseLayout`
  - Blueprint `DentistLayout`
    - `Header`
    - page content slot
    - `Footer`
    - `WhatsAppFloatingButton`

Reusable section components:

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
- `BlogGrid`

## Starter Boundary

This Blueprint assumes every generated project starts from the Sprint 018 Astro Starter.

That means the Blueprint does not duplicate starter-owned files such as:

- `src/layouts/BaseLayout.astro`
- starter metadata shell structure
- starter root project bootstrap files

Instead, the Blueprint adds dental-specific components, data contracts, page templates, and one dental-specific layout layer on top of the starter shell.

## Expected Data Inputs

The source of truth must be project-level `src/data/` modules. Sprint 021 validates this through `projects/dental-demo/`.

Core project modules should include:

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

Projects may add extra modules such as `blog.ts` and `privacy.ts` when the validated sitemap requires them.

## Page Templates

The Blueprint includes generic templates for:

- Home
- About
- Services
- Single Service
- Doctors
- Blog
- Blog Post
- FAQ
- Contact
- Privacy Policy

Each page receives typed props from the generated project and composes reusable sections. No Blueprint page owns clinic-specific business content.

## Future Customization Points

The integration path validated in Sprint 021 is:

- extend the Astro starter in a generated project
- keep all business content in project `src/data/`
- import Blueprint page templates from project route files
- pass the project `BaseLayout.astro` into the Blueprint layout boundary
- pass project data into typed Blueprint contracts
- replace placeholder assets when a real project provides approved imagery

This Blueprint intentionally does not modify the starter, runtime, prompt builder, or generation pipeline.
