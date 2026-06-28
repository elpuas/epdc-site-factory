import type { BlogPost, BlogSectionData } from '../../blueprints/dentist/types';

export const blogPosts: BlogPost[] = [
  {
    slug: 'what-happens-during-a-first-dental-evaluation',
    title: 'What happens during a first dental evaluation?',
    summary:
      'A practical walkthrough of check-in, imaging, exam time, and how treatment priorities are usually explained.',
    category: 'New Patients',
    publishedAt: '2026-06-15',
    readTime: '4 min read',
    image: {
      src: '/images/placeholder-blog.svg',
      alt: 'Placeholder illustration for a first dental evaluation article',
    },
    relatedServiceSlugs: ['preventive-checkups'],
    body: [
      'A first evaluation usually starts with a short health history review and a clear explanation of the reason for the visit.',
      'Imaging, photos, or a cleaning may follow depending on the patient’s needs and the time reserved for the appointment.',
      'The key outcome is a practical plan that prioritizes urgent concerns, preventive care, and any elective treatment discussions.',
    ],
  },
  {
    slug: 'how-to-prepare-for-whitening',
    title: 'How should patients prepare for whitening treatment?',
    summary:
      'Questions about sensitivity, timing, and maintenance are easier to answer when the service page and blog share one data model.',
    category: 'Cosmetic Care',
    publishedAt: '2026-06-18',
    readTime: '3 min read',
    image: {
      src: '/images/placeholder-blog.svg',
      alt: 'Placeholder illustration for whitening preparation article',
    },
    relatedServiceSlugs: ['smile-brightening'],
    body: [
      'Whitening preparation often includes reviewing recent sensitivity, existing restorations, and shade expectations.',
      'Patients usually receive simple guidance about what to avoid immediately after treatment and how touch-ups work later.',
    ],
  },
  {
    slug: 'signs-a-tooth-may-need-restorative-care',
    title: 'Signs a tooth may need restorative care',
    summary:
      'Small warning signs such as biting pain, visible cracks, or recurring sensitivity should be evaluated before they become more disruptive.',
    category: 'Restorative Care',
    publishedAt: '2026-06-22',
    readTime: '5 min read',
    image: {
      src: '/images/placeholder-blog.svg',
      alt: 'Placeholder illustration for restorative care article',
    },
    relatedServiceSlugs: ['restorative-repair'],
    body: [
      'Not every sensitivity issue means a major procedure, but delayed evaluation can turn a smaller fix into a more complex treatment path.',
      'A restorative consultation usually focuses on symptoms, imaging, structural stability, and how to protect the tooth long term.',
    ],
  },
];

export const blogPreview: BlogSectionData = {
  eyebrow: 'From the blog',
  title: 'Recent articles that support booking confidence.',
  linkLabel: 'Read article',
  posts: blogPosts.slice(0, 2),
};

export const blogArchive: BlogSectionData = {
  eyebrow: 'Blog archive',
  title: 'Educational content for before and after dental visits.',
  linkLabel: 'Read article',
  posts: blogPosts,
};
