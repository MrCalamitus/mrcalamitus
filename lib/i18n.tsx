"use client"

import { createContext, useContext, useState, useCallback, type ReactNode } from "react"

type Locale = "es" | "en"

interface I18nContextType {
  locale: Locale
  t: (key: string) => string
  toggleLocale: () => void
}

const translations: Record<Locale, Record<string, string>> = {
  es: {
    // Nav
    "nav.about": "Sobre m\u00ed",
    "nav.projects": "Proyectos",
    "nav.experience": "Experiencia",
    "nav.skills": "Habilidades",
    "nav.contact": "Contacto",
    "nav.openMenu": "Abrir men\u00fa",
    "nav.closeMenu": "Cerrar men\u00fa",

    // Hero
    "hero.role": "CTO & Solution Architect en ZOGA",
    "hero.name": "Luis Alberto Ortiz Meza",
    "hero.description":
      "+15 a\u00f1os construyendo soluciones digitales. Full-Stack Developer especializado en Node.js, Java, bases de datos y arquitectura cloud con AWS y Terraform.",
    "hero.downloadCv": "Descargar CV",
    "hero.presentation": "Presentaci\u00f3n",
    "hero.goToNext": "Ir a la siguiente secci\u00f3n",
    "hero.srText":
      "Luis Alberto Ortiz Meza es un CTO, Solution Architect y Full-Stack Developer con m\u00e1s de 15 a\u00f1os de experiencia profesional. Co-fundador de ZOGA mobile & IT, una empresa de desarrollo de software en M\u00e9xico. Tecnolog\u00edas principales: Node.js, Express.js, Java, JavaScript, TypeScript, NativeScript, MySQL, Firebase, Firestore, Oracle Database, Amazon Web Services (AWS), Terraform, Docker, CI/CD, Linux, REST APIs, Microservices, OpenAI, LLM, RAG, Security by Design. Certificaci\u00f3n: AWS Cloud Practitioner. Maestr\u00eda en Ciberseguridad. Ubicaci\u00f3n: CDMX / M\u00e9rida, M\u00e9xico. Disponible para oportunidades remotas e h\u00edbridas.",

    // About
    "about.title": "Sobre m\u00ed",
    "about.label": "Sobre m\u00ed",
    "about.p1":
      "Soy Luis Alberto Ortiz Meza, CTO y co-fundador de {link}, una empresa de desarrollo de software con 14 a\u00f1os de experiencia. Nos especializamos en desarrollo mobile, web, soluciones IT e integraci\u00f3n de IA para empresas.",
    "about.p2":
      "Mi stack principal gira en torno a {nodejs} y {express} para backend, {java} para servicios empresariales, y bases de datos como {mysql}, {firebase} y {oracle}. En infraestructura trabajo con {aws} (cuento con la certificaci\u00f3n {awsCert}) y gestiono la infraestructura como c\u00f3digo con {terraform}. Adem\u00e1s, integro soluciones de IA con {openai} y t\u00e9cnicas de {rag}.",
    "about.p3":
      "Cuento con una Maestr\u00eda en Ciberseguridad y aplico principios de Security by Design en cada proyecto. En ZOGA he liderado productos como Certisep (Legal-Tech), D\u00edgipris (GovTech) e Iaprep (Ed-Tech/IA), adem\u00e1s de co-fundar startups de movilidad como Upperbus y Rideupp.",

    // Projects
    "projects.title": "Proyectos",
    "projects.label": "Proyectos destacados",
    "projects.certisep.title": "Certisep",
    "projects.certisep.subtitle": "SaaS / Legal-Tech",
    "projects.certisep.description":
      "Sistema integral para generaci\u00f3n, validaci\u00f3n y gesti\u00f3n de t\u00edtulos y certificados electr\u00f3nicos para IPES. Cumplimiento regulatorio y ciberseguridad avanzada.",
    "projects.digipris.title": "D\u00edgipris",
    "projects.digipris.subtitle": "GovTech / Regulaci\u00f3n Sanitaria",
    "projects.digipris.description":
      "Plataforma de regulaci\u00f3n sanitaria en l\u00ednea vinculada con COFEPRIS. Digitalizaci\u00f3n de tr\u00e1mites y cumplimiento normativo para el sector salud.",
    "projects.iaprep.title": "Iaprep",
    "projects.iaprep.subtitle": "Ed-Tech / IA",
    "projects.iaprep.description":
      "Plataforma potenciada por IA con capacidades avanzadas de an\u00e1lisis, procesamiento de lenguaje natural y aprendizaje autom\u00e1tico.",
    "projects.upperbus.title": "Upperbus",
    "projects.upperbus.subtitle": "Movilidad Colectiva",
    "projects.upperbus.description":
      "Co-fundador. Plataforma de transporte colectivo bajo demanda. Liderazgo de producto, desarrollo de comunidad y operaci\u00f3n en ciudad.",
    "projects.seeCode": "Ver c\u00f3digo de {name} en GitHub",
    "projects.seeDemo": "Ver demo de {name}",

    // Experience
    "experience.title": "Experiencia",
    "experience.label": "Experiencia profesional",
    "experience.zoga.period": "2011 \u2014 Presente",
    "experience.zoga.role": "CTO, Co-fundador & Solution Architect",
    "experience.zoga.company": "ZOGA mobile & IT",
    "experience.zoga.description":
      "Co-fundador en ZOGA. Lidero la visi\u00f3n t\u00e9cnica, la arquitectura de soluciones y el equipo de desarrollo. Dise\u00f1o e implemento sistemas de gran escala con enfoque en la convergencia de Software, Hardware e IA. Gesti\u00f3n de infraestructura cloud en AWS con Terraform, desarrollo full-stack con Node.js, Java, MySQL, Firebase y Oracle. Productos liderados: Certisep, D\u00edgipris, Iaprep.",
    "experience.startups.period": "2013 \u2014 2017",
    "experience.startups.role": "Co-fundador & Tech Lead",
    "experience.startups.company": "Upperbus & Rideupp",
    "experience.startups.description":
      "Co-fundador dos startups de movilidad urbana. Liderazgo de producto, desarrollo de comunidad, gesti\u00f3n de equipos multidisciplinarios, iteraci\u00f3n \u00e1gil y adaptaci\u00f3n a regulaciones locales. Experiencia real navegando incertidumbre y pivoting estrat\u00e9gico.",
    "experience.freelance.period": "2009 \u2014 2011",
    "experience.freelance.role": "Full-Stack Developer",
    "experience.freelance.company": "Freelance / Proyectos Independientes",
    "experience.freelance.description":
      "Desarroll\u00e9 proyectos web y aplicaciones a medida para diversos clientes. Constru\u00ed APIs, integr\u00e9 servicios de terceros y gan\u00e9 experiencia en m\u00faltiples tecnolog\u00edas que posteriormente apliqu\u00e9 en la creaci\u00f3n de ZOGA.",

    // Skills
    "skills.title": "Habilidades",
    "skills.label": "Habilidades t\u00e9cnicas y certificaciones",
    "skills.backend": "Backend",
    "skills.databases": "Bases de Datos",
    "skills.cloud": "Cloud & DevOps",
    "skills.ai": "IA & Datos",
    "skills.leadership": "Liderazgo",
    "skills.certifications": "Certificaciones",
    "skills.education": "Educaci\u00f3n",

    // Contact
    "contact.title": "Contacto",
    "contact.headline": "Hablemos de tu pr\u00f3ximo proyecto. Disponible para consultor\u00eda, desarrollo y colaboraciones.",
    "contact.email": "Email",
    "contact.location": "Ubicaci\u00f3n",
    "contact.locationValue": "CDMX / M\u00e9rida, M\u00e9xico",

    // Footer
    "footer.rights": "Todos los derechos reservados.",
    "footer.madeWith": "Hecho con Next.js y Tailwind CSS",
  },
  en: {
    // Nav
    "nav.about": "About",
    "nav.projects": "Projects",
    "nav.experience": "Experience",
    "nav.skills": "Skills",
    "nav.contact": "Contact",
    "nav.openMenu": "Open menu",
    "nav.closeMenu": "Close menu",

    // Hero
    "hero.role": "CTO & Solution Architect at ZOGA",
    "hero.name": "Luis Alberto Ortiz Meza",
    "hero.description":
      "15+ years building digital solutions. Full-Stack Developer specialized in Node.js, Java, databases, and cloud architecture with AWS & Terraform.",
    "hero.downloadCv": "Download CV",
    "hero.presentation": "Introduction",
    "hero.goToNext": "Go to next section",
    "hero.srText":
      "Luis Alberto Ortiz Meza is a CTO, Solution Architect, and Full-Stack Developer with over 15 years of professional experience. Co-founder of ZOGA mobile & IT, a software development company in Mexico. Core technologies: Node.js, Express.js, Java, JavaScript, TypeScript, NativeScript, MySQL, Firebase, Firestore, Oracle Database, Amazon Web Services (AWS), Terraform, Docker, CI/CD, Linux, REST APIs, Microservices, OpenAI, LLM, RAG, Security by Design. Certification: AWS Cloud Practitioner. Master\u2019s in Cybersecurity. Location: Mexico City / Merida, Mexico. Available for remote and hybrid opportunities.",

    // About
    "about.title": "About Me",
    "about.label": "About me",
    "about.p1":
      "I\u2019m Luis Alberto Ortiz Meza, CTO and co-founder of {link}, a software development company with 14 years of experience. We specialize in mobile development, web solutions, IT infrastructure, and AI integration for businesses.",
    "about.p2":
      "My core stack revolves around {nodejs} and {express} for backend, {java} for enterprise services, and databases like {mysql}, {firebase}, and {oracle}. For infrastructure, I work with {aws} (holding the {awsCert} certification) and manage infrastructure as code with {terraform}. I also integrate AI solutions using {openai} and {rag} techniques.",
    "about.p3":
      "I hold a Master\u2019s in Cybersecurity and apply Security by Design principles in every project. At ZOGA I\u2019ve led products like Certisep (Legal-Tech), D\u00edgipris (GovTech), and Iaprep (Ed-Tech/AI), as well as co-founded mobility startups Upperbus and Rideupp.",

    // Projects
    "projects.title": "Projects",
    "projects.label": "Featured projects",
    "projects.certisep.title": "Certisep",
    "projects.certisep.subtitle": "SaaS / Legal-Tech",
    "projects.certisep.description":
      "Comprehensive system for generating, validating, and managing electronic titles and certificates for higher education institutions. Advanced regulatory compliance and cybersecurity.",
    "projects.digipris.title": "D\u00edgipris",
    "projects.digipris.subtitle": "GovTech / Health Regulation",
    "projects.digipris.description":
      "Online health regulation platform linked with COFEPRIS. Digitization of procedures and regulatory compliance for the healthcare sector.",
    "projects.iaprep.title": "Iaprep",
    "projects.iaprep.subtitle": "Ed-Tech / AI",
    "projects.iaprep.description":
      "AI-powered platform with advanced analysis capabilities, natural language processing, and machine learning.",
    "projects.upperbus.title": "Upperbus-Rideupp",
    "projects.upperbus.subtitle": "Collective Mobility",
    "projects.upperbus.description":
      "Co-founder. On-demand collective transportation platform. Product leadership, community building, and city operations.",
    "projects.seeCode": "See {name} code on GitHub",
    "projects.seeDemo": "See {name} demo",

    // Experience
    "experience.title": "Experience",
    "experience.label": "Professional experience",
    "experience.zoga.period": "2011 \u2014 Present",
    "experience.zoga.role": "CTO, Co-founder & Solution Architect",
    "experience.zoga.company": "ZOGA mobile & IT",
    "experience.zoga.description":
      "Co-founded ZOGA with a friend. I lead the technical vision, solution architecture, and development team. Design and implement large-scale systems focused on the convergence of Software, Hardware, and AI. Cloud infrastructure management on AWS with Terraform, full-stack development with Node.js, Java, MySQL, Firebase, and Oracle. Products led: Certisep, D\u00edgipris, Iaprep.",
    "experience.startups.period": "2013 \u2014 2017",
    "experience.startups.role": "Co-founder & Tech Lead",
    "experience.startups.company": "Upperbus & Rideupp",
    "experience.startups.description":
      "Co-founded two urban mobility startups. Product leadership, community development, multidisciplinary team management, agile iteration, and adaptation to local regulations. Real-world experience navigating uncertainty and strategic pivoting.",
    "experience.freelance.period": "2009 \u2014 2011",
    "experience.freelance.role": "Full-Stack Developer",
    "experience.freelance.company": "Freelance / Independent Projects",
    "experience.freelance.description":
      "Developed custom web projects and applications for various clients. Built APIs, integrated third-party services, and gained experience in multiple technologies later applied in creating ZOGA.",

    // Skills
    "skills.title": "Skills",
    "skills.label": "Technical skills and certifications",
    "skills.backend": "Backend",
    "skills.databases": "Databases",
    "skills.cloud": "Cloud & DevOps",
    "skills.ai": "AI & Data",
    "skills.leadership": "Leadership",
    "skills.certifications": "Certifications",
    "skills.education": "Education",

    // Contact
    "contact.title": "Contact",
    "contact.headline": "Let\u2019s talk about your next project. Available for consulting, development, and collaborations.",
    "contact.email": "Email",
    "contact.location": "Location",
    "contact.locationValue": "Mexico City / Merida, Mexico",

    // Footer
    "footer.rights": "All rights reserved.",
    "footer.madeWith": "Built with Next.js and Tailwind CSS",
  },
}

const I18nContext = createContext<I18nContextType | undefined>(undefined)

export function I18nProvider({ children }: { children: ReactNode }) {
  console.log("[v0] I18nProvider mounting")
  const [locale, setLocale] = useState<Locale>("en")

  const toggleLocale = useCallback(() => {
    setLocale((prev) => (prev === "es" ? "en" : "es"))
  }, [])

  const t = useCallback(
    (key: string): string => {
      const dict = translations[locale]
      if (dict && typeof dict[key] === "string") {
        return dict[key]
      }
      return key
    },
    [locale]
  )

  return (
    <I18nContext.Provider value={{ locale, t, toggleLocale }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n(): I18nContextType {
  const context = useContext(I18nContext)
  if (!context) {
    throw new Error("useI18n must be used within an I18nProvider")
  }
  return context
}
