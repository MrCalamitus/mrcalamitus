"use client"

import Image from "next/image"
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react"
import { useI18n } from "@/lib/i18n"
import { HeroCanvas } from "@/components/hero-canvas"

export function Hero() {
  const { t } = useI18n()

  return (
    <section className="relative flex min-h-screen items-center justify-center px-6 pt-20 overflow-hidden" aria-label={t("hero.presentation")}>
      {/* Interactive canvas background */}
      <div className="absolute inset-0 z-0">
        <HeroCanvas />
      </div>

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center gap-8 text-center">
        <div className="relative h-32 w-32 overflow-hidden rounded-full border-2 border-border shadow-sm">
          <Image
            src="/images/avatar.jpg"
            alt="Luis Alberto Ortiz Meza - CTO & Solution Architect en ZOGA"
            fill
            className="object-cover object-top"
            priority
          />
        </div>

        <div className="flex flex-col gap-4">
          <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground">
            {t("hero.role")}
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-6xl text-balance">
            {t("hero.name")}
          </h1>
          <p className="mx-auto max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
            {t("hero.description")}
          </p>
        </div>

        <div className="flex flex-col items-center gap-6 sm:flex-row">
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/mrcalamitus"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-foreground hover:text-foreground"
              aria-label="GitHub - Luis Alberto Ortiz Meza"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/mrcalamitus"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-foreground hover:text-foreground"
              aria-label="LinkedIn - Luis Alberto Ortiz Meza"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href="mailto:luis@zoga.com.mx"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-foreground hover:text-foreground"
              aria-label="Email - luis@zoga.com.mx"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>

          <a
            href="/cv-luis-alberto-ortiz-meza.pdf"
            download
            className="flex items-center gap-2 rounded-full border border-foreground bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-colors hover:bg-foreground/90 min-h-[44px]"
          >
            <Download className="h-4 w-4" />
            {t("hero.downloadCv")}
          </a>
        </div>

        <a
          href="#sobre-mi"
          className="mt-8 animate-bounce text-muted-foreground transition-colors hover:text-foreground min-h-[44px] min-w-[44px] flex items-center justify-center"
          aria-label={t("hero.goToNext")}
        >
          <ArrowDown className="h-5 w-5" />
        </a>
      </div>

      {/* ATS / AI readable hidden text */}
      <div className="sr-only">
        <p>{t("hero.srText")}</p>
      </div>
    </section>
  )
}
