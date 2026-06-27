# Dental Platform Data Model

## Data Philosophy

The dental platform should follow the EPDC rule that components render data and do not own content.

Whenever possible, reusable site content should live under `src/data/` in small, typed modules with clear responsibilities.

This document defines the canonical data shape for a future dental blueprint. The examples are TypeScript-like references only and are not production code.

## Recommended `src/data/` Structure

```text
src/data/
├── site.ts
├── navigation.ts
├── hero.ts
├── about.ts
├── services.ts
├── doctors.ts
├── testimonials.ts
├── locations.ts
├── faq.ts
├── seo.ts
├── footer.ts
└── schema.ts
```

## `site.ts`

Purpose:
Store the global clinic identity and core contact details used across the site.

Suggested shape:

```ts
export const clinic = {
  name: 'Clinica Dental Demo',
  legalName: 'Clinica Dental Demo S.A.',
  tagline: 'Atencion dental confiable en Costa Rica',
  phone: '4000-0000',
  whatsapp: '50688888888',
  whatsappDefaultMessage: 'Hola, quiero agendar una cita.',
  email: 'info@example.com',
  primaryCity: 'San Jose',
  country: 'Costa Rica',
  primaryCtaLabel: 'Agendar cita',
  primaryCtaHref: '/contacto',
  secondaryCtaLabel: 'Escribir por WhatsApp',
  secondaryCtaHref: 'https://wa.me/50688888888',
  socialLinks: [],
}
```

## `navigation.ts`

Purpose:
Define primary, secondary, and footer navigation in one reusable source.

Suggested shape:

```ts
export const navigation = {
  primary: [
    { label: 'Inicio', href: '/' },
    { label: 'Nosotros', href: '/nosotros' },
    { label: 'Servicios', href: '/servicios' },
    { label: 'Doctores', href: '/doctores' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contacto', href: '/contacto' },
  ],
  footer: [
    { label: 'Preguntas frecuentes', href: '/faq' },
    { label: 'Politica de privacidad', href: '/privacidad' },
  ],
}
```

## `hero.ts`

Purpose:
Hold hero content for the home page and optional page-level variants.

Suggested shape:

```ts
export const homeHero = {
  eyebrow: 'Clinica dental en Costa Rica',
  title: 'Sonrisas saludables con atencion profesional y cercana',
  description: 'Atendemos familias, adultos y pacientes que buscan tratamientos dentales con confianza.',
  image: {
    alt: 'Equipo dental atendiendo a un paciente',
    src: '/images/hero-dental.jpg',
  },
  primaryCta: { label: 'Agendar cita', href: '/contacto' },
  secondaryCta: { label: 'Escribir por WhatsApp', href: 'https://wa.me/50688888888' },
  trustHighlights: [
    'Especialistas certificados',
    'Ubicacion accesible',
    'Horarios claros',
  ],
}
```

## `about.ts`

Purpose:
Store clinic-story, differentiator, and trust content.

Suggested shape:

```ts
export const about = {
  summary: 'Clinica enfocada en atencion dental integral.',
  story: 'Breve historia de la clinica.',
  philosophy: 'Enfoque en trato humano, claridad y prevencion.',
  benefits: [
    {
      title: 'Atencion cercana',
      description: 'Explicamos cada tratamiento con claridad.',
    },
  ],
  trustLogos: [
    {
      label: 'Colegio profesional',
      type: 'membership',
      image: '/images/trust/logo-1.svg',
    },
  ],
}
```

## `services.ts`

Purpose:
Define service categories, homepage featured services, and treatment-page records.

Suggested shape:

```ts
export const serviceCategories = [
  {
    slug: 'preventiva',
    label: 'Odontologia preventiva',
  },
]

export const services = [
  {
    slug: 'blanqueamiento-dental',
    name: 'Blanqueamiento dental',
    category: 'cosmetica',
    summary: 'Mejora el color de la sonrisa con acompanamiento profesional.',
    seoTitle: 'Blanqueamiento dental en Costa Rica',
    metaDescription: 'Conoce el tratamiento, sus beneficios y como agendar una valoracion.',
    benefits: [],
    processSteps: [],
    candidateNotes: [],
    relatedFaqIds: ['faq-whitening-1'],
    relatedDoctorSlugs: ['dra-demo'],
    featured: true,
  },
]
```

## `doctors.ts`

Purpose:
Define the doctor and team content model.

Suggested shape:

