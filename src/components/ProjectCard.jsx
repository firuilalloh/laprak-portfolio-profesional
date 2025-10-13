function ProjectCard({ title, description, image, link, tags }) {
  return (
    <div className="bg-gray-800/80 rounded-xl shadow-lg overflow-hidden flex flex-col hover:scale-[1.03] transition-transform duration-200">
      {image && (
        <img src={image} alt={title} className="w-full h-48 object-cover" />
      )}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-xl font-bold text-sky-400 mb-2">{title}</h3>
        <p className="text-gray-300 mb-4 flex-1">{description}</p>
        {tags && (
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, idx) => (
              <span
                key={idx}
                className="bg-gray-700 text-xs text-gray-200 px-2 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-sky-600 hover:bg-sky-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200 shadow"
          >
            Lihat Project
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
