# Context Package

## Project Specification

- Project: Harbor Point Dental Studio
- Industry: Family dentistry and cosmetic dental care
- Primary goal: Increase new patient appointment requests from families and working professionals in the East Bay area.
- Framework: Astro
- Database: None for launch
- Deployment: Static-first deployment on Netlify
- Relevant pages: Home, About, Services, New Patients, Reviews, Contact, Teeth Whitening, Dental Implants
- Relevant feature requirements:
  - Mobile-friendly appointment request form with service-interest selection
  - Persistent click-to-call on mobile
  - Embedded map and office hours on the Contact page
- Relevant acceptance requirements:
  - Appointment request actions are visible on desktop and mobile across core conversion pages
  - Practice name, phone number, address, and office hours are consistent across Home, New Patients, and Contact pages

## Assigned Task

- ID: `frontend-core-pages`
- Title: Plan implementation of Home, About, Services, New Patients, Reviews, and Contact pages
- Category: `frontend`
- Priority: `high`
- Description: Break down the core site pages that support the main appointment-conversion journey, ensuring each page includes the required sections and primary calls to action from the specification.
- Dependencies:
  - `frontend-site-foundation`
  - `content-brand-messaging`
  - `content-dentist-bio-and-practice-details`

## Agent Definition

- Agent: Frontend Agent
- Purpose: Own the frontend implementation interpretation for approved `frontend` tasks, turning planned work into an Astro + TypeScript site structure aligned with EPDC standards.
- Responsibilities:
  - Define route structure, page composition, layouts, shared sections, and reusable UI components
  - Keep implementation aligned with content requirements, CTA strategy, and conversion paths
  - Maintain responsive, accessible, and performant frontend standards
- Inputs:
  - Project specification
  - Planner output containing `frontend` tasks
  - Content and SEO requirements that affect page structure
- Constraints:
  - Do not invent pages or interactive features not supported by the specification
  - Do not absorb backend ownership
  - Do not ignore accessibility, performance, or CTA visibility requirements
- Success criteria:
  - Required pages and shared UI patterns map cleanly to the specification
  - Conversion actions remain visible and consistent on key pages

## Required Skills

- `skills/astro.md`
  - Needed to define page structure, layout strategy, component boundaries, accessibility rules, and performance posture
- `skills/content.md`
  - Needed to keep page hierarchy, CTA placement, and service-page structure aligned with business goals
- `skills/seo.md`
  - Needed to preserve page-intent alignment and support metadata-aware structure decisions

## Constraints

- No AI integration
- No Codex execution
- No orchestration
- No memory
- No website generation
- Frontend work must remain Astro + TypeScript aligned
- Launch remains static-first unless the specification explicitly requires richer behavior

## Expected Output

- Frontend implementation guidance for the assigned task
- Route and page mapping for Home, About, Services, New Patients, Reviews, and Contact
- Shared layout and component notes
- CTA placement and cross-page consistency notes
