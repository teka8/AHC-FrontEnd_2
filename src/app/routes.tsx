import { createBrowserRouter } from 'react-router-dom'
import Layout from '../components/Layout'
import Home from '../pages/Home'
import About from '../pages/About'
import Resources from '../pages/Resources'
import NewsList from '../pages/NewsList'
import NewsDetail from '../pages/NewsDetail'
import EventsList from '../pages/EventsList'
import EventDetail from '../pages/EventDetail'
import Media from '../pages/Media'
import ResourceDetail from '../pages/ResourceDetail'
import Contact from '../pages/Contact'
import Login from '../pages/Login'
import Dashboard from '../pages/Dashboard'
import NotFound from '../pages/NotFound'
import Protected from '../components/Protected'
import VisionGoalsValues from '../pages/VisionGoalsValues'
import Partners from '../pages/Partners'
import HealthEmployment from '../pages/healthPillars/HealthEmployment' 
import HealthEntrepreneurship from '../pages/healthPillars/HealthEntrepreneurship'
import HealthEcosystems from '../pages/healthPillars/HealthEcosystems' 

// Health Innovation pages
import HILayout from '../components/healthInnovation/HILayout'
import HIHome from '../pages/healthInnovation/HIHome'
import HIPrograms from '../pages/healthInnovation/HIPrograms'
import HIServices from '../pages/healthInnovation/HIServices'
import HIAbout from '../pages/healthInnovation/HIAbout'
import HIBlog from '../pages/healthInnovation/HIBlog'
import HIContact from '../pages/healthInnovation/HIContact'
import HIDemo from '../pages/healthInnovation/HIDemo'
import HIPrivacy from '../pages/healthInnovation/HIPrivacy'
import HITerms from '../pages/healthInnovation/HITerms'
import VentureApplication from '../pages/healthInnovation/VentureApplication'
import VentureShowcase from '../pages/healthInnovation/VentureShowcase'
import VentureDetail from '../pages/healthInnovation/VentureDetail'
import ProgressUpdates from '../pages/healthInnovation/ProgressUpdates'

// Scholarship pages
import ScholarshipHome from '../pages/scholarship/ScholarshipHome'
import ApplicationForm from '../pages/scholarship/ApplicationForm'
import ApplicationTracker from '../pages/scholarship/ApplicationTracker'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      // Main site routes
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'vision-goals-values', element: <VisionGoalsValues /> },
      { path: 'partners', element: <Partners /> },
      { path: 'resources', element: <Resources /> },
      { path: 'resources/:section/:id', element: <ResourceDetail /> },
      { path: 'news', element: <NewsList /> },
      { path: 'news/:id', element: <NewsDetail /> },
      { path: 'events', element: <EventsList /> },
      { path: 'events/:id', element: <EventDetail /> },
      { path: 'media', element: <Media /> },
      { path: 'contact', element: <Contact /> },
      { path: 'login', element: <Login /> },
      { path: 'dashboard', element: <Protected><Dashboard /></Protected> },
      { path: 'health-pillars/health-employment', element: <HealthEmployment /> },
      // { path: 'health-pillars/health-entrepreneurship', element: <HealthEntrepreneurship /> },
      { path: 'health-pillars/health-ecosystems', element: <HealthEcosystems /> },
      
      // Scholarship routes
      { path: 'scholarship', element: <ScholarshipHome /> },
      { path: 'scholarship/apply', element: <ApplicationForm /> },
      { path: 'scholarship/track', element: <ApplicationTracker /> },
      
      { path: '*', element: <NotFound /> },
    ],
  },
  // Health Innovation routes with separate layout
  {
    path: 'health-pillars/health-entrepreneurship',
    element: <HILayout />,
    children: [
      { index: true, element: <HIHome /> },
      { path: 'programs', element: <HIPrograms /> },
      { path: 'services', element: <HIServices /> },
      { path: 'about', element: <HIAbout /> },
      { path: 'blog', element: <HIBlog /> },
      { path: 'contact', element: <HIContact /> },
      { path: 'demo', element: <HIDemo /> },
      { path: 'privacy', element: <HIPrivacy /> },
      { path: 'terms', element: <HITerms /> },
      { path: 'apply', element: <VentureApplication /> },
      { path: 'ventures', element: <VentureShowcase /> },
      { path: 'ventures/:id', element: <VentureDetail /> },
      { path: 'updates', element: <ProgressUpdates /> },
      {path: '*', element: <NotFound /> },
    ],
  },
])
