import { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { MdLanguage } from "react-icons/md";

const texts = {
  es: {
    Inicio: "Inicio",
    "Sobre mí": "Sobre mí",
    Proyectos: "Proyectos",
    Contacto: "Contacto",
    languageLabel: "EN",
  },
  en: {
    Inicio: "Home",
    "Sobre mí": "About",
    Proyectos: "Projects",
    Contacto: "Contact",
    languageLabel: "ES",
  },
};

const links = ["Inicio", "Sobre mí", "Proyectos", "Contacto"].map((name) => ({
  name,
  href: `${import.meta.env.BASE_URL}#${name.toLowerCase().replace(" ", "")}`,
}));

export default function Navbar({
  language = "es",
  onLanguageChange = () => {},
  darkMode,
  onToggleDarkMode,
}) {
  const [active, setActive] = useState("#home");

  // Scroll spy
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      links.forEach((link) => {
        const section = document.querySelector(link.href);
        if (
          section &&
          scrollY >= section.offsetTop - 80 &&
          scrollY < section.offsetTop + section.offsetHeight - 80
        ) {
          setActive(link.href);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleLanguage = () => {
    const newLang = language === "es" ? "en" : "es";
    localStorage.setItem("language", newLang);
    onLanguageChange(newLang);
  };

  const t = texts[language];

  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full px-6 py-2 z-50 shadow-md dark:bg-[#090A16]/70 dark:text-white">
      <ul className="flex gap-6 text-sm font-medium items-center">
        {links.map((link) => (
          <li key={link.href} className="relative group">
            <a
              href={link.href}
              className={`transition-colors duration-300 ${
                active === link.href ? "text-primary" : "hover:text-primary"
              }`}
            >
              {t[link.name]}
            </a>
            <span
              className={`absolute left-0 -bottom-1 h-[2px] bg-primary rounded-full transition-all duration-300 ${
                active === link.href
                  ? "w-full opacity-100"
                  : "w-0 group-hover:w-full opacity-50"
              }`}
            ></span>
          </li>
        ))}

        {/* Botón modo oscuro */}
        <li>
          <button
            onClick={onToggleDarkMode}
            className="text-primary hover:text-dark dark:hover:text-white transition text-lg"
            aria-label="Modo claro/oscuro"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </li>

        {/* Botón idioma */}
        <li>
          <button
            onClick={toggleLanguage}
            className="text-primary hover:text-dark dark:hover:text-white transition text-lg"
            style={{ display: "flex", alignItems: "center", gap: "4px" }}
          >
            <MdLanguage />
            {t.languageLabel}
          </button>
        </li>
      </ul>
    </nav>
  );
}
