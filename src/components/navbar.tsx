"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/theme-toggle";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="text-xl font-bold tracking-tight text-primary">
          Hyperadvancer
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-1">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors hover:text-primary ${
                  pathname === href
                    ? "text-primary bg-primary/5"
                    : "text-muted-foreground"
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
          <li className="ml-1">
            <ThemeToggle />
          </li>
          <li className="ml-1">
            <Button asChild size="sm">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </li>
        </ul>

        {/* Mobile nav */}
        <div className="flex items-center gap-1 md:hidden">
          <ThemeToggle />
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <SheetTitle className="text-lg font-bold text-primary">
                Hyperadvancer
              </SheetTitle>
              <nav className="mt-8 flex flex-col gap-1">
                {links.map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setOpen(false)}
                    className={`px-3 py-2 rounded-md text-base font-medium transition-colors hover:text-primary ${
                      pathname === href
                        ? "text-primary bg-primary/5"
                        : "text-muted-foreground"
                    }`}
                  >
                    {label}
                  </Link>
                ))}
                <Button asChild className="mt-4">
                  <Link href="/contact" onClick={() => setOpen(false)}>
                    Get in Touch
                  </Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
