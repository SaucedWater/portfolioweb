import Image from "next/image";
import Link from "next/link"; //to run 'npm run dev'

export default function Home() {
  return ( //start here
<body class="bg-gray-900 text-gray-300 font-sans">
    {/* <!-- Header --> */}
    <header class="bg-gray-800 text-white py-6 sticky top-0 z-50">
    <div class="container mx-auto flex flex-col items-center">
        <nav class="flex space-x-6">
            <a href="#about" class="hover:text-blue-400">About</a>
            <a href="#projects" class="hover:text-blue-400">Projects</a>
            <a href="#skills" class="hover:text-blue-400">Skills</a>
            <a href="#contact" class="hover:text-blue-400">Contact</a>
        </nav>
    </div>
</header>

    {/* <!-- About Section --> */}
    <section id="about" class="py-12">
        <div class="container mx-auto text-center">
            <h2 class="text-3xl text-white font-bold mb-4">root@ian ~$: whoami</h2>
            <p class="text-gray-400">Hello! I'm Ian, a Year 2 Cybersecurity student at Temasek Polytechnic.</p>
        </div>
    </section>

    {/* <!-- Projects Section --> */}
    <section id="projects" class="py-12 bg-gray-800">
        <div class="container mx-auto">
            <h2 class="text-3xl text-white font-bold mb-6 text-center">Projects</h2>
            <div class="space-y-6">
                {/* <!-- Project 1 --> */}
                <div class="bg-gray-700 p-6 rounded-lg shadow-lg">
                    <h3 class="text-xl text-white font-semibold">Malware Analysis Sandbox</h3>
                    <p class="text-gray-400">Built a secure sandbox for analyzing malware behavior using Python and VirtualBox.</p>
                    <a href="https://github.com/yourgithub/malware-sandbox" target="_blank" class="text-blue-400 hover:text-blue-300">View Project →</a>
                </div>
                {/* <!-- Project 2 --> */}
                <div class="bg-gray-700 p-6 rounded-lg shadow-lg">
                    <h3 class="text-xl text-white font-semibold">Capture The Flag Challenges</h3>
                    <p class="text-gray-400">Created challenges for a CTF competition focusing on web vulnerabilities and cryptography.</p>
                    <a href="https://github.com/yourgithub/ctf-challenges" target="_blank" class="text-blue-400 hover:text-blue-300">View Challenges →</a>
                </div>
  
                <div class="bg-gray-700 p-6 rounded-lg shadow-lg">
                    <h3 class="text-xl text-white font-semibold">Secure Network Design</h3>
                    <p class="text-gray-400">Designed a secure network topology for a small business using Cisco Packet Tracer.</p>
                    <a href="https://github.com/yourgithub/secure-network" target="_blank" class="text-blue-400 hover:text-blue-300">View Diagram →</a>
                </div>
            </div>
        </div>
    </section>


    <section id="skills" class="py-12">
        <div class="container mx-auto text-center">
            <h2 class="text-3xl text-white font-bold mb-6">Skills</h2>
            <ul class="space-y-3">
                <li class="bg-gray-700 text-gray-300 p-3 rounded-lg">Penetration Testing (Metasploit, Burp Suite)</li>
                <li class="bg-gray-700 text-gray-300 p-3 rounded-lg">Network Security (Wireshark, Cisco Packet Tracer)</li>
                <li class="bg-gray-700 text-gray-300 p-3 rounded-lg">Programming: Python, Bash, C</li>
                <li class="bg-gray-700 text-gray-300 p-3 rounded-lg">Operating Systems: Linux, Windows</li>
                <li class="bg-gray-700 text-gray-300 p-3 rounded-lg">Certifications: CompTIA Security+, Splunk Fundamentals</li>
            </ul>
        </div>
    </section>


    <section id="contact" class="py-12 bg-gray-800">
        <div class="container mx-auto text-center">
            <h2 class="text-3xl text-white font-bold mb-6">Contact</h2>
            <p>Email: <a href="mailto:john.doe@example.com" class="text-blue-400 hover:text-blue-300">john.doe@example.com</a></p>
            <p>LinkedIn: <a href="https://linkedin.com/in/johndoe" target="_blank" class="text-blue-400 hover:text-blue-300">linkedin.com/in/johndoe</a></p>
            <p>GitHub: <a href="https://github.com/yourgithub" target="_blank" class="text-blue-400 hover:text-blue-300">github.com/yourgithub</a></p>
        </div>
    </section>


    <footer class="bg-gray-900 py-6">
        <div class="container mx-auto text-center">
            <p class="text-lg mb-4">Cybersecurity Student @ Temasek Polytechnic</p>
            <p class="text-gray-500 text-sm">© 2024 Ian. All rights reserved.</p>
        </div>
    </footer>
</body>
  ); // Stop here
}
