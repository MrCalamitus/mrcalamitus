"use client"

import { useI18n } from "@/lib/i18n"

const experiences = [
  {
    periodEs: "mar 2012 \u2014 Presente",
    periodEn: "Mar 2012 \u2014 Present",
    titleEs: "Cofundador y CTO",
    titleEn: "Co-founder & CTO",
    company: "ZOGA mobile & IT",
    companyUrl: "https://zoga.com.mx",
    descEs:
      "Empresa de desarrollo de software. Dirijo la visi\u00f3n t\u00e9cnica, la arquitectura de soluciones y equipos de hasta 5 personas. Desde 2018 dise\u00f1o y dirijo Certisep, el producto SaaS de ZOGA para emitir, firmar electr\u00f3nicamente y validar t\u00edtulos y certificados electr\u00f3nicos (XML SEP). Dise\u00f1\u00e9 y desplegu\u00e9 pipelines multiagente de prospecci\u00f3n con LLM locales (CrewAI + Ollama): las visitas semanales al sitio pasaron de 2\u20135 a 80\u201390, con 5 prospectos calificados por semana. Encabec\u00e9 la adopci\u00f3n de IA del equipo en desarrollo, captaci\u00f3n de clientes y an\u00e1lisis de documentos.",
    descEn:
      "Software development company. I lead the technical vision, solution architecture and teams of up to 5 engineers. Since 2018 I have architected and led Certisep, ZOGA\u2019s SaaS product for issuing, digitally signing and validating electronic degrees and certificates (SEP XML standard). Designed and deployed multi-agent prospecting pipelines with local LLMs (CrewAI + Ollama): weekly site visits grew from 2\u20135 to 80\u201390, generating 5 qualified leads per week. Led the team\u2019s AI adoption in development, customer acquisition and document analysis.",
    tags: ["Solution Architecture", "Multi-Agent Systems", "Local LLMs", "AWS", "Terraform", "Node.js", "Python", "Security by Design"],
  },
  {
    periodEs: "mar 2012 \u2014 2026",
    periodEn: "Mar 2012 \u2014 2026",
    titleEs: "Desarrollador \u2192 Arquitecto Cloud y Desarrollador L\u00edder",
    titleEn: "Software Developer \u2192 Cloud Architect & Lead Developer",
    company: "Instituto Polit\u00e9cnico Nacional (IPN) \u2014 ESIME Culhuac\u00e1n",
    companyUrl: "",
    descEs:
      "Proyectos de tecnolog\u00eda para gobierno por convenio de colaboraci\u00f3n del IPN, por proyecto y en paralelo a ZOGA; empec\u00e9 como desarrollador y crec\u00ed a l\u00edder de equipo y arquitecto cloud. IAPREP: arquitecto cloud del producto de IA del equipo para leer actas electorales, evaluado por el INE en 2024 como el mejor de 3 soluciones. COFEPRIS: arquitecto y desarrollador l\u00edder de un motor de flujos que digitaliz\u00f3 m\u00e1s de 100 tr\u00e1mites regulatorios. INE e IEEM: auditor\u00edas de sistemas electorales, incluido el voto por internet y 4 modelos de urna electr\u00f3nica. Red Integral Notarial: l\u00edder de backend y administrador cloud, con VPN para 250 notar\u00edas. Tambi\u00e9n IoT para detecci\u00f3n de fugas de gas (SECTEI, 5,000 dispositivos) y facturaci\u00f3n electr\u00f3nica para TIMEX (5,000 facturas por minuto).",
    descEn:
      "Project-based government technology work under IPN collaboration agreements, in parallel with ZOGA; started as a developer and grew into team lead and cloud architect. IAPREP: cloud architect of the team\u2019s AI product that reads electoral tally sheets, rated best of 3 solutions in INE\u2019s 2024 evaluation. COFEPRIS: architect and lead developer of a workflow engine that digitized 100+ regulatory procedures. INE and IEEM: electoral system audits, including internet voting and 4 electronic voting machine models. Red Integral Notarial: lead backend engineer and cloud administrator, with a VPN for 250 notary offices. Also IoT gas-leak detection (SECTEI, 5,000 devices) and CFDI e-invoicing for TIMEX (5,000 invoices per minute).",
    tags: ["PyTorch", "AWS Serverless", "AppSync", "DynamoDB", "Terraform", "IoT", "Security Audits", "e.firma"],
  },
  {
    periodEs: "2015 \u2014 2017",
    periodEn: "2015 \u2014 2017",
    titleEs: "Cofundador",
    titleEn: "Co-founder",
    company: "Upperbus (despu\u00e9s Rideupp)",
    companyUrl: "",
    descEs:
      "Startup de movilidad urbana. Naci\u00f3 como Upperbus, rutas de autob\u00fas compartidas para personas con origen y destino en com\u00fan, y despu\u00e9s pivot\u00f3 su modelo de negocio a Rideupp, una plataforma de carpool. Liderazgo de producto, equipo multidisciplinario y operaci\u00f3n en ciudad.",
    descEn:
      "Urban mobility startup. Launched as Upperbus, shared bus routes for commuters with a common origin and destination, then pivoted the business model to Rideupp, a carpooling platform. Product leadership, multidisciplinary team and city operations.",
    tags: ["NativeScript", "Node.js", "Firebase", "AWS", "Product Leadership"],
  },
]

export function Experience() {
  const { locale, t } = useI18n()

  return (
    <section id="experience" className="px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-2xl font-bold tracking-tight text-foreground">
          {t("experience.title")}
        </h2>
        <div className="mt-10 space-y-10">
          {experiences.map((exp, i) => {
            const period = locale === "es" ? exp.periodEs : exp.periodEn
            const title = locale === "es" ? exp.titleEs : exp.titleEn
            const desc = locale === "es" ? exp.descEs : exp.descEn
            return (
              <div key={i} className="relative border-l-2 border-border pl-6">
                <div className="absolute -left-[7px] top-1.5 h-3 w-3 rounded-full border-2 border-accent bg-background" />
                <p className="text-xs font-medium text-accent">{period}</p>
                <h3 className="mt-1 text-lg font-semibold text-foreground">{title}</h3>
                {exp.companyUrl ? (
                  <a
                    href={exp.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-accent underline underline-offset-4"
                  >
                    {exp.company}
                  </a>
                ) : (
                  <p className="text-sm font-medium text-muted-foreground">{exp.company}</p>
                )}
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
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
            )
          })}
        </div>
      </div>
    </section>
  )
}
