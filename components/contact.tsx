"use client"

import { Mail, Linkedin, Github, MapPin } from "lucide-react"
import { useI18n } from "@/lib/i18n"

export function Contact() {
  const { t } = useI18n()

  const channels = [
    {
      icon: Mail,
      label: t("contact.email"),
      value: "luis@zoga.com.mx",
      href: "mailto:luis@zoga.com.mx",
    },
    {
      icon: Github,
      label: t("contact.github"),
      value: "github.com/mrcalamitus",
      href: "https://github.com/mrcalamitus",
    },
    {
      icon: Linkedin,
      label: t("contact.linkedin"),
      value: "linkedin.com/in/mrcalamitus",
      href: "https://linkedin.com/in/mrcalamitus",
    },
  ]

  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-2xl font-bold tracking-tight text-foreground">
          {t("contact.title")}
        </h2>
        <p className="mt-2 text-base text-muted-foreground">{t("contact.subtitle")}</p>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {channels.map((ch) => (
            <a
              key={ch.label}
              href={ch.href}
              target={ch.href.startsWith("mailto") ? undefined : "_blank"}
              rel={ch.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
              className="flex flex-col items-center gap-3 rounded-lg border border-border bg-card p-6 text-center transition-shadow hover:shadow-md"
            >
              <ch.icon className="h-6 w-6 text-accent" />
              <div>
                <p className="text-sm font-medium text-foreground">{ch.label}</p>
                <p className="mt-1 text-xs text-muted-foreground">{ch.value}</p>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <MapPin className="h-4 w-4" />
          <span>Mexico City / Merida, Mexico</span>
        </div>
      </div>
    </section>
  )
}
