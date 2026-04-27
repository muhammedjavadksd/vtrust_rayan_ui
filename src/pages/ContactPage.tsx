import { Mail, MapPin, Phone } from 'lucide-react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { EnquiryFormModal } from '../components/EnquiryFormModal'
import { MobileAdmissionButton } from '../components/MobileAdmissionButton'
import { useContactForm, useCampusSelector } from '../hooks/useContact'
import { useContactPageAnimations } from '../hooks/useContactPageAnimations'

export default function ContactPage() {
  const { mainRef, revealClass } = useContactPageAnimations()
  const { submitted, handleSubmit } = useContactForm()
  const { activeId, activeCampus, campuses, selectCampus } = useCampusSelector()

  return (
    <div className="min-h-svh bg-white">
      <Header />
      <main ref={mainRef} className="px-4 pb-10 pt-2 md:px-6 md:pb-14 lg:px-10">
        <section className="mx-auto w-full max-w-[1400px]">
          <div className={`${revealClass('animate-load')} relative overflow-hidden rounded-2xl`}>
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('/generated/hero-bg.png')" }}
              aria-hidden
            />
            <div
              className="absolute inset-0 bg-[linear-gradient(90deg,rgba(13,43,107,0.82)_0%,rgba(13,43,107,0.55)_45%,rgba(13,43,107,0.35)_100%)]"
              aria-hidden
            />

            <div className="relative z-10 px-6 py-12 sm:px-8 sm:py-14 md:px-12 md:py-16">
              <div className="max-w-2xl">
                <span
                  className={`${revealClass('animate-load-from-right')} inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-lg backdrop-blur-md sm:text-xs`}
                >
                  Get in Touch
                </span>
                <h1
                  className={`${revealClass('animate-load')} mt-4 text-3xl font-bold tracking-tight text-white sm:mt-6 sm:text-4xl md:text-5xl lg:text-6xl`}
                >
                  Contact Our Campus
                </h1>
                <p
                  className={`${revealClass('animate-load')} mt-4 text-sm leading-relaxed text-slate-100/90 sm:mt-6 sm:text-base md:text-lg`}
                >
                  Have questions about our programs, admissions, or campus life? Our teams across Kerala are ready to help you start your journey.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-8 lg:grid-cols-12 lg:mt-12">
            <div className="lg:col-span-12">
              <div className="flex flex-wrap gap-2 overflow-x-auto pb-2 scrollbar-hide">
                {campuses.map((campus) => (
                  <button
                    key={campus.id}
                    onClick={() => selectCampus(campus.id)}
                    className={`whitespace-nowrap rounded-lg px-4 py-2 text-sm font-semibold transition-all ${
                      activeId === campus.id
                        ? 'bg-[#0D2B6B] text-white shadow-md'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {campus.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-6 lg:col-span-5 lg:space-y-8">
              <div
                className={`${revealClass('animate-load-from-right')} overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-md`}
              >
                <div className="aspect-[16/10] bg-slate-100">
                  <iframe
                    title={`${activeCampus.name} Location`}
                    src={activeCampus.mapEmbedSrc}
                    className="h-full w-full grayscale-[0.2] transition-all hover:grayscale-0"
                    loading="lazy"
                    style={{ border: 0 }}
                  />
                </div>
                <div className="p-6 sm:p-8">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0D2B6B]/5 text-[#0D2B6B]">
                      <MapPin className="size-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-slate-900">Campus Address</h3>
                      <div className="mt-2 space-y-1 text-sm leading-relaxed text-slate-600">
                        {activeCampus.addressLines.map((line: string) => (
                          <p key={line}>{line}</p>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 h-px bg-slate-100" />

                  <div className="mt-8 grid gap-8 sm:grid-cols-2">
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0D2B6B]/5 text-[#0D2B6B]">
                        <Phone className="size-5" />
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-slate-900">Phone</h3>
                        <a
                          href={`tel:${activeCampus.phone.replace(/\s/g, '')}`}
                          className="mt-1 block text-sm text-slate-600 hover:text-[#0D2B6B] hover:underline"
                        >
                          {activeCampus.phone}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0D2B6B]/5 text-[#0D2B6B]">
                        <Mail className="size-5" />
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-slate-900">Email</h3>
                        <a
                          href={`mailto:${activeCampus.email}`}
                          className="mt-1 block text-sm text-slate-600 hover:text-[#0D2B6B] hover:underline"
                        >
                          {activeCampus.email}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div
                className={`${revealClass('animate-load')} rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 md:p-10`}
              >
                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-50 text-green-600">
                      <Mail className="size-8" />
                    </div>
                    <h2 className="mt-6 text-2xl font-bold text-slate-900">Message Sent!</h2>
                    <p className="mt-2 text-slate-600">
                      Thank you for contacting us. Our representative will get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => window.location.reload()}
                      className="mt-8 rounded-xl bg-[#0D2B6B] px-8 py-3 text-sm font-bold text-white shadow-lg transition-all hover:opacity-90 active:scale-95"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="mb-8">
                      <h2 className="text-2xl font-bold text-slate-900">Send us a Message</h2>
                      <p className="mt-2 text-sm text-slate-500">
                        Fill out the form below and we'll connect you with the right department.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
                          Full Name
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Your Name"
                          className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm outline-none transition-all focus:border-[#0D2B6B] focus:bg-white focus:ring-4 focus:ring-[#0D2B6B]/5"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
                          Email Address
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="name@example.com"
                          className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm outline-none transition-all focus:border-[#0D2B6B] focus:bg-white focus:ring-4 focus:ring-[#0D2B6B]/5"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="+91"
                          className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm outline-none transition-all focus:border-[#0D2B6B] focus:bg-white focus:ring-4 focus:ring-[#0D2B6B]/5"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
                          Subject
                        </label>
                        <select className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm outline-none transition-all focus:border-[#0D2B6B] focus:bg-white focus:ring-4 focus:ring-[#0D2B6B]/5">
                          <option>Admissions Inquiry</option>
                          <option>General Question</option>
                          <option>Career Guidance</option>
                          <option>Feedback</option>
                        </select>
                      </div>
                      <div className="space-y-1.5 sm:col-span-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
                          Message
                        </label>
                        <textarea
                          required
                          placeholder="How can we help you?"
                          className="min-h-[150px] w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition-all focus:border-[#0D2B6B] focus:bg-white focus:ring-4 focus:ring-[#0D2B6B]/5"
                        />
                      </div>
                      <button
                        type="submit"
                        className="group relative mt-2 flex h-14 items-center justify-center gap-3 overflow-hidden rounded-xl bg-[#0D2B6B] font-bold text-white shadow-lg transition-all hover:shadow-[#0D2B6B]/20 active:scale-[0.98] sm:col-span-2"
                      >
                        <span className="relative z-10">Send Message</span>
                        <div className="flex h-1.5 w-1.5 rounded-full bg-white transition-all group-hover:scale-[3]" />
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <EnquiryFormModal />
      <MobileAdmissionButton />
    </div>
  )
}
