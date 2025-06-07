"use client";

import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "./ui/button";
import { Book, Github } from "lucide-react";
import { useState, useEffect } from "react";
import { t, toggleLanguage } from "@/lib/translations";

export function SiteHeader() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between py-4">
        <div className="flex items-center gap-2">
          <Book className="h-6 w-6 text-primary" />
          <Link href="/" className="flex items-center">
            <h1 className="text-xl font-bold hidden sm:inline-block bg-gradient-to-r from-blue-700 to-indigo-600 bg-clip-text text-transparent">
              {mounted ? t("nav.title") : "Calculus & DE Guide"}
            </h1>
            <h1 className="text-xl font-bold sm:hidden bg-gradient-to-r from-blue-700 to-indigo-600 bg-clip-text text-transparent">
              {mounted ? t("nav.title.short") : "Calc Guide"}
            </h1>
          </Link>
        </div>

        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <Link href="#basics" className="transition-colors hover:text-primary">
            {mounted ? t("nav.algebra") : "Algebra"}
          </Link>
          <Link href="#derivatives" className="transition-colors hover:text-primary">
            {mounted ? t("nav.derivatives") : "Derivatives"}
          </Link>
          <Link href="#integrals" className="transition-colors hover:text-primary">
            {mounted ? t("nav.integrals") : "Integrals"}
          </Link>
          <Link href="#odes" className="transition-colors hover:text-primary">
            {mounted ? t("nav.odes") : "ODEs"}
          </Link>
          <Link href="#pdes" className="transition-colors hover:text-primary">
            {mounted ? t("nav.pdes") : "PDEs"}
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          {mounted && (
            <Button
              variant="outline"
              size="sm"
              onClick={toggleLanguage}
            >
              {t("nav.language")}
            </Button>
          )}

          <Button variant="ghost" size="icon" className="rounded-full" asChild>
            <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Github className="h-[1.2rem] w-[1.2rem]" />
              <span className="sr-only">GitHub</span>
            </Link>
          </Button>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
