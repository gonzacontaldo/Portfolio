import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";

export default function Projects({ language = "es" }) {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}data/projects.json`)
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error("Error cargando proyectos:", err));
  }, []);

  const texts = {
    es: {
      title: "Proyectos",
    },
    en: {
      title: "Projects",
    },
  };

  const t = texts[language];

  return (
    <section id="projectos" className="py-24 px-6 md:px-24 text-[#393e41] dark:text-white">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-primary">
        {t.title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}
