export type PortfolioItem = {
  image: string;
  href: string;
  aspectRatio: string;
  category: "People" | "Events" | "Sports" | "Places";
};

export const portfolioItems: PortfolioItem[] = [
  // People
  { image: "/f.jpg", href: "#1", aspectRatio: "aspect-[3/4]", category: "People" },
  { image: "/e.webp", href: "#4", aspectRatio: "aspect-[3/4]", category: "People" },
  { image: "/ff.webp", href: "#6", aspectRatio: "aspect-[4/5]", category: "People" },
  { image: "/k.webp", href: "#8", aspectRatio: "aspect-[3/4]", category: "People" },
  { image: "/n.webp", href: "#11", aspectRatio: "aspect-[3/4]", category: "People" },
  { image: "/b.webp", href: "#13", aspectRatio: "aspect-[3/4]", category: "People" },
  { image: "/s.webp", href: "#15", aspectRatio: "aspect-[3/4]", category: "People" },
  { image: "/j.webp", href: "#18", aspectRatio: "aspect-[3/4]", category: "People" },
  { image: "/ee.webp", href: "#19", aspectRatio: "aspect-[3/4]", category: "People" },
  { image: "/u.webp", href: "#21", aspectRatio: "aspect-[3/4]", category: "People" },
  { image: "/a.webp", href: "#22", aspectRatio: "aspect-[3/4]", category: "People" },
  { image: "/x.webp", href: "#23", aspectRatio: "aspect-[3/4]", category: "People" },
  { image: "/r.webp", href: "#26", aspectRatio: "aspect-[3/4]", category: "People" },
  { image: "/o.webp", href: "#28", aspectRatio: "aspect-[3/4]", category: "People" },
  { image: "/l.webp", href: "#29", aspectRatio: "aspect-[3/4]", category: "People" },
  { image: "/hh.webp", href: "#30", aspectRatio: "aspect-[3/4]", category: "People" },

  // Events
  { image: "/i.webp", href: "#2", aspectRatio: "aspect-[16/9]", category: "Events" },
  { image: "/g.webp", href: "#3", aspectRatio: "aspect-[16/9]", category: "Events" },
  { image: "/aa.webp", href: "#7", aspectRatio: "aspect-[16/9]", category: "Events" },
  { image: "/c.webp", href: "#12", aspectRatio: "aspect-[16/9]", category: "Events" },
  { image: "/f.webp", href: "#17", aspectRatio: "aspect-[16/9]", category: "Events" },
  { image: "q.webp", href: "#20", aspectRatio: "aspect-[16/9]", category: "Events" },
  { image: "/i.webp", href: "#27", aspectRatio: "aspect-[16/9]", category: "Events" },
  { image: "/l.webp", href: "#31", aspectRatio: "aspect-[16/9]", category: "Events" },

  // Sports
  { image: "/t.webp", href: "#5", aspectRatio: "aspect-square", category: "Sports" },
  { image: "/z.webp", href: "#9", aspectRatio: "aspect-square", category: "Sports" },
  { image: "/bb.webp", href: "#10", aspectRatio: "aspect-square", category: "Sports" },
  { image: "/d.webp", href: "#14", aspectRatio: "aspect-square", category: "Sports" },
  { image: "/cc.webp", href: "#16", aspectRatio: "aspect-square", category: "Sports" },
  { image: "/y.webp", href: "#25", aspectRatio: "aspect-square", category: "Sports" },

  // Places
  { image: "/gg.webp", href: "#24", aspectRatio: "aspect-[4/3]", category: "Places" },
];
