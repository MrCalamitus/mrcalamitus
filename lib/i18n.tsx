"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Locale = "en" | "es"

const translations = {
  es: {
    // Nav
    "nav.about": "Sobre mí",
    "nav.ai": "IA en Producción",
    "nav.projects": "Proyectos",
    "nav.experience": "Experiencia",
    "nav.skills": "Habilidades",
    "nav.contact": "Contacto",
    // Hero
    "hero.greeting": "Hola, soy",
    "hero.name": "Luis Alberto Ortiz Meza",
    "hero.role": "Tech Leader · AI Strategist · CTO en ZOGA",
    "hero.subtitle":
      "14+ años construyendo y lanzando productos en industrias reguladas — gobierno, salud, educación, movilidad. Co-fundador y CTO en ZOGA. Ayudo a organizaciones a convertir IA de buzzword a sistemas en producción.",
    "hero.contact": "Hablemos",
    "hero.cv": "Descargar CV",
    "hero.availability": "Abierto a roles de liderazgo · Advisory · Remote-friendly",
    // About
    "about.title": "Sobre mí",
    "about.p1":
      "Soy Luis Alberto Ortiz Meza, co-fundador y CTO de {link}, donde lidero estrategia técnica, equipo y la integración de IA en productos para sectores regulados. En los últimos 3 años he enfocado mi trabajo en llevar IA generativa a producción: no demos, sino sistemas que sostienen operaciones reales.",
    "about.p2":
      "He liderado equipos multidisciplinarios, diseñado arquitecturas cloud sobre AWS con Terraform, y construido sistemas críticos para gobierno (COFEPRIS), educación superior, movilidad urbana y seguridad. Cofundé dos startups de movilidad (Upperbus, Rideupp) antes de consolidar ZOGA como plataforma de productos propios.",
    "about.p3":
      "Hoy busco roles de liderazgo donde pueda combinar 14 años de criterio técnico con estrategia de IA aplicada — Head of Engineering, Head of AI, VP Tech, o advisory. Maestría en Ciberseguridad. Basado en México, abierto a remoto global.",
    "about.location": "CDMX / Mérida, México",
    // AI in Production
    "ai.title": "IA en Producción",
    "ai.subtitle": "Cómo aplico IA hoy, no en teoría.",
    "ai.card1.title": "Productos en producción",
    "ai.card1.desc":
      "Iaprep y módulos de IA dentro de los productos de ZOGA. LLMs integrados para automatizar análisis, procesamiento de lenguaje natural y soporte a decisiones en sectores regulados.",
    "ai.card2.title": "Estrategia y arquitectura",
    "ai.card2.desc":
      "Diseño de pipelines de IA, procesos multiagénticos para automatizar tareas repetitivas, evaluación de modelos, y decisiones de build vs buy. Integración con Claude Code, modelos open-source, y orquestación de agentes.",
    "ai.card3.title": "Equipo y adopción",
    "ai.card3.desc":
      "Capacitación de equipos en herramientas de IA para multiplicar productividad. Definición de guardrails, governance, y procesos para que la IA escale sin perder control.",
    "ai.impact": "Reducción del 60% en tiempos de procesamiento documental y desarrollo de nuevos productos con IA.",
    // Projects
    "projects.title": "Proyectos Destacados",
    "projects.subtitle": "Algunos de los proyectos más relevantes en los que he trabajado.",
    "projects.seeCode": "Ver código de {name}",
    "projects.seeLive": "Ver {name} en vivo",
    // Experience
    "experience.title": "Experiencia",
    "experience.present": "Presente",
    // Skills
    "skills.title": "Habilidades",
    "skills.leadership": "Liderazgo y Estrategia",
    "skills.ai": "IA y ML Aplicado",
    "skills.architecture": "Arquitectura y Cloud",
    "skills.security": "Seguridad y Compliance",
    "skills.engineering": "Ingeniería",
    // Contact
    "contact.title": "Contacto",
    "contact.subtitle": "Abierto a roles de liderazgo, engagements de advisory, y conversaciones sobre IA aplicada.",
    "contact.email": "Correo electrónico",
    "contact.linkedin": "LinkedIn",
    "contact.github": "GitHub",
    "contact.location": "Ciudad de México / Mérida · Abierto a remoto global",
    // Footer
    "footer.rights": "Todos los derechos reservados.",
  },
  en: {
    // Nav
    "nav.about": "About",
    "nav.ai": "AI in Production",
    "nav.projects": "Projects",
    "nav.experience": "Experience",
    "nav.skills": "Skills",
    "nav.contact": "Contact",
    // Hero
    "hero.greeting": "Hi, I'm",
    "hero.name": "Luis Alberto Ortiz Meza",
    "hero.role": "Tech Leader · AI Strategist · CTO at ZOGA",
    "hero.subtitle":
      "14+ years building and shipping products in regulated industries — government, healthcare, education, mobility. Co-founder & CTO at ZOGA. I help organizations turn AI from buzzword into systems in production.",
    "hero.contact": "Let's talk",
    "hero.cv": "Download CV",
    "hero.availability": "Open to leadership roles · Advisory · Remote-friendly",
    // About
    "about.title": "About me",
    "about.p1":
      "I'm Luis Alberto Ortiz Meza, co-founder and CTO of {link}, where I lead technical strategy, team, and AI integration in products for regulated sectors. In the past 3 years I've focused on bringing generative AI to production: not demos, but systems that sustain real operations.",
    "about.p2":
      "I've led multidisciplinary teams, designed cloud architectures on AWS with Terraform, and built mission-critical systems for government (COFEPRIS), higher education, urban mobility, and security. I co-founded two mobility startups (Upperbus, Rideupp) before consolidating ZOGA as a platform for our own products.",
    "about.p3":
      "Today I'm looking for leadership roles where I can combine 14 years of technical judgment with applied AI strategy — Head of Engineering, Head of AI, VP Tech, or advisory. Master's in Cybersecurity. Based in Mexico, open to global remote.",
    "about.location": "Mexico City / Merida, Mexico",
    // AI in Production
    "ai.title": "AI in Production",
    "ai.subtitle": "How I apply AI today, not in theory.",
    "ai.card1.title": "Products in production",
    "ai.card1.desc":
      "Iaprep and AI modules within ZOGA products. LLMs integrated to automate analysis, natural language processing, and decision support in regulated sectors.",
    "ai.card2.title": "Strategy and architecture",
    "ai.card2.desc":
      "Design of AI pipelines, multi-agent processes to automate repetitive tasks, model evaluation, and build vs buy decisions. Integration with Claude Code, open-source models, and agent orchestration.",
    "ai.card3.title": "Team and adoption",
    "ai.card3.desc":
      "Training teams in AI tools to multiply productivity. Definition of guardrails, governance, and processes so AI scales without losing control.",
    "ai.impact": "60% reduction in document processing time and development of new AI-powered products.",
    // Projects
    "projects.title": "Featured Projects",
    "projects.subtitle": "Some of the most relevant projects I've worked on.",
    "projects.seeCode": "See {name} code",
    "projects.seeLive": "See {name} live",
    // Experience
    "experience.title": "Experience",
    "experience.present": "Present",
    // Skills
    "skills.title": "Skills",
    "skills.leadership": "Leadership & Strategy",
    "skills.ai": "AI & Applied ML",
    "skills.architecture": "Architecture & Cloud",
    "skills.security": "Security & Compliance",
    "skills.engineering": "Engineering",
    // Contact
    "contact.title": "Contact",
    "contact.subtitle": "Open to leadership roles, advisory engagements, and conversations about applied AI.",
    "contact.email": "Email",
    "contact.linkedin": "LinkedIn",
    "contact.github": "GitHub",
    "contact.location": "Mexico City / Merida · Open to remote globally",
    // Footer
    "footer.rights": "All rights reserved.",
  },
} as const

type TranslationKey = keyof (typeof translations)["en"]

interface I18nContextType {
  locale: Locale
  setLocale: (l: Locale) => void
  t: (key: TranslationKey) => string
}

const I18nContext = createContext<I18nContextType>({
  locale: "en",
  setLocale: () => {},
  t: (key: string) => key,
})

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("en")

  const t = (key: TranslationKey): string => {
    const dict = translations[locale]
    if (dict && key in dict) {
      return dict[key as keyof typeof dict]
    }
    return key
  }

  return <I18nContext.Provider value={{ locale, setLocale, t }}>{children}</I18nContext.Provider>
}

export function useI18n() {
  return useContext(I18nContext)
}
