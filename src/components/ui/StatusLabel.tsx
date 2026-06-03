import { useTranslations } from 'next-intl'

export default function StatusLabel() {
  const t = useTranslations('UI.StatusLabel')

  return (
    <span className="inline-flex items-center gap-4 px-3 py-1 border border-border rounded-2xl w-max">
      <div
        className="h-2 w-2 rounded-full bg-green-500 shadow-[0_0_4px_2px_rgba(34,197,94,0.6)]"
        aria-hidden="true"
      ></div>
      <span className="text-sm font-medium text-text-muted">{t('text')}</span>
    </span>
  )
}
