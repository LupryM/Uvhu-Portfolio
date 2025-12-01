"use client";

import { useState } from "react";
import Masonry from "react-masonry-css";
import PortfolioCard from "@/components/portfolio-card";
import CategoryFilter, { type Category } from "@/components/category-filter";

interface PortfolioItem {
  image: string;
  // href removed
  aspectRatio: string;
  category: Category;
}

const portfolioItems: PortfolioItem[] = [
  {
    image: "/f.jpg",
    aspectRatio: "aspect-[3/4]",
    category: "places",
  },
  {
    image: "/c.webp",
    aspectRatio: "aspect-[16/9]",
    category: "sports",
  },
  {
    image: "/k.webp",
    aspectRatio: "aspect-[3/4]",
    category: "sports",
  },
  {
    image: "/b.webp",
    aspectRatio: "aspect-[3/4]",
    category: "people",
  },
  {
    image: "/jj.webp",
    aspectRatio: "aspect-[3/4]",
    category: "people",
  },
  {
    image: "/s.webp",
    aspectRatio: "aspect-[3/4]",
    category: "people",
  },
  {
    image: "/ll.webp",
    aspectRatio: "aspect-[3/4]",
    category: "people",
  },
  {
    image: "/j.webp",
    aspectRatio: "aspect-[3/4]",
    category: "sports",
  },
  {
    image: "/ee.webp",
    aspectRatio: "aspect-[3/4]",
    category: "sports",
  },
  {
    image: "/u.webp",
    aspectRatio: "aspect-[3/4]",
    category: "sports",
  },
  {
    image: "/a.webp",
    aspectRatio: "aspect-[3/4]",
    category: "events",
  },
  {
    image: "/x.webp",
    aspectRatio: "aspect-[3/4]",
    category: "sports",
  },
  {
    image: "/r.webp",
    aspectRatio: "aspect-[3/4]",
    category: "people",
  },
  {
    image: "/o.webp",
    aspectRatio: "aspect-[3/4]",
    category: "places",
  },
  {
    image: "/l.webp",
    aspectRatio: "aspect-[3/4]",
    category: "sports",
  },
  {
    image: "/hh.webp",
    aspectRatio: "aspect-[3/4]",
    category: "places",
  },
  {
    image: "/i.webp",
    aspectRatio: "aspect-[16/9]",
    category: "places",
  },
  {
    image: "/g.webp",
    aspectRatio: "aspect-[3/4]",
    category: "people",
  },
  {
    image: "/aa.webp",
    aspectRatio: "aspect-[16/9]",
    category: "places",
  },
  {
    image: "/z.webp",
    aspectRatio: "aspect-square",
    category: "events",
  },
  {
    image: "/f.webp",
    aspectRatio: "aspect-[16/9]",
    category: "places",
  },
  {
    image: "q.webp",
    aspectRatio: "aspect-[16/9]",
    category: "places",
  },
  {
    image: "/gg.webp",
    aspectRatio: "aspect-[4/3]",
    category: "events",
  },
  {
    image: "/e.webp",
    aspectRatio: "aspect-[3/4]",
    category: "sports",
  },
  {
    image: "/t.webp",
    aspectRatio: "aspect-square",
    category: "people",
  },
  {
    image: "/ff.webp",
    aspectRatio: "aspect-[4/5]",
    category: "events",
  },
  {
    image: "/n.webp",
    aspectRatio: "aspect-[3/4]",
    category: "places",
  },
  {
    image: "/d.webp",
    aspectRatio: "aspect-square",
    category: "sports",
  },
  {
    image: "/cc.webp",
    aspectRatio: "aspect-square",
    category: "people",
  },
  {
    image: "/bb.webp",
    aspectRatio: "aspect-square",
    category: "events",
  },
  {
    image: "/oo.webp",
    aspectRatio: "aspect-square",
    category: "sports",
  },
  {
    image: "/pp.webp",
    aspectRatio: "aspect-[3/4]",
    category: "people",
  },
];

// 🔥 MASTER ORDER
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
  0: 1,
};

export default function PortfolioGrid() {
  const [selectedCategory, setSelectedCategory] = useState<Category>("all");

  const filteredItems =
    selectedCategory === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === selectedCategory);

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

      <div className="w-full mb-20 md:mb-32 px-1.5">
        <Masonry
          breakpointCols={breakpointColumns}
          className="flex gap-1.5"
          columnClassName="flex flex-col gap-1.5"
        >
          {sortedItems.map((item, index) => (
            <PortfolioCard
              key={`${item.image}-${index}`}
              {...item}
              index={index}
            />
          ))}
        </Masonry>
      </div>
    </section>
  );
}
