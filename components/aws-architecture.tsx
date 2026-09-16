"use client"

import { useI18n } from "@/lib/i18n"

type Service = {
  name: string
  category: { en: string; es: string }
  purpose: { en: string; es: string }
}

const services: Service[] = [
  {
    name: "Route 53",
    category: { en: "Networking & CDN", es: "Red y CDN" },
    purpose: { en: "DNS and traffic routing", es: "DNS y enrutamiento de tráfico" },
  },
  {
    name: "CloudFront",
    category: { en: "Networking & CDN", es: "Red y CDN" },
    purpose: { en: "CDN for low-latency content delivery", es: "CDN para entrega de contenido con baja latencia" },
  },
  {
    name: "Cognito",
    category: { en: "Identity & Security", es: "Identidad y Seguridad" },
    purpose: { en: "User authentication and management", es: "Autenticación y gestión de usuarios" },
  },
  {
    name: "AppSync",
    category: { en: "API & Backend", es: "API y Backend" },
    purpose: { en: "Managed GraphQL API with realtime", es: "API GraphQL gestionada en tiempo real" },
  },
  {
    name: "Lambda",
    category: { en: "Compute", es: "Cómputo" },
    purpose: { en: "Serverless, on-demand business logic", es: "Lógica de negocio serverless bajo demanda" },
  },
  {
    name: "ECS Fargate",
    category: { en: "Compute", es: "Cómputo" },
    purpose: { en: "Serverless containers, no infra to manage", es: "Contenedores serverless sin gestionar infraestructura" },
  },
  {
    name: "DynamoDB",
    category: { en: "Data & Storage", es: "Datos y Almacenamiento" },
    purpose: { en: "Serverless low-latency NoSQL database", es: "Base de datos NoSQL serverless de baja latencia" },
  },
  {
    name: "S3",
    category: { en: "Data & Storage", es: "Datos y Almacenamiento" },
    purpose: { en: "Object storage for files and assets", es: "Almacenamiento de objetos para archivos y assets" },
  },
  {
    name: "Bedrock",
    category: { en: "Artificial Intelligence", es: "Inteligencia Artificial" },
    purpose: { en: "Managed foundation models (LLMs) via API", es: "Modelos fundacionales (LLMs) gestionados vía API" },
  },
  {
    name: "IAM",
    category: { en: "Identity & Security", es: "Identidad y Seguridad" },
    purpose: { en: "Access control: users, roles and permissions", es: "Control de acceso: usuarios, roles y permisos" },
  },
  {
    name: "CloudWatch",
    category: { en: "Observability", es: "Observabilidad" },
    purpose: { en: "Metrics, logs and operational alarms", es: "Métricas, logs y alarmas operativas" },
  },
  {
    name: "CloudTrail",
    category: { en: "Observability", es: "Observabilidad" },
    purpose: { en: "API activity auditing and logging", es: "Auditoría y registro de actividad de la API" },
  },
]

type Layer = {
  label: { en: string; es: string }
  nodes: string[]
}

const flow: Layer[] = [
  { label: { en: "Edge", es: "Borde" }, nodes: ["Route 53", "CloudFront"] },
  { label: { en: "Identity", es: "Identidad" }, nodes: ["Cognito"] },
  { label: { en: "API", es: "API" }, nodes: ["AppSync"] },
  { label: { en: "Compute", es: "Cómputo" }, nodes: ["Lambda", "ECS Fargate"] },
  { label: { en: "Data & AI", es: "Datos e IA" }, nodes: ["DynamoDB", "S3", "Bedrock"] },
]

const crossCutting = ["IAM", "CloudWatch", "CloudTrail"]

export function AwsArchitecture() {
  const { locale } = useI18n()
  const isEs = locale === "es"

  return (
    <section id="aws-architecture" className="bg-background px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-2xl font-bold tracking-tight text-foreground">
          {isEs ? "Arquitectura en AWS" : "AWS Architecture"}
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          {isEs
            ? "Recorrido de una petición a través del stack serverless que utilizo, con servicios transversales de seguridad y observabilidad."
            : "The path of a request through the serverless stack I use, with cross-cutting security and observability services."}
        </p>

        {/* Diagram */}
        <div className="mt-10 rounded-lg border border-border bg-card p-6">
          <div className="flex flex-col gap-3">
            {flow.map((layer, index) => (
              <div key={layer.label.en} className="flex flex-col gap-3">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                  <span className="w-24 shrink-0 font-mono text-xs font-semibold uppercase tracking-wider text-accent">
                    {isEs ? layer.label.es : layer.label.en}
                  </span>
                  <div className="flex flex-1 flex-wrap gap-2">
                    {layer.nodes.map((node) => (
                      <span
                        key={node}
                        className="rounded-md border border-border bg-secondary px-3 py-2 font-mono text-xs font-medium text-foreground"
                      >
                        {node}
                      </span>
                    ))}
                  </div>
                </div>
                {index < flow.length - 1 && (
                  <div className="ml-24 hidden text-muted-foreground sm:block" aria-hidden="true">
                    <span className="font-mono text-xs">↓</span>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-col gap-3 border-t border-border pt-6 sm:flex-row sm:items-center">
            <span className="w-24 shrink-0 font-mono text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              {isEs ? "Transversal" : "Cross-cutting"}
            </span>
            <div className="flex flex-1 flex-wrap gap-2">
              {crossCutting.map((node) => (
                <span
                  key={node}
                  className="rounded-md border border-dashed border-border bg-background px-3 py-2 font-mono text-xs font-medium text-muted-foreground"
                >
                  {node}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="mt-10 overflow-x-auto rounded-lg border border-border bg-card">
          <table className="w-full border-collapse text-left text-sm">
            <caption className="sr-only">
              {isEs ? "Servicios de AWS por categoría y propósito" : "AWS services by category and purpose"}
            </caption>
            <thead>
              <tr className="border-b border-border">
                <th scope="col" className="px-4 py-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {isEs ? "Servicio" : "Service"}
                </th>
                <th scope="col" className="px-4 py-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {isEs ? "Categoría" : "Category"}
                </th>
                <th scope="col" className="px-4 py-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {isEs ? "Propósito" : "Purpose"}
                </th>
              </tr>
            </thead>
            <tbody>
              {services.map((service) => (
                <tr key={service.name} className="border-b border-border last:border-0">
                  <td className="px-4 py-3 font-mono text-xs font-semibold text-foreground">{service.name}</td>
                  <td className="px-4 py-3 text-xs text-accent">{isEs ? service.category.es : service.category.en}</td>
                  <td className="px-4 py-3 text-xs text-muted-foreground">
                    {isEs ? service.purpose.es : service.purpose.en}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
