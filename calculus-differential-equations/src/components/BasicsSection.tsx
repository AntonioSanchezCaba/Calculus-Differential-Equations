"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { BasicOperationsContent } from "./operations-content";
import { AccordionWrapper } from "./accordion-wrapper";
import { useState, useEffect } from "react";
import { t } from "@/lib/translations";

// Polynomial Operations Component
function PolynomialsContent() {
  return (
    <div className="space-y-4 p-2">
      <p>
        A polynomial is an expression of the form a<sub>n</sub>x<sup>n</sup> + a<sub>n-1</sub>x<sup>n-1</sup> + ... + a<sub>1</sub>x + a<sub>0</sub>,
        where a<sub>n</sub>, a<sub>n-1</sub>,..., a<sub>1</sub>, a<sub>0</sub> are constants and n is a non-negative integer.
      </p>

      <h4 className="font-semibold text-lg">Polynomial Operations:</h4>

      <Card className="mt-4">
        <CardContent className="pt-6">
          <h5 className="font-semibold mb-2">Addition and Subtraction</h5>
          <p>Combine like terms by adding or subtracting their coefficients.</p>
          <div className="bg-primary/5 p-3 rounded mt-2">
            <p>(3x² + 2x - 5) + (x² - 3x + 1) = 4x² - x - 4</p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="pt-6">
          <h5 className="font-semibold mb-2">Multiplication</h5>
          <p>Multiply each term of the first polynomial by each term of the second.</p>
          <div className="bg-primary/5 p-3 rounded mt-2">
            <p>(x + 2)(x - 3) = x² - 3x + 2x - 6 = x² - x - 6</p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="pt-6">
          <h5 className="font-semibold mb-2">Division</h5>
          <p>Use long division or synthetic division.</p>
          <div className="bg-primary/5 p-3 rounded mt-2">
            <p>(x² + 3x + 2) ÷ (x + 1) = x + 2</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

// Exponents and Radicals Component
function ExponentsContent() {
  return (
    <div className="space-y-4 p-2">
      <h4 className="font-semibold text-lg">Exponent Rules</h4>

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
            <TableCell>Product Rule</TableCell>
            <TableCell>x<sup>a</sup> × x<sup>b</sup> = x<sup>a+b</sup></TableCell>
            <TableCell>2<sup>3</sup> × 2<sup>4</sup> = 2<sup>7</sup> = 128</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Quotient Rule</TableCell>
            <TableCell>x<sup>a</sup> ÷ x<sup>b</sup> = x<sup>a-b</sup></TableCell>
            <TableCell>2<sup>5</sup> ÷ 2<sup>2</sup> = 2<sup>3</sup> = 8</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Power Rule</TableCell>
            <TableCell>(x<sup>a</sup>)<sup>b</sup> = x<sup>a×b</sup></TableCell>
            <TableCell>(2<sup>3</sup>)<sup>2</sup> = 2<sup>6</sup> = 64</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Negative Exponent</TableCell>
            <TableCell>x<sup>-a</sup> = 1/x<sup>a</sup></TableCell>
            <TableCell>2<sup>-3</sup> = 1/2<sup>3</sup> = 1/8 = 0.125</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Zero Exponent</TableCell>
            <TableCell>x<sup>0</sup> = 1</TableCell>
            <TableCell>7<sup>0</sup> = 1</TableCell>
          </TableRow>
        </TableBody>
      </Table>

      <h4 className="font-semibold text-lg mt-6">Radical Rules</h4>

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
            <TableCell>Product Rule</TableCell>
            <TableCell>√(a × b) = √a × √b</TableCell>
            <TableCell>√(4 × 9) = √4 × √9 = 2 × 3 = 6</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Quotient Rule</TableCell>
            <TableCell>√(a ÷ b) = √a ÷ √b</TableCell>
            <TableCell>√(25 ÷ 9) = √25 ÷ √9 = 5 ÷ 3</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Power Rule</TableCell>
            <TableCell>√(a<sup>n</sup>) = (√a)<sup>n</sup></TableCell>
            <TableCell>√(3<sup>2</sup>) = (√3)<sup>2</sup> = 3</TableCell>
          </TableRow>
        </TableBody>
      </Table>

      <div className="bg-primary/10 p-4 rounded-lg mt-4">
        <h5 className="font-semibold">Important Note:</h5>
        <p>
          Radicals can be rewritten as fractional exponents: √x = x<sup>1/2</sup>,
          ∛x = x<sup>1/3</sup>, etc.
        </p>
      </div>
    </div>
  );
}

// Solving Equations Component
function EquationsContent() {
  return (
    <div className="space-y-4 p-2">
      <h4 className="font-semibold text-lg">Linear Equations</h4>
      <p>
        Linear equations have the form ax + b = c, where a, b, and c are constants and a ≠ 0.
      </p>
      <div className="bg-primary/5 p-3 rounded mt-2">
        <p className="font-semibold">Example: Solve 2x + 5 = 17</p>
        <p className="mt-2">
          <span className="block">2x + 5 = 17</span>
          <span className="block">2x = 12</span>
          <span className="block">x = 6</span>
        </p>
      </div>

      <h4 className="font-semibold text-lg mt-4">Quadratic Equations</h4>
      <p>
        Quadratic equations have the form ax² + bx + c = 0, where a, b, and c are constants and a ≠ 0.
      </p>
      <h5 className="font-medium mt-2">Quadratic Formula:</h5>
      <p className="bg-primary/5 p-3 rounded">
        If ax² + bx + c = 0, then x = (-b ± √(b² - 4ac)) / 2a
      </p>

      <div className="bg-primary/5 p-3 rounded mt-3">
        <p className="font-semibold">Example: Solve x² - 5x + 6 = 0</p>
        <p className="mt-2">
          <span className="block">a = 1, b = -5, c = 6</span>
          <span className="block">x = (-(-5) ± √((-5)² - 4(1)(6))) / 2(1)</span>
          <span className="block">x = (5 ± √(25 - 24)) / 2</span>
          <span className="block">x = (5 ± √1) / 2</span>
          <span className="block">x = (5 ± 1) / 2</span>
          <span className="block">x = 3 or x = 2</span>
        </p>
      </div>

      <h4 className="font-semibold text-lg mt-4">Radical Equations</h4>
      <p>
        Equations that contain variables inside radicals.
      </p>
      <div className="bg-primary/5 p-3 rounded mt-2">
        <p className="font-semibold">Example: Solve √(2x + 3) = 5</p>
        <p className="mt-2">
          <span className="block">Square both sides: (√(2x + 3))² = 5²</span>
          <span className="block">2x + 3 = 25</span>
          <span className="block">2x = 22</span>
          <span className="block">x = 11</span>
          <span className="block font-medium text-primary mt-1">
            Always check solutions in the original equation to avoid extraneous solutions!
          </span>
        </p>
      </div>
    </div>
  );
}

export function BasicsSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const accordionItems = [
    {
      id: "basic-operations",
      title: mounted ? t("accordion.basic") : "Basic Algebraic Operations",
      content: <BasicOperationsContent />
    },
    {
      id: "polynomials",
      title: mounted ? t("accordion.polynomials") : "Polynomials",
      content: <PolynomialsContent />
    },
    {
      id: "exponents",
      title: mounted ? t("accordion.exponents") : "Exponents and Radicals",
      content: <ExponentsContent />
    },
    {
      id: "equations",
      title: mounted ? t("accordion.equations") : "Solving Equations",
      content: <EquationsContent />
    }
  ];

  return (
    <section id="basics" className="bg-card rounded-xl shadow-md p-6 lg:p-8">
      <h2 className="text-3xl font-bold text-primary mb-6">
        {mounted ? t("section.foundational") : "Foundational Algebra"}
      </h2>
      <p className="text-muted-foreground mb-8">
        {mounted ? t("section.foundational.desc") : "Mastering algebra is essential before diving into calculus. These fundamental concepts form the backbone of all higher mathematics. Review these topics carefully before moving on to more advanced concepts."}
      </p>

      <AccordionWrapper
        items={accordionItems}
        className="mb-8"
      />

      <div className="bg-primary/5 p-6 rounded-lg">
        <h3 className="text-xl font-semibold text-primary mb-3">
          {mounted ? t("ui.why.algebra") : "Why Algebra is Important for Calculus"}
        </h3>
        <p className="text-foreground/80">
          {mounted ? t("ui.why.algebra.desc") : "Calculus builds directly on algebraic foundations. You'll need to manipulate expressions, solve equations, work with functions, and simplify complex terms throughout your calculus journey. Strong algebra skills will make differential and integral calculus much more accessible."}
        </p>
        <ul className="list-disc pl-5 mt-3 space-y-1 text-foreground/80">
          <li>{mounted ? t("ui.why.algebra.points.1") : "Factoring polynomials is essential for finding derivatives and computing limits"}</li>
          <li>{mounted ? t("ui.why.algebra.points.2") : "Simplifying fractions is frequently required in calculus problems"}</li>
          <li>{mounted ? t("ui.why.algebra.points.3") : "Working with exponents and logarithms is fundamental for many calculus techniques"}</li>
          <li>{mounted ? t("ui.why.algebra.points.4") : "Understanding functions and their behavior underlies all of calculus"}</li>
        </ul>
      </div>
    </section>
  );
}
