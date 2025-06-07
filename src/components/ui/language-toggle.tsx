"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Languages } from "lucide-react";
import { getCurrentLanguage, toggleLanguage, t } from "@/lib/translations";

export function LanguageToggle() {
  const [mounted, setMounted] = useState(false);
  const [currentLang, setCurrentLang] = useState(getCurrentLanguage());

  useEffect(() => {
    setMounted(true);
    setCurrentLang(getCurrentLanguage());
  }, []);

  const handleToggle = () => {
    toggleLanguage();
  };

  if (!mounted) {
    return (
      <Button variant="outline" size="sm" className="gap-2">
        <Languages className="h-4 w-4" />
        <span className="hidden sm:inline">Language</span>
      </Button>
    );
  }

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={handleToggle}
      className="gap-2 transition-all hover:scale-105"
      title={currentLang === 'en' ? 'Switch to Spanish' : 'Cambiar a Inglés'}
    >
      <Languages className="h-4 w-4" />
      <span className="hidden sm:inline">{t('ui.language')}</span>
    </Button>
  );
}