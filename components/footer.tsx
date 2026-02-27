export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 md:flex-row">
        <p className="text-xs text-muted-foreground">
          {`\u00A9 ${new Date().getFullYear()} Tu Nombre. Todos los derechos reservados.`}
        </p>
        <p className="text-xs text-muted-foreground">
          Hecho con Next.js y Tailwind CSS
        </p>
      </div>
    </footer>
  )
}
