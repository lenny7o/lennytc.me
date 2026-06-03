import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/*.json$',
          '/*.log$',
          '/*.env$',
          '/*.config.js$',
          '/*.map$',
        ],
      },
      {
        userAgent: ['AhrefsBot', 'SemrushBot', 'MJ12bot'],
        disallow: '/',
      },
    ],
    sitemap: 'https://lennytc.me/sitemap.xml',
  }
}
