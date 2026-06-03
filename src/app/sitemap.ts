import type { MetadataRoute } from 'next'
import { baseUrl } from '@/config'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${baseUrl}/fr`,
      alternates: {
        languages: {
          fr: `${baseUrl}/fr`,
          en: `${baseUrl}/en`,
          'x-default': `${baseUrl}/en`,
        },
      },
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: `${baseUrl}/en`,
      alternates: {
        languages: {
          fr: `${baseUrl}/fr`,
          en: `${baseUrl}/en`,
          'x-default': `${baseUrl}/en`,
        },
      },
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: `${baseUrl}/fr/about`,
      alternates: {
        languages: {
          fr: `${baseUrl}/fr/about`,
          en: `${baseUrl}/en/about`,
          'x-default': `${baseUrl}/en/about`,
        },
      },
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/en/about`,
      alternates: {
        languages: {
          fr: `${baseUrl}/fr/about`,
          en: `${baseUrl}/en/about`,
          'x-default': `${baseUrl}/en/about`,
        },
      },
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/fr/projects`,
      alternates: {
        languages: {
          fr: `${baseUrl}/fr/projects`,
          en: `${baseUrl}/en/projects`,
          'x-default': `${baseUrl}/en/projects`,
        },
      },
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/en/projects`,
      alternates: {
        languages: {
          fr: `${baseUrl}/fr/projects`,
          en: `${baseUrl}/en/projects`,
          'x-default': `${baseUrl}/en/projects`,
        },
      },
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/fr/blog`,
      alternates: {
        languages: {
          fr: `${baseUrl}/fr/blog`,
          en: `${baseUrl}/en/blog`,
          'x-default': `${baseUrl}/en/blog`,
        },
      },
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/en/blog`,
      alternates: {
        languages: {
          fr: `${baseUrl}/fr/blog`,
          en: `${baseUrl}/en/blog`,
          'x-default': `${baseUrl}/en/blog`,
        },
      },
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/fr/legal`,
      alternates: {
        languages: {
          fr: `${baseUrl}/fr/legal`,
          en: `${baseUrl}/en/legal`,
          'x-default': `${baseUrl}/en/legal`,
        },
      },
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/en/legal`,
      alternates: {
        languages: {
          fr: `${baseUrl}/fr/legal`,
          en: `${baseUrl}/en/legal`,
          'x-default': `${baseUrl}/en/legal`,
        },
      },
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]
}
