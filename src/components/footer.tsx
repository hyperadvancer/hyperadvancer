import Image from "next/image";
import Link from "next/link";
import { Linkedin, Twitter, Mail } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const navigation = [
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

const social = [
  {
    href: "https://www.linkedin.com/in/bartcollet/",
    label: "LinkedIn",
    icon: Linkedin,
  },
  {
    href: "https://x.com/bart",
    label: "X / Twitter",
    icon: Twitter,
  },
  {
    href: "mailto:bart@hyperadvancer.com",
    label: "Email",
    icon: Mail,
  },
];

export function Footer() {
  return (
    <footer className="border-t bg-card">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 py-10">
          <div>
            <Link
              href="/"
              className="flex items-center gap-2 text-lg font-bold tracking-tight text-accent"
            >
              <Image src="/h-mark.png" width={24} height={24} alt="" className="rounded" />
              Hyperadvancer
            </Link>
            <p className="mt-1 text-sm text-muted-foreground">
              Innovation strategy &amp; AI advisory
            </p>
          </div>

          <nav className="flex gap-6">
            {navigation.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {label}
              </Link>
            ))}
          </nav>

          <div className="flex gap-4">
            {social.map(({ href, label, icon: Icon }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label={label}
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        <Separator />

        <div className="py-6 text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Hyperadvancer. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
