'use client'

import { motion, useMotionValueEvent, useScroll } from 'motion/react'
import Container from '../Container'
import Navbar from './Navbar'
import { useState } from 'react'

export default function Header() {
  const { scrollY } = useScroll()
  const [hidden, setHidden] = useState(false)

  useMotionValueEvent(scrollY, 'change', (current) => {
    const previous = scrollY.getPrevious() ?? 0
    if (current > previous && current > 150) {
      setHidden(true)
    } else {
      setHidden(false)
    }
  })

  return (
    <motion.header
      animate={{
        y: hidden ? -140 : 0,
        opacity: hidden ? 0 : 1,
      }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full"
    >
      <Container size="lg" className="flex justify-center items-center">
        <Navbar />
      </Container>
    </motion.header>
  )
}
