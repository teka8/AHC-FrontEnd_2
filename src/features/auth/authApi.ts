import { baseApi } from '../../app/baseApi'
import { setCredentials, logoutLocal, setUser } from './authSlice'

export interface LoginRequest { email: string; password: string }
export interface LoginResponse { token: string; user: { id: number; name: string; email: string } }

export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation<LoginResponse, LoginRequest>({
      query: (body) => ({ url: '/auth/login', method: 'POST', body }),
      async onQueryStarted(_arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled
          dispatch(setCredentials({ token: data.token, user: data.user }))
        } catch {}
      },
      invalidatesTags: ['Auth'],
    }),
    me: build.query<LoginResponse['user'], void>({
      query: () => ({ url: '/auth/user' }),
      async onQueryStarted(_arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled
          dispatch(setUser(data as any))
        } catch {}
      },
      providesTags: ['Auth'],
    }),
    logout: build.mutation<void, void>({
      query: () => ({ url: '/auth/logout', method: 'POST' }),
      async onQueryStarted(_arg, { dispatch, queryFulfilled }) {
        try { await queryFulfilled } finally { dispatch(logoutLocal()) }
      },
      invalidatesTags: ['Auth'],
    }),
  }),
})

export const { useLoginMutation, useMeQuery, useLogoutMutation } = authApi
