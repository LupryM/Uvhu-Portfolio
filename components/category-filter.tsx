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
    <div className="w-full mb-6 pt-6 border-t border-border/20">
      <div className="flex flex-wrap items-center justify-center gap-2.5 md:gap-3 px-4" id="category-filter">
        {categories.map((category) => (
          <button
            key={category.value}
            type="button"
            onClick={() => handleCategoryClick(category.value)}
            aria-pressed={activeCategory === category.value}
            className={`
              relative px-6 py-2.5 text-sm font-light tracking-wider uppercase
              transition-all duration-300 overflow-hidden min-h-[44px] min-w-[100px]
              hover:scale-105 active:scale-95
              ${activeCategory === category.value ? "text-background" : "text-muted-foreground hover:text-foreground"}
              ${isPending ? "opacity-60" : ""}
              before:absolute before:inset-0 before:transition-transform before:duration-300
              ${
                activeCategory === category.value
                  ? "before:bg-foreground before:scale-100"
                  : "before:bg-muted-foreground/15 before:scale-0 hover:before:scale-100"
              }
            `}
          >
            <span className="relative z-10">{category.label}</span>
          </button>
        ))}
      </div>
    </div>
  )
})

export default CategoryFilter
