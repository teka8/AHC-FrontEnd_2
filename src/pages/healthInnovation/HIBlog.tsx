import { Helmet } from 'react-helmet-async'
import { useState } from 'react'
import { Calendar, Clock, ArrowRight, Search, BookOpen } from 'lucide-react'
import { useSubscribeMutation } from '../../features/subscriptions/subscriptionApi'
import { getImageWithFallback } from "../../utils/imageUtils";

const blogPosts = [
  {
    id: 1,
    title: 'The Future of Digital Health: Trends Shaping 2025',
    excerpt: 'Explore the emerging technologies and innovations transforming healthcare delivery, from AI diagnostics to personalized medicine.',
    category: 'Industry Insights',
    author: 'Dr. Sarah Johnson',
    date: '2025-10-15',
    readTime: '8 min read',
    image: '📱',
    featured: true,
  },
  {
    id: 2,
    title: 'Building a Successful HealthTech Startup: Lessons Learned',
    excerpt: 'Key insights from founders who successfully navigated the complex healthcare startup landscape.',
    category: 'Entrepreneurship',
    author: 'Michael Chen',
    date: '2025-10-10',
    readTime: '6 min read',
    image: '🚀',
    featured: true,
  },
  {
    id: 3,
    title: 'Regulatory Navigation: FDA Approval Process Simplified',
    excerpt: 'A comprehensive guide to understanding and preparing for FDA approval in medical device development.',
    category: 'Regulatory',
    author: 'Dr. Emily Rodriguez',
    date: '2025-10-05',
    readTime: '10 min read',
    image: '📋',
    featured: false,
  },
  {
    id: 4,
    title: 'Mental Health Tech: Breaking the Stigma',
    excerpt: 'How digital platforms are revolutionizing mental health access and reducing stigma worldwide.',
    category: 'Mental Health',
    author: 'Lisa Wang',
    date: '2025-09-28',
    readTime: '7 min read',
    image: '🧠',
    featured: false,
  },
  {
    id: 5,
    title: 'Funding Your Health Innovation: A Complete Guide',
    excerpt: 'From bootstrapping to Series A, learn the funding strategies that work for health ventures.',
    category: 'Funding',
    author: 'James Williams',
    date: '2025-09-20',
    readTime: '9 min read',
    image: '💰',
    featured: false,
  },
  {
    id: 6,
    title: 'AI in Healthcare: Opportunities and Challenges',
    excerpt: 'Examining the transformative potential of artificial intelligence in medical diagnosis and treatment.',
    category: 'Technology',
    author: 'Prof. David Lee',
    date: '2025-09-15',
    readTime: '12 min read',
    image: '🤖',
    featured: false,
  },
]

const categories = ['All', 'Industry Insights', 'Entrepreneurship', 'Regulatory', 'Mental Health', 'Funding', 'Technology']

