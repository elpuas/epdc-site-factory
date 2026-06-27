import { site } from './site';
import type { HeroData } from './types';

export const homeHero: HeroData = {
  eyebrow: 'Costa Rica dental website blueprint',
  title: 'A reusable dental foundation built for trust, services, and appointments',
  description:
    'This placeholder hero validates how a future dental project can present core services, credibility, and appointment actions without embedding clinic-specific content.',
  image: {
    src: '../assets/placeholder-hero.svg',
    alt: 'Abstract dental hero placeholder illustration',
  },
  primaryCta: site.primaryCta,
  secondaryCta: site.secondaryCta,
  trustHighlights: ['Static-first structure', 'Typed data inputs', 'Accessible section hierarchy'],
};
