import type { AppointmentCtaData, ContactSectionData, SiteData } from '../../blueprints/dentist/types';

export const site: SiteData = {
  brandName: 'Sunline Dental Studio',
  legalName: 'Sunline Dental Studio S.R.L.',
  tagline: 'Calm, modern dental care for families and working professionals.',
  phone: '+506 4050 2200',
  whatsappNumber: '50687002200',
  whatsappHref: 'https://wa.me/50687002200?text=Hola%2C%20quiero%20agendar%20una%20valoracion%20en%20Sunline%20Dental%20Studio.',
  whatsappDefaultMessage: 'Hola, quiero agendar una valoracion en Sunline Dental Studio.',
  email: 'hello@sunlinedentaldemo.com',
  primaryCity: 'San Jose',
  country: 'Costa Rica',
  addressSummary: 'Plaza Jardines del Sol, Nivel 2, San Jose, Costa Rica',
  primaryCta: {
    label: 'Book an evaluation',
    href: '/contact',
  },
  secondaryCta: {
    label: 'Chat on WhatsApp',
    href: 'https://wa.me/50687002200?text=Hola%2C%20quiero%20agendar%20una%20valoracion%20en%20Sunline%20Dental%20Studio.',
  },
  socialLinks: [
    { label: 'Instagram', href: 'https://example.com/sunline-instagram' },
    { label: 'Facebook', href: 'https://example.com/sunline-facebook' },
  ],
  accessibility: {
    skipLinkLabel: 'Skip to main content',
    whatsappFloatingLabel: 'Open a WhatsApp conversation with Sunline Dental Studio',
  },
};

export const appointmentCta: AppointmentCtaData = {
  eyebrow: 'Appointments',
  title: 'Choose the contact path that feels easiest for you.',
  description:
    'Sunline Dental Studio keeps booking simple with phone, WhatsApp, and in-person scheduling support for first visits and follow-up care.',
  primaryCta: site.primaryCta,
  secondaryCta: site.secondaryCta,
  phoneNote: 'Phone support is available Monday to Saturday during regular clinic hours.',
};

export const contactSection: ContactSectionData = {
  eyebrow: 'Contact',
  title: 'Reach the clinic before you visit.',
  description:
    'Patients can confirm availability, ask about treatment timing, or request parking guidance before their appointment.',
  methods: [
    {
      title: 'Phone',
      value: site.phone,
      href: `tel:${site.phone}`,
    },
    {
      title: 'WhatsApp',
      value: '+506 8700 2200',
      href: site.whatsappHref,
    },
    {
      title: 'Email',
      value: site.email,
      href: `mailto:${site.email}`,
    },
  ],
  appointmentCardTitle: 'Visit note',
  appointmentNote:
    'New patients should bring a medication list, prior X-rays if available, and any questions they want reviewed during the evaluation.',
  formDisclaimer:
    'This demo project validates content flow only. A real generated site would connect the form to a configured delivery method.',
};
