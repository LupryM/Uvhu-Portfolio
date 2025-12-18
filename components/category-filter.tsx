"use client"

import { useState, useCallback, memo } from "react"
import { useTransition } from "react"

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

const CategoryFilter = memo(function CategoryFilter({ onCategoryChange }: CategoryFilterProps) {
  const [activeCategory, setActiveCategory] = useState<Category>("all")
  const [isPending, startTransition] = useTransition()

  const handleCategoryClick = useCallback(
    (category: Category) => {
      if (category === activeCategory) return

      setActiveCategory(category)

      startTransition(() => {
        onCategoryChange(category)
      })
    },
    [activeCategory, onCategoryChange],
  )

  return (
    <div className="w-full mb-6 md:mb-12 px-4">
      <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4" id="category-filter">
        {categories.map((category) => (
          <button
            key={category.value}
            type="button"
            onClick={() => handleCategoryClick(category.value)}
            aria-pressed={activeCategory === category.value}
            className={`px-5 py-2.5 text-sm md:text-base font-medium rounded-lg transition-all duration-300 min-w-[80px] md:min-w-0 ${
              activeCategory === category.value
                ? "bg-foreground text-background"
                : "bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground"
            } ${isPending ? "opacity-80" : ""}`}
          >
            {category.label}
          </button>
        ))}
      </div>
    </div>
  )
})

export default CategoryFilter
