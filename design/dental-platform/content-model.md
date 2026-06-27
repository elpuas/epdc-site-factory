# Dental Platform Content Model

## Content Organization Goal

The dental platform should make it clear which information is globally shared across the site and which information is page-specific or treatment-specific.

The rule is:

- global data supports reuse and consistency
- page-specific content supports search intent and conversion context

## Clinic Information

Includes:

- clinic name
- tagline
- business summary
- main phone
- WhatsApp number
- email
- primary city
- social links

Recommended location:

- global data in `site.ts`
- expanded narrative in `about.ts`

## Doctor Biographies

Includes:

- name
- role
- specialties
- credentials
- memberships
- years of experience
- short bio
- long bio

Recommended location:

- shared records in `doctors.ts`
- page-specific layout decisions on doctors or about pages

## Treatment Descriptions

Includes:

- service name
- summary
- patient-fit guidance
- benefits
- process
- recovery or expectation notes where relevant
- CTA copy

Recommended location:

- structured service records in `services.ts`
- page-specific supporting copy derived from those records

## Testimonials

Includes:

- quote
- author label rules
- service association when relevant
- approval status or source type

Recommended location:

- shared records in `testimonials.ts`
- reused on home, testimonials, and service pages

## FAQs

Includes:

- question
- answer
- category
- related service or general clinic association

Recommended location:

- shared records in `faq.ts`
- rendered on FAQ page and service pages as needed

## Blog Articles

Includes:

- title
- slug
- excerpt
- publish date
- category
- related services
- featured image reference

Recommended location:

- future blog content collection or content source separate from core clinic data
- metadata and featured references may still be exposed through `seo.ts` or a future blog module

## Contact Information

Includes:

- phone
- WhatsApp
- email
- contact form target
- location links

Recommended location:

- global contact facts in `site.ts`
- branch-specific contact facts in `locations.ts`

## Operating Hours

Includes:

- day ranges
- open and close times
- exceptions later if needed

Recommended location:

- `locations.ts` because hours belong to a place of service

## Social Links

Includes:

- platform name
- URL
- optional label

Recommended location:

- `site.ts` or `footer.ts` depending on whether the links are globally used or footer-specific

## Payment Methods

Includes:

- accepted methods
- installment messaging
- financing notes

Recommended location:

- shared structured data in `about.ts` or a future operational data module
- service-page mention only when relevant to treatment conversion

## Insurance Providers

Includes:

- accepted providers
- notes on verification
- limitations or contact guidance

Recommended location:

- shared structured data referenced from global trust or FAQ areas
- detailed patient-prep content on contact, FAQ, or future new-patients pages

## Trust Logos

Includes:

- memberships
- certifications
- insurance brands when approved
- technology partners where relevant

Recommended location:

- shared structured records in `about.ts` or `footer.ts`

## Certifications Or Memberships

Includes:

- organization name
- credential type
- optional logo
- optional URL

Recommended location:

- doctor-level memberships in `doctors.ts`
- clinic-level trust marks in `about.ts`

## Global vs Page-Specific Split

Global data should include:

- clinic identity
- navigation
- core CTAs
- services index
- doctor records
- testimonials
- location records
- FAQs
- metadata defaults
- footer links
- schema payload sources

Page-specific content should include:

- page introductions
- service-specific expansion copy
- section ordering choices
- localized SEO emphasis per page
- editorial blog copy
- legal page copy

## Content Governance Rules

- Reuse structured content whenever the same fact appears on multiple pages.
- Keep trust and contact details consistent across home, contact, and footer surfaces.
- Do not bury operational facts inside one-off section copy if other pages also need them.
- Store approved short-form and long-form versions when the same entity appears in summary and detail views.
- Preserve missing information as explicit TODOs during future generation rather than filling gaps with invented content.
