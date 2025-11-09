import { baseApi } from '../../app/baseApi'

export interface ProgramItem {
  id: number
  title: string
  host: string
  description: string
  state: string
  image: string | null
  has_image: boolean
  created_at?: string | null
  updated_at?: string | null
}

export const programsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getPrograms: build.query<ProgramItem[], void>({
      query: () => ({ url: '/v1/public/programs' }),
      transformResponse: (response: any) => Array.isArray(response?.data) ? response.data as ProgramItem[] : (Array.isArray(response) ? response as ProgramItem[] : []),
      providesTags: ['Page'],
    }),
  }),
})

export const { useGetProgramsQuery } = programsApi
