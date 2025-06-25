import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ParticlesContainer from "./components/Particles";

export default function App() {
  // Idioma y tema inicial desde localStorage
  const [language, setLanguage] = useState(() => localStorage.getItem("language") || "es");
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem("theme") === "dark");


  // Sincroniza el modo oscuro con Tailwind
  useEffect(() => {
  const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);


  return (
    <div className="relative z-0 bg-background dark:bg-[#090A16]">
      <ParticlesContainer />

      <Navbar
        language={language}
        onLanguageChange={setLanguage}
        darkMode={darkMode}
        onToggleDarkMode={() => setDarkMode(prev => !prev)}
      />


      <main className="relative z-10">
        <Hero language={language} />
        <About language={language} />
        <Projects language={language} />
        <Contact language={language} />
        <Footer language={language} />
      </main>
    </div>
  );
}
