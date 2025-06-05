// app/layout.js
"use client";

import { createContext, useState, useEffect } from "react";
import Link from "next/link";
import "./globals.css";

export const ThemeContext = createContext({
  darkMode: false,
  setDarkMode: () => {},
});

export default function RootLayout({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const rootHtml = document.documentElement;
    if (darkMode) {
      rootHtml.classList.add("dark");
    } else {
      rootHtml.classList.remove("dark");
    }
  }, [darkMode]);

  // Array of section IDs/titles
  const sections = ["about", "projects", "skills", "miscellaneous", "contact"];

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      <html lang="en">
        <body
          className={`${
            darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-100 text-gray-900"
          } font-sans`}
        >
          <header className="bg-gray-950 dark:bg-gray-800 text-gray-200 dark:text-gray-200 py-4 shadow-md sticky top-0 z-50">
            <div className="max-w-4xl mx-auto px-4 flex items-center justify-between">
              {/* Site Title */}
              <Link
                href="/"
                className="text-2xl font-bold hover:text-cyan-400 transition-colors duration-300"
              >
                Ian K.
              </Link>

              {/* ─── Desktop: Horizontal Links ─── */}
              <nav className="hidden md:flex space-x-6">
                {sections.map((id) => (
                  <Link
                    key={id}
                    href={`#${id}`}
                    className="hover:text-cyan-400 transition-colors duration-300 capitalize"
                  >
                    {id}
                  </Link>
                ))}
              </nav>

              {/* ─── Mobile: Dropdown Toggle ─── */}
              <div className="flex md:hidden relative">
                <button
                  onClick={() => setMenuOpen((prev) => !prev)}
                  className="flex items-center space-x-2 bg-gray-800 dark:bg-gray-700 px-3 py-2 rounded-md hover:bg-gray-700 transition-colors duration-200"
                >
                  <span className="text-gray-200 dark:text-gray-200">Menu</span>
                  <svg
                    className={`w-4 h-4 text-gray-200 dark:text-gray-200 transform transition-transform ${
                      menuOpen ? "rotate-180" : "rotate-0"
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {menuOpen && (
                  <ul className="absolute right-0 mt-2 w-40 bg-gray-800 dark:bg-gray-700 rounded-md shadow-lg overflow-hidden z-50">
                    {sections.map((id) => (
                      <li key={id}>
                        <Link
                          href={`#${id}`}
                          className="block px-4 py-2 text-gray-200 dark:text-gray-200 hover:bg-gray-700 transition-colors duration-150 capitalize"
                          onClick={() => setMenuOpen(false)}
                        >
                          {id}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </header>

          <main>{children}</main>
        </body>
      </html>
    </ThemeContext.Provider>
  );
}
