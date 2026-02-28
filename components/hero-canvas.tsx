"use client"

import { useEffect, useRef } from "react"

const KEYWORDS = [
  "Node.js", "Java", "AWS", "Terraform", "MySQL", "Firebase",
  "Oracle", "NativeScript", "Docker", "REST API", "TypeScript",
  "Linux", "CI/CD", "Lambda", "Python", "MongoDB",
]

interface Particle {
  x: number
  y: number
  baseX: number
  baseY: number
  vx: number
  vy: number
  radius: number
  opacity: number
  angle: number
  orbitSpeed: number
  orbitRadius: number
}

interface Keyword {
  text: string
  x: number
  y: number
  vx: number
  vy: number
  opacity: number
  baseOpacity: number
  pulsePhase: number
}

export function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const parent = canvas.parentElement
    if (!parent) return

    let animationId: number
    let mouseX = -1000
    let mouseY = -1000
    const mouseRadius = 150

    const resize = () => {
      const rect = parent.getBoundingClientRect()
      if (rect.width === 0 || rect.height === 0) return rect
      const dpr = window.devicePixelRatio || 1
      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr
      canvas.style.width = `${rect.width}px`
      canvas.style.height = `${rect.height}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      return rect
    }

    let rect = resize()
    const w = () => rect.width
    const h = () => rect.height

    const particles: Particle[] = Array.from({ length: 50 }, () => {
      const x = Math.random() * rect.width
      const y = Math.random() * rect.height
      return {
        x, y, baseX: x, baseY: y,
        vx: 0, vy: 0,
        radius: Math.random() * 2 + 1,
        opacity: Math.random() * 0.3 + 0.1,
        angle: Math.random() * Math.PI * 2,
        orbitSpeed: (Math.random() - 0.5) * 0.01,
        orbitRadius: Math.random() * 30 + 10,
      }
    })

    const keywords: Keyword[] = KEYWORDS.map((text) => ({
      text,
      x: Math.random() * rect.width,
      y: Math.random() * rect.height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      opacity: 0,
      baseOpacity: Math.random() * 0.12 + 0.04,
      pulsePhase: Math.random() * Math.PI * 2,
    }))

    const handleMouseMove = (e: MouseEvent) => {
      const r = canvas.getBoundingClientRect()
      mouseX = e.clientX - r.left
      mouseY = e.clientY - r.top
    }

    const handleMouseLeave = () => {
      mouseX = -1000
      mouseY = -1000
    }

    const handleTouchMove = (e: TouchEvent) => {
      const r = canvas.getBoundingClientRect()
      mouseX = e.touches[0].clientX - r.left
      mouseY = e.touches[0].clientY - r.top
    }

    canvas.addEventListener("mousemove", handleMouseMove)
    canvas.addEventListener("mouseleave", handleMouseLeave)
    canvas.addEventListener("touchmove", handleTouchMove, { passive: true })

    let time = 0

    const draw = () => {
      time += 0.016
      const cw = w()
      const ch = h()
      if (cw === 0 || ch === 0) {
        animationId = requestAnimationFrame(draw)
        return
      }
      ctx.clearRect(0, 0, cw, ch)

      for (const p of particles) {
        p.angle += p.orbitSpeed
        const targetX = p.baseX + Math.cos(p.angle) * p.orbitRadius
        const targetY = p.baseY + Math.sin(p.angle) * p.orbitRadius

        const dx = p.x - mouseX
        const dy = p.y - mouseY
        const dist = Math.sqrt(dx * dx + dy * dy)

        if (dist < mouseRadius && dist > 0) {
          const force = (mouseRadius - dist) / mouseRadius
          p.vx += (dx / dist) * force * 3
          p.vy += (dy / dist) * force * 3
        }

        p.vx += (targetX - p.x) * 0.02
        p.vy += (targetY - p.y) * 0.02
        p.vx *= 0.92
        p.vy *= 0.92
        p.x += p.vx
        p.y += p.vy

        if (p.x < -20) p.x = cw + 20
        if (p.x > cw + 20) p.x = -20
        if (p.y < -20) p.y = ch + 20
        if (p.y > ch + 20) p.y = -20

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(0, 102, 204, ${p.opacity})`
        ctx.fill()
      }

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i]
          const b = particles[j]
          const d = Math.sqrt((a.x - b.x) ** 2 + (a.y - b.y) ** 2)
          if (d < 120) {
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.strokeStyle = `rgba(0, 102, 204, ${0.06 * (1 - d / 120)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }

      if (mouseX > 0 && mouseY > 0) {
        const gradient = ctx.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, mouseRadius)
        gradient.addColorStop(0, "rgba(0, 102, 204, 0.06)")
        gradient.addColorStop(1, "rgba(0, 102, 204, 0)")
        ctx.beginPath()
        ctx.arc(mouseX, mouseY, mouseRadius, 0, Math.PI * 2)
        ctx.fillStyle = gradient
        ctx.fill()
      }

      for (const kw of keywords) {
        kw.x += kw.vx
        kw.y += kw.vy

        if (kw.x < 0 || kw.x > cw) kw.vx *= -1
        if (kw.y < 0 || kw.y > ch) kw.vy *= -1

        const dxk = kw.x - mouseX
        const dyk = kw.y - mouseY
        const distk = Math.sqrt(dxk * dxk + dyk * dyk)
        const pulse = Math.sin(time * 2 + kw.pulsePhase) * 0.02
        const targetOpacity = distk < mouseRadius * 1.5 ? 0.25 : kw.baseOpacity + pulse

        kw.opacity += (targetOpacity - kw.opacity) * 0.05

        ctx.font = "11px monospace"
        ctx.fillStyle = `rgba(0, 102, 204, ${kw.opacity})`
        ctx.fillText(kw.text, kw.x, kw.y)
      }

      animationId = requestAnimationFrame(draw)
    }

    draw()

    const handleResize = () => {
      rect = resize()
    }
    window.addEventListener("resize", handleResize)

    return () => {
      cancelAnimationFrame(animationId)
      canvas.removeEventListener("mousemove", handleMouseMove)
      canvas.removeEventListener("mouseleave", handleMouseLeave)
      canvas.removeEventListener("touchmove", handleTouchMove)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-auto absolute inset-0 h-full w-full"
      aria-hidden="true"
    />
  )
}
