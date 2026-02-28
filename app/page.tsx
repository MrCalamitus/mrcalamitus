"use client"

import { I18nProvider } from "@/lib/i18n"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Projects } from "@/components/projects"
import { Experience } from "@/components/experience"
import { Skills } from "@/components/skills"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { ErrorBoundary } from "@/components/error-boundary"

export default function Page() {
  console.log("[v0] Page rendering")
  return (
    <ErrorBoundary>
      <I18nProvider>
        <Header />
        <main>
          <Hero />
          <About />
          <Projects />
          <Experience />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </I18nProvider>
    </ErrorBoundary>
  )
}
