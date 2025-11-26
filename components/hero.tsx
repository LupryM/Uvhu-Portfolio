'use client'

import { Play } from 'lucide-react'
import { useState } from 'react'

export default function Hero() {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <section className="w-full max-w-7xl mx-auto px-4 mb-12 md:mb-16">
      <div className="relative aspect-video w-full overflow-hidden rounded-sm bg-muted group">
        {/* Placeholder for hero video/image */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900">
          <img
            src="/urban-street-basketball-scene-cinematic.jpg"
            alt="Featured film work"
            className="w-full h-full object-cover opacity-90"
          />
        </div>

        {/* Play button overlay */}
        {!isPlaying && (
          <button
            onClick={() => setIsPlaying(true)}
            className="absolute inset-0 flex items-center justify-center bg-black/20 transition-all duration-300 hover:bg-black/30"
            aria-label="Play video"
          >
            <div className="flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-white/90 rounded-sm transition-transform duration-300 hover:scale-110 group-hover:bg-white">
              <Play className="w-6 h-6 md:w-8 md:h-8 text-foreground ml-1" fill="currentColor" />
            </div>
          </button>
        )}
      </div>
    </section>
  )
}
