const experiences = [
  {
    period: "2023 -- Presente",
    role: "Senior Frontend Developer",
    company: "Tech Company",
    description:
      "Lidero el desarrollo del frontend de la plataforma principal. Implemento nuevas funcionalidades, mejoro el rendimiento y mentorizo a desarrolladores junior.",
    tags: ["React", "TypeScript", "Next.js", "GraphQL"],
  },
  {
    period: "2021 -- 2023",
    role: "Full Stack Developer",
    company: "Startup SaaS",
    description:
      "Desarrolle funcionalidades end-to-end para una plataforma SaaS B2B. Diseñe APIs REST, implemente integraciones con terceros y optimice consultas de base de datos.",
    tags: ["Node.js", "React", "PostgreSQL", "AWS"],
  },
  {
    period: "2019 -- 2021",
    role: "Frontend Developer",
    company: "Agencia Digital",
    description:
      "Construi sitios web y aplicaciones interactivas para multiples clientes. Trabaje con equipos de diseno para traducir mockups en interfaces funcionales y responsivas.",
    tags: ["JavaScript", "Vue.js", "SCSS", "Figma"],
  },
  {
    period: "2018 -- 2019",
    role: "Junior Developer",
    company: "Consultora IT",
    description:
      "Comence mi carrera profesional desarrollando modulos internos, automatizando procesos y aprendiendo buenas practicas de desarrollo de software.",
    tags: ["Java", "Spring Boot", "MySQL"],
  },
]

export function Experience() {
  return (
    <section id="experiencia" className="px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-sm font-medium tracking-widest uppercase text-muted-foreground">
          Experiencia
        </h2>
        <div className="mt-6 h-px w-12 bg-foreground" />

        <div className="mt-12 flex flex-col gap-12">
          {experiences.map((exp) => (
            <div key={exp.role} className="group relative flex gap-8">
              {/* Timeline line */}
              <div className="hidden md:flex flex-col items-center">
                <div className="h-3 w-3 rounded-full border-2 border-foreground bg-background" />
                <div className="w-px flex-1 bg-border" />
              </div>

              <div className="flex-1">
                <p className="text-xs font-mono tracking-wider text-muted-foreground">
                  {exp.period}
                </p>
                <h3 className="mt-2 text-base font-semibold text-foreground">
                  {exp.role}
                </h3>
                <p className="text-sm font-medium text-muted-foreground">
                  {exp.company}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {exp.description}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
