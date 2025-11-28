"use client";

import Link from "next/link";
import { useState, useRef } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Photography", href: "/explore#photography" },
  { label: "Videography", href: "/videography" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navigation() {
  const [activeLink, setActiveLink] = useState("");
  const lockRef = useRef(false);
  const pathname = usePathname();

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    // Prevent rapid repeated taps from queuing many navigations
    if (lockRef.current) {
      e.preventDefault();
      return;
    }
    lockRef.current = true;
    setTimeout(() => (lockRef.current = false), 500);

    // Keep highlighting immediate for UX
    setActiveLink(href);

    // Let Link/navigation handle the route normally for cross-page links.
    // For same-page hash navigation, the target page will handle the hash.
  };

  return (
    <nav className="w-full border-b border-border py-3 sm:py-4 mb-8 sm:mb-12">
      <ul className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 md:gap-6 px-3 sm:px-4 text-lg font-semibold">
        {navLinks.map((link, index) => (
          <li key={link.href} className="flex items-center">
            <Link
              href={link.href}
              onClick={(e) => handleClick(e as any, link.href)}
              className={`text-xs sm:text-sm md:text-base transition-colors hover:text-foreground active:opacity-70 ${
                activeLink === link.href
                  ? "text-foreground font-medium"
                  : "text-muted-foreground"
              }`}
            >
              {link.label}
            </Link>
            {index < navLinks.length - 1 && (
              <span className="ml-2 sm:ml-3 md:ml-6 text-muted-foreground text-xs sm:text-sm">
                |
              </span>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
