import Container from '@/components/layout/Container'
import Button from '@/components/ui/Button'
import ProjectCard from '@/components/ui/ProjectCard'
import projects from '@/data/projects'
import { Link } from '@/i18n/navigation'
import { ArrowRight } from 'lucide-react'
import { useTranslations } from 'next-intl'

export default function ProjectsSection() {
  const t = useTranslations('Pages.HomePage.Projects')
  const displayedProjects = projects.filter((project) => project.inHomepage)

  return (
    <section className="flex items-center">
      <Container size="lg">
        <h2 className="text-4xl font-semibold text-center">{t('title')}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-7 mt-10">
          {displayedProjects.map((project) => (
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
        <div className="flex items-center justify-center w-full mt-15">
          <Link href="/projects">
            <Button variant="secondary" icon={ArrowRight} className="w-full">
              {t('button')}
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  )
}
