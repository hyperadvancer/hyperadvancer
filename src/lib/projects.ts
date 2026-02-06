import type { Project } from "@/components/project-card";

export const projects: Project[] = [
  {
    title: "Longevity Events Calendar",
    description:
      "The definitive longevity event platform featuring 250+ global events focused on active ageing, prevention, fitness, wellness, and healthspan optimisation. AI-powered data enrichment classifies speakers, sponsors, and session tracks automatically. Transitioning from a marketing tool to a standalone revenue stream with quarterly trend reports.",
    tags: ["Next.js", "Supabase", "AI/ML", "Data Pipeline"],
    href: "https://longevents.hyperadvancer.com",
    highlight: true,
    icon: "Calendar",
  },
  {
    title: "Innovation Ecosystem Roulette",
    description:
      "An AI-powered platform that identifies novel partnership opportunities by connecting seemingly unrelated businesses. Users input their company; the system spins through 100+ companies across healthcare, fitness, wellness, and biotech — generating tailored collaboration proposals with confidence scores and implementation steps.",
    tags: ["AI", "Matchmaking", "Lead Generation"],
    href: "https://roulette.hyperadvancer.com",
    icon: "Shuffle",
  },
  {
    title: "Healthusiasm",
    description:
      "A hybrid offering combining automated diagnostics with human consultancy to help organisations assess and improve their health-enthusiastic positioning. Features a readiness diagnostic tool, competitor benchmarking, and workshops — targeting the wellness market growing at 15–16% annually.",
    tags: ["Health Tech", "Consultancy", "Diagnostics"],
    icon: "HeartPulse",
  },
  {
    title: "CM Insurance — AI Skunkworks",
    description:
      "Designed CMX, a skunkworks-like innovation department for Belgium's largest health insurer (4.5M members). Two-track approach: rapid 4-week experiment sprints for prototyping, plus a studio track for training internal teams, building an AI app store, and running hackathons. CM already deploys AI at scale; CMX adds innovation velocity.",
    tags: ["AI Strategy", "Insurance", "Enterprise", "Skunkworks"],
    icon: "Rocket",
  },
];

export const featuredProjects = projects.slice(0, 3);
