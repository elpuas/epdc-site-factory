import type { LocationsSectionData } from '../../blueprints/dentist/types';

const locations = [
  {
    slug: 'jardines-del-sol',
    label: 'Jardines del Sol clinic',
    addressLine1: 'Plaza Jardines del Sol, Level 2, Suite 204',
    district: 'Distrito Creativo',
    city: 'San Jose',
    province: 'San Jose',
    country: 'Costa Rica',
    phone: '+506 4050 2200',
    whatsapp: '+506 8700 2200',
    hours: [
      { days: 'Monday to Friday', open: '08:00', close: '18:00' },
      { days: 'Saturday', open: '08:00', close: '13:00' },
    ],
    mapSummary: 'Indoor parking, elevator access, and pharmacy services are available inside the plaza.',
    parkingNotes: 'Use the north parking entrance and validate the ticket at reception.',
  },
  {
    slug: 'bosque-rio',
    label: 'Bosque Rio consult room',
    addressLine1: 'Bosque Rio Medical Center, Floor 1, Office 6',
    district: 'Bosque Rio',
    city: 'Escazu',
    province: 'San Jose',
    country: 'Costa Rica',
    phone: '+506 4050 2215',
    whatsapp: '+506 8700 2215',
    hours: [
      { days: 'Tuesday and Thursday', open: '09:00', close: '17:00' },
    ],
    mapSummary: 'This smaller consult room is used for evaluations and follow-up reviews only.',
    parkingNotes: 'Visitor parking is available in the basement level.',
  },
];

const baseLocationSection = {
  eyebrow: 'Locations',
  phoneLabel: 'Phone',
  whatsappLabel: 'WhatsApp',
  hoursLabel: 'Hours',
  parkingLabel: 'Parking',
  locations,
};

export const homeLocations: LocationsSectionData = {
  ...baseLocationSection,
  title: 'Visit information for both appointment locations.',
};

export const contactLocations: LocationsSectionData = {
  ...baseLocationSection,
  title: 'Plan your arrival before the appointment.',
};
