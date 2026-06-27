# Future Dental Blueprint

## Purpose

This document explains how the dental platform design should later translate into:

```text
blueprints/
  dentist/
```

The goal is to keep the architectural boundary clear between the generic factory foundation and the future dental-specific implementation layer.

## Boundary Overview

The future system should separate responsibilities as follows:

| Layer | Responsibility |
| --- | --- |
| Astro Starter | Generic Astro structure shared by all future EPDC projects |
| Dental Blueprint | Dental-specific reusable pages, components, and section logic |
| Project Data | Clinic-specific structured facts under `src/data/` |
| Generated Content | Project-specific copy derived from the specification and content rules |
| Runtime | Scoped implementation work that materializes files from prepared contracts |
| Future Knowledge Layer | Reusable market and vertical knowledge beyond one project |

## Astro Starter

Belongs in the starter:

- `package.json`
- `astro.config.mjs`
- `tsconfig.json`
- `public/`
- `src/layouts/BaseLayout.astro`
- `src/styles/global.css`
- base `src/components/`, `src/pages/`, and `src/data/` directories
- generic accessibility and metadata foundations

The starter should remain industry-neutral.

It should not own dental-specific copy, service assumptions, or clinic-specific trust structures.

## Dental Blueprint

Belongs in the future dental blueprint:

- dental page templates and route assumptions
- dental section composition rules
- dental-specific reusable components such as `DentalHero`, `DoctorGrid`, and `LocationSection`
- expected data module contracts for dental projects
- default ordering for trust, services, reviews, and contact sections
- dental SEO scaffolding and schema hookups

The blueprint should be reusable across many dental clinics without containing one clinic’s final content.

## Project Data

Belongs in project data:

- clinic name
- phone
- WhatsApp
- location records
- doctors
- services offered
- payment and insurance details
- hours
- social links
- approved testimonials
- trust logos actually used by that clinic

This data should live under `src/data/` and should be the source of truth for components.

## Generated Content

Belongs in generated content:

- final headlines
- page introductions
- treatment descriptions
- FAQs
- blog posts
- CTA supporting copy
- legal-policy wording

Generated content should stay bounded by the specification and planner output rather than being embedded as blueprint defaults.

## Runtime

Belongs in the runtime:

- consuming execution packages
- applying file changes
- staying inside allowed file scope
- recording logs and review artifacts
- implementing blueprint-guided output into a target project

The runtime should not invent the blueprint contract. It should consume it.

## Future Knowledge Layer

Belongs in a future knowledge layer:

- validated market patterns for dental clinics in Costa Rica
- future cross-project learnings
- reusable trust and conversion heuristics
- future guidance for additional regions or sub-specialties

This layer should help improve the blueprint over time without changing the project specification format.

## Expected Future File Relationship

The intended future relationship should look like:

```text
starters/astro-minimal/
  generic Astro foundation

blueprints/dentist/
  dental implementation rules
  dental components
  dental route defaults
  dental schema helpers

project/src/data/
  clinic-specific facts

runtime/
  execution and review boundary
```

## Blueprint Readiness Criteria

The dental blueprint should not be implemented until the factory can clearly map:

- which components are generic versus dental-specific
- which page sections are required versus optional
- which data modules are mandatory
- which content is supplied by specification versus generated later
- which SEO and schema defaults are reusable

This sprint provides that design baseline.
