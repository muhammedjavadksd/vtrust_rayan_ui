import { useEffect, useRef, useState } from 'react'
import type { CSSProperties } from 'react'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { EnquiryFormModal } from './components/EnquiryFormModal'
import { MobileAdmissionButton } from './components/MobileAdmissionButton'
import { ImageLightbox } from './components/ImageLightbox'

const galleryImages = [
  { src: '/student_life/1.jpg', alt: 'Student life gallery image 1' },
  { src: '/student_life/2.jpg', alt: 'Student life gallery image 2' },
  { src: '/student_life/3.jpg', alt: 'Student life gallery image 3' },
  { src: '/student_life/4.jpg', alt: 'Student life gallery image 4' },
  { src: '/student_life/5.jpg', alt: 'Student life gallery image 5' },
  { src: '/student_life/6.jpg', alt: 'Student life gallery image 6' },
  { src: '/student_life/7.jpg', alt: 'Student life gallery image 7' },
  { src: '/student_life/8.jpg', alt: 'Student life gallery image 8' },
  { src: '/student_life/9.jpg', alt: 'Student life gallery image 9' },
] as const

const activities = [
  {
    title: 'Club & interest groups',
    text: 'Optometry clubs, health awareness drives, and peer-led workshops build community beyond the classroom.',
  },
  {
    title: 'Sports & wellness',
    text: 'Regular fitness and team events support balance, teamwork, and mental well-being.',
  },
  {
    title: 'Festivals & cultural days',
    text: 'Celebrations across campuses bring together diverse backgrounds and strengthen belonging.',
  },
  {
    title: 'Industry & outreach',
    text: 'Talks, hospital visits, and community screening camps connect learning to real impact.',
  },
] as const

const stories = [
  {
    name: 'Christene Joyal',
    role: 'BSc Optometry',
    quote:
      'The culture here pushed me to learn collaboratively. Clinical postings and campus events made me confident to work with patients and peers alike.',
  },
  {
    name: 'Ayesha Kulkarni',
    role: 'Allied Health Programme',
    quote:
      'Mentors encouraged us to lead small outreach projects. It taught me leadership alongside technical skills.',
  },
  {
    name: 'Rohit Sharma',
    role: 'Hospital Management',
    quote:
      'From case competitions to campus volunteering, I always felt engaged with both studies and the community.',
  },
] as const

