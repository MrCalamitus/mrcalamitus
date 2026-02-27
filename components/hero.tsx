import Image from "next/image"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"

export function Hero() {
  return (
    <section className="flex min-h-screen items-center justify-center px-6 pt-20">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 text-center">
        <div className="relative h-28 w-28 overflow-hidden rounded-full border-2 border-border">
          <Image
            src="/images/avatar.jpg"
            alt="Foto de perfil"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="flex flex-col gap-4">
          <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground">
            Software Developer
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-6xl text-balance">
            Hola, soy Tu Nombre
          </h1>
          <p className="mx-auto max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
            Desarrollo aplicaciones web modernas con enfoque en rendimiento,
            accesibilidad y experiencia de usuario.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-foreground hover:text-foreground"
            aria-label="GitHub"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-foreground hover:text-foreground"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href="mailto:tu@email.com"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-foreground hover:text-foreground"
            aria-label="Email"
          >
            <Mail className="h-4 w-4" />
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
    </section>
  )
}
