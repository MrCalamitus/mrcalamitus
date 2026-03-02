"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Locale = "en" | "es"

const translations = {
  es: {
    "nav.about": "Sobre m\u00ed",
    "nav.projects": "Proyectos",
    "nav.experience": "Experiencia",
    "nav.skills": "Habilidades",
    "nav.contact": "Contacto",
    "hero.greeting": "Hola, soy",
    "hero.name": "Luis Alberto Ortiz Meza",
    "hero.role": "CTO & Co-fundador en ZOGA",
    "hero.subtitle":
      "+14 a\u00f1os construyendo soluciones digitales. Full-Stack Developer especializado en Node.js, Java, bases de datos y arquitectura cloud con AWS y Terraform.",
    "hero.contact": "Contactar",
    "hero.cv": "Descargar CV",
    "about.title": "Sobre m\u00ed",
    "about.p1":
      "Soy Luis Alberto Ortiz Meza, CTO y co-fundador de {link}, una empresa de desarrollo de software con 14 a\u00f1os de experiencia. Nos especializamos en desarrollo mobile, web, soluciones IT e integraci\u00f3n de IA para empresas.",
    "about.p2":
      "A lo largo de mi carrera he liderado equipos de desarrollo, dise\u00f1ado arquitecturas cloud en AWS con Terraform, y construido sistemas cr\u00edticos para sectores como gobierno, movilidad urbana, seguridad y educaci\u00f3n.",
    "about.p3":
      "Cuento con una Maestr\u00eda en Ciberseguridad y la certificaci\u00f3n AWS Cloud Practitioner. Me apasiona resolver problemas complejos con tecnolog\u00eda y crear productos que generen impacto real.",
    "about.location": "CDMX / M\u00e9rida, M\u00e9xico",
    "projects.title": "Proyectos Destacados",
    "projects.subtitle": "Algunos de los proyectos m\u00e1s relevantes en los que he trabajado.",
    "projects.seeCode": "Ver c\u00f3digo de {name}",
    "projects.seeLive": "Ver {name} en vivo",
    "experience.title": "Experiencia",
    "experience.present": "Presente",
    "skills.title": "Habilidades",
    "skills.backend": "Backend",
    "skills.databases": "Bases de Datos",
    "skills.cloud": "Cloud & DevOps",
    "skills.mobile": "Mobile & Frontend",
    "skills.leadership": "Liderazgo",
    "contact.title": "Contacto",
    "contact.subtitle": "\u00bfTienes un proyecto en mente? Me encantar\u00eda saber de ti.",
    "contact.email": "Correo electr\u00f3nico",
    "contact.linkedin": "LinkedIn",
    "contact.github": "GitHub",
    "footer.rights": "Todos los derechos reservados.",
  },
  en: {
    "nav.about": "About",
    "nav.projects": "Projects",
    "nav.experience": "Experience",
    "nav.skills": "Skills",
    "nav.contact": "Contact",
    "hero.greeting": "Hi, I\u2019m",
    "hero.name": "Luis Alberto Ortiz Meza",
    "hero.role": "CTO & Co-founder at ZOGA",
    "hero.subtitle":
      "+14 years building digital solutions. Full-Stack Developer specialized in Node.js, Java, databases and cloud architecture with AWS and Terraform.",
    "hero.contact": "Get in touch",
    "hero.cv": "Download CV",
    "about.title": "About me",
    "about.p1":
      "I\u2019m Luis Alberto Ortiz Meza, CTO and co-founder of {link}, a software development company with 14 years of experience. We specialize in mobile development, web solutions, IT infrastructure, and AI integration for businesses.",
    "about.p2":
      "Throughout my career I\u2019ve led development teams, designed cloud architectures on AWS with Terraform, and built mission-critical systems for sectors like government, urban mobility, security, and education.",
    "about.p3":
      "I hold a Master\u2019s degree in Cybersecurity and the AWS Cloud Practitioner certification. I\u2019m passionate about solving complex problems with technology and building products that create real impact.",
    "about.location": "Mexico City / Merida, Mexico",
    "projects.title": "Featured Projects",
    "projects.subtitle": "Some of the most relevant projects I\u2019ve worked on.",
    "projects.seeCode": "See {name} code",
    "projects.seeLive": "See {name} live",
    "experience.title": "Experience",
    "experience.present": "Present",
    "skills.title": "Skills",
    "skills.backend": "Backend",
    "skills.databases": "Databases",
    "skills.cloud": "Cloud & DevOps",
    "skills.mobile": "Mobile & Frontend",
    "skills.leadership": "Leadership",
    "contact.title": "Contact",
    "contact.subtitle": "Have a project in mind? I\u2019d love to hear from you.",
    "contact.email": "Email",
    "contact.linkedin": "LinkedIn",
    "contact.github": "GitHub",
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
