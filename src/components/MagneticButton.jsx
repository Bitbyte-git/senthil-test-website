import { useRef } from 'react'
import gsap from 'gsap'

// Button that is pulled toward the mouse and springs back on leave.
// Pass "href" to render a link, otherwise it renders a button.
export default function MagneticButton({ children, className = 'btn', strength = 0.4, href, ...rest }) {
  const el = useRef(null)
  const inner = useRef(null)
  const fine = typeof window !== 'undefined' && window.matchMedia('(pointer: fine)').matches

  const onMove = (e) => {
    if (!fine) return
    const r = el.current.getBoundingClientRect()
    const x = e.clientX - r.left - r.width / 2
    const y = e.clientY - r.top - r.height / 2
    gsap.to(el.current, { x: x * strength, y: y * strength, duration: 0.4, ease: 'power3.out' })
    gsap.to(inner.current, { x: x * strength * 0.5, y: y * strength * 0.5, duration: 0.4, ease: 'power3.out' })
  }
  const onLeave = () => {
    gsap.to([el.current, inner.current], { x: 0, y: 0, duration: 0.9, ease: 'elastic.out(1, 0.35)' })
  }

  const Tag = href ? 'a' : 'button'
  return (
    <Tag ref={el} href={href} className={className} onPointerMove={onMove} onPointerLeave={onLeave} {...rest}>
      <span ref={inner}>{children}</span>
    </Tag>
  )
}
