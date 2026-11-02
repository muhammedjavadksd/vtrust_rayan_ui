import { ArrowRight } from 'lucide-react'
import { useState } from 'react'
import type { CSSProperties } from 'react'
import {
  HERO_COURSES_LINK,
  HERO_MARQUEE_ITEMS,
  heroCourseShowcases,
  heroIntro,
} from '../constants/hero'
import type { HeroCourseShowcase } from '../constants/hero'
import './Hero.css'

const MARQUEE_TEXT = `${HERO_MARQUEE_ITEMS.map((item) => `${item} ✦`).join(' ')} `

/**
 * Glossy blue 3D decorations of the hero background. They are purely visual,
 * so they are hidden from assistive technology.
 */
function HeroDecorations() {
  return (
    <div className="vt-courses-hero__decorations" aria-hidden="true">
      <svg
        className="vt-courses-hero__decor vt-courses-hero__decor--chain"
        viewBox="0 0 120 120"
        focusable="false"
      >
        <defs>
          <linearGradient id="vtCoursesChain" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#143a9c" />
            <stop offset="100%" stopColor="#8fb0f5" />
          </linearGradient>
        </defs>
        <g
          fill="none"
          stroke="url(#vtCoursesChain)"
          strokeWidth="14"
          strokeLinecap="round"
        >
          <ellipse cx="42" cy="62" rx="25" ry="33" transform="rotate(-24 42 62)" />
          <ellipse cx="78" cy="58" rx="25" ry="33" transform="rotate(24 78 58)" />
        </g>
      </svg>

      <svg
        className="vt-courses-hero__decor vt-courses-hero__decor--ring"
        viewBox="0 0 120 120"
        focusable="false"
      >
        <defs>
          <linearGradient id="vtCoursesRing" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#143a9c" />
            <stop offset="100%" stopColor="#8fb0f5" />
          </linearGradient>
        </defs>
        <circle
          cx="60"
          cy="60"
          r="32"
          fill="none"
          stroke="url(#vtCoursesRing)"
          strokeWidth="16"
        />
      </svg>

      <svg
        className="vt-courses-hero__decor vt-courses-hero__decor--knot"
        viewBox="0 0 140 120"
        focusable="false"
      >
        <defs>
          <linearGradient id="vtCoursesKnot" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#143a9c" />
            <stop offset="100%" stopColor="#8fb0f5" />
          </linearGradient>
        </defs>
        <path
          d="M20 78c-10-24 8-56 38-58 24-2 34 12 46 4 14-9 24 8 16 22-8 14-26 12-24 26 2 16 22 22 30 8 6-10-2-20-10-22"
          fill="none"
          stroke="url(#vtCoursesKnot)"
          strokeWidth="14"
          strokeLinecap="round"
        />
      </svg>
    </div>
  )
}

/**
 * Artwork of a course card. It lives inside the card, above the lighter curved
 * shape and below the copy block, so the title, the meta line and the pill
 * always stay readable. The image removes itself when the asset cannot be
 * decoded, so a missing file never leaves a broken image behind or disturbs
 * the layout.
 */
function HeroCardArtwork({ showcase }: { showcase: HeroCourseShowcase }) {
  const [isUnavailable, setIsUnavailable] = useState(false)

  if (isUnavailable) {
    return null
  }

  return (
    <img
      className="vt-courses-hero__card-art"
      src={showcase.image}
      alt={showcase.imageAlt}
      width={showcase.imageWidth}
      height={showcase.imageHeight}
      loading="eager"
      fetchPriority="high"
      decoding="async"
      draggable={false}
      onError={() => setIsUnavailable(true)}
    />
  )
}

export function Hero() {
  return (
    <section className="vt-courses-hero" aria-labelledby="vt-courses-hero-title">
      <div className="vt-courses-hero__strip">
        <p className="sr-only">{HERO_MARQUEE_ITEMS.join(', ')}</p>
        <div className="vt-courses-hero__marquee" aria-hidden="true">
          <div className="vt-courses-hero__track">
            {[0, 1, 2].map((copy) => (
              <span
                key={copy}
                className={`vt-courses-hero__group ${
                  copy === 0 ? '' : 'vt-courses-hero__group--clone'
                }`}
              >
                {MARQUEE_TEXT}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="vt-courses-hero__container">
        <header
          className="vt-courses-hero__intro animate-load"
          style={{ '--delay': '60ms' } as CSSProperties}
        >
          <p className="vt-courses-hero__eyebrow">{heroIntro.eyebrow}</p>
          <h1
            id="vt-courses-hero-title"
            className="vt-courses-hero__title hero-heading"
          >
            {heroIntro.title}
          </h1>
          <p className="vt-courses-hero__lead">{heroIntro.description}</p>
        </header>

        <div className="vt-courses-hero__cards">
          <HeroDecorations />

          <div className="vt-courses-hero__grid">
            {heroCourseShowcases.map((showcase, index) => (
              <article
                key={showcase.id}
                className={`vt-courses-hero__item vt-courses-hero__item--${showcase.variant} animate-load`}
                style={{ '--delay': `${160 + index * 120}ms` } as CSSProperties}
              >
                <div className="vt-courses-hero__stage">
                  <div className="vt-courses-hero__card">
                    <svg
                      className="vt-courses-hero__swoosh"
                      viewBox="0 0 200 200"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path
                        d="M200 18C130 28 80 78 65 148c-4 20-20 34-40 34h175V18Z"
                        fill="#ffffff"
                        fillOpacity="0.18"
                      />
                    </svg>

                    <HeroCardArtwork showcase={showcase} />

                    <div className="vt-courses-hero__card-copy">
                      <h2 className="vt-courses-hero__card-title">{showcase.title}</h2>
                      <p className="vt-courses-hero__card-meta">{showcase.meta}</p>

                      <a
                        className="vt-courses-hero__pill"
                        href={HERO_COURSES_LINK}
                        aria-label={`See All Courses — ${showcase.title}`}
                      >
                        See All Courses
                        <ArrowRight className="vt-courses-hero__pill-icon" aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                </div>

                <ul className="vt-courses-hero__chips">
                  {showcase.chips.map((chip) => (
                    <li key={chip.name} className="vt-courses-hero__chip">
                      <span>{chip.name}</span>
                      <span className="vt-courses-hero__chip-duration">{chip.duration}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
