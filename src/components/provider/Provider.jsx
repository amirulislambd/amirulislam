"use client";

import { ThemeProvider } from "next-themes";

export default function NextThemeProvider({ children }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      storageKey="portfolio-theme"
      enableSystem={false}
      disableTransitionOnChange={false}
    >
      {children}
    </ThemeProvider>
  );
}