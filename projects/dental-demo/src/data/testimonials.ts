import type { GoogleReviewsSectionData, TestimonialsSectionData } from '../../../../blueprints/dentist/types';

export const testimonials: TestimonialsSectionData = {
  eyebrow: 'Patient stories',
  title: 'Short proof points that reinforce trust near booking paths.',
  items: [
    {
      id: 'review-1',
      quote:
        'The team explained every step before starting, and I left with a clear plan instead of feeling rushed.',
      authorLabel: 'Verified demo patient',
      relatedServiceSlugs: ['preventive-checkups'],
    },
    {
      id: 'review-2',
      quote:
        'I appreciated that the whitening options were explained in practical terms, including maintenance and sensitivity.',
      authorLabel: 'Verified demo patient',
      relatedServiceSlugs: ['smile-brightening'],
    },
    {
      id: 'review-3',
      quote:
        'My repair appointment felt organized from the first phone call through the follow-up instructions.',
      authorLabel: 'Verified demo patient',
      relatedServiceSlugs: ['restorative-repair'],
    },
  ],
};

export const googleReviews: GoogleReviewsSectionData = {
  eyebrow: 'Google reviews',
  title: '4.9 average patient rating',
  summary: {
    rating: '4.9 / 5',
    reviewCountLabel: '128 reviews in this fictional example',
    label: 'Patients most often mention calm communication, practical recommendations, and punctual visits.',
  },
  items: testimonials.items.slice(0, 2),
};
