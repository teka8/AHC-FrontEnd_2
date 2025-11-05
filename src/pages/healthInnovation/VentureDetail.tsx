import { Helmet } from 'react-helmet-async'
import { useParams, Link } from 'react-router-dom'
import { useGetVentureQuery, useVoteVentureMutation } from '../../features/healthInnovation/venturesApi'
import { MapPin, Users, TrendingUp, Globe, ThumbsUp, ArrowLeft, ExternalLink } from 'lucide-react'

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
      <div className="min-h-screen py-12">
        <div className="container mx-auto px-4">
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-ahc-green mx-auto"></div>
            <p className="mt-4 text-gray-600 dark:text-gray-400">Loading venture details...</p>
          </div>
        </div>
      </div>
    )
  }

  if (!venture) {
    return (
      <div className="min-h-screen py-12">
        <div className="container mx-auto px-4">
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold mb-4">Venture Not Found</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              The venture you're looking for doesn't exist or has been removed.
            </p>
            <Link
              to="/health-innovation/ventures"
              className="inline-flex items-center gap-2 text-ahc-green hover:underline"
            >
              <ArrowLeft className="w-4 h-4" />
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

      <div className="min-h-screen py-12">
        <div className="container mx-auto px-4 max-w-5xl">
          {/* Back Button */}
          <Link
            to="/health-innovation/ventures"
            className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-ahc-green mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Ventures
          </Link>

          {/* Header */}
          <div className="mb-8">
            <div className="flex items-start gap-6 mb-6">
              {/* Logo */}
              <div className="w-24 h-24 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center overflow-hidden flex-shrink-0">
                {venture.logo ? (
                  <img src={venture.logo} alt={venture.name} className="w-full h-full object-cover" />
                ) : (
                  <span className="text-3xl font-bold text-gray-400">{venture.name.charAt(0)}</span>
                )}
              </div>

              {/* Title & Actions */}
              <div className="flex-1">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h1 className="text-3xl font-bold mb-2">{venture.name}</h1>
                    {venture.tagline && (
                      <p className="text-xl text-gray-600 dark:text-gray-400 italic">{venture.tagline}</p>
                    )}
                  </div>
                  
                  {venture.featured && (
                    <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 text-sm rounded">
                      ⭐ Featured
                    </span>
                  )}
                </div>

                {/* Focus Area & Stage */}
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-ahc-green/10 text-ahc-green rounded-full text-sm font-medium capitalize">
                    {venture.focus_area.replace('-', ' ')}
                  </span>
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm capitalize">
                    {venture.stage.replace('-', ' ')}
                  </span>
                </div>

                {/* Links */}
                <div className="flex flex-wrap gap-4">
                  {venture.website && (
                    <a
                      href={venture.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-ahc-green hover:underline"
                    >
                      <Globe className="w-4 h-4" />
                      Visit Website
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                  
                  <button
                    onClick={handleVote}
                    className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition"
                  >
                    <ThumbsUp className="w-4 h-4" />
                    <span>Support ({venture.votes_count || 0})</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            {venture.country && (
              <div className="border rounded-lg p-4">
                <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 mb-1">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">Location</span>
                </div>
                <p className="font-semibold">{venture.country}</p>
              </div>
            )}
            
            {venture.team_size && (
              <div className="border rounded-lg p-4">
                <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 mb-1">
                  <Users className="w-4 h-4" />
                  <span className="text-sm">Team Size</span>
                </div>
                <p className="font-semibold">{venture.team_size} members</p>
              </div>
            )}
            
            {venture.patients_impacted && (
              <div className="border rounded-lg p-4">
                <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 mb-1">
                  <TrendingUp className="w-4 h-4" />
                  <span className="text-sm">Patients Impacted</span>
                </div>
                <p className="font-semibold">{venture.patients_impacted.toLocaleString()}</p>
              </div>
            )}
            
            {venture.founded_year && (
              <div className="border rounded-lg p-4">
                <div className="text-gray-500 dark:text-gray-400 mb-1 text-sm">Founded</div>
                <p className="font-semibold">{venture.founded_year}</p>
              </div>
            )}
          </div>

          {/* Description */}
          <div className="border rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4">About</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {venture.description || 'No description available.'}
            </p>
          </div>

          {/* Team */}
          {venture.founders && (
            <div className="border rounded-lg p-6 mb-8">
              <h2 className="text-2xl font-bold mb-4">Team</h2>
              <div className="space-y-3">
                <div>
                  <h3 className="font-semibold text-gray-700 dark:text-gray-300">Founders</h3>
                  <p className="text-gray-600 dark:text-gray-400">{venture.founders}</p>
                </div>
              </div>
            </div>
          )}

          {/* Progress & Metrics */}
          {(venture.funding_raised || venture.patients_impacted || venture.countries_reached) && (
            <div className="border rounded-lg p-6 mb-8">
              <h2 className="text-2xl font-bold mb-4">Progress & Impact</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {venture.funding_raised && (
                  <div>
                    <h3 className="font-semibold text-gray-700 dark:text-gray-300 mb-1">Funding Raised</h3>
                    <p className="text-2xl font-bold text-ahc-green">
                      ${venture.funding_raised.toLocaleString()}
                    </p>
                  </div>
                )}
                
                {venture.patients_impacted && (
                  <div>
                    <h3 className="font-semibold text-gray-700 dark:text-gray-300 mb-1">Patients Impacted</h3>
                    <p className="text-2xl font-bold text-ahc-green">
                      {venture.patients_impacted.toLocaleString()}
                    </p>
                  </div>
                )}
                
                {venture.countries_reached && (
                  <div>
                    <h3 className="font-semibold text-gray-700 dark:text-gray-300 mb-1">Countries Reached</h3>
                    <p className="text-2xl font-bold text-ahc-green">
                      {venture.countries_reached}
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Videos */}
          {(venture.pitch_video || venture.demo_video) && (
            <div className="border rounded-lg p-6 mb-8">
              <h2 className="text-2xl font-bold mb-4">Videos</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {venture.pitch_video && (
                  <div>
                    <h3 className="font-semibold mb-2">Pitch Video</h3>
                    <div className="aspect-video bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
                      <video src={venture.pitch_video} controls className="w-full h-full" />
                    </div>
                  </div>
                )}
                
                {venture.demo_video && (
                  <div>
                    <h3 className="font-semibold mb-2">Demo Video</h3>
                    <div className="aspect-video bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
                      <video src={venture.demo_video} controls className="w-full h-full" />
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Images */}
          {venture.images && venture.images.length > 0 && (
            <div className="border rounded-lg p-6 mb-8">
              <h2 className="text-2xl font-bold mb-4">Gallery</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {venture.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`${venture.name} - ${index + 1}`}
                    className="w-full aspect-video object-cover rounded-lg"
                  />
                ))}
              </div>
            </div>
          )}

          {/* Social Links */}
          {venture.social_links && Object.keys(venture.social_links).length > 0 && (
            <div className="border rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-4">Connect</h2>
              <div className="flex flex-wrap gap-4">
                {venture.social_links.linkedin && (
                  <a
                    href={venture.social_links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition inline-flex items-center gap-2"
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
                    className="px-4 py-2 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition inline-flex items-center gap-2"
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
                    className="px-4 py-2 bg-blue-800 text-white rounded-lg hover:bg-blue-900 transition inline-flex items-center gap-2"
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
