const SkillCard = () => {
  const skills = [
    { name: "JavaScript", level: "Advanced" },
    { name: "React", level: "Advanced" },
    { name: "Node.js", level: "Intermediate" },
    { name: "Python", level: "Advanced" },
    { name: "Django", level: "Intermediate" },
    { name: "CSS", level: "Advanced" },
    { name: "HTML", level: "Advanced" },
    { name: "Git", level: "Intermediate" },
  ];
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {skills.map((skill, index) => (
        <div
          key={index}
          className="bg-gray-800 px-14 py-9 rounded-lg shadow-md flex flex-col items-center hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-purple-600/20 hover:text-white transition-all duration-300 border border-gray-700 hover:border-cyan-400/30"
        >
          <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
          <p className="text-gray-400">{skill.level}</p>
        </div>
      ))}
    </div>
  );
};

export default SkillCard;
