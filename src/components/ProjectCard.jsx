const ProjectCard = ({ imgURL, title, tech, demoLink, codeLink }) => {
  return (
    <div className="relative group h-full bg-white rounded-xl overflow-hidden shadow-md w-full">
      <img
        src={imgURL}
        alt={title}
        className="w-full h-72 md:h-80 object-cover"
      />

      {/* Overlay on hover */}
      <div className="absolute inset-0 bg-black/60 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
        <a
          href={demoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-black px-4 py-2 rounded hover:bg-amber-400 hover:text-white transition"
        >
          Live Demo
        </a>
        <a
          href={codeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-black px-4 py-2 rounded hover:bg-amber-400 hover:text-white transition"
        >
          Code
        </a>
      </div>

      {/* Content */}
      <div className="px-4 py-5 z-0 relative">
        <h3 className="text-base font-semibold line-clamp-2">{title}</h3>
        <div className="flex flex-wrap gap-2 mt-2">
          {tech.map((item, index) => (
            <span
              key={index}
              className="text-sm text-amber-600 bg-orange-100 px-3 py-1 rounded"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
export default ProjectCard;
