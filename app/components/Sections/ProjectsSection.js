// app/components/Sections/ProjectsSection.js
import ProjectCard from "../../components/ProjectCard";

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-16 bg-gray-900 text-gray-300">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-cyan-400 mb-10">./Projects</h2>
        <div className="space-y-6">

          <ProjectCard
            title="Secure Web Application Project"
            description="Built a secure web app."
            url="https://github.com/SaucedWater/SWAP-Project-AY2425"
          />
          
          <ProjectCard
            title="Functioning E-Commerce Website"
            description="Built a functioning e-commerce website using JavaScript & HTML/CSS."
            url="https://github.com/SaucedWater/y1s2_webdev_proj"
          />
          <ProjectCard
            title="Python Web Scraping Project"
            description="Python script used for web scraping."
            url="https://github.com/SaucedWater/DA_WWIP_Ian_Kwok_Proj"
          />

        </div>
      </div>
    </section>
  );
}
