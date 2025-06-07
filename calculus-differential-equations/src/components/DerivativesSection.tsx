"use client";

import { useState, useEffect } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { AccordionWrapper } from "./accordion-wrapper";
import { t } from "@/lib/translations";

// Basic Differentiation Rules Component
function BasicRulesContent() {
  return (
    <div className="space-y-4 p-2">
      <Card className="bg-primary/5">
        <CardContent className="pt-6">
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
                <TableCell>Constant Rule</TableCell>
                <TableCell>d/dx [c] = 0</TableCell>
                <TableCell>d/dx [5] = 0</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Power Rule</TableCell>
                <TableCell>d/dx [x<sup>n</sup>] = nx<sup>n-1</sup></TableCell>
                <TableCell>d/dx [x<sup>3</sup>] = 3x<sup>2</sup></TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Constant Multiple Rule</TableCell>
                <TableCell>d/dx [c·f(x)] = c·f'(x)</TableCell>
                <TableCell>d/dx [5x<sup>2</sup>] = 5·2x = 10x</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Sum Rule</TableCell>
                <TableCell>d/dx [f(x) + g(x)] = f'(x) + g'(x)</TableCell>
                <TableCell>d/dx [x<sup>2</sup> + 3x] = 2x + 3</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Difference Rule</TableCell>
                <TableCell>d/dx [f(x) - g(x)] = f'(x) - g'(x)</TableCell>
                <TableCell>d/dx [x<sup>3</sup> - x] = 3x<sup>2</sup> - 1</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}

// Product and Quotient Rules Content
function ProductQuotientContent() {
  return (
    <div className="space-y-4 p-2">
      <Card>
        <CardContent className="pt-6">
          <h4 className="font-semibold mb-2">Product Rule</h4>
          <p className="mb-2">
            If h(x) = f(x)·g(x), then h'(x) = f'(x)·g(x) + f(x)·g'(x)
          </p>
          <div className="bg-primary/5 p-3 rounded-md mt-2">
            <p><strong>Example:</strong> Find the derivative of h(x) = x<sup>2</sup>·sin(x)</p>
            <p className="mt-1">
              Let f(x) = x<sup>2</sup> and g(x) = sin(x)<br/>
              f'(x) = 2x and g'(x) = cos(x)<br/>
              h'(x) = 2x·sin(x) + x<sup>2</sup>·cos(x)
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="pt-6">
          <h4 className="font-semibold mb-2">Quotient Rule</h4>
          <p className="mb-2">
            If h(x) = f(x)/g(x), then h'(x) = [f'(x)·g(x) - f(x)·g'(x)] / [g(x)]<sup>2</sup>
          </p>
          <div className="bg-primary/5 p-3 rounded-md mt-2">
            <p><strong>Example:</strong> Find the derivative of h(x) = tan(x) = sin(x)/cos(x)</p>
            <p className="mt-1">
              Let f(x) = sin(x) and g(x) = cos(x)<br/>
              f'(x) = cos(x) and g'(x) = -sin(x)<br/>
              h'(x) = [cos(x)·cos(x) - sin(x)·(-sin(x))] / [cos(x)]<sup>2</sup><br/>
              h'(x) = [cos<sup>2</sup>(x) + sin<sup>2</sup>(x)] / cos<sup>2</sup>(x) = 1/cos<sup>2</sup>(x) = sec<sup>2</sup>(x)
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

// Chain Rule Content
function ChainRuleContent() {
  return (
    <div className="space-y-4 p-2">
      <Card>
        <CardContent className="pt-6">
          <p className="mb-2">
            If h(x) = f(g(x)), then h'(x) = f'(g(x))·g'(x)
          </p>
          <div className="bg-primary/5 p-3 rounded-md mt-2">
            <p><strong>Example:</strong> Find the derivative of h(x) = sin(x<sup>2</sup>)</p>
            <p className="mt-1">
              Let g(x) = x<sup>2</sup> and f(u) = sin(u) where u = g(x)<br/>
              g'(x) = 2x and f'(u) = cos(u)<br/>
              h'(x) = f'(g(x))·g'(x) = cos(x<sup>2</sup>)·2x = 2x·cos(x<sup>2</sup>)
            </p>
          </div>
        </CardContent>
      </Card>

      <div className="bg-primary/10 p-4 rounded-lg mt-4">
        <h4 className="font-semibold mb-2">Alternative Form: Using Substitution</h4>
        <p>
          A helpful way to apply the chain rule is to set u = g(x) and rewrite the function as f(u):
        </p>
        <ol className="list-decimal pl-5 mt-2 space-y-1">
          <li>Replace g(x) with u</li>
          <li>Find df/du (the derivative with respect to u)</li>
          <li>Find du/dx (the derivative of u with respect to x)</li>
          <li>By the chain rule: df/dx = (df/du)·(du/dx)</li>
        </ol>
      </div>
    </div>
  );
}

// Common Functions Content
function CommonFunctionsContent() {
  return (
    <div className="space-y-4 p-2">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Function</TableHead>
            <TableHead>Derivative</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>sin(x)</TableCell>
            <TableCell>cos(x)</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>cos(x)</TableCell>
            <TableCell>-sin(x)</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>tan(x)</TableCell>
            <TableCell>sec<sup>2</sup>(x)</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>e<sup>x</sup></TableCell>
            <TableCell>e<sup>x</sup></TableCell>
          </TableRow>
          <TableRow>
            <TableCell>ln(x)</TableCell>
            <TableCell>1/x</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>a<sup>x</sup></TableCell>
            <TableCell>a<sup>x</sup>·ln(a)</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>log<sub>a</sub>(x)</TableCell>
            <TableCell>1/(x·ln(a))</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}

// Implicit Differentiation Content
function ImplicitContent() {
  return (
    <div className="space-y-4 p-2">
      <p>
        Implicit differentiation is used when a function is defined implicitly by an equation rather than explicitly as y = f(x).
      </p>

      <div className="bg-primary/5 p-4 rounded-lg mt-2">
        <h4 className="font-semibold mb-2">Method:</h4>
        <ol className="list-decimal pl-5 space-y-1">
          <li>Differentiate both sides of the equation with respect to x</li>
          <li>Remember that y is a function of x, so when differentiating y terms, use the chain rule (multiply by dy/dx)</li>
          <li>Solve for dy/dx</li>
        </ol>
      </div>

      <Card className="mt-4">
        <CardContent className="pt-6">
          <h4 className="font-semibold mb-2">Example: Find dy/dx for x² + y² = 25</h4>
          <p>
            <strong>Step 1:</strong> Differentiate both sides with respect to x
          </p>
          <p>d/dx [x² + y²] = d/dx [25]</p>
          <p>2x + 2y·(dy/dx) = 0</p>
          <p>
            <strong>Step 2:</strong> Solve for dy/dx
          </p>
          <p>2y·(dy/dx) = -2x</p>
          <p>dy/dx = -x/y</p>
        </CardContent>
      </Card>

      <div className="bg-primary/10 p-4 rounded-lg mt-4">
        <h4 className="font-semibold mb-2">Applications:</h4>
        <ul className="list-disc pl-5 space-y-1">
          <li>Finding the slope of a tangent line to a curve defined implicitly</li>
          <li>Working with complex equations that can't be easily solved for y</li>
          <li>Finding derivatives of inverse functions</li>
        </ul>
      </div>
    </div>
  );
}

export function DerivativesSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const accordionItems = [
    {
      id: "basic-differentiation-rules",
      title: mounted ? t("accordion.differentiation") : "Basic Differentiation Rules",
      content: <BasicRulesContent />
    },
    {
      id: "product-and-quotient-rules",
      title: mounted ? t("accordion.product") : "Product and Quotient Rules",
      content: <ProductQuotientContent />
    },
    {
      id: "chain-rule",
      title: mounted ? t("accordion.chain") : "Chain Rule",
      content: <ChainRuleContent />
    },
    {
      id: "derivatives-common-functions",
      title: mounted ? t("accordion.functions") : "Derivatives of Common Functions",
      content: <CommonFunctionsContent />
    },
    {
      id: "implicit-differentiation",
      title: mounted ? t("accordion.implicit") : "Implicit Differentiation",
      content: <ImplicitContent />
    }
  ];

  return (
    <section id="derivatives" className="bg-card rounded-xl shadow-md p-6 lg:p-8">
      <h2 className="text-3xl font-bold text-primary mb-6">
        {mounted ? t("section.differential") : "Differential Calculus"}
      </h2>
      <p className="text-muted-foreground mb-8">
        Differential calculus focuses on rates of change and slopes of curves. The derivative of a function represents
        its instantaneous rate of change at any given point. This powerful concept has applications across science,
        engineering, economics, and other fields.
      </p>

      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-primary mb-4">Definition of the Derivative</h3>
        <Card className="bg-primary/5">
          <CardContent className="pt-6">
            <p className="text-foreground/80">
              The derivative of a function f(x) is defined as:
            </p>
            <p className="my-3 text-center font-medium text-primary">
              f'(x) = lim<sub>h→0</sub> [f(x+h) - f(x)] / h
            </p>
            <p className="text-foreground/80">
              This limit, if it exists, gives the slope of the tangent line to the function at the point x.
            </p>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div>
            <h4 className="text-xl font-medium text-primary mb-3">Notation</h4>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Notation</TableHead>
                  <TableHead>Meaning</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>f'(x)</TableCell>
                  <TableCell>Lagrange's notation</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>dy/dx</TableCell>
                  <TableCell>Leibniz's notation</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>y'</TableCell>
                  <TableCell>Prime notation</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Df(x)</TableCell>
                  <TableCell>Operator notation</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>

          <div>
            <h4 className="text-xl font-medium text-primary mb-3">Interpretation</h4>
            <ul className="space-y-3">
              <li className="bg-primary/5 p-3 rounded-md">
                <strong>Slope:</strong> The derivative f'(a) gives the slope of the tangent line to f(x) at x = a.
              </li>
              <li className="bg-primary/5 p-3 rounded-md">
                <strong>Rate of Change:</strong> The derivative represents instantaneous rate of change.
              </li>
              <li className="bg-primary/5 p-3 rounded-md">
                <strong>Velocity:</strong> If s(t) is position, s'(t) gives velocity.
              </li>
              <li className="bg-primary/5 p-3 rounded-md">
                <strong>Acceleration:</strong> The second derivative s''(t) gives acceleration.
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <h3 className="text-2xl font-semibold text-primary mb-4">Differentiation Rules</h3>

        <AccordionWrapper items={accordionItems} className="mb-8" />

        <Separator className="my-8" />

        <h3 className="text-2xl font-semibold text-primary mb-4">Applications of Derivatives</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <Card>
              <CardContent className="pt-6">
                <h4 className="text-lg font-semibold mb-2">Finding Tangent Lines</h4>
                <p className="text-muted-foreground">
                  The derivative gives the slope of the tangent line to a curve at a point. The equation of the
                  tangent line at x = a is: y - f(a) = f'(a)(x - a)
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h4 className="text-lg font-semibold mb-2">Curve Sketching</h4>
                <p className="text-muted-foreground">
                  Derivatives help identify critical points, intervals of increase/decrease, and concavity,
                  which aid in sketching graphs of functions.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h4 className="text-lg font-semibold mb-2">Motion Analysis</h4>
                <p className="text-muted-foreground">
                  In physics, derivatives describe position, velocity, and acceleration of moving objects,
                  providing a mathematical framework for analyzing motion.
                </p>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card>
              <CardContent className="pt-6">
                <h4 className="text-lg font-semibold mb-2">Optimization Problems</h4>
                <p className="text-muted-foreground">
                  Derivatives help find maximum and minimum values of functions, which is useful in optimization
                  problems across many fields including economics, engineering, and physics.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h4 className="text-lg font-semibold mb-2">Related Rates</h4>
                <p className="text-muted-foreground">
                  When multiple quantities are changing over time and are related by an equation, derivatives
                  help determine how the rates of change are related.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h4 className="text-lg font-semibold mb-2">Newton's Method</h4>
                <p className="text-muted-foreground">
                  A powerful algorithm using derivatives to approximate solutions to equations. It's widely used
                  in numerical analysis and computational mathematics.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="bg-primary/5 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-primary mb-3">Higher Order Derivatives</h3>
          <p className="text-muted-foreground mb-3">
            The derivative of a derivative is called a second derivative, denoted as f''(x) or d²y/dx².
            Similarly, we can find third, fourth, and higher order derivatives.
          </p>
          <div className="bg-card p-4 rounded-lg">
            <h4 className="font-medium mb-2">Significance:</h4>
            <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
              <li><strong>Second derivative (f''(x)):</strong> Describes concavity and acceleration</li>
              <li><strong>Inflection points:</strong> Points where f''(x) = 0 and concavity changes</li>
              <li><strong>Taylor series:</strong> Higher derivatives are used in Taylor series expansions</li>
              <li><strong>Differential equations:</strong> Higher derivatives appear in many differential equations</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