export default function StudentLifePage() {
  const mainRef = useRef<HTMLElement | null>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [selectedImage, setSelectedImage] = useState<(typeof galleryImages)[number] | null>(null)

  useEffect(() => {
    const node = mainRef.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        setIsVisible(true)
        observer.disconnect()
      },
      { threshold: 0.1, rootMargin: '0px 0px -8% 0px' },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  const revealClass = (animationClass: string) =>
    isVisible ? animationClass : 'opacity-0'

  return (
    <div className="min-h-svh bg-white">
      <Header />
      <main ref={mainRef} className="px-4 pb-10 pt-2 md:px-6 md:pb-14 lg:px-10">
        <section className="mx-auto w-full max-w-[1400px]">
          <div className={`${revealClass('animate-load')} relative overflow-hidden rounded-2xl`}>
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('/generated/journey-img.png')" }}
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
                Student Life
              </h1>
              <p
                className={`${revealClass('animate-load')} mt-4 max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg`}
                style={{ '--delay': '220ms' } as CSSProperties}
              >
                Culture, community, and engagement—where your programme meets
                friendships, leadership, and memories that last.
              </p>

              <div
                className={`${revealClass('animate-load')} mt-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-[2px]`}
                style={{ '--delay': '260ms' } as CSSProperties}
              >
                <a href="/" className="font-semibold text-white/95 hover:text-white">
                  Home
                </a>
                <span className="text-white/70">/</span>
                <span className="font-medium text-white">Student Life</span>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto mt-10 w-full max-w-[1400px] md:mt-12">
          <div className="rounded-2xl border border-slate-200 bg-white px-6 py-10 shadow-sm shadow-black/5 sm:px-10 md:px-12 md:py-12">
            <p
              className={`${revealClass('animate-load')} text-xs font-semibold tracking-[0.16em] text-[#2353b1]`}
              style={{ '--delay': '320ms' } as CSSProperties}
            >
              OVERVIEW
            </p>
            <h2
              className={`${revealClass('animate-load')} mt-3 text-2xl font-semibold text-[#0D2B6B] sm:text-3xl`}
              style={{ '--delay': '360ms' } as CSSProperties}
            >
              Culture &amp; engagement at the heart of learning
            </h2>
            <p
              className={`${revealClass('animate-load')} mt-5 max-w-3xl text-base leading-relaxed text-slate-600 sm:text-lg`}
              style={{ '--delay': '400ms' } as CSSProperties}
            >
              Student life at VTRUST is designed to complement your academics:
              respectful collaboration, inclusivity, and active participation across
              campuses. Whether you are in labs, clubs, or community outreach,
              you build habits of communication, empathy, and leadership that
              employers and patients value.
            </p>
            <div
              className={`${revealClass('animate-load')} mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3`}
              style={{ '--delay': '440ms' } as CSSProperties}
            >
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                <p className="font-semibold text-[#0D2B6B]">Belonging</p>
                <p className="mt-2 text-sm text-slate-600">
                  Peer networks, faculty mentors, and multi-campus events help every
                  student feel part of the VTRUST community.
                </p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                <p className="font-semibold text-[#0D2B6B]">Engagement</p>
                <p className="mt-2 text-sm text-slate-600">
                  Hands-on activities, competitions, and volunteering turn classroom
                  learning into confident, real-world practice.
                </p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                <p className="font-semibold text-[#0D2B6B]">Growth</p>
                <p className="mt-2 text-sm text-slate-600">
                  Cultural programmes and soft-skill sessions nurture professionalism
                  alongside technical excellence.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto mt-12 w-full max-w-[1400px] md:mt-14">
          <div className="text-center">
            <p
              className={`${revealClass('animate-load')} text-xs font-semibold tracking-[0.16em] text-[#2353b1]`}
              style={{ '--delay': '500ms' } as CSSProperties}
            >
              GALLERY
            </p>
            <h2
              className={`${revealClass('animate-load')} mt-3 text-2xl font-semibold text-[#0D2B6B] sm:text-3xl`}
              style={{ '--delay': '540ms' } as CSSProperties}
            >
              Multimedia gallery
            </h2>
          </div>
          <div
            className={`${revealClass('animate-load-from-right')} mt-8 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4`}
            style={{ '--delay': '580ms' } as CSSProperties}
          >
            {galleryImages.map((item) => (
              <div
                key={`${item.src}-${item.alt}`}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => setSelectedImage(item)}
                  className="w-full cursor-zoom-in overflow-hidden"
                  aria-label={`Open ${item.alt}`}
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="aspect-square w-full object-cover"
                    loading="lazy"
                  />
                </button>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto mt-12 w-full max-w-[1400px] md:mt-14">
          <div className="text-center">
            <p
              className={`${revealClass('animate-load')} text-xs font-semibold tracking-[0.16em] text-[#2353b1]`}
              style={{ '--delay': '640ms' } as CSSProperties}
            >
              ON CAMPUS
            </p>
            <h2
              className={`${revealClass('animate-load')} mt-3 text-2xl font-semibold text-[#0D2B6B] sm:text-3xl`}
              style={{ '--delay': '680ms' } as CSSProperties}
            >
              Campus activities
            </h2>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
            {activities.map((a, index) => (
              <article
                key={a.title}
                className={`${revealClass('animate-load-from-right')} rounded-2xl border border-slate-200 bg-white p-6 shadow-sm shadow-black/5`}
                style={
                  { '--delay': `${720 + index * 70}ms` } as CSSProperties
                }
              >
                <h3 className="text-lg font-semibold text-[#0D2B6B]">{a.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                  {a.text}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto mt-12 w-full max-w-[1400px] md:mt-14">
          <div className="text-center">
            <p
              className={`${revealClass('animate-load')} text-xs font-semibold tracking-[0.16em] text-[#2353b1]`}
              style={{ '--delay': '900ms' } as CSSProperties}
            >
              VOICES FROM CAMPUS
            </p>
            <h2
              className={`${revealClass('animate-load')} mt-3 text-2xl font-semibold text-[#0D2B6B] sm:text-3xl`}
              style={{ '--delay': '940ms' } as CSSProperties}
            >
              Student success stories
            </h2>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3">
            {stories.map((s, index) => (
              <blockquote
                key={s.name}
                className={`${revealClass('animate-load-from-right')} rounded-2xl border border-slate-200 bg-slate-50 p-6`}
                style={
                  { '--delay': `${980 + index * 80}ms` } as CSSProperties
                }
              >
                <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
                  &ldquo;{s.quote}&rdquo;
                </p>
                <footer className="mt-4 border-t border-slate-200 pt-4">
                  <p className="font-semibold text-[#0D2B6B]">{s.name}</p>
                  <p className="text-xs text-slate-600">{s.role}</p>
                </footer>
              </blockquote>
            ))}
          </div>
        </section>
      </main>
      {selectedImage ? (
        <ImageLightbox
          src={selectedImage.src}
          alt={selectedImage.alt}
          onClose={() => setSelectedImage(null)}
        />
      ) : null}
      <Footer />
      <EnquiryFormModal />
      <MobileAdmissionButton />
    </div>
  )
}
