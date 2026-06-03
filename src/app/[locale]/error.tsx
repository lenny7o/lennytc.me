'use client'

import Container from '@/components/layout/Container'
import Button from '@/components/ui/Button'
import { useTranslations } from 'next-intl'
import { useEffect } from 'react'

type ErrorProps = {
  error: Error & { digest?: string }
  reset: () => void
}

export default function Error({ error, reset }: ErrorProps) {
  const t = useTranslations('Pages.Error')

  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <section className="min-h-screen flex items-center justify-center">
      <Container
        size="md"
        className="flex flex-col gap-10 text-center items-center"
      >
        <h1 className="text-3xl font-semibold">{t('title')}</h1>
        <Button onClick={() => reset()}>{t('button')}</Button>
      </Container>
    </section>
  )
}
