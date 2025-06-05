// app/layout.js

"use client"; // ← Marks this file as a Client Component (so we can use useState, useEffect, etc.)

import { createContext, useState, useEffect } from "react";
import Link from "next/link";
import "./globals.css";

/**
 * Create a ThemeContext. 
 * Children can read `darkMode` (boolean) and toggle via `setDarkMode`.
 */
export const ThemeContext = createContext({
  darkMode: false,
  setDarkMode: () => {},
});



export default function RootLayout({ children }) {
  // 1. Local state: track whether dark mode is ON (true) or OFF (false).
  const [darkMode, setDarkMode] = useState(false);

  // 2. Whenever `darkMode` changes, update the <html> element's class list.
  //    If darkMode === true, we add the 'dark' class to <html>. Otherwise, we remove it.
  //    Tailwind CSS (configured with `darkMode: 'class'`) will then apply dark styles.
  useEffect(() => {
    const rootHtml = document.documentElement;
    if (darkMode) {
      rootHtml.classList.add("dark");
    } else {
      rootHtml.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    // 3. Wrap everything inside ThemeContext.Provider so child components can read or toggle theme.
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      {/* 
        4. Note: In Next.js App Router, <html> and <body> tags wrap your page.
           We set className on <body> to define default light or dark background/text. 
           Since Tailwind uses `dark:` variants, as soon as <html> has class="dark", 
           any `dark:bg-...` or `dark:text-...` classes will apply.
      */}
      <html lang="en">
        {/* 
          5. Here, we choose different background/text colors based on `darkMode`.
             - If darkMode is true → bg-gray-900 / text-gray-100
             - If darkMode is false → bg-gray-100 / text-gray-900
        */}
        <body className={`${darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-100 text-gray-900"} font-sans`}>
          {/* ——— Shared Navigation Bar ——— */}
          <header className="bg-gray-950 dark:bg-gray-800 text-gray-200 dark:text-gray-200 py-4 shadow-md sticky top-0 z-50">
            <div className="max-w-4xl mx-auto px-4 flex items-center justify-between">
              {/* 6. Left: Site Title (can be a Link to home) */}
              <Link href="/" className="text-2xl font-bold hover:text-cyan-400 transition-colors duration-300">
                Ian Kwok
              </Link>

              {/* 7. Center: Navigation Links (client‑side Next.js <Link>) */}
              <nav className="flex space-x-6">
                {["about", "projects", "skills", "miscellaneous", "contact"].map((id) => (
                  <Link
                    key={id}
                    href={`#${id}`}
                    className="hover:text-cyan-400 transition-colors duration-300 capitalize"
                  >
                    {id}
                  </Link>
                ))}
              </nav>

            </div>
          </header>

          {/* ——— Page content will be rendered here ——— */}
          <main>{children}</main>
        </body>
      </html>
    </ThemeContext.Provider>
  );
}
