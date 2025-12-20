import { Helmet } from 'react-helmet-async'
import { useGetVentureUpdatesQuery } from '../../features/healthInnovation/venturesApi'
import { ThumbsUp, MessageCircle, Share2 } from 'lucide-react'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime)

const updateTypeColors = {
  milestone: 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200',
  funding: 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200',
  partnership: 'bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200',
  product: 'bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200',
  team: 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200',
  general: 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200',
}

const updateTypeLabels = {
  milestone: 'Milestone Achieved',
  funding: 'Funding News',
  partnership: 'Partnership',
  product: 'Product Update',
  team: 'Team Update',
  general: 'Update',
}

export default function ProgressUpdates() {
  const { data: updates = [], isLoading } = useGetVentureUpdatesQuery({ limit: 20 })

  return (
    <>
      <Helmet>
        <title>Progress Updates - Health Innovation & Entrepreneurship</title>
      </Helmet>

      <div className="min-h-screen py-12">
        <div className="container mx-auto px-4 max-w-5xl">
          <h1 className="text-4xl font-bold mb-8">Venture Progress Updates</h1>

          {/* Loading State */}
          {isLoading && (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-ahc-green mx-auto"></div>
              <p className="mt-4 text-gray-600 dark:text-gray-400">Loading updates...</p>
            </div>
          )}

          {/* Updates Feed */}
          {!isLoading && updates.length > 0 && (
            <div className="space-y-6">
              {updates.map((update) => (
                <article key={update.id} className="bg-white dark:bg-gray-800 p-6 rounded-lg border hover:shadow-lg transition">
                  <div className="flex items-start gap-4">
                    {/* Venture Logo */}
                    <div className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-full flex-shrink-0 flex items-center justify-center overflow-hidden">
                      {update.venture_logo ? (
                        <img src={update.venture_logo} alt={update.venture_name} className="w-full h-full object-cover" />
                      ) : (
                        <span className="text-lg font-bold text-gray-400">
                          {update.venture_name?.charAt(0) || 'V'}
                        </span>
                      )}
                    </div>
                    
                    <div className="flex-1">
                      {/* Header */}
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-semibold">{update.venture_name || 'Venture'}</h3>
                        <span className="text-xs text-gray-500">
                          • {dayjs(update.created_at).fromNow()}
                        </span>
                      </div>
                      
                      {/* Update Type Badge */}
                      <div className="mb-3">
                        <span className={`inline-block px-3 py-1 text-sm rounded-full ${updateTypeColors[update.update_type]}`}>
                          {updateTypeLabels[update.update_type]}
                        </span>
                      </div>
                      
                      {/* Title */}
                      {update.title && (
                        <h4 className="text-lg font-semibold mb-2">{update.title}</h4>
                      )}
                      
                      {/* Content */}
                      <p className="text-gray-700 dark:text-gray-300 mb-3 whitespace-pre-line">
                        {update.content}
                      </p>
                      
                      {/* Media */}
                      {update.media && update.media.length > 0 && (
                        <div className="mb-4 grid grid-cols-2 gap-2">
                          {update.media.slice(0, 4).map((mediaUrl, idx) => (
                            <img
                              key={idx}
                              src={mediaUrl}
                              alt={`Update media ${idx + 1}`}
                              className="rounded-lg w-full h-40 object-cover"
                            />
                          ))}
                        </div>
                      )}
                      
                      {/* Actions */}
                      <div className="flex gap-4 text-sm text-gray-500">
                        <button className="flex items-center gap-1 hover:text-ahc-green transition">
                          <ThumbsUp className="w-4 h-4" aria-hidden="true" />
                          <span>Like {update.likes_count ? `(${update.likes_count})` : ''}</span>
                        </button>
                        <button className="flex items-center gap-1 hover:text-ahc-green transition">
                          <MessageCircle className="w-4 h-4" aria-hidden="true" />
                          <span>Comment {update.comments_count ? `(${update.comments_count})` : ''}</span>
                        </button>
                        <button className="flex items-center gap-1 hover:text-ahc-green transition">
                          <Share2 className="w-4 h-4" aria-hidden="true" />
                          <span>Share</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}

          {/* Empty State */}
          {!isLoading && updates.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 dark:text-gray-400 mb-4">No updates yet</p>
              <p className="text-sm text-gray-500">Check back later for venture progress updates</p>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
