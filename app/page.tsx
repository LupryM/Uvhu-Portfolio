import PortfolioGrid from "@/components/portfolio-grid"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <header className="w-full bg-background border-b border-border/20">
        {/* Brand Section */}
        <div className="px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 pb-6 sm:pb-8 text-center">
          {/* Main Title - Strong Visual Hierarchy */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-3 sm:mb-4 text-foreground text-balance leading-tight">
            GOODWILL
            <br className="hidden sm:inline" />
            <span className="block sm:inline sm:ml-3">PRODUCTIONS</span>
          </h1>

          {/* Subtitle - Clear Secondary Information */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 mb-8 sm:mb-10">
            <span className="text-xs sm:text-sm font-medium tracking-widest text-muted-foreground uppercase">By</span>
            <span className="text-base sm:text-lg font-semibold text-foreground tracking-wide">Gordian Malaka</span>
          </div>
        </div>

        {/* Navigation - Single Line on Mobile with Horizontal Scroll Fallback */}
        <nav className="w-full border-t border-border/20 px-4 sm:px-6 lg:px-8 py-5 sm:py-6">
          <ul className="flex items-center justify-center gap-0 sm:gap-2 overflow-x-auto sm:overflow-visible">
            {[
              { label: "Photography", href: "#photography" },
              { label: "Videography", href: "#videography" },
              { label: "About", href: "#about" },
              { label: "Contact", href: "#contact" },
            ].map((item, index, arr) => (
              <li key={item.label} className="flex items-center flex-shrink-0">
                <a
                  href={item.href}
                  className="text-xs sm:text-sm font-medium tracking-wide px-3 sm:px-4 py-2 sm:py-3 text-muted-foreground hover:text-foreground transition-colors duration-200 whitespace-nowrap relative group"
                >
                  {item.label}
                  <span className="absolute bottom-1 left-3 sm:left-4 right-3 sm:right-4 h-px bg-foreground scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </a>
                {index < arr.length - 1 && (
                  <span className="text-border/40 select-none hidden sm:inline text-xs">|</span>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <PortfolioGrid />
    </main>
  )
}
