import type { PrivacyPolicyData } from '../../../../blueprints/dentist/types';

export const privacyPolicy: PrivacyPolicyData = {
  eyebrow: 'Privacy policy',
  title: 'How the fictional demo clinic would handle patient inquiry information.',
  intro:
    'This placeholder policy exists only to validate that legal copy can remain fully project-owned while the Blueprint stays presentation-only.',
  sections: [
    {
      heading: 'Inquiry details',
      body: [
        'Contact details shared through phone, WhatsApp, or a website form would be used to respond to appointment requests and treatment questions.',
      ],
    },
    {
      heading: 'Appointment coordination',
      body: [
        'If a patient chooses to move forward, the clinic would use the provided contact information to confirm timing, reminders, and follow-up instructions.',
      ],
    },
    {
      heading: 'Questions about data use',
      body: [
        'A production project would replace this placeholder with the legal contact path approved for the real clinic.',
      ],
    },
  ],
};
