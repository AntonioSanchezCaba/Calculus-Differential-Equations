// Comprehensive translation system with ALL content
export const translations = {
  en: {
    // Header
    "header.title": "Calculus Master",
    "header.algebra": "Algebra",
    "header.limits": "Limits",
    "header.derivatives": "Derivatives",
    "header.integrals": "Integrals",
    "header.differential-equations": "Differential Equations",
    "header.roadmap": "Roadmap",

    // Hero Section
    "hero.title": "Master Calculus & Differential Equations",
    "hero.subtitle": "From basic algebra fundamentals to advanced differential equations — your complete, interactive guide to understanding mathematical concepts with clear explanations and visual examples.",
    "hero.start": "Start Learning",
    "hero.roadmap": "View Roadmap",
    "hero.stats.formulas": "Formulas",
    "hero.stats.examples": "Examples",
    "hero.stats.topics": "Key Topics",
    "hero.stats.applications": "Applications",
    "hero.stats.possibilities": "Possibilities",

    // Hero Features
    "hero.feature1.title": "Comprehensive Content",
    "hero.feature1.desc": "From basic algebra to advanced differential equations with detailed explanations",
    "hero.feature2.title": "Interactive Examples",
    "hero.feature2.desc": "Step-by-step solutions with visual aids and practical applications",
    "hero.feature3.title": "Progressive Learning",
    "hero.feature3.desc": "Structured roadmap that builds knowledge systematically",

    // Sections
    "section.algebra.title": "Foundational Algebra",
    "section.algebra.subtitle": "Mastering algebra is essential before diving into calculus. These fundamental concepts form the backbone of all higher mathematics. Review these topics carefully before moving on to more advanced concepts.",
    "section.limits.title": "Limits & Continuity",
    "section.limits.subtitle": "Understand the fundamental concept that bridges algebra and calculus. Limits describe the behavior of functions as they approach specific values.",
    "section.derivatives.title": "Derivatives",
    "section.derivatives.subtitle": "Master the art of finding rates of change. Derivatives are the foundation of differential calculus and have countless applications in science, engineering, and economics.",
    "section.integrals.title": "Integral Calculus",
    "section.integrals.subtitle": "Discover the reverse of differentiation. Integration allows us to find areas, volumes, and accumulate quantities over intervals.",
    "section.differential-equations.title": "Differential Equations",
    "section.differential-equations.subtitle": "Explore equations involving derivatives and their solutions. Differential equations model dynamic systems in physics, engineering, biology, and economics.",
    "section.roadmap.title": "Your Calculus Learning Roadmap",
    "section.roadmap.subtitle": "Follow this structured path to build a strong foundation and systematically advance through calculus and differential equations.",

    // Algebra Section Content
    "algebra.why.title": "Why Algebra Matters",
    "algebra.why.desc": "Understanding the critical role of algebra in calculus",
    "algebra.why.point1": "Polynomial manipulation is essential for derivatives and limits",
    "algebra.why.point2": "Factoring techniques simplify complex calculus expressions",
    "algebra.why.point3": "Function properties underlie all calculus concepts",
    "algebra.why.point4": "Equation solving skills transfer directly to calculus problems",
    "algebra.reference.title": "Quick Reference",
    "algebra.reference.desc": "Essential formulas and rules at a glance",

    // Accordion Titles - Algebra
    "accordion.algebra.operations": "Basic Algebraic Operations",
    "accordion.algebra.polynomials": "Polynomials",
    "accordion.algebra.exponents": "Exponents and Radicals",
    "accordion.algebra.equations": "Solving Equations",
    "accordion.algebra.functions": "Functions and Their Properties",

    // Detailed Algebra Content
    "algebra.operations.intro": "The order of operations is a convention that defines the sequence in which operations should be performed in an expression. Following this order is crucial for obtaining the correct result.",
    "algebra.operations.pemdas": "Order of Operations (PEMDAS)",
    "algebra.operations.step1": "Parentheses (or Brackets)",
    "algebra.operations.step1.desc": "Evaluate expressions inside parentheses first. This includes brackets [ ], braces { }, and other grouping symbols.",
    "algebra.operations.step2": "Exponents (Powers and Square Roots)",
    "algebra.operations.step2.desc": "Evaluate all exponents, powers, and roots from left to right.",
    "algebra.operations.step3": "Multiplication and Division (from left to right)",
    "algebra.operations.step3.desc": "Perform all multiplications and divisions in order from left to right. These operations have equal precedence.",
    "algebra.operations.step4": "Addition and Subtraction (from left to right)",
    "algebra.operations.step4.desc": "Perform all additions and subtractions in order from left to right. These operations have equal precedence.",
    "algebra.operations.example1": "Example 1: Solve 3 + 2 × (8 - 5)² ÷ 3",
    "algebra.operations.example1.step1": "First, evaluate the expression inside parentheses: (8 - 5) = 3",
    "algebra.operations.example1.step2": "Next, evaluate the exponent: 3² = 9",
    "algebra.operations.example1.step3": "Perform multiplication and division from left to right: 2 × 9 = 18, then 18 ÷ 3 = 6",
    "algebra.operations.example1.step4": "Finally, perform addition: 3 + 6 = 9",
    "algebra.operations.example2": "Example 2: Solve 4 × 3 + 2² - 10 ÷ 5",
    "algebra.operations.example2.step1": "First, evaluate the exponent: 2² = 4",
    "algebra.operations.example2.step2": "Perform multiplication and division from left to right: 4 × 3 = 12, 10 ÷ 5 = 2",
    "algebra.operations.example2.step3": "Finally, perform addition and subtraction from left to right: 12 + 4 - 2 = 14",
    "algebra.operations.mistakes": "Common Mistakes to Avoid",
    "algebra.operations.mistake1": "Wrong: 2 + 3 × 4 = 20",
    "algebra.operations.mistake1.desc": "This incorrectly performs addition before multiplication.",
    "algebra.operations.mistake1.correct": "Correct approach: 2 + (3 × 4) = 2 + 12 = 14",
    "algebra.operations.mistake2": "Wrong: 8 ÷ 4 × 2 = 1",
    "algebra.operations.mistake2.desc": "This incorrectly performs multiplication before division from left to right.",
    "algebra.operations.mistake2.correct": "Correct approach: (8 ÷ 4) × 2 = 2 × 2 = 4",
    "algebra.operations.tip": "Important Tip",
    "algebra.operations.tip.desc": "When in doubt, use parentheses to make your intended order of operations explicit. Parentheses can clarify your intentions and eliminate ambiguity even if they're not strictly necessary according to PEMDAS.",
    "algebra.operations.practice": "Practice Problems",
    "algebra.operations.practice.desc": "Try these problems to test your understanding of the order of operations:",
    "algebra.operations.practice.1": "7 - 4 + 2",
    "algebra.operations.practice.1.answer": "Answer: 5",
    "algebra.operations.practice.2": "3 × (4 + 2)",
    "algebra.operations.practice.2.answer": "Answer: 18",
    "algebra.operations.practice.3": "20 ÷ 5 × 2 + 3",
    "algebra.operations.practice.3.answer": "Answer: 11",
    "algebra.operations.practice.4": "2³ - 4 × 3 + 7",
    "algebra.operations.practice.4.answer": "Answer: 11",

    // Polynomials Content
    "algebra.polynomials.definition": "A polynomial is an expression of the form aₙxⁿ + aₙ₋₁xⁿ⁻¹ + ... + a₁x + a₀, where aₙ, aₙ₋₁,..., a₁, a₀ are constants and n is a non-negative integer.",
    "algebra.polynomials.operations": "Polynomial Operations:",
    "algebra.polynomials.addition": "Addition and Subtraction",
    "algebra.polynomials.addition.desc": "Combine like terms by adding or subtracting their coefficients.",
    "algebra.polynomials.addition.example": "(3x² + 2x - 5) + (x² - 3x + 1) = 4x² - x - 4",
    "algebra.polynomials.multiplication": "Multiplication",
    "algebra.polynomials.multiplication.desc": "Multiply each term of the first polynomial by each term of the second.",
    "algebra.polynomials.multiplication.example": "(x + 2)(x - 3) = x² - 3x + 2x - 6 = x² - x - 6",
    "algebra.polynomials.division": "Division",
    "algebra.polynomials.division.desc": "Use long division or synthetic division.",
    "algebra.polynomials.division.example": "(x² + 3x + 2) ÷ (x + 1) = x + 2",

    // Exponents and Radicals Content
    "algebra.exponents.rules": "Exponent Rules",
    "algebra.exponents.product": "Product Rule",
    "algebra.exponents.product.formula": "xᵃ × xᵇ = xᵃ⁺ᵇ",
    "algebra.exponents.product.example": "2³ × 2⁴ = 2⁷ = 128",
    "algebra.exponents.quotient": "Quotient Rule",
    "algebra.exponents.quotient.formula": "xᵃ ÷ xᵇ = xᵃ⁻ᵇ",
    "algebra.exponents.quotient.example": "2⁵ ÷ 2² = 2³ = 8",
    "algebra.exponents.power": "Power Rule",
    "algebra.exponents.power.formula": "(xᵃ)ᵇ = xᵃˣᵇ",
    "algebra.exponents.power.example": "(2³)² = 2⁶ = 64",
    "algebra.exponents.negative": "Negative Exponent",
    "algebra.exponents.negative.formula": "x⁻ᵃ = 1/xᵃ",
    "algebra.exponents.negative.example": "2⁻³ = 1/2³ = 1/8 = 0.125",
    "algebra.exponents.zero": "Zero Exponent",
    "algebra.exponents.zero.formula": "x⁰ = 1",
    "algebra.exponents.zero.example": "7⁰ = 1",
    "algebra.radicals.rules": "Radical Rules",
    "algebra.radicals.product": "Product Rule",
    "algebra.radicals.product.formula": "√(a × b) = √a × √b",
    "algebra.radicals.product.example": "√(4 × 9) = √4 × √9 = 2 × 3 = 6",
    "algebra.radicals.quotient": "Quotient Rule",
    "algebra.radicals.quotient.formula": "√(a ÷ b) = √a ÷ √b",
    "algebra.radicals.quotient.example": "√(25 ÷ 9) = √25 ÷ √9 = 5 ÷ 3",
    "algebra.radicals.power": "Power Rule",
    "algebra.radicals.power.formula": "√(aⁿ) = (√a)ⁿ",
    "algebra.radicals.power.example": "√(3²) = (√3)² = 3",
    "algebra.radicals.note": "Important Note:",
    "algebra.radicals.note.desc": "Radicals can be rewritten as fractional exponents: √x = x^(1/2), ∛x = x^(1/3), etc.",

    // Equations Content
    "algebra.equations.linear": "Linear Equations",
    "algebra.equations.linear.desc": "Linear equations have the form ax + b = c, where a, b, and c are constants and a ≠ 0.",
    "algebra.equations.linear.example": "Example: Solve 2x + 5 = 17",
    "algebra.equations.linear.solution": "2x + 5 = 17\n2x = 12\nx = 6",
    "algebra.equations.quadratic": "Quadratic Equations",
    "algebra.equations.quadratic.desc": "Quadratic equations have the form ax² + bx + c = 0, where a, b, and c are constants and a ≠ 0.",
    "algebra.equations.quadratic.formula": "Quadratic Formula:",
    "algebra.equations.quadratic.formula.text": "If ax² + bx + c = 0, then x = (-b ± √(b² - 4ac)) / 2a",
    "algebra.equations.quadratic.example": "Example: Solve x² - 5x + 6 = 0",
    "algebra.equations.quadratic.solution": "a = 1, b = -5, c = 6\nx = (-(-5) ± √((-5)² - 4(1)(6))) / 2(1)\nx = (5 ± √(25 - 24)) / 2\nx = (5 ± √1) / 2\nx = (5 ± 1) / 2\nx = 3 or x = 2",
    "algebra.equations.radical": "Radical Equations",
    "algebra.equations.radical.desc": "Equations that contain variables inside radicals.",
    "algebra.equations.radical.example": "Example: Solve √(2x + 3) = 5",
    "algebra.equations.radical.solution": "Square both sides: (√(2x + 3))² = 5²\n2x + 3 = 25\n2x = 22\nx = 11",
    "algebra.equations.radical.note": "Always check solutions in the original equation to avoid extraneous solutions!",

    // Accordion Titles - Limits
    "accordion.limits.basic": "Basic Limit Evaluation",
    "accordion.limits.laws": "Limit Laws and Properties",
    "accordion.limits.continuity": "Continuity",
    "accordion.limits.advanced": "Advanced Limit Techniques",

    // Accordion Titles - Derivatives
    "accordion.derivatives.basic": "Basic Differentiation Rules",
    "accordion.derivatives.product": "Product and Quotient Rules",
    "accordion.derivatives.chain": "Chain Rule",
    "accordion.derivatives.implicit": "Implicit Differentiation",
    "accordion.derivatives.applications": "Applications of Derivatives",

    // Accordion Titles - Integrals
    "accordion.integrals.basic": "Basic Integration Rules",
    "accordion.integrals.substitution": "Integration by Substitution",
    "accordion.integrals.parts": "Integration by Parts",
    "accordion.integrals.definite": "Definite Integrals and Applications",
    "accordion.integrals.improper": "Improper Integrals",

    // Accordion Titles - Differential Equations
    "accordion.de.first": "First-Order Differential Equations",
    "accordion.de.second": "Second-Order Differential Equations",
    "accordion.de.applications": "Applications of Differential Equations",
    "accordion.de.numerical": "Numerical Methods",

    // Limits Section Content
    "limits.what.title": "What is a Limit?",
    "limits.what.desc": "The foundational concept of calculus",
    "limits.what.explanation": "This notation means \"the limit of f(x) as x approaches a equals L.\" It describes what value the function approaches, not necessarily what it equals at that point.",
    "limits.what.intuitive": "Intuitive Understanding:",
    "limits.what.intuitive.desc": "Imagine walking toward a wall. The limit describes how close you can get to the wall, even if you never actually touch it.",
    "limits.types.title": "Types of Limits",
    "limits.types.desc": "Different scenarios you'll encounter",
    "limits.types.finite": "Finite Limits: Function approaches a specific number",
    "limits.types.infinite": "Infinite Limits: Function grows without bound",
    "limits.types.onesided": "One-sided Limits: Approaching from left or right only",
    "limits.types.infinity": "Limits at Infinity: Behavior as x approaches ±∞",

    // Derivatives Section Content
    "derivatives.definition.title": "Definition of the Derivative",
    "derivatives.definition.desc": "The fundamental concept of instantaneous rate of change",
    "derivatives.definition.explanation": "The derivative represents the slope of the tangent line to the function at any point, giving us the instantaneous rate of change.",
    "derivatives.definition.geometric": "Geometric Interpretation:",
    "derivatives.definition.geometric.desc": "The derivative at a point is the slope of the line that just touches the curve at that point.",
    "derivatives.notation.title": "Derivative Notation",
    "derivatives.notation.desc": "Different ways to express derivatives",
    "derivatives.notation.remember": "Remember: All notations represent the same concept - the rate of change of the function.",

    // Integrals Section Content
    "integrals.what.title": "What is Integration?",
    "integrals.what.desc": "The inverse operation of differentiation",
    "integrals.types.title": "Types of Integrals",
    "integrals.types.desc": "Indefinite vs. definite integrals",

    // Differential Equations Content
    "de.what.title": "What are Differential Equations?",
    "de.what.desc": "Equations involving functions and their derivatives",
    "de.classification.title": "Classification",
    "de.classification.desc": "Different types of differential equations",

    // Roadmap Steps
    "roadmap.step1.title": "Master Algebraic Foundations",
    "roadmap.step1.description": "Build a solid foundation with essential algebra skills",
    "roadmap.step1.duration": "2-3 weeks",
    "roadmap.step1.topic1": "Order of operations and basic arithmetic",
    "roadmap.step1.topic2": "Polynomial operations and factoring",
    "roadmap.step1.topic3": "Solving linear and quadratic equations",
    "roadmap.step1.topic4": "Functions and their properties",

    "roadmap.step2.title": "Understand Limits & Continuity",
    "roadmap.step2.description": "Grasp the fundamental concepts that bridge algebra and calculus",
    "roadmap.step2.duration": "2-3 weeks",
    "roadmap.step2.topic1": "Intuitive understanding of limits",
    "roadmap.step2.topic2": "Limit evaluation techniques",
    "roadmap.step2.topic3": "Continuity and discontinuities",
    "roadmap.step2.topic4": "Limits at infinity",

    "roadmap.step3.title": "Master Differential Calculus",
    "roadmap.step3.description": "Learn to find rates of change and slopes of curves",
    "roadmap.step3.duration": "3-4 weeks",
    "roadmap.step3.topic1": "Definition and interpretation of derivatives",
    "roadmap.step3.topic2": "Differentiation rules and techniques",
    "roadmap.step3.topic3": "Chain rule and implicit differentiation",
    "roadmap.step3.topic4": "Applications: optimization, related rates",

    "roadmap.step4.title": "Explore Integral Calculus",
    "roadmap.step4.description": "Discover the reverse of differentiation and its applications",
    "roadmap.step4.duration": "3-4 weeks",
    "roadmap.step4.topic1": "Antiderivatives and indefinite integrals",
    "roadmap.step4.topic2": "Integration techniques and substitution",
    "roadmap.step4.topic3": "Definite integrals and applications",
    "roadmap.step4.topic4": "Area, volume, and arc length problems",

    "roadmap.step5.title": "Dive into Differential Equations",
    "roadmap.step5.description": "Model dynamic systems with differential equations",
    "roadmap.step5.duration": "4-5 weeks",
    "roadmap.step5.topic1": "First-order differential equations",
    "roadmap.step5.topic2": "Second-order linear equations",
    "roadmap.step5.topic3": "Applications in physics and biology",
    "roadmap.step5.topic4": "Numerical methods and solutions",

    "roadmap.step6.title": "Advanced Topics & Applications",
    "roadmap.step6.description": "Explore specialized topics and real-world applications",
    "roadmap.step6.duration": "Ongoing",
    "roadmap.step6.topic1": "Partial differential equations",
    "roadmap.step6.topic2": "Laplace transforms",
    "roadmap.step6.topic3": "Fourier series and analysis",
    "roadmap.step6.topic4": "Mathematical modeling",

    // Common UI
    "ui.language": "Español",
    "ui.foundation": "Foundation",
    "ui.core-concept": "Core Concept",
    "ui.differential-calculus": "Differential Calculus",
    "ui.integral-calculus": "Integral Calculus",
    "ui.advanced-topic": "Advanced Topic",
    "ui.learning-path": "Learning Path",
    "ui.beginner": "Beginner",
    "ui.intermediate": "Intermediate",
    "ui.advanced": "Advanced",
    "ui.ongoing": "Ongoing",
    "ui.key-topics": "Key Topics:",
    "ui.ready-start": "Ready to Start Your Journey?",
    "ui.ready-desc": "Remember, mastering calculus is a marathon, not a sprint. Take your time with each concept, practice regularly, and don't hesitate to revisit earlier topics when needed.",
    "ui.practice-included": "Practice problems included",
    "ui.step-solutions": "Step-by-step solutions",
    "ui.real-world": "Real-world applications",

    // Footer
    "footer.description": "Your complete guide to mastering calculus and differential equations with interactive learning.",
    "footer.topics": "Topics",
    "footer.advanced": "Advanced",
    "footer.connect": "Connect",
    "footer.copyright": "© 2025 Calculus Master. Built with Next.js and Tailwind CSS."
  },

  es: {
    // Header
    "header.title": "Maestro del Cálculo",
    "header.algebra": "Álgebra",
    "header.limits": "Límites",
    "header.derivatives": "Derivadas",
    "header.integrals": "Integrales",
    "header.differential-equations": "Ecuaciones Diferenciales",
    "header.roadmap": "Mapa de Ruta",

    // Hero Section
    "hero.title": "Domina el Cálculo y Ecuaciones Diferenciales",
    "hero.subtitle": "Desde fundamentos básicos de álgebra hasta ecuaciones diferenciales avanzadas — tu guía completa e interactiva para entender conceptos matemáticos con explicaciones claras y ejemplos visuales.",
    "hero.start": "Comenzar a Aprender",
    "hero.roadmap": "Ver Mapa de Ruta",
    "hero.stats.formulas": "Fórmulas",
    "hero.stats.examples": "Ejemplos",
    "hero.stats.topics": "Temas Clave",
    "hero.stats.applications": "Aplicaciones",
    "hero.stats.possibilities": "Posibilidades",

    // Hero Features
    "hero.feature1.title": "Contenido Integral",
    "hero.feature1.desc": "Desde álgebra básica hasta ecuaciones diferenciales avanzadas con explicaciones detalladas",
    "hero.feature2.title": "Ejemplos Interactivos",
    "hero.feature2.desc": "Soluciones paso a paso con ayudas visuales y aplicaciones prácticas",
    "hero.feature3.title": "Aprendizaje Progresivo",
    "hero.feature3.desc": "Mapa de ruta estructurado que construye conocimiento sistemáticamente",

    // Sections
    "section.algebra.title": "Álgebra Fundamental",
    "section.algebra.subtitle": "Dominar el álgebra es esencial antes de sumergirse en el cálculo. Estos conceptos fundamentales forman la columna vertebral de toda la matemática avanzada. Revisa estos temas cuidadosamente antes de pasar a conceptos más avanzados.",
    "section.limits.title": "Límites y Continuidad",
    "section.limits.subtitle": "Comprende el concepto fundamental que conecta el álgebra y el cálculo. Los límites describen el comportamiento de las funciones cuando se acercan a valores específicos.",
    "section.derivatives.title": "Derivadas",
    "section.derivatives.subtitle": "Domina el arte de encontrar tasas de cambio. Las derivadas son la base del cálculo diferencial y tienen innumerables aplicaciones en ciencia, ingeniería y economía.",
    "section.integrals.title": "Cálculo Integral",
    "section.integrals.subtitle": "Descubre el reverso de la diferenciación. La integración nos permite encontrar áreas, volúmenes y acumular cantidades en intervalos.",
    "section.differential-equations.title": "Ecuaciones Diferenciales",
    "section.differential-equations.subtitle": "Explora ecuaciones que involucran derivadas y sus soluciones. Las ecuaciones diferenciales modelan sistemas dinámicos en física, ingeniería, biología y economía.",
    "section.roadmap.title": "Tu Mapa de Ruta de Aprendizaje de Cálculo",
    "section.roadmap.subtitle": "Sigue este camino estructurado para construir una base sólida y avanzar sistemáticamente a través del cálculo y las ecuaciones diferenciales.",

    // Algebra Section Content
    "algebra.why.title": "Por Qué Importa el Álgebra",
    "algebra.why.desc": "Comprendiendo el papel crítico del álgebra en el cálculo",
    "algebra.why.point1": "La manipulación de polinomios es esencial para derivadas y límites",
    "algebra.why.point2": "Las técnicas de factorización simplifican expresiones complejas de cálculo",
    "algebra.why.point3": "Las propiedades de funciones subyacen a todos los conceptos de cálculo",
    "algebra.why.point4": "Las habilidades de resolución de ecuaciones se transfieren directamente a problemas de cálculo",
    "algebra.reference.title": "Referencia Rápida",
    "algebra.reference.desc": "Fórmulas y reglas esenciales de un vistazo",

    // Accordion Titles - Algebra
    "accordion.algebra.operations": "Operaciones Algebraicas Básicas",
    "accordion.algebra.polynomials": "Polinomios",
    "accordion.algebra.exponents": "Exponentes y Radicales",
    "accordion.algebra.equations": "Resolución de Ecuaciones",
    "accordion.algebra.functions": "Funciones y Sus Propiedades",

    // Detailed Algebra Content
    "algebra.operations.intro": "El orden de las operaciones es una convención que define la secuencia en la que se deben realizar las operaciones en una expresión. Seguir este orden es crucial para obtener el resultado correcto.",
    "algebra.operations.pemdas": "Orden de Operaciones (PEMDAS)",
    "algebra.operations.step1": "Paréntesis (o Corchetes)",
    "algebra.operations.step1.desc": "Evalúa las expresiones dentro de paréntesis primero. Esto incluye corchetes [ ], llaves { }, y otros símbolos de agrupación.",
    "algebra.operations.step2": "Exponentes (Potencias y Raíces Cuadradas)",
    "algebra.operations.step2.desc": "Evalúa todos los exponentes, potencias y raíces de izquierda a derecha.",
    "algebra.operations.step3": "Multiplicación y División (de izquierda a derecha)",
    "algebra.operations.step3.desc": "Realiza todas las multiplicaciones y divisiones en orden de izquierda a derecha. Estas operaciones tienen igual precedencia.",
    "algebra.operations.step4": "Suma y Resta (de izquierda a derecha)",
    "algebra.operations.step4.desc": "Realiza todas las sumas y restas en orden de izquierda a derecha. Estas operaciones tienen igual precedencia.",
    "algebra.operations.example1": "Ejemplo 1: Resolver 3 + 2 × (8 - 5)² ÷ 3",
    "algebra.operations.example1.step1": "Primero, evalúa la expresión dentro de paréntesis: (8 - 5) = 3",
    "algebra.operations.example1.step2": "Luego, evalúa el exponente: 3² = 9",
    "algebra.operations.example1.step3": "Realiza multiplicación y división de izquierda a derecha: 2 × 9 = 18, luego 18 ÷ 3 = 6",
    "algebra.operations.example1.step4": "Finalmente, realiza la suma: 3 + 6 = 9",
    "algebra.operations.example2": "Ejemplo 2: Resolver 4 × 3 + 2² - 10 ÷ 5",
    "algebra.operations.example2.step1": "Primero, evalúa el exponente: 2² = 4",
    "algebra.operations.example2.step2": "Realiza multiplicación y división de izquierda a derecha: 4 × 3 = 12, 10 ÷ 5 = 2",
    "algebra.operations.example2.step3": "Finalmente, realiza suma y resta de izquierda a derecha: 12 + 4 - 2 = 14",
    "algebra.operations.mistakes": "Errores Comunes a Evitar",
    "algebra.operations.mistake1": "Incorrecto: 2 + 3 × 4 = 20",
    "algebra.operations.mistake1.desc": "Esto realiza incorrectamente la suma antes que la multiplicación.",
    "algebra.operations.mistake1.correct": "Enfoque correcto: 2 + (3 × 4) = 2 + 12 = 14",
    "algebra.operations.mistake2": "Incorrecto: 8 ÷ 4 × 2 = 1",
    "algebra.operations.mistake2.desc": "Esto realiza incorrectamente la multiplicación antes que la división de izquierda a derecha.",
    "algebra.operations.mistake2.correct": "Enfoque correcto: (8 ÷ 4) × 2 = 2 × 2 = 4",
    "algebra.operations.tip": "Consejo Importante",
    "algebra.operations.tip.desc": "Cuando tengas dudas, usa paréntesis para hacer explícito tu orden de operaciones deseado. Los paréntesis pueden aclarar tus intenciones y eliminar ambigüedad incluso si no son estrictamente necesarios según PEMDAS.",
    "algebra.operations.practice": "Problemas de Práctica",
    "algebra.operations.practice.desc": "Intenta estos problemas para probar tu comprensión del orden de operaciones:",
    "algebra.operations.practice.1": "7 - 4 + 2",
    "algebra.operations.practice.1.answer": "Respuesta: 5",
    "algebra.operations.practice.2": "3 × (4 + 2)",
    "algebra.operations.practice.2.answer": "Respuesta: 18",
    "algebra.operations.practice.3": "20 ÷ 5 × 2 + 3",
    "algebra.operations.practice.3.answer": "Respuesta: 11",
    "algebra.operations.practice.4": "2³ - 4 × 3 + 7",
    "algebra.operations.practice.4.answer": "Respuesta: 11",

    // Polynomials Content
    "algebra.polynomials.definition": "Un polinomio es una expresión de la forma aₙxⁿ + aₙ₋₁xⁿ⁻¹ + ... + a₁x + a₀, donde aₙ, aₙ₋₁,..., a₁, a₀ son constantes y n es un entero no negativo.",
    "algebra.polynomials.operations": "Operaciones con Polinomios:",
    "algebra.polynomials.addition": "Suma y Resta",
    "algebra.polynomials.addition.desc": "Combina términos semejantes sumando o restando sus coeficientes.",
    "algebra.polynomials.addition.example": "(3x² + 2x - 5) + (x² - 3x + 1) = 4x² - x - 4",
    "algebra.polynomials.multiplication": "Multiplicación",
    "algebra.polynomials.multiplication.desc": "Multiplica cada término del primer polinomio por cada término del segundo.",
    "algebra.polynomials.multiplication.example": "(x + 2)(x - 3) = x² - 3x + 2x - 6 = x² - x - 6",
    "algebra.polynomials.division": "División",
    "algebra.polynomials.division.desc": "Usa división larga o división sintética.",
    "algebra.polynomials.division.example": "(x² + 3x + 2) ÷ (x + 1) = x + 2",

    // Exponents and Radicals Content
    "algebra.exponents.rules": "Reglas de Exponentes",
    "algebra.exponents.product": "Regla del Producto",
    "algebra.exponents.product.formula": "xᵃ × xᵇ = xᵃ⁺ᵇ",
    "algebra.exponents.product.example": "2³ × 2⁴ = 2⁷ = 128",
    "algebra.exponents.quotient": "Regla del Cociente",
    "algebra.exponents.quotient.formula": "xᵃ ÷ xᵇ = xᵃ⁻ᵇ",
    "algebra.exponents.quotient.example": "2⁵ ÷ 2² = 2³ = 8",
    "algebra.exponents.power": "Regla de la Potencia",
    "algebra.exponents.power.formula": "(xᵃ)ᵇ = xᵃˣᵇ",
    "algebra.exponents.power.example": "(2³)² = 2⁶ = 64",
    "algebra.exponents.negative": "Exponente Negativo",
    "algebra.exponents.negative.formula": "x⁻ᵃ = 1/xᵃ",
    "algebra.exponents.negative.example": "2⁻³ = 1/2³ = 1/8 = 0.125",
    "algebra.exponents.zero": "Exponente Cero",
    "algebra.exponents.zero.formula": "x⁰ = 1",
    "algebra.exponents.zero.example": "7⁰ = 1",
    "algebra.radicals.rules": "Reglas de Radicales",
    "algebra.radicals.product": "Regla del Producto",
    "algebra.radicals.product.formula": "√(a × b) = √a × √b",
    "algebra.radicals.product.example": "√(4 × 9) = √4 × √9 = 2 × 3 = 6",
    "algebra.radicals.quotient": "Regla del Cociente",
    "algebra.radicals.quotient.formula": "√(a ÷ b) = √a ÷ √b",
    "algebra.radicals.quotient.example": "√(25 ÷ 9) = √25 ÷ √9 = 5 ÷ 3",
    "algebra.radicals.power": "Regla de la Potencia",
    "algebra.radicals.power.formula": "√(aⁿ) = (√a)ⁿ",
    "algebra.radicals.power.example": "√(3²) = (√3)² = 3",
    "algebra.radicals.note": "Nota Importante:",
    "algebra.radicals.note.desc": "Los radicales pueden reescribirse como exponentes fraccionarios: √x = x^(1/2), ∛x = x^(1/3), etc.",

    // Equations Content
    "algebra.equations.linear": "Ecuaciones Lineales",
    "algebra.equations.linear.desc": "Las ecuaciones lineales tienen la forma ax + b = c, donde a, b, y c son constantes y a ≠ 0.",
    "algebra.equations.linear.example": "Ejemplo: Resolver 2x + 5 = 17",
    "algebra.equations.linear.solution": "2x + 5 = 17\n2x = 12\nx = 6",
    "algebra.equations.quadratic": "Ecuaciones Cuadráticas",
    "algebra.equations.quadratic.desc": "Las ecuaciones cuadráticas tienen la forma ax² + bx + c = 0, donde a, b, y c son constantes y a ≠ 0.",
    "algebra.equations.quadratic.formula": "Fórmula Cuadrática:",
    "algebra.equations.quadratic.formula.text": "Si ax² + bx + c = 0, entonces x = (-b ± √(b² - 4ac)) / 2a",
    "algebra.equations.quadratic.example": "Ejemplo: Resolver x² - 5x + 6 = 0",
    "algebra.equations.quadratic.solution": "a = 1, b = -5, c = 6\nx = (-(-5) ± √((-5)² - 4(1)(6))) / 2(1)\nx = (5 ± √(25 - 24)) / 2\nx = (5 ± √1) / 2\nx = (5 ± 1) / 2\nx = 3 o x = 2",
    "algebra.equations.radical": "Ecuaciones Radicales",
    "algebra.equations.radical.desc": "Ecuaciones que contienen variables dentro de radicales.",
    "algebra.equations.radical.example": "Ejemplo: Resolver √(2x + 3) = 5",
    "algebra.equations.radical.solution": "Elevar al cuadrado ambos lados: (√(2x + 3))² = 5²\n2x + 3 = 25\n2x = 22\nx = 11",
    "algebra.equations.radical.note": "¡Siempre verifica las soluciones en la ecuación original para evitar soluciones extrañas!",

    // Accordion Titles - Limits
    "accordion.limits.basic": "Evaluación Básica de Límites",
    "accordion.limits.laws": "Leyes y Propiedades de Límites",
    "accordion.limits.continuity": "Continuidad",
    "accordion.limits.advanced": "Técnicas Avanzadas de Límites",

    // Accordion Titles - Derivatives
    "accordion.derivatives.basic": "Reglas Básicas de Diferenciación",
    "accordion.derivatives.product": "Reglas del Producto y Cociente",
    "accordion.derivatives.chain": "Regla de la Cadena",
    "accordion.derivatives.implicit": "Diferenciación Implícita",
    "accordion.derivatives.applications": "Aplicaciones de las Derivadas",

    // Accordion Titles - Integrals
    "accordion.integrals.basic": "Reglas Básicas de Integración",
    "accordion.integrals.substitution": "Integración por Sustitución",
    "accordion.integrals.parts": "Integración por Partes",
    "accordion.integrals.definite": "Integrales Definidas y Aplicaciones",
    "accordion.integrals.improper": "Integrales Impropias",

    // Accordion Titles - Differential Equations
    "accordion.de.first": "Ecuaciones Diferenciales de Primer Orden",
    "accordion.de.second": "Ecuaciones Diferenciales de Segundo Orden",
    "accordion.de.applications": "Aplicaciones de Ecuaciones Diferenciales",
    "accordion.de.numerical": "Métodos Numéricos",

    // Limits Section Content
    "limits.what.title": "¿Qué es un Límite?",
    "limits.what.desc": "El concepto fundamental del cálculo",
    "limits.what.explanation": "Esta notación significa \"el límite de f(x) cuando x se acerca a a es igual a L.\" Describe qué valor se acerca la función, no necesariamente lo que es igual en ese punto.",
    "limits.what.intuitive": "Comprensión Intuitiva:",
    "limits.what.intuitive.desc": "Imagina caminar hacia una pared. El límite describe qué tan cerca puedes llegar a la pared, incluso si nunca la tocas realmente.",
    "limits.types.title": "Tipos de Límites",
    "limits.types.desc": "Diferentes escenarios que encontrarás",
    "limits.types.finite": "Límites Finitos: La función se acerca a un número específico",
    "limits.types.infinite": "Límites Infinitos: La función crece sin límite",
    "limits.types.onesided": "Límites Unilaterales: Acercándose solo desde la izquierda o derecha",
    "limits.types.infinity": "Límites al Infinito: Comportamiento cuando x se acerca a ±∞",

    // Derivatives Section Content
    "derivatives.definition.title": "Definición de la Derivada",
    "derivatives.definition.desc": "El concepto fundamental de la tasa de cambio instantánea",
    "derivatives.definition.explanation": "La derivada representa la pendiente de la línea tangente a la función en cualquier punto, dándonos la tasa de cambio instantánea.",
    "derivatives.definition.geometric": "Interpretación Geométrica:",
    "derivatives.definition.geometric.desc": "La derivada en un punto es la pendiente de la línea que apenas toca la curva en ese punto.",
    "derivatives.notation.title": "Notación de Derivadas",
    "derivatives.notation.desc": "Diferentes formas de expresar derivadas",
    "derivatives.notation.remember": "Recuerda: Todas las notaciones representan el mismo concepto - la tasa de cambio de la función.",

    // Integrals Section Content
    "integrals.what.title": "¿Qué es la Integración?",
    "integrals.what.desc": "La operación inversa de la diferenciación",
    "integrals.types.title": "Tipos de Integrales",
    "integrals.types.desc": "Integrales indefinidas vs. definidas",

    // Differential Equations Content
    "de.what.title": "¿Qué son las Ecuaciones Diferenciales?",
    "de.what.desc": "Ecuaciones que involucran funciones y sus derivadas",
    "de.classification.title": "Clasificación",
    "de.classification.desc": "Diferentes tipos de ecuaciones diferenciales",

    // Roadmap Steps
    "roadmap.step1.title": "Domina los Fundamentos Algebraicos",
    "roadmap.step1.description": "Construye una base sólida con habilidades esenciales de álgebra",
    "roadmap.step1.duration": "2-3 semanas",
    "roadmap.step1.topic1": "Orden de operaciones y aritmética básica",
    "roadmap.step1.topic2": "Operaciones con polinomios y factorización",
    "roadmap.step1.topic3": "Resolución de ecuaciones lineales y cuadráticas",
    "roadmap.step1.topic4": "Funciones y sus propiedades",

    "roadmap.step2.title": "Comprende Límites y Continuidad",
    "roadmap.step2.description": "Comprende los conceptos fundamentales que conectan el álgebra y el cálculo",
    "roadmap.step2.duration": "2-3 semanas",
    "roadmap.step2.topic1": "Comprensión intuitiva de límites",
    "roadmap.step2.topic2": "Técnicas de evaluación de límites",
    "roadmap.step2.topic3": "Continuidad y discontinuidades",
    "roadmap.step2.topic4": "Límites al infinito",

    "roadmap.step3.title": "Domina el Cálculo Diferencial",
    "roadmap.step3.description": "Aprende a encontrar tasas de cambio y pendientes de curvas",
    "roadmap.step3.duration": "3-4 semanas",
    "roadmap.step3.topic1": "Definición e interpretación de derivadas",
    "roadmap.step3.topic2": "Reglas y técnicas de diferenciación",
    "roadmap.step3.topic3": "Regla de la cadena y diferenciación implícita",
    "roadmap.step3.topic4": "Aplicaciones: optimización, tasas relacionadas",

    "roadmap.step4.title": "Explora el Cálculo Integral",
    "roadmap.step4.description": "Descubre el reverso de la diferenciación y sus aplicaciones",
    "roadmap.step4.duration": "3-4 semanas",
    "roadmap.step4.topic1": "Antiderivadas e integrales indefinidas",
    "roadmap.step4.topic2": "Técnicas de integración y sustitución",
    "roadmap.step4.topic3": "Integrales definidas y aplicaciones",
    "roadmap.step4.topic4": "Problemas de área, volumen y longitud de arco",

    "roadmap.step5.title": "Sumérgete en Ecuaciones Diferenciales",
    "roadmap.step5.description": "Modela sistemas dinámicos con ecuaciones diferenciales",
    "roadmap.step5.duration": "4-5 semanas",
    "roadmap.step5.topic1": "Ecuaciones diferenciales de primer orden",
    "roadmap.step5.topic2": "Ecuaciones lineales de segundo orden",
    "roadmap.step5.topic3": "Aplicaciones en física y biología",
    "roadmap.step5.topic4": "Métodos numéricos y soluciones",

    "roadmap.step6.title": "Temas Avanzados y Aplicaciones",
    "roadmap.step6.description": "Explora temas especializados y aplicaciones del mundo real",
    "roadmap.step6.duration": "Continuo",
    "roadmap.step6.topic1": "Ecuaciones diferenciales parciales",
    "roadmap.step6.topic2": "Transformadas de Laplace",
    "roadmap.step6.topic3": "Series de Fourier y análisis",
    "roadmap.step6.topic4": "Modelado matemático",

    // Common UI
    "ui.language": "English",
    "ui.foundation": "Fundamento",
    "ui.core-concept": "Concepto Central",
    "ui.differential-calculus": "Cálculo Diferencial",
    "ui.integral-calculus": "Cálculo Integral",
    "ui.advanced-topic": "Tema Avanzado",
    "ui.learning-path": "Ruta de Aprendizaje",
    "ui.beginner": "Principiante",
    "ui.intermediate": "Intermedio",
    "ui.advanced": "Avanzado",
    "ui.ongoing": "Continuo",
    "ui.key-topics": "Temas Clave:",
    "ui.ready-start": "¿Listo para Comenzar tu Viaje?",
    "ui.ready-desc": "Recuerda, dominar el cálculo es una maratón, no un sprint. Tómate tu tiempo con cada concepto, practica regularmente y no dudes en revisar temas anteriores cuando sea necesario.",
    "ui.practice-included": "Problemas de práctica incluidos",
    "ui.step-solutions": "Soluciones paso a paso",
    "ui.real-world": "Aplicaciones del mundo real",

    // Footer
    "footer.description": "Tu guía completa para dominar el cálculo y las ecuaciones diferenciales con aprendizaje interactivo.",
    "footer.topics": "Temas",
    "footer.advanced": "Avanzado",
    "footer.connect": "Conectar",
    "footer.copyright": "© 2025 Maestro del Cálculo. Construido con Next.js y Tailwind CSS."
  }
};

export type Language = 'en' | 'es';

// Language context
let currentLanguage: Language = 'en';

// Initialize language from localStorage if available
if (typeof window !== 'undefined') {
  try {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'es')) {
      currentLanguage = savedLanguage;
      document.documentElement.setAttribute('lang', savedLanguage);
    }
  } catch (error) {
    console.warn('Failed to access localStorage:', error);
  }
}

// Get translation function
export function t(key: string): string {
  const langTranslations = translations[currentLanguage] || translations.en;
  return langTranslations[key as keyof typeof langTranslations] || key;
}

// Get current language
export function getCurrentLanguage(): Language {
  return currentLanguage;
}

// Set language function
export function setLanguage(language: Language): void {
  currentLanguage = language;
  
  if (typeof window !== 'undefined') {
    try {
      localStorage.setItem('language', language);
      document.documentElement.setAttribute('lang', language);
    } catch (error) {
      console.warn('Failed to save language to localStorage:', error);
    }
  }
}

// Toggle language function
export function toggleLanguage(): void {
  const newLanguage: Language = currentLanguage === 'en' ? 'es' : 'en';
  setLanguage(newLanguage);
  
  // Trigger a page reload to update all translations
  if (typeof window !== 'undefined') {
    window.location.reload();
  }
}