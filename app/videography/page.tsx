import Navigation from "@/components/navigation";

export default function VideographyPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="w-full py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-wide text-foreground text-center mb-2">
            Videography Portfolio
          </h1>
          <p className="text-base md:text-lg text-muted-foreground font-light text-center mb-8">
            A collection of video projects.
          </p>
        </div>
      </div>
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <p className="text-center text-muted-foreground">Video content coming soon...</p>
      </div>
    </main>
  );
}
