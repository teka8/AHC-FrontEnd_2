import { baseApi } from '../../app/baseApi'

export interface MediaItem {
  id: number
  name?: string | null
  file_name?: string | null
  mime_type?: string | null
  size?: number | null
  collection?: string | null
  url: string
  created_at?: string | null
}

export const mediaApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getPublicMedia: build.query<{ data: MediaItem[]; meta?: any } | MediaItem[], { type?: string; collection?: string; page?: number; per_page?: number } | void>({
      query: (params) => ({ url: '/v1/public/media', params: params as any }),
    }),
  }),
})

export const { useGetPublicMediaQuery } = mediaApi
