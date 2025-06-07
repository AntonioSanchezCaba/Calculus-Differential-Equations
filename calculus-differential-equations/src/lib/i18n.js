// Simple translations
export const translations = {
  en: {
    "site.title": "Calculus & DE Guide",
    "site.short": "Calc Guide",
    "nav.algebra": "Algebra",
    "nav.derivatives": "Derivatives",
    "nav.integrals": "Integrals",
    "nav.odes": "ODEs",
    "nav.pdes": "PDEs",
    "btn.language": "Español",
    "btn.darkMode": "Toggle dark mode"
  },
  es: {
    "site.title": "Guía de Cálculo y ED",
    "site.short": "Guía Cálc",
    "nav.algebra": "Álgebra",
    "nav.derivatives": "Derivadas",
    "nav.integrals": "Integrales",
    "nav.odes": "EDOs",
    "nav.pdes": "EDPs",
    "btn.language": "English",
    "btn.darkMode": "Cambiar modo oscuro"
  }
};

// Default language
let currentLanguage = "en";

// Get translation
export function t(key) {
  if (typeof window !== "undefined") {
    currentLanguage = localStorage.getItem("language") || "en";
  }
  return translations[currentLanguage][key] || key;
}

// Toggle language
export function toggleLanguage() {
  if (typeof window === "undefined") return;

  const newLanguage = currentLanguage === "en" ? "es" : "en";
  localStorage.setItem("language", newLanguage);
  currentLanguage = newLanguage;
  document.documentElement.setAttribute("lang", newLanguage);

  // Force page refresh to update all translations
  window.location.reload();
}
