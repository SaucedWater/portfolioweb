// app/components/Sections/MiscellaneousSection.js
import CertCard from "../../components/CertCard";

export default function MiscellaneousSection() {
  return (
    <section id="miscellaneous" className="py-16 bg-gray-900 text-gray-300 text-center">
      <div className="max-w-2xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-cyan-400 mb-6">./Achievements & Certifications </h2>
        <div className="space-y-6">

                              <CertCard
            title="CompTIA Security+"
            description="Achieved CompTIA Security+."
            image="/comptiacert.jpeg" // Path to image
          />
          
          <CertCard
            title="Certified Ethical Hacker"
            description="Achieved CEH certification."
            image="/CEHCERT.jpg" // Path to image
          />


        </div>
      </div>
    </section>
  );
}
