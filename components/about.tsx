export function About() {
  return (
    <section id="sobre-mi" className="px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-sm font-medium tracking-widest uppercase text-muted-foreground">
          Sobre mi
        </h2>
        <div className="mt-6 h-px w-12 bg-foreground" />

        <div className="mt-10 flex flex-col gap-6 text-base leading-relaxed text-muted-foreground">
          <p>
            Soy un desarrollador de software apasionado por crear experiencias
            digitales que combinan un buen diseno con una ingenieria robusta.
            Mi trabajo se centra en la interseccion entre diseno y desarrollo,
            creando aplicaciones que no solo funcionan bien, sino que se sienten bien.
          </p>
          <p>
            He tenido la oportunidad de trabajar en diversos entornos: desde startups
            hasta empresas consolidadas, contribuyendo en proyectos de frontend,
            backend y arquitectura de sistemas. Me motiva resolver problemas
            complejos con soluciones elegantes.
          </p>
          <p>
            Cuando no estoy programando, me gusta leer sobre tecnologia,
            contribuir a proyectos open source y aprender nuevas herramientas
            que mejoren mi flujo de trabajo.
          </p>
        </div>
      </div>
    </section>
  )
}
