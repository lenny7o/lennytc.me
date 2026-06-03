import { Link } from '@/i18n/navigation'
import Container from './Container'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { useTranslations } from 'next-intl'
import { github, linkedin, mail } from '@/config'

export default function Footer() {
  const t = useTranslations('Layout.Footer')

  return (
    <footer className="mt-40 sm:mt-60">
      <Container
        size="lg"
        className="text-text-muted p-7 flex items-center justify-between"
      >
        <div className="flex items-center gap-1">
          <Link
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2"
          >
            <FiGithub size={20} />
          </Link>
          <Link
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2"
          >
            <FiLinkedin size={20} />
          </Link>
          <Link href={`mailto:${mail}`} className="p-2">
            <FiMail size={20} />
          </Link>
        </div>
        <Link href="/legal" className="text-sm py-2 px-3">
          {t('legal')}
        </Link>
      </Container>
    </footer>
  )
}
