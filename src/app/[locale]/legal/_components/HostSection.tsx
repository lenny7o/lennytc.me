import Container from '@/components/layout/Container'
import { baseUrl } from '@/config'
import { Link } from '@/i18n/navigation'
import { useTranslations } from 'next-intl'

export default function HostSection() {
  const t = useTranslations('Pages.Legal.Host')

  return (
    <section className="flex items-center mt-15">
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

        <ul className="list-disc list-inside text-text-muted text-lg">
          <li>{t('phone', { number: '+1 (559) 288-7060' })}</li>
          <li>
            {t.rich('website', {
              link: (chunks) => (
                <Link
                  href="https://vercel.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {chunks}
                </Link>
              ),
            })}
          </li>
          <li>
            {t.rich('email', {
              link: (chunks) => <Link href={`mailto:${chunks}`}>{chunks}</Link>,
            })}
          </li>
        </ul>
      </Container>
    </section>
  )
}
