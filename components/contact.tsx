"use client"

import { Mail, Github, Linkedin, ArrowUpRight, MapPin } from "lucide-react"
import { useI18n } from "@/lib/i18n"

export function Contact() {
  const { t } = useI18n()

  const contactLinks = [
    {
      label: t("contact.email"),
      value: "luis@zoga.com.mx",
      href: "mailto:luis@zoga.com.mx",
      icon: Mail,
    },
    {
      label: "GitHub",
      value: "github.com/mrcalamitus",
      href: "https://github.com/mrcalamitus",
      icon: Github,
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/mrcalamitus",
      href: "https://www.linkedin.com/in/mrcalamitus",
      icon: Linkedin,
    },
    {
      label: t("contact.location"),
      value: t("contact.locationValue"),
      href: null,
      icon: MapPin,
    },
  ]

  return (
    <section id="contacto" className="px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-sm font-medium tracking-widest uppercase text-muted-foreground">
          {t("contact.title")}
        </h2>
        <div className="mt-6 h-px w-12 bg-foreground" />

        <div className="mt-10">
          <p className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl text-balance">
            {t("contact.headline")}
          </p>
        </div>

        <div className="mt-10 flex flex-col gap-4">
          {contactLinks.map((link) => {
            const content = (
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-4">
                  <link.icon className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-foreground shrink-0" />
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                      {link.label}
                    </p>
                    <p className="mt-0.5 text-sm font-medium text-foreground">
                      {link.value}
                    </p>
                  </div>
                </div>
                {link.href && (
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-all group-hover:text-foreground group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                )}
              </div>
            )

            if (!link.href) {
              return (
                <div
                  key={link.label}
                  className="group flex items-center rounded-lg border border-border bg-card px-6 py-4"
                >
                  {content}
                </div>
              )
            }

            return (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                className="group flex items-center rounded-lg border border-border bg-card px-6 py-4 transition-all hover:border-foreground/20 hover:shadow-sm min-h-[44px]"
              >
                {content}
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
