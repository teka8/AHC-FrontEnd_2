import { baseApi } from '../../app/baseApi'

export interface SubscriptionPayload {
  email: string
  name?: string
  wants_news?: boolean
  wants_events?: boolean
  wants_announcements?: boolean
  wants_scholarships?: boolean
}

export interface SubscriptionResponse {
  message: string
  subscription: {
    email: string
    wants_news: boolean
    wants_events: boolean
    wants_announcements: boolean
    wants_scholarships: boolean
  }
}

export interface UnsubscribePayload {
  token: string
}

export interface UnsubscribeResponse {
  message: string
}

export const subscriptionApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    subscribe: build.mutation<SubscriptionResponse, SubscriptionPayload>({
      query: (body) => ({
        url: '/v1/subscriptions',
        method: 'POST',
        body,
      }),
    }),
    unsubscribe: build.mutation<UnsubscribeResponse, UnsubscribePayload>({
      query: (body) => ({
        url: '/v1/subscriptions/unsubscribe',
        method: 'POST',
        body,
      }),
    }),
  }),
})

export const { useSubscribeMutation, useUnsubscribeMutation } = subscriptionApi
