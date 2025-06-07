"use client";

import { useEffect, useState } from "react";

type Theme = "dark" | "light";

export function useTheme() {
  const [theme, setTheme] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const savedTheme = localStorage.getItem("theme") as Theme | null;
      const isDark = savedTheme === "dark" ||
                     (savedTheme === null && window.matchMedia("(prefers-color-scheme: dark)").matches);

      if (isDark) {
        document.documentElement.classList.add("dark");
        setTheme("dark");
      } else {
        document.documentElement.classList.remove("dark");
        setTheme("light");
      }
    } catch (e) {
      console.error("Error accessing localStorage:", e);
    }
  }, []);

  const toggleTheme = () => {
    try {
      if (theme === "dark") {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
        setTheme("light");
      } else {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
        setTheme("dark");
      }
    } catch (e) {
      console.error("Error accessing localStorage:", e);
      // Still toggle the theme even if localStorage fails
      if (theme === "dark") {
        document.documentElement.classList.remove("dark");
        setTheme("light");
      } else {
        document.documentElement.classList.add("dark");
        setTheme("dark");
      }
    }
  };

  return {
    theme,
    toggleTheme,
    mounted
  };
}
