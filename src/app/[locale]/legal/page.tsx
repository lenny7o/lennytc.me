import HeroSection from './_components/HeroSection'
import InfosSection from './_components/InfosSection'
import EditorSection from './_components/EditorSection'
import HostSection from './_components/HostSection'
import DataSection from './_components/DataSection'
import CookiesSection from './_components/CookiesSection'
import PropertySection from './_components/PropertySection'
import LawSection from './_components/LawSection'
import ResponsibilitySection from './_components/ResponsibilitySection'
import { GenerateMetadataProps } from '@/types/generateMetadataProps'
import { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { baseUrl } from '@/config'

export async function generateMetadata({
  params,
}: Readonly<GenerateMetadataProps>): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({
    locale,
    namespace: 'Pages.Legal.Metadata',
  })

  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: `${baseUrl}/${locale}/legal`,
      languages: {
        fr: `${baseUrl}/fr/legal`,
        en: `${baseUrl}/en/legal`,
        'x-default': `${baseUrl}/en/legal`,
      },
    },
  }
}

export default function LegalPage() {
  return (
    <>
      <HeroSection />
      <InfosSection />
      <EditorSection />
      <HostSection />
      <DataSection />
      <CookiesSection />
      <PropertySection />
      <ResponsibilitySection />
      <LawSection />
    </>
  )
}
