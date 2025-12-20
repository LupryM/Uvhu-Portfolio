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
  color?: string;
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

// --- HEAVILY OPTIMIZED: PortfolioCard with aggressive unloading ---
const PortfolioCard = memo(function PortfolioCard({
  image,
  aspectRatio,
  index,
  color,
  onClick,
}: any) {
  const blurUrl = useMemo(() => getDynamicBlur(color), [color]);
  const [loadState, setLoadState] = useState<"unloaded" | "loading" | "loaded">(
    "unloaded"
  );
  const cardRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "400px", // Start loading before visible
      threshold: 0,
    };

    observerRef.current = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setLoadState("loading");
      } else if (
        entry.boundingClientRect.top < -1000 ||
        entry.boundingClientRect.top > window.innerHeight + 1000
      ) {
        // Aggressively unload images far from viewport
        setLoadState("unloaded");
      }
    }, options);

    if (cardRef.current) {
      observerRef.current.observe(cardRef.current);
    }

    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  return (
    <article
      ref={cardRef}
      className="group w-full break-inside-avoid transform-gpu cursor-pointer will-change-transform"
      onClick={onClick}
    >
      <div
        className={`relative w-full ${aspectRatio} overflow-hidden bg-muted`}
        style={{ backgroundColor: color }}
      >
        {loadState !== "unloaded" ? (
          <Image
            src={image || "/placeholder.svg"}
            alt=""
            fill
            quality={60}
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={index < 3}
            decoding="async"
            placeholder="blur"
            blurDataURL={blurUrl}
            loading={index < 6 ? "eager" : "lazy"}
            onLoad={() => setLoadState("loaded")}
          />
        ) : null}
        <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10" />
      </div>
    </article>
  );
});

// --- YOUR DATA & ORDER ---
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
    image: "/aaa.webp",
    aspectRatio: "aspect-[3/4]",
    category: "people",
    color: "#111",
  },
  {
    image: "/s.webp",
    aspectRatio: "aspect-[3/4]",
    category: "people",
    color: "#444",
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
    image: "/qq.webp",
    aspectRatio: "aspect-[3/4]",
    category: "events",
    color: "#111",
  },
  {
    image: "/tt.webp",
    aspectRatio: "aspect-[3/4]",
    category: "people",
    color: "#111",
  },
  {
    image: "/vv.webp",
    aspectRatio: "aspect-[16/9]",
    category: "events",
    color: "#111",
  },

  {
    image: "/bbb.webp",
    aspectRatio: "aspect-[4/5]",
    category: "people",
    color: "#111",
  },
  {
    image: "/ccc.webp",
    aspectRatio: "aspect-[2/3]",
    category: "people",
    color: "#111",
  },
  {
    image: "/ddd.webp",
    aspectRatio: "aspect-[3/4]",
    category: "people",
    color: "#111",
  },
  
  {
    image: "/fff.webp",
    aspectRatio: "aspect-[3/4]",
    category: "people",
    color: "#111",
  },
  {
    image: "/ww.webp",
    aspectRatio: "aspect-[16/9]",
    category: "events",
    color: "#111",
  },
  {
    image: "/xx.webp",
    aspectRatio: "aspect-[16/9]",
    category: "events",
    color: "#111",
  },
  {
    image: "/yy.webp",
    aspectRatio: "aspect-[4/5]",
    category: "places",
    color: "#111",
  },
  {
    image: "/zz.webp",
    aspectRatio: "aspect-square",
    category: "events",
    color: "#111",
  },
  {
    image: "/ggg.webp",
    aspectRatio: "aspect-[4/5]",
    category: "people",
    color: "#111",
  },
  {
    image: "/lll.webp",
    aspectRatio: "aspect-[4/5]",
    category: "people",
    color: "#111",
  },
  {
    image: "/iii.webp",
    aspectRatio: "aspect-[4/5]",
    category: "places",
    color: "#111",
  },
  {
    image: "/jjj.webp",
    aspectRatio: "aspect-[4/5]",
    category: "places",
    color: "#111",
  },
  {
    image: "/kkk.webp",
    aspectRatio: "aspect-[4/5]",
    category: "places",
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

  "/fff.webp",
  "/b.webp",
  "/gg.webp",
  "/ff.webp",
  "/bb.webp",
  "/y.webp",
  "/z.webp",
  "/vv.webp",
  "/cc.webp",

  "/dd.webp",

  "/qq.webp",
  "/zz.webp",
  "/ww.webp",
  "/xx.webp",

  "/ggg.webp",
  "/pp.webp",
  "/bbb.webp",
  "/ccc.webp",
  "/aaa.webp",

  "/v.webp",
  "/o.webp",

  "/f.webp",

  "/yy.webp",
  "/aa.webp",

  "/p.webp",
  "/oo.webp",
  "/tt.webp",

  "/ddd.webp",
  "/lll.webp",
  "/iii.webp",
  "/jjj.webp",
  "/kkk.webp",
  "/j.webp",

  "/vv.webp",
  "/ee.webp",
  "/l.webp",
];

