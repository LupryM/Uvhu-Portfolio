"use client";

import { useState, useEffect } from "react";
import PortfolioCard from "@/components/portfolio-card";
import CategoryFilter, { type Category } from "@/components/category-filter";

interface PortfolioItem {
  image: string;
  href: string;
  aspectRatio: string;
  category: Category;
}

const portfolioItems: PortfolioItem[] = [
  // ... (Your items data) ...
    {
    image: "/f.jpg",
    href: "#1",
    aspectRatio: "aspect-[3/4]",
    category: "places",
  },
  {
    image: "/c.webp",
    href: "#12",
    aspectRatio: "aspect-[16/9]",
    category: "people",
  },

  {
    image: "/k.webp",
    href: "#8",
    aspectRatio: "aspect-[3/4]",
    category: "sports",
  },
  {
    image: "/b.webp",
    href: "#13",
    aspectRatio: "aspect-[3/4]",
    category: "people",
  },
  {
    image: "/s.webp",
    href: "#15",
    aspectRatio: "aspect-[3/4]",
    category: "people",
  },
  {
    image: "/s.webp",
    href: "#15",
    aspectRatio: "aspect-[3/4]",
    category: "people",
  },
  {
    image: "/jj.webp",
    href: "#15",
    aspectRatio: "aspect-[3/4]",
    category: "people",
  },

  {
    image: "/kk.webp",
    href: "#15",
    aspectRatio: "aspect-[3/4]",
    category: "people",
  },
  {
    image: "/ll.webp",
    href: "#15",
    aspectRatio: "aspect-[3/4]",
    category: "people",
  },
  {
    image: "/j.webp",
    href: "#18",
    aspectRatio: "aspect-[3/4]",
    category: "sports",
  },
  {
    image: "/ee.webp",
    href: "#19",
    aspectRatio: "aspect-[3/4]",
    category: "sports",
  },
  {
    image: "/u.webp",
    href: "#21",
    aspectRatio: "aspect-[3/4]",
    category: "sports",
  },
  {
    image: "/a.webp",
    href: "#22",
    aspectRatio: "aspect-[3/4]",
    category: "events",
  },
  {
    image: "/x.webp",
    href: "#23",
    aspectRatio: "aspect-[3/4]",
    category: "people",
  },
  {
    image: "/r.webp",
    href: "#26",
    aspectRatio: "aspect-[3/4]",
    category: "people",
  },
  {
    image: "/o.webp",
    href: "#28",
    aspectRatio: "aspect-[3/4]",
    category: "places",
  },
  {
    image: "/l.webp",
    href: "#29",
    aspectRatio: "aspect-[3/4]",
    category: "sports",
  },
  {
    image: "/hh.webp",
    href: "#30",
    aspectRatio: "aspect-[3/4]",
    category: "places",
  },
  {
    image: "/i.webp",
    href: "#2",
    aspectRatio: "aspect-[16/9]",
    category: "places",
  },
  {
    image: "/g.webp",
    href: "#3",
    aspectRatio: "aspect-[16/9]",
    category: "people",
  },
  {
    image: "/aa.webp",
    href: "#7",
    aspectRatio: "aspect-[16/9]",
    category: "places",
  },
  {
    image: "/z.webp",
    href: "#9",
    aspectRatio: "aspect-square",
    category: "events",
  },
  {
    image: "/f.webp",
    href: "#17",
    aspectRatio: "aspect-[16/9]",
    category: "places",
  },
  {
    image: "q.webp",
    href: "#20",
    aspectRatio: "aspect-[16/9]",
    category: "places",
  },
  {
    image: "/gg.webp",
    href: "#24",
    aspectRatio: "aspect-[4/3]",
    category: "events",
  },
  {
    image: "/i.webp",
    href: "#27",
    aspectRatio: "aspect-[16/9]",
    category: "places",
  },
  {
    image: "/e.webp",
    href: "#4",
    aspectRatio: "aspect-[3/4]",
    category: "people",
  },
  {
    image: "/t.webp",
    href: "#5",
    aspectRatio: "aspect-square",
    category: "people",
  },
  {
    image: "/ff.webp",
    href: "#6",
    aspectRatio: "aspect-[4/5]",
    category: "events",
  },
  {
    image: "/n.webp",
    href: "#11",
    aspectRatio: "aspect-[3/4]",
    category: "places",
  },
  {
    image: "/d.webp",
    href: "#14",
    aspectRatio: "aspect-square",
    category: "people",
  },
  {
    image: "/cc.webp",
    href: "#16",
    aspectRatio: "aspect-square",
    category: "people",
  },
  {
    image: "/bb.webp",
    href: "#10",
    aspectRatio: "aspect-square",
    category: "events",
  },
  {
    image: "/y.webp",
    href: "#25",
    aspectRatio: "aspect-square",
    category: "events",
  },
  {
    image: "/l.webp",
    href: "#31",
    aspectRatio: "aspect-[16/9]",
    category: "sports",
  },
];

// 🔥 CONFIG 1: MOBILE MASTER ORDER (< 768px)
const mobileOrder = [
  "/f.jpg",
  "/c.webp",
  "/d.webp",
  "/x.webp",
  "/e.webp",
  "/a.webp",
  "/s.webp",
  "/g.webp",
  "/r.webp",
  "/t.webp",
  "/jj.webp",
  "/b.webp",
  "/gg.webp",
  "/ff.webp",
  "/cc.webp",
  "/y.webp",
  "/z.webp",
  "/j.webp",
  "/o.webp",
  "/aa.webp",
  "/mm.webp",
  "/dd.webp",
  "/ee.webp",
  "/v.webp",
  "/l.webp",
  "/p.webp",
];

// 🔥 CONFIG 2: DESKTOP MASTER ORDER (>= 768px)
// Rearrange this list however you want the desktop view to look
const desktopOrder = [
  "/z.webp", // Maybe you want square images first on desktop?
  "/aa.webp", // Or wide images?
  "/c.webp",
  "/f.jpg",
  "/l.webp",
  "/u.webp",
  "/k.webp",
  "/x.webp",
  // ... add the rest of your images here in your desired Desktop order
];

export default function PortfolioGrid() {
  const [selectedCategory, setSelectedCategory] = useState<Category>("all");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // 1. Filter first
  const filteredItems =
    selectedCategory === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === selectedCategory);

  // 2. Sort based on device (Mobile List vs Desktop List)
  const sortedItems = [...filteredItems].sort((a, b) => {
    // 🔥 Select the correct Master List based on screen size
    const currentMasterList = isMobile ? mobileOrder : desktopOrder;

    const aIndex = currentMasterList.indexOf(a.image);
    const bIndex = currentMasterList.indexOf(b.image);

    // Sort Logic:
    // 1. If both images are in the list, use the list order
    if (aIndex !== -1 && bIndex !== -1) return aIndex - bIndex;

    // 2. If only A is in the list, A goes to top
    if (aIndex !== -1) return -1;

    // 3. If only B is in the list, B goes to top
    if (bIndex !== -1) return 1;

    // 4. If neither are in the list, keep original file order
    return 0;
  });

  return (
    <section className="w-full">
      <CategoryFilter onCategoryChange={setSelectedCategory} />

      <div className="w-full mb-20 md:mb-32 px-4">
        <div className="columns-1 md:columns-2 xl:columns-3 gap-3 md:gap-4 space-y-3 md:space-y-4">
          {sortedItems.map((item, index) => (
            <div key={`${item.image}-${index}`} className="break-inside-avoid">
              <PortfolioCard {...item} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
