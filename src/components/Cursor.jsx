import { useEffect, useRef } from 'react'
import { prefersReducedMotion } from '../lib/smooth'
import '../styles/cursor.css'

// Custom cursor: a dot that tracks the mouse and a ring that follows with lag.
// Only enabled on devices with a precise pointer (mouse / trackpad).
export default function Cursor() {
  const dot = useRef(null)
  const ring = useRef(null)

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches
    if (!fine || prefersReducedMotion()) return
    document.documentElement.classList.add('has-cursor')

    let mx = window.innerWidth / 2, my = window.innerHeight / 2, rx = mx, ry = my, raf
    const move = (e) => {
      mx = e.clientX; my = e.clientY
      if (dot.current) dot.current.style.transform = `translate(${mx}px, ${my}px)`
    }
    const over = (e) => {
      const hit = e.target.closest('a, button, [data-cursor]')
      ring.current?.classList.toggle('is-big', !!hit)
    }
    const loop = () => {
      rx += (mx - rx) * 0.16; ry += (my - ry) * 0.16
      if (ring.current) ring.current.style.transform = `translate(${rx}px, ${ry}px)`
      raf = requestAnimationFrame(loop)
    }
    window.addEventListener('pointermove', move)
    window.addEventListener('pointerover', over)
    loop()
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('pointermove', move)
      window.removeEventListener('pointerover', over)
      document.documentElement.classList.remove('has-cursor')
    }
  }, [])

  return (
    <>
      <div className="cursor-dot" ref={dot} />
      <div className="cursor-ring" ref={ring} />
    </>
  )
}
