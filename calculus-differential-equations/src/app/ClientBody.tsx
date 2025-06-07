"use client";

import { useEffect } from "react";

export default function ClientBody({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // Make sure body has antialiased class
    document.body.className = document.body.className
      .split(' ')
      .filter(c => c !== 'antialiased')
      .concat(['antialiased'])
      .join(' ');

    // Initialize theme from localStorage on client side
    try {
      // Theme handling
      const theme = localStorage.getItem('theme');
      if (theme === 'light') {
        document.documentElement.classList.remove('dark');
      } else {
        document.documentElement.classList.add('dark');
      }

      // Language handling
      const language = localStorage.getItem('language');
      if (language) {
        document.documentElement.setAttribute('lang', language);
      }
    } catch (e) {
      console.error("Error accessing localStorage:", e);
      // Default to dark theme if localStorage fails
      document.documentElement.classList.add('dark');
    }
  }, []);

  return (
    <body className="antialiased" suppressHydrationWarning>
      {children}
    </body>
  );
}
