import { baseApi } from '../../app/baseApi'

export interface PostItem {
  id: number
  title: string
  slug: string
  content?: string | null
  excerpt?: string | null
  featured_image?: string | null
  post_type?: string | null
  status?: string | null
  published_at?: string | null
  pillars?: string[]
  pillar_labels?: string[]
  gallery?: Array<Record<string, any>>
  terms?: PostTerm[]
}

export interface PostTerm {
  id: number
  name: string
  slug: string
  taxonomy?: string | null
}

export interface PostCategorySummary {
  id: number
  name: string
  slug: string
}

export interface PostListResponse {
  data: PostItem[]
  meta: any
  links?: any
  filters?: {
    categories?: PostCategorySummary[]
  }
}

export const postsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getPublicPosts: build.query<
      PostListResponse,
      { search?: string; perPage?: number; page?: number; pillar?: string | string[]; postType?: string | string[]; category?: string } | void
    >({
      query: (args) => {
        const search = args && 'search' in (args as any) ? (args as any).search : undefined
        const perPage = args && 'perPage' in (args as any) ? (args as any).perPage : 50
        const page = args && 'page' in (args as any) ? (args as any).page : 1
        const pillar = args && 'pillar' in (args as any) ? (args as any).pillar : undefined
        const postType = args && 'postType' in (args as any) ? (args as any).postType : undefined
        const category = args && 'category' in (args as any) ? (args as any).category : undefined
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
        if (postType) {
          if (Array.isArray(postType)) {
            postType.filter(Boolean).forEach((value) => params.append('type[]', value))
          } else {
            params.set('type', postType)
          }
        }
        if (category) params.set('category', category)
        const qs = params.toString()
        return { url: `/v1/public/posts${qs ? `?${qs}` : ''}` }
      },
      transformResponse: (response: any) => {
        if (Array.isArray(response?.data)) {
          // When the API returns a paginated response
          const payload = response.data;
          const mapped = (payload as any[]).map((item) => ({
            ...item,
            pillars: Array.isArray(item?.pillars) ? item.pillars : [],
            pillar_labels: Array.isArray(item?.pillar_labels) ? item.pillar_labels : [],
            terms: Array.isArray(item?.terms)
              ? item.terms.map((term: any) => ({
                  id: term?.id,
                  name: term?.name ?? '',
                  slug: term?.slug ?? '',
                  taxonomy: term?.taxonomy ?? null,
                }))
              : [],
          })) as PostItem[];

          return {
            data: mapped,
            meta: response?.meta,
            links: response?.links,
            filters: response?.filters,
          };
        } else if (Array.isArray(response)) {
          // When the API returns a simple array
          const mapped = (response as any[]).map((item) => ({
            ...item,
            pillars: Array.isArray(item?.pillars) ? item.pillars : [],
            pillar_labels: Array.isArray(item?.pillar_labels) ? item.pillar_labels : [],
            terms: Array.isArray(item?.terms)
              ? item.terms.map((term: any) => ({
                  id: term?.id,
                  name: term?.name ?? '',
                  slug: term?.slug ?? '',
                  taxonomy: term?.taxonomy ?? null,
                }))
              : [],
          })) as PostItem[];

          return {
            data: mapped,
            meta: null, // No meta data in this case
          filters: undefined,
          };
        }

        // Default empty response
        return {
          data: [],
          meta: null,
          filters: undefined,
        };
      },
      providesTags: ['Page'],
    }),
    getPublicPost: build.query<PostItem, number | string>({
      query: (id) => ({ url: `/v1/public/posts/${id}` }),
      transformResponse: (response: any) => {
        const payload = response?.data ?? response;
        const normalized = {
          ...payload,
          pillars: Array.isArray(payload?.pillars) ? payload.pillars : [],
          pillar_labels: Array.isArray(payload?.pillar_labels) ? payload.pillar_labels : [],
          terms: Array.isArray(payload?.terms)
            ? payload.terms.map((term: any) => ({
                id: term?.id,
                name: term?.name ?? '',
                slug: term?.slug ?? '',
                taxonomy: term?.taxonomy ?? null,
              }))
            : [],
        } as PostItem;

        return normalized;
      },
      providesTags: (_r, _e, id) => [{ type: 'Page', id }] as any,
    }),
  }),
})

export const { useGetPublicPostsQuery, useGetPublicPostQuery } = postsApi
