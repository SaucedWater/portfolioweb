// app/components/CertCard.js
export default function CertCard({ title, description, image, link }) {
  return (
    <article className="bg-gray-800 rounded-lg shadow-xl hover:shadow-2xl transition overflow-hidden">
      {/* ─── this gives the title bar with 3 Dots ─── */}
      <div className="flex items-center space-x-2 bg-gray-700 px-4 py-1">
        {/* Red “close” circle */}
        <span className="h-3 w-3 bg-red-500 rounded-full"></span>
        {/* Yellow “minimize” circle */}
        <span className="h-3 w-3 bg-yellow-500 rounded-full"></span>
        {/* Green “maximize” circle */}
        <span className="h-3 w-3 bg-lime-500 rounded-full"></span>
      </div>

      {/* ─── Card Body ─── */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-cyan-400">{title}</h3>
        <p className="text-gray-400 my-2">{description}</p>

        {/* image */}
        {image && (
          <a href={link} target="_blank" rel="noopener noreferrer">
            <img src={image} alt={title || "Certification Image"} className="w-full h-auto rounded-md mt-4" />
          </a>
        )}
      </div>
    </article>
  );
}
