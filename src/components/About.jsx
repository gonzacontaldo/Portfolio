import { useEffect, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

// Iconos disponibles
import {
  FaReact, FaCss3Alt, FaJs, FaGitAlt, FaHtml5, FaPython, FaNodeJs, FaDatabase, FaLinux
} from "react-icons/fa";
import {
  SiTailwindcss, SiVite, SiBootstrap, SiJson, SiTypescript, SiDjango
} from "react-icons/si";
import { FiTool } from "react-icons/fi"; // icono genérico por si falta

const iconMap = {
  FaReact: <FaReact className="text-2xl text-primary" />,
  FaCss3Alt: <FaCss3Alt className="text-2xl text-primary" />,
  FaJs: <FaJs className="text-2xl text-primary" />,
  FaGitAlt: <FaGitAlt className="text-2xl text-primary" />,
  FaHtml5: <FaHtml5 className="text-2xl text-primary" />,
  FaPython: <FaPython className="text-2xl text-primary" />,
  FaNodeJs: <FaNodeJs className="text-2xl text-primary" />,
  FaDatabase: <FaDatabase className="text-2xl text-primary" />,
  FaLinux: <FaLinux className="text-2xl text-primary" />,
  SiTailwindcss: <SiTailwindcss className="text-2xl text-primary" />,
  SiVite: <SiVite className="text-2xl text-primary" />,
  SiBootstrap: <SiBootstrap className="text-2xl text-primary" />,
  SiJson: <SiJson className="text-2xl text-primary" />,
  SiTypescript: <SiTypescript className="text-2xl text-primary" />,
  SiDjango: <SiDjango className="text-2xl text-primary" />,
  default: <FiTool className="text-2xl text-primary" />
};

export default function About({ language = "es" }) {
  const [skills, setSkills] = useState([]);
  const [education, setEducation] = useState([]);
  const sortedSkills = [...skills].sort((a, b) => a.name.localeCompare(b.name));

  // Esto lo vas a cambiar por un prop o context // o "en"

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}data/skills.json`).then(res => res.json()).then(setSkills);
    fetch(`${import.meta.env.BASE_URL}data/education.json`).then(res => res.json()).then(setEducation);
  }, []);

  const texts = {
    es: {
      title: "Sobre mí",
      intro1: "Soy Gonzalo, un programador de 19 años en constante búsqueda. No tengo todas las respuestas, ni un camino definido... y me encanta que así sea.",
      intro2: "Me apasiona aprender, explorar nuevas tecnologías y descubrir qué rama de la programación me inspira más: desde el diseño visual hasta la lógica del backend. No me limito a ser solo “frontend” o “backend”, porque lo que realmente quiero es entender, crear y crecer.",
      intro3: "Me considero autodidacta, curioso y con la cabeza puesta en el futuro. Cada línea de código es un paso más en el camino hacia algo que todavía no conozco, pero que estoy decidido a construir.",
      techTitle: "Tecnologías que uso",
      eduTitle: "Educación & Certificaciones",
    },
    en: {
      title: "About Me",
      intro1: "I'm Gonzalo, a 19-year-old programmer constantly exploring. I don't have all the answers or a defined path… and I love that.",
      intro2: "I'm passionate about learning, trying new technologies, and figuring out which area of development excites me the most—from visual design to backend logic. I don’t limit myself to being 'frontend' or 'backend' because what I really want is to understand, create, and grow.",
      intro3: "I'm self-taught, curious, and future-focused. Every line of code is another step toward something I haven’t discovered yet—but I’m determined to build it.",
      techTitle: "Technologies I Use",
      eduTitle: "Education & Certifications",
    }
  };

  const t = texts[language];

  return (
    <section id="sobremí" className="py-24 px-6 md:px-24 text-dark dark:text-white relative overflow-hidden">
      <motion.div 
        className="absolute -top-10 -left-10 w-64 h-64 bg-primary/20 rounded-full filter blur-3xl opacity-30"
        animate={{ x: [0, 20, 0], y: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div 
        className="absolute bottom-0 -right-20 w-80 h-80 bg-[#e94f37]/20 rounded-full filter blur-3xl opacity-30"
        animate={{ x: [0, -20, 0], y: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-primary">{t.title}</h2>

        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }} 
          viewport={{ once: true }}
        >
          <p className="text-lg leading-relaxed mb-6 italic">{t.intro1}</p>
          <p className="text-lg leading-relaxed">{t.intro2}</p>
          <p className="text-lg leading-relaxed mt-6">{t.intro3}</p>
        </motion.div>

        <div className="mb-20">
          <h3 className="text-xl md:text-2xl font-semibold mb-6 text-primary text-center uppercase tracking-wide">
            {t.techTitle}
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-items-center dark:bg-white/10 rounded-xl p-6 shadow-sm border border-primary/10 dark:border-white/20">
            {sortedSkills.map((skill, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center group"
                whileHover={{ scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="w-14 h-14 flex items-center justify-center bg-primary/10 rounded-xl mb-2 shadow group-hover:rotate-6 transition-transform">
                  {iconMap[skill.icon] || iconMap["default"]}
                </div>
                <span className="text-sm text-center font-medium text-primary">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }} 
          viewport={{ once: true }}
        >
          <h3 className="text-xl md:text-2xl font-semibold mb-6 text-primary text-center uppercase tracking-wide">
            {t.eduTitle}
          </h3>
          <div className="space-y-4 max-w-xl mx-auto">
            {education.map((item, index) => (
              <div key={index} className="bg-white dark:bg-white/5 rounded shadow px-6 py-4 border-l-4 border-primary hover:shadow-lg transition-shadow flex items-center gap-4">
                <img src={`${import.meta.env.BASE_URL}${item.image}`} alt={item.institution} className="w-10 h-10 object-contain" />
                <div>
                  <h4 className="font-semibold text-lg">{item.title}</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">{item.institution} · {item.period}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
