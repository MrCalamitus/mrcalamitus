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
            Soy Luis Alberto Ortiz Meza, co-fundador y Tech Lead de{" "}
            <a
              href="https://zoga.com.mx"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-foreground underline underline-offset-4 decoration-border hover:decoration-foreground transition-colors"
            >
              ZOGA
            </a>
            , una empresa especializada en desarrollo mobile, web y soluciones IT.
            Durante mas de 15 anos he liderado equipos y construido productos
            digitales que resuelven problemas reales para nuestros clientes.
          </p>
          <p>
            Mi stack principal gira en torno a Node.js y Express para backend,
            Python y Django para servicios especializados, y AWS para
            infraestructura cloud. Me apasiona disenar arquitecturas escalables,
            automatizar procesos y llevar proyectos desde la idea hasta produccion.
          </p>
          <p>
            En ZOGA he tenido la oportunidad de trabajar en proyectos de diversa
            escala: desde apps moviles hasta plataformas empresariales complejas,
            siempre con un enfoque en calidad, rendimiento y la mejor experiencia
            para el usuario final.
          </p>
        </div>
      </div>
    </section>
  )
}
