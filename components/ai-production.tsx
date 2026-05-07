"use client"

import { Brain, GitBranch, Users } from "lucide-react"
import { useI18n } from "@/lib/i18n"

export function AIProduction() {
  const { t } = useI18n()

  const cards = [
    {
      icon: Brain,
      titleKey: "ai.card1.title" as const,
      descKey: "ai.card1.desc" as const,
    },
    {
      icon: GitBranch,
      titleKey: "ai.card2.title" as const,
      descKey: "ai.card2.desc" as const,
    },
    {
      icon: Users,
      titleKey: "ai.card3.title" as const,
      descKey: "ai.card3.desc" as const,
    },
  ]

  return (
    <section id="ai" className="bg-secondary px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-2xl font-bold tracking-tight text-foreground">
          {t("ai.title")}
        </h2>
        <p className="mt-2 text-base text-muted-foreground">{t("ai.subtitle")}</p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {cards.map((card, i) => (
            <article
              key={i}
              className="flex flex-col rounded-lg border border-border bg-card p-6 transition-shadow hover:shadow-md"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10">
                <card.icon className="h-5 w-5 text-accent" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">
                {t(card.titleKey)}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {t(card.descKey)}
              </p>
            </article>
          ))}
        </div>

        <p className="mt-10 text-center text-sm font-medium text-accent">
          {t("ai.impact")}
        </p>
      </div>
    </section>
  )
}
