# Dental Blueprint Page Composition

The reusable composition rules for this Blueprint are:

- `Header` and `Footer` live in `layouts/BaseLayout.astro`.
- Conversion pages should repeat `AppointmentCTA` after trust or education-heavy sections.
- `Hero` is the shared top-of-page entry for Home and interior templates.
- `ServiceCards`, `DoctorGrid`, `BlogGrid`, and `FAQSection` are reusable collection components that read arrays from `data/`.
- `ContactSection`, `LocationsSection`, and `WhatsAppFloatingButton` preserve the Costa Rica dental contact model identified in Sprint 019.

Recommended composition order:

- Home: `Hero` -> `ServiceCards` -> `ClinicIntro` -> `BenefitsGrid` -> `DoctorGrid` -> `Testimonials` -> `GoogleReviews` -> `LocationsSection` -> `AppointmentCTA` -> `BlogGrid`
- Service detail: `Hero` -> treatment overview -> benefits -> `FAQSection` -> `AppointmentCTA` -> related `ServiceCards`
- Contact: `Hero` -> `ContactSection` -> `LocationsSection` -> `AppointmentCTA`
