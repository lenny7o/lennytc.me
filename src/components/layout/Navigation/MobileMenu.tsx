'use client'

import NavItem from './NavItem'
import { motion } from 'motion/react'

const menuVariants = {
  hidden: { opacity: 0, height: 0 },
  visible: { opacity: 1, height: 'auto' },
}

const listVariants = {
  hidden: {
    opacity: 0,
    transition: { staggerChildren: 0.1, staggerDirection: -1 },
  },
  visible: { opacity: 1 },
}

type MobileMenuProps = {
  setIsOpen: (open: boolean) => void
  links: { href: string; label: string }[]
}

export default function MobileMenu({
  setIsOpen,
  links,
}: Readonly<MobileMenuProps>) {
  return (
    <motion.div
      className="w-full sm:hidden"
      variants={menuVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      <motion.ul
        key="mobile-menu"
        className="flex flex-col justify-center items-center gap-6 text-lg overflow-hidden py-6"
        variants={listVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        {links.map((link, index) => (
          <NavItem key={index} href={link.href} setIsOpen={setIsOpen}>
            {link.label}
          </NavItem>
        ))}
      </motion.ul>
    </motion.div>
  )
}
