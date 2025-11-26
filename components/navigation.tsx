"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { label: "Photography", href: "/explore#photography" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navigation() {
  const [activeLink, setActiveLink] = useState("");

  return (
    <nav className="w-full border-b border-border py-4 mb-12">
      <ul className="flex flex-wrap items-center justify-center gap-3 md:gap-6 px-4">
        {navLinks.map((link, index) => (
          <li key={link.href} className="flex items-center">
            <Link
              href={link.href}
              onClick={() => setActiveLink(link.href)}
              className={`text-sm md:text-base transition-colors hover:text-foreground ${
                activeLink === link.href
                  ? "text-foreground font-medium"
                  : "text-muted-foreground"
              }`}
            >
              {link.label}
            </Link>
            {index < navLinks.length - 1 && (
              <span className="ml-3 md:ml-6 text-muted-foreground">/</span>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