```ts
export const doctors = [
  {
    slug: 'dra-demo',
    name: 'Dra. Demo',
    role: 'Odontologa general',
    specialties: ['Cosmetica', 'Prevencion'],
    credentials: ['Licenciatura en Odontologia'],
    memberships: ['Colegio profesional'],
    yearsOfExperience: 12,
    bioShort: 'Perfil breve para secciones de confianza.',
    bioLong: 'Biografia ampliada para la pagina de doctores.',
    image: '/images/doctors/dra-demo.jpg',
  },
]
```

## `testimonials.ts`

Purpose:
Hold approved review excerpts and trust summaries.

Suggested shape:

```ts
export const testimonials = {
  featured: [
    {
      id: 'review-1',
      quote: 'Excelente trato y explicaciones muy claras.',
      authorLabel: 'Paciente verificado',
      source: 'approved-manual',
      relatedServiceSlugs: ['blanqueamiento-dental'],
    },
  ],
  summary: {
    enabled: true,
    label: 'Resenas de pacientes',
  },
}
```

## `locations.ts`

Purpose:
Store one or multiple clinic locations with operational details.

Suggested shape:

```ts
export const locations = [
  {
    slug: 'sede-principal',
    label: 'Sede principal',
    addressLine1: 'Direccion completa',
    district: 'Distrito',
    city: 'San Jose',
    province: 'San Jose',
    postalCode: '10101',
    country: 'CR',
    phone: '4000-0000',
    whatsapp: '50688888888',
    hours: [
      { days: 'Lunes a viernes', open: '08:00', close: '18:00' },
    ],
    mapEmbedUrl: 'https://maps.example.com/embed',
    mapPlaceUrl: 'https://maps.example.com/place',
    parkingNotes: 'Parqueo cercano disponible.',
    isPrimary: true,
  },
]
```

## `faq.ts`

Purpose:
Organize general and service-specific FAQs.

Suggested shape:

```ts
export const faqItems = [
  {
    id: 'faq-whitening-1',
    question: 'Cuantas sesiones necesito?',
    answer: 'Depende de la evaluacion clinica y del objetivo del paciente.',
    category: 'service',
    relatedServiceSlug: 'blanqueamiento-dental',
  },
]
```

## `seo.ts`

Purpose:
Store metadata defaults, local targeting, and internal-linking helpers.

Suggested shape:

```ts
export const seo = {
  siteName: 'Clinica Dental Demo',
  defaultTitle: 'Clinica dental en Costa Rica',
  defaultDescription: 'Atencion dental profesional con enfoque en confianza y claridad.',
  defaultOgImage: '/images/og/default.jpg',
  targetLocations: ['San Jose', 'Escazu', 'Heredia'],
  serviceMetadata: {
    'blanqueamiento-dental': {
      title: 'Blanqueamiento dental en Costa Rica',
      description: 'Informacion y valoracion para mejorar la sonrisa.',
    },
  },
}
```

## `footer.ts`

Purpose:
Define footer-specific groups and legal references.

Suggested shape:

```ts
export const footer = {
  contactHeading: 'Agenda tu cita',
  legalLinks: [
    { label: 'Politica de privacidad', href: '/privacidad' },
  ],
  socialLinks: [
    { label: 'Instagram', href: 'https://instagram.com/example' },
  ],
}
```

## `schema.ts`

Purpose:
Centralize the structured-data payloads needed by the site.

Suggested shape:

```ts
export const schemaData = {
  dentistBusiness: {
    '@type': 'Dentist',
    name: 'Clinica Dental Demo',
    telephone: '4000-0000',
    areaServed: ['San Jose', 'Escazu'],
  },
  faqPageByService: {
    'blanqueamiento-dental': ['faq-whitening-1'],
  },
  breadcrumbTemplates: {
    service: ['Inicio', 'Servicios', 'Servicio'],
  },
}
```

## Data Design Rules

- Global clinic facts belong in `site.ts`.
- Route and menu structures belong in `navigation.ts`.
- Reusable treatment content belongs in `services.ts`.
- Professional identity belongs in `doctors.ts`.
- Social proof belongs in `testimonials.ts`.
- Operational visit details belong in `locations.ts`.
- Reusable metadata logic belongs in `seo.ts` and `schema.ts`.
- Components should receive the smallest useful slice of data rather than reach across unrelated modules.
- Missing business details should remain explicit gaps instead of fabricated values.
