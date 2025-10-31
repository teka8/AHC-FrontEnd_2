import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface User { id: number; name: string; email: string; roles?: string[] }

interface AuthState {
  token: string | null
  user: User | null
}

const initialState: AuthState = {
  token: null,
  user: null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<{ token: string; user: User }>) => {
      state.token = action.payload.token
      state.user = action.payload.user
    },
    setToken: (state, action: PayloadAction<string | null>) => {
      state.token = action.payload
    },
    setUser: (state, action: PayloadAction<User | null>) => {
      state.user = action.payload
    },
    logoutLocal: (state) => {
      state.token = null
      state.user = null
    },
  },
})

export const { setCredentials, setToken, setUser, logoutLocal } = authSlice.actions
export default authSlice.reducer
