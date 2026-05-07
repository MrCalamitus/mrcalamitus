"use client"

import { Github, ExternalLink, Sparkles } from "lucide-react"
import { useI18n } from "@/lib/i18n"

const projects = [
  {
    titleEs: "Certisep",
    titleEn: "Certisep",
    categoryEs: "SaaS · Legal-Tech · EdTech",
    categoryEn: "SaaS · Legal-Tech · EdTech",
    descEs: "Plataforma SaaS de emisión y validación de títulos electrónicos para instituciones de educación superior. Lideré arquitectura, equipo de desarrollo y compliance regulatorio con SEP. Diseñado con security-by-design. Adoptado por más de 40 universidades, más de 50,000 títulos y certificados emitidos desde 2018.",
    descEn: "SaaS platform for issuing and validating electronic degrees for higher education institutions. I led architecture, development team, and regulatory compliance with SEP. Designed with security-by-design. Adopted by 40+ universities, 50,000+ degrees and certificates issued since 2018.",
    tags: ["Leadership", "Compliance", "Cloud Architecture", "Security by Design", "AWS"],
    github: "",
    live: "",
    featured: false,
  },
  {
    titleEs: "Dígipris",
    titleEn: "Dígipris",
    categoryEs: "GovTech · Regulación Sanitaria",
    categoryEn: "GovTech · Health Regulation",
    descEs: "Plataforma de regulación sanitaria en línea integrada con COFEPRIS. Digitalización de trámites federales con criptografía y firma electrónica avanzada (e.firma). Atiende más de 100 trámites/mes, reducción del 50% en tiempo de gestión.",
    descEn: "Online health regulation platform integrated with COFEPRIS. Digitization of federal procedures with cryptography and advanced electronic signature (e.firma). Handles 100+ procedures/month, 50% reduction in processing time.",
    tags: ["GovTech", "Compliance", "Cryptography", "GraphQL", "Node.js"],
    github: "",
    live: "",
    featured: false,
  },
  {
    titleEs: "Iaprep",
    titleEn: "Iaprep",
    categoryEs: "EdTech · IA Aplicada",
    categoryEn: "EdTech · Applied AI",
    descEs: "Plataforma de predicción de números escritos a mano con IA. Llevar el producto de pruebas a producción y la generación de infraestructura escalable para análisis personalizado.",
    descEn: "AI-powered handwritten number prediction platform. Taking the product from testing to production and generating scalable infrastructure for personalized analysis.",
    tags: ["AI Strategy", "LLMs", "Python", "PyTorch", "AWS"],
    github: "",
    live: "",
    featured: true,
  },
  {
    titleEs: "Upperbus & Rideupp",
    titleEn: "Upperbus & Rideupp",
    categoryEs: "Movilidad · Co-fundador de Startup",
    categoryEn: "Mobility · Startup Co-founder",
    descEs: "Co-fundador de dos startups de movilidad colectiva on-demand. Liderazgo de producto, construcción de comunidad, operaciones en ciudad y navegación de regulación local. Experiencia real en pivots estratégicos bajo incertidumbre.",
    descEn: "Co-founder of two on-demand collective mobility startups. Product leadership, community building, city operations, and navigating local regulation. Real-world experience in strategic pivots under uncertainty.",
    tags: ["Co-founder", "Product Leadership", "Operations", "Strategy"],
    github: "",
    live: "",
    featured: false,
  },
]

export function Projects() {
  const { locale, t } = useI18n()

  return (
    <section id="projects" className="px-6 py-24" aria-label={t("projects.title")}>
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
                className={`group flex flex-col rounded-lg border bg-card p-6 transition-shadow hover:shadow-md ${
                  project.featured
                    ? "border-accent ring-1 ring-accent/20"
                    : "border-border"
                }`}
              >
                <div className="flex items-center justify-between">
                  <p className="text-xs font-medium uppercase tracking-wider text-accent">{category}</p>
                  {project.featured && (
                    <span className="flex items-center gap-1 rounded-full bg-accent/10 px-2 py-0.5 text-xs font-medium text-accent">
                      <Sparkles className="h-3 w-3" />
                      AI
                    </span>
                  )}
                </div>
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
