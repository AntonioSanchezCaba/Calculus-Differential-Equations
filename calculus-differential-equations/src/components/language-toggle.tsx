"use client";

import { useState, useEffect } from "react";
import { Button } from "./ui/button";

export function LanguageToggle() {
  // Initialize with default value
  const [language, setLanguage] = useState("en");
  const [mounted, setMounted] = useState(false);

  // Only run on client side after component mounts
  useEffect(() => {
    setMounted(true);

    // Safe localStorage access
    const getSavedLanguage = () => {
      try {
        return localStorage.getItem("language") || "en";
      } catch (e) {
        console.error("Error accessing localStorage:", e);
        return "en";
      }
    };

    setLanguage(getSavedLanguage());
  }, []);

  // Safely toggle language
  const toggleLanguage = () => {
    const newLanguage = language === "en" ? "es" : "en";

    try {
      localStorage.setItem("language", newLanguage);
    } catch (e) {
      console.error("Error accessing localStorage:", e);
    }

    setLanguage(newLanguage);

    // Update document language
    document.documentElement.setAttribute("lang", newLanguage);
  };

  // Prevent hydration issues
  if (!mounted) {
    return (
      <Button variant="outline" size="sm">
        Language
      </Button>
    );
  }

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleLanguage}
      aria-label={language === "en" ? "Switch to Spanish" : "Switch to English"}
    >
      {language === "en" ? "Español" : "English"}
    </Button>
  );
}
