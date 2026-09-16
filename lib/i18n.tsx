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
    "hero.role": "Arquitecto de Soluciones | Cloud e IA Aplicada | L\u00edder T\u00e9cnico",
    "hero.subtitle":
      "M\u00e1s de 14 a\u00f1os construyendo software seguro y regulado en AWS. Cofundador y CTO de ZOGA. IA aplicada: RAG en AWS Bedrock, pipelines multiagente con LLM y visi\u00f3n por computadora.",
    "hero.contact": "Contactar",
    "hero.cv": "Descargar CV",
    "about.title": "Sobre m\u00ed",
    "about.p1":
      "Soy Luis Alberto Ortiz Meza, cofundador y CTO de {link} desde 2012, donde dirijo Certisep, el producto SaaS de ZOGA para emitir t\u00edtulos y certificados electr\u00f3nicos. Dise\u00f1o sistemas cloud seguros para entornos regulados y llevo la IA generativa del prototipo a producci\u00f3n.",
    "about.p2":
      "En paralelo, en proyectos de tecnolog\u00eda para gobierno por convenio del IPN (ESIME Culhuac\u00e1n), crec\u00ed de desarrollador a arquitecto cloud: auditor\u00edas de sistemas electorales para el INE, plataformas de regulaci\u00f3n sanitaria para COFEPRIS, una red notarial digital e IAPREP, un producto de IA que lee actas electorales.",
    "about.p3":
      "Soy Maestro en Ingenier\u00eda en Seguridad y Tecnolog\u00edas de la Informaci\u00f3n por el IPN. Dirijo equipos de hasta 5 personas y la adopci\u00f3n de IA en el flujo de desarrollo.",
    "about.location": "Ciudad de M\u00e9xico, M\u00e9xico",
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
    "skills.ai": "Inteligencia Artificial",
    "skills.security": "Seguridad",
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
    "hero.role": "Solutions Architect | Cloud & Applied AI | Tech Lead",
    "hero.subtitle":
      "14+ years building secure, regulated software on AWS. Co-founder & CTO at ZOGA. Applied AI: RAG on AWS Bedrock, multi-agent LLM pipelines and computer vision.",
    "hero.contact": "Get in touch",
    "hero.cv": "Download CV",
    "about.title": "About me",
    "about.p1":
      "I\u2019m Luis Alberto Ortiz Meza, co-founder and CTO of {link} since 2012, where I lead Certisep, ZOGA\u2019s SaaS product for electronic academic degrees and certificates. I design secure cloud systems for regulated environments and take generative AI from prototype to production.",
    "about.p2":
      "In parallel, on government technology projects under IPN (ESIME Culhuac\u00e1n) collaboration agreements, I grew from developer to cloud architect: electoral system audits for INE, health-regulation platforms for COFEPRIS, a digital notary network and IAPREP, an AI product that reads electoral tally sheets.",
    "about.p3":
      "I hold an M.Eng. in Information Security and Information Technologies from IPN. I lead teams of up to 5 engineers and the adoption of AI in the development workflow.",
    "about.location": "Mexico City, Mexico",
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
    "skills.ai": "Artificial Intelligence",
    "skills.frontend": "Frontend",
    "skills.security": "Security",
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
