"use client"

import Image from "next/image"
import { Github, Linkedin, Mail, ArrowDown, Download } from "lucide-react"
import { useI18n } from "@/lib/i18n"
import { HeroCanvas } from "@/components/hero-canvas"

export function Hero() {
  const { locale, t } = useI18n()
  const cvUrl = locale === "es" ? "/cv-luis-alberto-ortiz-meza.pdf" : "/cv-luis-alberto-ortiz-meza-en.pdf"

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-20">
      <HeroCanvas />
      <div className="relative z-10 flex flex-col items-center text-center">
        <div className="relative h-32 w-32 overflow-hidden rounded-full border-2 border-border shadow-sm">
          <Image
            src="/images/avatar.jpg"
            alt="Luis Alberto Ortiz Meza"
            fill
            className="object-cover object-top"
            priority
          />
        </div>

        <div className="mt-6">
          <p className="text-sm font-medium text-accent">{t("hero.greeting")}</p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            {t("hero.name")}
          </h1>
          <p className="mt-2 text-lg font-medium text-muted-foreground">
            {t("hero.role")}
          </p>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
            {t("hero.subtitle")}
          </p>
        </div>

        <div className="mt-6 flex items-center gap-4">
          <a
            href="https://github.com/mrcalamitus"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub de Luis Alberto Ortiz Meza"
            className="rounded-full bg-secondary p-2.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="https://linkedin.com/in/mrcalamitus"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn de Luis Alberto Ortiz Meza"
            className="rounded-full bg-secondary p-2.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href="mailto:luis@zoga.com.mx"
            aria-label="Enviar email a Luis Alberto Ortiz Meza"
            className="rounded-full bg-secondary p-2.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>

        <div className="mt-6 flex items-center gap-3">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            {t("hero.contact")}
          </a>
          <a
            href={cvUrl}
            download
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
          >
            <Download className="h-4 w-4" />
            {t("hero.cv")}
          </a>
        </div>

        <a
          href="#about"
          className="mt-12 animate-bounce text-muted-foreground"
          aria-label="Scroll down"
        >
          <ArrowDown className="h-5 w-5" />
        </a>
      </div>
      <span className="sr-only">
        Luis Alberto Ortiz Meza, MrCalamitus, CTO, Co-founder, Tech Lead, ZOGA, Full-Stack Developer,
        Node.js, Java, AWS, Terraform, MySQL, Firebase, Oracle, NativeScript, Docker, Kubernetes,
        CI/CD, REST APIs, Cybersecurity, Cloud Architecture, Mexico
      </span>
    </section>
  )
}
