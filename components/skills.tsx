"use client"

import { useI18n } from "@/lib/i18n"

const skillGroups = [
  {
    key: "skills.ai" as const,
    items: [
      "Amazon Bedrock (Knowledge Bases, Guardrails)",
      "RAG",
      "Vector Search (S3 Vectors)",
      "LLM Evaluation",
      "Multi-Agent Systems (CrewAI)",
      "Local LLMs (Ollama / Qwen)",
      "LLM APIs (Claude / Gemini / ChatGPT)",
      "PyTorch / Computer Vision",
      "AI-Assisted Development (Claude Code / Cursor)",
      "Prompt Engineering",
    ],
  },
  {
    key: "skills.cloud" as const,
    items: [
      "AWS ( Lambda, AppSync, DynamoDB, lambda, ECS Fargate, Bedrock, S3, CloudFront, Route 53, Cognito, CloudWatch, CloudTrail, IAM ...)",
      "Serverless",
      "Terraform (IaC)",
      "Docker",
      "CI/CD Pipelines",
      "Google Cloud / Firebase",
      "Linux / Nginx",
    ],
  },
  {
    key: "skills.backend" as const,
    items: ["Python", "Node.js", "TypeScript", "Java", "FastAPI", "Express", "GraphQL", "REST APIs", "Microservices"],
  },
  {
    key: "skills.frontend" as const,
    items: [ "Next.js", "Vue.js", "React", "Tailwind CSS", "SASS / SCSS", "HTML5 / CSS3", "JavaScript (ES6+)", "React Native", "Mobile Development with NS (iOS / Android)","material-ui", "Vuetify", "Bootstrap"],
  },
  {
    key: "skills.databases" as const,
    items: ["DynamoDB", "DocumentDB / MongoDB", "MySQL", "Oracle Database", "Firebase / Firestore"],
  },
  {
    key: "skills.security" as const,
    items: ["Security by Design", "e.firma & Applied Cryptography", "Security Audits", "Regulatory Compliance"],
  },
  {
    key: "skills.leadership" as const,
    items: ["Technical Leadership (teams of up to 5)", "Agile / Scrum", "Mentoring"],
  },
]

const certifications = [
  { title: "AWS Certified Cloud Practitioner (2021\u20132024)", org: "Amazon Web Services" },
]

const education = [
  { title: "M.Eng. in Information Security and Information Technologies \u2014 IPN (2020\u20132024)", org: "IPN" },
  { title: "B.Eng. in Computer Engineering \u2014 IPN, ESIME Culhuac\u00e1n (2008\u20132014)", org: "IPN" },
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
