import type { TestimonialsData } from './types';

export const testimonials: TestimonialsData = {
  featured: [
    {
      id: 'review-1',
      quote: 'The structure makes it easy to place reassurance content near the next appointment action.',
      authorLabel: 'Placeholder patient review',
      relatedServiceSlugs: ['general-dentistry'],
    },
    {
      id: 'review-2',
      quote: 'Reusable sections keep educational content consistent across services and contact pages.',
      authorLabel: 'Placeholder patient review',
      relatedServiceSlugs: ['cosmetic-dentistry'],
    },
  ],
  summary: {
    label: 'Review summary placeholder',
    rating: '4.9/5',
    reviewCountLabel: '120+ example reviews',
  },
};
