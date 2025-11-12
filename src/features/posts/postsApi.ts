import { baseApi } from '../../app/baseApi'

export interface PostItem {
  id: number
  title: string
  slug: string
  content?: string | null
  excerpt?: string | null
  featured_image?: string | null
  status?: string | null
  published_at?: string | null
  pillars?: string[]
  pillar_labels?: string[]
}

export const postsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getPublicPosts: build.query<
      PostItem[],
      { search?: string; perPage?: number; page?: number; pillar?: string | string[] } | void
    >({
      query: (args) => {
        const search = args && 'search' in (args as any) ? (args as any).search : undefined
        const perPage = args && 'perPage' in (args as any) ? (args as any).perPage : 50
        const page = args && 'page' in (args as any) ? (args as any).page : 1
        const pillar = args && 'pillar' in (args as any) ? (args as any).pillar : undefined
        const params = new URLSearchParams()
        if (search) params.set('search', search)
        if (perPage) params.set('per_page', String(perPage))
        if (page) params.set('page', String(page))
        if (pillar) {
          if (Array.isArray(pillar)) {
            pillar.filter(Boolean).forEach((value) => params.append('pillar[]', value))
          } else {
            params.set('pillar', pillar)
          }
        }
        const qs = params.toString()
        return { url: `/v1/public/posts${qs ? `?${qs}` : ''}` }
      },
      transformResponse: (response: any) => {
        const payload = Array.isArray(response?.data?.data)
          ? response.data.data
          : Array.isArray(response?.data)
            ? response.data
            : Array.isArray(response)
              ? response
              : []

        const mapped = (payload as any[]).map((item) => ({
          ...item,
          pillars: Array.isArray(item?.pillars) ? item.pillars : [],
          pillar_labels: Array.isArray(item?.pillar_labels) ? item.pillar_labels : [],
        })) as PostItem[]
        
        return {
          data: mapped,
          meta: response?.data?.meta,
        }
      },
      providesTags: ['Page'],
    }),
    getPublicPost: build.query<PostItem, number | string>({
      query: (id) => ({ url: `/v1/public/posts/${id}` }),
      transformResponse: (response: any) => (response?.data ? response.data as PostItem : response as PostItem),
      providesTags: (_r, _e, id) => [{ type: 'Page', id }] as any,
    }),
  }),
})

export const { useGetPublicPostsQuery, useGetPublicPostQuery } = postsApi
