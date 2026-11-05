"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const links = [
  { href: "/practice", label: "Practice" },
  { href: "/quiz", label: "Quiz" },
  { href: "/formulas", label: "Formulae" },
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-20 border-b border-border/80 bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-5xl items-center gap-3 px-4 py-3 pl-8 sm:pl-12 md:pl-20 md:pr-8">
        <Link href="/" className="min-w-0 leading-tight">
          <span className="block font-serif text-lg font-semibold tracking-tight text-foreground">
            Straight Lines
          </span>
          <span className="block text-xs text-muted-foreground">S4 · Compulsory Part</span>
        </Link>
        <nav className="ml-auto flex items-center gap-1">
          {links.map((link) => {
            const active = pathname === link.href || pathname.startsWith(`${link.href}/`);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-lg px-2.5 py-1.5 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground",
                  active && "bg-card text-foreground shadow-sm ring-1 ring-foreground/10",
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mx-auto w-full max-w-5xl px-4 pt-4 pb-10 pl-8 text-sm text-muted-foreground sm:pl-12 md:pl-20 md:pr-8">
      For classroom revision. The questions follow the style of HKDSE Mathematics Paper 2, and they are not an official HKEAA paper.
    </footer>
  );
}
