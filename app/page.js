// app/page.js
import Head from "next/head";

// Import each Section component (which we created under `components/Sections/`)
import AboutSection from "./components/Sections/AboutSection";
import ProjectsSection from "./components/Sections/ProjectsSection";
import SkillsSection from "./components/Sections/SkillsSection";
import MiscellaneousSection from "./components/Sections/CertSection";
import ContactSection from "./components/Sections/ContactSection";

export const metadata = {
  title: "Ian Kwok",
  description:
    "Portfolio of Ian Kwok, Cybersecurity student at Temasek Polytechnic. View projects, skills, and contact info.",
};


export default function Home() {
  return (
    <>
      {/* 1. Meta tags for this page */}


      <main className="scroll-smooth">
        {/* 3. Render each Section in order */}
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <MiscellaneousSection />
        <ContactSection />

        {/* 4. Footer (placed at bottom of all sections) */}
        <footer className="py-10 bg-gray-900 dark:bg-gray-800 text-center text-sm text-gray-500 dark:text-gray-400">
          
          <p className="mb-2">Cybersecurity Student @ Temasek Polytechnic</p>
          <p>© {new Date().getFullYear()} Ian. All rights reserved.</p>
        </footer>
      </main>
    </>
  );
}
