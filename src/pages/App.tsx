import { Header } from '../components/Header'
import { Hero } from '../components/Hero'
import { StreamCardsSection } from '../components/StreamCardsSection'
import { ErrorBoundary } from '../components/ErrorBoundary'
import { CompanySection } from '../components/CompanySection'
import { VisionMissionSection } from '../components/VisionMissionSection'
import { JourneySection } from '../components/JourneySection'
import { SpecializedProgramsSection } from '../components/SpecializedProgramsSection'
import { WhyChooseSection } from '../components/WhyChooseSection'
import { TestimonialsSection } from '../components/TestimonialsSection'
import { WhyVtrustSection } from '../components/WhyVtrustSection'
import { LifeAtVTrustSection } from '../components/LifeAtVTrustSection'
import { NewsSection } from '../components/NewsSection'
import { FAQSection } from '../components/FAQSection'
import { Footer } from '../components/Footer'
import { EnquiryFormModal } from '../components/EnquiryFormModal'
import { WhatsAppFloatButton } from '../components/WhatsAppFloatButton'
import { MobileAdmissionButton } from '../components/MobileAdmissionButton'


function App() {
  return (
    <ErrorBoundary>
      <div className="flex min-h-svh flex-col bg-white">
        <Header />
        <main className="flex min-h-0 flex-1 flex-col">
          <ErrorBoundary>
            <Hero />
          </ErrorBoundary>
          <StreamCardsSection />
          <CompanySection />
        <VisionMissionSection />
        <WhyVtrustSection />
        <SpecializedProgramsSection />
        <JourneySection />
        <WhyChooseSection />
        <TestimonialsSection />
        <LifeAtVTrustSection />
        <NewsSection />
        <FAQSection />
        <Footer />
      </main>
      <EnquiryFormModal />
      <MobileAdmissionButton />
      <WhatsAppFloatButton />
      </div>
    </ErrorBoundary>
  )
}

export default App
