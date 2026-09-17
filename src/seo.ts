export interface SeoMetadata {
  title: string;
  description: string;
}

export const SEO_DATA: Record<string, SeoMetadata> = {
  '/': {
    title: 'WASL | Digital Experiences for Local Businesses',
    description:
      'WASL helps local businesses build practical digital experiences, from websites and landing pages to QR, NFC, and Google Business Profile solutions.',
  },
  '/services': {
    title: 'Services | WASL',
    description:
      'Explore WASL services for local businesses, including websites, landing pages, QR and NFC solutions, and Google Business Profile support.',
  },
  '/work': {
    title: 'Our Work | WASL',
    description:
      'Explore WASL projects, website concepts, and client work built for restaurants, cafés, barbershops, and other local businesses.',
  },
  '/about': {
    title: 'About WASL | Local Business Digital Solutions',
    description:
      'Learn about WASL, a Jordanian digital business helping local businesses improve their websites, digital touchpoints, and online presence.',
  },
  '/contact': {
    title: 'Contact WASL | Get in Touch',
    description:
      'Contact WASL in Amman, Jordan about websites, digital touchpoints, QR and NFC solutions, and other services for local businesses.',
  },
  '/contact/kenan': {
    title: 'Kenan Al Aqrabawi | WASL',
    description: 'Contact Kenan Al Aqrabawi, Co-Founder & CTO of WASL.',
  },
  '/contact/mamduh': {
    title: 'Mamdouh Al Khaldi | WASL',
    description: 'Contact Mamdouh Al Khaldi, Co-Founder & CMO of WASL.',
  },
  '/demos/cafe': {
    title: 'Café Website Demo | WASL',
    description:
      'A WASL café website concept demonstrating digital menus, visual presentation, reservations, and customer touchpoints.',
  },
  '/demos/restaurant': {
    title: 'Restaurant Website Demo | WASL',
    description:
      'A WASL restaurant website concept demonstrating digital menus, food presentation, ordering, and customer touchpoints.',
  },
  '/demos/barbershop': {
    title: 'Barbershop Website Demo | WASL',
    description:
      'A WASL barbershop website concept demonstrating service presentation, stylist profiles, appointments, and customer touchpoints.',
  },
};

export const NOT_FOUND_SEO: SeoMetadata = {
  title: 'Page Not Found | WASL',
  description: 'The requested WASL page could not be found.',
};

const CANONICAL_BASE = 'https://wasljo.com';

export function getCanonicalUrl(path: string): string {
  if (path === '/') {
    return `${CANONICAL_BASE}/`;
  }
  const cleanPath = path.split(/[?#]/)[0].replace(/\/+$/, '');
  if (!cleanPath) {
    return `${CANONICAL_BASE}/`;
  }
  return `${CANONICAL_BASE}${cleanPath.startsWith('/') ? cleanPath : `/${cleanPath}`}`;
}

export function setMetaTag(attr: 'name' | 'property', key: string, content: string): void {
  if (typeof document === 'undefined') return;
  let element = document.head.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null;
  if (element) {
    element.setAttribute('content', content);
  } else {
    element = document.createElement('meta');
    element.setAttribute(attr, key);
    element.setAttribute('content', content);
    document.head.appendChild(element);
  }
}

export function setCanonical(url: string | null): void {
  if (typeof document === 'undefined') return;
  let element = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (url) {
    if (element) {
      element.setAttribute('href', url);
    } else {
      element = document.createElement('link');
      element.setAttribute('rel', 'canonical');
      element.setAttribute('href', url);
      document.head.appendChild(element);
    }
  } else if (element) {
    element.remove();
  }
}

export function updateSeo(path: string): void {
  if (typeof document === 'undefined') return;

  const normalizedPath =
    path.length > 1 && path.endsWith('/') ? path.slice(0, -1) : path || '/';

  const seo = SEO_DATA[normalizedPath];

  if (seo) {
    // Known route
    document.title = seo.title;
    setMetaTag('name', 'description', seo.description);
    setMetaTag('name', 'robots', 'index,follow');

    const canonicalUrl = getCanonicalUrl(normalizedPath);
    setCanonical(canonicalUrl);

    // Open Graph
    setMetaTag('property', 'og:type', 'website');
    setMetaTag('property', 'og:site_name', 'WASL | وصل');
    setMetaTag('property', 'og:title', seo.title);
    setMetaTag('property', 'og:description', seo.description);
    setMetaTag('property', 'og:url', canonicalUrl);

    // Twitter Card
    setMetaTag('name', 'twitter:card', 'summary');
    setMetaTag('name', 'twitter:title', seo.title);
    setMetaTag('name', 'twitter:description', seo.description);
  } else {
    // 404 / Default route
    document.title = NOT_FOUND_SEO.title;
    setMetaTag('name', 'description', NOT_FOUND_SEO.description);
    setMetaTag('name', 'robots', 'noindex,follow');

    // Omit canonical on 404
    setCanonical(null);

    // Open Graph for 404
    setMetaTag('property', 'og:type', 'website');
    setMetaTag('property', 'og:site_name', 'WASL | وصل');
    setMetaTag('property', 'og:title', NOT_FOUND_SEO.title);
    setMetaTag('property', 'og:description', NOT_FOUND_SEO.description);
    
    // Remove og:url on 404
    const ogUrl = document.head.querySelector('meta[property="og:url"]');
    if (ogUrl) {
      ogUrl.remove();
    }

    // Twitter Card
    setMetaTag('name', 'twitter:card', 'summary');
    setMetaTag('name', 'twitter:title', NOT_FOUND_SEO.title);
    setMetaTag('name', 'twitter:description', NOT_FOUND_SEO.description);
  }
}
