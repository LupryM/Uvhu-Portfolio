import Navigation from "@/components/navigation";
import PortfolioGrid from "@/components/portfolio-grid";

export default function ExplorePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="py-3 md:py-5">
        <div className="max-w-7xl mx-auto px-1 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-wider">
            GOODWILL PRODUCTIONS
          </h1>

        
          <p className="mt-3 text-xs md:text-sm tracking-widest text-gray-500 uppercase">
            by
          </p>

          <p className="mt-3 text-sm md:text-base tracking-widest text-gray-400 uppercase">
            GORDIAN MALAKA
          </p>
        </div>
      </div>

      <Navigation />
      <PortfolioGrid />
    </main>
  );
}
