import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function ProjectCard({ title, description, image, tech, github, demo }) {
  return (
    <div className="group relative rounded-xl overflow-hidden shadow-xl bg-white dark:bg-white/5 transition-transform duration-300 hover:scale-[1.02]">
      {/* Imagen con overlay */}
      <div className="relative w-full h-56 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white bg-dark dark:bg-white/10 p-3 rounded-full hover:bg-primary transition"
          >
            <FaGithub size={20} />
          </a>
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white bg-dark dark:bg-white/10 p-3 rounded-full hover:bg-primary transition"
          >
            <FaExternalLinkAlt size={18} />
          </a>
        </div>
      </div>

      {/* Info */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-dark dark:text-white mb-2">{title}</h3>
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tech.map((tag, index) => (
            <span
              key={index}
              className="bg-primary/10 text-primary px-3 py-1 text-xs rounded-full font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
