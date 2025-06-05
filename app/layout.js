// app/layout.js

// we’re using “use client” to indicate this component runs in the browser,
// not on the server. this lets us use hooks like useState and useEffect.
"use client";

// import react functions that let us create context and manage state/effects
import { createContext, useState, useEffect } from "react";

// import next.js’s Link component so we can navigate between pages or sections
import Link from "next/link";

// import our global styles (tailwind, resets, etc.)
import "./globals.css";

// create a context called ThemeContext that will hold information about dark mode.
// context is like a global container for values that many components might need.
export const ThemeContext = createContext({
  // default values: darkMode is false, setDarkMode is a no-op function
  darkMode: false,
  setDarkMode: () => {},
});

// this is our root layout component that wraps the entire app
// any page or component inside this layout will have access to ThemeContext
export default function RootLayout({ children }) {
  // useState hook to keep track of whether dark mode is on or off
  const [darkMode, setDarkMode] = useState(false);

  // useState hook to keep track of whether the mobile menu is open or closed
  const [menuOpen, setMenuOpen] = useState(false);

  // useEffect runs after every render when the darkMode value changes.
  // here, we’re adding or removing a "dark" class on the root <html> element.
  // tailwind looks for that "dark" class to apply dark-mode styles.
  useEffect(() => {
    // get the <html> element (the root of our document)
    const rootHtml = document.documentElement;

    if (darkMode) {
      // if darkMode is true, add the "dark" class to <html>
      rootHtml.classList.add("dark");
    } else {
      // if darkMode is false, remove the "dark" class
      rootHtml.classList.remove("dark");
    }
  }, [darkMode]); // this effect re-runs whenever darkMode changes

  // an array of section IDs/titles that we’ll use for navigation links
  // these correspond to parts of our page like #about, #projects, etc.
  const sections = ["about", "projects", "skills", "miscellaneous", "contact"];

  return (
    // wrap everything in ThemeContext.Provider so any child can read or update darkMode
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      {/* html element: set language to english */}
      <html lang="en">
        {/* body: apply different background/text colors depending on darkMode */}
        <body
          className={`${
            darkMode
              ? "bg-gray-900 text-gray-100" // if dark mode: dark background + light text
              : "bg-gray-100 text-gray-900" // if light mode: light background + dark text
          } font-sans`} // font-sans sets a nice default sans-serif font
        >
          {/* header: top navigation area */}
          {/* bg-gray-950 is an extra-dark background for light mode,
              dark:bg-gray-800 is a slightly lighter dark background in dark mode */}
          <header className="bg-gray-950 dark:bg-gray-800 text-gray-200 dark:text-gray-200 py-4 shadow-md sticky top-0 z-50">
            {/* container for header content: centers it and adds padding */}
            <div className="max-w-4xl mx-auto px-4 flex items-center justify-between">
              {/* site title / logo on the left */}
              <Link
                href="/"
                className="text-2xl font-bold hover:text-cyan-400 transition-colors duration-300"
              >
                {/* “ian k.” appears as the site name */}
                ian k.
              </Link>

              {/* ─── desktop: horizontal links ─── */}
              {/* hidden md:flex means these links are hidden on small screens,
                  but appear as a flex row on medium screens and up */}
              <nav className="hidden md:flex space-x-6">
                {sections.map((id) => (
                  // for each section, create a link to its ID (e.g. #about)
                  <Link
                    key={id}
                    href={`#${id}`}
                    className="hover:text-cyan-400 transition-colors duration-300 capitalize"
                  >
                    {/* display the section name (e.g. “about”, “projects”) */}
                    {id}
                  </Link>
                ))}
              </nav>

              {/* ─── mobile: dropdown toggle ─── */}
              {/* this div is flex & relative, but only shows on small screens (md:hidden) */}
              <div className="flex md:hidden relative">
                {/* button that toggles the mobile menu open/closed */}
                <button
                  onClick={() => setMenuOpen((prev) => !prev)}
                  className="
                    flex items-center space-x-2
                    bg-gray-800 dark:bg-gray-700
                    px-3 py-2
                    rounded-md
                    hover:bg-gray-700
                    transition-colors duration-200
                  "
                >
                  {/* text label “menu” in light gray */}
                  
                  {/* svg icon for a chevron arrow that rotates when menuOpen changes */}
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
</svg>

                </button>

                {/* if menuOpen is true, show this full-screen overlay */}
                {menuOpen && (
                  <ul
                    className="
                      fixed inset-0
                      bg-black bg-opacity-90
                      flex flex-col items-center justify-center
                      z-50
                    "
                  >
                    {/* loop over each section and show a link centered on screen */}
                    {sections.map((id) => (
                      <li key={id}>
                        <Link
                          href={`#${id}`}
                          className="
                            block px-4 py-2
                            text-gray-200 dark:text-gray-200
                            hover:bg-gray-700 transition-colors duration-150
                            capitalize
                          "
                          onClick={() => setMenuOpen(false)}
                        >
                          {id}
                        </Link>
                      </li>
                    ))}

                    {/* optional “close” button at the bottom of the menu */}
                    <li>
                      <button
                        onClick={() => setMenuOpen(false)}
                        className="
                          mt-6
                          text-gray-400
                          hover:text-gray-200
                          transition-colors duration-150
                        "
                      >
                        ✕ Close
                      </button>
                    </li>
                  </ul>
                )}
              </div>
            </div>
          </header>

          {/* main content area: whatever page or component is inside this layout */}
          <main>{children}</main>
        </body>
      </html>
    </ThemeContext.Provider>
  );
}
