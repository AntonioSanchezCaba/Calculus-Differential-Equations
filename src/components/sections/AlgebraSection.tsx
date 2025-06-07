"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { t } from "@/lib/translations";

export function AlgebraSection() {
  return (
    <section id="algebra" className="space-y-8">
      <div className="text-center space-y-4">
        <Badge variant="secondary" className="text-sm">{t("ui.foundation")}</Badge>
        <h2 className="text-3xl md:text-4xl font-bold">{t("section.algebra.title")}</h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          {t("section.algebra.subtitle")}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="section-card">
          <CardHeader>
            <CardTitle>{t("algebra.why.title")}</CardTitle>
            <CardDescription>
              {t("algebra.why.desc")}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                <span>{t("algebra.why.point1")}</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                <span>{t("algebra.why.point2")}</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                <span>{t("algebra.why.point3")}</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                <span>{t("algebra.why.point4")}</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="section-card">
          <CardHeader>
            <CardTitle>{t("algebra.reference.title")}</CardTitle>
            <CardDescription>
              {t("algebra.reference.desc")}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="math-formula">
                <strong>Quadratic Formula:</strong><br />
                x = (-b ± √(b² - 4ac)) / 2a
              </div>
              <div className="math-formula">
                <strong>Difference of Squares:</strong><br />
                a² - b² = (a + b)(a - b)
              </div>
              <div className="math-formula">
                <strong>Perfect Square:</strong><br />
                (a ± b)² = a² ± 2ab + b²
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="operations">
          <AccordionTrigger className="text-lg">{t("algebra.operations.title")}</AccordionTrigger>
          <AccordionContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Order of Operations (PEMDAS)</CardTitle>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal list-inside space-y-2">
                    <li><strong>P</strong>arentheses</li>
                    <li><strong>E</strong>xponents</li>
                    <li><strong>M</strong>ultiplication and <strong>D</strong>ivision (left to right)</li>
                    <li><strong>A</strong>ddition and <strong>S</strong>ubtraction (left to right)</li>
                  </ol>
                  <div className="mt-4 p-3 bg-muted rounded-lg">
                    <strong>Example:</strong> 3 + 2 × (8 - 5)² ÷ 3<br />
                    = 3 + 2 × 3² ÷ 3<br />
                    = 3 + 2 × 9 ÷ 3<br />
                    = 3 + 18 ÷ 3<br />
                    = 3 + 6 = 9
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Distributive Property</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="math-formula">
                      a(b + c) = ab + ac
                    </div>
                    <div className="p-3 bg-muted rounded-lg">
                      <strong>Example:</strong><br />
                      3(x + 4) = 3x + 12<br />
                      -2(3x - 5) = -6x + 10
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="polynomials">
          <AccordionTrigger className="text-lg">{t("algebra.polynomials.title")}</AccordionTrigger>
          <AccordionContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Common Factoring Patterns</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <strong>Greatest Common Factor:</strong>
                    <div className="math-formula mt-2">
                      6x² + 9x = 3x(2x + 3)
                    </div>
                  </div>
                  <div>
                    <strong>Difference of Squares:</strong>
                    <div className="math-formula mt-2">
                      x² - 16 = (x + 4)(x - 4)
                    </div>
                  </div>
                  <div>
                    <strong>Perfect Square Trinomial:</strong>
                    <div className="math-formula mt-2">
                      x² + 6x + 9 = (x + 3)²
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Polynomial Operations</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <strong>Addition/Subtraction:</strong>
                    <div className="p-3 bg-muted rounded-lg mt-2">
                      (3x² + 2x - 1) + (x² - 4x + 3)<br />
                      = 4x² - 2x + 2
                    </div>
                  </div>
                  <div>
                    <strong>Multiplication:</strong>
                    <div className="p-3 bg-muted rounded-lg mt-2">
                      (x + 2)(x - 3)<br />
                      = x² - 3x + 2x - 6<br />
                      = x² - x - 6
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="equations">
          <AccordionTrigger className="text-lg">{t("algebra.equations.title")}</AccordionTrigger>
          <AccordionContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Linear Equations</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="math-formula">
                      ax + b = c
                    </div>
                    <div className="p-3 bg-muted rounded-lg">
                      <strong>Example:</strong> Solve 2x + 5 = 17<br />
                      2x = 17 - 5<br />
                      2x = 12<br />
                      x = 6
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Quadratic Equations</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="math-formula">
                      ax² + bx + c = 0
                    </div>
                    <div className="p-3 bg-muted rounded-lg">
                      <strong>Example:</strong> x² - 5x + 6 = 0<br />
                      (x - 2)(x - 3) = 0<br />
                      x = 2 or x = 3
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="functions">
          <AccordionTrigger className="text-lg">{t("algebra.functions.title")}</AccordionTrigger>
          <AccordionContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Function Notation</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="math-formula">
                    f(x) = 2x + 3
                  </div>
                  <div className="p-3 bg-muted rounded-lg">
                    <strong>Evaluation:</strong><br />
                    f(5) = 2(5) + 3 = 13<br />
                    f(-2) = 2(-2) + 3 = -1
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Domain and Range</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <strong>Domain:</strong> All possible input values (x-values)
                  </div>
                  <div>
                    <strong>Range:</strong> All possible output values (y-values)
                  </div>
                  <div className="p-3 bg-muted rounded-lg">
                    For f(x) = √x:<br />
                    Domain: x ≥ 0<br />
                    Range: y ≥ 0
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