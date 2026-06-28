import type { Doctor, DoctorSectionData } from '../../blueprints/dentist/types';

export const doctors: Doctor[] = [
  {
    slug: 'dr-elena-solis',
    name: 'Dr. Elena Solis',
    role: 'General dentist and clinical director',
    specialties: ['Preventive dentistry', 'Comprehensive treatment planning'],
    credentials: ['DDS, fictional demo profile', 'Continuing education in digital diagnostics'],
    bioShort:
      'Dr. Solis focuses on clear explanations, conservative planning, and steady follow-up for adults and families.',
    bioLong:
      'This fictional profile demonstrates how a generated project can supply long-form doctor content without moving any of it into the Blueprint itself.',
    image: {
      src: '/images/placeholder-doctor.svg',
      alt: 'Placeholder portrait for Dr. Elena Solis',
    },
  },
  {
    slug: 'dr-mateo-vargas',
    name: 'Dr. Mateo Vargas',
    role: 'Restorative and prosthetic care',
    specialties: ['Crowns and bridges', 'Functional bite rehabilitation'],
    credentials: ['DDS, fictional demo profile', 'Advanced restorative planning coursework'],
    bioShort:
      'Dr. Vargas helps patients understand how restorative work supports comfort, appearance, and chewing function.',
    bioLong:
      'The doctor data model supports both short trust-card copy and longer narrative biography content for deeper profile pages later.',
    image: {
      src: '/images/placeholder-doctor.svg',
      alt: 'Placeholder portrait for Dr. Mateo Vargas',
    },
  },
  {
    slug: 'dr-lucia-fonseca',
    name: 'Dr. Lucia Fonseca',
    role: 'Cosmetic and aligner consultations',
    specialties: ['Professional whitening', 'Aligner case evaluation'],
    credentials: ['DDS, fictional demo profile', 'Smile design planning workshops'],
    bioShort:
      'Dr. Fonseca blends cosmetic goals with practical maintenance guidance so patients understand long-term results.',
    bioLong:
      'This third fictional profile validates the Blueprint across multi-doctor teams without introducing any real clinic branding.',
    image: {
      src: '/images/placeholder-doctor.svg',
      alt: 'Placeholder portrait for Dr. Lucia Fonseca',
    },
  },
];

const doctorSectionBase = {
  eyebrow: 'Professional team',
  specialtiesLabel: 'Specialties',
  credentialsLabel: 'Credentials',
};

export const doctorsPreview: DoctorSectionData = {
  ...doctorSectionBase,
  title: 'Meet the clinicians patients will see most often.',
  doctors: doctors.slice(0, 2),
};

export const doctorsPageSection: DoctorSectionData = {
  ...doctorSectionBase,
  title: 'Full doctor directory',
  doctors,
};
