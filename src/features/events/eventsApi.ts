import { baseApi } from '../../app/baseApi'

export interface EventItem {
  id: number
  title: string
  description?: string | null
  event_date?: string | null
  start_time?: string | null
  end_time?: string | null
  location?: string | null
  google_map_location_link?: string | null
  category?: string | null
  target_audience?: string | null
  event_type?: string | null
  status?: string | null
  cost_amount?: number | null
  register_on_site?: boolean | null
  registration_link?: string | null
  event_image?: string | null
  attachments?: Array<{ file_name?: string | null; path?: string | null; size?: number | null }>
}

export const eventsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getEvents: build.query<EventItem[], void>({
      query: () => ({ url: '/v1/events' }),
      transformResponse: (response: any) => Array.isArray(response?.data) ? response.data as EventItem[] : (Array.isArray(response) ? response as EventItem[] : []),
      providesTags: ['Event'],
    }),
    getEvent: build.query<EventItem, number | string>({
      query: (id) => ({ url: `/v1/events/${id}` }),
      transformResponse: (response: any) => (response?.data ? response.data as EventItem : response as EventItem),
      providesTags: (_r, _e, id) => [{ type: 'Event', id }] as any,
    }),
  }),
})

export const { useGetEventsQuery, useGetEventQuery } = eventsApi
