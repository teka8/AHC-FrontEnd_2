import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useLoginMutation } from '../features/auth/authApi'
import { useNavigate, useLocation } from 'react-router-dom'

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(4),
})

type FormValues = z.infer<typeof schema>

export default function Login() {
  const navigate = useNavigate()
  const location = useLocation() as any
  const from = location.state?.from?.pathname || '/dashboard'
  const [login, { isLoading, error }] = useLoginMutation()
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({ resolver: zodResolver(schema) })

  async function onSubmit(values: FormValues) {
    const res = await login({ email: values.email, password: values.password })
    if ('data' in res) navigate(from, { replace: true })
  }

  return (
    <div className="container py-16 flex justify-center">
      <Helmet><title>Login – AHC</title></Helmet>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-sm card p-6 space-y-4">
        <h1 className="text-xl font-semibold">Sign in</h1>
        <div>
          <label className="block text-sm mb-1">Email</label>
          <input type="email" {...register('email')} className="w-full border rounded-md px-3 py-2" placeholder="you@example.com" />
          {errors.email && <p className="text-red-600 text-xs mt-1">{errors.email.message}</p>}
        </div>
        <div>
          <label className="block text-sm mb-1">Password</label>
          <input type="password" {...register('password')} className="w-full border rounded-md px-3 py-2" />
          {errors.password && <p className="text-red-600 text-xs mt-1">{errors.password.message}</p>}
        </div>
        {error && <p className="text-red-600 text-sm">Login failed</p>}
        <button disabled={isLoading} className="btn w-full">{isLoading ? 'Signing in...' : 'Sign in'}</button>
      </form>
    </div>
  )
}
