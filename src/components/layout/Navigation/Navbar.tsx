'use client'

import Logo from '@/components/ui/Logo'
import Link from 'next/link'
import DesktopMenu from './DesktopMenu'
import { useEffect, useRef, useState } from 'react'
import MobileMenu from './MobileMenu'
import ToggleMenu from './ToggleMenu'
import { AnimatePresence } from 'motion/react'
import { useTranslations } from 'next-intl'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const navbarRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        navbarRef.current &&
        !navbarRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }

    document.addEventListener('click', handleClickOutside)

    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [isOpen])

  const t = useTranslations('Layout.Navigation')

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const links = [
    { href: '/about', label: t('about') },
    { href: '/projects', label: t('projects') },
    { href: '/#contact', label: t('contact') },
  ]

  return (
    <nav
      className="flex flex-col justify-center items-center w-full sm:w-max! sm:gap-8 bg-surface border border-border rounded-4xl pr-3"
      ref={navbarRef}
    >
      <div className="flex justify-between items-center gap-7 w-full">
        <Link href="/" onClick={() => setIsOpen(false)} className="p-2">
          <Logo size={40} />
        </Link>

        <DesktopMenu setIsOpen={setIsOpen} links={links} />

        <ToggleMenu isMenuOpen={isOpen} toggleMenu={toggleMenu} />
      </div>

      <AnimatePresence>
        {isOpen && <MobileMenu setIsOpen={setIsOpen} links={links} />}
      </AnimatePresence>
    </nav>
  )
}
