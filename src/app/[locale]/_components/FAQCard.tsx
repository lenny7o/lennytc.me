'use client'

import Card from '@/components/ui/Card'
import { AnimatePresence, easeInOut, motion } from 'motion/react'
import { useState } from 'react'
import { FiChevronDown } from 'react-icons/fi'

type FAQCardProps = {
  question: string
  answer: string
}

const Icon = motion.create(FiChevronDown)

export default function FAQCard({ question, answer }: Readonly<FAQCardProps>) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleOpen = () => {
    setIsOpen(!isOpen)
  }

  return (
    <Card className="px-5 py-4">
      <div
        className="flex items-center justify-between cursor-pointer w-full gap-4"
        onClick={toggleOpen}
      >
        <h3 className="font-medium text-lg">{question}</h3>
        <Icon
          className="shrink-0"
          initial={{ rotate: 0 }}
          animate={isOpen ? { rotate: 180 } : { rotate: 0 }}
          size={20}
          strokeWidth={2.5}
        />
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: easeInOut }}
            className="overflow-hidden"
          >
            <p className="text-text-muted mt-4">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </Card>
  )
}
