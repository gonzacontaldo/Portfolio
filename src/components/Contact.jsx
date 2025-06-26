import { useState } from "react";

export default function Contact({ language = "es" }) {
  const [submitted, setSubmitted] = useState(false); // Cambiá esto por props o contexto después

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const data = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value,
    };

    const response = await fetch("https://formspree.io/f/xvgrvweb", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      setSubmitted(true);
      form.reset();
    }
  };

  const texts = {
    es: {
      title: "Contáctame",
      success: "¡Gracias por tu mensaje! Te responderé pronto.",
      name: "Nombre",
      email: "Email",
      message: "Mensaje",
      placeholderName: "Tu nombre",
      placeholderEmail: "tucorreo@ejemplo.com",
      placeholderMessage: "Escribime tu consulta o mensaje",
      button: "Enviar mensaje",
    },
    en: {
      title: "Contact Me",
      success: "Thanks for your message! I’ll get back to you soon.",
      name: "Name",
      email: "Email",
      message: "Message",
      placeholderName: "Your name",
      placeholderEmail: "your@email.com",
      placeholderMessage: "Write your message or inquiry",
      button: "Send Message",
    },
  };

  const t = texts[language];

  return (
    <section id="contacto" className="py-24 px-6 md:px-24 text-[#393e41] dark:text-white">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-primary">{t.title}</h2>

      {submitted ? (
        <p className="text-center text-lg text-primary font-medium bg-white dark:bg-white/10 shadow-lg p-6 rounded-lg">
          {t.success}
        </p>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto bg-white dark:bg-white/5 shadow-xl rounded-xl px-8 py-10 space-y-6 border border-primary/10 dark:border-white/20"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label htmlFor="name" className="mb-2 text-sm font-medium text-primary">
                {t.name}
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder={t.placeholderName}
                className="px-4 py-3 rounded-lg border border-gray-300 dark:border-white/20 dark:bg-transparent dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/60 transition-shadow"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="mb-2 text-sm font-medium text-primary">
                {t.email}
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder={t.placeholderEmail}
                className="px-4 py-3 rounded-lg border border-gray-300 dark:border-white/20 dark:bg-transparent dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/60 transition-shadow"
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label htmlFor="message" className="mb-2 text-sm font-medium text-primary">
              {t.message}
            </label>
            <textarea
              name="message"
              rows="5"
              required
              placeholder={t.placeholderMessage}
              className="px-4 py-3 rounded-lg border border-gray-300 dark:border-white/20 dark:bg-transparent dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/60 transition-shadow resize-none"
            ></textarea>
          </div>

          <div className="text-center pt-4">
            <button
              type="submit"
              className="bg-primary text-white px-8 py-3 rounded-full shadow-md hover:bg-opacity-90 hover:shadow-lg transition transform hover:scale-105"
            >
              {t.button}
            </button>
          </div>
        </form>
      )}
    </section>
  );
}
