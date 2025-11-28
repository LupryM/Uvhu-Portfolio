"use client";

import Link from "next/link";
import { useState, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";

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
  const router = useRouter();

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    // Block rapid repeated taps
    if (lockRef.current) {
      e.preventDefault();
      return;
    }
    lockRef.current = true;
    setTimeout(() => (lockRef.current = false), 600);

    // Highlight immediately
    setActiveLink(href);

    // Normalize and split href into path + fragment
    const [pathPart, fragment] = href.split("#");
    const linkPath = pathPart || "/"; // ensure we have a path
    const currentPath = pathname || "/";

    // If this is a same-page hash link, handle client-side to avoid a full navigation
    if (fragment && linkPath === currentPath) {
      e.preventDefault();

      // Only update the hash if it's different (minimize history churn)
      const newHash = `#${fragment}`;
      if (window.location.hash !== newHash) {
        try {
          history.replaceState(null, "", `${linkPath}${newHash}`);
        } catch {
          // ignore replaceState issues
        }
      }

      // Try to scroll to the fragment target if it exists
      const el =
        document.getElementById(fragment) ||
        document.querySelector(`[name="${fragment}"]`);
      if (el) {
        try {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        } catch {
          // ignore scroll errors
        }
      }
      return;
    }

    // Cross-page navigation: use router.push to navigate client-side
    e.preventDefault();
    router.push(href);
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
