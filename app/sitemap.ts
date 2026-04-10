import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://nakshatranamahacreations.com';
  const lastModified = new Date();

  const pages = [
    '',
    'mobile-app-development-company-in-mysore',
    'app-development-company-mysore',
    'android-app-development-company-in-mysore',
    'ios-app-development-company-in-mysore',
    'flutter-app-development-company-in-mysore',
    'react-native-app-development-company-in-mysore',
    'crm-software-development-company-in-mysore',
    'custom-crm-development-mysore',
    'crm-development-company-in-mysore',
    'sales-crm-software-mysore',
  ];

  return pages.map((page) => ({
    url: page ? `${baseUrl}/${page}` : baseUrl,
    lastModified,
    changeFrequency: 'weekly' as const,
    priority: page === '' ? 1.0 : 0.9,
  }));
}
