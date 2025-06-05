// app/components/Sections/SkillsSection.js

export default function SkillsSection() {
  return (
    <section id="skills" className="py-16 bg-gray-950 text-gray-300 text-center">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-cyan-400 mb-6">./Skills</h2>
        <ul className="grid md:grid-cols-2 gap-4 text-left">
          {[
            "Penetration Testing (Metasploit, Burp Suite)",
            "Network Security (Wireshark, Cisco Packet Tracer)",
            "Programming: Python, Bash, JavaScript",
            "Operating Systems: Kali Linux, Windows",
          ].map((skill, index) => (
            <li
              key={index}
              className="bg-gray-800 p-3 rounded-lg hover:bg-gray-700 transition-all duration-300"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
