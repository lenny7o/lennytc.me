import Container from '@/components/layout/Container'
import Button from '@/components/ui/Button'
import { Link } from '@/i18n/navigation'
import { useTranslations } from 'next-intl'

export default function NotFoundPage() {
  const t = useTranslations('Pages.NotFound')

  return (
    <section className="min-h-screen flex items-center justify-center">
      <Container size="md" className="flex flex-col text-center items-center">
        <h1 className="text-3xl font-semibold">{t('title')}</h1>
        <p className="text-text-muted mt-7 text-lg">{t('text')}</p>
        <Link href="/" className="mt-10">
          <Button>{t('button')}</Button>
        </Link>
      </Container>
    </section>
  )
}
