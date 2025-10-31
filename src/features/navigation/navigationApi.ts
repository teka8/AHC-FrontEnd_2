import { baseApi } from '../../app/baseApi'

export const navigationApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getNavigation: build.query<{ links: { label: string; path: string }[] }, void>({
      query: () => ({ url: '/v1/navigation' }),
      providesTags: ['Nav'],
    }),
    getFooter: build.query<any, void>({
      query: () => ({ url: '/v1/footer' }),
      providesTags: ['Footer'],
    }),
  }),
})

export const { useGetNavigationQuery, useGetFooterQuery } = navigationApi
