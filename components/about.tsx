"use client"

import { useI18n } from "@/lib/i18n"

export function About() {
  const { t } = useI18n()

  const renderP1 = () => {
    const text = t("about.p1")
    if (!text || !text.includes("{link}")) return <p>{text}</p>
    const parts = text.split("{link}")
    return (
      <p>
        {parts[0]}
        <a
          href="https://zoga.com.mx"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-foreground underline underline-offset-4 decoration-border hover:decoration-foreground transition-colors"
        >
          ZOGA mobile & IT
        </a>
        {parts[1]}
      </p>
    )
  }

  const renderP2 = () => {
    const text = t("about.p2")
    if (!text) return null
    const replacements: Record<string, string> = {
      "{nodejs}": "Node.js",
      "{express}": "Express",
      "{java}": "Java",
      "{mysql}": "MySQL",
      "{firebase}": "Firebase",
      "{oracle}": "Oracle",
      "{aws}": "AWS",
      "{awsCert}": "Cloud Practitioner",
      "{terraform}": "Terraform",
      "{openai}": "OpenAI/LLM",
      "{rag}": "RAG",
    }

    const regex = /(\{[a-zA-Z]+\})/g
    const parts = text.split(regex)

    return (
      <p>
        {parts.map((part, i) =>
          replacements[part] ? (
            <strong key={i} className="font-medium text-foreground">
              {replacements[part]}
            </strong>
          ) : (
            <span key={i}>{part}</span>
          )
        )}
      </p>
    )
  }

  return (
    <section id="sobre-mi" className="px-6 py-24" aria-label={t("about.label")}>
      <div className="mx-auto max-w-3xl">
        <h2 className="text-sm font-medium tracking-widest uppercase text-muted-foreground">
          {t("about.title")}
        </h2>
        <div className="mt-6 h-px w-12 bg-foreground" aria-hidden="true" />

        <div className="mt-10 flex flex-col gap-6 text-base leading-relaxed text-muted-foreground">
          {renderP1()}
          {renderP2()}
          <p>{t("about.p3")}</p>
        </div>
      </div>
    </section>
  )
}
