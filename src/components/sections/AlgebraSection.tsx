"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
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
          <AccordionTrigger className="text-lg">{t("accordion.algebra.operations")}</AccordionTrigger>
          <AccordionContent className="space-y-6">
            <div className="space-y-6">
              <h4 className="font-semibold text-lg">{t("algebra.operations.pemdas")}</h4>
              <p className="text-muted-foreground">
                {t("algebra.operations.intro")}
              </p>

              <ol className="list-decimal pl-5 space-y-3">
                <li className="border-l-2 border-primary/40 pl-3 py-1">
                  <strong className="text-primary">P</strong>aréntesis (o Corchetes)
                  <p className="text-sm text-muted-foreground mt-1">{t("algebra.operations.step1.desc")}</p>
                </li>
                <li className="border-l-2 border-primary/40 pl-3 py-1">
                  <strong className="text-primary">E</strong>xponentes (Potencias y Raíces Cuadradas)
                  <p className="text-sm text-muted-foreground mt-1">{t("algebra.operations.step2.desc")}</p>
                </li>
                <li className="border-l-2 border-primary/40 pl-3 py-1">
                  <strong className="text-primary">M</strong>ultiplicación y <strong className="text-primary">D</strong>ivisión (de izquierda a derecha)
                  <p className="text-sm text-muted-foreground mt-1">{t("algebra.operations.step3.desc")}</p>
                </li>
                <li className="border-l-2 border-primary/40 pl-3 py-1">
                  <strong className="text-primary">S</strong>uma y <strong className="text-primary">R</strong>esta (de izquierda a derecha)
                  <p className="text-sm text-muted-foreground mt-1">{t("algebra.operations.step4.desc")}</p>
                </li>
              </ol>

              <div className="bg-primary/5 p-4 rounded-lg mt-6">
                <h5 className="font-semibold">{t("algebra.operations.example1")}</h5>
                <div className="mt-3 space-y-2 pl-4 border-l-2 border-primary/60">
                  <p className="flex items-center">
                    <span className="w-8 h-8 rounded-full bg-primary/10 inline-flex items-center justify-center mr-2 font-medium text-primary">1</span>
                    <span>{t("algebra.operations.example1.step1")}</span>
                  </p>
                  <p className="flex items-center">
                    <span className="w-8 h-8 rounded-full bg-primary/10 inline-flex items-center justify-center mr-2 font-medium text-primary">2</span>
                    <span>{t("algebra.operations.example1.step2")}</span>
                  </p>
                  <p className="flex items-center">
                    <span className="w-8 h-8 rounded-full bg-primary/10 inline-flex items-center justify-center mr-2 font-medium text-primary">3</span>
                    <span>{t("algebra.operations.example1.step3")}</span>
                  </p>
                  <p className="flex items-center">
                    <span className="w-8 h-8 rounded-full bg-primary/10 inline-flex items-center justify-center mr-2 font-medium text-primary">4</span>
                    <span>{t("algebra.operations.example1.step4")}</span>
                  </p>
                </div>
              </div>

              <div className="bg-primary/5 p-4 rounded-lg">
                <h5 className="font-semibold">{t("algebra.operations.example2")}</h5>
                <div className="mt-3 space-y-2 pl-4 border-l-2 border-primary/60">
                  <p className="flex items-center">
                    <span className="w-8 h-8 rounded-full bg-primary/10 inline-flex items-center justify-center mr-2 font-medium text-primary">1</span>
                    <span>{t("algebra.operations.example2.step1")}</span>
                  </p>
                  <p className="flex items-center">
                    <span className="w-8 h-8 rounded-full bg-primary/10 inline-flex items-center justify-center mr-2 font-medium text-primary">2</span>
                    <span>{t("algebra.operations.example2.step2")}</span>
                  </p>
                  <p className="flex items-center">
                    <span className="w-8 h-8 rounded-full bg-primary/10 inline-flex items-center justify-center mr-2 font-medium text-primary">3</span>
                    <span>{t("algebra.operations.example2.step3")}</span>
                  </p>
                </div>
              </div>

              <h4 className="font-semibold text-lg mt-8">{t("algebra.operations.mistakes")}</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card className="border-destructive/20">
                  <CardContent className="pt-6">
                    <h5 className="font-semibold mb-2 text-destructive">{t("algebra.operations.mistake1")}</h5>
                    <p className="text-sm text-muted-foreground">{t("algebra.operations.mistake1.desc")}</p>
                    <p className="text-sm mt-2 italic">{t("algebra.operations.mistake1.correct")}</p>
                  </CardContent>
                </Card>

                <Card className="border-destructive/20">
                  <CardContent className="pt-6">
                    <h5 className="font-semibold mb-2 text-destructive">{t("algebra.operations.mistake2")}</h5>
                    <p className="text-sm text-muted-foreground">{t("algebra.operations.mistake2.desc")}</p>
                    <p className="text-sm mt-2 italic">{t("algebra.operations.mistake2.correct")}</p>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-primary/10 p-4 rounded-lg mt-6">
                <h5 className="font-semibold flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-primary" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clipRule="evenodd" />
                  </svg>
                  {t("algebra.operations.tip")}
                </h5>
                <p className="mt-2 text-sm">
                  {t("algebra.operations.tip.desc")}
                </p>
              </div>

              <h4 className="font-semibold text-lg mt-8">{t("algebra.operations.practice")}</h4>
              <p className="text-muted-foreground mb-4">{t("algebra.operations.practice.desc")}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 border rounded-lg">
                  <p><strong>1.</strong> {t("algebra.operations.practice.1")}</p>
                  <p className="mt-2 text-primary font-medium">{t("algebra.operations.practice.1.answer")}</p>
                </div>

                <div className="p-4 border rounded-lg">
                  <p><strong>2.</strong> {t("algebra.operations.practice.2")}</p>
                  <p className="mt-2 text-primary font-medium">{t("algebra.operations.practice.2.answer")}</p>
                </div>

                <div className="p-4 border rounded-lg">
                  <p><strong>3.</strong> {t("algebra.operations.practice.3")}</p>
                  <p className="mt-2 text-primary font-medium">{t("algebra.operations.practice.3.answer")}</p>
                </div>

                <div className="p-4 border rounded-lg">
                  <p><strong>4.</strong> {t("algebra.operations.practice.4")}</p>
                  <p className="mt-2 text-primary font-medium">{t("algebra.operations.practice.4.answer")}</p>
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="polynomials">
          <AccordionTrigger className="text-lg">{t("accordion.algebra.polynomials")}</AccordionTrigger>
          <AccordionContent className="space-y-6">
            <div className="space-y-6">
              <p className="text-muted-foreground">
                {t("algebra.polynomials.definition")}
              </p>

              <h4 className="font-semibold text-lg">{t("algebra.polynomials.operations")}</h4>

              <Card>
                <CardContent className="pt-6">
                  <h5 className="font-semibold mb-2">{t("algebra.polynomials.addition")}</h5>
                  <p className="text-muted-foreground mb-2">{t("algebra.polynomials.addition.desc")}</p>
                  <div className="bg-primary/5 p-3 rounded mt-2">
                    <p>{t("algebra.polynomials.addition.example")}</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h5 className="font-semibold mb-2">{t("algebra.polynomials.multiplication")}</h5>
                  <p className="text-muted-foreground mb-2">{t("algebra.polynomials.multiplication.desc")}</p>
                  <div className="bg-primary/5 p-3 rounded mt-2">
                    <p>{t("algebra.polynomials.multiplication.example")}</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h5 className="font-semibold mb-2">{t("algebra.polynomials.division")}</h5>
                  <p className="text-muted-foreground mb-2">{t("algebra.polynomials.division.desc")}</p>
                  <div className="bg-primary/5 p-3 rounded mt-2">
                    <p>{t("algebra.polynomials.division.example")}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="exponents">
          <AccordionTrigger className="text-lg">{t("accordion.algebra.exponents")}</AccordionTrigger>
          <AccordionContent className="space-y-6">
            <div className="space-y-6">
              <h4 className="font-semibold text-lg">{t("algebra.exponents.rules")}</h4>

              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Rule</TableHead>
                    <TableHead>Formula</TableHead>
                    <TableHead>Example</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>{t("algebra.exponents.product")}</TableCell>
                    <TableCell>{t("algebra.exponents.product.formula")}</TableCell>
                    <TableCell>{t("algebra.exponents.product.example")}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>{t("algebra.exponents.quotient")}</TableCell>
                    <TableCell>{t("algebra.exponents.quotient.formula")}</TableCell>
                    <TableCell>{t("algebra.exponents.quotient.example")}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>{t("algebra.exponents.power")}</TableCell>
                    <TableCell>{t("algebra.exponents.power.formula")}</TableCell>
                    <TableCell>{t("algebra.exponents.power.example")}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>{t("algebra.exponents.negative")}</TableCell>
                    <TableCell>{t("algebra.exponents.negative.formula")}</TableCell>
                    <TableCell>{t("algebra.exponents.negative.example")}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>{t("algebra.exponents.zero")}</TableCell>
                    <TableCell>{t("algebra.exponents.zero.formula")}</TableCell>
                    <TableCell>{t("algebra.exponents.zero.example")}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>

              <h4 className="font-semibold text-lg mt-6">{t("algebra.radicals.rules")}</h4>

              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Rule</TableHead>
                    <TableHead>Formula</TableHead>
                    <TableHead>Example</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>{t("algebra.radicals.product")}</TableCell>
                    <TableCell>{t("algebra.radicals.product.formula")}</TableCell>
                    <TableCell>{t("algebra.radicals.product.example")}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>{t("algebra.radicals.quotient")}</TableCell>
                    <TableCell>{t("algebra.radicals.quotient.formula")}</TableCell>
                    <TableCell>{t("algebra.radicals.quotient.example")}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>{t("algebra.radicals.power")}</TableCell>
                    <TableCell>{t("algebra.radicals.power.formula")}</TableCell>
                    <TableCell>{t("algebra.radicals.power.example")}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>

              <div className="bg-primary/10 p-4 rounded-lg mt-4">
                <h5 className="font-semibold">{t("algebra.radicals.note")}</h5>
                <p className="mt-2">
                  {t("algebra.radicals.note.desc")}
                </p>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="equations">
          <AccordionTrigger className="text-lg">{t("accordion.algebra.equations")}</AccordionTrigger>
          <AccordionContent className="space-y-6">
            <div className="space-y-6">
              <h4 className="font-semibold text-lg">{t("algebra.equations.linear")}</h4>
              <p className="text-muted-foreground">
                {t("algebra.equations.linear.desc")}
              </p>
              <div className="bg-primary/5 p-4 rounded-lg">
                <h5 className="font-semibold mb-2">{t("algebra.equations.linear.example")}</h5>
                <div className="whitespace-pre-line">
                  {t("algebra.equations.linear.solution")}
                </div>
              </div>

              <h4 className="font-semibold text-lg mt-4">{t("algebra.equations.quadratic")}</h4>
              <p className="text-muted-foreground">
                {t("algebra.equations.quadratic.desc")}
              </p>
              <h5 className="font-medium mt-2">{t("algebra.equations.quadratic.formula")}</h5>
              <p className="bg-primary/5 p-3 rounded">
                {t("algebra.equations.quadratic.formula.text")}
              </p>

              <div className="bg-primary/5 p-4 rounded-lg mt-3">
                <h5 className="font-semibold mb-2">{t("algebra.equations.quadratic.example")}</h5>
                <div className="whitespace-pre-line">
                  {t("algebra.equations.quadratic.solution")}
                </div>
              </div>

              <h4 className="font-semibold text-lg mt-4">{t("algebra.equations.radical")}</h4>
              <p className="text-muted-foreground">
                {t("algebra.equations.radical.desc")}
              </p>
              <div className="bg-primary/5 p-4 rounded-lg mt-2">
                <h5 className="font-semibold mb-2">{t("algebra.equations.radical.example")}</h5>
                <div className="whitespace-pre-line">
                  {t("algebra.equations.radical.solution")}
                </div>
                <p className="font-medium text-primary mt-2">
                  {t("algebra.equations.radical.note")}
                </p>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="functions">
          <AccordionTrigger className="text-lg">{t("accordion.algebra.functions")}</AccordionTrigger>
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