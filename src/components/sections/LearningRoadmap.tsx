"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, BookOpen, Calculator, TrendingUp, Zap } from "lucide-react";
import { t } from "@/lib/translations";

export function LearningRoadmap() {
  const roadmapSteps = [
    {
      id: 1,
      title: t("roadmap.step1.title"),
      description: t("roadmap.step1.description"),
      icon: BookOpen,
      duration: t("roadmap.step1.duration"),
      difficulty: t("ui.beginner"),
      topics: [
        t("roadmap.step1.topic1"),
        t("roadmap.step1.topic2"),
        t("roadmap.step1.topic3"),
        t("roadmap.step1.topic4")
      ],
      color: "bg-green-500"
    },
    {
      id: 2,
      title: t("roadmap.step2.title"),
      description: t("roadmap.step2.description"),
      icon: TrendingUp,
      duration: t("roadmap.step2.duration"),
      difficulty: t("ui.intermediate"),
      topics: [
        t("roadmap.step2.topic1"),
        t("roadmap.step2.topic2"),
        t("roadmap.step2.topic3"),
        t("roadmap.step2.topic4")
      ],
      color: "bg-blue-500"
    },
    {
      id: 3,
      title: t("roadmap.step3.title"),
      description: t("roadmap.step3.description"),
      icon: Calculator,
      duration: t("roadmap.step3.duration"),
      difficulty: t("ui.intermediate"),
      topics: [
        t("roadmap.step3.topic1"),
        t("roadmap.step3.topic2"),
        t("roadmap.step3.topic3"),
        t("roadmap.step3.topic4")
      ],
      color: "bg-purple-500"
    },
    {
      id: 4,
      title: t("roadmap.step4.title"),
      description: t("roadmap.step4.description"),
      icon: TrendingUp,
      duration: t("roadmap.step4.duration"),
      difficulty: t("ui.intermediate"),
      topics: [
        t("roadmap.step4.topic1"),
        t("roadmap.step4.topic2"),
        t("roadmap.step4.topic3"),
        t("roadmap.step4.topic4")
      ],
      color: "bg-orange-500"
    },
    {
      id: 5,
      title: t("roadmap.step5.title"),
      description: t("roadmap.step5.description"),
      icon: Zap,
      duration: t("roadmap.step5.duration"),
      difficulty: t("ui.advanced"),
      topics: [
        t("roadmap.step5.topic1"),
        t("roadmap.step5.topic2"),
        t("roadmap.step5.topic3"),
        t("roadmap.step5.topic4")
      ],
      color: "bg-red-500"
    },
    {
      id: 6,
      title: t("roadmap.step6.title"),
      description: t("roadmap.step6.description"),
      icon: BookOpen,
      duration: t("roadmap.step6.duration"),
      difficulty: t("ui.advanced"),
      topics: [
        t("roadmap.step6.topic1"),
        t("roadmap.step6.topic2"),
        t("roadmap.step6.topic3"),
        t("roadmap.step6.topic4")
      ],
      color: "bg-indigo-500"
    }
  ];

  return (
    <section id="roadmap" className="space-y-8">
      <div className="text-center space-y-4">
        <Badge variant="secondary" className="text-sm">{t("ui.learning-path")}</Badge>
        <h2 className="text-3xl md:text-4xl font-bold">{t("section.roadmap.title")}</h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          {t("section.roadmap.subtitle")}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {roadmapSteps.map((step, index) => {
          const Icon = step.icon;
          return (
            <Card key={step.id} className="section-card relative overflow-hidden">
              <div className={`absolute top-0 left-0 w-full h-1 ${step.color}`}></div>
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <div className={`p-2 rounded-lg ${step.color} text-white`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <Badge variant="outline" className="text-xs">
                      Step {step.id}
                    </Badge>
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {step.difficulty}
                  </Badge>
                </div>
                <CardTitle className="text-lg">{step.title}</CardTitle>
                <CardDescription>{step.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>{step.duration}</span>
                </div>
                
                <div className="space-y-2">
                  <h4 className="font-medium text-sm">{t("ui.key-topics")}</h4>
                  <ul className="space-y-1">
                    {step.topics.map((topic, topicIndex) => (
                      <li key={topicIndex} className="flex items-start space-x-2 text-sm">
                        <CheckCircle className="h-3 w-3 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-muted-foreground">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="mt-12 p-6 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl border border-primary/20">
        <div className="text-center space-y-4">
          <h3 className="text-2xl font-bold">{t("ui.ready-start")}</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t("ui.ready-desc")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
            <div className="flex items-center space-x-2 text-sm">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span>{t("ui.practice-included")}</span>
            </div>
            <div className="flex items-center space-x-2 text-sm">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span>{t("ui.step-solutions")}</span>
            </div>
            <div className="flex items-center space-x-2 text-sm">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span>{t("ui.real-world")}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}