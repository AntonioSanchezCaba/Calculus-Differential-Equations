"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

export function DerivativesSection() {
  return (
    <section id="derivatives" className="space-y-8">
      <div className="text-center space-y-4">
        <Badge variant="secondary" className="text-sm">Differential Calculus</Badge>
        <h2 className="text-3xl md:text-4xl font-bold">Derivatives</h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Master the art of finding rates of change. Derivatives are the foundation of differential calculus 
          and have countless applications in science, engineering, and economics.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="section-card">
          <CardHeader>
            <CardTitle>Definition of the Derivative</CardTitle>
            <CardDescription>
              The fundamental concept of instantaneous rate of change
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="math-formula">
              f'(x) = lim<sub>h→0</sub> [f(x+h) - f(x)] / h
            </div>
            <p className="text-muted-foreground">
              The derivative represents the slope of the tangent line to the function at any point, 
              giving us the instantaneous rate of change.
            </p>
            <div className="p-4 bg-muted rounded-lg">
              <strong>Geometric Interpretation:</strong><br />
              The derivative at a point is the slope of the line that just touches the curve at that point.
            </div>
          </CardContent>
        </Card>

        <Card className="section-card">
          <CardHeader>
            <CardTitle>Derivative Notation</CardTitle>
            <CardDescription>
              Different ways to express derivatives
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div><strong>Lagrange:</strong> f'(x), f''(x)</div>
              <div><strong>Leibniz:</strong> dy/dx, d²y/dx²</div>
              <div><strong>Newton:</strong> ẏ, ÿ (for time derivatives)</div>
              <div><strong>Operator:</strong> Df(x), D²f(x)</div>
            </div>
            <div className="p-4 bg-muted rounded-lg">
              <strong>Remember:</strong> All notations represent the same concept - the rate of change of the function.
            </div>
          </CardContent>
        </Card>
      </div>

      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="basic-rules">
          <AccordionTrigger className="text-lg">Basic Differentiation Rules</AccordionTrigger>
          <AccordionContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Fundamental Rules</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="space-y-2">
                    <div><strong>Constant Rule:</strong> d/dx [c] = 0</div>
                    <div><strong>Power Rule:</strong> d/dx [xⁿ] = nxⁿ⁻¹</div>
                    <div><strong>Constant Multiple:</strong> d/dx [cf(x)] = c·f'(x)</div>
                    <div><strong>Sum Rule:</strong> d/dx [f(x) + g(x)] = f'(x) + g'(x)</div>
                  </div>
                  <div className="p-3 bg-muted rounded-lg">
                    <strong>Example:</strong><br />
                    d/dx [3x⁴ + 2x² - 5] = 12x³ + 4x
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Common Function Derivatives</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="space-y-2">
                    <div><strong>Exponential:</strong> d/dx [eˣ] = eˣ</div>
                    <div><strong>Natural Log:</strong> d/dx [ln x] = 1/x</div>
                    <div><strong>Sine:</strong> d/dx [sin x] = cos x</div>
                    <div><strong>Cosine:</strong> d/dx [cos x] = -sin x</div>
                    <div><strong>Tangent:</strong> d/dx [tan x] = sec²x</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="product-quotient">
          <AccordionTrigger className="text-lg">Product and Quotient Rules</AccordionTrigger>
          <AccordionContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Product Rule</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="math-formula">
                    d/dx [f(x)·g(x)] = f'(x)·g(x) + f(x)·g'(x)
                  </div>
                  <div className="p-3 bg-muted rounded-lg">
                    <strong>Example:</strong> d/dx [x²·sin x]<br />
                    = 2x·sin x + x²·cos x
                  </div>
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <strong>Memory Aid:</strong> "First times derivative of second, plus second times derivative of first"
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Quotient Rule</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="math-formula">
                    d/dx [f(x)/g(x)] = [f'(x)·g(x) - f(x)·g'(x)] / [g(x)]²
                  </div>
                  <div className="p-3 bg-muted rounded-lg">
                    <strong>Example:</strong> d/dx [x²/(x+1)]<br />
                    = [2x(x+1) - x²(1)] / (x+1)²<br />
                    = [2x² + 2x - x²] / (x+1)²<br />
                    = [x² + 2x] / (x+1)²
                  </div>
                </CardContent>
              </Card>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="chain-rule">
          <AccordionTrigger className="text-lg">Chain Rule</AccordionTrigger>
          <AccordionContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Chain Rule Formula</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="math-formula">
                    d/dx [f(g(x))] = f'(g(x))·g'(x)
                  </div>
                  <p>For composite functions, multiply the derivative of the outer function by the derivative of the inner function.</p>
                  <div className="p-3 bg-muted rounded-lg">
                    <strong>Example:</strong> d/dx [sin(x²)]<br />
                    = cos(x²)·2x = 2x cos(x²)
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Chain Rule Strategy</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <ol className="list-decimal list-inside space-y-2">
                    <li>Identify the outer and inner functions</li>
                    <li>Find the derivative of the outer function</li>
                    <li>Find the derivative of the inner function</li>
                    <li>Multiply them together</li>
                  </ol>
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <strong>Complex Example:</strong><br />
                    d/dx [(3x² + 1)⁵] = 5(3x² + 1)⁴ · 6x
                  </div>
                </CardContent>
              </Card>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="implicit">
          <AccordionTrigger className="text-lg">Implicit Differentiation</AccordionTrigger>
          <AccordionContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">When to Use Implicit Differentiation</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p>Use when the equation cannot be easily solved for y in terms of x:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>x² + y² = 25 (circle)</li>
                    <li>xy + sin(y) = x (mixed terms)</li>
                    <li>y³ + xy² = 4x (high powers of y)</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Implicit Differentiation Steps</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <ol className="list-decimal list-inside space-y-2">
                    <li>Differentiate both sides with respect to x</li>
                    <li>Remember that d/dx[y] = dy/dx</li>
                    <li>Use chain rule for terms involving y</li>
                    <li>Solve for dy/dx</li>
                  </ol>
                  <div className="p-3 bg-muted rounded-lg">
                    <strong>Example:</strong> x² + y² = 25<br />
                    2x + 2y(dy/dx) = 0<br />
                    dy/dx = -x/y
                  </div>
                </CardContent>
              </Card>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="applications">
          <AccordionTrigger className="text-lg">Applications of Derivatives</AccordionTrigger>
          <AccordionContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Related Rates</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p>Finding how fast one quantity changes when another quantity changes.</p>
                  <div className="p-3 bg-muted rounded-lg">
                    <strong>Example:</strong> A balloon's radius increases at 2 cm/s. How fast is its volume changing when r = 10 cm?
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Optimization</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p>Finding maximum and minimum values of functions.</p>
                  <div className="p-3 bg-muted rounded-lg">
                    <strong>Example:</strong> What dimensions minimize the surface area of a box with fixed volume?
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Motion Analysis</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p>Position, velocity, and acceleration relationships.</p>
                  <div className="p-3 bg-muted rounded-lg">
                    <strong>Relationships:</strong><br />
                    v(t) = s'(t)<br />
                    a(t) = v'(t) = s''(t)
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