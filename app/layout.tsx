import type { Metadata, Viewport } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains" })

export const metadata: Metadata = {
  title: "Luis Alberto Ortiz Meza - CTO & Co-founder at ZOGA",
  description:
    "Portfolio of Luis Alberto Ortiz Meza. CTO, Co-founder and Tech Lead at ZOGA with 14+ years of experience in full-stack development, Node.js, Java, AWS and Terraform.",
  keywords: [
    "Luis Alberto Ortiz Meza",
    "MrCalamitus",
    "Software Developer",
    "Full-Stack Developer",
    "CTO",
    "ZOGA",
    "Node.js",
    "Java",
    "AWS",
    "Terraform",
    "MySQL",
    "Firebase",
    "Oracle",
    "NativeScript",
    "Mexico",
  ],
  authors: [{ name: "Luis Alberto Ortiz Meza" }],
  openGraph: {
    title: "Luis Alberto Ortiz Meza - CTO & Co-founder at ZOGA",
    description:
      "CTO and Co-founder at ZOGA with 14+ years building digital solutions. Full-Stack Developer specialized in Node.js, Java, AWS and Terraform.",
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
              jobTitle: "CTO & Co-founder",
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
                "Node.js",
                "Java",
                "AWS",
                "Terraform",
                "MySQL",
                "Firebase",
                "Oracle",
                "NativeScript",
                "Full-Stack Development",
                "Cloud Architecture",
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
