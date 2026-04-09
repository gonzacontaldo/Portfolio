import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function ProjectCard({ title, description, image, tech, github, demo }) {
  const hasImage = Boolean(image);
  const hasGithub = Boolean(github);
  const hasDemo = Boolean(demo);
  const hasLinks = hasGithub || hasDemo;

  return (
    <div className="group relative rounded-xl overflow-hidden shadow-xl bg-white dark:bg-white/5 transition-transform duration-300 hover:scale-[1.02]">
      <div className="relative w-full h-56 overflow-hidden">
        {hasImage ? (
          <img
            src={`${import.meta.env.BASE_URL}${image}`}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          <div className="flex h-full w-full items-end bg-gradient-to-br from-primary/25 via-[#393e41]/10 to-[#0f172a]/20 p-6">
            <div>
              <span className="mb-3 inline-block rounded-full bg-white/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#393e41] dark:bg-white/10 dark:text-white/80">
                Proyecto
              </span>
              <h3 className="text-2xl font-bold text-[#393e41] dark:text-white">{title}</h3>
            </div>
          </div>
        )}

        {hasLinks ? (
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
            {hasGithub ? (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white bg-dark dark:bg-white/10 p-3 rounded-full hover:bg-primary transition"
              >
                <FaGithub size={20} />
              </a>
            ) : null}
            {hasDemo ? (
              <a
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white bg-dark dark:bg-white/10 p-3 rounded-full hover:bg-primary transition"
              >
                <FaExternalLinkAlt size={18} />
              </a>
            ) : null}
          </div>
        ) : null}
      </div>

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
