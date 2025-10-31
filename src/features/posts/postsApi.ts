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
}

export const postsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getPublicPosts: build.query<PostItem[], { search?: string; perPage?: number; page?: number } | void>({
      query: (args) => {
        const search = args && 'search' in (args as any) ? (args as any).search : undefined
        const perPage = args && 'perPage' in (args as any) ? (args as any).perPage : 50
        const page = args && 'page' in (args as any) ? (args as any).page : 1
        const params = new URLSearchParams()
        if (search) params.set('search', search)
        if (perPage) params.set('per_page', String(perPage))
        if (page) params.set('page', String(page))
        const qs = params.toString()
        return { url: `/v1/public/posts${qs ? `?${qs}` : ''}` }
      },
      transformResponse: (response: any) => Array.isArray(response?.data) ? response.data as PostItem[] : (Array.isArray(response) ? response as PostItem[] : []),
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
