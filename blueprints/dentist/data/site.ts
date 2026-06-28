import type { SiteData } from './types';

export const site: SiteData = {
  brandName: 'Dental Blueprint Costa Rica',
  tagline: 'Reusable architecture for a modern dental website',
  phone: '+506 4000 0000',
  whatsappNumber: '50688880000',
  whatsappHref: 'https://wa.me/50688880000',
  whatsappDefaultMessage: 'Hola, quiero recibir informacion sobre una cita dental.',
  email: 'hello@example.com',
  primaryCity: 'San Jose',
  country: 'Costa Rica',
  addressSummary: 'Central district placeholder, San Jose, Costa Rica',
  primaryCta: {
    label: 'Schedule an appointment',
    href: '/contact',
  },
  secondaryCta: {
    label: 'Chat on WhatsApp',
    href: 'https://wa.me/50688880000',
  },
  socialLinks: [
    { label: 'Instagram', href: '#' },
    { label: 'Facebook', href: '#' },
  ],
  meta: {
    title: 'Dental Blueprint Costa Rica',
    description: 'Reusable Astro blueprint for a Costa Rican dental website.',
    lang: 'en',
  },
};
