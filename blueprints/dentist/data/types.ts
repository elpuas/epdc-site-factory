export interface Link {
  label: string;
  href: string;
}

export interface ImageAsset {
  src: string;
  alt: string;
}

export interface MetaData {
  title: string;
  description: string;
  lang: string;
}

export interface SiteData {
  brandName: string;
  tagline: string;
  phone: string;
  whatsappNumber: string;
  whatsappHref: string;
  whatsappDefaultMessage: string;
  email: string;
  primaryCity: string;
  country: string;
  addressSummary: string;
  primaryCta: Link;
  secondaryCta: Link;
  socialLinks: Link[];
  meta: MetaData;
}

export interface NavigationData {
  primary: Link[];
  footer: Link[];
}

export interface HeroData {
  eyebrow: string;
  title: string;
  description: string;
  image: ImageAsset;
  primaryCta: Link;
  secondaryCta: Link;
  trustHighlights: string[];
}

export interface Service {
  slug: string;
  name: string;
  category: string;
  summary: string;
  detail: string;
  benefits: string[];
  processSteps: string[];
  candidateNotes: string[];
  featured: boolean;
  relatedFaqIds: string[];
}

export interface Benefit {
  title: string;
  description: string;
}

export interface TrustLogo {
  label: string;
  type: string;
  image: ImageAsset;
}

export interface AboutData {
  summary: string;
  story: string;
  philosophy: string;
  benefits: Benefit[];
  trustLogos: TrustLogo[];
}

export interface Doctor {
  slug: string;
  name: string;
  role: string;
  specialties: string[];
  credentials: string[];
  bioShort: string;
  bioLong: string;
  image: ImageAsset;
}

export interface Testimonial {
  id: string;
  quote: string;
  authorLabel: string;
  relatedServiceSlugs: string[];
}

export interface ReviewSummary {
  label: string;
  rating: string;
  reviewCountLabel: string;
}

export interface TestimonialsData {
  featured: Testimonial[];
  summary: ReviewSummary;
}

export interface LocationHours {
  days: string;
  open: string;
  close: string;
}

export interface Location {
  slug: string;
  label: string;
  addressLine1: string;
  district: string;
  city: string;
  province: string;
  country: string;
  phone: string;
  whatsapp: string;
  hours: LocationHours[];
  mapLabel: string;
  parkingNotes: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface AppointmentCtaData {
  title: string;
  description: string;
  primaryCta: Link;
  secondaryCta: Link;
  phoneNote: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  summary: string;
  category: string;
  publishedAt: string;
  readTime: string;
  image: ImageAsset;
  relatedServiceSlugs: string[];
  body: string[];
}

export interface ContactSectionData {
  title: string;
  description: string;
  appointmentNote: string;
  formDisclaimer: string;
}

export interface PrivacyPolicyData {
  title: string;
  intro: string;
  sections: Array<{
    heading: string;
    body: string[];
  }>;
}
