import type { Translation } from "./types";

export const translations: Record<"EN" | "ES", Translation> = {
  EN: {
    nav: {
      hero: "Hero",
      skills: "Skills",
      timeline: "Timeline",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      greeting: "Mauricio Santos",
      role: "Electronic Engineer | FullStack | AI",
      description:
        "Building high-performance digital ecosystems with a focus on futuristic aesthetics and robotic precision. Specialist in React, Node.js, and AI integration.",
      downLoadCV: "Download CV",
    },
    skills: {
      title: "Skills Matrix",
      technical: "Hardcoded Assets",
      soft: "Soft Skills",
    },
    timeline: {
      title: "Timeline",
    },
    projects: {
      title: "Projects",
      viewCode: "Source Code",
      pageUrl: "Live Demo",
    },
    contact: {
      title: "Let's Talk",
      description:
        "Feel free to reach out for collaborations or just a friendly hello!",
      name: "Name",
      email: "Email",
      message: "Message",
      send: "Contact",
    },
    footer: {
      backToTop: "Return to Root",
    },
  },
  ES: {
    nav: {
      hero: "Hero",
      skills: "Habilidades",
      timeline: "Experiencia",
      projects: "Proyectos",
      contact: "Contacto",
    },
    hero: {
      greeting: "Mauricio Santos",
      role: "Ingeniero Electronico | FullStack | IA",
      description:
        "Construyendo ecosistemas digitales de alto rendimiento con enfoque en estética futurista y precisión robótica. Especialista en React, Node.js e integración de IA.",
      downLoadCV: "Descargar CV",
    },
    skills: {
      title: "Matriz de Habilidades",
      technical: "Técnicas",
      soft: "Blandas",
    },
    timeline: {
      title: "Experiencia",
    },
    projects: {
      title: "Proyectos",
      viewCode: "Código Fuente",
      pageUrl: "Demo",
    },
    contact: {
      title: "Hablemos",
      description:
        "No dudes en contactarme para colaboraciones o simplemente un saludo amistoso.",
      name: "Nombre",
      email: "Email",
      message: "Mensaje",
      send: "Contactar",
    },
    footer: {
      backToTop: "Volver al Inicio",
    },
  },
};
