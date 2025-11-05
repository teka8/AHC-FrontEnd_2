export default function NotFound() {
  return (
    <div className="container py-16 text-center">
      <div className="text-6xl font-extrabold text-ahc-green mb-4">404</div>
      <h1 className="text-3xl font-bold mb-2">Page not found</h1>
      <p className="text-slate-600">
        The page you are looking for doesn’t exist, has been moved, or may be temporarily unavailable.
      </p>
      <a href="/" className="btn mt-6">
        Go Home
      </a>
    </div>
  )
}
