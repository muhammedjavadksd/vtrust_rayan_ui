import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import AboutPage from './AboutPage.tsx'
import CoursesPage from './CoursesPage.tsx'
import CourseDetailPage from './CourseDetailPage.tsx'
import StudentLifePage from './StudentLifePage.tsx'
import CampusesPage from './CampusesPage.tsx'
import NewsEventsPage from './NewsEventsPage.tsx'
import NewsSinglePage from './NewsSinglePage.tsx'
import AlumniPage from './AlumniPage.tsx'
import ContactPage from './ContactPage.tsx'
import PrivacyPolicyPage from './PrivacyPolicyPage.tsx'
import TermsConditionsPage from './TermsConditionsPage.tsx'
import RefundPolicyPage from './RefundPolicyPage.tsx'
import { getCourseBySlug } from './data/courses.ts'
import { PageShell } from './components/PageShell.tsx'

const currentPath = window.location.pathname.replace(/\/+$/, '') || '/'
const isAboutPage = currentPath === '/about'
const isStudentLifePage = currentPath === '/student-life'
const isCampusesPage = currentPath === '/campuses'
const isNewsEventsPage = currentPath === '/news-events'
const isNewsSinglePage = currentPath.startsWith('/news/')
const isAlumniPage = currentPath === '/alumni'
const isContactPage = currentPath === '/contact'
const isPrivacyPolicyPage = currentPath === '/privacy-policy'
const isTermsConditionsPage = currentPath === '/terms-and-conditions'
const isRefundPolicyPage = currentPath === '/refund-policy'
const newsSlug = isNewsSinglePage
  ? currentPath.replace('/news/', '').trim()
  : ''
const isCoursesPage = currentPath === '/courses'
const isCourseDetailPage = currentPath.startsWith('/courses/')
const courseSlug = isCourseDetailPage
  ? currentPath.replace('/courses/', '').trim()
  : ''
const course = courseSlug ? getCourseBySlug(courseSlug) : undefined

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PageShell>
      {isAboutPage ? (
        <AboutPage />
      ) : isStudentLifePage ? (
        <StudentLifePage />
      ) : isCampusesPage ? (
        <CampusesPage />
      ) : isAlumniPage ? (
        <AlumniPage />
      ) : isContactPage ? (
        <ContactPage />
      ) : isPrivacyPolicyPage ? (
        <PrivacyPolicyPage />
      ) : isTermsConditionsPage ? (
        <TermsConditionsPage />
      ) : isRefundPolicyPage ? (
        <RefundPolicyPage />
      ) : isNewsSinglePage && newsSlug ? (
        <NewsSinglePage slug={newsSlug} />
      ) : isNewsEventsPage ? (
        <NewsEventsPage />
      ) : isCoursesPage ? (
        <CoursesPage />
      ) : isCourseDetailPage && course ? (
        <CourseDetailPage course={course} />
      ) : isCourseDetailPage ? (
        <CoursesPage />
      ) : (
        <App />
      )}
    </PageShell>
  </StrictMode>,
)
