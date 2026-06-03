import Container from '@/components/layout/Container'
import Button from '@/components/ui/Button'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import { mail } from '@/config'

export default function ContactSection() {
  const t = useTranslations('Layout.Contact')

  return (
    <section id="contact" className="flex items-center mt-40 sm:mt-60">
      <Container size="md">
        <div className="text-center">
          <h2 className="text-4xl font-semibold">{t('title')}</h2>
          <p className="text-lg text-text-muted mt-7">{t('text')}</p>
          <Link href={`mailto:${mail}`}>
            <Button variant="primary" className="mt-10">
              {t('button')}
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  )
}
