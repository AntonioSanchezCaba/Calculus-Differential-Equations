"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { FirstOrderContent } from "./first-order-content";
import { AccordionWrapper } from "./accordion-wrapper";
import { useState, useEffect } from "react";
import { t } from "@/lib/translations";

// Second-order DE component for better organization
function SecondOrderContent() {
  return (
    <div className="space-y-6">
      <p className="text-foreground/80 mb-4">
        Second-order ODEs involve the second derivative of the unknown function. The most commonly studied form is the linear second-order equation:
      </p>
      <p className="bg-primary/5 p-3 rounded text-center mb-4">
        a(x)y'' + b(x)y' + c(x)y = g(x)
      </p>

      <div>
        <h4 className="font-semibold text-lg mb-2">Homogeneous Linear Equations with Constant Coefficients</h4>
        <p className="text-foreground/80 mb-2">
          These have the form: ay'' + by' + cy = 0, where a, b, and c are constants.
        </p>
        <p className="text-foreground/80 mb-2">
          Solution method: Assume a solution of the form y = e<sup>rx</sup> and solve the characteristic equation:
        </p>
        <p className="bg-primary/5 p-3 rounded text-center mb-3">
          ar² + br + c = 0
        </p>
        <div className="bg-primary/10 p-4 rounded-lg">
          <h5 className="font-medium mb-2">Example: Solve y'' - 3y' + 2y = 0</h5>
          <p>
            <span className="block">Characteristic equation: r² - 3r + 2 = 0</span>
            <span className="block">Factoring: (r - 1)(r - 2) = 0</span>
            <span className="block">Roots: r = 1 and r = 2</span>
            <span className="block">General solution: y = C₁e<sup>x</sup> + C₂e<sup>2x</sup></span>
          </p>
        </div>

        <div className="mt-4">
          <h5 className="font-medium mb-2">Different cases for the characteristic equation:</h5>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Case</TableHead>
                <TableHead>Roots</TableHead>
                <TableHead>General Solution</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>1</TableCell>
                <TableCell>Two distinct real roots r₁ and r₂</TableCell>
                <TableCell>y = C₁e<sup>r₁x</sup> + C₂e<sup>r₂x</sup></TableCell>
              </TableRow>
              <TableRow>
                <TableCell>2</TableCell>
                <TableCell>Repeated real root r₁</TableCell>
                <TableCell>y = C₁e<sup>r₁x</sup> + C₂xe<sup>r₁x</sup></TableCell>
              </TableRow>
              <TableRow>
                <TableCell>3</TableCell>
                <TableCell>Complex conjugate roots α ± βi</TableCell>
                <TableCell>y = e<sup>αx</sup>(C₁cos(βx) + C₂sin(βx))</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>

      <div>
        <h4 className="font-semibold text-lg mb-2">Non-homogeneous Linear Equations</h4>
        <p className="text-foreground/80 mb-2">
          These have the form: ay'' + by' + cy = g(x), where g(x) is not zero.
        </p>
        <p className="text-foreground/80 mb-2">
          The general solution is the sum of:
        </p>
        <ul className="list-disc pl-5 mt-2 space-y-1 text-muted-foreground">
          <li>The general solution of the homogeneous equation (ay'' + by' + cy = 0)</li>
          <li>A particular solution of the non-homogeneous equation</li>
        </ul>
        <p className="text-foreground/80 mt-2 mb-2">
          Methods for finding a particular solution:
        </p>
        <ul className="list-disc pl-5 mt-2 space-y-1 text-muted-foreground">
          <li><strong>Method of Undetermined Coefficients:</strong> Works for specific forms of g(x)</li>
          <li><strong>Variation of Parameters:</strong> More general method that works for any g(x)</li>
        </ul>
      </div>
    </div>
  );
}

// Series Solutions component
function SeriesSolutionsContent() {
  return (
    <div className="space-y-6">
      <p className="text-foreground/80 mb-4">
        When analytical solutions are difficult to find, we can seek solutions in the form of a power series:
      </p>
      <p className="bg-primary/5 p-3 rounded text-center mb-4">
        y(x) = Σ a<sub>n</sub>(x - x₀)<sup>n</sup> = a₀ + a₁(x - x₀) + a₂(x - x₀)² + ...
      </p>
      <p className="text-foreground/80 mb-4">
        This approach is particularly useful for equations with variable coefficients or at regular singular points.
      </p>
      <div className="bg-primary/10 p-4 rounded-lg">
        <h5 className="font-medium mb-2">Common Equations with Series Solutions:</h5>
        <ul className="list-disc pl-5 mt-2 space-y-1 text-muted-foreground">
          <li><strong>Bessel's equation:</strong> x²y'' + xy' + (x² - n²)y = 0</li>
          <li><strong>Legendre's equation:</strong> (1-x²)y'' - 2xy' + n(n+1)y = 0</li>
          <li><strong>Airy's equation:</strong> y'' - xy = 0</li>
        </ul>
      </div>
    </div>
  );
}

// Systems of Differential Equations component
function SystemsContent() {
  return (
    <div className="space-y-6">
      <p className="text-foreground/80 mb-4">
        Many problems involve multiple unknown functions and multiple differential equations. A system of first-order ODEs can be written in vector form as:
      </p>
      <p className="bg-primary/5 p-3 rounded text-center mb-4">
        d𝐲/dx = 𝐀(x)𝐲 + 𝐛(x)
      </p>
      <p className="text-foreground/80 mb-4">
        where 𝐲 is a vector of unknown functions, 𝐀 is a matrix of coefficients, and 𝐛 is a vector of functions.
      </p>
      <p className="text-foreground/80 mb-4">
        Any higher-order ODE can be reduced to a system of first-order ODEs by introducing new variables.
      </p>
      <div className="bg-primary/10 p-4 rounded-lg">
        <h5 className="font-medium mb-2">Example: Convert y'' + 3y' + 2y = 0 to a system of first-order equations</h5>
        <p className="mb-2">Define new variables: u₁ = y and u₂ = y'</p>
        <p className="mb-2">Then:</p>
        <p>
          <span className="block">u₁' = u₂</span>
          <span className="block">u₂' = -2u₁ - 3u₂</span>
        </p>
        <p className="mt-2">This can be written in matrix form as:</p>
        <p className="mt-2">
          <span className="block">
            [u₁']   =   [0  1] [u₁]
          </span>
          <span className="block">
            [u₂']       [-2 -3] [u₂]
          </span>
        </p>
      </div>
    </div>
  );
}

export function OrdinaryDESection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const accordionItems = [
    {
      id: "first-order",
      title: mounted ? t("accordion.firstorder") : "First-Order Differential Equations",
      content: <FirstOrderContent />
    },
    {
      id: "second-order",
      title: mounted ? t("accordion.secondorder") : "Second-Order Differential Equations",
      content: <SecondOrderContent />
    }
  ];

  return (
    <section id="odes" className="bg-card rounded-xl shadow-md p-6 lg:p-8">
      <h2 className="text-3xl font-bold text-primary mb-6">
        {mounted ? t("section.odes") : "Ordinary Differential Equations"}
      </h2>
      <p className="text-muted-foreground mb-8">
        Differential equations describe relationships involving rates of change, making them fundamental in
        modeling dynamic systems. This section focuses on ordinary differential equations (ODEs) which involve
        functions of a single independent variable.
      </p>

      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-primary mb-4">Basic Concepts</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <Card>
            <CardContent className="pt-6">
              <h4 className="text-lg font-semibold mb-2">Definition</h4>
              <p className="text-foreground/80">
                An ordinary differential equation (ODE) is an equation containing a function of one independent variable
                and its derivatives.
              </p>
              <p className="mt-2 text-foreground/80">Example: dy/dx = f(x, y)</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h4 className="text-lg font-semibold mb-2">Order</h4>
              <p className="text-foreground/80">
                The order of a differential equation is the highest derivative that appears in the equation.
              </p>
              <p className="mt-2 text-foreground/80">
                First-order: y' = f(x, y)<br />
                Second-order: y'' = f(x, y, y')
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h4 className="text-lg font-semibold mb-2">Linearity</h4>
              <p className="text-foreground/80">
                A linear ODE has the form:
              </p>
              <p className="mt-2 text-primary font-medium">
                a₀(x)y + a₁(x)y' + a₂(x)y'' + ... + aₙ(x)y⁽ⁿ⁾ = g(x)
              </p>
              <p className="mt-2 text-foreground/80">
                If g(x) = 0, it's homogeneous; otherwise, it's non-homogeneous.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h4 className="text-lg font-semibold mb-2">Solution Types</h4>
              <ul className="list-disc pl-5 space-y-1 text-foreground/80">
                <li><strong>General solution:</strong> Contains arbitrary constants</li>
                <li><strong>Particular solution:</strong> Satisfies specific initial conditions</li>
                <li><strong>Singular solution:</strong> Cannot be derived from the general solution</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <AccordionWrapper
          items={accordionItems}
          className="mb-8"
        />

        <h3 className="text-2xl font-semibold text-primary mb-4 mt-8">Systems of ODEs</h3>
        <p className="text-muted-foreground mb-6">
          Many real-world phenomena involve multiple interacting variables, leading to systems of differential equations.
        </p>

        <Card className="mb-6">
          <CardContent className="pt-6">
            <h4 className="text-lg font-semibold mb-2">First-Order System</h4>
            <p className="text-foreground/80 mb-2">
              A system of first-order ODEs can be written as:
            </p>
            <div className="bg-primary/5 p-3 rounded text-center">
              <p>dx₁/dt = f₁(t, x₁, x₂, ..., xₙ)</p>
              <p>dx₂/dt = f₂(t, x₁, x₂, ..., xₙ)</p>
              <p>...</p>
              <p>dxₙ/dt = fₙ(t, x₁, x₂, ..., xₙ)</p>
            </div>
            <p className="text-foreground/80 mt-2">
              Higher-order ODEs can be converted to first-order systems by introducing new variables.
            </p>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <Card>
            <CardContent className="pt-6">
              <h4 className="text-lg font-semibold mb-2">Matrix Form</h4>
              <p className="text-foreground/80 mb-2">
                Linear systems can be written in matrix form:
              </p>
              <p className="bg-primary/5 p-3 rounded text-center">
                dx/dt = Ax + b(t)
              </p>
              <p className="text-foreground/80 mt-2">
                Where x is the vector of variables, A is the coefficient matrix, and b is a vector function of t.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h4 className="text-lg font-semibold mb-2">Solution Methods</h4>
              <ul className="list-disc pl-5 space-y-1 text-foreground/80">
                <li><strong>Eigenvalue approach:</strong> For constant coefficient systems</li>
                <li><strong>Variation of parameters:</strong> For non-homogeneous systems</li>
                <li><strong>Numerical methods:</strong> For complex systems without analytical solutions</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <h3 className="text-2xl font-semibold text-primary mb-4 mt-8">Applications of ODEs</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div>
            <Card>
              <CardContent className="pt-6">
                <h4 className="text-lg font-semibold mb-2">Physics</h4>
                <p className="text-muted-foreground mb-2">
                  ODEs naturally describe physical laws:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                  <li>Newton's laws of motion</li>
                  <li>Simple harmonic oscillators</li>
                  <li>Electrical circuits (RLC)</li>
                  <li>Heat transfer and diffusion</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card>
              <CardContent className="pt-6">
                <h4 className="text-lg font-semibold mb-2">Population Dynamics</h4>
                <p className="text-muted-foreground mb-2">
                  Used to model population growth:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                  <li>Exponential growth: dP/dt = kP</li>
                  <li>Logistic growth: dP/dt = kP(1-P/K)</li>
                  <li>Predator-prey models (Lotka-Volterra)</li>
                  <li>Epidemiological models (SIR, SEIR)</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card>
              <CardContent className="pt-6">
                <h4 className="text-lg font-semibold mb-2">Chemical Reactions</h4>
                <p className="text-muted-foreground mb-2">
                  Chemical kinetics often leads to differential equations:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                  <li>First-order reaction: d[A]/dt = -k[A]</li>
                  <li>Second-order reaction: d[A]/dt = -k[A]²</li>
                  <li>Complex reaction networks lead to systems of ODEs</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="bg-primary/5 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-primary mb-3">Numerical Methods for ODEs</h3>
          <p className="text-muted-foreground mb-4">
            Many differential equations cannot be solved analytically. Numerical methods provide approximations to the solution:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
            <li>
              <strong>Euler's method:</strong> The simplest numerical method, but not very accurate.
              <p className="mt-1">y<sub>n+1</sub> = y<sub>n</sub> + h·f(x<sub>n</sub>, y<sub>n</sub>)</p>
            </li>
            <li>
              <strong>Improved Euler method (Heun's method):</strong> More accurate than Euler's method.
            </li>
            <li>
              <strong>Runge-Kutta methods:</strong> A family of iterative methods offering higher accuracy.
              The most common is the fourth-order Runge-Kutta method (RK4).
            </li>
            <li>
              <strong>Adams-Bashforth and Adams-Moulton methods:</strong> Multi-step methods that use information from several previous steps.
            </li>
            <li>
              <strong>Predictor-corrector methods:</strong> Combine explicit and implicit approaches for better stability and accuracy.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
