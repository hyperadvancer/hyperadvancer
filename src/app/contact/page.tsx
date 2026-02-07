import type { Metadata } from "next";
import { Linkedin, Twitter, Mail, Calendar } from "lucide-react";
import { Section, SectionHeader } from "@/components/section";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Bart Collet — for advisory, speaking, or collaboration.",
};

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "bart@hyperadvancer.com",
    href: "mailto:bart@hyperadvancer.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/bartcollet",
    href: "https://www.linkedin.com/in/bartcollet/",
  },
  {
    icon: Twitter,
    label: "X / Twitter",
    value: "@bart",
    href: "https://x.com/bart",
  },
  {
    icon: Calendar,
    label: "Book a Call",
    value: "Schedule a 30-minute intro call",
    href: "https://cal.eu/bartcollet",
  },
];

export default function Contact() {
  return (
    <Section className="pt-24 md:pt-32">
      <div className="max-w-2xl">
        <SectionHeader
          title="Get in Touch"
          subtitle="Whether you have a project in mind, want to explore a collaboration, or just want to say hello — I'd love to hear from you."
        />

        <div className="grid gap-6">
          {contactMethods.map(({ icon: Icon, label, value, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              aria-label={`Contact via ${label}`}
              className="flex items-center gap-4 rounded-lg border bg-card p-5 hover:shadow-md transition-shadow group"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <Icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-foreground">{label}</p>
                <p className="text-sm text-muted-foreground">{value}</p>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-12 rounded-lg bg-primary/5 border border-primary/10 p-6">
          <h3 className="font-semibold text-lg mb-2">
            Looking for something specific?
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            I offer innovation strategy, automation advisory, business
            development support, workshops, and fractional executive services
            (development, innovation). Check the{" "}
            <a href="/about" className="text-primary hover:underline">
              About page
            </a>{" "}
            for a full overview of service packages, or reach out directly and
            we&apos;ll find the right format together.
          </p>
        </div>
      </div>
    </Section>
  );
}
