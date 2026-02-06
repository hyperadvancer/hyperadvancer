import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Section, SectionHeader } from "@/components/section";

export const metadata: Metadata = {
  title: "About",
  description:
    "Bart Collet — innovation strategist, AI advisor, and builder. Two decades of experience translating emerging technology into business outcomes.",
};

const services = [
  {
    name: "AI Strategy & Roadmap",
    description: "Map use cases, prioritise by impact/feasibility, build your AI roadmap.",
  },
  {
    name: "Innovation Sprint",
    description: "From problem statement to validated prototype in 2–4 weeks.",
  },
  {
    name: "Data Strategy",
    description: "Audit your data landscape, identify quick wins, design your data platform.",
  },
  {
    name: "Digital Product Advisory",
    description: "Product-market fit validation, tech stack guidance, go-to-market strategy.",
  },
  {
    name: "Executive Workshops",
    description: "Half-day to full-day workshops on AI, innovation, and digital transformation.",
  },
  {
    name: "Fractional CTO / CDO",
    description: "Part-time technology leadership for scale-ups and innovation teams.",
  },
  {
    name: "Due Diligence & Assessment",
    description: "Technical due diligence for investors, acquirers, and boards.",
  },
  {
    name: "Keynote Speaking",
    description: "Engaging talks on AI, longevity tech, innovation, and the future of work.",
  },
];

const expertise = [
  "AI & Machine Learning",
  "Innovation Strategy",
  "Digital Health",
  "Longevity Science",
  "Data Engineering",
  "Insurance Tech",
  "Product Management",
  "Workshop Facilitation",
];

export default function About() {
  return (
    <>
      {/* Hero */}
      <Section className="pt-24 md:pt-32 pb-16">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary-light mb-4">
            About
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-[1.1]">
            Bart Collet
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            I&apos;m an innovation strategist and AI advisor based in Belgium. For
            twenty years, I&apos;ve been helping organisations — from Fortune 500
            insurers to early-stage health tech start-ups — make better
            decisions about technology.
          </p>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            My work sits at the intersection of <strong>strategy and execution</strong>.
            I don&apos;t just write slide decks; I build things. Whether that&apos;s an
            AI-powered data pipeline, a product prototype, or a corporate
            innovation programme, I get my hands dirty alongside the teams I advise.
          </p>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Currently, I&apos;m particularly focused on the <strong>longevity economy</strong> —
            the companies, conferences, and communities shaping the future of
            healthspan and human performance. I run{" "}
            <a
              href="https://longevents.hyperadvancer.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Longevity Events Calendar
            </a>
            , a curated database of 200+ longevity conferences worldwide.
          </p>
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
              I move fast without cutting corners. Decades of pattern recognition
              mean I can identify the 20% of work that delivers 80% of the value —
              and ship it first.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Credibility</h3>
            <p className="text-muted-foreground leading-relaxed">
              I&apos;ve been in the room — boardrooms, war rooms, server rooms.
              I speak both business and technology fluently, which means I can
              translate in both directions without losing signal.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Knowledge Transfer</h3>
            <p className="text-muted-foreground leading-relaxed">
              My goal is always to work myself out of a job. Every engagement is
              designed to leave your team more capable, not more dependent.
            </p>
          </div>
        </div>
      </Section>

      {/* Services */}
      <Section className="bg-white border-y">
        <SectionHeader
          title="Service Packages"
          subtitle="Flexible engagement models from one-day workshops to ongoing advisory."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ name, description }) => (
            <div
              key={name}
              className="rounded-lg border bg-background p-5 hover:shadow-sm transition-shadow"
            >
              <h3 className="font-semibold text-sm mb-2">{name}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold">Interested in working together?</h2>
          <p className="mt-4 text-muted-foreground">
            Whether you need a strategic sounding board, hands-on delivery
            support, or a keynote speaker, I&apos;d love to hear from you.
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
