import Navigation from "@/components/navigation";
import PortfolioGrid from "@/components/portfolio-grid";

export default function ExplorePage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="w-full py-8 md:py-4">
        <div className="max-w-7xl mx-auto px-1">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-wide text-foreground text-center mb-5">
            GOODWILL PRODUCTIONS
          </h1>
          <p className="text-base md:text-lg text-muted-foreground font-light text-center mb-2">
            Photography | Videography
          </p>
          <p className="text-base md:text-lg text-muted-foreground font-light text-center mb-2">
            by
          </p>
          <p className="text-base md:text-lg text-muted-foreground font-light text-center mb-2">
            GORDIAN MALAKA
          </p>
        </div>
      </div>
      <Navigation />
      <PortfolioGrid />
    </main>
  );
}
