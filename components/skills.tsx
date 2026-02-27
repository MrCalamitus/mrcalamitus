import { Award } from "lucide-react"

const skillCategories = [
  {
    category: "Backend",
    skills: ["Node.js", "Express.js", "Python", "REST APIs", "Microservicios"],
  },
  {
    category: "Bases de Datos",
    skills: ["MySQL", "Firebase / Firestore", "Oracle Database", "SQL / NoSQL", "Modelado de Datos"],
  },
  {
    category: "Cloud & DevOps",
    skills: ["AWS (EC2, S3, Lambda, RDS)", "Terraform (IaC)", "Docker", "CI/CD Pipelines", "Linux / Nginx"],
  },
  {
    category: "Liderazgo & Proceso",
    skills: ["Arquitectura de Software", "Gestion de Equipos", "Agile / Scrum", "Code Review", "Mentorias", "Planificacion Tecnica"],
  },
]

export function Skills() {
  return (
    <section id="habilidades" className="bg-secondary/50 px-6 py-24" aria-label="Habilidades tecnicas y certificaciones">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-sm font-medium tracking-widest uppercase text-muted-foreground">
          Habilidades
        </h2>
        <div className="mt-6 h-px w-12 bg-foreground" aria-hidden="true" />

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

        {/* Certificaciones */}
        <div className="mt-16">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-foreground">
            Certificaciones
          </h3>
          <div className="mt-4 flex flex-wrap gap-4">
            <div className="flex items-center gap-3 rounded-lg border border-border bg-card px-5 py-3">
              <Award className="h-5 w-5 text-foreground" />
              <div>
                <p className="text-sm font-medium text-foreground">AWS Cloud Practitioner</p>
                <p className="text-xs text-muted-foreground">Amazon Web Services</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
