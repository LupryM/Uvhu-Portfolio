"use client"

import { useState } from "react"

export type Category = "all" | "people" | "events" | "sports" | "places"

interface CategoryFilterProps {
  onCategoryChange: (category: Category) => void
}

const categories: { value: Category; label: string }[] = [
  { value: "all", label: "All" },
  { value: "people", label: "People" },
  { value: "events", label: "Events" },
  { value: "sports", label: "Sports" },
  { value: "places", label: "Places" },
]

export default function CategoryFilter({ onCategoryChange }: CategoryFilterProps) {
  const [activeCategory, setActiveCategory] = useState<Category>("all")

  const handleCategoryClick = (category: Category) => {
    setActiveCategory(category)
    onCategoryChange(category)
  }

  return (
    <div className="w-full mb-6 md:mb-12 px-4">
      <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4">
        {categories.map((category) => (
          <button
            key={category.value}
            onClick={() => handleCategoryClick(category.value)}
            className={`px-5 py-2.5 text-sm md:text-base font-medium rounded-lg transition-all duration-300 min-w-[80px] md:min-w-0 ${
              activeCategory === category.value
                ? "bg-foreground text-background"
                : "bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground"
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>
    </div>
  )
}
