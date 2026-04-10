interface LocalBusinessSchemaProps {
  name: string;
  description: string;
  url: string;
  image?: string;
}

export function buildLocalBusinessSchema({
  name,
  description,
  url,
  image = 'https://nakshatranamahacreations.com/assets/nnc-office.jpg',
}: LocalBusinessSchemaProps) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${url}#organization`,
    name: 'Nakshatra Namaha Creations Pvt Ltd',
    alternateName: name,
    description,
    url,
    telephone: '+919900566466',
    email: 'info@nakshatranamahacreations.com',
    foundingDate: '2015',
    priceRange: '₹₹₹',
    image,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Suswani Towers, Akkamahadevi Road, JP Nagar 2nd Stage, C-Block',
      addressLocality: 'Mysore',
      addressRegion: 'Karnataka',
      postalCode: '570008',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 12.2958,
      longitude: 76.6394,
    },
    areaServed: [
      { '@type': 'City', name: 'Mysore' },
      { '@type': 'City', name: 'Mysuru' },
      { '@type': 'City', name: 'Mandya' },
      { '@type': 'City', name: 'Hassan' },
      { '@type': 'City', name: 'Bangalore' },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '87',
    },
    sameAs: [
      'https://www.linkedin.com/company/nakshatra-namaha-creations',
      'https://www.facebook.com/nakshatranamahacreations',
      'https://www.instagram.com/nakshatranamahacreations',
    ],
  };
}

interface ServiceSchemaProps {
  serviceType: string;
  description: string;
  offers: string[];
}

export function buildServiceSchema({ serviceType, description, offers }: ServiceSchemaProps) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType,
    name: serviceType,
    provider: {
      '@type': 'Organization',
      name: 'Nakshatra Namaha Creations Pvt Ltd',
    },
    areaServed: { '@type': 'City', name: 'Mysore' },
    description,
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: serviceType,
      itemListElement: offers.map((offer) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: offer },
      })),
    },
  };
}

interface FAQItem {
  question: string;
  answer: string;
}

export function buildFAQSchema(items: FAQItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

export function buildBreadcrumbSchema(pageName: string, pageUrl: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://nakshatranamahacreations.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: pageName,
        item: pageUrl,
      },
    ],
  };
}

// Helper to inject schema into page
export function SchemaMarkup({ schemas }: { schemas: object[] }) {
  return (
    <>
      {schemas.map((schema, idx) => (
        <script
          key={idx}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
