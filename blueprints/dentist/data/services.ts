import type { Service } from './types';

export const services: Service[] = [
  {
    slug: 'general-dentistry',
    name: 'General dentistry',
    category: 'Preventive',
    summary: 'A flexible placeholder for exams, cleanings, and routine oral health care.',
    detail:
      'This sample service record shows how the Blueprint expects treatment summaries, educational sections, and structured conversion content to arrive from data.',
    benefits: ['Supports broad service overviews', 'Works for featured or archive grids', 'Links cleanly into FAQ content'],
    processSteps: ['Initial evaluation placeholder', 'Treatment planning placeholder', 'Follow-up guidance placeholder'],
    candidateNotes: ['Useful for families, adults, and routine care audiences.', 'Can be swapped for any project-specific treatment record.'],
    featured: true,
    relatedFaqIds: ['faq-appointment', 'faq-visit-length'],
  },
  {
    slug: 'cosmetic-dentistry',
    name: 'Cosmetic dentistry',
    category: 'Aesthetic',
    summary: 'A placeholder category for appearance-focused dental services and consultation journeys.',
    detail:
      'The Blueprint treats this as data so future projects can plug in veneers, whitening, or smile design content without changing component markup.',
    benefits: ['Supports treatment education', 'Feeds blog and FAQ relationships', 'Works in homepage highlights'],
    processSteps: ['Consultation placeholder', 'Personalized recommendation placeholder', 'Care and maintenance placeholder'],
    candidateNotes: ['Designed for service-detail pages that need trust, benefits, and CTA repetition.'],
    featured: true,
    relatedFaqIds: ['faq-whatsapp', 'faq-appointment'],
  },
  {
    slug: 'restorative-dentistry',
    name: 'Restorative dentistry',
    category: 'Restorative',
    summary: 'A placeholder for treatment pages that explain function, recovery, and ongoing support.',
    detail:
      'This service sample validates the single-service template, related FAQs, and appointment CTA flow.',
    benefits: ['Demonstrates longer educational sections', 'Pairs with doctor and trust blocks', 'Uses the same card component as other services'],
    processSteps: ['Assessment placeholder', 'Procedure placeholder', 'Aftercare placeholder'],
    candidateNotes: ['Intended for treatment-specific conversion paths.'],
    featured: false,
    relatedFaqIds: ['faq-visit-length'],
  },
];

export const featuredServices = services.filter((service) => service.featured);
