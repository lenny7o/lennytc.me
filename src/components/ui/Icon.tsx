import { LucideIcon } from 'lucide-react'

type IconProps = {
  icon: LucideIcon
  size: number
}

export default function Icon({ icon: IconComponent, size }: IconProps) {
  return (
    <IconComponent
      size={size}
      className="bg-primary text-text-inverse rounded-xl p-2 shadow-md"
      aria-hidden="true"
    />
  )
}
