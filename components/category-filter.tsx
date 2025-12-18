"use client";

import { useState, useRef, useEffect } from "react";

export type Category = "all" | "people" | "events" | "sports" | "places";

interface CategoryFilterProps {
  onCategoryChange: (category: Category) => void;
}

const categories: { value: Category; label: string }[] = [
  { value: "all", label: "All" },
  { value: "people", label: "People" },
  { value: "events", label: "Events" },
  { value: "sports", label: "Sports" },
  { value: "places", label: "Places" },
];

export default function CategoryFilter({
  onCategoryChange,
}: CategoryFilterProps) {
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [isLocked, setIsLocked] = useState(false);
  const lockTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (lockTimeoutRef.current) {
        clearTimeout(lockTimeoutRef.current);
        lockTimeoutRef.current = null;
      }
    };
  }, []);

  const handleCategoryClick = (category: Category) => {
    // If locked, ignore rapid taps
    if (isLocked) return;

    // If the same category is clicked, don't do anything
    if (category === activeCategory) return;

    setActiveCategory(category);
    onCategoryChange(category);

    // Lock briefly to avoid rapid repeated state changes (which trigger heavy re-layouts on mobile)
    setIsLocked(true);
    if (lockTimeoutRef.current) {
      clearTimeout(lockTimeoutRef.current);
    }
    lockTimeoutRef.current = window.setTimeout(() => {
      setIsLocked(false);
      lockTimeoutRef.current = null;
    }, 500); // 500ms debounce; adjust if you want it shorter/longer
  };

  return (
    <div className="w-full mb-6 md:mb-12 px-4">
      <div
        className="flex flex-wrap items-center justify-center gap-2 md:gap-4"
        id="category-filter"
      >
        {categories.map((category) => (
          <button
            key={category.value}
            type="button"
            onClick={() => handleCategoryClick(category.value)}
            disabled={isLocked}
            aria-pressed={activeCategory === category.value}
            className={`px-5 py-2.5 text-sm md:text-base font-medium rounded-lg transition-all duration-300 min-w-[80px] md:min-w-0 ${
              activeCategory === category.value
                ? "bg-foreground text-background"
                : "bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground"
            } ${isLocked ? "opacity-80 pointer-events-none" : ""}`}
          >
            {category.label}
          </button>
        ))}
      </div>
    </div>
  );
}
