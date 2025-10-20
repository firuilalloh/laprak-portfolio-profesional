import fallbackImg from "../assets/image.png";

function ProjectCard({ title, description, image, link, github, tags = [] }) {
  return (
    <div className="bg-gray-800/80 rounded-xl shadow-lg overflow-hidden flex flex-col hover:scale-[1.03] transition-transform duration-200">
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = fallbackImg;
          }}
        />
      )}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-xl font-bold text-sky-400 mb-2">{title}</h3>
        <p className="text-gray-300 mb-4 flex-1">{description}</p>

        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, index) => (
              <span key={index} className="bg-gray-700 text-xs text-gray-200 px-2 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="flex items-center gap-3 mt-2">
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-transparent border-gray-700 hover:bg-slate-900 text-sky-400 px-3 py-1.5 rounded-full text-sm font-medium transition-colors duration-150"
            >
              {/* Font Awesome: use solid eye icon (fa-solid / fas) */}
              <i className="fa-solid fa-eye text-sm" aria-hidden="true"></i>
              <span>Live Demo</span>
            </a>
          )}

          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-transparent border-gray-700 hover:bg-slate-900 text-purple-400 px-3 py-1.5 rounded-full text-sm font-medium transition-colors duration-150"
            >
              {/* Font Awesome: use brand GitHub icon (fa-brands / fab) */}
              <i className="fa-brands fa-github text-sm" aria-hidden="true"></i>
              <span>Code</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
