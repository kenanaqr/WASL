/**
 * Centralized Site Configuration & Data for WASL | وصل
 *
 * NOTE: Contact details below are clearly marked placeholder values.
 * Replace with official business information once provided.
 */

export interface NavItem {
  label: string;
  arabicLabel?: string;
  path: string;
}

export interface DemoItem {
  id: string;
  name: string;
  arabicName: string;
  description: string;
  path: string;
}

export interface Founder {
  name: string;
  arabicName?: string;
  role: string;
  path: string;
}

export interface SiteConfig {
  companyName: string;
  arabicName: string;
  tagline: string;
  description: string;
  contact: {
    phone: string;
    whatsapp: string;
    email: string;
    instagram: string;
    location: string;
    website: string;
  };
  founders: Founder[];
  navLinks: NavItem[];
  demoLinks: DemoItem[];
}

export const siteConfig: SiteConfig = {
  companyName: 'WASL',
  arabicName: 'وصل',
  tagline: 'Bringing businesses closer to their customers.',
  description:
    'WASL helps local businesses in Jordan establish a stronger digital presence—from Google profiles and NFC touchpoints to custom websites and practical digital experiences.',
  contact: {
    phone: '+962 79 772 0319',
    whatsapp: '+962 79 772 0319',
    email: 'hello@wasljo.com',
    instagram: 'https://www.instagram.com/wasljo/',
    location: 'Amman, Jordan',
    // Centralized temporary website URL (do not use www.wasljo.com until connected)
    website: 'https://wasl.kenanaqr.workers.dev/',
  },
  founders: [
    {
      name: 'Kenan Al Aqrabawi',
      arabicName: 'كنان العقرباوي',
      role: 'Co-Founder & CTO',
      path: '/contact/kenan',
    },
    {
      name: 'Mamdouh Al Khaldi',
      arabicName: 'ممدوح الخالدي',
      role: 'Co-Founder & CMO',
      path: '/contact/mamduh',
    },
  ],
  navLinks: [
    { label: 'Home', arabicLabel: 'الرئيسية', path: '/' },
    { label: 'Services', arabicLabel: 'خدماتنا', path: '/services' },
    { label: 'Work', arabicLabel: 'أعمالنا', path: '/work' },
    { label: 'About', arabicLabel: 'من نحن', path: '/about' },
    { label: 'Contact', arabicLabel: 'تواصل معنا', path: '/contact' },
  ],
  demoLinks: [
    {
      id: 'cafe',
      name: 'Café',
      arabicName: 'مقهى',
      description: 'Digital menu, ambiance showcase, and table reservations for coffee shops.',
      path: '/demos/cafe',
    },
    {
      id: 'restaurant',
      name: 'Restaurant',
      arabicName: 'مطعم',
      description: 'Culinary showcase, online ordering demo, and dining bookings.',
      path: '/demos/restaurant',
    },
    {
      id: 'barbershop',
      name: 'Barbershop',
      arabicName: 'صالون حلاقة',
      description: 'Grooming service menus, stylist profiles, and appointment scheduling.',
      path: '/demos/barbershop',
    },
  ],
};
