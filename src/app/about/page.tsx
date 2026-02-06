import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Section, SectionHeader } from "@/components/section";

export const metadata: Metadata = {
  title: "About",
  description:
    "Bart Collet — healthcare innovation catalyst with 30+ years of experience transforming complex healthcare challenges into scalable solutions.",
};

const services = [
  {
    name: "Innovation Flash-Diagnosis",
    duration: "2-week sprint",
    description:
      "Rapid outside-in assessment delivering an organisational readiness scorecard, bottleneck map, and top 3 quick wins with implementation pathways.",
  },
  {
    name: "Accelerator in-a-Box",
    duration: "6 weeks + 1 event day",
    description:
      "Full hackathon format without internal capacity: concept design, speaker curation, facilitator playbook, and post-event venturing report.",
  },
  {
    name: "AI Process-Automation",
    duration: "Project-based",
    description:
      "Operational deep-dive, personalised automation roadmap, team training workshops, and strategic implementation guidance.",
  },
  {
    name: "Prototype-to-Pilot",
    duration: "3-month agile",
    description:
      "Customer discovery, clickable prototype, lean business case, and pilot-site onboarding plan. From idea to MVP.",
  },
  {
    name: "Innovation Ops Interim Lead",
    duration: "6–12 months",
    description:
      "Fractional or full-time innovation leadership: roadmap execution, KPI monitoring, coaching, and transition planning.",
  },
  {
    name: "Board-Level Advisor",
    duration: "Quarterly retainer",
    description:
      "Quarterly trend briefings, technology and partnership scouting, speaking and PR support for boards seeking foresight.",
  },
  {
    name: "Cross-Industry Inspiration Safari",
    duration: "4 weeks + 2-day workshop",
    description:
      "Curated case studies from non-traditional sources, partner introductions, and a translate-to-your-context workshop.",
  },
  {
    name: "Virtual Hackathon Turbo",
    duration: "10-day remote sprint",
    description:
      "Platform setup, challenge framing, daily standups, mentoring, judging, and post-event incubation follow-up.",
  },
];

const expertise = [
  "AI & Machine Learning",
  "Innovation Strategy",
  "Digital Health",
  "Longevity Science",
  "Data Engineering",
  "Insurance Tech",
  "Hackathons & Events",
  "Workshop Facilitation",
  "Product Prototyping",
  "Vibe Coding",
];

export default function About() {
  return (
    <>
      {/* Hero */}
      <Section className="relative pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10"
        >
          <div className="absolute -top-24 -right-24 h-[500px] w-[500px] rounded-full bg-primary/[0.04] blur-3xl" />
          <div className="absolute -bottom-32 -left-32 h-[400px] w-[400px] rounded-full bg-primary-light/[0.06] blur-3xl" />
        </div>
        <div className="flex flex-col md:flex-row md:items-start gap-10 md:gap-16">
          <div className="flex-1 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary-light mb-4">
              About
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-[1.1]">
              Bart Collet
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              I&apos;m a healthcare innovation catalyst based in Antwerp, Belgium.
              For over 30 years, I&apos;ve been transforming complex healthcare
              challenges into scalable solutions — blending healthcare insight,
              cross-industry creativity, and relentless execution.
            </p>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              For a quarter of a century, I managed{" "}
              <strong>Huis Vandecruys</strong>, a 72-resident elderly care
              facility with 50 staff members, pioneering operational excellence
              and compassionate care delivery. That frontline experience gives me
              unique credibility with both clinicians and C-suite executives.
            </p>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              As a digital builder, I created{" "}
              <strong>JPLAN</strong> (2003) — a web-based healthcare staff
              scheduling tool — and <strong>CALBLOX</strong> (2013), a
              tablet-optimised task management platform for healthcare workers.
              I&apos;ve orchestrated five international digital health events,
              conducted four public hackathons launching seven successful
              companies, and led{" "}
              <strong>VR4Rehab&apos;s international virtual hackathon</strong> with
              15 teams in just 10 days.
            </p>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Currently, I&apos;m focused on the{" "}
              <strong>longevity economy</strong> — the companies, conferences, and
              communities shaping the future of healthspan. I run the{" "}
              <a
                href="https://longevents.hyperadvancer.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Longevity Events Calendar
              </a>
              , a curated database of 250+ longevity conferences worldwide.
            </p>
          </div>
          <div className="flex-shrink-0 mx-auto md:mx-0">
            <Image
              src="/headshot.jpeg"
              alt="Bart Collet"
              width={280}
              height={350}
              className="rounded-2xl shadow-lg object-cover"
              priority
            />
          </div>
        </div>
      </Section>

      {/* Expertise */}
      <Section className="bg-white border-y py-12">
        <div className="flex flex-wrap gap-3">
          {expertise.map((skill) => (
            <Badge
              key={skill}
              variant="secondary"
              className="text-sm px-4 py-1.5"
            >
              {skill}
            </Badge>
          ))}
        </div>
      </Section>

      {/* Core Differentiators */}
      <Section>
        <SectionHeader title="What sets me apart" />
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-2">Speed</h3>
            <p className="text-muted-foreground leading-relaxed">
              I compress months of stakeholder wrangling and product uncertainty
              into days of decisive progress. A 10-day virtual hackathon,
              pandemic pivots, prototype-to-pilot — I move fast without cutting
              corners.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Credibility</h3>
            <p className="text-muted-foreground leading-relaxed">
              25 years on the frontline of elderly care, plus advisory roles at
              SXSW, ICT&amp;Health, eHealth Hub, and AI4Health. I speak both
              clinical and commercial, translating in both directions without
              losing signal.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Knowledge Transfer</h3>
            <p className="text-muted-foreground leading-relaxed">
              My goal is always to work myself out of a job. Every engagement
              is designed to leave your team more capable, not more dependent.
              I build capabilities, not consulting dependencies.
            </p>
          </div>
        </div>
      </Section>

      {/* Advisory Boards */}
      <Section className="bg-white border-y">
        <SectionHeader title="Advisory & Speaking" />
        <p className="text-muted-foreground leading-relaxed max-w-3xl">
          I serve on advisory boards including{" "}
          <strong>SXSW</strong>, <strong>ICT&amp;Health</strong>,{" "}
          <strong>eHealth Hub</strong>, and <strong>AI4Health</strong>,
          providing foresight on digital health trends and emerging
          opportunities. Past consulting clients include the Flemish government
          (IPCEI funding), McKesson (pharmacy strategy), Coca-Cola (health and
          nutrition innovation), UCB Pharma (Hack Epilepsy — eyeforpharma
          Barcelona Awards 2016), and GitLab (inaugural Pitch Innovation
          Competition).
        </p>
      </Section>

      {/* Services */}
      <Section>
        <SectionHeader
          title="Service Packages"
          subtitle="Flexible engagement models — from a 2-week sprint to 12 months of fractional leadership."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ name, duration, description }) => (
            <div
              key={name}
              className="rounded-lg border bg-white p-5 hover:shadow-sm transition-shadow"
            >
              <h3 className="font-semibold text-sm mb-1">{name}</h3>
              <p className="text-xs text-primary-light font-medium mb-2">
                {duration}
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-white border-y">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold">Interested in working together?</h2>
          <p className="mt-4 text-muted-foreground">
            Whether you need a strategic sounding board, a hackathon organiser,
            hands-on delivery support, or a keynote speaker — I&apos;d love to
            hear from you.
          </p>
          <div className="mt-6">
            <Button asChild size="lg">
              <Link href="/contact">
                Get in touch <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
