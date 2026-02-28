"use client"

import { useState } from "react"
import { Menu, X, Globe } from "lucide-react"
import { useI18n } from "@/lib/i18n"

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { t, locale, toggleLocale } = useI18n()

  const navLinks = [
    { href: "#sobre-mi", label: t("nav.about") },
    { href: "#proyectos", label: t("nav.projects") },
    { href: "#experiencia", label: t("nav.experience") },
    { href: "#habilidades", label: t("nav.skills") },
    { href: "#contacto", label: t("nav.contact") },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#" className="text-lg font-semibold tracking-tight text-foreground font-mono">
          @MrCalamitus
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <button
            onClick={toggleLocale}
            className="flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-foreground hover:text-foreground"
            aria-label={locale === "es" ? "Switch to English" : "Cambiar a Espa\u00f1ol"}
          >
            <Globe className="h-3.5 w-3.5" />
            {locale === "es" ? "EN" : "ES"}
          </button>
        </div>

        {/* Mobile controls */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={toggleLocale}
            className="flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-foreground hover:text-foreground"
            aria-label={locale === "es" ? "Switch to English" : "Cambiar a Espa\u00f1ol"}
          >
            <Globe className="h-3.5 w-3.5" />
            {locale === "es" ? "EN" : "ES"}
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-foreground min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label={mobileOpen ? t("nav.closeMenu") : t("nav.openMenu")}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <ul className="flex flex-col px-6 py-4 gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground min-h-[44px] flex items-center"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
