import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { Suspense } from 'react'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains" });

export const metadata: Metadata = {
  title: 'Luis Alberto Ortiz Meza | CTO & Solution Architect | Full-Stack Developer',
  description: 'Luis Alberto Ortiz Meza - CTO y Co-fundador de ZOGA. +15 a\u00f1os de experiencia en desarrollo full-stack con Node.js, Express, Java, MySQL, Firebase, Oracle, AWS y Terraform. Especialista en arquitectura cloud, ciberseguridad e integraci\u00f3n de IA.',
  keywords: [
    'Luis Alberto Ortiz Meza',
    'CTO', 'Solution Architect',
    'Full-Stack Developer',
    'Co-fundador ZOGA',
    'Node.js', 'Express', 'Java',
    'MySQL', 'Firebase', 'Oracle',
    'AWS', 'Terraform',
    'Software Engineer Mexico',
    'Cloud Architecture',
    'Infrastructure as Code',
    'Cybersecurity',
    'OpenAI', 'RAG', 'AI Integration',
    'NativeScript',
    'mrcalamitus', 'MrCalamitus',
    'Certisep', 'D\u00edgipris', 'Iaprep',
    'Upperbus', 'Rideupp',
  ],
  authors: [{ name: 'Luis Alberto Ortiz Meza', url: 'https://www.linkedin.com/in/mrcalamitus' }],
  creator: 'Luis Alberto Ortiz Meza',
  openGraph: {
    type: 'website',
    locale: 'es_MX',
    alternateLocale: 'en_US',
    title: 'Luis Alberto Ortiz Meza | CTO & Solution Architect en ZOGA',
    description: 'Full-Stack Developer con +15 a\u00f1os de experiencia. Node.js, Java, AWS, Terraform, MySQL, Firebase, Oracle. Especialista en IA y Ciberseguridad.',
    siteName: 'Luis Alberto Ortiz Meza - Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Luis Alberto Ortiz Meza | CTO & Solution Architect en ZOGA',
    description: 'Full-Stack Developer con +15 a\u00f1os de experiencia. Node.js, Java, AWS, Terraform, MySQL, Firebase, Oracle.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#f5f5f5',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Luis Alberto Ortiz Meza',
  alternateName: 'MrCalamitus',
  jobTitle: 'CTO & Solution Architect',
  description: 'Arquitecto de Soluciones Cloud y L\u00edder T\u00e9cnico con 15 a\u00f1os de experiencia dise\u00f1ando e implementando sistemas de gran escala. Especialista en la convergencia de Software, Hardware e IA.',
  worksFor: {
    '@type': 'Organization',
    name: 'ZOGA mobile & IT',
    url: 'https://zoga.com.mx',
  },
  url: 'https://www.linkedin.com/in/mrcalamitus',
  email: 'luis@zoga.com.mx',
  sameAs: [
    'https://www.linkedin.com/in/mrcalamitus',
    'https://github.com/mrcalamitus',
    'https://zoga.com.mx',
  ],
  knowsAbout: [
    'Node.js', 'Express.js', 'Java', 'JavaScript', 'TypeScript',
    'NativeScript', 'MySQL', 'Firebase', 'Oracle Database',
    'Amazon Web Services', 'AWS Cloud Practitioner',
    'Terraform', 'Infrastructure as Code',
    'Docker', 'CI/CD', 'Linux',
    'REST APIs', 'Microservices Architecture',
    'Full-Stack Development', 'Mobile Development',
    'Cloud Architecture', 'DevOps',
    'OpenAI', 'LLM', 'RAG', 'AI Integration',
    'Cybersecurity', 'Security by Design',
    'Team Leadership', 'Technical Architecture',
    'IoT', 'Telemetry',
  ],
  hasCredential: [
    {
      '@type': 'EducationalOccupationalCredential',
      name: 'AWS Cloud Practitioner',
      credentialCategory: 'Certificate',
    },
    {
      '@type': 'EducationalOccupationalCredential',
      name: 'Maestr\u00eda en Ciberseguridad',
      credentialCategory: 'Degree',
    },
    {
      '@type': 'EducationalOccupationalCredential',
      name: 'Ingenier\u00eda de Software / Computaci\u00f3n',
      credentialCategory: 'Degree',
    },
  ],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'CDMX / M\u00e9rida',
    addressCountry: 'MX',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        {children}
        <Suspense fallback={null}>
          <Analytics />
        </Suspense>
      </body>
    </html>
  )
}
