import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './index.css'
import App from './pages/App.tsx'
import AboutPage from './pages/AboutPage.tsx'
import CoursesPage from './pages/CoursesPage.tsx'
import CourseDetailPage from './pages/CourseDetailPage.tsx'
import StudentLifePage from './pages/StudentLifePage.tsx'
import CampusesPage from './pages/CampusesPage.tsx'
import NewsEventsPage from './pages/NewsEventsPage.tsx'
import NewsSinglePage from './pages/NewsSinglePage.tsx'
import AlumniPage from './pages/AlumniPage.tsx'
import ContactPage from './pages/ContactPage.tsx'
import GalleryPage from './pages/GalleryPage.tsx'
import PrivacyPolicyPage from './pages/PrivacyPolicyPage.tsx'
import TermsConditionsPage from './pages/TermsConditionsPage.tsx'
import RefundPolicyPage from './pages/RefundPolicyPage.tsx'
import { PageShell } from './components/PageShell.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <PageShell>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/student-life" element={<StudentLifePage />} />
          <Route path="/campuses" element={<CampusesPage />} />
          <Route path="/alumni" element={<AlumniPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-and-conditions" element={<TermsConditionsPage />} />
          <Route path="/refund-policy" element={<RefundPolicyPage />} />
          <Route path="/news-events" element={<NewsEventsPage />} />
          <Route path="/news/:slug" element={<NewsSinglePage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/courses/:slug" element={<CourseDetailPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </PageShell>
    </BrowserRouter>
  </StrictMode>,
)
