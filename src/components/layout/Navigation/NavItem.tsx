import { Link } from '@/i18n/navigation'

type NavItemProps = {
  href: string
  target?: string
  children: React.ReactNode
  setIsOpen: (open: boolean) => void
}

export default function NavItem({
  href,
  target = '_self',
  children,
  setIsOpen,
}: Readonly<NavItemProps>) {
  return (
    <li>
      <Link
        href={href}
        className="font-semibold transition-colors px-3 py-2"
        target={target}
        {...(target === '_blank' && { rel: 'noopener noreferrer' })}
        onClick={() => setIsOpen(false)}
      >
        {children}
      </Link>
    </li>
  )
}
