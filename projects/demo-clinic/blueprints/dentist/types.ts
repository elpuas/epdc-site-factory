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

export interface SeoPageData extends MetaData {
  canonicalPath: string;
}

export interface FooterData {
  contactHeading: string;
  linksHeading: string;
  legalNotice: string;
}

export interface AppointmentCtaData {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta: Link;
  secondaryCta: Link;
  phoneNote: string;
}

export interface ContactMethod {
  title: string;
  value: string;
  href: string;
}

export interface ContactSectionData {
  eyebrow: string;
  title: string;
  description: string;
  methods: ContactMethod[];
  appointmentCardTitle: string;
  appointmentNote: string;
  formDisclaimer: string;
}

export interface SiteData {
  brandName: string;
  legalName: string;
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
  accessibility: {
    skipLinkLabel: string;
    whatsappFloatingLabel: string;
  };
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
  trustHighlightsLabel: string;
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

export interface ServiceSectionData {
  eyebrow: string;
  title: string;
  linkLabel: string;
  services: Service[];
}

export interface Benefit {
  title: string;
  description: string;
}

export interface BenefitsSectionData {
  eyebrow: string;
  title: string;
  benefits: Benefit[];
}

export interface TrustLogo {
  label: string;
  type: string;
  image: ImageAsset;
}

export interface TrustLogosSectionData {
  eyebrow: string;
  title: string;
  items: TrustLogo[];
}

export interface ClinicIntroData {
  eyebrow: string;
  title: string;
  summary: string;
  story: string;
  philosophy: string;
}

export interface AboutData {
  summary: string;
  intro: ClinicIntroData;
  benefits: BenefitsSectionData;
  trustLogos: TrustLogosSectionData;
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

export interface DoctorSectionData {
  eyebrow: string;
  title: string;
  specialtiesLabel: string;
  credentialsLabel: string;
  doctors: Doctor[];
}

export interface Testimonial {
  id: string;
  quote: string;
  authorLabel: string;
  relatedServiceSlugs: string[];
}

export interface TestimonialsSectionData {
  eyebrow: string;
  title: string;
  items: Testimonial[];
}

export interface ReviewSummary {
  rating: string;
  reviewCountLabel: string;
  label: string;
}

export interface GoogleReviewsSectionData {
  eyebrow: string;
  title: string;
  summary: ReviewSummary;
  items: Testimonial[];
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
  mapSummary: string;
  parkingNotes: string;
}

export interface LocationsSectionData {
  eyebrow: string;
  title: string;
  phoneLabel: string;
  whatsappLabel: string;
  hoursLabel: string;
  parkingLabel: string;
  locations: Location[];
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface FAQSectionData {
  eyebrow: string;
  title: string;
  items: FAQItem[];
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

export interface BlogSectionData {
  eyebrow: string;
  title: string;
  linkLabel: string;
  posts: BlogPost[];
}

export interface PrivacyPolicyData {
  eyebrow: string;
  title: string;
  intro: string;
  sections: Array<{
    heading: string;
    body: string[];
  }>;
}

export interface LayoutProps {
  footer: FooterData;
  navigation: NavigationData;
  site: SiteData;
}
