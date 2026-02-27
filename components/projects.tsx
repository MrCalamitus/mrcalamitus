import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "Plataforma ZOGA",
    description:
      "Sitio web corporativo y plataforma de servicios de ZOGA. Desarrollo web, mobile y soluciones IT para clientes empresariales en Mexico.",
    tags: ["Node.js", "MySQL", "AWS", "Terraform"],
    github: null,
    live: "https://zoga.com.mx",
  },
  {
    title: "Apps Moviles Empresariales",
    description:
      "Desarrollo de aplicaciones moviles nativas e hibridas para clientes de ZOGA. Integraciones con APIs, notificaciones push y sistemas de autenticacion con Firebase.",
    tags: ["React Native", "Firebase", "Node.js", "REST APIs"],
    github: null,
    live: null,
  },
  {
    title: "Infraestructura Cloud AWS",
    description:
      "Diseno e implementacion de infraestructura cloud como codigo. Pipelines CI/CD, contenedores, balanceo de carga, monitoreo y gestion con Terraform.",
    tags: ["AWS", "Terraform", "Docker", "CI/CD", "Linux"],
    github: null,
    live: null,
  },
  {
    title: "APIs & Microservicios",
    description:
      "Arquitectura de microservicios para plataformas de alta disponibilidad. APIs REST con Node.js y Python, almacenamiento en MySQL y Oracle.",
    tags: ["Node.js", "Express", "Python", "MySQL", "Oracle"],
    github: "https://github.com/mrcalamitus",
    live: null,
  },
]

export function Projects() {
  return (
    <section id="proyectos" className="bg-secondary/50 px-6 py-24" aria-label="Proyectos destacados">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-sm font-medium tracking-widest uppercase text-muted-foreground">
          Proyectos
        </h2>
        <div className="mt-6 h-px w-12 bg-foreground" aria-hidden="true" />

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
