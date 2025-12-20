"use client";

import { useState } from "react";
import Navigation from "@/components/navigation";

export default function VideographyPage() {
  const [isPlaying, setIsPlaying] = useState(false);

  // Your YouTube Video ID
  const videoId = "Xt3sX627QqE";

  // Clean embed URL
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&modestbranding=1&rel=0`;

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Header */}
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
            /* Thumbnail State - Pulls directly from your YouTube video */
            <div
              className="absolute inset-0 z-10 cursor-pointer"
              onClick={() => setIsPlaying(true)}
            >
              <img
                src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                alt="Gqeberha Cinematic"
                className="w-full h-full object-cover opacity-70 transition-transform duration-1000 group-hover:scale-105"
              />

              <div className="absolute inset-0 flex items-center justify-center">
                {/* Play Button */}
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

              {/* Title Overlay on Hover */}
              <div className="absolute bottom-8 left-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p className="text-xs tracking-[0.4em] uppercase font-light">
                  Watch Project
                </p>
              </div>
            </div>
          ) : (
            /* Active Video State */
            <iframe
              src={embedUrl}
              className="absolute inset-0 w-full h-full"
              allow="autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Gqeberha Portfolio Video"
            />
          )}
        </div>

        {/* Project Details Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 border-l border-white/10 pl-8">
            <h2 className="text-3xl font-light tracking-[0.2em] uppercase">
              Gqeberha
            </h2>
            <p className="text-xs text-gray-500 tracking-[0.3em] mt-3 uppercase">
              Cinematic Short
            </p>

            <p className="mt-8 text-gray-400 font-light leading-relaxed max-w-xl">
              A visual exploration of the coastal atmosphere and urban
              architecture of Gqeberha. This piece captures the golden hour
              light and the rhythmic movement of the ocean against the city
              skyline.
            </p>
          </div>

          <div className="space-y-6">
            <div>
              <h4 className="text-[10px] tracking-[0.4em] text-gray-600 uppercase mb-2">
                Role
              </h4>
              <p className="text-xs tracking-widest uppercase">
                Director & Cinematographer
              </p>
            </div>
            <div>
              <h4 className="text-[10px] tracking-[0.4em] text-gray-600 uppercase mb-2">
                Location
              </h4>
              <p className="text-xs tracking-widest uppercase">South Africa</p>
            </div>
            <div>
              <h4 className="text-[10px] tracking-[0.4em] text-gray-600 uppercase mb-2">
                Year
              </h4>
              <p className="text-xs tracking-widest uppercase">2025</p>
            </div>
          </div>
        </div>

        {/* Placeholder for future growth */}
        <div className="mt-32 pt-12 border-t border-neutral-900 flex justify-center">
          <div className="h-1 w-12 bg-neutral-800" />
        </div>
      </div>
    </main>
  );
}
