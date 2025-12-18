"use client"

import type React from "react"

import Link from "next/link"
import { useState, useRef } from "react"
import { usePathname, useRouter } from "next/navigation"

const navLinks = [
  { label: "Photography", href: "/explore#photography" },
  { label: "Videography", href: "/videography" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
]

export default function Navigation() {
  const [activeLink, setActiveLink] = useState("")
  const lockRef = useRef(false)
  const pathname = usePathname()
  const router = useRouter()

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Block rapid repeated taps
    if (lockRef.current) {
      e.preventDefault()
      return
    }
    lockRef.current = true
    setTimeout(() => (lockRef.current = false), 600)

    // Highlight immediately
    setActiveLink(href)

    // Normalize and split href into path + fragment
    const [pathPart, fragment] = href.split("#")
    const linkPath = pathPart || "/" // ensure we have a path
    const currentPath = pathname || "/"

    // If this is a same-page hash link, handle client-side to avoid a full navigation
    if (fragment && linkPath === currentPath) {
      e.preventDefault()

      // Only update the hash if it's different (minimize history churn)
      const newHash = `#${fragment}`
      if (window.location.hash !== newHash) {
        try {
          history.replaceState(null, "", `${linkPath}${newHash}`)
        } catch {
          // ignore replaceState issues
        }
      }

      // Try to scroll to the fragment target if it exists
      const el = document.getElementById(fragment) || document.querySelector(`[name="${fragment}"]`)
      if (el) {
        try {
          el.scrollIntoView({ behavior: "smooth", block: "start" })
        } catch {
          // ignore scroll errors
        }
      }
      return
    }

    // Cross-page navigation: use router.push to navigate client-side
    e.preventDefault()
    router.push(href)
  }

  return (
    <nav className="w-full border-b border-border/30 py-4 mb-8 md:mb-12">
      <ul className="flex flex-wrap items-center justify-center gap-1 px-4">
        {navLinks.map((link, index) => (
          <li key={link.href} className="flex items-center">
            <Link
              href={link.href}
              onClick={(e) => handleClick(e as any, link.href)}
              className={`
                px-4 py-3 min-h-[44px] flex items-center
                text-sm md:text-base font-light tracking-wide
                transition-all duration-300
                hover:text-foreground hover:tracking-wider
                active:opacity-70
                relative group
                ${activeLink === link.href ? "text-foreground" : "text-muted-foreground/90"}
              `}
            >
              {link.label}
              <span className="absolute bottom-2 left-4 right-4 h-px bg-foreground transition-all duration-300 scale-x-0 group-hover:scale-x-100 origin-left"></span>
            </Link>
            {index < navLinks.length - 1 && <span className="mx-1 md:mx-2 text-border/50 text-xs">|</span>}
          </li>
        ))}
      </ul>
    </nav>
  )
}
