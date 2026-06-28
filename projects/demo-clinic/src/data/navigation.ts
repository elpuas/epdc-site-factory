import type { NavigationData } from '../../blueprints/dentist/types';

export const navigation: NavigationData = {
  primary: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Doctors', href: '/doctors' },
    { label: 'Blog', href: '/blog' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Contact', href: '/contact' },
  ],
  footer: [
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Contact', href: '/contact' },
    { label: 'FAQ', href: '/faq' },
  ],
};
