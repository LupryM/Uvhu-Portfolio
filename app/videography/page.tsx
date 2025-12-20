"use client";

import { useState } from "react";
import Navigation from "@/components/navigation";

export default function VideographyPage() {
  const [isPlaying, setIsPlaying] = useState(false);

  // 1. YOUR VIMEO ID
  const vimeoId = "1148194609";

  /**
   * 2. CLEAN EMBED PARAMS:
   * title=0, byline=0, portrait=0 (Hides UI clutter)
   * color=ffffff (Sets play bar to white)
   * dnt=1 (Do Not Track for privacy)
   */
  const embedUrl = `https://player.vimeo.com/video/${vimeoId}?title=0&byline=0&portrait=0&color=ffffff&dnt=1&autoplay=1`;

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Page Header */}
      <div className="py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-wider uppercase">
            Videography
          </h1>
          <p className="mt-4 text-xs md:text-sm tracking-[0.3em] text-gray-500 uppercase">
            Visual Storytelling by Gordian Malaka
          </p>
        </div>
      </div>

      <Navigation />

      <div className="max-w-5xl mx-auto px-4 py-12">
        {/* Cinematic Video Player */}
        <div className="relative aspect-video bg-neutral-900 overflow-hidden group rounded-sm shadow-2xl">
          {!isPlaying ? (
            /* PLACEHOLDER STATE */
            <div
              className="absolute inset-0 z-10 cursor-pointer"
              onClick={() => setIsPlaying(true)}
            >
              {/* You can use a custom high-res still from your footage here */}
              <div className="absolute inset-0 bg-neutral-900 flex items-center justify-center">
                <p className="text-xs tracking-[0.4em] text-neutral-500 uppercase">
                  Loading Preview...
                </p>
              </div>

              {/* Overlay / Play Button */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors duration-500">
                <div className="w-20 h-20 flex items-center justify-center rounded-full border border-white/20 bg-black/40 backdrop-blur-md group-hover:bg-white group-hover:text-black transition-all duration-500 ease-out">
                  <svg
                    className="w-8 h-8 translate-x-0.5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>
          ) : (
            /* ACTIVE VIMEO IFRAME */
            <iframe
              src={embedUrl}
              className="absolute inset-0 w-full h-full"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title="Gqeberha Cinematic"
            />
          )}
        </div>

        {/* Project Details */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 border-l border-white/10 pl-8">
            <h2 className="text-3xl font-light tracking-[0.2em] uppercase">
              Gqeberha
            </h2>
            <p className="text-xs text-gray-500 tracking-[0.3em] mt-3 uppercase">
              Cinematic Short
            </p>

            <p className="mt-8 text-gray-400 font-light leading-relaxed max-w-xl">
              A visual exploration capturing the coastal atmosphere of Gqeberha.
              This piece focuses on the intersection of urban architecture and
              the rhythmic motion of the South African coastline.
            </p>
          </div>

          <div className="space-y-6">
            <div>
              <h4 className="text-[10px] tracking-[0.4em] text-gray-600 uppercase mb-1">
                Role
              </h4>
              <p className="text-xs tracking-widest uppercase">
                Director & Cinematographer
              </p>
            </div>
            <div>
              <h4 className="text-[10px] tracking-[0.4em] text-gray-600 uppercase mb-1">
                Location
              </h4>
              <p className="text-xs tracking-widest uppercase">South Africa</p>
            </div>
          </div>
        </div>

        {/* MORE COMING SOON PLACEHOLDER */}
        <div className="mt-40 mb-20 py-20 border-t border-neutral-900">
          <div className="text-center space-y-4">
            <h3 className="text-lg font-light tracking-[0.5em] text-neutral-400 uppercase">
              More Projects
            </h3>
            <p className="text-xs tracking-[0.3em] text-neutral-600 uppercase">
              Coming Soon
            </p>
            <div className="flex justify-center pt-8">
              <div className="h-[1px] w-12 bg-neutral-800" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
