"use client";

import Link from "next/link";
import { Twitter, Linkedin, Facebook, Instagram, Mail } from "lucide-react";

export default function SplitHero() {
  return (
    <section className="min-h-screen flex flex-col lg:flex-row">
      {/* Left side - Content */}
      <div className="w-full lg:w-1/2 bg-background flex items-center justify-center p-6 sm:p-8 md:p-12 lg:p-16 min-h-[60vh] lg:min-h-screen">
        <div className="max-w-md w-full space-y-6 sm:space-y-8">
          <div className="space-y-2 sm:space-y-3">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-wide text-white leading-tight">
              Gordian Malaka
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-neutral-300 font-normal">
              Photographer | Videographer
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3 sm:gap-4">
            <Link
              href="/explore"
              className="px-6 sm:px-8 py-3 sm:py-3.5 bg-white text-black rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 hover:bg-neutral-100 border-2 border-white shadow-lg hover:shadow-xl active:scale-95"
            >
              Explore
            </Link>
            <Link
              href="/contact"
              className="px-6 sm:px-8 py-3 sm:py-3.5 bg-transparent text-white rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 hover:bg-white hover:text-black border-2 border-white active:scale-95"
            >
              Contact
            </Link>
          </div>

          {/* Social Media Icons */}
          <div className="flex gap-3 sm:gap-4 pt-2 sm:pt-4">
            <a
              href="https://x.com/Goodwillprod?t=0IgadAqi7yMFDtvq6DfA0g&s=09
 add the twitter"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-muted flex items-center justify-center transition-all duration-300 hover:bg-foreground hover:text-background active:scale-90"
              aria-label="Twitter"
            >
              <Twitter className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>

            <a
              href="https://www.instagram.com/goodwillprod/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-muted flex items-center justify-center transition-all duration-300 hover:bg-foreground hover:text-background active:scale-90"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
            <a
              href="mailto:contact@example.com"
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-muted flex items-center justify-center transition-all duration-300 hover:bg-foreground hover:text-background active:scale-90"
              aria-label="Email"
            >
              <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Right side - Image */}
      <div className="w-full lg:w-1/2 min-h-[40vh] sm:min-h-[50vh] lg:min-h-screen relative overflow-hidden">
        <img
          src="e.webp"
          alt="Portrait"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
      </div>
    </section>
  );
}
