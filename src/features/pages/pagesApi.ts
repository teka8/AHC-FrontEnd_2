import { baseApi } from '../../app/baseApi'

export interface PageItem { id: number; title: string; slug: string; excerpt?: string; content?: string; section?: string }

export const pagesApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getPages: build.query<PageItem[], void>({
      query: () => ({ url: '/v1/pages' }),
      transformResponse: (response: any) => Array.isArray(response?.data) ? response.data as PageItem[] : (Array.isArray(response) ? response as PageItem[] : []),
      providesTags: ['Page'],
    }),
    getPageBySlug: build.query<PageItem, string>({
      query: (slug) => ({ url: `/v1/pages/slug/${slug}` }),
      transformResponse: (response: any) => (response?.data ? response.data as PageItem : response as PageItem),
      providesTags: (_r, _e, arg) => [{ type: 'Page', id: arg }] as any,
    }),
    getPagesBySection: build.query<PageItem[], string>({
      query: (section) => ({ url: `/v1/pages/section/${section}` }),
      transformResponse: (response: any) => Array.isArray(response?.data) ? response.data as PageItem[] : (Array.isArray(response) ? response as PageItem[] : []),
      providesTags: ['Page'],
    }),
  }),
})

export const { useGetPagesQuery, useGetPageBySlugQuery, useGetPagesBySectionQuery } = pagesApi
