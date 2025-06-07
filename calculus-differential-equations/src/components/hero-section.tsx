"use client";

import { Button } from "./ui/button";
import { useState, useEffect } from "react";
import { t } from "@/lib/translations";

export function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-grid-small-black/[0.2] dark:bg-grid-small-white/[0.1] -z-10" />
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-background to-transparent -z-10" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent -z-10" />

      <div className="container py-16 md:py-24 flex flex-col items-center text-center space-y-8">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          <span className="bg-gradient-to-r from-blue-700 to-indigo-600 bg-clip-text text-transparent">
            {mounted ? t("hero.title") : "Master Calculus & Differential Equations"}
          </span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-[70ch] mx-auto">
          {mounted ? t("hero.subtitle") : "From basic algebra fundamentals to advanced differential equations — your complete, interactive guide to understanding mathematical concepts with clear explanations and visual examples."}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <Button size="lg" className="px-8">
            <a href="#basics">{mounted ? t("hero.start") : "Start Learning"}</a>
          </Button>
          <Button size="lg" variant="outline" className="px-8">
            <a href="#roadmap">{mounted ? t("hero.roadmap") : "View Roadmap"}</a>
          </Button>
        </div>

        <div className="w-full max-w-5xl mx-auto pt-8">
          <div className="border border-border/60 rounded-xl overflow-hidden shadow-lg">
            <div className="bg-card/80 dark:bg-card/40 backdrop-blur p-3 md:p-6 grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-6 text-center">
              <div className="flex flex-col items-center p-3 md:p-4 rounded-lg bg-primary/10 border border-primary/20">
                <span className="text-lg md:text-2xl font-bold text-primary">100+</span>
                <span className="text-xs md:text-sm text-muted-foreground">
                  {mounted ? t("hero.stats.formulas") : "Formulas"}
                </span>
              </div>
              <div className="flex flex-col items-center p-3 md:p-4 rounded-lg bg-primary/10 border border-primary/20">
                <span className="text-lg md:text-2xl font-bold text-primary">50+</span>
                <span className="text-xs md:text-sm text-muted-foreground">
                  {mounted ? t("hero.stats.examples") : "Examples"}
                </span>
              </div>
              <div className="flex flex-col items-center p-3 md:p-4 rounded-lg bg-primary/10 border border-primary/20">
                <span className="text-lg md:text-2xl font-bold text-primary">7</span>
                <span className="text-xs md:text-sm text-muted-foreground">
                  {mounted ? t("hero.stats.topics") : "Key Topics"}
                </span>
              </div>
              <div className="flex flex-col items-center p-3 md:p-4 rounded-lg bg-primary/10 border border-primary/20">
                <span className="text-lg md:text-2xl font-bold text-primary">25+</span>
                <span className="text-xs md:text-sm text-muted-foreground">
                  {mounted ? t("hero.stats.applications") : "Applications"}
                </span>
              </div>
              <div className="flex flex-col items-center p-3 md:p-4 rounded-lg bg-primary/10 border border-primary/20 col-span-2 md:col-span-1">
                <span className="text-lg md:text-2xl font-bold text-primary">∞</span>
                <span className="text-xs md:text-sm text-muted-foreground">
                  {mounted ? t("hero.stats.possibilities") : "Possibilities"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
