"use client"

import { useI18n } from "@/lib/i18n"

export function Footer() {
  const { t } = useI18n()
  return (
    <footer className="border-t border-border px-6 py-8">
      <p className="text-center text-xs text-muted-foreground">
        {`\u00A9 ${new Date().getFullYear()} Luis Alberto Ortiz Meza. ${t("footer.rights")}`}
      </p>
    </footer>
  )
}
