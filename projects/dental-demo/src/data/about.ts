import type { AboutData } from '../../../../blueprints/dentist/types';

export const about: AboutData = {
  summary:
    'Sunline Dental Studio helps patients move from urgent concerns into long-term oral health plans with calm, practical guidance.',
  intro: {
    eyebrow: 'Clinic story',
    title: 'A smaller team with a prevention-first approach.',
    summary:
      'Sunline Dental Studio was designed as a fictional example of a practice that values clarity as much as technical treatment quality.',
    story:
      'The clinic model combines routine family care, smile-refresh goals, and restorative planning in a setting that favors short wait times and clear next steps.',
    philosophy:
      'Patients should understand why a treatment is recommended, how long it may take, and what maintenance will look like afterward.',
  },
  benefits: {
    eyebrow: 'Why patients choose the clinic',
    title: 'Structured differentiators that fit a modern dental brochure site.',
    benefits: [
      {
        title: 'Clear treatment roadmaps',
        description:
          'Each appointment closes with a practical summary of priorities, timing, and home-care guidance.',
      },
      {
        title: 'Comfort-forward visits',
        description:
          'The clinic emphasizes calm communication, predictable scheduling, and step-by-step expectations.',
      },
      {
        title: 'One data source for trust content',
        description:
          'Doctor bios, reviews, FAQs, and service summaries remain aligned because they are owned by the project data layer.',
      },
    ],
  },
  trustLogos: {
    eyebrow: 'Trust markers',
    title: 'Example partner and protocol badges.',
    items: [
      {
        label: 'Digital planning workflow',
        type: 'Clinical process',
        image: {
          src: '/images/placeholder-badge.svg',
          alt: 'Placeholder badge for a clinical workflow',
        },
      },
      {
        label: 'Instrument sterilization protocol',
        type: 'Safety standard',
        image: {
          src: '/images/placeholder-badge.svg',
          alt: 'Placeholder badge for a sterilization protocol',
        },
      },
      {
        label: 'Flexible payment coordination',
        type: 'Patient support',
        image: {
          src: '/images/placeholder-badge.svg',
          alt: 'Placeholder badge for payment coordination support',
        },
      },
    ],
  },
};
