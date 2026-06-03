'use client'

import { AnimatePresence, motion } from 'motion/react'

type ToggleMenuProps = {
  isMenuOpen: boolean
  toggleMenu: () => void
}

const variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: { pathLength: 1, opacity: 1 },
}

export default function ToggleMenu({
  isMenuOpen,
  toggleMenu,
}: Readonly<ToggleMenuProps>) {
  return (
    <button
      onClick={toggleMenu}
      className="flex justify-center items-center px-2 py-1 sm:hidden!"
    >
      <AnimatePresence mode="wait">
        {!isMenuOpen ? (
          <motion.svg
            key="menu-icon"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="size-7"
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <motion.path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 9h16.5m-16.5 6.75h16.5"
              variants={variants}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            />
          </motion.svg>
        ) : (
          <motion.svg
            key="close-icon"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="size-7"
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <motion.path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
              variants={variants}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            />
          </motion.svg>
        )}
      </AnimatePresence>
    </button>
  )
}
