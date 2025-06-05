// app/components/ProjectCard.js
export default function ProjectCard({ title, description, url }) {
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
