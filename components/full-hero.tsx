"use client";

import Link from "next/link";
import Image from "next/image";
import { Twitter, Instagram, Mail } from "lucide-react";

export default function FullHero() {
  return (
    <section className="min-h-screen relative flex items-center justify-center">
      {/* Background Images */}
      <div className="absolute inset-0 w-full h-full">
        {/* Desktop Image */}
        <div className="hidden sm:block absolute inset-0 w-full h-full">
          <Image
            src="/f.webp"
            alt="Full-screen hero image"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>

        {/* Mobile Image */}
        <div className="block sm:hidden absolute inset-0 w-full h-full">
          <Image
            src="/fm.jpg" // <-- replace with your mobile version
            alt="Full-screen hero image mobile"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 backdrop-brightness-75"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl w-full text-center p-6 sm:p-8 md:p-12 lg:p-16">
        <div className="space-y-4 sm:space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight drop-shadow-lg">
            Gordian Malaka
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-neutral-200 font-medium drop-shadow-md">
            Photographer | Videographer
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-8 sm:mt-10">
          <Link
            href="/explore"
            className="px-8 sm:px-10 py-3 sm:py-4 bg-white text-black rounded-full text-sm sm:text-base font-semibold transition-all duration-300 hover:bg-neutral-100 border-2 border-white shadow-xl hover:shadow-2xl active:scale-95"
          >
            Explore Portfolio
          </Link>
          <Link
            href="/contact"
            className="px-8 sm:px-10 py-3 sm:py-4 bg-transparent text-white rounded-full text-sm sm:text-base font-semibold transition-all duration-300 hover:bg-white hover:text-black border-2 border-white active:scale-95"
          >
            Get in Touch
          </Link>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center gap-4 sm:gap-5 pt-8 sm:pt-10">
          <a
            href="https://x.com/Goodwillprod?t=0IgadAqi7yMFDtvq6DfA0g&s=09"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/20 text-white flex items-center justify-center transition-all duration-300 hover:bg-white hover:text-black active:scale-90 backdrop-blur-sm"
            aria-label="Twitter"
          >
            <Twitter className="w-5 h-5 sm:w-6 sm:h-6" />
          </a>

          <a
            href="https://www.instagram.com/goodwillprod/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/20 text-white flex items-center justify-center transition-all duration-300 hover:bg-white hover:text-black active:scale-90 backdrop-blur-sm"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5 sm:w-6 sm:h-6" />
          </a>

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=shigotoinx@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/20 text-white flex items-center justify-center transition-all duration-300 hover:bg-white hover:text-black active:scale-90 backdrop-blur-sm"
            aria-label="Email"
          >
            <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
          </a>
        </div>
      </div>
    </section>
  );
}
