# Context Package

## Project Specification

- Project: Harbor Point Dental Studio
- Industry: Family dentistry and cosmetic dental care
- Primary goal: Increase new patient appointment requests from families and working professionals in the East Bay area.
- Relevant local SEO targets:
  - Alameda
  - Oakland
  - San Leandro
- Relevant metadata requirements:
  - Every public page must have unique metadata
  - Home page should emphasize family dentist and cosmetic dentistry in Alameda
  - Service pages should target treatment-specific searches
- Relevant structured-data requirements:
  - Use `Dentist` as the primary business schema
  - Use `FAQPage` on Teeth Whitening and Dental Implants when structured FAQs are present
- Relevant sitemap requirement:
  - Include all public pages in the sitemap

## Assigned Task

- ID: `seo-page-metadata`
- Title: Plan unique metadata for all public pages
- Category: `seo`
- Priority: `high`
- Description: Define page-specific title and meta description requirements for Home, core pages, and treatment pages so each page aligns with its search intent and business purpose.
- Dependencies:
  - `frontend-core-pages`
  - `frontend-treatment-pages`
  - `content-brand-messaging`

## Agent Definition

- Agent: SEO Agent
- Purpose: Own the SEO implementation interpretation for approved `seo` tasks so EPDC sites are technically crawlable, locally relevant, and aligned with search-intent requirements from the specification.
- Responsibilities:
  - Define metadata, structured data, sitemap, robots, and local search requirements
  - Map search intent to page purpose and route structure
  - Protect consistency of business information and local targeting across public pages
- Inputs:
  - Project specification
  - Planner output containing `seo` tasks
  - Planned page structure
  - Content requirements relevant to search intent or local relevance
- Constraints:
  - Do not fabricate business locations, service areas, or trust signals
  - Do not separate SEO from visible content accuracy
  - Do not create unsupported SEO scope
- Success criteria:
  - Metadata and crawlability requirements are specific and page-aware
  - Local SEO decisions reflect the actual business footprint

## Required Skills

- `skills/seo.md`
  - Needed for metadata, OpenGraph, structured-data, sitemap, robots, and local SEO rules
- `skills/content.md`
  - Needed to keep page intent and visible messaging aligned
- `skills/astro.md`
  - Needed when route structure and public page organization affect SEO output

## Constraints

- No AI integration
- No Codex execution
- No orchestration
- No memory
- No website generation
- Metadata and structured data must remain tied to visible page content
- Local targeting must reflect the actual service footprint only

## Expected Output

- SEO implementation guidance for page metadata
- Page-to-intent notes for the public pages in scope
- Local SEO consistency requirements
- Dependencies on frontend and content work where metadata relies on page structure or messaging
