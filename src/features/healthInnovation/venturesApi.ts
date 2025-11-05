import { baseApi } from '../../app/baseApi'
import type { Venture, VentureFilters, VentureUpdate } from './types'

export const venturesApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getVentures: build.query<Venture[], VentureFilters | void>({
      query: (filters) => {
        const params = new URLSearchParams()
        if (filters) {
          if (filters.focus_area && filters.focus_area !== 'all') params.append('focus_area', filters.focus_area)
          if (filters.stage && filters.stage !== 'all') params.append('stage', filters.stage)
          if (filters.country) params.append('country', filters.country)
          if (filters.search) params.append('search', filters.search)
          if (filters.featured) params.append('featured', '1')
          if (filters.sort_by) params.append('sort_by', filters.sort_by)
        }
        return { url: `/v1/health-innovation/ventures?${params.toString()}` }
      },
      transformResponse: (response: any) => 
        Array.isArray(response?.data) ? response.data as Venture[] : (Array.isArray(response) ? response as Venture[] : []),
      providesTags: (result) =>
        result
          ? [...result.map(({ id }) => ({ type: 'Venture' as const, id })), { type: 'Venture', id: 'LIST' }]
          : [{ type: 'Venture', id: 'LIST' }],
    }),
    
    getVenture: build.query<Venture, number | string>({
      query: (id) => ({ url: `/v1/health-innovation/ventures/${id}` }),
      transformResponse: (response: any) => (response?.data ? response.data as Venture : response as Venture),
      providesTags: (_r, _e, id) => [{ type: 'Venture', id }],
    }),
    
    voteVenture: build.mutation<void, number>({
      query: (id) => ({
        url: `/v1/health-innovation/ventures/${id}/vote`,
        method: 'POST'
      }),
      invalidatesTags: (_r, _e, id) => [{ type: 'Venture', id }],
    }),
    
    getVentureUpdates: build.query<VentureUpdate[], { venture_id?: number; limit?: number }>({
      query: ({ venture_id, limit = 10 }) => {
        const params = new URLSearchParams()
        if (venture_id) params.append('venture_id', venture_id.toString())
        params.append('limit', limit.toString())
        return { url: `/v1/health-innovation/updates?${params.toString()}` }
      },
      transformResponse: (response: any) =>
        Array.isArray(response?.data) ? response.data as VentureUpdate[] : (Array.isArray(response) ? response as VentureUpdate[] : []),
      providesTags: ['VentureUpdate'],
    }),
  }),
  overrideExisting: false,
})

export const {
  useGetVenturesQuery,
  useGetVentureQuery,
  useVoteVentureMutation,
  useGetVentureUpdatesQuery,
} = venturesApi
