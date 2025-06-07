import Link from "next/link";
import { Calculator, Github, Twitter, Linkedin } from "lucide-react";
import { t } from "@/lib/translations";

export function Footer() {
  return (
    <footer className="border-t bg-muted/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Calculator className="h-6 w-6 text-primary" />
              <span className="text-lg font-bold">{t("header.title")}</span>
            </div>
            <p className="text-sm text-muted-foreground">
              {t("footer.description")}
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">{t("footer.topics")}</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#algebra" className="text-muted-foreground hover:text-primary">{t("header.algebra")}</Link></li>
              <li><Link href="#limits" className="text-muted-foreground hover:text-primary">{t("header.limits")}</Link></li>
              <li><Link href="#derivatives" className="text-muted-foreground hover:text-primary">{t("header.derivatives")}</Link></li>
              <li><Link href="#integrals" className="text-muted-foreground hover:text-primary">{t("header.integrals")}</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">{t("footer.advanced")}</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#differential-equations" className="text-muted-foreground hover:text-primary">{t("header.differential-equations")}</Link></li>
              <li><Link href="#roadmap" className="text-muted-foreground hover:text-primary">{t("header.roadmap")}</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary">Practice Problems</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary">Resources</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">{t("footer.connect")}</h3>
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
          <p>{t("footer.copyright")}</p>
        </div>
      </div>
    </footer>
  );
}