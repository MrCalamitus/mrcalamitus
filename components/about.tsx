"use client"

import { MapPin } from "lucide-react"
import { useI18n } from "@/lib/i18n"

export function About() {
  const { t } = useI18n()

  const rawP1 = t("about.p1")
  const parts = rawP1.includes("{link}") ? rawP1.split("{link}") : [rawP1]
  const hasLink = parts.length > 1

  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-2xl font-bold tracking-tight text-[var(--foreground)]">
          {t("about.title")}
        </h2>
        <div className="mt-6 space-y-4 text-base leading-relaxed text-[var(--muted-foreground)]">
          <p>
            {hasLink ? (
              <>
                {parts[0]}
                <a
                  href="https://zoga.com.mx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-[var(--accent)] underline underline-offset-4"
                >
                  ZOGA
                </a>
                {parts[1]}
              </>
            ) : (
              rawP1
            )}
          </p>
          <p>{t("about.p2")}</p>
          <p>{t("about.p3")}</p>
        </div>
        <div className="mt-6 flex items-center gap-2 text-sm text-[var(--muted-foreground)]">
          <MapPin className="h-4 w-4" />
          <span>{t("about.location")}</span>
        </div>
      </div>
    </section>
  )
}
