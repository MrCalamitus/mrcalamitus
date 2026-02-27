import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "Plataforma ZOGA",
    description:
      "Sitio web corporativo y plataforma de servicios de ZOGA. Desarrollo web, mobile y soluciones IT para clientes empresariales en Mexico.",
    tags: ["Node.js", "AWS", "Web", "IT Solutions"],
    github: null,
    live: "https://zoga.com.mx",
  },
  {
    title: "Apps Moviles Empresariales",
    description:
      "Desarrollo de aplicaciones moviles nativas e hibridas para clientes de ZOGA. Integraciones con APIs, notificaciones push y sistemas de autenticacion.",
    tags: ["React Native", "Node.js", "REST APIs", "Push Notifications"],
    github: null,
    live: null,
  },
  {
    title: "Arquitectura Cloud AWS",
    description:
      "Diseno e implementacion de infraestructura cloud para multiples proyectos. Pipelines CI/CD, contenedores, balanceo de carga y monitoreo.",
    tags: ["AWS", "Docker", "CI/CD", "CloudFormation"],
    github: null,
    live: null,
  },
  {
    title: "APIs & Microservicios",
    description:
      "Arquitectura de microservicios para plataformas de alta disponibilidad. APIs REST y servicios backend con Node.js y Python para diversos clientes.",
    tags: ["Node.js", "Express", "Python", "Django", "PostgreSQL"],
    github: "https://github.com/mrcalamitus",
    live: null,
  },
]

export function Projects() {
  return (
    <section id="proyectos" className="bg-secondary/50 px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-sm font-medium tracking-widest uppercase text-muted-foreground">
          Proyectos
        </h2>
        <div className="mt-6 h-px w-12 bg-foreground" />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group flex flex-col justify-between rounded-lg border border-border bg-card p-6 transition-all hover:border-foreground/20 hover:shadow-sm"
            >
              <div>
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg font-semibold text-foreground">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground transition-colors hover:text-foreground"
                        aria-label={`Ver codigo de ${project.title} en GitHub`}
                      >
                        <Github className="h-4 w-4" />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground transition-colors hover:text-foreground"
                        aria-label={`Ver demo de ${project.title}`}
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
