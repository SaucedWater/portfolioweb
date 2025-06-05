// app/components/Sections/MiscellaneousSection.js
import MiscCard from "../../components/MiscCard";

export default function MiscellaneousSection() {
  return (
    <section id="miscellaneous" className="py-16 bg-gray-900 text-gray-300 text-center">
      <div className="max-w-2xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-cyan-400 mb-6">./Miscellaneous</h2>
        <div className="space-y-6">
          <MiscCard
                      title="Coming Soon..."
                      
                    />
        </div>
      </div>
    </section>
  );
}
