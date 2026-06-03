import Container from '@/components/layout/Container'
import { baseUrl } from '@/config'
import { Link } from '@/i18n/navigation'
import { useTranslations } from 'next-intl'

export default function PropertySection() {
  const t = useTranslations('Pages.Legal.Property')

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
          })}
        </p>

        <h3 className="text-xl font-medium mt-10">{t('resourcesTitle')}</h3>
        <p className="text-text-muted text-lg mt-4">{t('resourcesIntro')}</p>

        <div className="space-y-5 mt-7">
          <div className="p-4 border border-border rounded-xl">
            <h4 className="font-semibold text-lg">{t('mitIcons.title')}</h4>
            <p className="text-text-muted mt-4">
              {t.rich('mitIcons.text', {
                br: () => <br />,
                italic: (chunks) => <span className="italic">{chunks}</span>,
              })}
            </p>
          </div>

          <div className="p-4 border border-border rounded-xl">
            <h4 className="font-semibold text-lg">{t('lucideIcons.title')}</h4>
            <p className="text-text-muted mt-4">
              {t.rich('lucideIcons.text', {
                br: () => <br />,
              })}
            </p>
          </div>

          <div className="p-4 border border-border rounded-xl">
            <h4 className="font-semibold text-lg">{t('brands.title')}</h4>
            <p className="text-text-muted mt-4">{t('brands.text')}</p>
          </div>
        </div>
      </Container>
    </section>
  )
}
