export default function Loader() {
  return (
    <div className="py-16 flex flex-col items-center justify-center">
      {/* Animated spinner with AHC colors */}
      <div className="relative w-16 h-16">
        {/* Outer ring */}
        <div className="absolute inset-0 rounded-full border-4 border-slate-200 dark:border-slate-700"></div>
        {/* Spinning ring */}
        <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-ahc-green border-r-ahc-green animate-spin"></div>
        {/* Inner pulsing dot */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-3 h-3 rounded-full bg-ahc-green animate-pulse"></div>
        </div>
      </div>
      {/* Loading text */}
      <p className="mt-4 text-sm font-medium text-slate-600 dark:text-slate-400 animate-pulse">
        Loading...
      </p>
    </div>
  )
}
