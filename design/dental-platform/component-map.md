# Dental Platform Component Map

## Component Ownership Model

The future dental blueprint should keep responsibilities separated:

- Starter: generic, reusable structural foundations shared across industries
- Blueprint: dental-specific reusable UI contracts and section structures
- Project Data: clinic-specific content consumed by those components

This sprint documents those boundaries only.

## StickyHeader

Purpose:
Provide persistent navigation, visible clinic identity, phone visibility, and fast access to the main conversion paths.

Required data inputs:

- logo or clinic name
- top-level navigation
- primary phone number
- WhatsApp link
- primary CTA label and target

Expected output:
A compact header that supports navigation, trust, and immediate contact.

Dependencies:

- `navigation.ts`
- `site.ts`

Optional variations:

- simple header
- sticky header
- header with branch selector

Ownership:
Starter structure plus Blueprint behavior contract, powered by Project Data.

## DentalHero

Purpose:
Create the first commercial impression and present the main conversion action.

Required data inputs:

- headline
- supporting copy
- primary CTA
- secondary CTA
- hero image reference
- optional trust highlights

Expected output:
A top-of-page hero section tuned for appointment intent.

Dependencies:

- `hero.ts`
- `site.ts`

Optional variations:

- image-right hero
- centered hero
- hero with trust metrics

Ownership:
Blueprint component powered by Project Data.

## ServiceCards

Purpose:
Summarize core services or specialties and route users into deeper pages.

Required data inputs:

- service list
- service names
- summaries
- slugs
- optional icons or categories

Expected output:
A scannable grid of service options with clear next-step links.

Dependencies:

- `services.ts`

Optional variations:

- homepage featured services
- full services grid
- category-grouped specialty grid

Ownership:
Blueprint component powered by Project Data.

## ClinicIntro

Purpose:
Humanize the clinic through story, care philosophy, and environment messaging.

Required data inputs:

- clinic summary
- care philosophy
- history or founding note
- optional imagery references

Expected output:
A short trust-oriented section that explains who the clinic is and how it cares for patients.

Dependencies:

- `about.ts`

Optional variations:

- compact homepage intro
- expanded about-page narrative

Ownership:
Blueprint component powered by Project Data.

## BenefitsGrid

Purpose:
Present the clinic’s differentiators in a structured and repeatable format.

Required data inputs:

- benefit items
- titles
- descriptions
- optional icons

Expected output:
A grid or list of reasons to choose the clinic.

Dependencies:

- `about.ts`
- `site.ts`

Optional variations:

- icon grid
- metric-led differentiator strip
- compact reassurance list

Ownership:
Blueprint component powered by Project Data.

## DoctorGrid

Purpose:
Show the professionals behind the clinic and reinforce credibility.

Required data inputs:

- doctor list
- names
- roles
- specialties
- credentials
- photo references
- profile links if present

Expected output:
A team presentation block that can support summary or expanded bios.

Dependencies:

- `doctors.ts`

Optional variations:

- homepage preview
- full team page grid
- featured lead doctor layout

Ownership:
Blueprint component powered by Project Data.

## TrustLogos

Purpose:
Display certifications, memberships, insurance partners, or credibility marks.

Required data inputs:

- logo list
- label
- type
- optional link

Expected output:
A visual trust block that reinforces professionalism without relying on long copy.

Dependencies:

- `about.ts`
- `footer.ts`

Optional variations:

- association logos
- insurance acceptance logos
- technology or partner logos

Ownership:
Blueprint component powered by Project Data.

## GoogleReviews

Purpose:
Surface review-based trust near conversion points.

Required data inputs:

- review excerpts
- reviewer label rules
- source metadata when approved
- optional rating summary

Expected output:
A testimonial or review section that provides social proof.

Dependencies:

- `testimonials.ts`

Optional variations:

- static curated testimonials
- rating summary plus excerpts
- carousel later if interaction is justified

Ownership:
Blueprint component powered by Project Data.

## LocationSection

Purpose:
Explain where the clinic is, how to contact it, and how to visit.

Required data inputs:

- location list
- address
- hours
- map link or embed reference
- parking or arrival notes
- phone numbers

Expected output:
A location and logistics section suitable for homepage snapshot or full contact view.

Dependencies:

- `locations.ts`
- `site.ts`

Optional variations:

- single-location compact block
- multi-branch cards
- contact-page expanded section

Ownership:
Blueprint component powered by Project Data.

## AppointmentCTA

Purpose:
Create a strong repeated conversion surface after trust or service content.

Required data inputs:

- CTA headline
- supporting text
- primary CTA
- secondary CTA
- optional phone note

Expected output:
A conversion block that repeats the preferred appointment action path.

Dependencies:

- `site.ts`
- `hero.ts`

Optional variations:

- banner CTA
- split CTA with WhatsApp and phone
- service-specific CTA

Ownership:
Blueprint component powered by Project Data.

## DentalBlogGrid

Purpose:
Promote educational content that supports SEO and patient education.

Required data inputs:

- article list
- titles
- summaries
- publish metadata
- related service mapping

Expected output:
A blog preview or archive grid that supports internal linking.

Dependencies:

- future blog content data
- `seo.ts`

Optional variations:

- homepage article preview
- blog archive grid
- related-articles section on service pages

Ownership:
Blueprint component powered by Project Data.

## FAQSection

Purpose:
Answer common questions and support reassurance plus structured SEO opportunities.

Required data inputs:

- FAQ items
- categories
- optional page association

Expected output:
A readable FAQ section usable on service pages or the main FAQ page.

Dependencies:

- `faq.ts`
- `schema.ts`

Optional variations:

- accordion
- static list
- treatment-specific FAQ block

Ownership:
Blueprint component powered by Project Data.

## WhatsAppFloatingButton

Purpose:
Provide persistent low-friction messaging access, especially on mobile.

Required data inputs:

- WhatsApp number
- default message
- label

Expected output:
A floating WhatsApp action element aligned with Costa Rican user behavior.

Dependencies:

- `site.ts`

Optional variations:

- mobile-only floating button
- persistent desktop and mobile button
- branch-aware message preset

Ownership:
Blueprint behavior contract powered by Project Data. Not part of the generic starter.

## Footer

Purpose:
Close the page with navigation, contact confirmation, social links, and legal links.

Required data inputs:

- footer navigation
- phone
- WhatsApp
- email
- address summary
- social links
- privacy link

Expected output:
A complete footer that reinforces trust and gives one last contact path.

Dependencies:

- `footer.ts`
- `site.ts`
- `navigation.ts`

Optional variations:

- simple footer
- multi-column footer
- footer with branch summaries

Ownership:
Starter structure plus Blueprint content contract, powered by Project Data.
