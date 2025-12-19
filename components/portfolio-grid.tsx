"use client";

import { useState, useMemo, useCallback, useEffect, useRef, memo } from "react";
import Image from "next/image";
import Masonry from "react-masonry-css";
import CategoryFilter, { type Category } from "@/components/category-filter";

// Lightbox Imports
import { Lightbox } from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";

interface PortfolioItem {
  image: string;
  aspectRatio: string;
  category: Category;
}

// --- Components ---

interface PortfolioCardProps {
  image: string;
  aspectRatio: string;
  index: number;
  onClick: () => void;
}

const PortfolioCard = memo(function PortfolioCard({
  image,
  aspectRatio,
  index,
  onClick,
}: PortfolioCardProps) {
  return (
    <article
      className="group w-full break-inside-avoid transform-gpu cursor-pointer"
      onClick={onClick}
    >
      <div
        className={`relative w-full ${aspectRatio} overflow-hidden bg-muted`}
      >
        <Image
          src={image || "/placeholder.svg"}
          alt=""
          fill
          quality={60} // Lower quality for mobile RAM efficiency
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          // Priority for top images, lazy for rest
          priority={index < 2}
          // Decoding async prevents main-thread jank during scroll
          decoding="async"
        />
        <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10" />
      </div>
    </article>
  );
});

// --- Main Grid ---

const portfolioItems: PortfolioItem[] = [
  { image: "/f.jpg", aspectRatio: "aspect-[3/4]", category: "places" },
  { image: "/c.webp", aspectRatio: "aspect-[16/9]", category: "sports" },
  { image: "/k.webp", aspectRatio: "aspect-[3/4]", category: "sports" },
  { image: "/b.webp", aspectRatio: "aspect-[3/4]", category: "people" },
  { image: "/jj.webp", aspectRatio: "aspect-[3/4]", category: "people" },
  { image: "/s.webp", aspectRatio: "aspect-[3/4]", category: "people" },
  { image: "/ll.webp", aspectRatio: "aspect-[3/4]", category: "people" },
  { image: "/j.webp", aspectRatio: "aspect-[3/4]", category: "sports" },
  { image: "/ee.webp", aspectRatio: "aspect-[3/4]", category: "sports" },
  { image: "/u.webp", aspectRatio: "aspect-[3/4]", category: "sports" },
  { image: "/a.webp", aspectRatio: "aspect-[3/4]", category: "events" },
  { image: "/x.webp", aspectRatio: "aspect-[3/4]", category: "sports" },
  { image: "/r.webp", aspectRatio: "aspect-[3/4]", category: "people" },
  { image: "/o.webp", aspectRatio: "aspect-[3/4]", category: "places" },
  { image: "/l.webp", aspectRatio: "aspect-[3/4]", category: "sports" },
  { image: "/hh.webp", aspectRatio: "aspect-[3/4]", category: "places" },
  { image: "/i.webp", aspectRatio: "aspect-[16/9]", category: "places" },
  { image: "/g.webp", aspectRatio: "aspect-[3/4]", category: "people" },
  { image: "/aa.webp", aspectRatio: "aspect-[16/9]", category: "places" },
  { image: "/z.webp", aspectRatio: "aspect-square", category: "events" },
  { image: "/f.webp", aspectRatio: "aspect-[16/9]", category: "places" },
  { image: "q.webp", aspectRatio: "aspect-[16/9]", category: "places" },
  { image: "/gg.webp", aspectRatio: "aspect-[4/3]", category: "events" },
  { image: "/e.webp", aspectRatio: "aspect-[3/4]", category: "sports" },
  { image: "/t.webp", aspectRatio: "aspect-square", category: "people" },
  { image: "/ff.webp", aspectRatio: "aspect-[4/5]", category: "events" },
  { image: "/n.webp", aspectRatio: "aspect-[3/4]", category: "places" },
  { image: "/d.webp", aspectRatio: "aspect-square", category: "sports" },
  { image: "/cc.webp", aspectRatio: "aspect-square", category: "people" },
  { image: "/bb.webp", aspectRatio: "aspect-square", category: "events" },
  { image: "/oo.webp", aspectRatio: "aspect-square", category: "sports" },
  { image: "/pp.webp", aspectRatio: "aspect-[3/4]", category: "people" },
];

