import { ChevronDown, Phone } from 'lucide-react'
import type { CSSProperties } from 'react'

const navLinks = ['Courses', 'About', 'Campuses', 'Admissions', 'Contact'] as const

const LOGO_SRC = '/logo/logo.png'

type HeaderProps = { className?: string }

export function Header({ className }: HeaderProps) {
  return (
    <header
      className={['shrink-0 bg-white px-6 py-4 md:px-10 lg:px-14', className]
        .filter(Boolean)
        .join(' ')}
    >
      <div className="mx-auto grid max-w-[1400px] grid-cols-2 gap-x-4 gap-y-4 lg:grid-cols-[auto_minmax(0,1fr)_auto] lg:items-center lg:gap-8">
        <a
          href="/"
          className="animate-load-right col-start-1 row-start-1 flex w-fit max-w-[min(100%,220px)] items-center self-center no-underline sm:max-w-none md:max-w-[280px] lg:max-w-[320px]"
          style={{ '--delay': '40ms' } as CSSProperties}
        >
          <img
            src={LOGO_SRC}
            alt="VTRUST Group of Institutions"
            width={1618}
            height={550}
            className="h-9 w-auto object-contain object-left sm:h-10 md:h-11"
            decoding="async"
          />
        </a>

        <nav
          className="col-span-2 row-start-2 flex flex-wrap justify-center gap-x-6 gap-y-2 overflow-x-auto border-t border-gray-100 pt-4 [scrollbar-width:none] sm:gap-x-8 lg:col-span-1 lg:col-start-2 lg:row-start-1 lg:min-w-0 lg:border-0 lg:pt-0 [&::-webkit-scrollbar]:hidden"
          aria-label="Main"
        >
          {navLinks.map((label, index) => (
            <a
              key={label}
              href={`#${label.toLowerCase()}`}
              className="animate-load whitespace-nowrap text-[0.95rem] font-medium text-gray-700 transition-colors hover:text-vtrust-navy"
              style={{ '--delay': `${120 + index * 70}ms` } as CSSProperties}
            >
              {label}
            </a>
          ))}
        </nav>

        <div
          className="animate-load col-start-2 row-start-1 flex items-center justify-end gap-2 self-center sm:gap-4 lg:col-start-3 lg:gap-6"
          style={{ '--delay': '220ms' } as CSSProperties}
        >
          <button
            type="button"
            className="flex items-center gap-1 text-vtrust-navy sm:gap-1.5"
            aria-expanded="false"
            aria-haspopup="listbox"
          >
            <Phone className="size-[18px] shrink-0" strokeWidth={2} aria-hidden />
            <span className="max-w-38 truncate text-[0.8rem] font-medium underline underline-offset-2 sm:max-w-none sm:text-[0.95rem]">
              +91 9072314474
            </span>
            <ChevronDown className="size-4 shrink-0 opacity-80" aria-hidden />
          </button>

          <a
            href="#apply"
            className="inline-flex shrink-0 items-center justify-center rounded-full bg-vtrust-navy px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-opacity hover:opacity-95 sm:px-5"
          >
            Apply now
          </a>
        </div>
      </div>
    </header>
  )
}
