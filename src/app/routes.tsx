import { createBrowserRouter } from 'react-router-dom'
import Layout from '../components/Layout'
import Home from '../pages/Home'
import About from '../pages/About'
import Resources from '../pages/Resources'
import NewsList from '../pages/NewsList'
import NewsDetail from '../pages/NewsDetail'

import AhcLeaders from '../pages/AhcLeaders'
import AhcTeam from '../pages/AhcTeam'
import ValuesandPrinciples from '../pages/ValuesandPrinciples'
import AhcLeaderDetail from "../pages/AhcLeaderDetail"

import Announcements from '../pages/Announcements'

import EventsList from '../pages/EventsList'
import EventDetail from '../pages/EventDetail'
import Media from '../pages/Media'
import ResourceDetail from '../pages/ResourceDetail'
import Contact from '../pages/Contact'
import Login from '../pages/Login'
import Dashboard from '../pages/Dashboard'
import NotFound from '../pages/NotFound'
import Unsubscribe from '../pages/Unsubscribe'
import Protected from '../components/Protected'
import VisionGoalsValues from '../pages/VisionGoalsValues'
import Partners from '../pages/Partners'
import HealthEmployment from '../pages/healthPillars/HealthEmployment' 
import HealthEntrepreneurship from '../pages/healthPillars/HealthEntrepreneurship'
import HealthEcosystems from '../pages/healthPillars/HealthEcosystems' 
import Programs from '../pages/Programs'
import ProgramDetail from '../pages/ProgramDetail'

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
import ScholarshipDetail from '../pages/scholarship/ScholarshipDetail'
import {PartnerDetail} from '../pages/PartnerDetail'
import LocalPartners from '../pages/LocalPartners'
import DynamicPage from '../pages/DynamicPage'
import { CookiePreferences } from '../pages/CookiePreferences'
import { PrivacyPolicy } from '../pages/PrivacyPolicy'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      // Main site routes
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      //{ path: 'vision-goals-values', element: <VisionGoalsValues /> },
      { path: 'partners', element: <Partners /> },
      { path: 'local-partners', element: <LocalPartners /> },
      { path: 'local-partners/:name', element: <PartnerDetail /> },
      { path: 'resources', element: <Resources /> },
      { path: 'resources/:section/:id', element: <ResourceDetail /> },
      { path: 'news', element: <NewsList /> },
      { path: 'news/:id', element: <NewsDetail /> },
      { path: 'announcement', element: <Announcements /> },
      { path: 'announcement/:id', element: <NewsDetail /> },
      { path: 'events', element: <EventsList /> },
      { path: 'events/:id', element: <EventDetail /> },
      { path: 'media', element: <Media /> },
      { path: 'contact', element: <HIContact /> },
      { path: 'unsubscribe', element: <Unsubscribe /> },
      { path: 'login', element: <Login /> },
      { path: 'dashboard', element: <Protected><Dashboard /></Protected> },
      { path: 'programs', element: <Programs /> },
      { path: 'programs/:id', element: <ProgramDetail /> },
      { path: 'health-pillars/health-employment', element: <HealthEmployment /> },
      { path: 'health-pillars/health-entrepreneurship', element: <HealthEntrepreneurship /> },
      { path: 'health-pillars/health-entrepreneurship/ventures', element: <VentureShowcase /> },
      { path: 'health-pillars/health-entrepreneurship/apply', element: <VentureApplication /> },
      { path: 'health-pillars/health-entrepreneurship/contact', element: <HIContact /> }, 
      { path: 'health-pillars/health-entrepreneurship/demo', element: <HIDemo /> },
      { path: 'health-pillars/health-ecosystems', element: <HealthEcosystems /> },
      {path: 'partners/:name', element: <PartnerDetail /> },
      
      // Scholarship routes
      { path: 'scholarship', element: <ScholarshipHome /> },
      { path: 'scholarship/apply', element: <ApplicationForm /> },
      { path: 'scholarship/track', element: <ApplicationTracker /> },
      { path: 'scholarship/:id', element: <ScholarshipDetail /> },
      
      { path: '*', element: <NotFound /> },
//about us ,ahc , values routes
 { path: 'ahcleaders', element: <AhcLeaders /> },
 { path: 'ahc-team', element: <AhcTeam /> },
 {path:'valuesandprinciples' ,element:<ValuesandPrinciples/>},
 {path:'/ahc-leaders/:id' ,element:<AhcLeaderDetail/>},

      // Dynamic pages route
      { path: 'pages/:slug', element: <DynamicPage /> },

      // Cookie & Privacy pages
      { path: 'cookie-preferences', element: <CookiePreferences /> },
      { path: 'privacy-policy', element: <PrivacyPolicy /> },

    ],
  },
]);
