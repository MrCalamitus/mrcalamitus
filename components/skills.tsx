"use client"

import { useI18n } from "@/lib/i18n"

const skillGroups = [
  {
    key: "skills.backend" as const,
    items: ["Node.js", "Java", "Express", "TypeScript", "Python", "REST APIs", "GraphQL"],
  },
  {
    key: "skills.databases" as const,
    items: ["MySQL", "Firebase", "Oracle", "MongoDB", "Redis"],
  },
  {
    key: "skills.cloud" as const,
    items: ["AWS", "Terraform", "Docker", "CI/CD", "Lambda", "EC2", "S3", "CloudFront"],
  },
  {
    key: "skills.mobile" as const,
    items: ["NativeScript", "HTML/CSS", "JavaScript", "React", "Next.js"],
  },
  {
    key: "skills.leadership" as const,
    items: [
      "Team Leadership",
      "Agile / Scrum",
      "System Architecture",
      "Code Review",
      "Technical Strategy",
    ],
  },
]

const certifications = [
  "AWS Cloud Practitioner",
  "Master\u2019s in Cybersecurity",
]

export function Skills() {
  const { t } = useI18n()

  return (
    <section id="skills" className="bg-[var(--secondary)] px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-2xl font-bold tracking-tight text-[var(--foreground)]">
          {t("skills.title")}
        </h2>

        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div key={group.key}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--accent)]">
                {t(group.key)}
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[var(--border)] bg-[var(--card)] px-3 py-1.5 text-xs font-medium text-[var(--foreground)]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--accent)]">
            Certifications
          </h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {certifications.map((cert) => (
              <span
                key={cert}
                className="rounded-full border border-[var(--accent)] bg-[var(--accent)]/10 px-4 py-1.5 text-xs font-semibold text-[var(--accent)]"
              >
                {cert}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
