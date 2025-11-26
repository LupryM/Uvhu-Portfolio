"use client";

import Link from "next/link";
import { Twitter, Linkedin, Facebook, Instagram, Mail } from "lucide-react";

export default function SplitHero() {
  return (
    <section className="min-h-screen flex flex-col lg:flex-row">
      {/* Left side - Content */}
      <div className="w-full lg:w-1/2 bg-background flex items-center justify-center p-8 lg:p-16">
        <div className="max-w-md w-full space-y-8">
          <div className="space-y-3">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-wide text-white">
              Uvhukhudo Malaka
            </h1>
            <p className="text-base md:text-lg text-neutral-300 font-normal">
              Photographer | Videographer
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4">
            <Link
              href="/explore"
              className="px-8 py-3.5 bg-white text-black rounded-full text-sm font-semibold transition-all duration-300 hover:bg-neutral-100 border-2 border-white shadow-lg hover:shadow-xl"
            >
              Explore
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3.5 bg-transparent text-white rounded-full text-sm font-semibold transition-all duration-300 hover:bg-white hover:text-black border-2 border-white"
            >
              Contact
            </Link>
          </div>

          {/* Social Media Icons */}
          <div className="flex gap-4 pt-4">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-muted flex items-center justify-center transition-all duration-300 hover:bg-foreground hover:text-background"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-muted flex items-center justify-center transition-all duration-300 hover:bg-foreground hover:text-background"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-muted flex items-center justify-center transition-all duration-300 hover:bg-foreground hover:text-background"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/goodwillprod/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-muted flex items-center justify-center transition-all duration-300 hover:bg-foreground hover:text-background"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="mailto:contact@example.com"
              className="w-12 h-12 rounded-full bg-muted flex items-center justify-center transition-all duration-300 hover:bg-foreground hover:text-background"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Right side - Image */}
      <div className="w-full lg:w-1/2 min-h-[50vh] lg:min-h-screen relative overflow-hidden">
        <img
          src="e.webp"
          alt="Portrait"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
      </div>
    </section>
  );
}
