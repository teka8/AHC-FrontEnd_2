import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../app/store'
import { setTheme } from './themeSlice'

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const theme = useSelector((state: RootState) => state.theme.mode)
  const dispatch = useDispatch()

  // Apply theme class to html element
  useEffect(() => {
    const root = window.document.documentElement
    
    // Remove any existing theme classes
    root.classList.remove('light', 'dark')
    
    // Add the current theme class
    root.classList.add(theme)
    
    // Set the data-theme attribute for other potential theme systems
    root.setAttribute('data-theme', theme)
    
    // Save theme preference to localStorage
    localStorage.setItem('theme', theme)
  }, [theme])

  return <>{children}</>
}
