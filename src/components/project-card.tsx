import Link from "next/link";
import {
  ArrowUpRight,
  Calendar,
  Compass,
  GraduationCap,
  HeartPulse,
  Leaf,
  Lightbulb,
  Network,
  Rocket,
  Shuffle,
  Stethoscope,
  type LucideIcon,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const iconMap: Record<string, LucideIcon> = {
  Calendar,
  Compass,
  GraduationCap,
  HeartPulse,
  Leaf,
  Lightbulb,
  Network,
  Rocket,
  Shuffle,
  Stethoscope,
};

export interface Project {
  title: string;
  description: string;
  tags: string[];
  href?: string;
  highlight?: boolean;
  icon?: string;
}

function CardInner({
  title,
  description,
  tags,
  href,
  highlight,
  icon,
}: Project) {
  const IconComponent = icon ? iconMap[icon] : null;

  return (
    <Card
      className={`h-full transition-shadow hover:shadow-lg ${
        highlight ? "border-accent/30 bg-primary/[0.02]" : ""
      }`}
    >
      {IconComponent && (
        <div className="flex h-32 items-center justify-center rounded-t-xl bg-gradient-to-br from-primary/[0.06] to-primary-light/[0.08]">
          <IconComponent className="h-12 w-12 text-primary/40" strokeWidth={1.5} />
        </div>
      )}
      <CardHeader>
        <CardTitle className="flex items-center justify-between text-lg">
          {title}
          {href && (
            <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
          )}
        </CardTitle>
        <CardDescription className="text-sm leading-relaxed">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export function ProjectCard(props: Project) {
  const { href } = props;

  if (href) {
    return (
      <Link
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        className="group block"
      >
        <CardInner {...props} />
      </Link>
    );
  }

  return (
    <div className="group block">
      <CardInner {...props} />
    </div>
  );
}
