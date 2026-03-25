import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { ClinicalLearningCard } from './components/ClinicalLearningCard'
import { JourneySection } from './components/JourneySection'
import { SpecializedProgramsSection } from './components/SpecializedProgramsSection'
import { WhyChooseSection } from './components/WhyChooseSection'
import { TestimonialsSection } from './components/TestimonialsSection'
import { WhyVtrustSection } from './components/WhyVtrustSection'
import { LifeAtVTrustSection } from './components/LifeAtVTrustSection'
import { NewsSection } from './components/NewsSection'
import { FAQSection } from './components/FAQSection'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="flex min-h-svh flex-col bg-white">
      <Header />
      <main className="flex min-h-0 flex-1 flex-col">
        <Hero />
        <WhyVtrustSection />
        <ClinicalLearningCard />
        <SpecializedProgramsSection />
        <JourneySection />
        <WhyChooseSection />
        <TestimonialsSection />
        <ClinicalLearningCard />
        <LifeAtVTrustSection />
        <NewsSection />
        <FAQSection />
        <Footer />
      </main>
    </div>
  )
}

export default App
