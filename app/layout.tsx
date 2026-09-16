import type { Metadata, Viewport } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains" })

export const metadata: Metadata = {
  title: "Luis Alberto Ortiz Meza - Solutions Architect | Cloud & Applied AI | Tech Lead",
  description:
    "Portfolio of Luis Alberto Ortiz Meza, solutions architect and tech lead with 14+ years building secure, regulated software on AWS. Co-founder & CTO at ZOGA. Applied AI: RAG on AWS Bedrock, multi-agent LLM pipelines and computer vision.",
  keywords: [
    "Luis Alberto Ortiz Meza",
    "MrCalamitus",
    "Solutions Architect",
    "Cloud Architect",
    "Applied AI",
    "Tech Lead",
    "CTO",
    "ZOGA",
    "AWS",
    "Amazon Bedrock",
    "RAG",
    "Multi-agent LLM",
    "Terraform",
    "Python",
    "Node.js",
    "Mexico City",
  ],
  authors: [{ name: "Luis Alberto Ortiz Meza" }],
  openGraph: {
    title: "Luis Alberto Ortiz Meza - Solutions Architect | Cloud & Applied AI | Tech Lead",
    description:
      "Solutions architect and tech lead with 14+ years building secure, regulated software on AWS. Co-founder & CTO at ZOGA. Applied AI in RAG, multi-agent LLMs and computer vision.",
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
              jobTitle: "Solutions Architect | Cloud & Applied AI | Tech Lead",
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
                "Solution Architecture",
                "AWS",
                "Amazon Bedrock",
                "Retrieval-Augmented Generation",
                "Multi-agent LLM Systems",
                "PyTorch",
                "Terraform",
                "Python",
                "Node.js",
                "Information Security",
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
