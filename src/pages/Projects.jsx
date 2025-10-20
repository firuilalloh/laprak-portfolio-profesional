import ProjectCard from "../components/ProjectCard";
import { MockData } from "../data/mock";

function Projects() {
  return (
    <section id="projects">
      <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center md:items-center justify-start md:justify-center pt-20 md:pt-0 px-4">
        <h1 className="text-3xl font-bold mb-4 mt-0">My Projects</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-1 md:p-4 max-w-6xl w-full">
          {MockData.projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              image={project.image}
              link={project.link}
              github={project.github}
              tags={project.tags}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
