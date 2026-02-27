import { Mail, Github, Linkedin, ArrowUpRight } from "lucide-react"

const contactLinks = [
  {
    label: "Email",
    value: "tu@email.com",
    href: "mailto:tu@email.com",
    icon: Mail,
  },
  {
    label: "GitHub",
    value: "github.com/tuusuario",
    href: "https://github.com",
    icon: Github,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/tuusuario",
    href: "https://linkedin.com",
    icon: Linkedin,
  },
]

export function Contact() {
  return (
    <section id="contacto" className="px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-sm font-medium tracking-widest uppercase text-muted-foreground">
          Contacto
        </h2>
        <div className="mt-6 h-px w-12 bg-foreground" />

        <div className="mt-10">
          <p className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl text-balance">
            {"Si quieres hablar sobre un proyecto o simplemente saludar, no dudes en contactarme."}
          </p>
        </div>

        <div className="mt-10 flex flex-col gap-4">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("mailto") ? undefined : "_blank"}
              rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
              className="group flex items-center justify-between rounded-lg border border-border bg-card px-6 py-4 transition-all hover:border-foreground/20 hover:shadow-sm"
            >
              <div className="flex items-center gap-4">
                <link.icon className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-foreground" />
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    {link.label}
                  </p>
                  <p className="mt-0.5 text-sm font-medium text-foreground">
                    {link.value}
                  </p>
                </div>
              </div>
              <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-all group-hover:text-foreground group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
