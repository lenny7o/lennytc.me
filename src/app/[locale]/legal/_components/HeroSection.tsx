import Container from '@/components/layout/Container'
import { baseUrl } from '@/config'
import { Link } from '@/i18n/navigation'
import { useTranslations } from 'next-intl'

export default function HeroSection() {
  const t = useTranslations('Pages.Legal.Hero')

  return (
    <section className="flex items-center mt-60">
      <Container size="md">
        <h1 className="text-4xl sm:text-6xl font-semibold mt-4 text-center">
          {t('title')}
        </h1>
        <p className="text-text-muted text-lg mt-15">
          {t.rich('text', {
            url: baseUrl,
            link: (chunks) => (
              <Link href={baseUrl} target="_blank" rel="noopener noreferrer">
                {chunks}
              </Link>
            ),
          })}
        </p>
      </Container>
    </section>
  )
}
