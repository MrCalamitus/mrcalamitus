const experiences = [
  {
    period: "2011 -- Presente",
    role: "Co-fundador, Tech Lead & Full-Stack Developer",
    company: "ZOGA mobile & IT",
    companyUrl: "https://zoga.com.mx",
    description:
      "Co-funde ZOGA junto con un amigo hace mas de 15 anos. Lidero el equipo tecnico y participo activamente en el desarrollo full-stack de proyectos web, mobile y soluciones IT. Defino la arquitectura de sistemas, gestiono infraestructura cloud en AWS con Terraform y mentorizo al equipo de desarrollo. Trabajo diario con Node.js, Express, Python, MySQL, Firebase y Oracle.",
    tags: ["Node.js", "Express", "Python", "MySQL", "Firebase", "Oracle", "AWS", "Terraform"],
  },
  {
    period: "2009 -- 2011",
    role: "Full-Stack Developer",
    company: "Freelance / Proyectos Independientes",
    companyUrl: null,
    description:
      "Desarrolle proyectos web y aplicaciones a medida para diversos clientes. Construi APIs, integre servicios de terceros y gane experiencia en multiples tecnologias que posteriormente aplique en la creacion de ZOGA.",
    tags: ["Python", "JavaScript", "MySQL", "Linux"],
  },
]

export function Experience() {
  return (
    <section id="experiencia" className="px-6 py-24" aria-label="Experiencia profesional">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-sm font-medium tracking-widest uppercase text-muted-foreground">
          Experiencia
        </h2>
        <div className="mt-6 h-px w-12 bg-foreground" aria-hidden="true" />

        <div className="mt-12 flex flex-col gap-12">
          {experiences.map((exp) => (
            <div key={exp.role} className="group relative flex gap-8">
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
                {exp.companyUrl ? (
                  <a
                    href={exp.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-muted-foreground underline underline-offset-4 decoration-border hover:decoration-foreground hover:text-foreground transition-colors"
                  >
                    {exp.company}
                  </a>
                ) : (
                  <p className="text-sm font-medium text-muted-foreground">
                    {exp.company}
                  </p>
                )}
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
