"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface PortfolioCardProps {
  image: string;
  aspectRatio: string;
  index: number;
}

export default function PortfolioCard({
  image,
  aspectRatio,
  index,
}: PortfolioCardProps) {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) {
      setIsVisible(true); // fallback
      return;
    }

    // If IntersectionObserver is not supported, render immediately
    if (!("IntersectionObserver" in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (el) observer.unobserve(el);
          }
        });
      },
      {
        root: null,
        rootMargin: "400px 0px 400px 0px", // pre-load when ~400px away
        threshold: 0.01,
      }
    );

    observer.observe(el);

    return () => {
      try {
        if (el) observer.unobserve(el);
      } catch {
        // ignore
      }
    };
  }, []);

  return (
    <article className="group w-full break-inside-avoid transform-gpu">
      <div
        ref={containerRef}
        className={`relative w-full ${aspectRatio} overflow-hidden bg-muted`}
        aria-busy={!isVisible}
      >
        {isVisible ? (
          <Image
            src={image}
            alt=""
            fill
            quality={70}
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={index < 2} // keep priority small (adjust if needed)
          />
        ) : (
          // skeleton placeholder preserves layout and prevents reflow jumps
          <div className="w-full h-full bg-[color:var(--muted)] animate-pulse" />
        )}

        <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10" />
      </div>
    </article>
  );
}
