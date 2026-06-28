import type { AboutData } from './types';

export const about: AboutData = {
  summary:
    'The Blueprint keeps story-driven trust content separate from rendering so future project data can describe a clinic without rewriting page templates.',
  story:
    'This placeholder narrative demonstrates where a clinic overview, environment notes, and trust-building context would appear once generated content is available.',
  philosophy:
    'Prioritize clarity, prevention, and calm patient guidance through reusable sections that stay useful across many dental websites.',
  benefits: [
    {
      title: 'Clear treatment communication',
      description: 'Reusable content slots explain services, expectations, and next steps without page-specific duplication.',
    },
    {
      title: 'Trust-first composition',
      description: 'The section order keeps services, doctors, reviews, and contact paths close to conversion points.',
    },
    {
      title: 'Scalable local structure',
      description: 'Placeholder locations, FAQs, and blog patterns support future Costa Rican project data.',
    },
  ],
  trustLogos: [
    {
      label: 'Professional membership placeholder',
      type: 'membership',
      image: {
        src: '../assets/placeholder-badge.svg',
        alt: 'Placeholder trust badge',
      },
    },
    {
      label: 'Technology partner placeholder',
      type: 'technology',
      image: {
        src: '../assets/placeholder-badge.svg',
        alt: 'Placeholder technology badge',
      },
    },
    {
      label: 'Insurance placeholder',
      type: 'insurance',
      image: {
        src: '../assets/placeholder-badge.svg',
        alt: 'Placeholder insurance badge',
      },
    },
  ],
};
