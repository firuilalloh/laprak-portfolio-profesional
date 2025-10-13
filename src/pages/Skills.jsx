import SkillCard from "../components/SkillCard";
import { MockData } from "../data/mock";

function SkillSection() {
  return (
    <section id="skills">
      <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-3">Skills Section</h1>
        <p className="text-gray-400 font-light">
          Technologies and tools I use to bring ideas to life
        </p>
        <div className="my-5">
          <SkillCard />
        </div>
        <h1 className="text-3xl font-bold mb-3">Adittional Skills</h1>
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {MockData.AdditionalSkills.map((skill) => (
            <div key={skill} className="text-gray-300">
              <h2 className="px-4 py-2 bg-gray-800 text-gray-300 rounded-full text-sm hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-purple-600/20 hover:text-white transition-all duration-300 border border-gray-700 hover:border-cyan-400/30">
                {skill}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillSection;
