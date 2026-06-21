# Project Specification

## Project
### Name
Harbor Point Dental Studio

### Slug
harbor-point-dental-studio

### Industry
Family dentistry and cosmetic dental care

## Business Goals
### Primary Goal
Increase new patient appointment requests from families and working professionals in the East Bay area.

### Secondary Goals

- Present the practice as modern, welcoming, and clinically trustworthy.
- Highlight cosmetic and preventive services that drive higher-value consultations.
- Reduce friction for first-time patients looking for insurance, hours, and location details.
- Build a strong local search presence for dentist-related searches in Alameda, Oakland, and San Leandro.

## Technical Requirements
### Framework
Astro

### Database
None for launch. The site should stay ready for future patient inquiry storage and appointment workflows.

### Languages
English

### Deployment
Static-first deployment on Netlify with a simple path for future form handling enhancements.

## Pages

- Home
  - Purpose: Introduce the practice, build trust quickly, and drive appointment requests.
  - Key sections: Hero, value proposition, featured services, dentist introduction, patient testimonials, insurance summary, CTA banner, contact snapshot.
  - Primary CTA: Request an appointment.

- About
  - Purpose: Explain the practice story, care philosophy, and dentist credentials.
  - Key sections: Practice overview, lead dentist bio, team highlights, office environment, patient care philosophy.
  - Primary CTA: Meet the team and book a first visit.

- Services
  - Purpose: Provide an overview of core dental offerings.
  - Key sections: Preventive dentistry, restorative dentistry, cosmetic dentistry, emergency care, consultation CTA.
  - Primary CTA: Schedule a consultation.

- Teeth Whitening
  - Purpose: Capture interest from cosmetic dentistry searches.
  - Key sections: Treatment overview, benefits, candidacy, process, expected results, FAQ.
  - Primary CTA: Book a whitening consultation.

- Dental Implants
  - Purpose: Support higher-intent restorative treatment searches.
  - Key sections: Implant overview, eligibility, treatment stages, benefits, financing note, FAQ.
  - Primary CTA: Request an implant evaluation.

- New Patients
  - Purpose: Help first-time visitors prepare for their appointment.
  - Key sections: What to expect, accepted insurance, downloadable forms note, payment options, office policies.
  - Primary CTA: Become a new patient.

- Reviews
  - Purpose: Reinforce trust with social proof.
  - Key sections: Patient testimonials, review highlights, invitation to read more reviews.
  - Primary CTA: Read patient experiences.

- Contact
  - Purpose: Provide all appointment and location details.
  - Key sections: Contact form, phone number, address, office hours, parking notes, map embed.
  - Primary CTA: Call or request an appointment.

## Features

- Mobile-friendly appointment request form with service-interest selection.
- Persistent click-to-call button on mobile.
- Insurance and payment information section for new patients.
- Testimonial sections on Home and Reviews pages.
- FAQ blocks on treatment-focused pages.
- Embedded map and office hours on the Contact page.

## SEO
### Local SEO

- Target patients in Alameda, Oakland, and San Leandro.
- Reinforce consistent practice name, address, phone number, and office hours across the site.
- Include localized copy that references family dental care and cosmetic dentistry in the East Bay.
- Support trust signals through testimonials, dentist credentials, and insurance acceptance details.

### Metadata

- Every public page must have a unique title and meta description aligned with search intent.
- Home page metadata should emphasize family dentist and cosmetic dentistry in Alameda.
- Service page metadata should target treatment-specific searches such as teeth whitening and dental implants.
- Open Graph and social preview data should use the practice name and key service positioning.

### Sitemap

- Include all public pages in the sitemap.
- Exclude noindex or utility pages if they are added later.

### Schema.org

- Use `Dentist` for the practice.
- Use `FAQPage` on Teeth Whitening and Dental Implants if those pages include structured FAQs.
- Include `LocalBusiness`-style contact details through the primary business schema where appropriate.

## Content

- Voice should be warm, confident, and reassuring for anxious or first-time patients.
- Home page must clearly explain preventive, restorative, and cosmetic service categories.
- About page must include the lead dentist's education, years of experience, and patient care philosophy.
- Service pages must explain benefits, who the treatment is for, and what patients should expect next.
- New Patients page must include accepted PPO insurance networks, payment methods, and first-visit expectations.
- Contact details must include the full street address, local phone number, office hours, and parking guidance.
- Reviews content should feel authentic and reflect common patient priorities such as gentle care, cleanliness, and punctuality.

## Integrations

- Google Maps embed for office location.
- Google Analytics for traffic measurement.
- Form submission delivery to the practice email inbox.

## Acceptance Criteria

- All required pages exist and include the listed key sections.
- Appointment request actions are visible on desktop and mobile across the core conversion pages.
- Practice name, phone number, address, and office hours are consistent across Home, New Patients, and Contact pages.
- Service pages clearly explain the treatment purpose, patient fit, and next step.
- Every public page includes unique metadata.
- Local SEO signals support targeting for Alameda, Oakland, and San Leandro.
