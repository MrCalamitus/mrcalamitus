"use client"

import { useI18n } from "@/lib/i18n"

interface Experience {
  periodKey: string
  roleKey: string
  companyKey: string
  companyUrl: string | null
  descriptionKey: string
  tags: string[]
}

const experiences: Experience[] = [
  {
    periodKey: "experience.zoga.period",
    roleKey: "experience.zoga.role",
    companyKey: "experience.zoga.company",
    companyUrl: "https://zoga.com.mx",
    descriptionKey: "experience.zoga.description",
    tags: ["Node.js", "Java", "MySQL", "Firebase", "Oracle", "AWS", "Terraform", "Docker", "OpenAI"],
  },
  {
    periodKey: "experience.startups.period",
    roleKey: "experience.startups.role",
    companyKey: "experience.startups.company",
    companyUrl: null,
    descriptionKey: "experience.startups.description",
    tags: ["NativeScript", "Node.js", "Firebase", "Product Leadership", ""],
  },
  {
    periodKey: "experience.freelance.period",
    roleKey: "experience.freelance.role",
    companyKey: "experience.freelance.company",
    companyUrl: null,
    descriptionKey: "experience.freelance.description",
    tags: ["Java", "Flash", "MySQL", "Linux", "REST APIs"],
  },
]

export function Experience() {
  const { t } = useI18n()

  return (
    <section id="experiencia" className="px-6 py-24" aria-label={t("experience.label")}>
      <div className="mx-auto max-w-3xl">
        <h2 className="text-sm font-medium tracking-widest uppercase text-muted-foreground">
          {t("experience.title")}
        </h2>
        <div className="mt-6 h-px w-12 bg-foreground" aria-hidden="true" />

        <div className="mt-12 flex flex-col gap-12">
          {experiences.map((exp) => (
            <div key={exp.roleKey} className="group relative flex gap-8">
              <div className="hidden md:flex flex-col items-center">
                <div className="h-3 w-3 rounded-full border-2 border-foreground bg-background" />
                <div className="w-px flex-1 bg-border" />
              </div>

              <div className="flex-1">
                <p className="text-xs font-mono tracking-wider text-muted-foreground">
                  {t(exp.periodKey)}
                </p>
                <h3 className="mt-2 text-base font-semibold text-foreground">
                  {t(exp.roleKey)}
                </h3>
                {exp.companyUrl ? (
                  <a
                    href={exp.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-muted-foreground underline underline-offset-4 decoration-border hover:decoration-foreground hover:text-foreground transition-colors"
                  >
                    {t(exp.companyKey)}
                  </a>
                ) : (
                  <p className="text-sm font-medium text-muted-foreground">
                    {t(exp.companyKey)}
                  </p>
                )}
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {t(exp.descriptionKey)}
                </p>
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
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
