const skillCategories = [
  {
    category: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS", "Vue.js"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Python", "PostgreSQL", "REST APIs", "GraphQL", "Redis"],
  },
  {
    category: "Herramientas",
    skills: ["Git", "Docker", "AWS", "Vercel", "Figma", "CI/CD"],
  },
  {
    category: "Otros",
    skills: ["Testing", "Agile/Scrum", "Accesibilidad", "SEO", "Rendimiento Web", "Linux"],
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
