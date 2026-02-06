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
    title: "Major Health Insurer — AI Innovation Lab",
    description:
      "Designed a skunkworks-style innovation unit for one of Europe's largest health insurers. Two-track approach: rapid 4-week experiment sprints for prototyping, plus a studio track for training internal teams, building an AI app store, and running hackathons. The insurer already deploys AI at scale; the innovation lab adds velocity and structured experimentation.",
    tags: ["AI Strategy", "Insurance", "Enterprise", "Skunkworks"],
    icon: "Rocket",
  },
  {
    title: "Accelerating Digital Health Innovation",
    description:
      "Co-founded HealthStartup and launched five landmark European digital health accelerator events, building the EU's first dedicated digital health innovation community. Connected startups with corporates, clinicians, and policymakers to fast-track collaboration and venture creation.",
    tags: ["Digital Health", "Accelerator", "Community", "Events"],
    icon: "Stethoscope",
  },
  {
    title: "Reviving Healthcare Networks",
    description:
      "Revitalised a large healthcare provider network through new event formats — Pilots tables, Transformer Summit, DEBBI, and Health Arena concepts. Successfully pivoted all formats to virtual delivery within weeks when COVID-19 struck, maintaining community engagement and strategic momentum.",
    tags: ["Healthcare", "Networks", "Events", "COVID Pivot"],
    icon: "Network",
  },
  {
    title: "Strategic Innovation Guidance",
    description:
      "Advisory engagements spanning government, corporate, and hospital sectors: delivered IPCEI funding strategy to the Flemish government, reimagined McKesson's pharmacy services, transformed hospital spaces in Antwerp, and facilitated shark-tank innovation events for major pharmaceutical companies.",
    tags: ["Advisory", "Strategy", "Government", "Pharma"],
    icon: "Compass",
  },
  {
    title: "GitLab Innovation Launchpad",
    description:
      "Created GitLab's inaugural Pitch Innovation Competition, establishing a structured framework for teams to surface, validate, and prototype new offerings. Elevated platform quality, expanded the component catalogue, and strengthened community engagement through competitive innovation.",
    tags: ["Innovation", "Enterprise", "DevOps", "Competition"],
    icon: "Lightbulb",
  },
  {
    title: "Generative AI Bootcamp",
    description:
      "Intensive training programme for large corporate teams covering practical generative AI capabilities, process analysis, prompt engineering, and responsible deployment strategies. Delivered tailored workshops and strategic guidance enabling rapid adoption and immediate operational improvements.",
    tags: ["Generative AI", "Training", "Workshop", "Enterprise"],
    icon: "GraduationCap",
  },
  {
    title: "Wellness Market Strategy",
    description:
      "Comprehensive market research and trend analysis for a stealth hospitality startup assessing growth potential across fitness, wellness, and longevity markets. Delivered an actionable business development roadmap with positioning, competitive landscape, and targeted market entry strategies.",
    tags: ["Strategy", "Wellness", "Market Research", "Longevity"],
    icon: "Leaf",
  },
];

export const featuredProjects = projects.slice(0, 3);
