import { cn } from '@/lib/cn'
import Image from 'next/image'

type PassionProps = {
  image: string
  title: string
  text: string
  className?: string
}

export default function Passion({
  image,
  title,
  text,
  className,
}: PassionProps) {
  return (
    <div
      className={cn(
        'flex flex-col sm:flex-row items-center sm:items-start! gap-6',
        className
      )}
    >
      <div className="flex-1 h-80 rounded-2xl overflow-hidden border border-border dark:bg-surface py-5">
        <Image
          src={image}
          alt={title}
          width={400}
          height={300}
          className="w-full h-full"
        />
      </div>
      <div className="flex-1">
        <h3 className="text-2xl font-semibold">{title}</h3>
        <p className="text-lg text-text-muted mt-4">{text}</p>
      </div>
    </div>
  )
}
