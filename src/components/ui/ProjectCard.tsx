import { Link } from '@/i18n/navigation'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

type ProjectCardProps = {
  id: string
  image: string
  alt: string
  name: string
  status?: string
}

export default function ProjectCard({
  id,
  image,
  name,
  status,
  alt,
}: Readonly<ProjectCardProps>) {
  const t = useTranslations('UI.ProjectCard')

  return (
    <div className="bg-transparent flex flex-col gap-4">
      <Link
        href={`/projects/${id}`}
        className="relative w-full h-84 rounded-2xl border border-border overflow-hidden"
      >
        <Image
          src={image}
          alt={alt}
          width={500}
          height={300}
          className="h-full w-full object-cover"
        />
        <div className="absolute w-full h-full bg-black/50 top-0 left-0 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center text-white text-lg font-semibold">
          {t('viewProject')}
        </div>
        {status && (
          <div className="absolute bottom-4 left-4 bg-surface px-3 py-1 rounded-xl text-sm font-medium border border-border">
            {status}
          </div>
        )}
      </Link>
      <h3 className="text-lg font-semibold">{name}</h3>
    </div>
  )
}
