"use client"

import { useI18n } from "@/lib/i18n"

const skillGroups = [
  {
    key: "skills.backend" as const,
    items: ["Node.js", "Java", "Express", "TypeScript", "Python", "REST APIs", "GraphQL", "Microservicios"],
  },
  {
    key: "skills.databases" as const,
    items: ["MySQL", "Firebase / Firestore", "Oracle Database", "MongoDB", "SQL / NoSQL"],
  },
  {
    key: "skills.cloud" as const,
    items: ["AWS (EC2, S3, Lambda, RDS)", "Terraform (IaC)", "Docker", "CI/CD Pipelines", "Linux / Nginx"],
  },
  {
    key: "skills.mobile" as const,
    items: ["NativeScript"],
  },
  {
    key: "skills.leadership" as const,
    items: ["Technical Leadership", "Agile / Scrum", "Strategic Planning", "Mentoring"],
  },
]

const certifications = [
  { title: "AWS Cloud Practitioner", org: "Amazon Web Services" },
]

const education = [
  { title: "Master\u2019s in Cybersecurity", org: "" },
  { title: "Software Engineering / Computer Science", org: "" },
]

export function Skills() {
  const { t } = useI18n()

  return (
    <section id="skills" className="bg-secondary px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-2xl font-bold tracking-tight text-foreground">
          {t("skills.title")}
        </h2>

        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div key={group.key}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-accent">
                {t(group.key)}
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-8 sm:grid-cols-2">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-accent">
              Certifications
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {certifications.map((cert) => (
                <span
                  key={cert.title}
                  className="rounded-full border border-accent bg-accent/10 px-4 py-1.5 text-xs font-semibold text-accent"
                >
                  {cert.title}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-accent">
              Education
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {education.map((edu) => (
                <span
                  key={edu.title}
                  className="rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium text-foreground"
                >
                  {edu.title}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
