import PortfolioCard from "@/components/portfolio-card";

const portfolioItems = [
  // aspect-[3/4] = Tall/Portrait
  // aspect-square = Box
  // aspect-[16/9] = Wide/Landscape

  { image: "/f.jpg", href: "#1", aspectRatio: "aspect-[3/4]" },
  { image: "/i.webp", href: "#2", aspectRatio: "aspect-[16/9]" },
  { image: "/g.webp", href: "#3", aspectRatio: "aspect-[16/9]" },
  { image: "/e.webp", href: "#4", aspectRatio: "aspect-[3/4]" },
  { image: "/t.webp", href: "#5", aspectRatio: "aspect-square" },
  { image: "/ff.webp", href: "#6", aspectRatio: "aspect-[4/5]" },
  { image: "/aa.webp", href: "#7", aspectRatio: "aspect-[16/9]" },
  { image: "/k.webp", href: "#8", aspectRatio: "aspect-[3/4]" },
  { image: "/z.webp", href: "#9", aspectRatio: "aspect-square" },
  { image: "/bb.webp", href: "#10", aspectRatio: "aspect-square" },
  { image: "/n.webp", href: "#11", aspectRatio: "aspect-[3/4]" },

  { image: "/c.webp", href: "#12", aspectRatio: "aspect-[16/9]" },
  { image: "/b.webp", href: "#13", aspectRatio: "aspect-[3/4]" },
  { image: "/d.webp", href: "#14", aspectRatio: "aspect-square" },
  { image: "/s.webp", href: "#15", aspectRatio: "aspect-[3/4]" },
  { image: "/cc.webp", href: "#16", aspectRatio: "aspect-square" },
  { image: "/f.webp", href: "#17", aspectRatio: "aspect-[16/9]" },
  { image: "/j.webp", href: "#18", aspectRatio: "aspect-[3/4]" },
  { image: "/ee.webp", href: "#19", aspectRatio: "aspect-[3/4]" },
  { image: "q.webp", href: "#20", aspectRatio: "aspect-[16/9]" },
  { image: "/u.webp", href: "#21", aspectRatio: "aspect-[3/4]" },

  { image: "/a.webp", href: "#22", aspectRatio: "aspect-[3/4]" },
  { image: "/x.webp", href: "#23", aspectRatio: "aspect-[3/4]" },
  { image: "/gg.webp", href: "#24", aspectRatio: "aspect-[4/3]" },
  { image: "/y.webp", href: "#25", aspectRatio: "aspect-square" },
  { image: "/r.webp", href: "#26", aspectRatio: "aspect-[3/4]" },
  { image: "/i.webp", href: "#27", aspectRatio: "aspect-[16/9]" },
  { image: "/o.webp", href: "#28", aspectRatio: "aspect-[3/4]" },
  { image: "/l.webp", href: "#29", aspectRatio: "aspect-[3/4]" },
  { image: "/hh.webp", href: "#30", aspectRatio: "aspect-[3/4]" },
  { image: "/l.webp", href: "#31", aspectRatio: "aspect-[16/9]" },
];

export default function PortfolioGrid() {
  return (
    <section className="w-full">
      <div className="w-full mb-20 md:mb-32">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
          {portfolioItems.map((item, index) => (
            <div key={index} className="break-inside-avoid">
              <PortfolioCard {...item} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
