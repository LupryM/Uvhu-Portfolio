import Navigation from "@/components/navigation";
import PortfolioGrid from "@/components/portfolio-grid";

export default function ExplorePage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="w-full py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-wide text-foreground text-center mb-2">
            Uvhukhudo Malaka
          </h1>
          <p className="text-base md:text-lg text-muted-foreground font-light text-center mb-8">
            Photographer | Videographer
          </p>
        </div>
      </div>
      <Navigation />
      <PortfolioGrid />
    </main>
  );
}
