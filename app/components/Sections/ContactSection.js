// app/components/Sections/ContactSection.js
export default function ContactSection() {
  return (
    <section id="contact" className="bg-gray-950 py-16 text-gray-300 text-center">
      <div className="max-w-2xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-cyan-400 mb-6">./Contact</h2>
        <p className="mb-2">
          LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/ian-k-722bbb211/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:text-cyan-500 transition"
          >
            linkedin.com/in/iank
          </a>
        </p>
        <p>
          GitHub:{" "}
          <a
            href="https://github.com/SaucedWater"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:text-cyan-500 transition"
          >
            github.com/SaucedWater
          </a>
        </p>
      </div>
    </section>
  );
}
