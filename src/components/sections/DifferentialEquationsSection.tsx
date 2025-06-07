"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

export function DifferentialEquationsSection() {
  return (
    <section id="differential-equations" className="space-y-8">
      <div className="text-center space-y-4">
        <Badge variant="secondary" className="text-sm">Advanced Topic</Badge>
        <h2 className="text-3xl md:text-4xl font-bold">Differential Equations</h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Explore equations involving derivatives and their solutions. Differential equations model 
          dynamic systems in physics, engineering, biology, and economics.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="section-card">
          <CardHeader>
            <CardTitle>What are Differential Equations?</CardTitle>
            <CardDescription>
              Equations involving functions and their derivatives
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              A differential equation is an equation that relates a function with one or more of its derivatives. 
              They describe how quantities change over time or space.
            </p>
            <div className="space-y-2">
              <div><strong>First-order:</strong> dy/dx = f(x, y)</div>
              <div><strong>Second-order:</strong> d²y/dx² = f(x, y, dy/dx)</div>
            </div>
            <div className="p-4 bg-muted rounded-lg">
              <strong>Real-world Example:</strong><br />
              Population growth: dP/dt = kP (exponential growth model)
            </div>
          </CardContent>
        </Card>

        <Card className="section-card">
          <CardHeader>
            <CardTitle>Classification</CardTitle>
            <CardDescription>
              Different types of differential equations
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div>
                <strong>By Order:</strong> Highest derivative present
                <ul className="list-disc list-inside ml-4 text-sm text-muted-foreground">
                  <li>First-order, second-order, etc.</li>
                </ul>
              </div>
              <div>
                <strong>By Linearity:</strong> Linear vs. nonlinear
                <ul className="list-disc list-inside ml-4 text-sm text-muted-foreground">
                  <li>Linear: coefficients are functions of independent variable only</li>
                </ul>
              </div>
              <div>
                <strong>By Type:</strong> Ordinary (ODE) vs. Partial (PDE)
                <ul className="list-disc list-inside ml-4 text-sm text-muted-foreground">
                  <li>ODE: one independent variable</li>
                  <li>PDE: multiple independent variables</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="first-order">
          <AccordionTrigger className="text-lg">First-Order Differential Equations</AccordionTrigger>
          <AccordionContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Separable Equations</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p>Can be written as g(y)dy = h(x)dx</p>
                  <div className="p-3 bg-muted rounded-lg">
                    <strong>Example:</strong> dy/dx = xy<br />
                    Separate: (1/y)dy = x dx<br />
                    Integrate: ln|y| = x²/2 + C<br />
                    Solution: y = Ae^(x²/2)
                  </div>
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <strong>Method:</strong><br />
                    1. Separate variables<br />
                    2. Integrate both sides<br />
                    3. Solve for y
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Linear First-Order</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p>Form: dy/dx + P(x)y = Q(x)</p>
                  <div className="math-formula">
                    Integrating Factor: μ(x) = e^(∫P(x)dx)
                  </div>
                  <div className="p-3 bg-muted rounded-lg">
                    <strong>Example:</strong> dy/dx + 2xy = x<br />
                    μ(x) = e^(∫2x dx) = e^(x²)<br />
                    Solution: y = (1/2) + Ce^(-x²)
                  </div>
                </CardContent>
              </Card>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="second-order">
          <AccordionTrigger className="text-lg">Second-Order Differential Equations</AccordionTrigger>
          <AccordionContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Homogeneous Linear</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p>Form: ay'' + by' + cy = 0</p>
                  <div className="math-formula">
                    Characteristic Equation: ar² + br + c = 0
                  </div>
                  <div className="space-y-2">
                    <div><strong>Two real roots r₁, r₂:</strong> y = C₁e^(r₁x) + C₂e^(r₂x)</div>
                    <div><strong>Repeated root r:</strong> y = (C₁ + C₂x)e^(rx)</div>
                    <div><strong>Complex roots α ± βi:</strong> y = e^(αx)(C₁cos(βx) + C₂sin(βx))</div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Non-homogeneous Linear</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p>Form: ay'' + by' + cy = g(x)</p>
                  <p>Solution = Homogeneous solution + Particular solution</p>
                  <div className="space-y-2">
                    <div><strong>Method of Undetermined Coefficients:</strong> For specific forms of g(x)</div>
                    <div><strong>Variation of Parameters:</strong> General method</div>
                  </div>
                  <div className="p-3 bg-muted rounded-lg">
                    <strong>Example:</strong> y'' - 3y' + 2y = e^x<br />
                    Homogeneous: y_h = C₁e^x + C₂e^(2x)<br />
                    Particular: y_p = xe^x (since e^x is in y_h)
                  </div>
                </CardContent>
              </Card>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="applications">
          <AccordionTrigger className="text-lg">Applications of Differential Equations</AccordionTrigger>
          <AccordionContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Population Dynamics</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="space-y-2">
                    <div><strong>Exponential Growth:</strong> dP/dt = kP</div>
                    <div><strong>Logistic Growth:</strong> dP/dt = kP(1 - P/K)</div>
                  </div>
                  <div className="p-3 bg-muted rounded-lg">
                    <strong>Logistic Solution:</strong><br />
                    P(t) = K/(1 + Ae^(-kt))
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Physics Applications</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="space-y-2">
                    <div><strong>Simple Harmonic Motion:</strong> x'' + ω²x = 0</div>
                    <div><strong>Damped Oscillation:</strong> x'' + 2γx' + ω²x = 0</div>
                    <div><strong>RC Circuit:</strong> RC(dV/dt) + V = E(t)</div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Chemical Reactions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="space-y-2">
                    <div><strong>First-order:</strong> d[A]/dt = -k[A]</div>
                    <div><strong>Second-order:</strong> d[A]/dt = -k[A]²</div>
                  </div>
                  <div className="p-3 bg-muted rounded-lg">
                    <strong>Radioactive Decay:</strong><br />
                    N(t) = N₀e^(-λt)<br />
                    Half-life: t₁/₂ = ln(2)/λ
                  </div>
                </CardContent>
              </Card>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="numerical-methods">
          <AccordionTrigger className="text-lg">Numerical Methods</AccordionTrigger>
          <AccordionContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Euler's Method</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p>Simplest numerical method for solving dy/dx = f(x, y)</p>
                  <div className="math-formula">
                    y_{n+1} = y_n + h·f(x_n, y_n)
                  </div>
                  <div className="p-3 bg-muted rounded-lg">
                    <strong>Algorithm:</strong><br />
                    1. Start with initial condition (x₀, y₀)<br />
                    2. Choose step size h<br />
                    3. Compute y_{n+1} using formula<br />
                    4. Repeat for desired number of steps
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Runge-Kutta Methods</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p>More accurate than Euler's method. RK4 is most common:</p>
                  <div className="space-y-1 text-sm">
                    <div>k₁ = hf(x_n, y_n)</div>
                    <div>k₂ = hf(x_n + h/2, y_n + k₁/2)</div>
                    <div>k₃ = hf(x_n + h/2, y_n + k₂/2)</div>
                    <div>k₄ = hf(x_n + h, y_n + k₃)</div>
                  </div>
                  <div className="math-formula">
                    y_{n+1} = y_n + (k₁ + 2k₂ + 2k₃ + k₄)/6
                  </div>
                </CardContent>
              </Card>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
}