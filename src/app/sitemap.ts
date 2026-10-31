import type { MetadataRoute } from 'next';
import { tools } from '@/lib/tools';

const BASE_URL = 'https://ai-toolshub.vercel.app';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: BASE_URL, lastModified: now, changeFrequency: 'daily', priority: 1 },
    ...tools.map((t) => ({
      url: `${BASE_URL}/tools/${t.id}`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: t.featured ? 0.8 : 0.6,
    })),
    { url: `${BASE_URL}/submit`, lastModified: now, changeFrequency: 'monthly', priority: 0.4 },
  ];
}