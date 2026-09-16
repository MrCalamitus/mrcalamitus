"use client"

import { Github, ExternalLink } from "lucide-react"
import { useI18n } from "@/lib/i18n"

const projects = [
  {
    titleEs: "IAPREP",
    titleEn: "IAPREP",
    categoryEs: "Civic-Tech / IA",
    categoryEn: "Civic-Tech / AI",
    descEs: "Producto de IA que lee actas electorales manuscritas para los Programas de Resultados Electorales Preliminares (PREP). Dos modelos en PyTorch entrenados con 16M de muestras, 97% de confiabilidad, 0.7 s por regi\u00f3n y picos de 1,000 registros por segundo en AWS serverless. Evaluado por el INE en 2024 como el mejor de 3 soluciones.",
    descEn: "AI product that reads handwritten electoral tally sheets for Mexico\u2019s preliminary election results programs (PREP). Two PyTorch models trained on 16M samples, 97% reliability, 0.7 s per region and peaks of 1,000 records per second on serverless AWS. Rated best of 3 solutions in INE\u2019s 2024 evaluation.",
    tags: ["PyTorch", "Computer Vision", "Python", "AWS Serverless", "Lambda@Edge"],
    github: "",
    live: "https://iaprep.com",
  },
  {
    titleEs: "rag-agent",
    titleEn: "rag-agent",
    categoryEs: "IA Generativa / RAG",
    categoryEn: "Generative AI / RAG",
    descEs: "Agente RAG auditable que cita la evidencia de cada respuesta. Servicio multitema en AWS Bedrock (Knowledge Bases, S3 Vectors, Guardrails de PII) con ECS Fargate, PrivateLink y Terraform. Python/FastAPI, arquitectura hexagonal, API Open Responses y suite de evaluaci\u00f3n.",
    descEn: "Auditable RAG agent that cites the evidence behind every answer. Multi-topic service on AWS Bedrock (Knowledge Bases, S3 Vectors, Guardrails for PII) with ECS Fargate, PrivateLink and Terraform. Python/FastAPI, hexagonal architecture, Open Responses API and an evaluation suite.",
    tags: ["AWS Bedrock", "RAG", "Terraform", "ECS Fargate", "Python", "FastAPI"],
    github: "https://github.com/MrCalamitus/rag-agent",
    live: "",
  },
  {
    titleEs: "Certisep",
    titleEn: "Certisep",
    categoryEs: "SaaS / Legal-Tech \u00b7 Producto de ZOGA",
    categoryEn: "SaaS / Legal-Tech \u00b7 ZOGA product",
    descEs: "Producto SaaS de ZOGA para emitir, firmar electr\u00f3nicamente y validar t\u00edtulos y certificados electr\u00f3nicos (XML SEP) de instituciones particulares de educaci\u00f3n superior, con flujos regulatorios aislados para certificados (DGAIR) y t\u00edtulos (DGP). Pipelines multiagente con LLM locales que llevaron las visitas semanales de 2\u20135 a 80\u201390.",
    descEn: "ZOGA\u2019s SaaS product for issuing, digitally signing and validating electronic degrees and certificates (SEP XML standard) for private higher-education institutions, with isolated regulatory workflows for certificates (DGAIR) and degrees (DGP). Multi-agent local-LLM pipelines grew weekly site visits from 2\u20135 to 80\u201390.",
    tags: ["Node.js", "MySQL", "AWS", "CrewAI", "Ollama", "Security by Design"],
    github: "",
    live: "https://certisep.com",
  },
  {
    titleEs: "Digipris \u2014 COFEPRIS",
    titleEn: "Digipris \u2014 COFEPRIS",
    categoryEs: "GovTech / Regulaci\u00f3n Sanitaria",
    categoryEn: "GovTech / Health Regulation",
    descEs: "Plataformas de ensayos cl\u00ednicos y regulaci\u00f3n sanitaria en l\u00ednea. Motor de flujos basado en datos que digitaliz\u00f3 m\u00e1s de 100 tr\u00e1mites regulatorios, con SSO compartido, e.firma y motor de pagos desacoplado.",
    descEn: "Clinical trials and online sanitary regulation platforms. A data-driven workflow engine that digitized 100+ regulatory procedures, with shared SSO, e.firma and a decoupled payments engine.",
    tags: ["AWS AppSync", "GraphQL", "DynamoDB", "DocumentDB", "Terraform", "e.firma"],
    github: "",
    live: "",
  },
  {
    titleEs: "Auditor\u00edas a sistemas electorales",
    titleEn: "Electoral systems audits",
    categoryEs: "Seguridad / INE e IEEM",
    categoryEn: "Security / INE & IEEM",
    descEs: "Auditor\u00eda de seguridad del sistema de voto por internet del INE para mexicanos en el extranjero con una metodolog\u00eda de verificaci\u00f3n de integridad criptogr\u00e1fica; auditor\u00edas de 4 modelos de urna electr\u00f3nica; replicaci\u00f3n forense del error del conteo r\u00e1pido de 2015.",
    descEn: "Security audit of INE\u2019s internet voting system for Mexicans abroad with a cryptographic integrity verification methodology; audits of 4 electronic voting machine models; forensic replication of the 2015 quick-count error.",
    tags: ["Security Audits", "Applied Cryptography", "Load Testing", "Forensics"],
    github: "",
    live: "",
  },
  {
    titleEs: "Red Integral Notarial",
    titleEn: "Red Integral Notarial",
    categoryEs: "Legal-Tech / Colegio de Notarios",
    categoryEn: "Legal-Tech / Notary Association",
    descEs: "Backend serverless en AWS, apps iOS/Android con e.firma y verificaci\u00f3n biom\u00e9trica, y VPN segura para 250 notar\u00edas.",
    descEn: "Serverless AWS backend, iOS/Android apps with e.firma and biometric verification, and a secured VPN for 250 notary offices.",
    tags: ["AWS Serverless", "Biometrics", "e.firma", "VPN"],
    github: "",
    live: "",
  },
]

export function Projects() {
  const { locale, t } = useI18n()

  return (
    <section id="projects" className="bg-secondary px-6 py-24" aria-label={t("projects.title")}>
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
                className="group flex flex-col rounded-lg border border-border bg-card p-6 transition-shadow hover:shadow-md"
              >
                <p className="text-xs font-medium uppercase tracking-wider text-accent">{category}</p>
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
