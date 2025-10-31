import { Navigate, useLocation } from 'react-router-dom'
import { useAppSelector } from '../app/hooks'

export default function Protected({ children }: { children: JSX.Element }) {
  const token = useAppSelector(s => s.auth.token)
  const loc = useLocation()
  if (!token) return <Navigate to="/login" state={{ from: loc }} replace />
  return children
}
