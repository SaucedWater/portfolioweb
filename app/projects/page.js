// app/projects/page.js
import Head from "next/head";

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects | Ian Kwok Portfolio</title>
        <meta name="description" content="Browse Ian's cybersecurity and coding projects." />
      </Head>

      <section className="py-16 bg-gray-900 min-h-screen text-gray-300">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-cyan-400 mb-10">./Projects</h2>
          <div className="space-y-6">
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
    </>
  );
}

function ProjectCard({ title, description, url }) {
  return (
    <article className="bg-gray-800 p-6 rounded-lg shadow-xl hover:shadow-2xl transition">
      <h3 className="text-xl font-semibold text-cyan-400">{title}</h3>
      <p className="text-gray-400 my-2">{description}</p>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-cyan-400 hover:text-cyan-500 transition"
      >
        View Project →
      </a>
    </article>
  );
}
