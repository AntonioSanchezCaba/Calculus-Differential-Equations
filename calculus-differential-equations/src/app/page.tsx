"use client";

import { useState, useEffect } from "react";
import { BasicsSection } from "@/components/BasicsSection";
import { DerivativesSection } from "@/components/DerivativesSection";
import { HeroSection } from "@/components/hero-section";
import { LearningRoadmap } from "@/components/learning-roadmap";
import { OrdinaryDESection } from "@/components/OrdinaryDESection";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { t } from "@/lib/translations";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      <main className="flex-1">
        <HeroSection />

        <div className="container mx-auto py-16 space-y-24">
          <BasicsSection />

          <section id="limits" className="bg-card rounded-xl shadow-md p-6 lg:p-8">
            <h2 className="text-3xl font-bold text-primary mb-6">
              {mounted ? t("section.limits") : "Limits & Continuity"}
            </h2>
            <p className="text-muted-foreground mb-4">
              {mounted ? t("section.limits.desc") : "Coming soon: Comprehensive exploration of limits, epsilon-delta definition, continuity, and their applications."}
            </p>
          </section>

          <DerivativesSection />

          <section id="integrals" className="bg-card rounded-xl shadow-md p-6 lg:p-8">
            <h2 className="text-3xl font-bold text-primary mb-6">
              {mounted ? t("section.integral") : "Integral Calculus"}
            </h2>
            <p className="text-muted-foreground mb-4">
              {mounted ? t("section.integral.desc") : "Coming soon: Complete coverage of integration techniques, definite and indefinite integrals."}
            </p>
          </section>

          <OrdinaryDESection />

          <section id="pdes" className="bg-card rounded-xl shadow-md p-6 lg:p-8">
            <h2 className="text-3xl font-bold text-primary mb-6">
              {mounted ? t("section.pdes") : "Partial Differential Equations"}
            </h2>
            <p className="text-muted-foreground mb-4">
              {mounted ? t("section.pdes.desc") : "Coming soon: Introduction to PDEs, boundary value problems, and solution methods."}
            </p>
          </section>

          <section id="advanced" className="bg-card rounded-xl shadow-md p-6 lg:p-8">
            <h2 className="text-3xl font-bold text-primary mb-6">
              {mounted ? t("section.advanced") : "Advanced Topics"}
            </h2>
            <p className="text-muted-foreground mb-4">
              {mounted ? t("section.advanced.desc") : "Coming soon: Laplace transforms, Fourier series, and complex analysis."}
            </p>
          </section>

          <LearningRoadmap />
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
