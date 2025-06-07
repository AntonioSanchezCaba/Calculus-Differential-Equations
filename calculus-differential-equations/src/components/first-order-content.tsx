import { Card, CardContent } from "@/components/ui/card";

export function FirstOrderContent() {
  return (
    <div className="space-y-6">
      <h4 className="font-semibold text-lg">Introduction to First-Order Differential Equations</h4>
      <p className="text-muted-foreground">
        A first-order differential equation involves only the first derivative of the unknown function.
        The general form is:
      </p>

      <div className="bg-primary/5 p-4 rounded-lg flex items-center justify-center">
        <p className="text-lg font-medium">
          dy/dx = f(x, y)
        </p>
      </div>

      <p className="text-muted-foreground">
        First-order differential equations appear frequently in physics, engineering, biology, and other sciences.
        Several methods exist for solving these equations, depending on their specific form.
      </p>

      <div className="border-l-4 border-primary/40 pl-4 py-2">
        <h5 className="font-medium text-primary">Classification of First-Order Equations</h5>
        <ul className="list-disc pl-5 mt-2 space-y-2 text-muted-foreground">
          <li><strong>Separable equations</strong> - Can be written in the form g(y)dy = h(x)dx</li>
          <li><strong>Linear equations</strong> - Can be written as dy/dx + P(x)y = Q(x)</li>
          <li><strong>Exact equations</strong> - Can be written as M(x,y)dx + N(x,y)dy = 0 where ∂M/∂y = ∂N/∂x</li>
          <li><strong>Homogeneous equations</strong> - Can be written as dy/dx = f(y/x)</li>
          <li><strong>Bernoulli equations</strong> - Can be written as dy/dx + P(x)y = Q(x)y^n</li>
        </ul>
      </div>

      <div className="mt-8">
        <h4 className="font-semibold text-lg">Separable Equations</h4>
        <p className="text-muted-foreground mt-2">
          A differential equation is separable if it can be written in the form:
        </p>

        <div className="bg-primary/5 p-4 rounded-lg my-4 flex items-center justify-center">
          <p className="text-lg font-medium">g(y)dy = h(x)dx</p>
        </div>

        <p className="text-muted-foreground">
          To solve, we integrate both sides of the equation:
        </p>

        <div className="bg-primary/5 p-4 rounded-lg my-4 flex items-center justify-center">
          <p className="text-lg font-medium">∫g(y)dy = ∫h(x)dx + C</p>
        </div>

        <div className="bg-primary/10 p-5 rounded-lg mt-6">
          <h5 className="font-semibold text-lg mb-3">Example: Solve dy/dx = xy</h5>

          <div className="space-y-3 ml-2 border-l-2 border-primary/60 pl-4">
            <p><strong className="text-primary">Step 1:</strong> Separate the variables</p>
            <div className="bg-primary/5 p-2 rounded">
              <p>(1/y)dy = xdx</p>
            </div>

            <p><strong className="text-primary">Step 2:</strong> Integrate both sides</p>
            <div className="bg-primary/5 p-2 rounded">
              <p>∫(1/y)dy = ∫xdx</p>
            </div>

            <p><strong className="text-primary">Step 3:</strong> Evaluate the integrals</p>
            <div className="bg-primary/5 p-2 rounded">
              <p>ln|y| = x²/2 + C</p>
            </div>

            <p><strong className="text-primary">Step 4:</strong> Solve for y by applying the exponential function to both sides</p>
            <div className="bg-primary/5 p-2 rounded">
              <p>|y| = e^(x²/2 + C) = e^C · e^(x²/2)</p>
            </div>

            <p><strong className="text-primary">Step 5:</strong> Simplify the solution</p>
            <div className="bg-primary/5 p-2 rounded">
              <p>y = ±e^C · e^(x²/2) = Ae^(x²/2)</p>
              <p className="text-sm mt-1">where A = ±e^C is an arbitrary constant</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h4 className="font-semibold text-lg">Linear First-Order Equations</h4>
        <p className="text-muted-foreground mt-2">
          A first-order linear differential equation has the form:
        </p>

        <div className="bg-primary/5 p-4 rounded-lg my-4 flex items-center justify-center">
          <p className="text-lg font-medium">dy/dx + P(x)y = Q(x)</p>
        </div>

        <p className="text-muted-foreground">
          To solve, we use an integrating factor μ(x) = e^(∫P(x)dx):
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <Card>
            <CardContent className="pt-6">
              <h5 className="font-medium mb-2">Method Steps:</h5>
              <ol className="list-decimal pl-5 space-y-2 text-muted-foreground">
                <li>Identify P(x) and Q(x)</li>
                <li>Find the integrating factor: μ(x) = e^(∫P(x)dx)</li>
                <li>Multiply both sides by μ(x)</li>
                <li>Recognize that the left side is now a product rule derivative</li>
                <li>Integrate both sides and solve for y</li>
              </ol>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h5 className="font-medium mb-2">Important Note:</h5>
              <p className="text-muted-foreground">
                The left side of the equation, when multiplied by the integrating factor,
                becomes d/dx[μ(x)y], which is why this method works.
              </p>
              <p className="text-muted-foreground mt-2">
                The solution has the form:
              </p>
              <div className="bg-primary/5 p-2 rounded mt-2">
                <p>y = (1/μ(x))(∫μ(x)Q(x)dx + C)</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="bg-primary/10 p-5 rounded-lg mt-6">
          <h5 className="font-semibold text-lg mb-3">Example: Solve dy/dx + 2xy = x</h5>

          <div className="space-y-3 ml-2 border-l-2 border-primary/60 pl-4">
            <p><strong className="text-primary">Step 1:</strong> Identify P(x) and Q(x)</p>
            <div className="bg-primary/5 p-2 rounded">
              <p>P(x) = 2x and Q(x) = x</p>
            </div>

            <p><strong className="text-primary">Step 2:</strong> Calculate the integrating factor</p>
            <div className="bg-primary/5 p-2 rounded">
              <p>μ(x) = e^(∫2x dx) = e^(x²)</p>
            </div>

            <p><strong className="text-primary">Step 3:</strong> Multiply the equation by μ(x)</p>
            <div className="bg-primary/5 p-2 rounded">
              <p>e^(x²) · dy/dx + 2xe^(x²) · y = xe^(x²)</p>
            </div>

            <p><strong className="text-primary">Step 4:</strong> Recognize the left side as a product rule derivative</p>
            <div className="bg-primary/5 p-2 rounded">
              <p>d/dx[e^(x²)y] = xe^(x²)</p>
            </div>

            <p><strong className="text-primary">Step 5:</strong> Integrate both sides</p>
            <div className="bg-primary/5 p-2 rounded">
              <p>e^(x²)y = ∫xe^(x²)dx = (1/2)e^(x²) + C</p>
            </div>

            <p><strong className="text-primary">Step 6:</strong> Solve for y</p>
            <div className="bg-primary/5 p-2 rounded">
              <p>y = (1/2) + Ce^(-x²)</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h4 className="font-semibold text-lg">Applications of First-Order Differential Equations</h4>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          <Card>
            <CardContent className="pt-6">
              <h5 className="font-semibold mb-2">Population Growth</h5>
              <p className="text-muted-foreground">
                The differential equation dP/dt = kP models exponential population growth,
                where P is the population size and k is the growth rate.
              </p>
              <div className="bg-primary/5 p-2 rounded mt-2">
                <p>Solution: P(t) = P₀e^(kt)</p>
                <p className="text-sm mt-1">where P₀ is the initial population</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h5 className="font-semibold mb-2">Radioactive Decay</h5>
              <p className="text-muted-foreground">
                The differential equation dN/dt = -λN models radioactive decay,
                where N is the amount of radioactive material and λ is the decay constant.
              </p>
              <div className="bg-primary/5 p-2 rounded mt-2">
                <p>Solution: N(t) = N₀e^(-λt)</p>
                <p className="text-sm mt-1">where N₀ is the initial amount</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h5 className="font-semibold mb-2">Newton's Law of Cooling</h5>
              <p className="text-muted-foreground">
                The differential equation dT/dt = k(T - T_a) models the temperature change of an object,
                where T is the object's temperature, T_a is the ambient temperature, and k is a cooling constant.
              </p>
              <div className="bg-primary/5 p-2 rounded mt-2">
                <p>Solution: T(t) = T_a + (T₀ - T_a)e^(kt)</p>
                <p className="text-sm mt-1">where T₀ is the initial temperature</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h5 className="font-semibold mb-2">RC Circuits</h5>
              <p className="text-muted-foreground">
                The differential equation RC(dV/dt) + V = E(t) models the voltage in a resistor-capacitor circuit,
                where V is the voltage, R is resistance, C is capacitance, and E(t) is the electromotive force.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
