import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

// Thin bar at the top of the page that fills as the user scrolls
export default function ScrollProgress() {
  const bar = useRef(null)
  useGSAP(() => {
    gsap.to(bar.current, {
      scaleX: 1, ease: 'none',
      scrollTrigger: { trigger: document.body, start: 'top top', end: 'bottom bottom', scrub: 0.3 },
    })
  })
  return (
    <div
      ref={bar}
      style={{
        position: 'fixed', left: 0, top: 0, width: '100%', height: 3, zIndex: 120,
        transform: 'scaleX(0)', transformOrigin: '0 50%',
        background: 'linear-gradient(90deg, var(--blue), var(--lime))',
      }}
    />
  )
}
