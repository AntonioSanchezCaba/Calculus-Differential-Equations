import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Calculus & Differential Equations | Complete Learning Platform",
  description: "Master calculus and differential equations with interactive lessons, examples, and comprehensive explanations. From basic algebra to advanced mathematical concepts.",
  keywords: "calculus, differential equations, mathematics, learning, education, derivatives, integrals",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}