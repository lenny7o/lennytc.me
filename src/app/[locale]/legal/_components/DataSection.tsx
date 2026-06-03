import Container from '@/components/layout/Container'
import { baseUrl, mail } from '@/config'
import { Link } from '@/i18n/navigation'
import { useTranslations } from 'next-intl'

export default function DataSection() {
  const t = useTranslations('Pages.Legal.Data')

  return (
    <section className="flex items-center mt-15">
      <Container size="md">
        <h2 className="text-2xl font-semibold">{t('title')}</h2>

        <p className="text-text-muted text-lg mt-4">
          {t.rich('text', {
            br: () => <br />,
            url: baseUrl,
            link: (chunks) => (
              <Link href={baseUrl} target="_blank" rel="noopener noreferrer">
                {chunks}
              </Link>
            ),
            email: mail,
            mail: (chunks) => <Link href={`mailto:${chunks}`}>{chunks}</Link>,
          })}
        </p>
      </Container>
    </section>
  )
}
