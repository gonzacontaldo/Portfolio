import { useCallback, useEffect, useState } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

export default function ParticlesContainer() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const particlesInit = useCallback(async engine => {
    await loadSlim(engine);
  }, []);

  // Detecta cambios de clase en <html>
  useEffect(() => {
    const checkTheme = () => {
      setIsDarkMode(document.documentElement.classList.contains("dark"));
    };

    // Run once at mount
    checkTheme();

    // Observador por si cambia dinámicamente
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: {
          enable: true,
          zIndex: -1,
        },
        background: {
          color: {
            value: isDarkMode ? "#090A16" : "#f6f7eb",
          },
        },
        particles: {
          color: {
            value: "#e94f37",
          },
          links: {
            color: "#e94f37",
            distance: 150,
            enable: true,
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: true,
            speed: 2,
          },
          number: {
            value: 50,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 3 },
          },
        },
        detectRetina: true,
      }}
    />
  );
}
