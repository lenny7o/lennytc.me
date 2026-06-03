import Container from '@/components/layout/Container'
import AnimatedText from '@/components/ui/AnimatedText'
import Button from '@/components/ui/Button'
import { Link } from '@/i18n/navigation'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

export default function HeroSection() {
  const t = useTranslations('Pages.About.Hero')

  return (
    <section className="min-h-screen flex items-center mt-7">
      <Container size="lg" className="flex flex-col md:flex-row gap-10">
        <div className="flex flex-col justify-between h-100 flex-1 text-left">
          <div className="text-center md:text-left! items-center md:items-start ">
            <h1 className="text-4xl sm:text-6xl font-semibold">
              <AnimatedText
                content={[{ text: t('title'), order: 1, color: 'normal' }]}
              />
            </h1>
            <p className="text-lg text-text-muted mt-7">
              <AnimatedText
                content={[{ text: t('text'), order: 1, color: 'muted' }]}
              />
            </p>
          </div>
          <div className="flex flex-col justify-start md:flex-row md:items-center gap-3 mt-10 flex-wrap">
            <Link href="/#contact">
              <Button variant="primary" className="w-full">
                {t('primaryButton')}
              </Button>
            </Link>
            <Link href="#journey">
              <Button variant="secondary" className="w-full">
                {t('secondaryButton')}
              </Button>
            </Link>
          </div>
        </div>
        <div className="hidden md:block! h-100 flex-1 rounded-2xl overflow-hidden">
          <Image
            src="/images/about-hero.svg"
            alt={t('alt')}
            width={500}
            height={600}
            className="w-full h-full"
          />
        </div>
      </Container>
    </section>
  )
}
