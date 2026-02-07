import Link from "next/link";
import { ArrowRight, Sparkles, Zap, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, SectionHeader } from "@/components/section";
import { ProjectCard } from "@/components/project-card";
import { featuredProjects } from "@/lib/projects";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <Section className="relative pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden">
        {/* Subtle gradient backdrop */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10"
        >
          <div className="absolute -top-24 -right-24 h-[500px] w-[500px] rounded-full bg-primary/[0.04] blur-3xl" />
          <div className="absolute -bottom-32 -left-32 h-[400px] w-[400px] rounded-full bg-primary-light/[0.06] blur-3xl" />
        </div>
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary-light mb-4">
            Healthcare Innovation &amp; AI Advisory
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.1]">
            Innovation hits the ground running and the{" "}
            <span className="text-primary">P&amp;L in record time</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
            I compress months of stakeholder wrangling and product uncertainty
            into days of decisive progress — blending healthcare insight,
            cross-industry creativity, and relentless execution.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button asChild size="lg">
              <Link href="/contact">
                Work with me <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/about">Learn more</Link>
            </Button>
          </div>
        </div>
      </Section>

      {/* Differentiators */}
      <Section className="bg-card border-y">
        <h2 className="sr-only">Why work with me</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Zap,
              title: "Speed to Value",
              description:
                "10-day virtual hackathons, pandemic pivots, prototype-to-pilot sprints. I move fast — from insight to impact in weeks, not quarters.",
            },
            {
              icon: Sparkles,
              title: "30+ Years Credibility",
              description:
                "25 years managing elderly care, five international health events, seven companies launched from hackathons. Frontline to boardroom fluency.",
            },
            {
              icon: Users,
              title: "Knowledge Transfer",
              description:
                "I build capabilities, not dependencies. Every engagement is designed to leave your team more capable, not more dependent.",
            },
          ].map(({ icon: Icon, title, description }) => (
            <div key={title} className="flex gap-4">
              <div className="flex-shrink-0 mt-1">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">{title}</h3>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Featured Projects */}
      <Section>
        <SectionHeader
          title="Featured Work"
          subtitle="A selection of recent projects spanning AI strategy, business development, and digital products."
        />
        <div className="grid md:grid-cols-3 gap-6">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
        <div className="mt-8 text-center">
          <Button asChild variant="outline">
            <Link href="/projects">
              View all projects <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </Section>

      {/* Newsletter CTA */}
      <Section className="!py-10 md:!py-14 bg-primary text-primary-foreground">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
            Stay ahead of the curve
          </h2>
          <p className="mt-3 text-primary-foreground/80">
            Weekly inspiration on innovation strategy, AI in practice, and the
            longevity economy. No fluff, just signal.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Button
              asChild
              variant="secondary"
              className="text-primary font-semibold"
            >
              <a
                href="https://www.linkedin.com/newsletters/7183940717071736832/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Subscribe on LinkedIn <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
            >
              <Link href="/blog">Read the Blog</Link>
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
