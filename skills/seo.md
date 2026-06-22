# SEO Skill

## Purpose

Define the implementation guidance for making EPDC sites discoverable, technically sound, and locally relevant.

This skill documents how future SEO work should interpret specification requirements and turn them into concrete implementation standards.

## Technical SEO

- Ensure every public page has a stable, crawlable route.
- Keep route structure readable and aligned with page purpose.
- Avoid duplicate public pages targeting the same intent without a clear differentiation strategy.
- Use clean canonical URLs and prevent conflicting alternate versions.
- Keep heading structure logical and page-specific.
- Ensure internal linking supports both user navigation and crawl discovery.
- Make sure important pages are reachable without depending on client-side interactions.
- Minimize performance regressions that could harm search visibility.

## Local SEO

- Reflect the target city, neighborhood, or service area defined in the specification.
- Keep business name, address, phone number, and hours consistent everywhere they appear.
- Match local intent with page purpose, especially on home, service, and contact pages.
- Use localized supporting details such as nearby service areas, office access notes, or practical visit information when relevant.
- Reinforce local trust through testimonials, credentials, reviews references, and service-specific relevance.
- Avoid keyword stuffing; local relevance should read naturally and serve real user needs.

## Metadata

- Every public page should have a unique title and meta description.
- Titles should align with the page’s primary search intent and business value.
- Meta descriptions should describe the page honestly and support click-through without sounding templated.
- Home page metadata should reflect the primary business offering and local target.
- Service pages should target treatment or service-specific intent.
- Contact, about, and resource pages should use metadata that matches their actual purpose.

## OpenGraph

- Provide social preview metadata for all primary public pages.
- Keep titles and descriptions aligned with the page metadata while remaining readable in social contexts.
- Use a consistent brand image strategy for previews.
- Avoid mismatches between search metadata and social metadata.
- Treat OpenGraph as a trust and sharing surface, not only a technical checklist.

## Structured Data

- Apply schema types that reflect the real business model described in the specification.
- Choose business schema types with appropriate specificity, such as `Dentist`, `MedicalClinic`, `Attorney`, or `LegalService`.
- Add `FAQPage` markup only when the page contains a meaningful FAQ section.
- Ensure structured data matches visible page content.
- Do not add inflated or misleading schema types for ranking speculation.
- Keep structured data generation consistent across similar page types.

## Sitemap

- Include all public indexable pages in the sitemap.
- Exclude utility, confirmation, or non-public pages when they should not be indexed.
- Keep sitemap coverage aligned with the actual planned route set.
- Update sitemap logic whenever new public page types are introduced.

## Robots

- Allow crawl access to pages that drive business discovery.
- Prevent indexing of thin utility pages, duplicates, or non-public routes when appropriate.
- Ensure robots rules do not accidentally block critical marketing pages, assets, or metadata files.
- Treat robots decisions as intentional publishing rules, not defaults that go unreviewed.

## EPDC Standards

- SEO work must trace directly back to the specification and planner tasks.
- Local targeting must reflect real business locations or service areas, never fabricated reach.
- Metadata should be unique on every public page and aligned with on-page content.
- Structured data must be accurate, visible, and business-specific.
- Sitemap and robots behavior should be reviewed as part of every launch checklist.
- SEO should be integrated into page structure and content planning early, not bolted on after implementation.
