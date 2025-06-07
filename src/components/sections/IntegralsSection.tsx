"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

export function IntegralsSection() {
  return (
    <section id="integrals" className="space-y-8">
      <div className="text-center space-y-4">
        <Badge variant="secondary" className="text-sm">Integral Calculus</Badge>
        <h2 className="text-3xl md:text-4xl font-bold">Integral Calculus</h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Discover the reverse of differentiation. Integration allows us to find areas, volumes, 
          and accumulate quantities over intervals.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="section-card">
          <CardHeader>
            <CardTitle>What is Integration?</CardTitle>
            <CardDescription>
              The inverse operation of differentiation
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="math-formula">
              ∫ f(x) dx = F(x) + C
            </div>
            <p className="text-muted-foreground">
              Integration finds the antiderivative - a function whose derivative gives us the original function. 
              The constant C represents the family of all possible antiderivatives.
            </p>
            <div className="p-4 bg-muted rounded-lg">
              <strong>Fundamental Theorem of Calculus:</strong><br />
              If F'(x) = f(x), then ∫ f(x) dx = F(x) + C
            </div>
          </CardContent>
        </Card>

        <Card className="section-card">
          <CardHeader>
            <CardTitle>Types of Integrals</CardTitle>
            <CardDescription>
              Indefinite vs. definite integrals
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div>
                <strong>Indefinite Integral:</strong> ∫ f(x) dx = F(x) + C
                <p className="text-sm text-muted-foreground">Represents a family of functions</p>
              </div>
              <div>
                <strong>Definite Integral:</strong> ∫<sub>a</sub><sup>b</sup> f(x) dx = F(b) - F(a)
                <p className="text-sm text-muted-foreground">Gives a specific numerical value</p>
              </div>
            </div>
            <div className="p-4 bg-muted rounded-lg">
              <strong>Geometric Interpretation:</strong><br />
              Definite integrals represent the signed area between the curve and the x-axis.
            </div>
          </CardContent>
        </Card>
      </div>

      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="basic-integrals">
          <AccordionTrigger className="text-lg">Basic Integration Rules</AccordionTrigger>
          <AccordionContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Fundamental Rules</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="space-y-2">
                    <div><strong>Power Rule:</strong> ∫ xⁿ dx = xⁿ⁺¹/(n+1) + C</div>
                    <div><strong>Constant Rule:</strong> ∫ k dx = kx + C</div>
                    <div><strong>Sum Rule:</strong> ∫ [f(x) + g(x)] dx = ∫ f(x) dx + ∫ g(x) dx</div>
                    <div><strong>Constant Multiple:</strong> ∫ kf(x) dx = k∫ f(x) dx</div>
                  </div>
                  <div className="p-3 bg-muted rounded-lg">
                    <strong>Example:</strong><br />
                    ∫ (3x² + 2x - 1) dx = x³ + x² - x + C
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Common Function Integrals</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="space-y-2">
                    <div><strong>Exponential:</strong> ∫ eˣ dx = eˣ + C</div>
                    <div><strong>Reciprocal:</strong> ∫ (1/x) dx = ln|x| + C</div>
                    <div><strong>Sine:</strong> ∫ sin x dx = -cos x + C</div>
                    <div><strong>Cosine:</strong> ∫ cos x dx = sin x + C</div>
                    <div><strong>Secant²:</strong> ∫ sec²x dx = tan x + C</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="substitution">
          <AccordionTrigger className="text-lg">Integration by Substitution</AccordionTrigger>
          <AccordionContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">U-Substitution Method</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p>Used when the integrand contains a function and its derivative:</p>
                  <ol className="list-decimal list-inside space-y-2">
                    <li>Choose u = inner function</li>
                    <li>Find du = u' dx</li>
                    <li>Substitute to get ∫ f(u) du</li>
                    <li>Integrate and substitute back</li>
                  </ol>
                  <div className="p-3 bg-muted rounded-lg">
                    <strong>Example:</strong> ∫ 2x(x² + 1)³ dx<br />
                    Let u = x² + 1, du = 2x dx<br />
                    = ∫ u³ du = u⁴/4 + C = (x² + 1)⁴/4 + C
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Trigonometric Substitution</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p>For integrals involving √(a² - x²), √(a² + x²), or √(x² - a²):</p>
                  <div className="space-y-2">
                    <div><strong>√(a² - x²):</strong> x = a sin θ</div>
                    <div><strong>√(a² + x²):</strong> x = a tan θ</div>
                    <div><strong>√(x² - a²):</strong> x = a sec θ</div>
                  </div>
                  <div className="p-3 bg-muted rounded-lg">
                    <strong>Example:</strong> ∫ √(4 - x²) dx<br />
                    Use x = 2 sin θ substitution
                  </div>
                </CardContent>
              </Card>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="integration-by-parts">
          <AccordionTrigger className="text-lg">Integration by Parts</AccordionTrigger>
          <AccordionContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Integration by Parts Formula</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="math-formula">
                    ∫ u dv = uv - ∫ v du
                  </div>
                  <p>Choose u and dv such that ∫ v du is easier to integrate than the original.</p>
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <strong>LIATE Rule for choosing u:</strong><br />
                    <strong>L</strong>ogarithmic, <strong>I</strong>nverse trig, <strong>A</strong>lgebraic, <strong>T</strong>rigonometric, <strong>E</strong>xponential
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Integration by Parts Example</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="p-3 bg-muted rounded-lg">
                    <strong>Example:</strong> ∫ x eˣ dx<br />
                    Let u = x, dv = eˣ dx<br />
                    Then du = dx, v = eˣ<br />
                    <br />
                    ∫ x eˣ dx = x eˣ - ∫ eˣ dx<br />
                    = x eˣ - eˣ + C<br />
                    = eˣ(x - 1) + C
                  </div>
                </CardContent>
              </Card>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="definite-integrals">
          <AccordionTrigger className="text-lg">Definite Integrals and Applications</AccordionTrigger>
          <AccordionContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Fundamental Theorem of Calculus</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="math-formula">
                    ∫<sub>a</sub><sup>b</sup> f(x) dx = F(b) - F(a)
                  </div>
                  <p>where F'(x) = f(x)</p>
                  <div className="p-3 bg-muted rounded-lg">
                    <strong>Example:</strong><br />
                    ∫<sub>0</sub><sup>2</sup> x² dx = [x³/3]<sub>0</sub><sup>2</sup> = 8/3 - 0 = 8/3
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Applications</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <ul className="space-y-2">
                    <li><strong>Area:</strong> ∫<sub>a</sub><sup>b</sup> f(x) dx</li>
                    <li><strong>Volume (disks):</strong> π∫<sub>a</sub><sup>b</sup> [f(x)]² dx</li>
                    <li><strong>Arc Length:</strong> ∫<sub>a</sub><sup>b</sup> √(1 + [f'(x)]²) dx</li>
                    <li><strong>Average Value:</strong> (1/(b-a))∫<sub>a</sub><sup>b</sup> f(x) dx</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="improper-integrals">
          <AccordionTrigger className="text-lg">Improper Integrals</AccordionTrigger>
          <AccordionContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Type 1: Infinite Limits</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="math-formula">
                    ∫<sub>a</sub><sup>∞</sup> f(x) dx = lim<sub>t→∞</sub> ∫<sub>a</sub><sup>t</sup> f(x) dx
                  </div>
                  <div className="p-3 bg-muted rounded-lg">
                    <strong>Example:</strong><br />
                    ∫<sub>1</sub><sup>∞</sup> (1/x²) dx = lim<sub>t→∞</sub> [-1/x]<sub>1</sub><sup>t</sup><br />
                    = lim<sub>t→∞</sub> (-1/t + 1) = 1
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Type 2: Discontinuous Integrand</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p>When f(x) has a discontinuity at x = c in [a,b]:</p>
                  <div className="math-formula">
                    ∫<sub>a</sub><sup>b</sup> f(x) dx = ∫<sub>a</sub><sup>c</sup> f(x) dx + ∫<sub>c</sub><sup>b</sup> f(x) dx
                  </div>
                  <div className="p-3 bg-muted rounded-lg">
                    <strong>Example:</strong> ∫<sub>0</sub><sup>1</sup> (1/√x) dx<br />
                    Discontinuity at x = 0
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