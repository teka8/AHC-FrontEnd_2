import { baseApi } from '../../app/baseApi'
import type { Scholarship } from './types'

export const scholarshipsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getScholarships: build.query<Scholarship[], { status?: Scholarship['status'] } | void>({
      query: (params) => {
        const queryParams = new URLSearchParams()
        if (params && params.status) queryParams.append('status', params.status)
        return { url: `/v1/scholarships?${queryParams.toString()}` }
      },
      transformResponse: (response: any) =>
        Array.isArray(response?.data) ? response.data as Scholarship[] : (Array.isArray(response) ? response as Scholarship[] : []),
      providesTags: (result) =>
        result
          ? [...result.map(({ id }) => ({ type: 'Scholarship' as const, id })), { type: 'Scholarship', id: 'LIST' }]
          : [{ type: 'Scholarship', id: 'LIST' }],
    }),
    
    getScholarship: build.query<Scholarship, number | string>({
      query: (id) => ({ url: `/v1/scholarships/${id}` }),
      transformResponse: (response: any) => (response?.data ? response.data as Scholarship : response as Scholarship),
      providesTags: (_r, _e, id) => [{ type: 'Scholarship', id }],
    }),
  }),
  overrideExisting: false,
})

export const {
  useGetScholarshipsQuery,
  useGetScholarshipQuery,
} = scholarshipsApi
