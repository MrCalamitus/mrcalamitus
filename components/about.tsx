export function About() {
  return (
    <section id="sobre-mi" className="px-6 py-24" aria-label="Sobre mi">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-sm font-medium tracking-widest uppercase text-muted-foreground">
          Sobre mi
        </h2>
        <div className="mt-6 h-px w-12 bg-foreground" aria-hidden="true" />

        <div className="mt-10 flex flex-col gap-6 text-base leading-relaxed text-muted-foreground">
          <p>
            Soy Luis Alberto Ortiz Meza, co-fundador y Tech Lead de{" "}
            <a
              href="https://zoga.com.mx"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-foreground underline underline-offset-4 decoration-border hover:decoration-foreground transition-colors"
            >
              ZOGA mobile & IT
            </a>
            , una empresa de desarrollo de software que funde junto con un amigo hace
            mas de 15 anos. Nos especializamos en desarrollo mobile, web y
            soluciones IT para empresas.
          </p>
          <p>
            Mi stack principal gira en torno a <strong className="font-medium text-foreground">Node.js</strong> y{" "}
            <strong className="font-medium text-foreground">Express</strong> para backend,{" "}
            <strong className="font-medium text-foreground">Python</strong> para servicios y automatizacion,{" "}
            y bases de datos como <strong className="font-medium text-foreground">MySQL</strong>,{" "}
            <strong className="font-medium text-foreground">Firebase</strong> y{" "}
            <strong className="font-medium text-foreground">Oracle</strong>. En infraestructura trabajo con{" "}
            <strong className="font-medium text-foreground">AWS</strong> (cuento con la certificacion{" "}
            <strong className="font-medium text-foreground">Cloud Practitioner</strong>) y gestiono la infraestructura como
            codigo con <strong className="font-medium text-foreground">Terraform</strong>.
          </p>
          <p>
            En ZOGA he tenido la oportunidad de liderar equipos y trabajar en
            proyectos de diversa escala: desde apps moviles hasta plataformas
            empresariales complejas, siempre con un enfoque en calidad,
            rendimiento y la mejor experiencia para el usuario final.
          </p>
        </div>
      </div>
    </section>
  )
}
