import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { hasLocale, NextIntlClientProvider } from 'next-intl'
import { notFound } from 'next/navigation'
import { getTranslations } from 'next-intl/server'
import { routing } from '@/i18n/routing'
import { GenerateMetadataProps } from '@/types/generateMetadataProps'
import SmoothScroll from '@/components/layout/SmoothScroll'
import Header from '@/components/layout/Navigation/Header'
import Footer from '@/components/layout/Footer'
import SkipLink from '@/components/ui/SkipLink'
import '@/styles/index.css'
import { baseUrl } from '@/config'

type LayoutProps = {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['400', '500', '600'],
})

export async function generateMetadata({
  params,
}: Readonly<GenerateMetadataProps>): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({
    locale,
    namespace: 'DefaultMetadata',
  })

  return {
    title: {
      template: '%s | Lenny TESTU--CHARPENTIER',
      default: t('title'),
    },
    description: t('description'),
    alternates: {
      canonical: `${baseUrl}/${locale}`,
      languages: {
        fr: `${baseUrl}/fr`,
        en: `${baseUrl}/en`,
        'x-default': `${baseUrl}/en`,
      },
    },
  }
}

export default async function RootLayout({
  children,
  params,
}: Readonly<LayoutProps>) {
  const { locale } = await params

  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }

  return (
    <html lang={locale}>
      <body className={`${inter.variable} antialiased`}>
        <NextIntlClientProvider>
          <SmoothScroll>
            <SkipLink href="#content" />
            <div id="root">
              <Header />
              <main id="content">{children}</main>
              <Footer />
            </div>
          </SmoothScroll>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
