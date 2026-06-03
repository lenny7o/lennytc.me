'use client'

import { cn } from '@/lib/cn'
import type { AnimatedText } from '@/types/animatedText'
import { motion } from 'motion/react'

type AnimatedTextProps = {
  content: AnimatedText[]
  className?: string
}

export default function AnimatedText({ content }: AnimatedTextProps) {
  const sortedContent = [...content].sort((a, b) => a.order - b.order)

  const parentVariants = {
    animate: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  }

  const firstContainer = {
    animate: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  }

  const wordVariants = {
    initial: { filter: 'blur(4px)', opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 0.5 },
    },
  }

  return (
    <motion.span
      variants={parentVariants}
      initial="initial"
      animate="animate"
      viewport={{ once: true }}
    >
      {sortedContent.map((title, index) => {
        const words = title.text.split(' ')
        const previousWords = sortedContent
          .slice(0, index)
          .reduce((acc, obj) => acc + obj.text.split(' ').length, 0)

        const containerVariants = {
          animate: {
            transition: {
              delayChildren: 0.05 * previousWords,
              staggerChildren: 0.05,
            },
          },
        }

        return title.isStrong ? (
          <motion.strong
            key={index}
            className={cn(
              title.color === 'muted' ? 'text-text-muted' : 'text-text'
            )}
            variants={index === 0 ? firstContainer : containerVariants}
          >
            {words.map((word, wordIndex) => (
              <motion.span
                key={wordIndex}
                variants={wordVariants}
                className="inline-block"
                style={{ willChange: 'transform, opacity, filter' }}
              >
                {word + '\u00A0'}
              </motion.span>
            ))}
          </motion.strong>
        ) : (
          <motion.span
            key={index}
            className={cn(
              title.color === 'muted' ? 'text-text-muted' : 'text-text'
            )}
            variants={containerVariants}
          >
            {words.map((word, wordIndex) => (
              <motion.span
                key={wordIndex}
                variants={wordVariants}
                className="inline-block"
                style={{ willChange: 'transform, opacity, filter' }}
              >
                {word + '\u00A0'}
              </motion.span>
            ))}
          </motion.span>
        )
      })}
    </motion.span>
  )
}
