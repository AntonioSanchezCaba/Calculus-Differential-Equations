"use client";

import { Button } from "./ui/button";
import { toggleLanguage, t } from "@/lib/i18n";

export function LanguageButton() {
  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleLanguage}
    >
      {t("btn.language")}
    </Button>
  );
}
