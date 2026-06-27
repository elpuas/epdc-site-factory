import type { AppointmentCtaData, ContactSectionData } from './types';
import { site } from './site';

export const appointmentCta: AppointmentCtaData = {
  title: 'Make the next step obvious and repeatable',
  description:
    'This CTA block is intentionally generic so future generated sites can switch messaging without rewriting component logic.',
  primaryCta: site.primaryCta,
  secondaryCta: site.secondaryCta,
  phoneNote: 'Phone availability and booking expectations can be supplied by project data later.',
};

export const contactSection: ContactSectionData = {
  title: 'Contact pathways placeholder',
  description:
    'The Blueprint reserves space for phone, WhatsApp, email, contact-form messaging, and visit logistics without embedding final business details.',
  appointmentNote: 'Form handling and confirmation copy should be supplied by future project configuration.',
  formDisclaimer: 'Placeholder note: legal and form-specific language should come from generated content.',
};
