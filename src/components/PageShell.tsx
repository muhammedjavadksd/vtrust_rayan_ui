import { Loader2 } from 'lucide-react'
import { useEffect, useState } from 'react'
import { MIN_MS, FADE_MS, type PageShellProps } from '../constants/page-shell'

export function PageShell({ children }: PageShellProps) {
  const [phase, setPhase] = useState<'loading' | 'fade' | 'off'>('loading')

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const start = performance.now()
    let cancelled = false
    let finished = false

    const goFade = () => {
      if (cancelled || finished) return
      finished = true
      const elapsed = performance.now() - start
      const wait = Math.max(0, MIN_MS - elapsed)
      window.setTimeout(() => {
        if (!cancelled) setPhase('fade')
      }, wait)
    }

    const fallback = window.setTimeout(goFade, 2200)

    if (document.fonts?.ready) {
      void document.fonts.ready.then(goFade).catch(goFade)
    } else {
      goFade()
    }

    return () => {
      cancelled = true
      window.clearTimeout(fallback)
      document.body.style.overflow = ''
    }
  }, [])

  useEffect(() => {
    if (phase !== 'fade') return
    const t = window.setTimeout(() => {
      setPhase('off')
      document.body.style.overflow = ''
    }, FADE_MS)
    return () => window.clearTimeout(t)
  }, [phase])

  return (
    <>
      {children}
      {phase !== 'off' ? (
        <div
          className={[
            'fixed inset-0 z-10000 flex flex-col items-center justify-center gap-6 bg-[#0D2B6B] transition-opacity duration-300 ease-out',
            phase === 'fade' ? 'pointer-events-none opacity-0' : 'opacity-100',
          ].join(' ')}
          aria-busy={phase === 'loading'}
          aria-live="polite"
        >
          <img
            src="/logo/logo.png"
            alt=""
            className="h-12 w-auto max-w-[200px] object-contain brightness-0 invert"
            decoding="async"
          />
          <Loader2
            className="size-10 animate-spin text-white/90"
            strokeWidth={2}
            aria-hidden
          />
          <p className="text-xs font-medium tracking-[0.2em] text-white/70">
            LOADING
          </p>
        </div>
      ) : null}
    </>
  )
}
