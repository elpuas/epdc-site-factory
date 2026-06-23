# EPDC Specification Schema

This document defines the canonical specification format for EPDC Site Factory projects.

The schema is intentionally documentation-first. It defines what a project must describe before any future planner, agent, template, or generation workflow can act on it.

## Scope

This schema is designed to support:

- Dentists
- Clinics
- Lawyers
- Local businesses
- Future service businesses

This schema does not define:

- AI behavior
- Orchestration logic
- Memory systems
- Code generation rules
- Template execution

## Authoring Rules

- Write specifications in Markdown.
- Use the section order defined in this document.
- Treat every section as required unless marked optional.
- Use real project information or realistic planning assumptions.
- Avoid placeholder copy such as "TBD", "Lorem ipsum", or "Coming soon".
- Keep requirements specific enough to validate later.
- When a section does not apply, explicitly state `None` and explain why.

## Canonical Structure

Every specification should follow this structure:

```md
# Project Specification

## Project
### Name
### Slug
### Industry

## Business Goals
### Primary Goal
### Secondary Goals

## Technical Requirements
### Framework
### Database
### Languages
### Deployment

## Pages

## Features

## SEO
### Local SEO
### Metadata
### Sitemap
### Schema.org

## Content

## Integrations

## Acceptance Criteria
```

## Section Definitions

### Project

Defines the business and project identity that all future work will reference.

#### Name

- Required
- Human-readable project or client name
- Should match the business brand used across the site

#### Slug

- Required
- Lowercase, hyphen-separated identifier
- Used as the stable project key for future tooling
- Example: `bright-smile-dental`

#### Industry

- Required
- Plain-language description of the business category
- Should be specific enough to guide template and SEO decisions
- Example: `Family dentistry and preventive dental care`

### Business Goals

Defines why the site exists and what business outcomes matter.

#### Primary Goal

- Required
- One clear business outcome that takes priority over all others
- Should be measurable or behavior-driven when possible

#### Secondary Goals

- Required
- Bullet list of supporting outcomes
- Usually 3 to 6 items
- Should not conflict with the primary goal

### Technical Requirements

Defines the initial technical expectations for future implementation.

#### Framework

- Required
- Preferred site framework
- Current default should reflect repo direction when appropriate
- Example: `Astro`

#### Database

- Required
- Data storage requirement for the project
- Can be `None` when the first version is static
- Can describe future readiness if needed

#### Languages

- Required
- List content and implementation languages
- Should identify the site language first
- Example: `English`, `Spanish`, `English and Spanish`

#### Deployment

- Required
- Target hosting or deployment expectation
- Can be specific platform guidance or a constraint-based statement

### Pages

Defines the required site pages.

For each page, include:

- Page name
- Purpose
- Key sections or content blocks
- Primary call to action

Recommended format:

```md
- Home
  - Purpose: ...
  - Key sections: ...
  - Primary CTA: ...
```

### Features

Defines functional requirements beyond page structure.

Include:

- User-facing features
- Content management expectations when relevant
- Conversion features such as forms or booking requests
- Trust-building features such as testimonials or attorney profiles

Examples:

- Contact form with service-specific inquiry routing
- FAQ accordion
- Click-to-call actions on mobile
- Office location map embed

### SEO

Defines discoverability requirements and search-readiness.

#### Local SEO

- Required
- Local targeting strategy
- Cities, service areas, office locations, or neighborhood focus
- Local trust signals such as hours, address, phone consistency, and reviews

#### Metadata

- Required
- Rules for page titles, meta descriptions, social sharing, and canonical URLs
- Should mention whether every core page needs unique metadata

#### Sitemap

- Required
- Sitemap expectation for public pages
- Note whether any pages should be excluded

#### Schema.org

- Required
- Structured data types needed for the business
- Examples: `Dentist`, `MedicalClinic`, `Attorney`, `LegalService`, `LocalBusiness`, `FAQPage`

### Content

Defines content requirements and constraints.

Include:

- Brand voice and tone
- Required business information
- Service descriptions
- Team or professional profile requirements
- Testimonials, FAQs, trust signals, or legal disclaimers
- Content depth expectations by page

At minimum, the content requirements should provide enough structured detail to avoid blocking first-page generation.

For local service businesses, include when relevant:

- Business phone number
- Full street address
- Office hours
- Parking or arrival guidance
- Practice or office email used for contact workflows

For professional-service or clinician-led businesses, include when relevant:

- Lead professional name
- Credentials or education
- Years of experience
- Care philosophy or practice philosophy

For onboarding or conversion-support content, include when relevant:

- Accepted insurance networks
- Payment methods
- Downloadable-form requirements
- Approved testimonial excerpts or explicit placeholder rules
- Map embed or location-link requirements

### Integrations

Defines external services or third-party systems.

Include:

- Scheduling tools
- CRM or intake systems
- Analytics
- Maps
- Review platforms
- Form delivery or email services

If no integrations are required for the first version, state:

`None for launch. Site should remain ready for future integrations.`

### Acceptance Criteria

Defines the conditions required for project completion.

Acceptance criteria should be:

- Specific
- Observable
- Testable by QA
- Mapped to the specification content

Good examples:

- Every required page exists and includes the defined key sections.
- Primary conversion actions are visible on desktop and mobile.
- Business name, phone number, address, and hours are consistent across the site.
- Each public page includes unique metadata aligned with its purpose.

Weak examples to avoid:

- Site looks good
- SEO is done
- Content is nice

## Recommended Writing Pattern

Use concise headings with detail in bullets. A complete specification should read like an implementation-ready project brief, not a marketing brainstorm.

## Validation Checklist

Before a specification is considered complete, confirm:

- All required sections exist.
- The project identity is specific and realistic.
- The page list is complete enough to build a sitemap.
- The features list includes the required conversion actions.
- SEO requirements include local targeting and structured data.
- Content requirements define real business information needs.
- Integrations are clearly listed or explicitly excluded.
- Acceptance criteria are concrete enough for QA review.