// --- MASONRY BREAKPOINTS ---
const breakpointColumns = {
  default: 3,
  1024: 3,
  768: 2,
  0: 1,
};

// Detect if mobile
const isMobile = () => typeof window !== "undefined" && window.innerWidth < 768;

export default function PortfolioGrid() {
  const [selectedCategory, setSelectedCategory] = useState<Category>("all");
  const [index, setIndex] = useState(-1);
  const [displayLimit, setDisplayLimit] = useState(() =>
    isMobile() ? 12 : 18
  );
  const observerTarget = useRef<HTMLDivElement>(null);
  const masonryRef = useRef<HTMLDivElement>(null);
  const loadTimeoutRef = useRef<NodeJS.Timeout | undefined>(undefined);

  // --- Filter and Sort ---
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

  // --- Smooth Infinite Scroll with RAF ---
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && displayLimit < sortedItems.length) {
          // Use RAF for smooth loading
          clearTimeout(loadTimeoutRef.current);
          loadTimeoutRef.current = setTimeout(() => {
            requestAnimationFrame(() => {
              setDisplayLimit((prev) => {
                const increment = isMobile() ? 6 : 9;
                return Math.min(prev + increment, sortedItems.length);
              });
            });
          }, 150);
        }
      },
      { threshold: 0, rootMargin: "300px" }
    );

    if (observerTarget.current) observer.observe(observerTarget.current);

    return () => {
      clearTimeout(loadTimeoutRef.current);
      observer.disconnect();
    };
  }, [displayLimit, sortedItems.length]);

  // --- Memory cleanup on lightbox ---
  useEffect(() => {
    if (index >= 0) {
      // Give browser time to open lightbox smoothly
      const timer = setTimeout(() => {
        if (masonryRef.current) {
          masonryRef.current.style.display = "none";
        }
      }, 300);
      return () => clearTimeout(timer);
    } else if (masonryRef.current) {
      masonryRef.current.style.display = "";
    }
  }, [index]);

  // --- Scroll restoration ---
  const scrollPosRef = useRef(0);
  useEffect(() => {
    if (index >= 0) {
      scrollPosRef.current = window.scrollY;
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      // Smooth scroll restoration
      requestAnimationFrame(() => {
        window.scrollTo({ top: scrollPosRef.current, behavior: "instant" });
      });
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [index]);

  const visibleItems = sortedItems.slice(0, displayLimit);
  const isLightboxOpen = index >= 0;

  return (
    <section className="w-full">
      <CategoryFilter
        onCategoryChange={(cat) => {
          setIndex(-1);
          setDisplayLimit(isMobile() ? 12 : 18);
          setSelectedCategory(cat);
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      />

      <div
        ref={masonryRef}
        className={`w-full mb-20 px-1.5 transition-opacity duration-300 ${
          isLightboxOpen ? "opacity-0 pointer-events-none" : "opacity-100"
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
              color={item.color}
              onClick={() => setIndex(i)}
            />
          ))}
        </Masonry>

        {displayLimit < sortedItems.length && (
          <div
            ref={observerTarget}
            className="h-20 w-full flex items-center justify-center"
          >
            <div className="w-8 h-8 border-2 border-muted border-t-foreground rounded-full animate-spin" />
          </div>
        )}
      </div>

      {isLightboxOpen && (
        <Lightbox
          index={index}
          open={true}
          close={() => setIndex(-1)}
          slides={sortedItems.map((item) => ({ src: item.image }))}
          plugins={[Zoom]}
          carousel={{
            finite: sortedItems.length < 100,
            preload: 2, // Only preload 2 images ahead
          }}
          render={{
            buttonPrev: sortedItems.length <= 1 ? () => null : undefined,
            buttonNext: sortedItems.length <= 1 ? () => null : undefined,
          }}
          controller={{ closeOnBackdropClick: true }}
          animation={{ fade: 250 }}
        />
      )}
    </section>
  );
}
