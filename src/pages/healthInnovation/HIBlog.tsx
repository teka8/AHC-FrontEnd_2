import { Helmet } from 'react-helmet-async'
import { useState } from 'react'
import { Calendar, Clock, ArrowRight, Search } from 'lucide-react'

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
        <section className="bg-gradient-to-r from-ahc-green to-green-600 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">HealthVentures Blog</h1>
              <p className="text-xl opacity-90 mb-8">
                Insights, stories, and knowledge from the world of health innovation
              </p>
              
              <div className="relative max-w-md mx-auto">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full pl-10 pr-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 border-b border-gray-200 dark:border-gray-700">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                    selectedCategory === category
                      ? 'bg-ahc-green text-white'
                      : 'border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-ahc-green'
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
          <section className="py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-8">Featured Articles</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {featuredPosts.map((post) => (
                  <div key={post.id} className="border-2 border-gray-200 dark:border-gray-700 rounded-lg hover:border-ahc-green transition hover:shadow-xl p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-6xl">{post.image}</div>
                      <span className="bg-ahc-green text-white px-3 py-1 rounded-full text-sm font-medium">{post.category}</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{post.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400 mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {post.readTime}
                        </div>
                      </div>
                    </div>
                    <p className="text-sm font-medium mb-4">By {post.author}</p>
                    <button className="w-full border-2 border-ahc-green text-ahc-green px-6 py-2 rounded-lg font-medium hover:bg-ahc-green hover:text-white transition flex items-center justify-center">
                      Read Article <ArrowRight className="ml-2 h-4 w-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* All Articles */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">All Articles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularPosts.map((post) => (
                <div key={post.id} className="border border-gray-200 dark:border-gray-700 rounded-lg hover:border-ahc-green transition hover:shadow-lg p-6 bg-white dark:bg-ahc-dark">
                  <div className="flex items-start justify-between mb-3">
                    <div className="text-5xl">{post.image}</div>
                    <span className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-xs font-medium">{post.category}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">{post.excerpt}</p>
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-3">
                    <Calendar className="h-4 w-4 mr-1" />
                    {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                    <span className="mx-2">•</span>
                    <Clock className="h-4 w-4 mr-1" />
                    {post.readTime}
                  </div>
                  <p className="text-sm font-medium mb-4">By {post.author}</p>
                  <button className="w-full border border-ahc-green text-ahc-green px-4 py-2 rounded-lg text-sm font-medium hover:bg-ahc-green hover:text-white transition flex items-center justify-center">
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest insights on health innovation
            </p>
            <div className="flex gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-ahc-green"
              />
              <button className="bg-ahc-green text-white px-6 py-3 rounded-lg font-medium hover:bg-ahc-green/90 transition">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
