"use client"

import { Github, ExternalLink } from "lucide-react"
import { useI18n } from "@/lib/i18n"

const projects = [
  {
    titleEs: "Certisep",
    titleEn: "Certisep",
    descEs: "Plataforma gubernamental para gesti\u00f3n de certificaciones y tr\u00e1mites digitales con altos est\u00e1ndares de seguridad.",
    descEn: "Government platform for managing certifications and digital procedures with high security standards.",
    tags: ["Node.js", "MySQL", "AWS", "Firebase", "Security by Design"],
    github: "",
    live: "",
  },
  {
    titleEs: "Digipris",
    titleEn: "Digipris",
    descEs: "Sistema digital de gesti\u00f3n penitenciaria con firma electr\u00f3nica avanzada y criptograf\u00eda de extremo a extremo.",
    descEn: "Digital prison management system with advanced electronic signature and end-to-end cryptography.",
    tags: ["Node.js", "MongoDB", "GraphQL", "Criptograf\u00eda", "e.firma"],
    github: "",
    live: "",
  },
  {
    titleEs: "Iaprep",
    titleEn: "Iaprep",
    descEs: "Plataforma de preparaci\u00f3n acad\u00e9mica impulsada por IA para estudiantes, con modelos de deep learning.",
    descEn: "AI-powered academic preparation platform for students, using deep learning models.",
    tags: ["PyTorch", "Python", "AWS", "Lambda@Edge"],
    github: "",
    live: "",
  },
  {
    titleEs: "Upperbus",
    titleEn: "Upperbus",
    descEs: "Aplicaci\u00f3n de movilidad urbana para transporte p\u00fablico con seguimiento en tiempo real y pagos digitales.",
    descEn: "Urban mobility app for public transit with real-time tracking and digital payments.",
    tags: ["NativeScript", "Node.js", "Firebase", "AWS"],
    github: "",
    live: "",
  },
]

export function Projects() {
  const { locale, t } = useI18n()

  return (
    <section id="projects" className="bg-[var(--secondary)] px-6 py-24" aria-label={t("projects.title")}>
      <div className="mx-auto max-w-5xl">
        <h2 className="text-2xl font-bold tracking-tight text-[var(--foreground)]">
          {t("projects.title")}
        </h2>
        <p className="mt-2 text-base text-[var(--muted-foreground)]">{t("projects.subtitle")}</p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => {
            const title = locale === "es" ? project.titleEs : project.titleEn
            const desc = locale === "es" ? project.descEs : project.descEn
            return (
              <article
                key={i}
                className="group flex flex-col rounded-lg border border-[var(--border)] bg-[var(--card)] p-6 transition-shadow hover:shadow-md"
              >
                <h3 className="text-lg font-semibold text-[var(--foreground)]">{title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--muted-foreground)]">
                  {desc}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-[var(--secondary)] px-3 py-1 text-xs font-medium text-[var(--muted-foreground)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex items-center gap-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={t("projects.seeCode").replace("{name}", title)}
                      className="rounded-full bg-[var(--secondary)] p-2 text-[var(--muted-foreground)] transition-colors hover:text-[var(--foreground)]"
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
                      className="rounded-full bg-[var(--secondary)] p-2 text-[var(--muted-foreground)] transition-colors hover:text-[var(--foreground)]"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
