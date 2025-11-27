"use client";

import { useState, useEffect } from "react";
import Masonry from "react-masonry-css";
import PortfolioCard from "@/components/portfolio-card";
import CategoryFilter, { type Category } from "@/components/category-filter";

interface PortfolioItem {
  image: string;
  href: string;
  aspectRatio: string;
  category: Category;
}

const portfolioItems: PortfolioItem[] = [
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
    image: "/jj.webp",
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
];

// 🔥 MASTER ORDER (used on both mobile + desktop)
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
  "/cc.webp",

  "/o.webp",
  "/f.webp",
  "/aa.webp",

  "/dd.webp",
  "/j.webp",
  "/ee.webp",
  "/v.webp",
  "/l.webp",
  "/p.webp",
];

// Masonry columns
const breakpointColumns = {
  default: 3, 
  1024: 3,
  768: 2,
  0: 1,
};

export default function PortfolioGrid() {
  const [selectedCategory, setSelectedCategory] = useState<Category>("all");

  // 1. Filter by category
  const filteredItems =
    selectedCategory === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === selectedCategory);

  // 2. Sort based on mobileOrder only (applies to all screens)
  const sortedItems = [...filteredItems].sort((a, b) => {
    const aIndex = mobileOrder.indexOf(a.image);
    const bIndex = mobileOrder.indexOf(b.image);

    if (aIndex !== -1 && bIndex !== -1) return aIndex - bIndex;
    if (aIndex !== -1) return -1;
    if (bIndex !== -1) return 1;

    return 0;
  });

  return (
    <section className="w-full">
      <CategoryFilter onCategoryChange={setSelectedCategory} />

      <div className="w-full mb-20 md:mb-32 px-4">
        <Masonry
          breakpointCols={breakpointColumns}
          className="flex gap-4"
          columnClassName="flex flex-col gap-4"
        >
          {sortedItems.map((item, index) => (
            <PortfolioCard key={`${item.image}-${index}`} {...item} index={index} />
          ))}
        </Masonry>
      </div>
    </section>
  );
}
