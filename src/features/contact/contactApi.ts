import { baseApi } from '../../app/baseApi'

export interface ContactMessageRequest {
  first_name: string
  last_name: string
  email: string
  subject: string
  message: string
}

export interface ContactMessageResponse {
  success: boolean
  message: string
  data: {
    id: number
  }
}

export const contactApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    submitContactMessage: builder.mutation<ContactMessageResponse, ContactMessageRequest>({
      query: (data) => ({
        url: '/v1/contact',
        method: 'POST',
        body: data,
      }),
    }),
  }),
})

export const { useSubmitContactMessageMutation } = contactApi
