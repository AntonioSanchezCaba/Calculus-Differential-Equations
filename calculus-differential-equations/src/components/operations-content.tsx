import { Card, CardContent } from "@/components/ui/card";

export function BasicOperationsContent() {
  return (
    <div className="space-y-6">
      <h4 className="font-semibold text-lg">Order of Operations (PEMDAS)</h4>
      <p className="text-muted-foreground">
        The order of operations is a convention that defines the sequence in which operations should be performed in an expression. Following this order is crucial for obtaining the correct result.
      </p>

      <ol className="list-decimal pl-5 space-y-3">
        <li className="border-l-2 border-primary/40 pl-3 py-1">
          <strong className="text-primary">P</strong>arentheses (or Brackets)
          <p className="text-sm text-muted-foreground mt-1">Evaluate expressions inside parentheses first. This includes brackets [ ], braces { }, and other grouping symbols.</p>
        </li>
        <li className="border-l-2 border-primary/40 pl-3 py-1">
          <strong className="text-primary">E</strong>xponents (Powers and Square Roots)
          <p className="text-sm text-muted-foreground mt-1">Evaluate all exponents, powers, and roots from left to right.</p>
        </li>
        <li className="border-l-2 border-primary/40 pl-3 py-1">
          <strong className="text-primary">M</strong>ultiplication and <strong className="text-primary">D</strong>ivision (from left to right)
          <p className="text-sm text-muted-foreground mt-1">Perform all multiplications and divisions in order from left to right. These operations have equal precedence.</p>
        </li>
        <li className="border-l-2 border-primary/40 pl-3 py-1">
          <strong className="text-primary">A</strong>ddition and <strong className="text-primary">S</strong>ubtraction (from left to right)
          <p className="text-sm text-muted-foreground mt-1">Perform all additions and subtractions in order from left to right. These operations have equal precedence.</p>
        </li>
      </ol>

      <div className="bg-primary/5 p-4 rounded-lg mt-6">
        <h5 className="font-semibold">Example 1: Solve 3 + 2 × (8 - 5)² ÷ 3</h5>
        <div className="mt-3 space-y-2 pl-4 border-l-2 border-primary/60">
          <p className="flex items-center">
            <span className="w-8 h-8 rounded-full bg-primary/10 inline-flex items-center justify-center mr-2 font-medium text-primary">1</span>
            <span>First, evaluate the expression inside parentheses: (8 - 5) = 3</span>
          </p>
          <p className="flex items-center">
            <span className="w-8 h-8 rounded-full bg-primary/10 inline-flex items-center justify-center mr-2 font-medium text-primary">2</span>
            <span>Next, evaluate the exponent: 3² = 9</span>
          </p>
          <p className="flex items-center">
            <span className="w-8 h-8 rounded-full bg-primary/10 inline-flex items-center justify-center mr-2 font-medium text-primary">3</span>
            <span>Perform multiplication and division from left to right: 2 × 9 = 18, then 18 ÷ 3 = 6</span>
          </p>
          <p className="flex items-center">
            <span className="w-8 h-8 rounded-full bg-primary/10 inline-flex items-center justify-center mr-2 font-medium text-primary">4</span>
            <span>Finally, perform addition: 3 + 6 = 9</span>
          </p>
        </div>
      </div>

      <div className="bg-primary/5 p-4 rounded-lg">
        <h5 className="font-semibold">Example 2: Solve 4 × 3 + 2² - 10 ÷ 5</h5>
        <div className="mt-3 space-y-2 pl-4 border-l-2 border-primary/60">
          <p className="flex items-center">
            <span className="w-8 h-8 rounded-full bg-primary/10 inline-flex items-center justify-center mr-2 font-medium text-primary">1</span>
            <span>First, evaluate the exponent: 2² = 4</span>
          </p>
          <p className="flex items-center">
            <span className="w-8 h-8 rounded-full bg-primary/10 inline-flex items-center justify-center mr-2 font-medium text-primary">2</span>
            <span>Perform multiplication and division from left to right: 4 × 3 = 12, 10 ÷ 5 = 2</span>
          </p>
          <p className="flex items-center">
            <span className="w-8 h-8 rounded-full bg-primary/10 inline-flex items-center justify-center mr-2 font-medium text-primary">3</span>
            <span>Finally, perform addition and subtraction from left to right: 12 + 4 - 2 = 14</span>
          </p>
        </div>
      </div>

      <h4 className="font-semibold text-lg mt-8">Common Mistakes to Avoid</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="border-destructive/20">
          <CardContent className="pt-6">
            <h5 className="font-semibold mb-2 text-destructive">Wrong: 2 + 3 × 4 = 20</h5>
            <p className="text-sm text-muted-foreground">This incorrectly performs addition before multiplication.</p>
            <p className="text-sm mt-2 italic">Correct approach: 2 + (3 × 4) = 2 + 12 = 14</p>
          </CardContent>
        </Card>

        <Card className="border-destructive/20">
          <CardContent className="pt-6">
            <h5 className="font-semibold mb-2 text-destructive">Wrong: 8 ÷ 4 × 2 = 1</h5>
            <p className="text-sm text-muted-foreground">This incorrectly performs multiplication before division from left to right.</p>
            <p className="text-sm mt-2 italic">Correct approach: (8 ÷ 4) × 2 = 2 × 2 = 4</p>
          </CardContent>
        </Card>
      </div>

      <div className="bg-primary/10 p-4 rounded-lg mt-6">
        <h5 className="font-semibold flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-primary" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clipRule="evenodd" />
          </svg>
          Important Tip
        </h5>
        <p className="mt-2 text-sm">
          When in doubt, use parentheses to make your intended order of operations explicit.
          Parentheses can clarify your intentions and eliminate ambiguity even if they're not
          strictly necessary according to PEMDAS.
        </p>
      </div>

      <h4 className="font-semibold text-lg mt-8">Practice Problems</h4>
      <p className="text-muted-foreground mb-4">Try these problems to test your understanding of the order of operations:</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 border rounded-lg">
          <p><strong>1.</strong> 7 - 4 + 2</p>
          <p className="mt-2 text-primary font-medium">Answer: 5</p>
        </div>

        <div className="p-4 border rounded-lg">
          <p><strong>2.</strong> 3 × (4 + 2)</p>
          <p className="mt-2 text-primary font-medium">Answer: 18</p>
        </div>

        <div className="p-4 border rounded-lg">
          <p><strong>3.</strong> 20 ÷ 5 × 2 + 3</p>
          <p className="mt-2 text-primary font-medium">Answer: 11</p>
        </div>

        <div className="p-4 border rounded-lg">
          <p><strong>4.</strong> 2³ - 4 × 3 + 7</p>
          <p className="mt-2 text-primary font-medium">Answer: 11</p>
        </div>
      </div>
    </div>
  );
}
