import { cn } from '@/lib/cn'

type ContainerProps = {
  children: React.ReactNode
  size: keyof typeof sizes
  className?: string
}

const sizes = {
  sm: 'max-w-xl',
  md: 'max-w-3xl',
  lg: 'max-w-5xl',
  xl: 'max-w-6xl',
}

export default function Container({
  children,
  size,
  className,
}: Readonly<ContainerProps>) {
  return (
    <div className={cn('w-full mx-auto px-6', sizes[size], className)}>
      {children}
    </div>
  )
}
