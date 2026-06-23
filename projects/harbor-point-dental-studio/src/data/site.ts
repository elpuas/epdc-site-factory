export type NavItem = {
  href: string;
  label: string;
};

export type ServiceSummary = {
  name: string;
  description: string;
};

export const site = {
  name: "Harbor Point Dental Studio",
  shortName: "Harbor Point Dental",
  tagline: "Family and cosmetic dental care designed to feel calm, modern, and welcoming.",
  description:
    "Harbor Point Dental Studio helps East Bay families and working professionals access preventive, restorative, and cosmetic dental care with a reassuring patient experience.",
  primaryCta: {
    label: "Request an appointment",
    href: "/contact",
  },
  phone: "TODO: Add the local practice phone number from the client intake.",
  address: "TODO: Add the full street address from the client intake.",
  officeHours: "TODO: Add weekday and weekend office hours from the client intake.",
  parkingNotes: "TODO: Add patient parking guidance from the client intake.",
  insuranceNote:
    "The specification confirms accepted PPO insurance information should appear for new patients, but the specific networks are not provided yet.",
  serviceAreas: ["Alameda", "Oakland", "San Leandro"],
  leadDentist: {
    name: "TODO: Confirm the lead dentist name.",
    education: "TODO: Add dental school and continuing education details.",
    experience: "TODO: Add years of experience.",
    philosophy:
      "Harbor Point Dental Studio emphasizes warm, reassuring care for first-time and anxious patients while keeping treatment recommendations clear and practical.",
  },
  teamHighlights: [
    "Friendly front-desk support focused on a smooth first visit.",
    "A clean, modern office environment that supports patient comfort.",
    "A care approach centered on preventive, restorative, and cosmetic dental needs.",
  ],
  testimonialThemes: [
    "Gentle care",
    "Clean environment",
    "Punctual appointments",
  ],
  services: [
    {
      name: "Preventive dentistry",
      description: "Routine exams, hygiene support, and early-care planning for long-term oral health.",
    },
    {
      name: "Restorative dentistry",
      description: "Treatment planning focused on function, comfort, and confident day-to-day care.",
    },
    {
      name: "Cosmetic dentistry",
      description: "Appearance-focused options such as whitening consultations and smile-improvement planning.",
    },
    {
      name: "Emergency care",
      description: "Urgent dental support when patients need timely guidance and an immediate next step.",
    },
  ] satisfies ServiceSummary[],
  navigation: [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
  ] satisfies NavItem[],
  metadata: {
    home: {
      title: "Harbor Point Dental Studio | Family Dentist and Cosmetic Dentistry in Alameda",
      description:
        "Explore family, preventive, restorative, and cosmetic dental care from Harbor Point Dental Studio with a modern, welcoming experience for East Bay patients.",
    },
    about: {
      title: "About Harbor Point Dental Studio | Warm, Modern Dental Care for East Bay Patients",
      description:
        "Learn about Harbor Point Dental Studio's patient-first philosophy, modern practice environment, and commitment to reassuring care for families and working professionals.",
    },
    services: {
      title: "Dental Services | Preventive, Restorative, Cosmetic, and Emergency Care",
      description:
        "Review Harbor Point Dental Studio's preventive, restorative, cosmetic, and emergency dental services for patients in Alameda, Oakland, and San Leandro.",
    },
    contact: {
      title: "Contact Harbor Point Dental Studio | Book a Dental Appointment in the East Bay",
      description:
        "Contact Harbor Point Dental Studio to request an appointment, review office information, and plan your visit from Alameda, Oakland, or San Leandro.",
    },
  },
} as const;
