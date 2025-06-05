// app/components/Sections/AboutSection.js
import Typewriter from "../Typewriter";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gray-950 text-center text-gray-300">
      <div className="max-w-2xl mx-auto px-4">
        <Typewriter text="root@ian ~$: whoami" speed={100} />
        <p className="text-xl text-gray-400 mt-4">
          Hello! I'm Ian, a Year 3 Cybersecurity student @ Temasek Polytechnic. Welcome to my digital space.
        </p>
      </div>
    </section>
  );
}
