"use client"

import { useI18n } from "@/lib/i18n"

const experiences = [
  {
    periodEs: "2011 — Presente",
    periodEn: "2011 — Present",
    titleEs: "Co-fundador, CTO & Head of AI",
    titleEn: "Co-founder, CTO & Head of AI",
    company: "ZOGA mobile & IT",
    companyUrl: "https://zoga.com.mx",
    descEs:
      "Co-fundé ZOGA y lidero la estrategia técnica, el equipo de ingeniería y la apuesta de IA aplicada de la compañía. Diseño arquitecturas cloud sobre AWS con Terraform y dirijo el desarrollo de productos propios en sectores regulados (gobierno, salud, educación). En los últimos 3 años, he liderado la transición de la empresa hacia IA aplicada: integración de LLMs en productos, frameworks internos de adopción y criterios de governance. Productos liderados: Certisep (SaaS de títulos electrónicos para educación), Iaprep (predicción de números escritos a mano con IA).",
    descEn:
      "Co-founded ZOGA and lead the technical strategy, engineering team, and the company's applied AI initiative. I design cloud architectures on AWS with Terraform and direct the development of our own products in regulated sectors (government, health, education). In the last 3 years, I've led the company's transition toward applied AI: LLM integration in products, internal adoption frameworks, and governance criteria. Products led: Certisep (electronic degree SaaS for education), Iaprep (AI-powered handwritten number prediction).",
    tags: ["AI Strategy", "LLMs", "Engineering Leadership", "Cloud Architecture", "AWS", "Terraform", "Node.js", "Python"],
  },
  {
    periodEs: "2013 — 2017",
    periodEn: "2013 — 2017",
    titleEs: "Co-fundador & Product Lead",
    titleEn: "Co-founder & Product Lead",
    company: "Upperbus & Rideupp",
    companyUrl: "",
    descEs:
      "Co-fundé dos startups de movilidad urbana. Liderazgo de producto, desarrollo de comunidad, gestión de equipos multidisciplinarios, iteración ágil y adaptación a regulaciones locales. Experiencia real navegando la incertidumbre y el pivoteo estratégico.",
    descEn:
      "Co-founded two urban mobility startups. Product leadership, community development, multidisciplinary team management, agile iteration, and adaptation to local regulations. Real-world experience navigating uncertainty and strategic pivoting.",
    tags: ["Co-founder", "Product Leadership", "Operations", "Strategy"],
  },
  {
    periodEs: "2009 — 2011",
    periodEn: "2009 — 2011",
    titleEs: "Full-Stack Developer",
    titleEn: "Full-Stack Developer",
    company: "Freelance",
    companyUrl: "",
    descEs:
      "Desarrollo de aplicaciones web y sistemas a la medida para diversos clientes. Implementación de APIs REST, diseño de bases de datos y despliegues en servidores Linux.",
    descEn:
      "Developed custom web projects and applications for various clients. Built APIs, integrated third-party services, and gained experience in multiple technologies later applied in creating ZOGA.",
    tags: ["Java", "MySQL", "Linux", "REST APIs"],
  },
]

export function Experience() {
  const { locale, t } = useI18n()

  return (
    <section id="experience" className="bg-secondary px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-2xl font-bold tracking-tight text-foreground">
          {t("experience.title")}
        </h2>
        <div className="mt-10 space-y-10">
          {experiences.map((exp, i) => {
            const period = locale === "es" ? exp.periodEs : exp.periodEn
            const title = locale === "es" ? exp.titleEs : exp.titleEn
            const desc = locale === "es" ? exp.descEs : exp.descEn
            return (
              <div key={i} className="relative border-l-2 border-border pl-6">
                <div className="absolute -left-[7px] top-1.5 h-3 w-3 rounded-full border-2 border-accent bg-background" />
                <p className="text-xs font-medium text-accent">{period}</p>
                <h3 className="mt-1 text-lg font-semibold text-foreground">{title}</h3>
                {exp.companyUrl ? (
                  <a
                    href={exp.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-accent underline underline-offset-4"
                  >
                    {exp.company}
                  </a>
                ) : (
                  <p className="text-sm font-medium text-muted-foreground">{exp.company}</p>
                )}
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-card px-3 py-1 text-xs font-medium text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
