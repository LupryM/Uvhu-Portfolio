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
  color?: string; // Optional for the blur effect
}

// --- Dynamic Blur Helper ---
const getDynamicBlur = (color: string = "#1a1a1a") => {
  const toBase64 = (str: string) =>
    typeof window === "undefined"
      ? Buffer.from(str).toString("base64")
      : window.btoa(str);
  const svg = `<svg width="10" height="10" xmlns="http://www.w3.org/2000/svg"><rect width="10" height="10" fill="${color}" /></svg>`;
  return `data:image/svg+xml;base64,${toBase64(svg)}`;
};

// --- RESTORED: PortfolioCard ---
const PortfolioCard = memo(function PortfolioCard({
  image,
  aspectRatio,
  index,
  color,
  onClick,
}: any) {
  const blurUrl = useMemo(() => getDynamicBlur(color), [color]);

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
          quality={60}
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={index < 2}
          decoding="async"
          placeholder="blur"
          blurDataURL={blurUrl}
        />
        <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10" />
      </div>
    </article>
  );
});

// --- DATA (YOUR ORIGINAL DATA & ORDER) ---
const portfolioItems: PortfolioItem[] = [
  {
    image: "/f.jpg",
    aspectRatio: "aspect-[3/4]",
    category: "places",
    color: "#8b949e",
  },
  {
    image: "/c.webp",
    aspectRatio: "aspect-[16/9]",
    category: "sports",
    color: "#2d333b",
  },
  {
    image: "/k.webp",
    aspectRatio: "aspect-[3/4]",
    category: "sports",
    color: "#1c2128",
  },
  {
    image: "/b.webp",
    aspectRatio: "aspect-[3/4]",
    category: "people",
    color: "#3a3a3a",
  },
  {
    image: "/jj.webp",
    aspectRatio: "aspect-[3/4]",
    category: "people",
    color: "#222",
  },
  {
    image: "/s.webp",
    aspectRatio: "aspect-[3/4]",
    category: "people",
    color: "#444",
  },
  {
    image: "/ll.webp",
    aspectRatio: "aspect-[3/4]",
    category: "people",
    color: "#333",
  },
  {
    image: "/j.webp",
    aspectRatio: "aspect-[3/4]",
    category: "sports",
    color: "#111",
  },
  {
    image: "/ee.webp",
    aspectRatio: "aspect-[3/4]",
    category: "sports",
    color: "#222",
  },
  {
    image: "/u.webp",
    aspectRatio: "aspect-[3/4]",
    category: "sports",
    color: "#000",
  },
  {
    image: "/a.webp",
    aspectRatio: "aspect-[3/4]",
    category: "events",
    color: "#555",
  },
  {
    image: "/x.webp",
    aspectRatio: "aspect-[3/4]",
    category: "sports",
    color: "#222",
  },
  {
    image: "/r.webp",
    aspectRatio: "aspect-[3/4]",
    category: "people",
    color: "#333",
  },
  {
    image: "/o.webp",
    aspectRatio: "aspect-[3/4]",
    category: "places",
    color: "#444",
  },
  {
    image: "/l.webp",
    aspectRatio: "aspect-[3/4]",
    category: "sports",
    color: "#111",
  },
  {
    image: "/hh.webp",
    aspectRatio: "aspect-[3/4]",
    category: "places",
    color: "#222",
  },
  {
    image: "/i.webp",
    aspectRatio: "aspect-[16/9]",
    category: "places",
    color: "#111",
  },
  {
    image: "/g.webp",
    aspectRatio: "aspect-[3/4]",
    category: "people",
    color: "#333",
  },
  {
    image: "/aa.webp",
    aspectRatio: "aspect-[16/9]",
    category: "places",
    color: "#000",
  },
  {
    image: "/z.webp",
    aspectRatio: "aspect-square",
    category: "events",
    color: "#444",
  },
  {
    image: "/f.webp",
    aspectRatio: "aspect-[16/9]",
    category: "places",
    color: "#222",
  },
  {
    image: "q.webp",
    aspectRatio: "aspect-[16/9]",
    category: "places",
    color: "#111",
  },
  {
    image: "/gg.webp",
    aspectRatio: "aspect-[4/3]",
    category: "events",
    color: "#333",
  },
  {
    image: "/e.webp",
    aspectRatio: "aspect-[3/4]",
    category: "sports",
    color: "#111",
  },
  {
    image: "/t.webp",
    aspectRatio: "aspect-square",
    category: "people",
    color: "#444",
  },
  {
    image: "/ff.webp",
    aspectRatio: "aspect-[4/5]",
    category: "events",
    color: "#222",
  },
  {
    image: "/n.webp",
    aspectRatio: "aspect-[3/4]",
    category: "places",
    color: "#111",
  },
  {
    image: "/d.webp",
    aspectRatio: "aspect-square",
    category: "sports",
    color: "#333",
  },
  {
    image: "/cc.webp",
    aspectRatio: "aspect-square",
    category: "people",
    color: "#111",
  },
  {
    image: "/bb.webp",
    aspectRatio: "aspect-square",
    category: "events",
    color: "#444",
  },
  {
    image: "/oo.webp",
    aspectRatio: "aspect-square",
    category: "sports",
    color: "#222",
  },
  {
    image: "/pp.webp",
    aspectRatio: "aspect-[3/4]",
    category: "people",
    color: "#111",
  },
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

export default function PortfolioGrid() {
  const [selectedCategory, setSelectedCategory] = useState<Category>("all");
  const [index, setIndex] = useState(-1);
  const [displayLimit, setDisplayLimit] = useState(10); // Start with more items
  const observerTarget = useRef(null);

  // --- RESTORED: Sorting & Filtering ---
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

  // --- STABILITY: Infinite Scroll ---
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && displayLimit < sortedItems.length) {
          setDisplayLimit((prev) => prev + 6);
        }
      },
      { threshold: 0.1, rootMargin: "400px" } // Load earlier to prevent scroll gaps
    );

    if (observerTarget.current) observer.observe(observerTarget.current);
    return () => observer.disconnect();
  }, [displayLimit, sortedItems.length]);

  const visibleItems = sortedItems.slice(0, displayLimit);
  const isLightboxOpen = index >= 0;

  return (
    <section className="w-full">
      <CategoryFilter
        onCategoryChange={(cat) => {
          setIndex(-1);
          setDisplayLimit(10);
          setSelectedCategory(cat);
        }}
      />

      {/* STABILITY: Memory Trap Fix */}
      <div
        className={`w-full mb-20 px-1.5 transition-opacity duration-300 ${
          isLightboxOpen
            ? "invisible h-0 overflow-hidden"
            : "visible opacity-100"
        }`}
      >
        <Masonry
          breakpointCols={{ default: 3, 1024: 3, 768: 2, 500: 1 }}
          className="flex gap-1.5"
          columnClassName="flex flex-col gap-1.5"
        >
          {visibleItems.map((item, i) => (
            <PortfolioCard
              key={`${item.image}-${i}`}
              image={item.image}
              aspectRatio={item.aspectRatio}
              index={i}
              color={item.color}
              onClick={() => setIndex(i)}
            />
          ))}
        </Masonry>
        <div ref={observerTarget} className="h-10 w-full" />
      </div>

      <Lightbox
        index={index}
        open={isLightboxOpen}
        close={() => setIndex(-1)}
        slides={sortedItems.map((item) => ({ src: item.image }))}
        plugins={[Zoom]}
      />
    </section>
  );
}
