import type { MetadataRoute } from 'next';
import { getBaseUrl } from '../lib/urls/urls';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/'],
    },
    sitemap: `${getBaseUrl()}/sitemap.xml`,
  };
}