export default function HIBlog() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')
  const [newsletterEmail, setNewsletterEmail] = useState('')
  const [newsletterFeedback, setNewsletterFeedback] = useState<{ type: 'success' | 'error'; message: string } | null>(null)
  const [subscribe, { isLoading: isSubscribing }] = useSubscribeMutation()

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const featuredPosts = filteredPosts.filter(post => post.featured)
  const regularPosts = filteredPosts.filter(post => !post.featured)

  return (
    <>
      <Helmet>
        <title>Blog - Health Innovation & Entrepreneurship</title>
        <meta name="description" content="Insights and stories from the world of health innovation" />
      </Helmet>

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-teal-50 via-green-50 to-emerald-100 dark:from-gray-900 dark:to-gray-800 py-20 overflow-hidden">
          {/* Decorative Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Large AHC Symbol - Center Background */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 opacity-5">
              <img 
                {...getImageWithFallback('images/ahc-health-symbol.png')} 
                alt="" 
                aria-hidden="true"
                className="w-full h-full object-contain"
              />
            </div>
            
            {/* Decorative Triangles */}
            <div className="absolute top-10 left-10 w-16 h-16 opacity-20" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}>
              <div className="w-full h-full bg-gradient-to-b from-teal-400 to-green-500"></div>
            </div>
            <div className="absolute bottom-10 right-10 w-20 h-20 opacity-20" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}>
              <div className="w-full h-full bg-gradient-to-b from-green-400 to-teal-500"></div>
            </div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              {/* Icon Badge */}
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-teal-400 to-green-500 mb-6 shadow-lg">
                <BookOpen className="w-10 h-10 text-white" aria-hidden="true" />
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
                HealthVentures Blog
              </h1>
              <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                Insights, stories, and knowledge from the world of health innovation
              </p>
              
              <div className="relative max-w-2xl mx-auto">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </div>
                <input
                  type="text"
                  placeholder="Search articles by title or topic..."
                  className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-all"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  aria-label="Search blog articles"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-5 py-2.5 rounded-xl font-medium transition-all duration-200 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-teal-500 to-green-500 text-white shadow-lg'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Articles */}
        {featuredPosts.length > 0 && (
          <section className="py-20 bg-white dark:bg-gray-900">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl lg:px-20 md:text-4xl font-bold mb-12 text-gray-900 dark:text-white">Featured Articles</h2>
              <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
                {featuredPosts.map((post) => (
                  <div key={post.id} className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 relative overflow-hidden group">
                    {/* Gradient accent border */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-400 via-green-400 to-teal-500"></div>
                    
                    <div className="flex items-start justify-between mb-6">
                      <div className="w-20 h-20 bg-gradient-to-br from-teal-50 to-green-50 dark:from-teal-900/30 dark:to-green-900/30 rounded-2xl flex items-center justify-center text-5xl shadow-md group-hover:scale-110 transition-transform duration-300">{post.image}</div>
                      <span className="bg-gradient-to-r from-teal-500 to-green-500 text-white px-4 py-1.5 rounded-full text-sm font-semibold shadow-md">{post.category}</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">{post.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400 mb-4 pb-4 border-b border-gray-200 dark:border-gray-700">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1.5 text-teal-500" aria-hidden="true" />
                          {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1.5 text-teal-500" aria-hidden="true" />
                          {post.readTime}
                        </div>
                      </div>
                    </div>
                    <p className="text-sm font-semibold mb-6 text-teal-600 dark:text-teal-400">By {post.author}</p>
                    <button className="w-full bg-gradient-to-r from-teal-500 to-green-500 hover:from-teal-600 hover:to-green-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group">
                      Read Article <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* All Articles */}
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl lg:px-20 md:text-4xl font-bold mb-12 text-gray-900 dark:text-white">All Articles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {regularPosts.map((post) => (
                <div key={post.id} className="bg-white dark:bg-gray-900 rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 relative overflow-hidden group">
                  {/* Gradient accent border - appears on hover */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-400 via-green-400 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-teal-50 to-green-50 dark:from-teal-900/30 dark:to-green-900/30 rounded-2xl flex items-center justify-center text-4xl shadow-md group-hover:scale-110 transition-transform duration-300">{post.image}</div>
                    <span className="bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 px-3 py-1 rounded-full text-xs font-semibold">{post.category}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">{post.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-3 pb-3 border-b border-gray-200 dark:border-gray-700">
                    <Calendar className="h-4 w-4 mr-1.5 text-teal-500" aria-hidden="true" />
                    {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                    <span className="mx-2">•</span>
                    <Clock className="h-4 w-4 mr-1.5 text-teal-500" aria-hidden="true" />
                    {post.readTime}
                  </div>
                  <p className="text-sm font-semibold mb-4 text-teal-600 dark:text-teal-400">By {post.author}</p>
                  <button className="w-full bg-white dark:bg-gray-800 border-2 border-teal-500 text-teal-600 dark:text-teal-400 px-4 py-2.5 rounded-xl text-sm font-semibold hover:bg-teal-50 dark:hover:bg-gray-700 transition-all duration-300 flex items-center justify-center group">
                    Read More <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-20 bg-gradient-to-br from-teal-50 via-green-50 to-emerald-100 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
          {/* Decorative Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Large AHC Symbol - Center Background */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 opacity-5">
              <img 
                {...getImageWithFallback('images/ahc-health-symbol.png')} 
                alt="" 
                aria-hidden="true"
                className="w-full h-full object-contain"
              />
            </div>
            
            {/* Decorative Triangles */}
            <div className="absolute top-10 left-10 w-16 h-16 opacity-20" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}>
              <div className="w-full h-full bg-gradient-to-b from-teal-400 to-green-500"></div>
            </div>
            <div className="absolute bottom-10 right-10 w-20 h-20 opacity-20" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}>
              <div className="w-full h-full bg-gradient-to-b from-green-400 to-teal-500"></div>
            </div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 sm:p-12 shadow-2xl text-center relative overflow-hidden">
                {/* Gradient accent border */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-400 via-green-400 to-teal-500"></div>
                
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">Stay Updated</h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
                  Subscribe to our newsletter for the latest insights on health innovation and exclusive content
                </p>
                <form
                  className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto"
                  onSubmit={async (event) => {
                    event.preventDefault()
                    setNewsletterFeedback(null)

                    try {
                      await subscribe({ email: newsletterEmail.trim() }).unwrap()
                      setNewsletterFeedback({ type: 'success', message: 'Thanks for subscribing! We will keep you updated with new stories.' })
                      setNewsletterEmail('')
                    } catch (error: any) {
                      const message =
                        error?.data?.message ??
                        (error?.status === 422
                          ? 'Please enter a valid email address.'
                          : 'We could not process your subscription right now. Please try again later.')

                      setNewsletterFeedback({ type: 'error', message })
                    }
                  }}
                >
                  <input 
                    type="email" 
                    placeholder="Enter your email address" 
                    value={newsletterEmail}
                    onChange={(event) => setNewsletterEmail(event.target.value)}
                    required
                    className="flex-1 px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-all"
                    aria-label="Email address"
                  />
                  <button
                    type="submit"
                    disabled={isSubscribing}
                    className="bg-gradient-to-r from-teal-500 to-green-500 hover:from-teal-600 hover:to-green-600 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubscribing ? 'Subscribing…' : 'Subscribe'}
                  </button>
                </form>
                {newsletterFeedback && (
                  <p
                    className={`mt-4 text-sm ${newsletterFeedback.type === 'success' ? 'text-white' : 'text-red-200'}`}
                    role="status"
                    aria-live="polite"
                  >
                    {newsletterFeedback.message}
                  </p>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
