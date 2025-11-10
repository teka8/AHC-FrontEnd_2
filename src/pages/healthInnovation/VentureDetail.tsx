import { Helmet } from 'react-helmet-async'
import { useParams, Link } from 'react-router-dom'
import { useGetVentureQuery, useVoteVentureMutation } from '../../features/healthInnovation/venturesApi'
import { MapPin, Users, TrendingUp, Globe, ThumbsUp, ArrowLeft, ExternalLink, Rocket, Calendar } from 'lucide-react'

export default function VentureDetail() {
  const { id } = useParams<{ id: string }>()
  const { data: venture, isLoading } = useGetVentureQuery(id || '')
  const [voteVenture] = useVoteVentureMutation()

  const handleVote = async () => {
    if (!venture) return
    try {
      await voteVenture(venture.id).unwrap()
    } catch (error) {
      console.error('Failed to vote:', error)
    }
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center py-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-400 to-green-500 mb-6 animate-pulse">
              <Rocket className="w-8 h-8 text-white" />
            </div>
            <p className="text-xl text-gray-600 dark:text-gray-400">Loading venture details...</p>
          </div>
        </div>
      </div>
    )
  }

  if (!venture) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-2xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 mb-6">
              <Rocket className="w-10 h-10 text-gray-400" />
            </div>
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Venture Not Found</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              The venture you're looking for doesn't exist or has been removed.
            </p>
            <Link
              to="/health-pillars/health-entrepreneurship/ventures"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-teal-500 to-green-500 hover:from-teal-600 hover:to-green-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Ventures
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      <Helmet>
        <title>{venture.name} - Venture Showcase</title>
      </Helmet>

      <div className="min-h-screen overflow-hidden">
        {/* Hero Section with Back Button */}
        <section className="relative bg-gradient-to-br from-teal-50 via-green-50 to-emerald-100 dark:from-gray-900 dark:to-gray-800 py-12 overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/4 w-64 h-64 opacity-10 pointer-events-none">
            <img 
              src="/images/ahc-health-symbol.png" 
              alt="" 
              aria-hidden="true"
              className="w-full h-full object-contain"
              style={{ filter: 'brightness(0) saturate(100%) invert(69%) sepia(45%) saturate(476%) hue-rotate(117deg) brightness(91%) contrast(87%)' }}
            />
          </div>
          
          <div className="absolute right-0 top-1/4 translate-x-1/4 w-64 h-64 opacity-10 pointer-events-none">
            <img 
              src="/images/ahc-health-symbol.png" 
              alt="" 
              aria-hidden="true"
              className="w-full h-full object-contain"
              style={{ filter: 'brightness(0) saturate(100%) invert(69%) sepia(45%) saturate(476%) hue-rotate(117deg) brightness(91%) contrast(87%)' }}
            />
          </div>

          <div className="container mx-auto px-4 max-w-6xl relative z-10">
            {/* Back Button */}
            <Link
              to="/health-pillars/health-entrepreneurship/ventures"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-teal-50 dark:hover:bg-teal-900/30 hover:text-teal-600 dark:hover:text-teal-400 shadow-md hover:shadow-lg transition-all duration-300 mb-8 border border-gray-200 dark:border-gray-700"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Back to Ventures</span>
            </Link>

            {/* Header Card */}
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border-t-4 border-t-gradient-to-r from-teal-400 to-green-500">
              <div className="flex flex-col md:flex-row items-start gap-8">
                {/* Logo */}
                <div className="w-32 h-32 bg-gradient-to-br from-teal-50 to-green-50 dark:from-teal-900/30 dark:to-green-900/30 rounded-2xl flex items-center justify-center overflow-hidden flex-shrink-0 shadow-lg">
                  {venture.logo ? (
                    <img src={venture.logo} alt={venture.name} className="w-full h-full object-cover" />
                  ) : (
                    <span className="text-5xl font-bold bg-gradient-to-r from-teal-600 to-green-600 bg-clip-text text-transparent">
                      {venture.name.charAt(0)}
                    </span>
                  )}
                </div>

                {/* Title & Actions */}
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                    <div>
                      <h1 className="text-4xl md:text-5xl font-bold mb-3 text-gray-900 dark:text-white">
                        {venture.name}
                      </h1>
                      {venture.tagline && (
                        <p className="text-xl text-teal-600 dark:text-teal-400 font-medium italic">
                          {venture.tagline}
                        </p>
                      )}
                    </div>
                    
                    {venture.featured && (
                      <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-yellow-400 to-yellow-500 text-white text-sm font-semibold rounded-full shadow-md">
                        ⭐ Featured
                      </span>
                    )}
                  </div>

                  {/* Focus Area & Stage */}
                  <div className="flex flex-wrap gap-3 mb-6">
                    <span className="px-4 py-2 bg-gradient-to-br from-teal-50 to-green-50 dark:from-teal-900/30 dark:to-green-900/30 text-teal-700 dark:text-teal-300 rounded-xl text-sm font-semibold capitalize border border-teal-200 dark:border-teal-700">
                      {venture.focus_area.replace('-', ' ')}
                    </span>
                    <span className="px-4 py-2 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-900/50 text-blue-700 dark:text-blue-300 rounded-xl text-sm font-semibold capitalize border border-blue-200 dark:border-blue-700">
                      {venture.stage.replace('-', ' ')}
                    </span>
                  </div>

                  {/* Links */}
                  <div className="flex flex-wrap gap-3">
                    {venture.website && (
                      <a
                        href={venture.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-teal-500 to-green-500 hover:from-teal-600 hover:to-green-600 text-white rounded-xl font-medium shadow-md hover:shadow-lg transition-all duration-300"
                      >
                        <Globe className="w-5 h-5" />
                        Visit Website
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                    
                    <button
                      onClick={handleVote}
                      className="inline-flex items-center gap-2 px-5 py-2.5 border-2 border-gray-300 dark:border-gray-600 rounded-xl hover:bg-teal-50 dark:hover:bg-teal-900/30 hover:border-teal-500 dark:hover:border-teal-500 text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 font-medium transition-all duration-300"
                    >
                      <ThumbsUp className="w-5 h-5" />
                      <span>Support ({venture.votes_count || 0})</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <div className="container mx-auto px-4 max-w-6xl py-12">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {venture.country && (
              <div className="bg-gradient-to-br from-teal-50 to-green-50 dark:from-gray-800 dark:to-gray-750 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-400 to-green-500 flex items-center justify-center shadow-md">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-sm font-semibold text-gray-600 dark:text-gray-400">Location</span>
                </div>
                <p className="text-xl font-bold text-gray-900 dark:text-white">{venture.country}</p>
              </div>
            )}
            
            {venture.team_size && (
              <div className="bg-gradient-to-br from-green-50 to-teal-50 dark:from-gray-800 dark:to-gray-750 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-400 to-teal-500 flex items-center justify-center shadow-md">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-sm font-semibold text-gray-600 dark:text-gray-400">Team Size</span>
                </div>
                <p className="text-xl font-bold text-gray-900 dark:text-white">{venture.team_size} members</p>
              </div>
            )}
            
            {venture.patients_impacted && (
              <div className="bg-gradient-to-br from-teal-50 to-green-50 dark:from-gray-800 dark:to-gray-750 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-400 to-green-500 flex items-center justify-center shadow-md">
                    <TrendingUp className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-sm font-semibold text-gray-600 dark:text-gray-400">Patients Impacted</span>
                </div>
                <p className="text-xl font-bold text-gray-900 dark:text-white">{venture.patients_impacted.toLocaleString()}</p>
              </div>
            )}
            
            {venture.founded_year && (
              <div className="bg-gradient-to-br from-green-50 to-teal-50 dark:from-gray-800 dark:to-gray-750 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-400 to-teal-500 flex items-center justify-center shadow-md">
                    <Calendar className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-sm font-semibold text-gray-600 dark:text-gray-400">Founded</span>
                </div>
                <p className="text-xl font-bold text-gray-900 dark:text-white">{venture.founded_year}</p>
              </div>
            )}
          </div>

          {/* Description */}
          <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 mb-8 shadow-lg border-l-4 border-teal-500">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">About</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              {venture.description || 'No description available.'}
            </p>
          </div>

          {/* Team */}
          {venture.founders && (
            <div className="bg-gradient-to-br from-green-50 to-teal-50 dark:from-gray-800 dark:to-gray-750 rounded-3xl p-8 mb-8 shadow-lg">
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Team</h2>
              <div className="space-y-4">
                <div className="bg-white dark:bg-gray-700 rounded-2xl p-6 shadow-md">
                  <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">Founders</h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300">{venture.founders}</p>
                </div>
              </div>
            </div>
          )}

          {/* Progress & Metrics */}
          {(venture.funding_raised || venture.patients_impacted || venture.countries_reached) && (
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 mb-8 shadow-lg border-l-4 border-green-500">
              <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Progress & Impact</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {venture.funding_raised && (
                  <div className="bg-gradient-to-br from-teal-50 to-green-50 dark:from-gray-700 dark:to-gray-750 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
                    <h3 className="font-semibold text-gray-600 dark:text-gray-400 mb-3">Funding Raised</h3>
                    <p className="text-3xl font-bold bg-gradient-to-r from-teal-600 to-green-600 bg-clip-text text-transparent">
                      ${venture.funding_raised.toLocaleString()}
                    </p>
                  </div>
                )}
                
                {venture.patients_impacted && (
                  <div className="bg-gradient-to-br from-green-50 to-teal-50 dark:from-gray-700 dark:to-gray-750 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
                    <h3 className="font-semibold text-gray-600 dark:text-gray-400 mb-3">Patients Impacted</h3>
                    <p className="text-3xl font-bold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
                      {venture.patients_impacted.toLocaleString()}
                    </p>
                  </div>
                )}
                
                {venture.countries_reached && (
                  <div className="bg-gradient-to-br from-teal-50 to-green-50 dark:from-gray-700 dark:to-gray-750 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
                    <h3 className="font-semibold text-gray-600 dark:text-gray-400 mb-3">Countries Reached</h3>
                    <p className="text-3xl font-bold bg-gradient-to-r from-teal-600 to-green-600 bg-clip-text text-transparent">
                      {venture.countries_reached}
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Videos */}
          {(venture.pitch_video || venture.demo_video) && (
            <div className="bg-gradient-to-br from-teal-50 to-green-50 dark:from-gray-800 dark:to-gray-750 rounded-3xl p-8 mb-8 shadow-lg">
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Videos</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {venture.pitch_video && (
                  <div>
                    <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-white">Pitch Video</h3>
                    <div className="aspect-video bg-gray-900 dark:bg-gray-700 rounded-2xl overflow-hidden shadow-lg">
                      <video src={venture.pitch_video} controls className="w-full h-full" />
                    </div>
                  </div>
                )}
                
                {venture.demo_video && (
                  <div>
                    <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-white">Demo Video</h3>
                    <div className="aspect-video bg-gray-900 dark:bg-gray-700 rounded-2xl overflow-hidden shadow-lg">
                      <video src={venture.demo_video} controls className="w-full h-full" />
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Images */}
          {venture.images && venture.images.length > 0 && (
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 mb-8 shadow-lg border-l-4 border-green-500">
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Gallery</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {venture.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`${venture.name} - ${index + 1}`}
                    className="w-full aspect-video object-cover rounded-2xl shadow-md hover:shadow-xl transition-shadow"
                  />
                ))}
              </div>
            </div>
          )}

          {/* Social Links */}
          {venture.social_links && Object.keys(venture.social_links).length > 0 && (
            <div className="bg-gradient-to-br from-teal-100 via-green-100 to-emerald-100 dark:from-gray-750 dark:to-gray-800 rounded-3xl p-8 shadow-xl border-2 border-teal-300 dark:border-teal-700">
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Connect</h2>
              <div className="flex flex-wrap gap-4">
                {venture.social_links.linkedin && (
                  <a
                    href={venture.social_links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium shadow-md hover:shadow-lg transition-all inline-flex items-center gap-2"
                  >
                    LinkedIn
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
                
                {venture.social_links.twitter && (
                  <a
                    href={venture.social_links.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-sky-500 hover:bg-sky-600 text-white rounded-xl font-medium shadow-md hover:shadow-lg transition-all inline-flex items-center gap-2"
                  >
                    Twitter
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
                
                {venture.social_links.facebook && (
                  <a
                    href={venture.social_links.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-blue-800 hover:bg-blue-900 text-white rounded-xl font-medium shadow-md hover:shadow-lg transition-all inline-flex items-center gap-2"
                  >
                    Facebook
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
