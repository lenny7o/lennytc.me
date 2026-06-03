import Container from '@/components/layout/Container'
import { baseUrl } from '@/config'
import { Link } from '@/i18n/navigation'
import { useTranslations } from 'next-intl'

export default function InfosSection() {
  const t = useTranslations('Pages.Legal.Infos')

  return (
    <section className="flex items-center mt-25">
      <Container size="md">
        <h2 className="text-2xl font-semibold">{t('title')}</h2>

        <p className="text-text-muted text-lg mt-4">
          {t.rich('text', {
            url: baseUrl,
            link: (chunks) => (
              <Link href={baseUrl} target="_blank" rel="noopener noreferrer">
                {chunks}
              </Link>
            ),
            br: () => <br />,
          })}
        </p>
      </Container>
    </section>
  )
}
