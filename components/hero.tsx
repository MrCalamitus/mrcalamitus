import Image from "next/image"
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react"

export function Hero() {
  return (
    <section className="flex min-h-screen items-center justify-center px-6 pt-20" aria-label="Presentacion">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 text-center">
        <div className="relative h-32 w-32 overflow-hidden rounded-full border-2 border-border shadow-sm">
          <Image
            src="/images/avatar.jpg"
            alt="Luis Alberto Ortiz Meza - Co-fundador y Tech Lead en ZOGA"
            fill
            className="object-cover object-top"
            priority
          />
        </div>

        <div className="flex flex-col gap-4">
          <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground">
            Co-fundador & Tech Lead en ZOGA
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-6xl text-balance">
            Luis Alberto Ortiz Meza
          </h1>
          <p className="mx-auto max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
            +15 anos construyendo soluciones digitales. Full-Stack Developer
            especializado en Node.js, Python, bases de datos y arquitectura cloud con AWS y Terraform.
          </p>
        </div>

        <div className="flex flex-col items-center gap-6 sm:flex-row">
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/mrcalamitus"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-foreground hover:text-foreground"
              aria-label="Perfil de GitHub de Luis Alberto Ortiz Meza"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/mrcalamitus"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-foreground hover:text-foreground"
              aria-label="Perfil de LinkedIn de Luis Alberto Ortiz Meza"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href="mailto:contacto@zoga.com.mx"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-foreground hover:text-foreground"
              aria-label="Enviar email a Luis Alberto Ortiz Meza"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>

          <a
            href="/cv-luis-alberto-ortiz-meza.pdf"
            download
            className="flex items-center gap-2 rounded-full border border-foreground bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
          >
            <Download className="h-4 w-4" />
            Descargar CV
          </a>
        </div>

        <a
          href="#sobre-mi"
          className="mt-8 animate-bounce text-muted-foreground transition-colors hover:text-foreground"
          aria-label="Ir a la siguiente seccion"
        >
          <ArrowDown className="h-5 w-5" />
        </a>
      </div>

      {/* Texto oculto para ATS e IA - accesible pero no visible */}
      <div className="sr-only">
        <p>
          Luis Alberto Ortiz Meza es un Full-Stack Software Developer y Tech Lead con mas de 15 anos
          de experiencia profesional. Co-fundador de ZOGA mobile & IT, una empresa de desarrollo de
          software en Mexico. Tecnologias principales: Node.js, Express.js, Python, JavaScript,
          TypeScript, MySQL, Firebase, Firestore, Oracle Database, Amazon Web Services (AWS),
          Terraform, Docker, CI/CD, Linux, REST APIs, Microservices. Certificacion: AWS Cloud
          Practitioner. Habilidades de liderazgo: Arquitectura de Software, Gestion de Equipos,
          Agile, Scrum, Code Review, Mentorias. Ubicacion: Mexico. Disponible para oportunidades
          remotas e hibridas.
        </p>
      </div>
    </section>
  )
}
