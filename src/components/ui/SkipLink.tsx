import Link from 'next/link'

type SkipLinkProps = {
  href?: string
}

export default function SkipLink({
  href = '#content',
}: Readonly<SkipLinkProps>) {
  return (
    <Link
      href={href}
      className="focus:bg-primary focus:text-text-inverse sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded-4xl focus:px-6 focus:py-4 transition-all"
    >
      Aller au contenu principal
    </Link>
  )
}
