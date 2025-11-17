import { baseApi } from '../../app/baseApi'

export interface MediaPreviewItem {
  id: number
  type: string
  url: string
  thumb_url: string
}

export interface MediaBreadcrumb {
  id: number
  name: string
  slug: string
}

export interface MediaFolder {
  id: number
  uuid: string
  name: string
  slug: string
  description?: string | null
  parent_id?: number | null
  media_count: number
  children_count: number
  preview_media: MediaPreviewItem[]
  breadcrumbs?: MediaBreadcrumb[]
}

export interface MediaItem {
  id: number
  name?: string | null
  file_name?: string | null
  mime_type?: string | null
  type: string
  size?: number | null
  caption?: string | null
  url: string
  thumb_url: string
  created_at?: string | null
}

export interface MediaMeta {
  current_page: number
  per_page: number
  total: number
  last_page: number
}

export interface MediaCollection {
  data: MediaItem[]
  meta: MediaMeta
}

export interface PublicMediaResponse {
  folder: MediaFolder | null
  folders: MediaFolder[]
  media: MediaCollection | null
}

export interface GetPublicMediaParams {
  folder?: number | string
  type?: string
  page?: number
  per_page?: number
}

export const mediaApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getPublicMedia: build.query<PublicMediaResponse, GetPublicMediaParams | void>({
      query: (params) => {
        if (!params) {
          return { url: '/v1/public/media' }
        }

        const cleaned = Object.fromEntries(
          Object.entries(params).filter(([, value]) => value !== undefined && value !== null)
        )

        return { url: '/v1/public/media', params: cleaned }
      },
    }),
  }),
})

export const { useGetPublicMediaQuery } = mediaApi
