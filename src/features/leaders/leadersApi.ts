import { baseApi } from '../../app/baseApi'

export interface LeaderItem {
  id: number
  type: 'leader' | 'team'
  name: string
  position: string
  image: string | null
  description: string | null
  linkedin_url: string | null
  sort_order: number
  created_at?: string | null
  updated_at?: string | null
}

export const leadersApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getLeaders: build.query<LeaderItem[], { type?: 'leader' | 'team' } | void>({
      query: (params) => {
        const type = params && typeof params === 'object' ? params.type : undefined
        return type ? `/v1/public/ahc-leaders?type=${type}` : '/v1/public/ahc-leaders'
      },
      transformResponse: (response: any) => {
        const payload = Array.isArray(response?.data)
          ? response.data
          : (Array.isArray(response) ? response : [])

        return payload.map((leader: any) => ({
          id: leader.id,
          type: leader.type ?? 'leader',
          name: leader.name ?? '',
          position: leader.position ?? '',
          image: leader.image ?? null,
          description: leader.description ?? null,
          linkedin_url: leader.linkedin_url ?? null,
          sort_order: leader.sort_order ?? 0,
          created_at: leader.created_at ?? null,
          updated_at: leader.updated_at ?? null,
        })) as LeaderItem[]
      },
      providesTags: ['AhcLeader'],
    }),
    getLeader: build.query<LeaderItem, number | string>({
      query: (id) => `/v1/public/ahc-leaders/${id}`,
      transformResponse: (response: any) => {
        const leader = response?.data ?? response ?? {}

        return {
          id: leader.id,
          type: leader.type ?? 'leader',
          name: leader.name ?? '',
          position: leader.position ?? '',
          image: leader.image ?? null,
          description: leader.description ?? null,
          linkedin_url: leader.linkedin_url ?? null,
          sort_order: leader.sort_order ?? 0,
          created_at: leader.created_at ?? null,
          updated_at: leader.updated_at ?? null,
        } as LeaderItem
      },
      providesTags: ['AhcLeader'],
    }),
  }),
})

export const { useGetLeadersQuery, useGetLeaderQuery } = leadersApi
