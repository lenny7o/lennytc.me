import { MetadataRoute } from 'next'

export default async function manifest(): Promise<MetadataRoute.Manifest> {
  return {
    name: 'Lenny TESTU--CHARPENTIER',
    short_name: 'LennyTC',
    description:
      'Welcome to the personal website of Lenny TESTU--CHARPENTIER, a young enthusiast of entrepreneurship and technology. Discover his projects, his journey and how to contact him.',
    start_url: '/en',
    display: 'standalone',
    background_color: '#f5f5f5',
    theme_color: '#fafafa',
    icons: [
      {
        src: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
