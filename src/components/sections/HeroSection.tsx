"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Calculator, TrendingUp } from "lucide-react";
import { t } from "@/lib/translations";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-secondary/10">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="container mx-auto px-4 py-24 relative">
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              {t("hero.title")}
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t("hero.subtitle")}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="group">
              {t("hero.start")}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline">
              {t("hero.roadmap")}
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mt-16">
            <div className="flex flex-col items-center p-6 rounded-lg bg-card border border-border/50 interactive-hover">
              <div className="text-2xl font-bold text-primary mb-2">100+</div>
              <div className="text-sm text-muted-foreground">{t("hero.stats.formulas")}</div>
            </div>
            <div className="flex flex-col items-center p-6 rounded-lg bg-card border border-border/50 interactive-hover">
              <div className="text-2xl font-bold text-primary mb-2">50+</div>
              <div className="text-sm text-muted-foreground">{t("hero.stats.examples")}</div>
            </div>
            <div className="flex flex-col items-center p-6 rounded-lg bg-card border border-border/50 interactive-hover">
              <div className="text-2xl font-bold text-primary mb-2">7</div>
              <div className="text-sm text-muted-foreground">{t("hero.stats.topics")}</div>
            </div>
            <div className="flex flex-col items-center p-6 rounded-lg bg-card border border-border/50 interactive-hover">
              <div className="text-2xl font-bold text-primary mb-2">25+</div>
              <div className="text-sm text-muted-foreground">{t("hero.stats.applications")}</div>
            </div>
            <div className="flex flex-col items-center p-6 rounded-lg bg-card border border-border/50 interactive-hover">
              <div className="text-2xl font-bold text-primary mb-2">∞</div>
              <div className="text-sm text-muted-foreground">{t("hero.stats.possibilities")}</div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <div className="flex flex-col items-center p-6 rounded-lg bg-card border border-border/50 interactive-hover">
              <BookOpen className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">{t("hero.feature1.title")}</h3>
              <p className="text-sm text-muted-foreground text-center">
                {t("hero.feature1.desc")}
              </p>
            </div>
            <div className="flex flex-col items-center p-6 rounded-lg bg-card border border-border/50 interactive-hover">
              <Calculator className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">{t("hero.feature2.title")}</h3>
              <p className="text-sm text-muted-foreground text-center">
                {t("hero.feature2.desc")}
              </p>
            </div>
            <div className="flex flex-col items-center p-6 rounded-lg bg-card border border-border/50 interactive-hover">
              <TrendingUp className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">{t("hero.feature3.title")}</h3>
              <p className="text-sm text-muted-foreground text-center">
                {t("hero.feature3.desc")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}