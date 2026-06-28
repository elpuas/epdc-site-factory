import type { Doctor } from './types';

export const doctors: Doctor[] = [
  {
    slug: 'doctor-one',
    name: 'Doctor Profile Placeholder',
    role: 'Lead dentist role',
    specialties: ['Preventive care', 'Restorative planning'],
    credentials: ['Credential placeholder', 'Association placeholder'],
    bioShort: 'Short profile text for summary cards and trust blocks.',
    bioLong:
      'This longer profile demonstrates where a future project can inject clinician experience, treatment focus, and professional philosophy without changing the layout.',
    image: {
      src: '../assets/placeholder-doctor.svg',
      alt: 'Placeholder doctor portrait',
    },
  },
  {
    slug: 'doctor-two',
    name: 'Specialist Placeholder',
    role: 'Specialty support role',
    specialties: ['Aesthetic planning', 'Patient education'],
    credentials: ['Credential placeholder'],
    bioShort: 'Secondary profile text for reusable team grids.',
    bioLong:
      'This profile validates a second card state so the Blueprint works for solo clinics or larger teams.',
    image: {
      src: '../assets/placeholder-doctor.svg',
      alt: 'Placeholder specialist portrait',
    },
  },
];
