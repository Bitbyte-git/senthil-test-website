import { useEffect, useRef } from 'react'
import { prefersReducedMotion } from '../lib/smooth'

// Connected-dots background. Dots drift slowly and move away from the mouse.
export default function Particles() {
  const canvas = useRef(null)

  useEffect(() => {
    if (prefersReducedMotion()) return
    const cv = canvas.current
    const ctx = cv.getContext('2d')
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    const host = cv.parentElement
    let W, H, pts = [], raf
    const mouse = { x: -9999, y: -9999 }

    const resize = () => {
      const r = cv.getBoundingClientRect()
      W = cv.width = r.width * dpr
      H = cv.height = r.height * dpr
      const count = Math.min(80, Math.floor(r.width / 16))
      pts = Array.from({ length: count }, () => ({
        x: Math.random() * W, y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.35 * dpr, vy: (Math.random() - 0.5) * 0.35 * dpr,
      }))
    }
    const onMove = (e) => {
      const r = cv.getBoundingClientRect()
      mouse.x = (e.clientX - r.left) * dpr
      mouse.y = (e.clientY - r.top) * dpr
    }
    const onLeave = () => { mouse.x = mouse.y = -9999 }
    const linkDist = 120 * dpr

    const draw = () => {
      ctx.clearRect(0, 0, W, H)
      for (const p of pts) {
        const dx = p.x - mouse.x, dy = p.y - mouse.y, d = Math.hypot(dx, dy)
        if (d < 110 * dpr && d > 0) { p.x += (dx / d) * 2.2; p.y += (dy / d) * 2.2 }
        p.x += p.vx; p.y += p.vy
        if (p.x < 0 || p.x > W) p.vx *= -1
        if (p.y < 0 || p.y > H) p.vy *= -1
        ctx.fillStyle = 'rgba(230, 241, 247, 0.65)'
        ctx.beginPath(); ctx.arc(p.x, p.y, 1.6 * dpr, 0, Math.PI * 2); ctx.fill()
      }
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const a = pts[i], b = pts[j], d = Math.hypot(a.x - b.x, a.y - b.y)
          if (d < linkDist) {
            ctx.strokeStyle = `rgba(47, 196, 232, ${(1 - d / linkDist) * 0.3})`
            ctx.lineWidth = 0.8 * dpr
            ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke()
          }
        }
      }
      raf = requestAnimationFrame(draw)
    }

    resize(); draw()
    window.addEventListener('resize', resize)
    host.addEventListener('pointermove', onMove)
    host.addEventListener('pointerleave', onLeave)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      host.removeEventListener('pointermove', onMove)
      host.removeEventListener('pointerleave', onLeave)
    }
  }, [])

  return <canvas ref={canvas} className="hero-particles" aria-hidden="true" />
}