const mobileOrder = [
  "/f.jpg",
  "/c.webp",
  "/d.webp",
  "/x.webp",
  "/e.webp",
  "/a.webp",
  "/jj.webp",
  "/s.webp",
  "/g.webp",
  "/r.webp",
  "/t.webp",
  "/ll.webp",
  "/b.webp",
  "/gg.webp",
  "/ff.webp",
  "/bb.webp",
  "/y.webp",
  "/z.webp",
  "/pp.webp",
  "/cc.webp",
  "/o.webp",
  "/f.webp",
  "/aa.webp",
  "/dd.webp",
  "/j.webp",
  "/ee.webp",
  "/v.webp",
  "/l.webp",
  "/oo.webp",
  "/p.webp",
];

const breakpointColumns = {
  default: 3,
  1024: 3,
  768: 2,
  500: 1,
};

export default function PortfolioGrid() {
  const [selectedCategory, setSelectedCategory] = useState<Category>("all");
  const [index, setIndex] = useState(-1);

  // Infinite Scroll State
  const [displayLimit, setDisplayLimit] = useState(8);
  const observerTarget = useRef<HTMLDivElement>(null);

  // Sorting & Filtering Logic
  const sortedItems = useMemo(() => {
    const filtered =
      selectedCategory === "all"
        ? portfolioItems
        : portfolioItems.filter((item) => item.category === selectedCategory);

    return [...filtered].sort((a, b) => {
      const aIndex = mobileOrder.indexOf(a.image);
      const bIndex = mobileOrder.indexOf(b.image);

      if (aIndex !== -1 && bIndex !== -1) return aIndex - bIndex;
      if (aIndex !== -1) return -1;
      if (bIndex !== -1) return 1;
      return 0;
    });
  }, [selectedCategory]);

  // Infinite Scroll Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && displayLimit < sortedItems.length) {
          // Add 6 images at a time to keep DOM weight low
          setDisplayLimit((prev) => prev + 6);
        }
      },
      { threshold: 0.1, rootMargin: "200px" } // Trigger 200px before reaching the bottom
    );

    const currentTarget = observerTarget.current;
    if (currentTarget) {
      observer.observe(currentTarget);
    }

    return () => {
      if (currentTarget) observer.unobserve(currentTarget);
    };
  }, [displayLimit, sortedItems.length]);

  const visibleItems = useMemo(() => {
    return sortedItems.slice(0, displayLimit);
  }, [sortedItems, displayLimit]);

  const slides = useMemo(
    () => sortedItems.map((item) => ({ src: item.image })),
    [sortedItems]
  );

  const handleCategoryChange = useCallback((category: Category) => {
    setIndex(-1);
    setDisplayLimit(8); // Reset scroll position when category changes
    setSelectedCategory(category);
  }, []);

  const isLightboxOpen = index >= 0;

  return (
    <section className="w-full">
      <CategoryFilter onCategoryChange={handleCategoryChange} />

      {/* MEMORY TRAP FIX: 
          When the lightbox is open, we visually hide the grid. 
          Using 'invisible h-0 overflow-hidden' ensures the browser stops 
          trying to render the background images, freeing up RAM for the Lightbox.
      */}
      <div
        className={`w-full mb-20 md:mb-32 px-1.5 transition-opacity duration-300 ${
          isLightboxOpen
            ? "invisible h-0 overflow-hidden"
            : "visible opacity-100"
        }`}
      >
        <Masonry
          breakpointCols={breakpointColumns}
          className="flex gap-1.5"
          columnClassName="flex flex-col gap-1.5"
        >
          {visibleItems.map((item, i) => (
            <PortfolioCard
              key={`${item.image}-${i}`}
              image={item.image}
              aspectRatio={item.aspectRatio}
              index={i}
              onClick={() => setIndex(i)}
            />
          ))}
        </Masonry>

        {/* Sentinel for Infinite Scroll */}
        <div ref={observerTarget} className="h-10 w-full" />
      </div>

      <Lightbox
        index={index}
        open={isLightboxOpen}
        close={() => setIndex(-1)}
        slides={slides}
        plugins={[Zoom]}
        animation={{ zoom: 500 }}
        zoom={{
          maxZoomPixelRatio: 3,
          scrollToZoom: true,
        }}
      />
    </section>
  );
}
