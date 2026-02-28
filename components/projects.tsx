"use client"

import { Github, ExternalLink } from "lucide-react"
import { useI18n } from "@/lib/i18n"

const projects = [
  {
    titleEs: "Certisep",
    titleEn: "Certisep",
    categoryEs: "SaaS / Legal-Tech",
    categoryEn: "SaaS / Legal-Tech",
    descEs: "Sistema integral para la generaci\u00f3n, validaci\u00f3n y gesti\u00f3n de t\u00edtulos y c\u00e9dulas electr\u00f3nicas para instituciones de educaci\u00f3n superior. Cumplimiento regulatorio avanzado y ciberseguridad.",
    descEn: "Comprehensive system for generating, validating, and managing electronic titles and certificates for higher education institutions. Advanced regulatory compliance and cybersecurity.",
    tags: ["Node.js", "MySQL", "AWS", "Firebase", "Security by Design"],
    github: "",
    live: "",
  },
  {
    titleEs: "D\u00edgipris",
    titleEn: "D\u00edgipris",
    categoryEs: "GovTech / Regulaci\u00f3n Sanitaria",
    categoryEn: "GovTech / Health Regulation",
    descEs: "Plataforma de regulaci\u00f3n sanitaria en l\u00ednea vinculada con COFEPRIS. Digitalizaci\u00f3n de tr\u00e1mites y cumplimiento regulatorio para el sector salud.",
    descEn: "Online health regulation platform linked with COFEPRIS. Digitization of procedures and regulatory compliance for the healthcare sector.",
    tags: ["Node.js", "MongoDB", "GraphQL", "Criptograf\u00eda", "e.firma"],
    github: "",
    live: "",
  },
  {
    titleEs: "Iaprep",
    titleEn: "Iaprep",
    categoryEs: "Ed-Tech / IA",
    categoryEn: "Ed-Tech / AI",
    descEs: "Plataforma impulsada por IA con capacidades avanzadas de an\u00e1lisis, procesamiento de lenguaje natural y machine learning.",
    descEn: "AI-powered platform with advanced analysis capabilities, natural language processing, and machine learning.",
    tags: ["PyTorch", "Python", "AWS", "Lambda@Edge"],
    github: "",
    live: "",
  },
  {
    titleEs: "Upperbus-Rideupp",
    titleEn: "Upperbus-Rideupp",
    categoryEs: "Movilidad Colectiva",
    categoryEn: "Collective Mobility",
    descEs: "Co-fundador. Plataforma de transporte colectivo bajo demanda. Liderazgo de producto, construcci\u00f3n de comunidad y operaciones en ciudad.",
    descEn: "Co-founder. On-demand collective transportation platform. Product leadership, community building, and city operations.",
    tags: ["NativeScript", "Node.js", "Firebase", "AWS"],
    github: "",
    live: "",
  },
]

export function Projects() {
  const { locale, t } = useI18n()

  return (
    <section id="projects" className="bg-secondary px-6 py-24" aria-label={t("projects.title")}>
      <div className="mx-auto max-w-5xl">
        <h2 className="text-2xl font-bold tracking-tight text-foreground">
          {t("projects.title")}
        </h2>
        <p className="mt-2 text-base text-muted-foreground">{t("projects.subtitle")}</p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => {
            const title = locale === "es" ? project.titleEs : project.titleEn
            const desc = locale === "es" ? project.descEs : project.descEn
            const category = locale === "es" ? project.categoryEs : project.categoryEn
            return (
              <article
                key={i}
                className="group flex flex-col rounded-lg border border-border bg-card p-6 transition-shadow hover:shadow-md"
              >
                <p className="text-xs font-medium uppercase tracking-wider text-accent">{category}</p>
                <h3 className="mt-2 text-lg font-semibold text-foreground">{title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {desc}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {(project.github || project.live) && (
                  <div className="mt-4 flex items-center gap-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={t("projects.seeCode").replace("{name}", title)}
                        className="rounded-full bg-secondary p-2 text-muted-foreground transition-colors hover:text-foreground"
                      >
                        <Github className="h-4 w-4" />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={t("projects.seeLive").replace("{name}", title)}
                        className="rounded-full bg-secondary p-2 text-muted-foreground transition-colors hover:text-foreground"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                )}
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
