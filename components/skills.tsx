"use client"

import { useI18n } from "@/lib/i18n"

const skillGroups = [
  {
    key: "skills.leadership" as const,
    items: [
      "Engineering Leadership",
      "Team Building & Hiring",
      "Technical Strategy",
      "Stakeholder Management",
      "Regulatory Compliance",
      "Product Leadership",
      "Agile / Scrum",
      "Mentoring",
      "Strategic Planning",
    ],
  },
  {
    key: "skills.ai" as const,
    items: [
      "LLM Integration",
      "RAG Architecture",
      "Prompt Engineering",
      "AI Product Strategy",
      "Model Evaluation",
      "AI Governance",
      "OpenAI / Anthropic",
      "Agent Design",
    ],
  },
  {
    key: "skills.architecture" as const,
    items: [
      "AWS (EC2, S3, Lambda, RDS)",
      "Terraform (IaC)",
      "Microservices",
      "Docker",
      "CI/CD",
      "Linux / Nginx",
      "Cloud Architecture",
    ],
  },
  {
    key: "skills.security" as const,
    items: [
      "Security by Design",
      "Cryptography",
      "e.firma",
      "Cybersecurity (Master's)",
      "Regulatory Compliance (SEP, COFEPRIS)",
    ],
  },
  {
    key: "skills.engineering" as const,
    items: [
      "Node.js",
      "Java",
      "Python",
      "TypeScript",
      "REST APIs",
      "GraphQL",
      "MySQL",
      "MongoDB",
      "Firebase",
      "Oracle",
    ],
  },
]

const certifications = [
  { title: "AWS Cloud Practitioner", org: "Amazon Web Services" },
]

const education = [
  { title: "Master's in Cybersecurity", org: "" },
  { title: "Software Engineering", org: "" },
]

export function Skills() {
  const { t } = useI18n()

  return (
    <section id="skills" className="px-6 py-24">
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
