export default function Footer({ language = "es" }) {
 // Cambiá esto por props o contexto más adelante

  const texts = {
    es: {
      rights: "Todos los derechos reservados.",
      contact: "Contacto"
    },
    en: {
      rights: "All rights reserved.",
      contact: "Contact"
    }
  };

  const t = texts[language];

  return (
    <footer className="text-[#393e41] dark:text-white py-6 text-sm text-center border-t border-primary/10 dark:border-white/20 mt-20">
      <p className="mb-1">
        © {new Date().getFullYear()} Gonzalo Contaldo. {t.rights}
      </p>
      <div className="flex justify-center gap-4 text-primary dark:text-primary mt-2">
        <a
          href="https://github.com/gonzacontaldo"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          GitHub
        </a>
        <a href="#contact" className="hover:underline">
          {t.contact}
        </a>
      </div>
    </footer>
  );
}
