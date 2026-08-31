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

export interface SiteConfig {
  companyName: string;
  arabicName: string;
  tagline: string;
  description: string;
  contact: {
    // PLACEHOLDER: Replace with official Jordanian business numbers
    phone: string;
    // PLACEHOLDER: Replace with official WhatsApp link / number
    whatsapp: string;
    // PLACEHOLDER: Replace with official domain email
    email: string;
    // PLACEHOLDER: Replace with official social handles
    instagram: string;
    // Business location
    location: string;
  };
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
    // PLACEHOLDER VALUES: Replace when official details are ready
    phone: '+962 6 000 0000',
    whatsapp: '+962 7 9000 0000',
    email: 'contact@wasl.jo',
    instagram: 'https://instagram.com/wasl_jo',
    location: 'Amman, Jordan',
  },
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
