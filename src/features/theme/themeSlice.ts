import { createSlice } from '@reduxjs/toolkit'

interface ThemeState {
  mode: 'light' | 'dark'
}

// Load theme from localStorage or default to dark mode for first-time visitors
const getInitialTheme = (): 'light' | 'dark' => {
  if (typeof window !== 'undefined') {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null
    return savedTheme || 'light'
  }
  return 'light'
}

const initialState: ThemeState = {
  mode: getInitialTheme()
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.mode = state.mode === 'light' ? 'dark' : 'light'
    },
    setTheme: (state, action) => {
      state.mode = action.payload
    }
  },
})

export const { toggleTheme, setTheme } = themeSlice.actions
export default themeSlice.reducer
