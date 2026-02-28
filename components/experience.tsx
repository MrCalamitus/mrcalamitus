"use client"

import { useI18n } from "@/lib/i18n"

const experiences = [
  {
    periodEs: "2011 \u2014 Presente",
    periodEn: "2011 \u2014 Present",
    titleEs: "CTO & Co-fundador",
    titleEn: "CTO & Co-founder",
    company: "ZOGA",
    companyUrl: "https://zoga.com.mx",
    descEs:
      "Co-fund\u00e9 y lidero la direcci\u00f3n t\u00e9cnica de ZOGA, una empresa de desarrollo de software con 14 a\u00f1os de experiencia. Arquitectura cloud en AWS con Terraform, liderazgo de equipos, y desarrollo de plataformas cr\u00edticas para gobierno, movilidad y educaci\u00f3n.",
    descEn:
      "Co-founded and lead the technical direction at ZOGA, a software development company with 14 years of experience. Cloud architecture on AWS with Terraform, team leadership, and development of mission-critical platforms for government, mobility, and education.",
    tags: ["Node.js", "AWS", "Terraform", "MySQL", "Firebase", "Team Leadership"],
  },
  {
    periodEs: "2009 \u2014 2011",
    periodEn: "2009 \u2014 2011",
    titleEs: "Full-Stack Developer",
    titleEn: "Full-Stack Developer",
    company: "Freelance",
    companyUrl: "",
    descEs:
      "Desarrollo de aplicaciones web y sistemas a la medida para diversos clientes. Implementaci\u00f3n de APIs REST, bases de datos y despliegues en servidores Linux.",
    descEn:
      "Web application development and custom systems for various clients. REST API implementation, database design, and Linux server deployments.",
    tags: ["Java", "MySQL", "Linux", "REST APIs"],
  },
]

export function Experience() {
  const { locale, t } = useI18n()

  return (
    <section id="experience" className="px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-2xl font-bold tracking-tight text-[var(--foreground)]">
          {t("experience.title")}
        </h2>
        <div className="mt-10 space-y-10">
          {experiences.map((exp, i) => {
            const period = locale === "es" ? exp.periodEs : exp.periodEn
            const title = locale === "es" ? exp.titleEs : exp.titleEn
            const desc = locale === "es" ? exp.descEs : exp.descEn
            return (
              <div key={i} className="relative border-l-2 border-[var(--border)] pl-6">
                <div className="absolute -left-[7px] top-1.5 h-3 w-3 rounded-full border-2 border-[var(--accent)] bg-[var(--background)]" />
                <p className="text-xs font-medium text-[var(--accent)]">{period}</p>
                <h3 className="mt-1 text-lg font-semibold text-[var(--foreground)]">{title}</h3>
                {exp.companyUrl ? (
                  <a
                    href={exp.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-[var(--accent)] underline underline-offset-4"
                  >
                    {exp.company}
                  </a>
                ) : (
                  <p className="text-sm font-medium text-[var(--muted-foreground)]">
                    {exp.company}
                  </p>
                )}
                <p className="mt-2 text-sm leading-relaxed text-[var(--muted-foreground)]">
                  {desc}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-[var(--secondary)] px-3 py-1 text-xs font-medium text-[var(--muted-foreground)]"
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
