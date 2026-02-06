import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export interface Project {
  title: string;
  description: string;
  tags: string[];
  href?: string;
  highlight?: boolean;
}

function CardInner({
  title,
  description,
  tags,
  href,
  highlight,
}: Project) {
  return (
    <Card
      className={`h-full transition-shadow hover:shadow-lg ${
        highlight ? "border-primary/30 bg-primary/[0.02]" : ""
      }`}
    >
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
