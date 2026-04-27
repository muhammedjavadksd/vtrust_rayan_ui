import { ArrowRight } from 'lucide-react'

interface CardCtaProps {
  href: string
  label: string
  variant?: 'primary' | 'outline'
}

export function CardCta({ href, label, variant = 'primary' }: CardCtaProps) {
  const baseStyles = "mt-4 inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition-opacity hover:opacity-95"
  const primaryStyles = "bg-[#0D2B6B] text-white"
  const outlineStyles = "border border-[#0D2B6B] text-[#0D2B6B] hover:bg-[#0D2B6B] hover:text-white"

  return (
    <a
      href={href}
      className={`${baseStyles} ${variant === 'primary' ? primaryStyles : outlineStyles}`}
    >
      {label}
      <ArrowRight className="size-4" aria-hidden />
    </a>
  )
}
