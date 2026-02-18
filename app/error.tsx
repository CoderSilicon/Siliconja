'use client' 
import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => { console.error(error)
  }, [error])

  return (
    <div className="min-h-screen relative flex items-center justify-center p-4 bg-white">
      <div className="text-center lexend-400 max-w-2xl">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 bg-black text-white py-2 sm:py-4 px-8 uppercase tracking-tighter">
          Error
        </h1>
        
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-black">
          Something went wrong
        </h2>

        <p className="text-zinc-500 mb-8 lexend-300 italic">
          {error.message || "An unexpected chemical reaction occurred in our servers."}
        </p>

        <button
          onClick={() => reset()}
          className="px-8 py-3 bg-black text-white text-sm uppercase tracking-widest lexend-600 hover:bg-zinc-800 transition-colors border border-black"
        >
          Try again
        </button>
      </div>
    </div>
  )
}