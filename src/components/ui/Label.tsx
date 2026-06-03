import { cn } from '@/lib/cn'
import { LucideIcon } from 'lucide-react'

type LabelProps = {
  icon?: LucideIcon
  text: string
  size?: keyof typeof sizes
}

const sizes = {
  sm: {
    className: 'text-sm',
    iconSize: 14,
  },
  md: {
    className: 'text-base',
    iconSize: 20,
  },
  lg: {
    className: 'text-lg',
    iconSize: 24,
  },
}

export default function Label({
  icon: IconComponent,
  text,
  size = 'md',
}: LabelProps) {
  return (
    <div
      className={cn(
        'inline-flex items-center bg-surface text-text-muted rounded-3xl px-4 py-2 border border-border',
        sizes[size].className
      )}
    >
      {IconComponent && (
        <IconComponent size={sizes[size].iconSize} className="mr-2" />
      )}
      <span>{text}</span>
    </div>
  )
}
