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
  angle: number
  speed: number
  orbitRadius: number
}

interface Keyword {
  text: string
  x: number
  y: number
  baseX: number
  baseY: number
  opacity: number
  targetOpacity: number
  drift: number
  driftSpeed: number
}

const KEYWORDS = [
  "Node.js", "AWS", "Terraform", "MySQL", "Firebase", "Oracle",
  "Docker", "Linux", "API", "CI/CD", "Java", "TypeScript",
  "OpenAI", "RAG", "IoT", "ZOGA", "NativeScript", "Express",
  "Lambda", "S3", "EC2", "RDS", "Scrum", "Git", "MongoDB",
  "GraphQL", "PyTorch", "Python", "e.firma",
]

export function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const mouseRef = useRef({ x: -1000, y: -1000, active: false })
  const animFrameRef = useRef<number>(0)
  const timeRef = useRef(0)
  const keywordsRef = useRef<Keyword[]>([])

  const initParticles = useCallback((width: number, height: number) => {
    const particles: Particle[] = []
    const count = Math.min(Math.floor((width * height) / 7000), 140)
    const colors = [
      "rgba(0,0,0,0.08)",
      "rgba(0,0,0,0.05)",
      "rgba(0,0,0,0.10)",
      "rgba(30,64,175,0.07)",
      "rgba(30,64,175,0.05)",
    ]

    for (let i = 0; i < count; i++) {
      const x = Math.random() * width
      const y = Math.random() * height
      particles.push({
        x,
        y,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        baseX: x,
        baseY: y,
        size: Math.random() * 2.5 + 0.8,
        color: colors[Math.floor(Math.random() * colors.length)],
        angle: Math.random() * Math.PI * 2,
        speed: 0.002 + Math.random() * 0.004,
        orbitRadius: 20 + Math.random() * 40,
      })
    }
    particlesRef.current = particles

    const kws: Keyword[] = KEYWORDS.map((text) => {
      const bx = Math.random() * (width - 140) + 70
      const by = Math.random() * (height - 40) + 20
      return {
        text,
        x: bx,
        y: by,
        baseX: bx,
        baseY: by,
        opacity: 0,
        targetOpacity: 0,
        drift: Math.random() * Math.PI * 2,
        driftSpeed: 0.003 + Math.random() * 0.006,
      }
    })
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
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      initParticles(w, h)
    }

    resize()
    window.addEventListener("resize", resize)

    const handlePointer = (clientX: number, clientY: number) => {
      const rect = canvas.getBoundingClientRect()
      mouseRef.current = {
        x: clientX - rect.left,
        y: clientY - rect.top,
        active: true,
      }
    }

    const handleMouseMove = (e: MouseEvent) => handlePointer(e.clientX, e.clientY)
    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000, active: false }
    }
    const handleTouchMove = (e: TouchEvent) => {
      const touch = e.touches[0]
      if (touch) handlePointer(touch.clientX, touch.clientY)
    }
    const handleTouchEnd = () => {
      mouseRef.current = { x: -1000, y: -1000, active: false }
    }

    canvas.addEventListener("mousemove", handleMouseMove)
    canvas.addEventListener("mouseleave", handleMouseLeave)
    canvas.addEventListener("touchmove", handleTouchMove, { passive: true })
    canvas.addEventListener("touchend", handleTouchEnd)

    const animate = () => {
      const dpr = window.devicePixelRatio || 1
      const w = canvas.width / dpr
      const h = canvas.height / dpr
      if (w === 0 || h === 0) {
        animFrameRef.current = requestAnimationFrame(animate)
        return
      }

      ctx.clearRect(0, 0, w, h)
      timeRef.current += 1
      const time = timeRef.current

      const mouse = mouseRef.current
      const mouseRadius = 150
      const particles = particlesRef.current

      // Update and draw particles - always moving in orbits
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]

        // Continuous orbital movement around base position
        p.angle += p.speed
        const orbitX = p.baseX + Math.cos(p.angle) * p.orbitRadius
        const orbitY = p.baseY + Math.sin(p.angle * 0.7) * p.orbitRadius * 0.6

        // Gently steer toward orbit target
        p.vx += (orbitX - p.x) * 0.008
        p.vy += (orbitY - p.y) * 0.008

        // Mouse repulsion (stronger when active)
        if (mouse.active) {
          const dx = mouse.x - p.x
          const dy = mouse.y - p.y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < mouseRadius) {
            const force = (mouseRadius - dist) / mouseRadius
            const repelAngle = Math.atan2(dy, dx)
            p.vx -= Math.cos(repelAngle) * force * 3
            p.vy -= Math.sin(repelAngle) * force * 3
          }
        }

        // Damping
        p.vx *= 0.94
        p.vy *= 0.94

        p.x += p.vx
        p.y += p.vy

        // Wrap around edges
        if (p.x < -10) p.x = w + 10
        if (p.x > w + 10) p.x = -10
        if (p.y < -10) p.y = h + 10
        if (p.y > h + 10) p.y = -10

        // Pulsing size
        const pulse = 1 + Math.sin(time * 0.02 + p.angle) * 0.15

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size * pulse, 0, Math.PI * 2)
        ctx.fillStyle = p.color
        ctx.fill()
      }

      // Draw connections between nearby particles
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

      // Mouse glow when hovering
      if (mouse.active) {
        const gradient = ctx.createRadialGradient(
          mouse.x, mouse.y, 0,
          mouse.x, mouse.y, 160
        )
        gradient.addColorStop(0, "rgba(30,64,175,0.04)")
        gradient.addColorStop(1, "rgba(30,64,175,0)")
        ctx.fillStyle = gradient
        ctx.fillRect(mouse.x - 160, mouse.y - 160, 320, 320)
      }

      // Keywords - always gently drifting, more visible near mouse
      const keywords = keywordsRef.current
      for (let i = 0; i < keywords.length; i++) {
        const kw = keywords[i]

        // Continuous gentle floating
        kw.drift += kw.driftSpeed
        kw.x = kw.baseX + Math.sin(kw.drift) * 12
        kw.y = kw.baseY + Math.cos(kw.drift * 0.8) * 8

        // Base ambient opacity + boost near mouse
        const ambientOpacity = 0.06 + Math.sin(time * 0.008 + kw.drift) * 0.02

        if (mouse.active) {
          const dx = mouse.x - kw.x
          const dy = mouse.y - kw.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          kw.targetOpacity = dist < 200
            ? Math.max(ambientOpacity, ((200 - dist) / 200) * 0.5)
            : ambientOpacity
        } else {
          kw.targetOpacity = ambientOpacity
        }

        kw.opacity += (kw.targetOpacity - kw.opacity) * 0.04

        if (kw.opacity > 0.01) {
          ctx.font = "11px monospace"
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
