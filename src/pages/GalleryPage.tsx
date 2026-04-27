import { useRef, useState } from 'react'
import type { CSSProperties } from 'react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { EnquiryFormModal } from '../components/EnquiryFormModal'
import { MobileAdmissionButton } from '../components/MobileAdmissionButton'
import { ImageLightbox } from '../components/ImageLightbox'
import { useGallery } from '../hooks/useGallery'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import { getRevealClass } from '../constants/animations'

export default function GalleryPage() {
  const mainRef = useRef<HTMLElement | null>(null)
  const isVisible = useIntersectionObserver(mainRef, { threshold: 0.1, rootMargin: '0px 0px -8% 0px' })
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const { images: galleryImages, loading } = useGallery()

  const revealClass = (animationClass: string) => getRevealClass(isVisible, animationClass)

  return (
    <div className="min-h-svh bg-white">
      <Header />
      <main ref={mainRef} className="px-4 pb-10 pt-2 md:px-6 md:pb-14 lg:px-10">
        <section className="mx-auto w-full max-w-[1400px]">
          <div className={`${revealClass('animate-load')} relative overflow-hidden rounded-2xl`}>
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('/gallery/1.png')" }}
              aria-hidden
            />
            <div
              className="absolute inset-0 bg-[linear-gradient(90deg,rgba(13,43,107,0.82)_0%,rgba(13,43,107,0.55)_45%,rgba(13,43,107,0.35)_100%)]"
              aria-hidden
            />

            <div className="relative z-10 px-6 py-12 sm:px-8 sm:py-14 md:px-12 md:py-16">
              <p
                className={`${revealClass('animate-load')} text-xs font-semibold tracking-[0.18em] text-white/80`}
                style={{ '--delay': '120ms' } as CSSProperties}
              >
                VTRUST GROUP OF INSTITUTIONS
              </p>
              <h1
                className={`${revealClass('animate-load')} mt-3 text-3xl font-semibold leading-tight text-white sm:text-4xl md:text-5xl`}
                style={{ '--delay': '180ms' } as CSSProperties}
              >
                Gallery
              </h1>
              <p
                className={`${revealClass('animate-load')} mt-4 max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg`}
                style={{ '--delay': '220ms' } as CSSProperties}
              >
                Campus moments, classroom activities, and student experiences from
                across VTRUST.
              </p>

              <div
                className={`${revealClass('animate-load')} mt-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-[2px]`}
                style={{ '--delay': '260ms' } as CSSProperties}
              >
                <a href="/" className="font-semibold text-white/95 hover:text-white">
                  Home
                </a>
                <span className="text-white/70">/</span>
                <span className="font-medium text-white">Gallery</span>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto mt-12 w-full max-w-[1400px]">
          {loading ? (
            <div className="flex h-64 items-center justify-center">
              <div className="size-8 animate-spin rounded-full border-4 border-[#0D2B6B] border-t-transparent" />
            </div>
          ) : (
            <div
              className={`${revealClass('animate-load-from-right')} grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 md:gap-4`}
              style={{ '--delay': '320ms' } as CSSProperties}
            >
              {galleryImages.map((src, index) => (
                <div
                  key={src}
                  className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-sm"
                  style={{ '--delay': `${360 + index * 40}ms` } as CSSProperties}
                >
                  <button
                    type="button"
                    onClick={() => setSelectedImage(src)}
                    className="w-full cursor-zoom-in overflow-hidden"
                    aria-label={`Open VTRUST gallery image ${index + 1}`}
                  >
                    <img
                      src={src}
                      alt={`VTRUST gallery image ${index + 1}`}
                      className="aspect-square w-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                  </button>
                </div>
              ))}
            </div>
          )}
        </section>
      </main>
      {selectedImage ? (
        <ImageLightbox
          src={selectedImage}
          alt="VTRUST gallery preview image"
          onClose={() => setSelectedImage(null)}
        />
      ) : null}
      <Footer />
      <EnquiryFormModal />
      <MobileAdmissionButton />
    </div>
  )
}
