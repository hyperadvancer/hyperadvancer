import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Section, SectionHeader } from "@/components/section";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights on innovation strategy, AI in practice, and the longevity economy.",
};

export default function Blog() {
  const posts = getAllPosts();

  return (
    <Section className="pt-24 md:pt-32">
      <SectionHeader
        title="Blog"
        subtitle="Thoughts on innovation, technology strategy, and the longevity economy."
      />

      {posts.length === 0 ? (
        <div className="rounded-lg border bg-card p-12 text-center">
          <p className="text-muted-foreground text-lg">
            Posts are on their way. Check back soon.
          </p>
        </div>
      ) : (
        <div className="grid gap-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block rounded-lg border bg-card p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                <div>
                  <h2 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  <p className="mt-2 text-muted-foreground leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </div>
              <div className="mt-4 flex flex-wrap items-center gap-3">
                <span className="text-sm text-muted-foreground">
                  {new Date(post.date).toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </span>
                <span className="text-sm text-muted-foreground">
                  &middot; {post.readingTime}
                </span>
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </Link>
          ))}
        </div>
      )}
    </Section>
  );
}
