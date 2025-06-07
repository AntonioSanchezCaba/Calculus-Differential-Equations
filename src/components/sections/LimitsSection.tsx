"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { t } from "@/lib/translations";

export function LimitsSection() {
  return (
    <section id="limits" className="space-y-8">
      <div className="text-center space-y-4">
        <Badge variant="secondary" className="text-sm">{t("ui.core-concept")}</Badge>
        <h2 className="text-3xl md:text-4xl font-bold">{t("section.limits.title")}</h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          {t("section.limits.subtitle")}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="section-card">
          <CardHeader>
            <CardTitle>{t("limits.what.title")}</CardTitle>
            <CardDescription>
              {t("limits.what.desc")}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="math-formula">
              lim<sub>x→a</sub> f(x) = L
            </div>
            <p className="text-muted-foreground">
              {t("limits.what.explanation")}
            </p>
            <div className="p-4 bg-muted rounded-lg">
              <strong>{t("limits.what.intuitive")}</strong><br />
              {t("limits.what.intuitive.desc")}
            </div>
          </CardContent>
        </Card>

        <Card className="section-card">
          <CardHeader>
            <CardTitle>{t("limits.types.title")}</CardTitle>
            <CardDescription>
              {t("limits.types.desc")}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                <span><strong>{t("limits.types.finite")}</strong></span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                <span><strong>{t("limits.types.infinite")}</strong></span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                <span><strong>{t("limits.types.onesided")}</strong></span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                <span><strong>{t("limits.types.infinity")}</strong></span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="basic-limits">
          <AccordionTrigger className="text-lg">Basic Limit Evaluation</AccordionTrigger>
          <AccordionContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Direct Substitution</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p>When the function is continuous at the point, simply substitute:</p>
                  <div className="math-formula">
                    lim<sub>x→2</sub> (3x + 1) = 3(2) + 1 = 7
                  </div>
                  <div className="p-3 bg-muted rounded-lg">
                    <strong>Steps:</strong><br />
                    1. Try direct substitution<br />
                    2. If no issues arise, that's your answer<br />
                    3. If you get 0/0 or ∞/∞, use other methods
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Factoring Method</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p>When direct substitution gives 0/0:</p>
                  <div className="math-formula">
                    lim<sub>x→2</sub> (x² - 4)/(x - 2)
                  </div>
                  <div className="p-3 bg-muted rounded-lg">
                    = lim<sub>x→2</sub> (x + 2)(x - 2)/(x - 2)<br />
                    = lim<sub>x→2</sub> (x + 2)<br />
                    = 2 + 2 = 4
                  </div>
                </CardContent>
              </Card>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="limit-laws">
          <AccordionTrigger className="text-lg">Limit Laws and Properties</AccordionTrigger>
          <AccordionContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Basic Limit Laws</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="space-y-2">
                    <div><strong>Sum Rule:</strong> lim[f(x) + g(x)] = lim f(x) + lim g(x)</div>
                    <div><strong>Product Rule:</strong> lim[f(x) · g(x)] = lim f(x) · lim g(x)</div>
                    <div><strong>Quotient Rule:</strong> lim[f(x)/g(x)] = lim f(x) / lim g(x)</div>
                    <div><strong>Power Rule:</strong> lim[f(x)]ⁿ = [lim f(x)]ⁿ</div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Special Limits</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="space-y-2">
                    <div className="math-formula">
                      lim<sub>x→0</sub> (sin x)/x = 1
                    </div>
                    <div className="math-formula">
                      lim<sub>x→∞</sub> (1 + 1/x)ˣ = e
                    </div>
                    <div className="math-formula">
                      lim<sub>x→0</sub> (1 - cos x)/x = 0
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="continuity">
          <AccordionTrigger className="text-lg">Continuity</AccordionTrigger>
          <AccordionContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Definition of Continuity</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p>A function f(x) is continuous at x = a if:</p>
                  <ol className="list-decimal list-inside space-y-2">
                    <li>f(a) exists</li>
                    <li>lim<sub>x→a</sub> f(x) exists</li>
                    <li>lim<sub>x→a</sub> f(x) = f(a)</li>
                  </ol>
                  <div className="p-3 bg-muted rounded-lg">
                    <strong>Intuitive:</strong> You can draw the function without lifting your pencil
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Types of Discontinuities</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <ul className="space-y-2">
                    <li><strong>Removable:</strong> A "hole" in the graph</li>
                    <li><strong>Jump:</strong> Function "jumps" to different value</li>
                    <li><strong>Infinite:</strong> Function approaches ±∞</li>
                  </ul>
                  <div className="p-3 bg-muted rounded-lg">
                    <strong>Example:</strong> f(x) = (x² - 1)/(x - 1) has a removable discontinuity at x = 1
                  </div>
                </CardContent>
              </Card>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="advanced-techniques">
          <AccordionTrigger className="text-lg">Advanced Limit Techniques</AccordionTrigger>
          <AccordionContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">L'Hôpital's Rule</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p>For indeterminate forms 0/0 or ∞/∞:</p>
                  <div className="math-formula">
                    lim<sub>x→a</sub> f(x)/g(x) = lim<sub>x→a</sub> f'(x)/g'(x)
                  </div>
                  <div className="p-3 bg-muted rounded-lg">
                    <strong>Example:</strong><br />
                    lim<sub>x→0</sub> (sin x)/x = lim<sub>x→0</sub> (cos x)/1 = 1
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Squeeze Theorem</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p>If g(x) ≤ f(x) ≤ h(x) and lim g(x) = lim h(x) = L, then lim f(x) = L</p>
                  <div className="p-3 bg-muted rounded-lg">
                    <strong>Classic Example:</strong><br />
                    lim<sub>x→0</sub> x sin(1/x) = 0<br />
                    Since -|x| ≤ x sin(1/x) ≤ |x|
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