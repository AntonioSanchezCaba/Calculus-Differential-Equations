"use client";

import { useState, useEffect } from "react";
import { Header } from "@/components/layout/Header";
import { HeroSection } from "@/components/sections/HeroSection";
import { AlgebraSection } from "@/components/sections/AlgebraSection";
import { LimitsSection } from "@/components/sections/LimitsSection";
import { DerivativesSection } from "@/components/sections/DerivativesSection";
import { IntegralsSection } from "@/components/sections/IntegralsSection";
import { DifferentialEquationsSection } from "@/components/sections/DifferentialEquationsSection";
import { LearningRoadmap } from "@/components/sections/LearningRoadmap";
import { Footer } from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/providers/ThemeProvider";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <HeroSection />
          <div className="container mx-auto px-4 py-16 space-y-24">
            <AlgebraSection />
            <LimitsSection />
            <DerivativesSection />
            <IntegralsSection />
            <DifferentialEquationsSection />
            <LearningRoadmap />
          </div>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}