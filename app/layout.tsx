import type { Metadata, Viewport } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains" })

export const metadata: Metadata = {
  title: "Luis Alberto Ortiz Meza — Tech Leader & AI Strategist | CTO at ZOGA",
  description:
    "Tech leader with 14+ years building AI-powered products in regulated industries. CTO & co-founder at ZOGA. I help organizations turn AI from buzzword to production systems.",
  keywords: [
    "Luis Alberto Ortiz Meza",
    "MrCalamitus",
    "Tech Leader",
    "AI Strategist",
    "AI Strategy",
    "AI Leadership",
    "Engineering Management",
    "Head of AI",
    "Tech Strategy",
    "LLM",
    "GenAI",
    "AI Transformation",
    "CTO",
    "ZOGA",
    "Node.js",
    "Python",
    "AWS",
    "Terraform",
    "Mexico",
  ],
  authors: [{ name: "Luis Alberto Ortiz Meza" }],
  openGraph: {
    title: "Luis Alberto Ortiz Meza — Tech Leader & AI Strategist | CTO at ZOGA",
    description:
      "Tech leader with 14+ years building AI-powered products in regulated industries. CTO & co-founder at ZOGA. I help organizations turn AI from buzzword to production systems.",
    type: "website",
    locale: "en_US",
    alternateLocale: "es_MX",
  },
}

export const viewport: Viewport = {
  themeColor: "#f8f8f8",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Luis Alberto Ortiz Meza",
              alternateName: "MrCalamitus",
              jobTitle: "Tech Leader & AI Strategist",
              worksFor: {
                "@type": "Organization",
                name: "ZOGA",
                url: "https://zoga.com.mx",
              },
              url: "https://mrcalamitus.com",
              sameAs: [
                "https://linkedin.com/in/mrcalamitus",
                "https://github.com/mrcalamitus",
              ],
              knowsAbout: [
                "AI Strategy",
                "LLM Integration",
                "Engineering Leadership",
                "AI Product Development",
                "Cloud Architecture",
                "AWS",
                "Terraform",
                "Node.js",
                "Python",
                "GenAI",
                "AI Governance",
              ],
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
