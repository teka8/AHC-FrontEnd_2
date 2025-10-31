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

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
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
      { path: '*', element: <NotFound /> },
    ],
  },
])
