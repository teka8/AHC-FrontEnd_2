import { baseApi } from '../../app/baseApi'

export interface DocumentItem {
  id: number
  title: string
  author?: string | null
  abstract?: string | null
  document_type?: string | null
  category?: string | null
  tags?: string[]
  publication_date?: string | null
  file_url?: string | null
  file_extension?: string | null
  mime_type?: string | null
  is_featured?: boolean
  published_at?: string | null
  download_count?: number
  view_count?: number
}

export interface OthersItem {
  id: number
  title: string
  creator?: string | null
  description?: string | null
  resource_type?: string | null
  subject_area?: string | null
  file_url?: string | null
  is_featured?: boolean
  published_at?: string | null
  download_count?: number
  view_count?: number
}

export interface EducationalItem {
  id: number
  title: string
  description?: string | null
  creator?: string | null
  resource_type?: string | null
  educational_level?: string | null
  subject_area?: string | null
  language?: string | null
  duration_minutes?: number | null
  thumbnail?: string | null
  file_url?: string | null
  embed_code?: string | null
  tags?: string[]
  is_featured?: boolean
  published_at?: string | null
  download_count?: number
  view_count?: number
}

export const resourcesApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getDocumentCategories: build.query<{ id: number | null; name: string; slug: string }[], void>({
      query: () => ({ url: '/v1/public/resources/documents/categories' }),
      transformResponse: (res: any) => Array.isArray(res?.data) ? res.data : (Array.isArray(res) ? res : []),
      providesTags: ['Page'],
    }),
    getEducationalById: build.query<EducationalItem | null, number>({
      query: (id) => ({ url: `/v1/public/resources/educational/${id}` }),
      transformResponse: (res: any) => (res?.data ?? res ?? null) as EducationalItem | null,
      providesTags: ['Page'],
    }),
    getOthersCategories: build.query<{ id: number | null; name: string; slug: string }[], void>({
      query: () => ({ url: '/v1/public/resources/others/categories' }),
      transformResponse: (res: any) => Array.isArray(res?.data) ? res.data : (Array.isArray(res) ? res : []),
      providesTags: ['Page'],
    }),
    getEducationalCategories: build.query<{ id: number | null; name: string; slug: string }[], void>({
      query: () => ({ url: '/v1/public/resources/educational/categories' }),
      transformResponse: (res: any) => Array.isArray(res?.data) ? res.data : (Array.isArray(res) ? res : []),
      providesTags: ['Page'],
    }),
    getDocuments: build.query<DocumentItem[], { search?: string; category?: string; type?: string; perPage?: number; page?: number } | void>({
      query: (args) => {
        const params = new URLSearchParams()
        const search = (args as any)?.search
        const category = (args as any)?.category
        const type = (args as any)?.type
        const perPage = (args as any)?.perPage ?? 50
        const page = (args as any)?.page ?? 1
        if (search) params.set('search', search)
        if (category) params.set('category', category)
        if (type) params.set('type', type)
        if (perPage) params.set('per_page', String(perPage))
        if (page) params.set('page', String(page))
        const qs = params.toString()
        return { url: `/v1/public/resources/documents${qs ? `?${qs}` : ''}` }
      },
      transformResponse: (res: any) => Array.isArray(res?.data) ? res.data as DocumentItem[] : (Array.isArray(res) ? res as DocumentItem[] : []),
      providesTags: ['Page'],
    }),
    getDocumentById: build.query<DocumentItem | null, number>({
      query: (id) => ({ url: `/v1/public/resources/documents/${id}` }),
      transformResponse: (res: any) => (res?.data ?? res ?? null) as DocumentItem | null,
      providesTags: ['Page'],
    }),
    getEducational: build.query<EducationalItem[], { search?: string; category?: string; type?: string; perPage?: number; page?: number } | void>({
      query: (args) => {
        const params = new URLSearchParams()
        const search = (args as any)?.search
        const category = (args as any)?.category
        const type = (args as any)?.type
        const perPage = (args as any)?.perPage ?? 50
        const page = (args as any)?.page ?? 1
        if (search) params.set('search', search)
        if (category) params.set('category', category)
        if (type) params.set('type', type)
        if (perPage) params.set('per_page', String(perPage))
        if (page) params.set('page', String(page))
        const qs = params.toString()
        return { url: `/v1/public/resources/educational${qs ? `?${qs}` : ''}` }
      },
      transformResponse: (res: any) => Array.isArray(res?.data) ? res.data as EducationalItem[] : (Array.isArray(res) ? res as EducationalItem[] : []),
      providesTags: ['Page'],
    }),
    getOthers: build.query<OthersItem[], { search?: string; category?: string; type?: string; perPage?: number; page?: number } | void>({
      query: (args) => {
        const params = new URLSearchParams()
        const search = (args as any)?.search
        const category = (args as any)?.category
        const type = (args as any)?.type
        const perPage = (args as any)?.perPage ?? 50
        const page = (args as any)?.page ?? 1
        if (search) params.set('search', search)
        if (category) params.set('category', category)
        if (type) params.set('type', type)
        if (perPage) params.set('per_page', String(perPage))
        if (page) params.set('page', String(page))
        const qs = params.toString()
        return { url: `/v1/public/resources/others${qs ? `?${qs}` : ''}` }
      },
      transformResponse: (res: any) => Array.isArray(res?.data) ? res.data as OthersItem[] : (Array.isArray(res) ? res as OthersItem[] : []),
      providesTags: ['Page'],
    }),
    getOtherById: build.query<OthersItem | null, number>({
      query: (id) => ({ url: `/v1/public/resources/others/${id}` }),
      transformResponse: (res: any) => (res?.data ?? res ?? null) as OthersItem | null,
      providesTags: ['Page'],
    }),
  }),
})

export const {
  useGetDocumentCategoriesQuery,
  useGetEducationalCategoriesQuery,
  useGetOthersCategoriesQuery,
  useGetDocumentsQuery,
  useGetDocumentByIdQuery,
  useGetEducationalQuery,
  useGetEducationalByIdQuery,
  useGetOthersQuery,
  useGetOtherByIdQuery,
} = resourcesApi
