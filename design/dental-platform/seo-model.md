# Dental Platform SEO Model

## SEO Goal

The dental platform should provide one repeatable SEO architecture for dental clinics in Costa Rica.

The objective is to support:

- local dental discovery
- treatment-intent capture
- trust reinforcement
- strong internal linking between commercial and educational pages

## Home Page SEO

Focus:

- clinic brand
- general dentist intent
- city or service-area relevance
- broad family or cosmetic dentistry positioning

Requirements:

- unique title and description
- strong H1 aligned to primary service positioning
- clear local references
- internal links to services, doctors, contact, and blog

## Service Page SEO

Focus:

- treatment-specific search intent
- local modifiers where useful
- conversion-oriented search demand

Requirements:

- one page per priority service
- unique title and description per service
- treatment overview, benefits, process, FAQ, and next-step CTA
- related links to doctors, blog content, and contact

## Doctor Page SEO

Focus:

- doctor-name and trust-oriented searches
- expertise reinforcement for clinical authority

Requirements:

- structured doctor profiles
- credential visibility
- internal links to relevant treatments
- brand and location reinforcement

## Blog SEO

Focus:

- informational queries
- educational pre-conversion topics
- long-tail treatment questions

Requirements:

- article archive structure
- article metadata
- strong links back to services and appointment pages
- topic choices aligned to real patient questions

## FAQ SEO

Focus:

- objection-handling queries
- treatment preparation questions
- payment and clinic-process questions

Requirements:

- general FAQ hub
- service-specific FAQ reuse
- answers written for clarity and trust
- schema eligibility when the page structure supports it

## LocalBusiness Schema

Baseline recommendation:

- include clinic name
- address
- phone
- opening hours
- map or geo references where available
- URL

Rationale:

- local entity consistency matters for trust and search understanding

## MedicalBusiness And Dentist Schema Considerations

Primary recommendation:

- use `Dentist` as the most specific business type when the clinic is dental-focused

Secondary consideration:

- broader `MedicalBusiness` concepts may inform future extensions, but the platform should default to `Dentist` when accurate

Rationale:

- specificity helps the site describe the business clearly to search engines

## FAQ Schema

Recommendation:

- support FAQ schema only when the page contains real visible FAQ content
- map FAQ items from structured data modules instead of duplicating answers in markup-specific files

Rationale:

- the schema should follow visible content, not create a second content source

## Breadcrumbs

Recommendation:

- support breadcrumb schema for service pages, doctor pages, blog articles, and future location pages

Example patterns:

- Home > Services > Service Name
- Home > Doctores > Doctor Name
- Home > Blog > Article Title

Rationale:

- breadcrumbs improve orientation and reinforce site structure

## Internal Linking

Recommended internal links:

- home to featured services
- services to individual service pages
- service pages to related doctors
- service pages to FAQs
- blog articles to relevant services
- doctor pages to relevant treatments
- all commercial pages to contact or appointment paths

Rationale:

- internal linking should guide both users and search engines from broad intent to specific conversion pages

## Location Targeting

Recommendation:

- keep target city or region data structured
- reference service areas naturally in metadata and body copy
- support multi-location growth later without redesigning the data model

Rationale:

- dental clinics compete locally, so geographic clarity is central to search relevance

## Metadata Strategy

Recommendation:

- keep metadata defaults centralized
- override titles and descriptions per route
- support Open Graph and future social-preview consistency
- connect service metadata directly to service data records

Rationale:

- metadata drift is common when content is spread across pages instead of structured data modules

## Future Multilingual Considerations

Recommendation:

- keep slugs, metadata, and structured content modular enough to support Spanish-first or bilingual builds later
- avoid baking language assumptions into component logic

Rationale:

- Costa Rica will often favor Spanish-first execution, but future dental deployments may require bilingual support

## Repeatable Dental SEO Architecture

The repeatable pattern for the future blueprint should be:

1. Strong local home page
2. Service hub plus individual service pages
3. Doctor trust content
4. FAQ support
5. Blog content for educational demand
6. Consistent local business schema
7. Structured internal linking back to contact and appointment surfaces
