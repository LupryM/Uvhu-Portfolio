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
    if (lockRef.current) {
      e.preventDefault()
      return
    }
    lockRef.current = true
    setTimeout(() => (lockRef.current = false), 600)

    setActiveLink(href)

    const [pathPart, fragment] = href.split("#")
    const linkPath = pathPart || "/"
    const currentPath = pathname || "/"

    if (fragment && linkPath === currentPath) {
      e.preventDefault()
      const newHash = `#${fragment}`
      if (window.location.hash !== newHash) {
        try {
          history.replaceState(null, "", `${linkPath}${newHash}`)
        } catch {}
      }

      const el = document.getElementById(fragment) || document.querySelector(`[name="${fragment}"]`)
      if (el) {
        try {
          el.scrollIntoView({ behavior: "smooth", block: "start" })
        } catch {}
      }
      return
    }

    e.preventDefault()
    router.push(href)
  }

  return (
    /* EXACT CSS FROM YOUR PROVIDED SAMPLE */
    <nav className="w-full border-t border-border/20 px-4 sm:px-6 lg:px-8 py-5 sm:py-6">
      <ul className="flex items-center justify-center gap-0 sm:gap-2 overflow-x-auto sm:overflow-visible no-scrollbar">
        {navLinks.map((link, index) => (
          <li key={link.href} className="flex items-center flex-shrink-0">
            <Link
              href={link.href}
              onClick={(e) => handleClick(e as any, link.href)}
              className={`
                text-xs sm:text-sm font-medium tracking-wide 
                px-3 sm:px-4 py-2 sm:py-3 
                transition-colors duration-200 whitespace-nowrap relative group
                ${activeLink === link.href ? "text-foreground" : "text-muted-foreground hover:text-foreground"}
              `}
            >
              {link.label}
              <span className="absolute bottom-1 left-3 sm:left-4 right-3 sm:right-4 h-px bg-foreground scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </Link>
            
            {index < navLinks.length - 1 && (
              <span className="text-border/40 select-none hidden sm:inline text-xs">|</span>
            )}
          </li>
        ))}
      </ul>
    </nav>
  )
}