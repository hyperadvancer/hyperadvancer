import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/section";

export default function NotFound() {
  return (
    <Section className="pt-24 md:pt-32">
      <div className="text-center max-w-lg mx-auto">
        <h1 className="text-3xl font-bold">Page not found</h1>
        <p className="mt-4 text-muted-foreground">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="mt-8">
          <Button asChild>
            <Link href="/">Back to home</Link>
          </Button>
        </div>
      </div>
    </Section>
  );
}
