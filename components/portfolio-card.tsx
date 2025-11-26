"use client";

import Link from "next/link";
import Image from "next/image";

interface PortfolioCardProps {
  image: string;
  href: string;
  aspectRatio: string;
  index: number;
}

export default function PortfolioCard({
  image,
  href,
  aspectRatio,
  index,
}: PortfolioCardProps) {
  return (
    <Link href={href} className="group block w-full">
      {/* break-inside-avoid: Keeps images whole inside columns
        transform-gpu: Fixes the scrolling flicker 
      */}
      <article className="w-full break-inside-avoid transform-gpu">
        <div
          className={`relative w-full ${aspectRatio} overflow-hidden bg-muted`}
        >
          <Image
            src={image}
            alt=""
            fill
            /* quality=70 is the sweet spot for speed vs looks */
            quality={70}
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            /* Only load the first 4 immediately */
            priority={index < 4}
          />

          {/* Optional: Simple overlay to darken image slightly on hover (Pure CSS) */}
          <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10" />
        </div>
      </article>
    </Link>
  );
}
