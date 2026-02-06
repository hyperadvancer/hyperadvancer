"use client";

import { Button } from "@/components/ui/button";
import { Section } from "@/components/section";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <Section className="pt-24 md:pt-32">
      <div className="text-center max-w-lg mx-auto">
        <h1 className="text-3xl font-bold">Something went wrong</h1>
        <p className="mt-4 text-muted-foreground">
          An unexpected error occurred. Please try again.
        </p>
        <div className="mt-8">
          <Button onClick={reset}>Try again</Button>
        </div>
      </div>
    </Section>
  );
}
