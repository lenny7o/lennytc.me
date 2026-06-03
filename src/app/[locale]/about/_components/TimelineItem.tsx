import { motion } from 'motion/react'
import Card from '@/components/ui/Card'
import Label from '@/components/ui/Label'
import Image from 'next/image'
import { Calendar } from 'lucide-react'

type TimelineItemProps = {
  date: string
  image: string
  title: string
  text: string
  index: number
}

export default function TimelineItem({
  date,
  image,
  title,
  text,
  index,
}: TimelineItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative grid grid-cols-[1.5rem_1fr] py-10 w-full"
    >
      <div className="flex justify-center items-start">
        <div className="w-5 h-5 bg-surface dark:bg-primary rounded-full z-10 border-4 border-primary dark:border-bg" />
      </div>

      <div className="ml-5 sm:ml-10">
        <Card>
          <Label icon={Calendar} text={date} size="sm" />
          <div className="rounded-2xl overflow-hidden w-full my-5">
            <Image
              src={image}
              alt="Video Games"
              width={400}
              height={200}
              className="object-cover w-full h-full"
            />
          </div>
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-text-muted text-lg mt-2">{text}</p>
        </Card>
      </div>
    </motion.div>
  )
}
