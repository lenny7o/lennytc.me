import Container from '@/components/layout/Container'
import { useTranslations } from 'next-intl'

export default function LawSection() {
  const t = useTranslations('Pages.Legal.Law')

  return (
    <section className="flex items-center mt-15">
      <Container size="md">
        <h2 className="text-2xl font-semibold">{t('title')}</h2>
        <p className="text-text-muted text-lg mt-4">{t('text')}</p>
      </Container>
    </section>
  )
}
