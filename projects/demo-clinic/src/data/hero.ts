import type { HeroData } from '../../blueprints/dentist/types';
import { site } from './site';

export const homeHero: HeroData = {
  eyebrow: 'San Jose dental care',
  title: 'Thoughtful dental visits with clear explanations and practical treatment plans.',
  description:
    'Sunline Dental Studio pairs preventive care, cosmetic options, and restorative dentistry in a calm clinic designed for busy adults and growing families.',
  image: {
    src: '/images/placeholder-hero.svg',
    alt: 'Abstract placeholder illustration for a modern dental clinic',
  },
  primaryCta: site.primaryCta,
  secondaryCta: site.secondaryCta,
  trustHighlightsLabel: 'Clinic trust highlights',
  trustHighlights: ['Same-week evaluations', 'Digital imaging on site', 'Bilingual appointment support'],
};

export const aboutHero: HeroData = {
  ...homeHero,
  eyebrow: 'About the clinic',
  title: 'A neighborhood practice built around calm communication and steady follow-up.',
  description:
    'The team focuses on preventive planning, realistic treatment sequencing, and clear expectations before every procedure.',
};

export const servicesHero: HeroData = {
  ...homeHero,
  eyebrow: 'Services',
  title: 'Treatment options organized for education, trust, and booking clarity.',
  description:
    'Each service card and treatment page explains what the service covers, who it is for, and what happens next.',
};

export const doctorsHero: HeroData = {
  ...homeHero,
  eyebrow: 'Meet the team',
  title: 'Experienced dentists with a strong patient-education mindset.',
  description:
    'Doctor profiles stay consistent across the site because bios, specialties, and credentials come from project data.',
};

export const blogHero: HeroData = {
  ...homeHero,
  eyebrow: 'Patient education',
  title: 'Helpful articles that answer practical questions before and after visits.',
  description:
    'The blog archive demonstrates how educational content can support local search and appointment confidence.',
};

export const faqHero: HeroData = {
  ...homeHero,
  eyebrow: 'Frequently asked questions',
  title: 'Common questions answered with one reusable, structured content source.',
  description:
    'The FAQ layout stays generic while project data controls the wording, categories, and treatment relationships.',
};

export const contactHero: HeroData = {
  ...homeHero,
  eyebrow: 'Contact and visit details',
  title: 'Confirm timing, directions, and booking preferences before you arrive.',
  description:
    'This route keeps phone, WhatsApp, hours, and visit logistics in a single data-backed page composition.',
};
