import { baseApi } from '../../app/baseApi'

export interface PageItem {
  id: number;
  title: string;
  slug: string;
  excerpt?: string;
  content?: string;
  hero_description?: string;
  hero_image?: string;
  section?: string;
  is_custom_section?: boolean;
  meta_title?: string;
  meta_description?: string;
  show_in_nav?: boolean;
  show_in_footer?: boolean;
}

export interface NavigationPage {
  id: number;
  title: string;
  slug: string;
  section: string;
  is_custom_section: boolean;
  hero_description?: string;
  hero_image?: string;
  url: string;
}

export const pagesApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getPages: build.query<PageItem[], void>({
      query: () => ({ url: '/v1/pages' }),
      transformResponse: (response: any) => Array.isArray(response?.data) ? response.data as PageItem[] : (Array.isArray(response) ? response as PageItem[] : []),
      providesTags: ['Page'],
    }),
    getPageBySlug: build.query<PageItem, string>({
      query: (slug) => ({ url: `/v1/pages/slug/${slug}` }),
      transformResponse: (response: any) => {
        console.log('getPageBySlug raw response:', response)
        return response?.page ? response.page as PageItem : (response?.data ? response.data as PageItem : response as PageItem)
      },
      providesTags: (_r, _e, arg) => [{ type: 'Page', id: arg }] as any,
    }),
    getPagesBySection: build.query<PageItem[], string>({
      query: (section) => ({ url: `/v1/pages/section/${section}` }),
      transformResponse: (response: any) => {
        const pages = response?.pages || response?.data || response;
        return Array.isArray(pages) ? pages as PageItem[] : [];
      },
      providesTags: ['Page'],
    }),
    getNavigationPages: build.query<NavigationPage[], void>({
      query: () => ({ url: '/v1/navigation' }),
      transformResponse: (response: any) => {
        const pages = response?.pages || response?.data || response;
        return Array.isArray(pages) ? pages as NavigationPage[] : [];
      },
      providesTags: ['Page'],
      keepUnusedDataFor: 300,
    }),
    getFooterPages: build.query<NavigationPage[], void>({
      query: () => ({ url: '/v1/footer' }),
      transformResponse: (response: any) => {
        const pages = response?.pages || response?.data || response;
        return Array.isArray(pages) ? pages as NavigationPage[] : [];
      },
      providesTags: ['Page'],
      keepUnusedDataFor: 300,
    }),
  }),
})

export const { 
  useGetPagesQuery, 
  useGetPageBySlugQuery, 
  useGetPagesBySectionQuery,
  useGetNavigationPagesQuery,
  useGetFooterPagesQuery
} = pagesApi
