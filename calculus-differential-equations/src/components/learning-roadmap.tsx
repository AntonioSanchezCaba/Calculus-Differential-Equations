"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { CheckCircle, Clock, GraduationCap, BookOpen, BrainCircuit, Lightbulb, Compass } from "lucide-react";
import { useState, useEffect } from "react";
import { t } from "@/lib/translations";

export function LearningRoadmap() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="roadmap" className="py-12">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-2">
            {mounted ? t("roadmap.title") : "Your Calculus Learning Path"}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {mounted ? t("roadmap.subtitle") : "Follow this structured roadmap to build a strong foundation and gradually advance to more complex topics in calculus and differential equations."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-7 gap-6 relative">
          {/* Connecting line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/60 via-primary to-primary/60 hidden md:block -z-10 transform -translate-x-1/2" />

          <Card className="md:col-span-3 border-primary/40 shadow-md shadow-primary/10">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-2 mb-1 text-primary">
                <BookOpen className="h-5 w-5" />
                <CardTitle className="text-xl">{mounted ? t("roadmap.step") : "Step"} 1</CardTitle>
              </div>
              <CardDescription className="font-medium text-lg">
                {mounted ? t("roadmap.step1.title") : "Master Algebraic Fundamentals"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>{mounted ? t("roadmap.step1.point1") : "Review polynomial operations and factoring"}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>{mounted ? t("roadmap.step1.point2") : "Understand functions and their properties"}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>{mounted ? t("roadmap.step1.point3") : "Practice with exponents, radicals, and logarithms"}</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <div className="md:col-span-1 flex items-center justify-center">
            <div className="h-10 w-10 rounded-full bg-primary/20 border border-primary flex items-center justify-center md:shadow-lg">
              <GraduationCap className="h-5 w-5 text-primary" />
            </div>
          </div>

          <Card className="md:col-span-3 border-primary/40 shadow-md shadow-primary/10">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-2 mb-1 text-primary">
                <Clock className="h-5 w-5" />
                <CardTitle className="text-xl">{mounted ? t("roadmap.step") : "Step"} 2</CardTitle>
              </div>
              <CardDescription className="font-medium text-lg">
                {mounted ? t("roadmap.step2.title") : "Learn Limits and Continuity"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>{mounted ? t("roadmap.step2.point1") : "Grasp the intuitive concept of limits"}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>{mounted ? t("roadmap.step2.point2") : "Understand continuity and its implications"}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>{mounted ? t("roadmap.step2.point3") : "Master techniques for evaluating complex limits"}</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="md:col-span-3 border-primary/40 shadow-md shadow-primary/10">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-2 mb-1 text-primary">
                <Compass className="h-5 w-5" />
                <CardTitle className="text-xl">{mounted ? t("roadmap.step") : "Step"} 3</CardTitle>
              </div>
              <CardDescription className="font-medium text-lg">
                {mounted ? t("roadmap.step3.title") : "Study Differential Calculus"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>{mounted ? t("roadmap.step3.point1") : "Learn all differentiation rules and techniques"}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>{mounted ? t("roadmap.step3.point2") : "Practice with derivatives of various functions"}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>{mounted ? t("roadmap.step3.point3") : "Explore applications like optimization"}</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <div className="md:col-span-1 flex items-center justify-center">
            <div className="h-10 w-10 rounded-full bg-primary/20 border border-primary flex items-center justify-center md:shadow-lg">
              <Lightbulb className="h-5 w-5 text-primary" />
            </div>
          </div>

          <Card className="md:col-span-3 border-primary/40 shadow-md shadow-primary/10">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-2 mb-1 text-primary">
                <BookOpen className="h-5 w-5" />
                <CardTitle className="text-xl">{mounted ? t("roadmap.step") : "Step"} 4</CardTitle>
              </div>
              <CardDescription className="font-medium text-lg">
                {mounted ? t("roadmap.step4.title") : "Explore Integral Calculus"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>{mounted ? t("roadmap.step4.point1") : "Learn basic integration techniques"}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>{mounted ? t("roadmap.step4.point2") : "Master advanced methods like substitution and parts"}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>{mounted ? t("roadmap.step4.point3") : "Apply integrals to area, volume, and physics problems"}</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="md:col-span-3 border-primary/40 shadow-md shadow-primary/10">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-2 mb-1 text-primary">
                <BrainCircuit className="h-5 w-5" />
                <CardTitle className="text-xl">{mounted ? t("roadmap.step") : "Step"} 5</CardTitle>
              </div>
              <CardDescription className="font-medium text-lg">
                {mounted ? t("roadmap.step5.title") : "Dive into Differential Equations"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>{mounted ? t("roadmap.step5.point1") : "Begin with first-order differential equations"}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>{mounted ? t("roadmap.step5.point2") : "Progress to second-order and higher equations"}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>{mounted ? t("roadmap.step5.point3") : "Study solution methods and practical applications"}</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <div className="md:col-span-1 flex items-center justify-center">
            <div className="h-10 w-10 rounded-full bg-primary/20 border border-primary flex items-center justify-center md:shadow-lg">
              <BrainCircuit className="h-5 w-5 text-primary" />
            </div>
          </div>

          <Card className="md:col-span-3 border-primary/40 shadow-md shadow-primary/10">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-2 mb-1 text-primary">
                <GraduationCap className="h-5 w-5" />
                <CardTitle className="text-xl">{mounted ? t("roadmap.step") : "Step"} 6</CardTitle>
              </div>
              <CardDescription className="font-medium text-lg">
                {mounted ? t("roadmap.step6.title") : "Advance to PDE & Advanced Topics"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>{mounted ? t("roadmap.step6.point1") : "Study partial differential equations"}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>{mounted ? t("roadmap.step6.point2") : "Explore numerical methods and series solutions"}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>{mounted ? t("roadmap.step6.point3") : "Delve into Laplace transforms and Fourier analysis"}</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
