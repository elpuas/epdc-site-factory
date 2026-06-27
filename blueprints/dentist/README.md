# Dentist Blueprint

## Purpose

`blueprints/dentist/` is the first reusable Blueprint for EPDC Site Factory.

It represents the canonical structure for a modern Costa Rican dental website while remaining generic, static-first, and independent from any real clinic.

This Blueprint is the architectural layer between:

`starters/astro-minimal/` -> `blueprints/dentist/` -> future `src/data/` -> generated website

## Folder Structure

```text
blueprints/dentist/
├── assets/
├── components/
├── data/
├── layouts/
├── pages/
├── patterns/
├── placeholders/
└── README.md
```

- `layouts/`: shared page shell and site-wide chrome.
- `components/`: reusable dental-specific UI sections with typed props.
- `pages/`: page templates for the canonical dental sitemap.
- `data/`: placeholder TypeScript modules that mirror the future `src/data/` contract.
- `patterns/`: composition and data-flow guidance.
- `assets/`: placeholder SVG assets used only for architecture validation.
- `placeholders/`: placeholder policy and replacement notes.

## Component Hierarchy

Base layout:

- `BaseLayout`
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

## Expected Data Inputs

The long-term source of truth should be future project-level `src/data/` modules with shapes equivalent to:

- `site.ts`
- `navigation.ts`
- `hero.ts`
- `about.ts`
- `services.ts`
- `doctors.ts`
- `testimonials.ts`
- `locations.ts`
- `faq.ts`
- `blog.ts`
- `contact.ts`
- `privacy.ts`

In Sprint 020, the Blueprint keeps those modules locally under `blueprints/dentist/data/` only to validate:

- component prop contracts
- page composition
- placeholder rendering
- clean separation between template logic and content data

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

Each page reads from data modules and composes reusable sections. No page owns clinic-specific business content.

## Future Customization Points

The next integration sprint can connect this Blueprint to the Factory by:

- copying or extending the Astro starter surface
- mapping generated `src/data/` modules into these component contracts
- replacing placeholder assets with project assets
- swapping placeholder copy with generated content
- adding project-specific SEO and legal data

This Blueprint intentionally does not modify the starter, runtime, prompt builder, or generation pipeline.
