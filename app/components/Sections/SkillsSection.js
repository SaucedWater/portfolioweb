// app/components/Sections/SkillsSection.js
"use client"; // Ensure this is here to support client-side features like interactivity
import ProjectCard from "../../components/ProjectCard";



export default function SkillsSection() {
  const skills = [
    {
      name: "Linux Server Administration"
    },
    {
      name: "Wireshark Network Analysis"

    },
    {
      name: "Digital Forensics"
    }


  ];
  return (
    <section id="skills" className="py-16 bg-gray-950 text-gray-300 text-center">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-cyan-400 mb-10">./Skills</h2>

        {/* 3-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-gray-900 p-4 rounded-lg shadow-md hover:shadow-cyan-500/20 transition-shadow"
            >
              <span className="text-lg font-medium">{skill.name}</span>
            </div>
          ))}
        </div>
        </div>
    </section>
  );
}
