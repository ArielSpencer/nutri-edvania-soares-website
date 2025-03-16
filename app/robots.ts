import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/showcase',
    },
    sitemap: 'https://nutritionist-edvania.com/sitemap.xml',
  };
}