import Container from '@/components/layout/Container'
import ProjectCard from '@/components/ui/ProjectCard'
import projects from '@/data/projects'
import type { Metadata } from 'next'
import { GenerateMetadataProps } from '@/types/generateMetadataProps'
import { useTranslations } from 'next-intl'
import { getTranslations } from 'next-intl/server'
import AnimatedText from '../../../components/ui/AnimatedText'
import { baseUrl } from '@/config'

export async function generateMetadata({
  params,
}: Readonly<GenerateMetadataProps>): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({
    locale,
    namespace: 'Pages.Projects.Metadata',
  })

  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: `${baseUrl}/${locale}/projects`,
      languages: {
        fr: `${baseUrl}/fr/projects`,
        en: `${baseUrl}/en/projects`,
        'x-default': `${baseUrl}/en/projects`,
      },
    },
  }
}

export default function ProjectsPage() {
  const t = useTranslations('Pages.Projects')

  return (
    <section className="flex items-center mt-60">
      <Container size="lg">
        <h2 className="text-4xl font-semibold text-center">
          <AnimatedText
            content={[{ text: t('title'), order: 1, color: 'normal' }]}
          />
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-7 mt-10">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              id={project.id}
              name={project.name}
              status={project.status}
              image={project.image}
              alt={project.alt}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}
