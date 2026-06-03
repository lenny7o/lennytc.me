import Container from '@/components/layout/Container'
import Timeline from './Timeline'
import { useTranslations } from 'next-intl'

export default function JourneySection() {
  const t = useTranslations('Pages.About.Journey')

  return (
    <section
      id="journey"
      className="flex items-center bg-primary dark:bg-bg h-min py-20 sm:py-40"
    >
      <Container size="md">
        <h2 className="text-4xl text-text-inverse dark:text-text font-semibold text-center">
          {t('title')}
        </h2>
        <Timeline />
      </Container>
    </section>
  )
}
