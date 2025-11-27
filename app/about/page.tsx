import Link from "next/link";
import Navigation from "@/components/navigation";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <div className="max-w-4xl mx-auto px-4 py-12 md:py-20">
        <div className="space-y-8">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-wide text-foreground mb-4">
              About Me
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-light">
              Gordian Malaka
            </p>
            <p className="text-base md:text-lg text-muted-foreground font-light">
              Photographer | Videographer
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="space-y-6 text-foreground/80 leading-relaxed">
              <p>
                I'm Gordian Malaka, a film student who has a passion for
                photography. I have a keen eye for composition, creative
                authenticity and narrative storytelling.
              </p>

              <p>
                My work spans from portraits, events to sports ,with added
                documentary filmmaking. I aim to create an authenticity and
                original experience with each shoot wheather that be a personal
                project or a hired shoot.
              </p>

              <p>
                I'm open to any creative vision that one might propose and do my
                best to bring it to life using my knowledge on filmmaking,
                contemporary story telling and blocking.
              </p>

              <div className="pt-6">
                <h2 className="text-2xl font-light text-foreground mb-3">
                  Skills & Expertise
                </h2>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Portrait & Street Photography</li>
                  <li>• Cinematography & Film Production</li>
                  <li>• Photo & Video Retouching</li>
                  <li>• Color Grading & Post-Production</li>
                  <li>• Documentary Filmmaking</li>
                  <li>• Visual Storytelling</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
