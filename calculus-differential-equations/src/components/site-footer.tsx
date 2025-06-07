"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { t } from "@/lib/translations";

export function SiteFooter() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <footer className="border-t py-6 md:py-0">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4 md:h-16">
        <p className="text-sm text-muted-foreground">
          {mounted
            ? t("footer.copyright")
            : `© ${new Date().getFullYear()} Calculus & DE Guide. All rights reserved.`
          }
        </p>
        <div className="flex items-center gap-4">
          <Link
            href="#basics"
            className="text-sm hover:underline underline-offset-4 text-muted-foreground hover:text-foreground"
          >
            {mounted ? t("footer.basics") : "Basics"}
          </Link>
          <Link
            href="#derivatives"
            className="text-sm hover:underline underline-offset-4 text-muted-foreground hover:text-foreground"
          >
            {mounted ? t("footer.derivatives") : "Derivatives"}
          </Link>
          <Link
            href="#integrals"
            className="text-sm hover:underline underline-offset-4 text-muted-foreground hover:text-foreground"
          >
            {mounted ? t("footer.integrals") : "Integrals"}
          </Link>
          <Link
            href="#odes"
            className="text-sm hover:underline underline-offset-4 text-muted-foreground hover:text-foreground"
          >
            {mounted ? t("footer.odes") : "ODEs"}
          </Link>
        </div>
      </div>
    </footer>
  );
}
