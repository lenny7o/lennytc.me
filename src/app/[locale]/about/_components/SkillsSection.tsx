import Container from '@/components/layout/Container'
import Card from '@/components/ui/Card'
import Icon from '@/components/ui/Icon'
import Label from '@/components/ui/Label'
import { CodeXml, Languages, Rocket } from 'lucide-react'
import Image from 'next/image'

export default function SkillsSection() {
  return (
    <section className="flex items-center mt-40 sm:mt-60">
      <Container size="xl" className="flex flex-col gap-10">
        <h2 className="text-4xl font-semibold text-left">Mes compétences</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
          <Card className="sm:col-span-full relative overflow-hidden">
            <Icon icon={CodeXml} size={32} />
            <h3 className="text-xl font-semibold mt-3 z-10">
              Ingénierie et développement
            </h3>
            <div className="flex items-center gap-3 w-full mt-5 flex-wrap z-10">
              <Label text="TypeScript" />
              <Label text="React" />
              <Label text="Nextjs" />
              <Label text="Expo" />
            </div>
            <div className="absolute top-0 right-0 z-0 hidden md:block! w-120 h-50 overflow-hidden">
              <Image
                src="/images/circuit.svg"
                alt="Circuit"
                width={400}
                height={400}
                className="object-cover w-full h-full"
              />

              <div className="absolute right-0 inset-0 bg-linear-to-r from-surface to-transparent" />
            </div>
          </Card>
          <Card>
            <Icon icon={Rocket} size={32} />
            <h3 className="text-xl font-semibold mt-3">Entrepreneuriat</h3>
            <div className="flex items-center gap-3 w-full mt-5 flex-wrap">
              <Label text="Gestion de projet" />
              <Label text="Résolution de problèmes" />
            </div>
          </Card>
          <Card>
            <Icon icon={Languages} size={32} />
            <h3 className="text-xl font-semibold mt-3">Langues</h3>
            <div className="flex items-center gap-3 w-full mt-5 flex-wrap">
              <Label text="Français (Natif)" />
              <Label text="Anglais (B1)" />
            </div>
          </Card>
        </div>
      </Container>
    </section>
  )
}
