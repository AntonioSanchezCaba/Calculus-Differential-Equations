"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Calculator, TrendingUp } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-secondary/10">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="container mx-auto px-4 py-24 relative">
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Master{" "}
              <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                Calculus
              </span>{" "}
              &{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Differential Equations
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From foundational algebra to advanced mathematical concepts. Your complete, interactive guide 
              with step-by-step explanations, visual examples, and practical applications.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="group">
              Start Learning
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline">
              View Roadmap
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <div className="flex flex-col items-center p-6 rounded-lg bg-card border border-border/50 interactive-hover">
              <BookOpen className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Comprehensive Content</h3>
              <p className="text-sm text-muted-foreground text-center">
                From basic algebra to advanced differential equations with detailed explanations
              </p>
            </div>
            <div className="flex flex-col items-center p-6 rounded-lg bg-card border border-border/50 interactive-hover">
              <Calculator className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Interactive Examples</h3>
              <p className="text-sm text-muted-foreground text-center">
                Step-by-step solutions with visual aids and practical applications
              </p>
            </div>
            <div className="flex flex-col items-center p-6 rounded-lg bg-card border border-border/50 interactive-hover">
              <TrendingUp className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Progressive Learning</h3>
              <p className="text-sm text-muted-foreground text-center">
                Structured roadmap that builds knowledge systematically
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}