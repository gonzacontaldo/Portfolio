import { TypeAnimation } from 'react-type-animation';

export default function Hero({ language = "es" }) {// Cambiá esto por props o contexto más adelante

  const texts = {
    es: {
      greeting: "Hola, soy",
      phrases: [
        "Desarrollador Frontend",
        2000,
        "Diseñador de Interfaces",
        2000,
        "Apasionado por el Código",
        2000,
      ],
      viewProjects: "Ver proyectos",
      contact: "Contáctame",
    },
    en: {
      greeting: "Hi, I'm",
      phrases: [
        "Frontend Developer",
        2000,
        "UI Designer",
        2000,
        "Passionate About Code",
        2000,
      ],
      viewProjects: "View Projects",
      contact: "Contact Me",
    }
  };

  const t = texts[language];
  console.log("Idioma actual:", language);

  return (
    <section id="home" className="min-h-screen flex flex-col md:flex-row items-center justify-center px-8 md:px-24 text-[#393e41] dark:text-white relative z-10">
      <div className="md:w-1/2 mb-12 md:mb-0">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          {t.greeting} <span className="text-primary">Gonzalo Contaldo</span>
        </h1>

        <TypeAnimation
          key={language} // 💥 esto fuerza que se reinicie al cambiar idioma
          sequence={t.phrases}
          wrapper="p"
          speed={50}
          className="text-xl mb-6 text-primary"
          repeat={Infinity}
        />



        <div className="flex space-x-6">
          <a href="#projects" className="px-6 py-3 bg-primary text-white rounded shadow hover:bg-opacity-90 transition">
            {t.viewProjects}
          </a>
          <a href="#contact" className="px-6 py-3 border border-primary rounded text-primary hover:bg-primary hover:text-white transition">
            {t.contact}
          </a>
        </div>
      </div>

      <div className="md:w-1/2 flex justify-center">
        <img
          src={`${import.meta.env.BASE_URL}/images/avatar.png`}
          alt="Gonzalo Contaldo"
          className="rounded-full w-64 h-64 object-cover shadow-lg"
        />
      </div>
    </section>
  );
}
