import type { BlogPost } from './types';

export const blogPosts: BlogPost[] = [
  {
    slug: 'understanding-dental-consultations',
    title: 'Understanding the structure of a modern dental consultation page',
    summary:
      'A placeholder article that demonstrates how the Blueprint can support educational content and internal linking.',
    category: 'Patient Education',
    publishedAt: '2026-06-27',
    readTime: '4 min read',
    image: {
      src: '../assets/placeholder-blog.svg',
      alt: 'Placeholder blog illustration',
    },
    relatedServiceSlugs: ['general-dentistry'],
    body: [
      'This example article exists only to validate the blog archive and blog post templates.',
      'Future projects can replace these paragraphs with generated educational content tied to local search and service intent.',
      'The template stays reusable because metadata, imagery, summaries, and body sections all come from data.',
    ],
  },
  {
    slug: 'what-patients-need-before-booking',
    title: 'What patients often look for before booking a dental appointment',
    summary:
      'A second placeholder post to validate archive grid rendering and related-service mapping.',
    category: 'Appointments',
    publishedAt: '2026-06-27',
    readTime: '3 min read',
    image: {
      src: '../assets/placeholder-blog.svg',
      alt: 'Placeholder appointment article illustration',
    },
    relatedServiceSlugs: ['cosmetic-dentistry'],
    body: [
      'This placeholder post reinforces the expected archive pattern for informational pages.',
      'Its purpose is architectural validation rather than polished editorial content.',
    ],
  },
];
