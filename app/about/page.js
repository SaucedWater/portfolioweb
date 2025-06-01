import Image from "next/image";
import Link from "next/link";

//last edited 1205am 27/11/24

export default function Home() {
  return (
    <body className="bg-gray-900 text-gray-300 font-sans scroll-smooth">
      {/* <!-- Header --> */}
      <header className="bg-gray-950 text-gray-200 py-6 sticky top-0 z-50 shadow-xl transition-all">
        <div className="container mx-auto flex flex-col items-center">
          <nav className="flex space-x-6">
            <a
              href="#about"
              className="hover:text-cyan-500 transition-all duration-300"
            >
              About
            </a>
            <a
              href="#projects"
              className="hover:text-cyan-500 transition-all duration-300"
            >
              Projects
            </a>
            <a
              href="#skills"
              className="hover:text-cyan-500 transition-all duration-300"
            >
              Skills
            </a>
            <a
              href="#contact"
              className="hover:text-cyan-500 transition-all duration-300"
            >
              Contact
            </a>
            <a
              href="#miscellaneous"
              className="hover:text-cyan-500 transition-all duration-300"
            >
              Miscellaneous
            </a>
          </nav>
        </div>
      </header>

      {/* <!-- About Section --> */}
      <section id="about" className="py-16 bg-gray-950 text-gray-200">
        <div className="container mx-auto text-center flex flex-col items-center">
          <h2 className="text-5xl md:text-7xl font-bold mb-6 text-white font-fira tracking-wide">
            root@ian ~$: whoami
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-6 opacity-75">
            Hello! Welcome to my page! I'm Ian, a Year 3 Cybersecurity student at Temasek Polytechnic.
          </p>
        </div>
      </section>

      {/* <!-- Projects Section --> */}
      <section id="projects" className="py-12 bg-gray-900 text-gray-300">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center text-cyan-400">./Projects</h2>
          <div className="space-y-6">
            {/* <!-- Project 1 --> */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300">
              <h3 className="text-xl font-semibold text-cyan-400">Functioning E-Commerce Website</h3>
              <p className="text-gray-400">
                Built a functioning e-commerce website using JavaScript & HTML/CSS.
              </p>
              <a
                href="https://github.com/SaucedWater/y1s2_webdev_proj"
                target="_blank"
                className="text-cyan-400 hover:text-cyan-500 transition-all duration-300"
              >
                View Project →
              </a>
            </div>

            {/* <!-- Project 2 --> */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300">
              <h3 className="text-xl font-semibold text-cyan-400">Python Web Scraping Project</h3>
              <p className="text-gray-400">
                Python script used for web scraping
              </p>
              <a
                href="https://github.com/SaucedWater/DA_WWIP_Ian_Kwok_Proj"
                target="_blank"
                className="text-cyan-400 hover:text-cyan-500 transition-all duration-300"
              >
                View Challenges →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Skills Section --> */}
      <section id="skills" className="py-12 bg-gray-950 text-gray-200">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-cyan-400">./Skills</h2>
          <ul className="space-y-3">
            <li className="bg-gray-800 text-gray-200 p-3 rounded-lg hover:bg-gray-700 transition-all duration-300">
              Penetration Testing (Metasploit, Burp Suite)
            </li>
            <li className="bg-gray-800 text-gray-200 p-3 rounded-lg hover:bg-gray-700 transition-all duration-300">
              Network Security (Wireshark, Cisco Packet Tracer)
            </li>
            <li className="bg-gray-800 text-gray-200 p-3 rounded-lg hover:bg-gray-700 transition-all duration-300">
              Programming: Python, Bash, JavaScript
            </li>
            <li className="bg-gray-800 text-gray-200 p-3 rounded-lg hover:bg-gray-700 transition-all duration-300">
              Operating Systems: Kali Linux, Windows
            </li>
          </ul>
        </div>
      </section>

{/* <!-- Miscellaneous Section --> */}
<section id="miscellaneous" className="py-12 bg-gray-900 text-gray-300">
  <div className="container mx-auto text-center">
    <h2 className="text-3xl font-bold mb-8 text-cyan-400">./Miscellaneous</h2>
    <div className="space-y-8">
      <div className="bg-gray-800 p-8 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300">
        <h3 className="text-2xl font-semibold text-cyan-400 mb-4">Coming Soon...</h3>

      </div>
    </div>
  </div>
</section>



      {/* <!-- Contact Section --> */}
      <section id="contact" className="bg-gray-950 py-6">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-cyan-400">./Contacts</h2>
          <p>
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/ian-k-722bbb211/"
              target="_blank"
              className="text-cyan-400 hover:text-cyan-500 transition-all duration-300"
            >
              linkedin.com/in/iank
            </a>
          </p>
          <p>
            GitHub:{" "}
            <a
              href="https://github.com/SaucedWater"
              target="_blank"
              className="text-cyan-400 hover:text-cyan-500 transition-all duration-300"
            >
              github.com/SaucedWater
            </a>
          </p>
        </div>
      </section>

      {/* <!-- Footer --> */}
      <footer className="py-12 bg-gray-900 text-gray-300">
        <div className="container mx-auto text-center">
          <p className="text-lg mb-4 text-gray-400">Cybersecurity Student @ Temasek Polytechnic</p>
          <p className="text-gray-500 text-sm">© 2024 Ian. All rights reserved.</p>
        </div>
      </footer>
    </body>
  );
}
