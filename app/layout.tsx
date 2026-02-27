import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains" });

export const metadata: Metadata = {
  title: 'Luis Alberto Ortiz Meza | Co-fundador & Tech Lead | Full-Stack Developer',
  description: 'Luis Alberto Ortiz Meza - Co-fundador y Tech Lead en ZOGA. +15 anos de experiencia en desarrollo full-stack con Node.js, Express, Python, MySQL, Firebase, Oracle, AWS y Terraform. Especialista en arquitectura cloud e infraestructura como codigo.',
  keywords: [
    'Luis Alberto Ortiz Meza',
    'Full-Stack Developer',
    'Tech Lead',
    'Co-fundador ZOGA',
    'Node.js', 'Express', 'Python',
    'MySQL', 'Firebase', 'Oracle',
    'AWS', 'Terraform',
    'Software Engineer Mexico',
    'Cloud Architecture',
    'Infrastructure as Code',
    'mrcalamitus',
  ],
  authors: [{ name: 'Luis Alberto Ortiz Meza', url: 'https://www.linkedin.com/in/mrcalamitus' }],
  creator: 'Luis Alberto Ortiz Meza',
  openGraph: {
    type: 'website',
    locale: 'es_MX',
    title: 'Luis Alberto Ortiz Meza | Co-fundador & Tech Lead en ZOGA',
    description: 'Full-Stack Developer con +15 anos de experiencia. Node.js, Python, AWS, Terraform, MySQL, Firebase, Oracle.',
    siteName: 'Luis Alberto Ortiz Meza - Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Luis Alberto Ortiz Meza | Co-fundador & Tech Lead en ZOGA',
    description: 'Full-Stack Developer con +15 anos de experiencia. Node.js, Python, AWS, Terraform, MySQL, Firebase, Oracle.',
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
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Luis Alberto Ortiz Meza',
  alternateName: 'mrcalamitus',
  jobTitle: 'Co-fundador & Tech Lead',
  worksFor: {
    '@type': 'Organization',
    name: 'ZOGA mobile & IT',
    url: 'https://zoga.com.mx',
  },
  url: 'https://www.linkedin.com/in/mrcalamitus',
  sameAs: [
    'https://www.linkedin.com/in/mrcalamitus',
    'https://github.com/mrcalamitus',
    'https://zoga.com.mx',
  ],
  knowsAbout: [
    'Node.js', 'Express.js', 'Python', 'JavaScript', 'TypeScript',
    'MySQL', 'Firebase', 'Oracle Database',
    'Amazon Web Services', 'AWS Cloud Practitioner',
    'Terraform', 'Infrastructure as Code',
    'Docker', 'CI/CD', 'Linux',
    'REST APIs', 'Microservices Architecture',
    'Full-Stack Development', 'Mobile Development',
    'Cloud Architecture', 'DevOps',
    'Team Leadership', 'Technical Architecture',
  ],
  hasCredential: {
    '@type': 'EducationalOccupationalCredential',
    name: 'AWS Cloud Practitioner',
    credentialCategory: 'Certificate',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
