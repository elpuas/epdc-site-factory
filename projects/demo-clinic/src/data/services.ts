import type { Service, ServiceSectionData } from '../../blueprints/dentist/types';

export const services: Service[] = [
  {
    slug: 'preventive-checkups',
    name: 'Preventive checkups',
    category: 'Prevention',
    summary: 'Routine evaluations, digital imaging, cleanings, and practical home-care guidance.',
    detail:
      'Preventive appointments help identify issues early while giving patients a clear picture of hygiene, monitoring, and treatment priorities.',
    benefits: [
      'Keeps routine care visible on the homepage and service archive',
      'Supports first-visit planning for adults and children',
      'Creates a natural path into FAQs and follow-up booking',
    ],
    processSteps: ['Medical and dental history review', 'Clinical exam and imaging as needed', 'Cleaning, recommendations, and next-step plan'],
    candidateNotes: [
      'Ideal for patients scheduling a first visit or returning after a gap in care.',
      'Useful when someone wants a baseline assessment before cosmetic or restorative treatment.',
    ],
    featured: true,
    relatedFaqIds: ['faq-new-patient', 'faq-visit-length'],
  },
  {
    slug: 'smile-brightening',
    name: 'Smile brightening',
    category: 'Cosmetic',
    summary: 'Professional whitening pathways with shade guidance and maintenance expectations.',
    detail:
      'This service is positioned for patients who want cosmetic improvement with realistic expectations about comfort, timing, and upkeep.',
    benefits: [
      'Works well for consultation-led cosmetic demand',
      'Creates a clean education path from blog content into booking',
      'Helps demonstrate reusable treatment-page composition',
    ],
    processSteps: ['Initial suitability review', 'Shade planning and sensitivity guidance', 'Treatment session and maintenance instructions'],
    candidateNotes: [
      'Best for patients looking to refresh a smile before an event or after orthodontic treatment.',
    ],
    featured: true,
    relatedFaqIds: ['faq-whitening-duration', 'faq-whatsapp-booking'],
  },
  {
    slug: 'restorative-repair',
    name: 'Restorative repair',
    category: 'Restorative',
    summary: 'Tooth-colored fillings, crowns, and repair planning for damaged teeth.',
    detail:
      'Restorative care combines diagnostics, sequencing, and recovery guidance so patients understand function, comfort, and durability goals.',
    benefits: [
      'Explains functional treatment in accessible language',
      'Pairs naturally with doctor credentials and consultation CTAs',
      'Supports related-service cross-linking from one shared data record',
    ],
    processSteps: ['Diagnosis and treatment options review', 'Procedure planning with timeline estimate', 'Procedure, bite check, and follow-up guidance'],
    candidateNotes: [
      'Often relevant for patients with cracks, worn restorations, or sensitivity while chewing.',
    ],
    featured: true,
    relatedFaqIds: ['faq-treatment-pricing', 'faq-visit-length'],
  },
  {
    slug: 'aligner-consultations',
    name: 'Aligner consultations',
    category: 'Orthodontic planning',
    summary: 'Consultations for adults interested in discreet bite and alignment correction.',
    detail:
      'The aligner pathway is framed around candidacy, time commitment, digital planning, and follow-up consistency.',
    benefits: [
      'Supports higher-consideration consultations with clear expectations',
      'Demonstrates how one blueprint can handle multi-visit educational journeys',
    ],
    processSteps: ['Candidacy evaluation', 'Digital planning discussion', 'Monitoring schedule and retention plan'],
    candidateNotes: [
      'Relevant for adults who want to improve spacing or crowding without traditional braces.',
    ],
    featured: false,
    relatedFaqIds: ['faq-aligners', 'faq-whatsapp-booking'],
  },
];

export const homeServices: ServiceSectionData = {
  eyebrow: 'Featured services',
  title: 'Core treatments for prevention, comfort, and smile confidence.',
  linkLabel: 'View treatment details',
  services: services.filter((service) => service.featured),
};

export const servicesArchive: ServiceSectionData = {
  eyebrow: 'Service archive',
  title: 'A full view of the clinic treatment mix.',
  linkLabel: 'View treatment details',
  services,
};

export const relatedServicesSectionTitle = 'Related treatments';
export const treatmentOverviewEyebrow = 'Treatment overview';
export const treatmentOverviewTitle = 'Who this service often helps';
export const whatToExpectTitle = 'What to expect';
export const serviceBenefitsEyebrow = 'Benefits';
export const serviceBenefitsTitle = 'Why patients choose this option';
