import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "Plataforma de comercio electronico completa con carrito de compras, pagos y panel de administracion. Construida con Next.js, TypeScript y Stripe.",
    tags: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "Task Manager App",
    description:
      "Aplicacion de gestion de tareas con drag-and-drop, colaboracion en tiempo real y notificaciones. API REST con autenticacion JWT.",
    tags: ["React", "Node.js", "PostgreSQL", "Socket.io"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "Analytics Dashboard",
    description:
      "Dashboard interactivo para visualizacion de datos con graficos en tiempo real, filtros avanzados y exportacion de reportes.",
    tags: ["React", "D3.js", "Python", "FastAPI"],
    github: "https://github.com",
    live: null,
  },
  {
    title: "CLI DevTools",
    description:
      "Herramienta de linea de comandos para automatizar flujos de trabajo de desarrollo: scaffolding, linting y despliegue.",
    tags: ["Node.js", "TypeScript", "Commander.js"],
    github: "https://github.com",
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
