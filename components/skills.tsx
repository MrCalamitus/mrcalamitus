const skillCategories = [
  {
    category: "Backend",
    skills: ["Node.js", "Express", "Python", "Django", "REST APIs", "PostgreSQL"],
  },
  {
    category: "Cloud & DevOps",
    skills: ["AWS (EC2, S3, Lambda)", "Docker", "CI/CD", "CloudFormation", "Linux", "Nginx"],
  },
  {
    category: "Frontend & Mobile",
    skills: ["React", "Next.js", "JavaScript", "TypeScript", "Tailwind CSS", "React Native"],
  },
  {
    category: "Liderazgo & Proceso",
    skills: ["Arquitectura de Software", "Gestion de Equipos", "Agile / Scrum", "Code Review", "Mentorias", "Planificacion Tecnica"],
  },
]

export function Skills() {
  return (
    <section id="habilidades" className="bg-secondary/50 px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-sm font-medium tracking-widest uppercase text-muted-foreground">
          Habilidades
        </h2>
        <div className="mt-6 h-px w-12 bg-foreground" />

        <div className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((cat) => (
            <div key={cat.category}>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-foreground">
                {cat.category}
              </h3>
              <ul className="mt-4 flex flex-col gap-2">
                {cat.skills.map((skill) => (
                  <li
                    key={skill}
                    className="text-sm text-muted-foreground"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
