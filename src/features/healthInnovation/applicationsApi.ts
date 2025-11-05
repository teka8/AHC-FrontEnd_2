import { baseApi } from '../../app/baseApi'
import type { VentureApplication } from './types'

export const applicationsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createApplication: build.mutation<{ id: number; message: string }, FormData>({
      query: (formData) => ({
        url: '/v1/health-innovation/applications',
        method: 'POST',
        body: formData,
      }),
      invalidatesTags: ['Application'],
    }),
    
    saveDraftApplication: build.mutation<{ id: number; message: string }, Partial<VentureApplication> & { id?: number }>({
      query: ({ id, ...data }) => ({
        url: id ? `/v1/health-innovation/applications/${id}/draft` : '/v1/health-innovation/applications/draft',
        method: id ? 'PATCH' : 'POST',
        body: data,
      }),
      invalidatesTags: ['Application'],
    }),
    
    getMyApplications: build.query<VentureApplication[], void>({
      query: () => ({ url: '/v1/health-innovation/applications/my' }),
      transformResponse: (response: any) =>
        Array.isArray(response?.data) ? response.data as VentureApplication[] : (Array.isArray(response) ? response as VentureApplication[] : []),
      providesTags: ['Application'],
    }),
    
    getApplication: build.query<VentureApplication, number | string>({
      query: (id) => ({ url: `/v1/health-innovation/applications/${id}` }),
      transformResponse: (response: any) => (response?.data ? response.data as VentureApplication : response as VentureApplication),
      providesTags: (_r, _e, id) => [{ type: 'Application', id }],
    }),
  }),
  overrideExisting: false,
})

export const {
  useCreateApplicationMutation,
  useSaveDraftApplicationMutation,
  useGetMyApplicationsQuery,
  useGetApplicationQuery,
} = applicationsApi
