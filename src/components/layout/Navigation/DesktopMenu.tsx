import NavItem from './NavItem'

type DesktopMenuProps = {
  setIsOpen: (open: boolean) => void
  links: { href: string; label: string }[]
}

export default function DesktopMenu({
  setIsOpen,
  links,
}: Readonly<DesktopMenuProps>) {
  return (
    <ul className="hidden sm:inline-flex! items-center gap-2">
      {links.map((link, index) => (
        <NavItem key={index} href={link.href} setIsOpen={setIsOpen}>
          {link.label}
        </NavItem>
      ))}
    </ul>
  )
}
