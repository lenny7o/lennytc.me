'use client'

import { useRef } from 'react'
import TimelineItem from './TimelineItem'
import { motion, useScroll, useSpring } from 'motion/react'
import { useTranslations } from 'next-intl'

export default function Timeline() {
  const containerRef = useRef(null)
  const t = useTranslations('Pages.About.Journey')

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  })

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <div ref={containerRef} className="relative w-full pt-20 pb-40 mt-15">
      <div className="absolute left-0 top-0 w-6 h-full flex justify-center">
        <div className="w-1 h-full bg-timeline" />
        <motion.div
          style={{ scaleY }}
          className="absolute w-1 h-full bg-surface dark:bg-primary origin-top"
        />
      </div>

      <div className="pointer-events-none absolute top-0 inset-x-0 h-32 w-full bg-linear-to-b from-primary dark:from-bg to-transparent z-20" />
      <div className="pointer-events-none absolute bottom-0 inset-x-0 h-32 w-full bg-linear-to-t from-primary dark:from-bg to-transparent z-20" />

      <div className="relative z-10">
        <TimelineItem
          date={t('steps.0.date')}
          image="/images/games.jpg"
          title={t('steps.0.title')}
          text={t('steps.0.text')}
          index={0}
        />
        <TimelineItem
          date={t('steps.1.date')}
          image="/images/bulb.jpg"
          title={t('steps.1.title')}
          text={t('steps.1.text')}
          index={1}
        />
        <TimelineItem
          date={t('steps.2.date')}
          image="/images/code.jpg"
          title={t('steps.2.title')}
          text={t('steps.2.text')}
          index={2}
        />
        <TimelineItem
          date={t('steps.3.date')}
          image="/images/rocket.jpg"
          title={t('steps.3.title')}
          text={t('steps.3.text')}
          index={3}
        />
      </div>
    </div>
  )
}
