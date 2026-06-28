import type { FAQItem, FAQSectionData } from '../../../../blueprints/dentist/types';

export const faqItems: FAQItem[] = [
  {
    id: 'faq-new-patient',
    question: 'What should a new patient bring to the first evaluation?',
    answer:
      'Bring a list of current medications, any recent dental images if you have them, and a short summary of the concern you want reviewed first.',
    category: 'Appointments',
  },
  {
    id: 'faq-visit-length',
    question: 'How long does a standard visit usually take?',
    answer:
      'Most evaluations and cleanings fit within 45 to 60 minutes, while restorative and cosmetic appointments vary by procedure complexity.',
    category: 'Appointments',
  },
  {
    id: 'faq-whatsapp-booking',
    question: 'Can I schedule on WhatsApp instead of calling?',
    answer:
      'Yes. The clinic uses WhatsApp for quick scheduling questions, reminders, and basic pre-visit coordination.',
    category: 'Contact',
  },
  {
    id: 'faq-whitening-duration',
    question: 'How long do whitening results usually last?',
    answer:
      'Results vary by diet and maintenance habits, but the clinic explains touch-up timing and sensitivity expectations before treatment starts.',
    category: 'Cosmetic',
  },
  {
    id: 'faq-treatment-pricing',
    question: 'Do treatment plans include a written estimate?',
    answer:
      'Yes. Patients receive a clear estimate with staged options whenever a case may need multiple appointments or restorative phases.',
    category: 'Restorative',
  },
  {
    id: 'faq-aligners',
    question: 'How do aligner consultations begin?',
    answer:
      'The first visit focuses on candidacy, digital planning needs, timeline expectations, and whether aligners fit the patient’s goals and routine.',
    category: 'Orthodontics',
  },
];

export const faqPage: FAQSectionData = {
  eyebrow: 'FAQ',
  title: 'Questions patients often ask before booking.',
  items: faqItems,
};

export const servicesFaq: FAQSectionData = {
  eyebrow: 'Common service questions',
  title: 'Answers that support treatment comparison and planning.',
  items: faqItems.filter((item) => ['Cosmetic', 'Restorative', 'Orthodontics'].includes(item.category)),
};

export function createTreatmentFaq(relatedFaqIds: string[]): FAQSectionData {
  return {
    eyebrow: 'Treatment questions',
    title: 'Questions related to this treatment',
    items: faqItems.filter((item) => relatedFaqIds.includes(item.id)),
  };
}
