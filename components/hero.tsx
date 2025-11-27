"use client";

import { Play } from "lucide-react";
import { useState } from "react";

export default function Hero() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="w-full max-w-7xl mx-auto px-3 sm:px-4 mb-8 sm:mb-12 md:mb-16">
      <div className="relative aspect-video w-full overflow-hidden rounded-sm bg-muted group">
        {/* Desktop Image */}
        <img
          src="/urban-street-basketball-scene-cinematic.jpg"
          alt="Featured film work"
          className="hidden sm:block w-full h-full object-cover opacity-90"
        />

        {/* Mobile Image */}
        <img
          src="/mobile-hero-image.jpg" // <-- replace with your mobile file
          alt="Featured film work mobile"
          className="block sm:hidden w-full h-full object-cover opacity-90"
        />

        {/* Play button overlay */}
        {!isPlaying && (
          <button
            onClick={() => setIsPlaying(true)}
            className="absolute inset-0 flex items-center justify-center bg-black/20 transition-all duration-300 hover:bg-black/30 active:bg-black/40"
            aria-label="Play video"
          >
            <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-white/90 rounded-sm transition-transform duration-300 hover:scale-110 active:scale-95 group-hover:bg-white">
              <Play
                className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-foreground ml-0.5 sm:ml-1"
                fill="currentColor"
              />
            </div>
          </button>
        )}
      </div>
    </section>
  );
}
