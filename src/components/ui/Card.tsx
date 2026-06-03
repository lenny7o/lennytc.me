import { cn } from '@/lib/cn'

type FactCardProps = {
  children: React.ReactNode
  className?: string
}

export default function FactCard({ children, className }: FactCardProps) {
  return (
    <div
      className={cn(
        'flex flex-col items-start bg-surface rounded-3xl p-5 border border-border w-full h-full',
        className
      )}
    >
      {children}
    </div>
  )
}
