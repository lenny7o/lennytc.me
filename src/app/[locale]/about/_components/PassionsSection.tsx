import Container from '@/components/layout/Container'
import Passion from './Passion'
import { useTranslations } from 'next-intl'

export default function PassionsSection() {
  const t = useTranslations('Pages.About.Passions')

  return (
    <section className="flex items-center mt-40 sm:mt-60">
      <Container size="xl" className="flex flex-col gap-12">
        <h2 className="text-4xl font-semibold text-center">{t('title')}</h2>
        <div className="flex flex-col gap-17 w-full">
          <Passion
            image="/illustrations/passion-engineering.svg"
            title={t('engineeringAndSciences.title')}
            text={t('engineeringAndSciences.text')}
          />
          <Passion
            image="/illustrations/passion-entrepreneurship.svg"
            title={t('entrepreneurship.title')}
            text={t('entrepreneurship.text')}
            className="sm:flex-row-reverse"
          />
          <Passion
            image="/illustrations/passion-personal-development.svg"
            title={t('personalDevelopment.title')}
            text={t('personalDevelopment.text')}
          />
          <Passion
            image="/illustrations/passion-travel.svg"
            title={t('adventureAndTravel.title')}
            text={t('adventureAndTravel.text')}
            className="sm:flex-row-reverse"
          />
        </div>
      </Container>
    </section>
  )
}
