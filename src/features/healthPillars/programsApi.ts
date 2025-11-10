import { baseApi } from '../../app/baseApi'

export interface ProgramItem {
  id: number
  title: string
  host: string
  description: string
  state: string
  image: string | null
  image_thumb?: string | null
  categories: string[]
  category_labels: string[]
  has_image: boolean
  created_at?: string | null
  updated_at?: string | null
}

type ProgramQueryArgs = {
  category?: string
}

export const programsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getPrograms: build.query<ProgramItem[], ProgramQueryArgs | undefined>({
      query: (params) => ({
        url: '/v1/public/programs',
        params: params?.category ? { category: params.category } : undefined,
      }),
      transformResponse: (response: any) => {
        const payload = Array.isArray(response?.data)
          ? response.data
          : (Array.isArray(response) ? response : []);

        return payload.map((program: any) => ({
          ...program,
          image: program?.image ?? null,
          image_thumb: program?.image_thumb ?? null,
          categories: Array.isArray(program?.categories) ? program.categories : [],
          category_labels: Array.isArray(program?.category_labels) ? program.category_labels : [],
        })) as ProgramItem[];
      },
      providesTags: ['Page'],
    }),
  }),
})

export const { useGetProgramsQuery } = programsApi
