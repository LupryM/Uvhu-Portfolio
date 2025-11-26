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
              Jessin Sam S
            </p>
            <p className="text-base md:text-lg text-muted-foreground font-light">
              Photographer | Videographer
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="space-y-6 text-foreground/80 leading-relaxed">
              <p>
                I'm a passionate film student and visual storyteller dedicated
                to capturing compelling moments through photography and
                cinematography. My work focuses on creating authentic, cinematic
                narratives that resonate with audiences.
              </p>

              <p>
                With a keen eye for composition and lighting, I specialize in
                portrait photography, street photography, and documentary-style
                filmmaking. My approach combines technical precision with
                creative vision to produce work that is both visually striking
                and emotionally engaging.
              </p>

              <p>
                Currently pursuing my education in film and visual arts, I'm
                constantly exploring new techniques and pushing the boundaries
                of visual storytelling. From intimate portraits to dynamic film
                projects, each piece in my portfolio represents my commitment to
                the craft.
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
