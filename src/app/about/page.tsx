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

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Bart Collet",
  url: "https://hyperadvancer.com",
  image: "https://hyperadvancer.com/headshot.jpeg",
  jobTitle: "Healthcare Innovation Catalyst",
  worksFor: {
    "@type": "Organization",
    name: "Hyperadvancer",
    url: "https://hyperadvancer.com",
  },
  sameAs: [
    "https://www.linkedin.com/in/bartcollet/",
    "https://x.com/bartcollet",
  ],
  knowsAbout: [
    "AI & Machine Learning",
    "Innovation Strategy",
    "Digital Health",
    "Longevity Science",
    "Data Engineering",
    "Healthcare Technology",
  ],
};

const services = [
  {
    name: "Rapid Assessment & Strategy",
    duration: "2–4 weeks",
    summary:
      "Fast, outside-in diagnosis of your innovation readiness — paired with cross-industry inspiration to unlock new directions.",
    deliverables: [
      "Organisational readiness scorecard and bottleneck map",
      "Top 3 quick wins with implementation pathways",
      "Curated cross-industry case studies and partner introductions",
      "Translate-to-your-context workshop (2 days)",
    ],
  },
  {
    name: "Hackathons & Accelerators",
    duration: "10 days – 6 weeks",
    summary:
      "End-to-end innovation event formats — from rapid remote sprints to full-scale accelerator programmes with post-event venturing support.",
    deliverables: [
      "Challenge framing, concept design, and speaker curation",
      "Facilitator playbook and mentoring programme",
      "Platform setup, daily standups, and judging",
      "Post-event incubation follow-up and venturing report",
    ],
  },
  {
    name: "AI & Automation",
    duration: "Project-based / 3-month agile",
    summary:
      "From operational deep-dives to working prototypes — practical AI implementation that moves from roadmap to pilot.",
    deliverables: [
      "Personalised automation roadmap and team training",
      "Customer discovery and clickable prototype",
      "Lean business case and pilot-site onboarding plan",
      "Strategic implementation guidance throughout",
    ],
  },
  {
    name: "Leadership & Advisory",
    duration: "Quarterly retainer – 12 months",
    summary:
      "Fractional innovation leadership or board-level advisory — embedding strategic foresight and execution capability into your organisation.",
    deliverables: [
      "Innovation roadmap execution and KPI monitoring",
      "Coaching, capability building, and transition planning",
      "Quarterly trend briefings and technology scouting",
      "Partnership scouting, speaking, and PR support",
    ],
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      {/* Hero */}
      <Section className="relative pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10"
        >
          <div className="absolute -top-20 -right-20 h-[600px] w-[200px] rotate-12 bg-brand-accent/[0.06]" />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "radial-gradient(circle, var(--foreground) 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />
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
              Currently, I&apos;m focused on automation strategies, new business
              models and the{" "}
              <strong>longevity economy</strong> — the companies, conferences, and
              communities shaping the future of healthspan. I run the{" "}
              <a
                href="https://longevents.hyperadvancer.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline decoration-accent/70 underline-offset-2"
              >
                Longevity Events Calendar
              </a>
              , a curated database of 300+ longevity conferences worldwide.
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
      <Section className="bg-card border-y py-12">
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
      <Section className="bg-card border-y">
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
          accentDivider
        />
        <div className="grid sm:grid-cols-2 gap-6">
          {services.map(({ name, duration, summary, deliverables }) => (
            <div
              key={name}
              className="rounded-lg border bg-card p-6 hover:shadow-sm transition-shadow"
            >
              <h3 className="font-semibold text-lg mb-1">{name}</h3>
              <p className="text-sm text-brand-accent font-medium mb-3">
                {duration}
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {summary}
              </p>
              <details className="group">
                <summary className="text-sm font-medium text-foreground cursor-pointer select-none hover:text-primary transition-colors">
                  What&apos;s included
                </summary>
                <ul className="mt-3 space-y-2">
                  {deliverables.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </details>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-card border-y">
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
