"use client"

import { Award, GraduationCap } from "lucide-react"
import { useI18n } from "@/lib/i18n"

export function Skills() {
  const { t, locale } = useI18n()

  const skillCategories = [
    {
      category: t("skills.backend"),
      skills: ["Node.js", "Express.js", "Java", "TypeScript", "REST APIs", "Microservicios"],
    },
    {
      category: t("skills.databases"),
      skills: ["MySQL", "Firebase / Firestore", "Oracle Database", "SQL / NoSQL"],
    },
    {
      category: t("skills.cloud"),
      skills: ["AWS (EC2, S3, Lambda, RDS)", "Terraform (IaC)", "Docker", "CI/CD Pipelines", "Linux / Nginx"],
    },
    {
      category: t("skills.ai"),
      skills: ["OpenAI / LLM", "RAG", "NLP", "Security by Design"],
    },
    {
      category: t("skills.leadership"),
      skills: [
        locale === "es" ? "Liderazgo T\u00e9cnico" : "Technical Leadership",
        locale === "es" ? "Planificaci\u00f3n Estrat\u00e9gica" : "Strategic Planning",
        "Agile / Scrum",
        locale === "es" ? "Mentor\u00edas" : "Mentoring",
        "NativeScript",
      ],
    },
  ]

  return (
    <section id="habilidades" className="bg-secondary/50 px-6 py-24" aria-label={t("skills.label")}>
      <div className="mx-auto max-w-5xl">
        <h2 className="text-sm font-medium tracking-widest uppercase text-muted-foreground">
          {t("skills.title")}
        </h2>
        <div className="mt-6 h-px w-12 bg-foreground" aria-hidden="true" />

        <div className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {skillCategories.map((cat) => (
            <div key={cat.category}>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-foreground">
                {cat.category}
              </h3>
              <ul className="mt-4 flex flex-col gap-2">
                {cat.skills.map((skill) => (
                  <li
                    key={skill}
                    className="text-sm text-muted-foreground"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Certificaciones y Educacion */}
        <div className="mt-16 grid gap-10 md:grid-cols-2">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-foreground">
              {t("skills.certifications")}
            </h3>
            <div className="mt-4 flex flex-wrap gap-4">
              <div className="flex items-center gap-3 rounded-lg border border-border bg-card px-5 py-3">
                <Award className="h-5 w-5 text-foreground shrink-0" />
                <div>
                  <p className="text-sm font-medium text-foreground">AWS Cloud Practitioner</p>
                  <p className="text-xs text-muted-foreground">Amazon Web Services</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-foreground">
              {t("skills.education")}
            </h3>
            <div className="mt-4 flex flex-col gap-4">
              <div className="flex items-center gap-3 rounded-lg border border-border bg-card px-5 py-3">
                <GraduationCap className="h-5 w-5 text-foreground shrink-0" />
                <div>
                  <p className="text-sm font-medium text-foreground">
                    {locale === "es" ? "Maestr\u00eda en Ciberseguridad" : "Master\u2019s in Cybersecurity"}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-lg border border-border bg-card px-5 py-3">
                <GraduationCap className="h-5 w-5 text-foreground shrink-0" />
                <div>
                  <p className="text-sm font-medium text-foreground">
                    {locale === "es" ? "Ingenier\u00eda de Software / Computaci\u00f3n" : "Software Engineering / Computer Science"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
