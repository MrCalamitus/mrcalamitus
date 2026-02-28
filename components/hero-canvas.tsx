"use client"

import { useRef, useEffect, useCallback } from "react"

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  baseX: number
  baseY: number
  size: number
  color: string
}

const KEYWORDS = [
  "Node.js", "AWS", "Terraform", "MySQL", "Firebase", "Oracle",
  "Docker", "Linux", "API", "CI/CD", "Java", "TypeScript",
  "OpenAI", "RAG", "IoT", "ZOGA", "NativeScript", "Express",
  "Lambda", "S3", "EC2", "RDS", "Scrum", "Git",
]

export function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const mouseRef = useRef({ x: -1000, y: -1000 })
  const animFrameRef = useRef<number>(0)
  const keywordsRef = useRef<{ text: string; x: number; y: number; opacity: number; targetOpacity: number }[]>([])

  const initParticles = useCallback((width: number, height: number) => {
    const particles: Particle[] = []
    const count = Math.min(Math.floor((width * height) / 8000), 120)
    const colors = [
      "rgba(0,0,0,0.07)",
      "rgba(0,0,0,0.05)",
      "rgba(0,0,0,0.09)",
      "rgba(30,64,175,0.06)",
      "rgba(30,64,175,0.04)",
    ]

    for (let i = 0; i < count; i++) {
      const x = Math.random() * width
      const y = Math.random() * height
      particles.push({
        x,
        y,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        baseX: x,
        baseY: y,
        size: Math.random() * 2 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
      })
    }
    particlesRef.current = particles

    // Place keywords randomly
    const kws = KEYWORDS.map((text) => ({
      text,
      x: Math.random() * (width - 120) + 60,
      y: Math.random() * (height - 40) + 20,
      opacity: 0,
      targetOpacity: 0,
    }))
    keywordsRef.current = kws
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resize = () => {
      const parent = canvas.parentElement
      if (!parent) return
      const dpr = window.devicePixelRatio || 1
      const w = parent.offsetWidth
      const h = parent.offsetHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      canvas.style.width = `${w}px`
      canvas.style.height = `${h}px`
      ctx.scale(dpr, dpr)
      initParticles(w, h)
    }

    resize()
    window.addEventListener("resize", resize)

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      }
    }

    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 }
    }

    canvas.addEventListener("mousemove", handleMouseMove)
    canvas.addEventListener("mouseleave", handleMouseLeave)

    // Touch support
    const handleTouchMove = (e: TouchEvent) => {
      const rect = canvas.getBoundingClientRect()
      const touch = e.touches[0]
      if (touch) {
        mouseRef.current = {
          x: touch.clientX - rect.left,
          y: touch.clientY - rect.top,
        }
      }
    }
    const handleTouchEnd = () => {
      mouseRef.current = { x: -1000, y: -1000 }
    }
    canvas.addEventListener("touchmove", handleTouchMove, { passive: true })
    canvas.addEventListener("touchend", handleTouchEnd)

    const animate = () => {
      const w = canvas.width / (window.devicePixelRatio || 1)
      const h = canvas.height / (window.devicePixelRatio || 1)
      ctx.clearRect(0, 0, w, h)

      const mouse = mouseRef.current
      const mouseRadius = 120
      const particles = particlesRef.current

      // Update and draw particles
      for (const p of particles) {
        const dx = mouse.x - p.x
        const dy = mouse.y - p.y
        const dist = Math.sqrt(dx * dx + dy * dy)

        if (dist < mouseRadius) {
          const force = (mouseRadius - dist) / mouseRadius
          const angle = Math.atan2(dy, dx)
          p.vx -= Math.cos(angle) * force * 0.8
          p.vy -= Math.sin(angle) * force * 0.8
        }

        // Drift back to base
        p.vx += (p.baseX - p.x) * 0.005
        p.vy += (p.baseY - p.y) * 0.005

        // Damping
        p.vx *= 0.97
        p.vy *= 0.97

        p.x += p.vx
        p.y += p.vy

        // Wrap
        if (p.x < 0) p.x = w
        if (p.x > w) p.x = 0
        if (p.y < 0) p.y = h
        if (p.y > h) p.y = 0

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = p.color
        ctx.fill()
      }

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < 100) {
            const opacity = (1 - dist / 100) * 0.08
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(0,0,0,${opacity})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }

      // Draw keyword cloud - show near mouse
      const keywords = keywordsRef.current
      for (const kw of keywords) {
        const dx = mouse.x - kw.x
        const dy = mouse.y - kw.y
        const dist = Math.sqrt(dx * dx + dy * dy)

        kw.targetOpacity = dist < 180 ? Math.max(0.08, (180 - dist) / 180) * 0.45 : 0
        kw.opacity += (kw.targetOpacity - kw.opacity) * 0.06

        if (kw.opacity > 0.01) {
          ctx.font = "11px var(--font-mono, monospace)"
          ctx.fillStyle = `rgba(0, 0, 0, ${kw.opacity})`
          ctx.fillText(kw.text, kw.x, kw.y)
        }
      }

      animFrameRef.current = requestAnimationFrame(animate)
    }

    animFrameRef.current = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(animFrameRef.current)
      window.removeEventListener("resize", resize)
      canvas.removeEventListener("mousemove", handleMouseMove)
      canvas.removeEventListener("mouseleave", handleMouseLeave)
      canvas.removeEventListener("touchmove", handleTouchMove)
      canvas.removeEventListener("touchend", handleTouchEnd)
    }
  }, [initParticles])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-auto"
      aria-hidden="true"
    />
  )
}
