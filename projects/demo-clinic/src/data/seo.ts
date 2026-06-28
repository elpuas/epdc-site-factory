import type { SeoPageData } from '../../blueprints/dentist/types';

export const seo: Record<string, SeoPageData> = {
  home: {
    title: 'Sunline Dental Studio | Fictional Dental Clinic Demo',
    description:
      'A fictional dental clinic website that validates the EPDC Dental Blueprint against a complete project-owned data model.',
    lang: 'en',
    canonicalPath: '/',
  },
  about: {
    title: 'About | Sunline Dental Studio',
    description: 'Learn how the fictional clinic presents its story, care philosophy, and differentiators through structured data.',
    lang: 'en',
    canonicalPath: '/about',
  },
  services: {
    title: 'Services | Sunline Dental Studio',
    description: 'Browse the fictional clinic service mix for prevention, cosmetic care, restorative repair, and aligner consultations.',
    lang: 'en',
    canonicalPath: '/services',
  },
  serviceDetail: {
    title: 'Preventive Checkups | Sunline Dental Studio',
    description: 'Review the fictional preventive checkups page rendered from the shared service data model.',
    lang: 'en',
    canonicalPath: '/service-detail',
  },
  doctors: {
    title: 'Doctors | Sunline Dental Studio',
    description: 'See how clinician biographies, specialties, and credentials render from structured project data.',
    lang: 'en',
    canonicalPath: '/doctors',
  },
  blog: {
    title: 'Blog | Sunline Dental Studio',
    description: 'Read fictional dental education articles that demonstrate the blog section of the Dental Blueprint.',
    lang: 'en',
    canonicalPath: '/blog',
  },
  blogPost: {
    title: 'What Happens During a First Dental Evaluation? | Sunline Dental Studio',
    description: 'A fictional blog post used to validate data-driven article rendering in the Dental Blueprint.',
    lang: 'en',
    canonicalPath: '/blog-post',
  },
  faq: {
    title: 'FAQ | Sunline Dental Studio',
    description: 'Review common fictional patient questions rendered from the project FAQ module.',
    lang: 'en',
    canonicalPath: '/faq',
  },
  contact: {
    title: 'Contact | Sunline Dental Studio',
    description: 'Find fictional contact channels, hours, and visit details used to validate the contact and location sections.',
    lang: 'en',
    canonicalPath: '/contact',
  },
  privacyPolicy: {
    title: 'Privacy Policy | Sunline Dental Studio',
    description: 'Placeholder privacy-policy content for the fictional blueprint validation project.',
    lang: 'en',
    canonicalPath: '/privacy-policy',
  },
};
