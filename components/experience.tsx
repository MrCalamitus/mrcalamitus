"use client"

import { useI18n } from "@/lib/i18n"

const experiences = [
  {
    periodEs: "2011 \u2014 Presente",
    periodEn: "2011 \u2014 Present",
    titleEs: "CTO, Co-fundador & Solution Architect",
    titleEn: "CTO, Co-founder & Solution Architect",
    company: "ZOGA mobile & IT",
    companyUrl: "https://zoga.com.mx",
    descEs:
      "Co-fund\u00e9 ZOGA con un amigo. Lidero la visi\u00f3n t\u00e9cnica, la arquitectura de soluciones y el equipo de desarrollo. Dise\u00f1o e implemento sistemas a gran escala enfocados en la convergencia de Software, Hardware e IA. Gesti\u00f3n de infraestructura cloud en AWS con Terraform, desarrollo full-stack con Node.js, Java, MySQL, Firebase y Oracle. Productos liderados: Certisep, D\u00edgipris, Iaprep.",
    descEn:
      "Co-founded ZOGA with a friend. I lead the technical vision, solution architecture, and development team. Design and implement large-scale systems focused on the convergence of Software, Hardware, and AI. Cloud infrastructure management on AWS with Terraform, full-stack development with Node.js, Java, MySQL, Firebase, and Oracle. Products led: Certisep, D\u00edgipris, Iaprep.",
    tags: ["Node.js", "Java", "MySQL", "Firebase", "Oracle", "AWS", "Terraform", "Docker", "OpenAI"],
  },
  {
    periodEs: "2013 \u2014 2017",
    periodEn: "2013 \u2014 2017",
    titleEs: "Co-fundador & Tech Lead",
    titleEn: "Co-founder & Tech Lead",
    company: "Upperbus & Rideupp",
    companyUrl: "",
    descEs:
      "Co-fund\u00e9 dos startups de movilidad urbana. Liderazgo de producto, desarrollo de comunidad, gesti\u00f3n de equipos multidisciplinarios, iteraci\u00f3n \u00e1gil y adaptaci\u00f3n a regulaciones locales. Experiencia real navegando la incertidumbre y el pivoteo estrat\u00e9gico.",
    descEn:
      "Co-founded two urban mobility startups. Product leadership, community development, multidisciplinary team management, agile iteration, and adaptation to local regulations. Real-world experience navigating uncertainty and strategic pivoting.",
    tags: ["NativeScript", "Node.js", "Firebase", "Product Leadership"],
  },
  {
    periodEs: "2009 \u2014 2011",
    periodEn: "2009 \u2014 2011",
    titleEs: "Full-Stack Developer",
    titleEn: "Full-Stack Developer",
    company: "Freelance",
    companyUrl: "",
    descEs:
      "Desarrollo de aplicaciones web y sistemas a la medida para diversos clientes. Implementaci\u00f3n de APIs REST, dise\u00f1o de bases de datos y despliegues en servidores Linux.",
    descEn:
      "Developed custom web projects and applications for various clients. Built APIs, integrated third-party services, and gained experience in multiple technologies later applied in creating ZOGA.",
    tags: ["Java", "Flash", "MySQL", "Linux", "REST APIs"],
  },
]

export function Experience() {
  const { locale, t } = useI18n()

  return (
    <section id="experience" className="px-6 py-24">
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
                      className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground"
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
