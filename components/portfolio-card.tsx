"use client"

import { memo } from "react"
import Image from "next/image"

interface PortfolioCardProps {
  image: string
  aspectRatio: string
  index: number
  onClick: () => void
}

const PortfolioCard = memo(function PortfolioCard({ image, aspectRatio, index, onClick }: PortfolioCardProps) {
  return (
    <article className="group w-full break-inside-avoid transform-gpu cursor-pointer" onClick={onClick}>
      <div className={`relative w-full ${aspectRatio} overflow-hidden bg-muted`}>
        <Image
          src={image || "/placeholder.svg"}
          alt=""
          fill
          quality={60}
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          loading={index < 3 ? "eager" : "lazy"}
          priority={index < 2}
        />

        <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10" />
      </div>
    </article>
  )
})

export default PortfolioCard
