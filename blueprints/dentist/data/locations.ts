import type { Location } from './types';

export const locations: Location[] = [
  {
    slug: 'central-clinic',
    label: 'Central location placeholder',
    addressLine1: 'Avenida central placeholder',
    district: 'Central district',
    city: 'San Jose',
    province: 'San Jose',
    country: 'Costa Rica',
    phone: '+506 4000 0000',
    whatsapp: '+506 8888 0000',
    hours: [
      { days: 'Monday to Friday', open: '08:00', close: '18:00' },
      { days: 'Saturday', open: '08:00', close: '13:00' },
    ],
    mapLabel: 'Map placeholder for the main location',
    parkingNotes: 'Arrival and parking guidance placeholder.',
  },
  {
    slug: 'west-clinic',
    label: 'West side location placeholder',
    addressLine1: 'Boulevard placeholder',
    district: 'West district',
    city: 'Escazu',
    province: 'San Jose',
    country: 'Costa Rica',
    phone: '+506 4000 1111',
    whatsapp: '+506 8888 1111',
    hours: [{ days: 'Monday to Friday', open: '09:00', close: '17:00' }],
    mapLabel: 'Map placeholder for the secondary location',
    parkingNotes: 'Secondary location access placeholder.',
  },
];
