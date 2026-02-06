import type { Project } from "@/components/project-card";

export const projects: Project[] = [
  {
    title: "Longevity Events Calendar",
    description:
      "A curated, searchable calendar of 200+ longevity, healthspan, and biotech conferences worldwide. Built with Next.js, Supabase, and AI-powered data enrichment pipelines that classify speakers, sponsors, and session tracks automatically.",
    tags: ["Next.js", "Supabase", "AI/ML", "Data Pipeline"],
    href: "https://longevents.hyperadvancer.com",
    highlight: true,
  },
  {
    title: "Innovation Roulette",
    description:
      "An interactive ideation tool that generates random innovation prompts by combining emerging technologies with real-world industries. Designed to break creative blocks and spark unconventional thinking in workshops and strategy sessions.",
    tags: ["React", "Creativity", "Workshop Tool"],
    href: "https://innovationroulette.com",
  },
  {
    title: "Healthusiasm",
    description:
      "A health innovation platform exploring the intersection of consumer wellness, digital health, and preventative medicine. Content-driven project tracking trends in personalised health, wearables, and longevity science.",
    tags: ["Health Tech", "Content", "Research"],
  },
  {
    title: "CM Insurance — AI Strategy",
    description:
      "Led the development of a comprehensive AI strategy for a major Belgian insurance company. Mapped 40+ use cases across claims, underwriting, and customer service, prioritised by business impact and feasibility.",
    tags: ["AI Strategy", "Insurance", "Enterprise"],
  },
];

export const featuredProjects = projects.slice(0, 3);
