import Link from "next/link";
import { Calculator, Github, Twitter, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-muted/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Calculator className="h-6 w-6 text-primary" />
              <span className="text-lg font-bold">Calculus Master</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Your complete guide to mastering calculus and differential equations with interactive learning.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Topics</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#algebra" className="text-muted-foreground hover:text-primary">Algebra</Link></li>
              <li><Link href="#limits" className="text-muted-foreground hover:text-primary">Limits</Link></li>
              <li><Link href="#derivatives" className="text-muted-foreground hover:text-primary">Derivatives</Link></li>
              <li><Link href="#integrals" className="text-muted-foreground hover:text-primary">Integrals</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Advanced</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#differential-equations" className="text-muted-foreground hover:text-primary">Differential Equations</Link></li>
              <li><Link href="#roadmap" className="text-muted-foreground hover:text-primary">Learning Roadmap</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary">Practice Problems</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary">Resources</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Github className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2025 Calculus Master. Built with Next.js and Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
}