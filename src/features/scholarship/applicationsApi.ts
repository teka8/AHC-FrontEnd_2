import { baseApi } from '../../app/baseApi'
import type { ScholarshipApplication, ApplicationEvaluation, ApplicationStatus, ScholarshipAnalytics } from './types'

export const scholarshipApplicationsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createScholarshipApplication: build.mutation<{ id: number; message: string }, FormData>({
      query: (formData) => ({
        url: '/v1/scholarships/applications',
        method: 'POST',
        body: formData,
      }),
      invalidatesTags: ['ScholarshipApplication'],
    }),
    
    saveDraftScholarshipApplication: build.mutation<{ id: number; message: string }, Partial<ScholarshipApplication> & { id?: number }>({
      query: ({ id, ...data }) => ({
        url: id ? `/v1/scholarships/applications/${id}/draft` : '/v1/scholarships/applications/draft',
        method: id ? 'PATCH' : 'POST',
        body: data,
      }),
      invalidatesTags: ['ScholarshipApplication'],
    }),
    
    getMyScholarshipApplications: build.query<ScholarshipApplication[], void>({
      query: () => ({ url: '/v1/scholarships/applications/my' }),
      transformResponse: (response: any) =>
        Array.isArray(response?.data) ? response.data as ScholarshipApplication[] : (Array.isArray(response) ? response as ScholarshipApplication[] : []),
      providesTags: ['ScholarshipApplication'],
    }),
    
    getScholarshipApplication: build.query<ScholarshipApplication, number | string>({
      query: (id) => ({ url: `/v1/scholarships/applications/${id}` }),
      transformResponse: (response: any) => (response?.data ? response.data as ScholarshipApplication : response as ScholarshipApplication),
      providesTags: (_r, _e, id) => [{ type: 'ScholarshipApplication', id }],
    }),
    
    getApplicationStatus: build.query<ApplicationStatus[], number | string>({
      query: (applicationId) => ({ url: `/v1/scholarships/applications/${applicationId}/status` }),
      transformResponse: (response: any) =>
        Array.isArray(response?.data) ? response.data as ApplicationStatus[] : (Array.isArray(response) ? response as ApplicationStatus[] : []),
      providesTags: (_r, _e, id) => [{ type: 'ScholarshipApplication', id }],
    }),
    
    // Admin endpoints
    getAllApplications: build.query<ScholarshipApplication[], { scholarship_id?: number; status?: string } | void>({
      query: (params) => {
        const queryParams = new URLSearchParams()
        if (params && params.scholarship_id) queryParams.append('scholarship_id', params.scholarship_id.toString())
        if (params && params.status) queryParams.append('status', params.status)
        return { url: `/v1/scholarships/admin/applications?${queryParams.toString()}` }
      },
      transformResponse: (response: any) =>
        Array.isArray(response?.data) ? response.data as ScholarshipApplication[] : (Array.isArray(response) ? response as ScholarshipApplication[] : []),
      providesTags: ['ScholarshipApplication'],
    }),
    
    evaluateApplication: build.mutation<{ message: string }, Omit<ApplicationEvaluation, 'id' | 'created_at'>>({
      query: (data) => ({
        url: '/v1/scholarships/evaluations',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: (_r, _e, arg) => [{ type: 'ScholarshipApplication', id: arg.application_id }],
    }),
    
    getApplicationEvaluations: build.query<ApplicationEvaluation[], number | string>({
      query: (applicationId) => ({ url: `/v1/scholarships/applications/${applicationId}/evaluations` }),
      transformResponse: (response: any) =>
        Array.isArray(response?.data) ? response.data as ApplicationEvaluation[] : (Array.isArray(response) ? response as ApplicationEvaluation[] : []),
      providesTags: (_r, _e, id) => [{ type: 'ScholarshipApplication', id }],
    }),
    
    updateApplicationStatus: build.mutation<{ message: string }, { id: number; status: ScholarshipApplication['status']; note?: string }>({
      query: ({ id, ...data }) => ({
        url: `/v1/scholarships/applications/${id}/status`,
        method: 'PATCH',
        body: data,
      }),
      invalidatesTags: (_r, _e, arg) => [{ type: 'ScholarshipApplication', id: arg.id }],
    }),
    
    getScholarshipAnalytics: build.query<ScholarshipAnalytics, number | void>({
      query: (scholarshipId) => ({
        url: scholarshipId ? `/v1/scholarships/analytics/${scholarshipId}` : '/v1/scholarships/analytics'
      }),
      transformResponse: (response: any) => (response?.data ? response.data as ScholarshipAnalytics : response as ScholarshipAnalytics),
    }),
  }),
  overrideExisting: false,
})

export const {
  useCreateScholarshipApplicationMutation,
  useSaveDraftScholarshipApplicationMutation,
  useGetMyScholarshipApplicationsQuery,
  useGetScholarshipApplicationQuery,
  useGetApplicationStatusQuery,
  useGetAllApplicationsQuery,
  useEvaluateApplicationMutation,
  useGetApplicationEvaluationsQuery,
  useUpdateApplicationStatusMutation,
  useGetScholarshipAnalyticsQuery,
} = scholarshipApplicationsApi
