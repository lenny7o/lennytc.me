import HeroSection from './_components/HeroSection'
import ProjectsSection from './_components/ProjectsSection'
import AboutSection from './_components/AboutSection'
import { GenerateMetadataProps } from '@/types/generateMetadataProps'
import { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import ContactSection from '@/components/layout/ContactSection'
import { baseUrl } from '@/config'

export async function generateMetadata({
  params,
}: Readonly<GenerateMetadataProps>): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({
    locale,
    namespace: 'Pages.HomePage.Metadata',
  })

  return {
    title: t('title'),
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

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProjectsSection />
      <AboutSection />
      <ContactSection />
    </>
  )
}
