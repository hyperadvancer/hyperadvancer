import type { Metadata } from "next";
import { Section, SectionHeader } from "@/components/section";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "A showcase of projects spanning AI strategy, data engineering, digital health, and innovation tools.",
};

export default function Projects() {
  return (
    <Section className="pt-24 md:pt-32">
      <SectionHeader
        title="Projects"
        subtitle="Things I've built, advised on, or helped bring to life. Each one represents a different facet of bridging technology and business."
      />
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </Section>
  );
}
