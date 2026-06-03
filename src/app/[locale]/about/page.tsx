import { GenerateMetadataProps } from '@/types/generateMetadataProps'
import HeroSection from './_components/HeroSection'
import { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import PathSection from './_components/JourneySection'
import ContactSection from '@/components/layout/ContactSection'
import { baseUrl } from '@/config'
import SkillsSection from './_components/SkillsSection'
import PassionsSection from './_components/PassionsSection'

export async function generateMetadata({
  params,
}: Readonly<GenerateMetadataProps>): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({
    locale,
    namespace: 'Pages.About.Metadata',
  })

  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: `${baseUrl}/${locale}/about`,
      languages: {
        fr: `${baseUrl}/fr/about`,
        en: `${baseUrl}/en/about`,
        'x-default': `${baseUrl}/en/about`,
      },
    },
  }
}

export default function AboutPage() {
  return (
    <>
      <HeroSection />
      <PathSection />
      <SkillsSection />
      <PassionsSection />
      <ContactSection />
    </>
  )
}
