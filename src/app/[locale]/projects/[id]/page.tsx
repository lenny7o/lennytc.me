import Container from '@/components/layout/Container'
import projects from '@/data/projects'
import type { Metadata } from 'next'
import { GenerateMetadataProps } from '@/types/generateMetadataProps'
import { getTranslations } from 'next-intl/server'
import { baseUrl } from '@/config'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Button from '@/components/ui/Button'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { FiGithub } from 'react-icons/fi'

type ProjectPageProps = {
  params: Promise<{
    locale: string
    id: string
  }>
}

export async function generateMetadata({
  params,
}: Readonly<GenerateMetadataProps>): Promise<Metadata> {
  const { locale, id } = await params
  const t = await getTranslations({
    locale,
    namespace: 'Pages.Project.Metadata',
  })

  return {
    title: t('title', {
      name: projects.find((project) => project.id === id)?.name || 'Projet',
    }),
    description: t('description'),
    alternates: {
      canonical: `${baseUrl}/${locale}/projects/${id}`,
      languages: {
        fr: `${baseUrl}/fr/projects/${id}`,
        en: `${baseUrl}/en/projects/${id}`,
        'x-default': `${baseUrl}/en/projects/${id}`,
      },
    },
  }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id } = await params
  const locale = (await params).locale

  const project = projects.find((project) => project.id === id)

  if (!project) {
    notFound()
  }

  const tPage = await getTranslations({
    locale,
    namespace: 'Pages.Project',
  })

  const tProject = await getTranslations({
    locale,
    namespace: `Pages.Project.${project.id}`,
  })

  return (
    <section className="flex items-center mt-40">
      <Container size="md">
        <div className="relative w-full h-84 rounded-2xl overflow-hidden before:bg-linear-to-t before:from-bg before:to-transparent before:absolute before:inset-0">
          <Image
            src={project?.image}
            alt={project?.alt}
            width={500}
            height={300}
            className="object-cover w-full h-full"
          />
          <div className="absolute bottom-4 left-4 flex flex-row flex-wrap gap-4">
            {project?.link && (
              <Link
                href={project?.link || '#'}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="primary" icon={ArrowRight}>
                  {tPage('link')}
                </Button>
              </Link>
            )}
            {project?.github && (
              <Link
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="secondary"
                  animatedIcon={false}
                  icon={FiGithub}
                >
                  Github
                </Button>
              </Link>
            )}
          </div>
        </div>
        <h1 className="text-4xl font-semibold text-center mt-12">
          {project?.name}
        </h1>
        <p className="text-lg text-text-muted mt-10">
          {tProject('description')}
        </p>
        <h2 className="text-xl font-medium text-left mt-10">
          {tPage('goalsTitle')}
        </h2>
        <p className="text-lg text-text-muted mt-3">{tProject('goal')}</p>
        <h2 className="text-xl font-medium text-left mt-10">
          {tPage('skillsTitle')}
        </h2>
        <p className="text-lg text-text-muted mt-3">{tProject('skills')}</p>
        <h2 className="text-xl font-medium text-left mt-10">
          {tPage('roleTitle')}
        </h2>
        <p className="text-lg text-text-muted mt-3">{tProject('role')}</p>
      </Container>
    </section>
  )
}
