import { Helmet } from 'react-helmet-async'
import { useGetMyScholarshipApplicationsQuery, useGetApplicationStatusQuery } from '../../features/scholarship/applicationsApi'
import { Check, Clock, FileText } from 'lucide-react'
import dayjs from 'dayjs'

const statusColors = {
  draft: 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200',
  submitted: 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200',
  'under-review': 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200',
  shortlisted: 'bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200',
  interviewed: 'bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200',
  accepted: 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200',
  rejected: 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200',
  withdrawn: 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400',
}

const statusLabels = {
  draft: 'Draft',
  submitted: 'Submitted',
  'under-review': 'Under Review',
  shortlisted: 'Shortlisted',
  interviewed: 'Interviewed',
  accepted: 'Accepted',
  rejected: 'Rejected',
  withdrawn: 'Withdrawn',
}

export default function ApplicationTracker() {
  const { data: applications = [], isLoading } = useGetMyScholarshipApplicationsQuery()

  return (
    <>
      <Helmet>
        <title>Track Application - Scholarship Portal</title>
      </Helmet>

      <div className="min-h-screen py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-bold mb-8">My Applications</h1>

          {isLoading && (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-ahc-green mx-auto"></div>
              <p className="mt-4 text-gray-600 dark:text-gray-400">Loading applications...</p>
            </div>
          )}

          {!isLoading && applications.length > 0 && (
            <div className="space-y-6">
              {applications.map((application) => (
                <ApplicationCard key={application.id} application={application} />
              ))}
            </div>
          )}

          {!isLoading && applications.length === 0 && (
            <div className="text-center py-12 border-2 border-dashed rounded-lg">
              <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600 dark:text-gray-400 mb-4">No applications yet</p>
              <a href="/scholarship" className="text-ahc-green hover:underline">
                Browse available scholarships →
              </a>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

function ApplicationCard({ application }: { application: any }) {
  const { data: statusHistory = [] } = useGetApplicationStatusQuery(application.id || 0, {
    skip: !application.id
  })

  const currentStatus = application.status || 'draft'

  return (
    <div className="bg-white dark:bg-gray-900 p-6 rounded-lg border">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-xl font-semibold mb-1">
            {application.first_name} {application.last_name} - Scholarship Application
          </h3>
          {application.submitted_at && (
            <p className="text-sm text-gray-500">
              Submitted: {dayjs(application.submitted_at).format('MMMM D, YYYY')}
            </p>
          )}
        </div>
        <span className={`px-3 py-1 text-sm rounded-full ${statusColors[currentStatus]}`}>
          {statusLabels[currentStatus]}
        </span>
      </div>

      {/* Application Details */}
      <div className="mb-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <span className="text-gray-500">Email:</span>
            <span className="ml-2 font-medium">{application.email}</span>
          </div>
          <div>
            <span className="text-gray-500">Field:</span>
            <span className="ml-2 font-medium">{application.field_of_study}</span>
          </div>
          <div>
            <span className="text-gray-500">Institution:</span>
            <span className="ml-2 font-medium">{application.institution_name}</span>
          </div>
          <div>
            <span className="text-gray-500">Level:</span>
            <span className="ml-2 font-medium capitalize">{application.current_education_level?.replace('-', ' ')}</span>
          </div>
        </div>
      </div>

      {/* Progress Timeline */}
      {statusHistory.length > 0 ? (
        <div className="space-y-4 mt-6">
          {statusHistory.map((status, idx) => {
            const isLast = idx === statusHistory.length - 1
            const isCurrent = status.status === currentStatus
            const isCompleted = !isLast && !isCurrent
            
            return (
              <div key={idx} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    isCompleted
                      ? 'bg-green-500 text-white'
                      : isCurrent
                      ? 'bg-blue-500 text-white animate-pulse'
                      : 'bg-gray-300 dark:bg-gray-700'
                  }`}>
                    {isCompleted ? <Check className="w-4 h-4" /> : isCurrent ? <Clock className="w-4 h-4" /> : null}
                  </div>
                  {!isLast && (
                    <div className={`w-0.5 h-full mt-2 ${isCompleted ? 'bg-green-500' : 'bg-gray-300 dark:bg-gray-700'}`}></div>
                  )}
                </div>
                <div className="flex-1 pb-4">
                  <h4 className={`font-semibold ${!isCompleted && !isCurrent ? 'text-gray-400' : ''}`}>
                    {statusLabels[status.status] || status.status}
                  </h4>
                  <p className="text-sm text-gray-500">
                    {dayjs(status.timestamp).format('MMMM D, YYYY [at] h:mm A')}
                  </p>
                  {status.note && (
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{status.note}</p>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      ) : (
        // Default timeline if no status history
        <div className="space-y-4 mt-6">
          <div className="flex gap-4">
            <div className="flex flex-col items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                currentStatus !== 'draft' ? 'bg-green-500 text-white' : 'bg-blue-500 text-white'
              }`}>
                {currentStatus !== 'draft' ? <Check className="w-4 h-4" /> : <Clock className="w-4 h-4" />}
              </div>
              {currentStatus !== 'draft' && (
                <div className="w-0.5 h-full bg-green-500 mt-2"></div>
              )}
            </div>
            <div className="flex-1 pb-4">
              <h4 className="font-semibold">Application {currentStatus === 'draft' ? 'Draft' : 'Submitted'}</h4>
              <p className="text-sm text-gray-500">
                {application.submitted_at ? dayjs(application.submitted_at).format('MMMM D, YYYY') : 'In progress'}
              </p>
            </div>
          </div>

          {currentStatus !== 'draft' && (
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  ['accepted', 'rejected'].includes(currentStatus)
                    ? 'bg-green-500 text-white'
                    : 'bg-blue-500 text-white animate-pulse'
                }`}>
                  <Clock className="w-4 h-4" />
                </div>
                {!['accepted', 'rejected'].includes(currentStatus) && (
                  <div className="w-0.5 h-full bg-gray-300 mt-2"></div>
                )}
              </div>
              <div className="flex-1 pb-4">
                <h4 className="font-semibold">{statusLabels[currentStatus]}</h4>
                <p className="text-sm text-gray-500">In progress...</p>
              </div>
            </div>
          )}

          {!['accepted', 'rejected', 'withdrawn'].includes(currentStatus) && (
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 bg-gray-300 dark:bg-gray-700 rounded-full flex items-center justify-center"></div>
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-gray-400">Final Decision</h4>
                <p className="text-sm text-gray-400">Pending</p>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
