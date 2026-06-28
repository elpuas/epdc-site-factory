import type { FAQItem } from './types';

export const faqs: FAQItem[] = [
  {
    id: 'faq-appointment',
    question: 'How should a dental site present its appointment pathway?',
    answer:
      'The Blueprint expects phone, WhatsApp, and contact-page pathways to remain visible across primary conversion sections.',
    category: 'Appointments',
  },
  {
    id: 'faq-whatsapp',
    question: 'Why is WhatsApp included in the Blueprint?',
    answer:
      'The Sprint 019 dental platform identified WhatsApp as a common Costa Rican contact path, so the Blueprint preserves a reusable slot for it.',
    category: 'Contact',
  },
  {
    id: 'faq-visit-length',
    question: 'Can one service template support many treatments?',
    answer:
      'Yes. The single-service page is intentionally generic and reads treatment details, benefits, process steps, and FAQs from structured data.',
    category: 'Services',
  },
];
