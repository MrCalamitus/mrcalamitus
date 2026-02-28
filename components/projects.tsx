"use client"

import { ExternalLink, Github } from "lucide-react"
import { useI18n } from "@/lib/i18n"

interface Project {
  titleKey: string
  subtitleKey: string
  descriptionKey: string
  tags: string[]
  github: string | null
  live: string | null
}

const projects: Project[] = [
  {
    titleKey: "projects.certisep.title",
    subtitleKey: "projects.certisep.subtitle",
    descriptionKey: "projects.certisep.description",
    tags: ["Node.js", "MySQL", "AWS", "Terraform", "Security by Design"],
    github: null,
    live: null,
  },
  {
    titleKey: "projects.digipris.title",
    subtitleKey: "projects.digipris.subtitle",
    descriptionKey: "projects.digipris.description",
    tags: ["Node.js", "Oracle", "Firebase", "AWS", "NativeScript"],
    github: null,
    live: null,
  },
  {
    titleKey: "projects.iaprep.title",
    subtitleKey: "projects.iaprep.subtitle",
    descriptionKey: "projects.iaprep.description",
    tags: ["OpenAI", "RAG", "Node.js", "Firebase", "TypeScript"],
    github: null,
    live: null,
  },
  {
    titleKey: "projects.upperbus.title",
    subtitleKey: "projects.upperbus.subtitle",
    descriptionKey: "projects.upperbus.description",
    tags: ["NativeScript", "Node.js", "Firebase", "AWS"],
    github: null,
    live: null,
  },
]

export function Projects() {
  const { t } = useI18n()

  return (
    <section id="proyectos" className="bg-secondary/50 px-6 py-24" aria-label={t("projects.label")}>
      <div className="mx-auto max-w-5xl">
        <h2 className="text-sm font-medium tracking-widest uppercase text-muted-foreground">
          {t("projects.title")}
        </h2>
        <div className="mt-6 h-px w-12 bg-foreground" aria-hidden="true" />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((project) => {
            const title = t(project.titleKey)
            return (
              <article
                key={project.titleKey}
                className="group flex flex-col justify-between rounded-lg border border-border bg-card p-6 transition-all hover:border-foreground/20 hover:shadow-sm"
              >
                <div>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">
                        {title}
                      </h3>
                      <p className="text-xs font-mono tracking-wider text-muted-foreground mt-1">
                        {t(project.subtitleKey)}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground transition-colors hover:text-foreground min-h-[44px] min-w-[44px] flex items-center justify-center"
                          aria-label={t("projects.seeCode").replace("{name}", title)}
                        >
                          <Github className="h-4 w-4" />
                        </a>
                      )}
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground transition-colors hover:text-foreground min-h-[44px] min-w-[44px] flex items-center justify-center"
                          aria-label={t("projects.seeDemo").replace("{name}", title)}
                        >
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      )}
                    </div>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {t(project.descriptionKey)}
                  </p>
                </div>
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
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
