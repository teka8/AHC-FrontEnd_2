import { baseApi } from '../../app/baseApi'

export interface ProgramItem {
  id: number
  title: string
  host: string
  country?: string | null
  description: string
  state: string
  image: string | null
  image_thumb?: string | null
  contact_name?: string | null
  contact_bio?: string | null
  contact_details?: string | null
  contact_people: ProgramContact[]
  partners_involved?: string | null
  categories: string[]
  category_labels: string[]
  has_image: boolean
  created_at?: string | null
  updated_at?: string | null
}

type ProgramQueryArgs = {
  category?: string
}

export interface ProgramContact {
  name: string
  bio: string
  contact: string
  image?: string | null
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
          country: program?.country ?? null,
          contact_name: program?.contact_name ?? null,
          contact_bio: program?.contact_bio ?? null,
          contact_details: program?.contact_details ?? null,
          contact_people: Array.isArray(program?.contact_people)
            ? program.contact_people.map((person: any) => ({
                name: person?.name ?? '',
                bio: person?.bio ?? '',
                contact: person?.contact ?? '',
                image: person?.image ?? null,
              }))
            : [],
          partners_involved: program?.partners_involved ?? null,
          categories: Array.isArray(program?.categories) ? program.categories : [],
          category_labels: Array.isArray(program?.category_labels) ? program.category_labels : [],
        })) as ProgramItem[];
      },
      providesTags: ['Page'],
    }),
    getProgram: build.query<ProgramItem, number | string>({
      query: (id) => ({ url: `/v1/public/programs/${id}` }),
      transformResponse: (response: any) => {
        const program = response?.data ?? response ?? {};

        return {
          ...program,
          image: program?.image ?? null,
          image_thumb: program?.image_thumb ?? null,
          country: program?.country ?? null,
          contact_name: program?.contact_name ?? null,
          contact_bio: program?.contact_bio ?? null,
          contact_details: program?.contact_details ?? null,
          contact_people: Array.isArray(program?.contact_people)
            ? program.contact_people.map((person: any) => ({
                name: person?.name ?? '',
                bio: person?.bio ?? '',
                contact: person?.contact ?? '',
                image: person?.image ?? null,
              }))
            : [],
          partners_involved: program?.partners_involved ?? null,
          categories: Array.isArray(program?.categories) ? program.categories : [],
          category_labels: Array.isArray(program?.category_labels) ? program.category_labels : [],
        } as ProgramItem;
      },
      providesTags: ['Page'],
    }),
  }),
})

export const { useGetProgramsQuery, useGetProgramQuery } = programsApi
