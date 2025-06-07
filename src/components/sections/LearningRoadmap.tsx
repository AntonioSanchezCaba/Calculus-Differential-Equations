"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, BookOpen, Calculator, TrendingUp, Zap } from "lucide-react";

export function LearningRoadmap() {
  const roadmapSteps = [
    {
      id: 1,
      title: "Master Algebraic Foundations",
      description: "Build a solid foundation with essential algebra skills",
      icon: BookOpen,
      duration: "2-3 weeks",
      difficulty: "Beginner",
      topics: [
        "Order of operations and basic arithmetic",
        "Polynomial operations and factoring",
        "Solving linear and quadratic equations",
        "Functions and their properties"
      ],
      color: "bg-green-500"
    },
    {
      id: 2,
      title: "Understand Limits & Continuity",
      description: "Grasp the fundamental concepts that bridge algebra and calculus",
      icon: TrendingUp,
      duration: "2-3 weeks",
      difficulty: "Intermediate",
      topics: [
        "Intuitive understanding of limits",
        "Limit evaluation techniques",
        "Continuity and discontinuities",
        "Limits at infinity"
      ],
      color: "bg-blue-500"
    },
    {
      id: 3,
      title: "Master Differential Calculus",
      description: "Learn to find rates of change and slopes of curves",
      icon: Calculator,
      duration: "3-4 weeks",
      difficulty: "Intermediate",
      topics: [
        "Definition and interpretation of derivatives",
        "Differentiation rules and techniques",
        "Chain rule and implicit differentiation",
        "Applications: optimization, related rates"
      ],
      color: "bg-purple-500"
    },
    {
      id: 4,
      title: "Explore Integral Calculus",
      description: "Discover the reverse of differentiation and its applications",
      icon: TrendingUp,
      duration: "3-4 weeks",
      difficulty: "Intermediate",
      topics: [
        "Antiderivatives and indefinite integrals",
        "Integration techniques and substitution",
        "Definite integrals and applications",
        "Area, volume, and arc length problems"
      ],
      color: "bg-orange-500"
    },
    {
      id: 5,
      title: "Dive into Differential Equations",
      description: "Model dynamic systems with differential equations",
      icon: Zap,
      duration: "4-5 weeks",
      difficulty: "Advanced",
      topics: [
        "First-order differential equations",
        "Second-order linear equations",
        "Applications in physics and biology",
        "Numerical methods and solutions"
      ],
      color: "bg-red-500"
    },
    {
      id: 6,
      title: "Advanced Topics & Applications",
      description: "Explore specialized topics and real-world applications",
      icon: BookOpen,
      duration: "Ongoing",
      difficulty: "Advanced",
      topics: [
        "Partial differential equations",
        "Laplace transforms",
        "Fourier series and analysis",
        "Mathematical modeling"
      ],
      color: "bg-indigo-500"
    }
  ];

  return (
    <section id="roadmap" className="space-y-8">
      <div className="text-center space-y-4">
        <Badge variant="secondary" className="text-sm">Learning Path</Badge>
        <h2 className="text-3xl md:text-4xl font-bold">Your Calculus Learning Roadmap</h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Follow this structured path to build a strong foundation and systematically advance 
          through calculus and differential equations.
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
                  <h4 className="font-medium text-sm">Key Topics:</h4>
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
          <h3 className="text-2xl font-bold">Ready to Start Your Journey?</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Remember, mastering calculus is a marathon, not a sprint. Take your time with each concept, 
            practice regularly, and don't hesitate to revisit earlier topics when needed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
            <div className="flex items-center space-x-2 text-sm">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span>Practice problems included</span>
            </div>
            <div className="flex items-center space-x-2 text-sm">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span>Step-by-step solutions</span>
            </div>
            <div className="flex items-center space-x-2 text-sm">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span>Real-world applications</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}