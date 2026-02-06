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
      <Section className="pt-24 md:pt-32 pb-16 md:pb-24">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary-light mb-4">
            Innovation Strategy &amp; AI Advisory
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.1]">
            Bridging cutting-edge technology and{" "}
            <span className="text-primary">real-world outcomes</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
            I help organisations translate emerging technologies — AI, data,
            digital health — into actionable strategies that drive measurable
            results. From boardroom advisory to hands-on delivery.
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
      <Section className="bg-white border-y">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Zap,
              title: "Speed to Value",
              description:
                "Rapid prototyping and iterative delivery. From insight to impact in weeks, not quarters.",
            },
            {
              icon: Sparkles,
              title: "Deep Credibility",
              description:
                "Two decades of experience across insurance, health tech, longevity, and digital innovation.",
            },
            {
              icon: Users,
              title: "Knowledge Transfer",
              description:
                "I build capabilities, not dependencies. Every engagement leaves your team stronger.",
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
          subtitle="A selection of recent projects spanning AI strategy, data engineering, and digital products."
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
      <Section className="bg-primary text-primary-foreground">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Stay ahead of the curve
          </h2>
          <p className="mt-4 text-primary-foreground/80 text-lg">
            Weekly insights on innovation strategy, AI in practice, and the
            longevity economy. No fluff, just signal.
          </p>
          <div className="mt-8">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="text-primary font-semibold"
            >
              <Link href="/contact">Subscribe to the newsletter</Link>
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
