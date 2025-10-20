const SkillCard = () => {
  const skills = [
    { name: "HTML", level: "Advanced" },
    { name: "CSS", level: "Advanced" },
    { name: "JavaScript", level: "Advanced" },
    { name: "React", level: "Advanced" },
    { name: "Vue", level: "Advanced" },
    { name: "Git", level: "Intermediate" },
    { name: "Node.js", level: "Intermediate" },
    { name: "Figma", level: "Basic" },
  ];

  const iconMap = {
    JavaScript: "fa-brands fa-js",
    React: "fa-brands fa-react",
    "Node.js": "fa-brands fa-node",
    Figma: "fa-brands fa-figma",
    CSS: "fa-brands fa-css3-alt",
    HTML: "fa-brands fa-html5",
    Git: "fa-brands fa-git",
    Vue: "fa-brands fa-vuejs",
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {skills.map((skill) => {
        const iconClass = iconMap[skill.name] || "fa-solid fa-code";
        return (
          <div
            key={skill.name}
            className="bg-gray-800 px-16 py-4 rounded-lg shadow-md flex flex-col items-center hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-purple-600/20 hover:text-white transition-all duration-300 border border-gray-700 hover:border-cyan-400/30"
          >
            <div className="w-16 h-16 rounded-full bg-gray-700 flex items-center justify-center mb-4">
              <i className={`${iconClass} text-2xl text-sky-400`} aria-hidden="true"></i>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-center">{skill.name}</h3>
            <p className="text-gray-400">{skill.level}</p>
          </div>
        );
      })}
    </div>
  );
};

export default SkillCard;
