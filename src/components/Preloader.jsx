import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { prefersReducedMotion } from '../lib/smooth'
import { company } from '../data/content'
import '../styles/preloader.css'

// Full-screen loader: counts 0 to 100, then slides up and calls onDone
export default function Preloader({ onDone }) {
  const root = useRef(null)
  const num = useRef(null)

  useGSAP(() => {
    if (prefersReducedMotion()) { onDone(); return }
    const counter = { v: 0 }
    gsap.timeline({ onComplete: onDone })
      .to(counter, {
        v: 100, duration: 1.4, ease: 'power2.inOut',
        onUpdate: () => { if (num.current) num.current.textContent = Math.round(counter.v) },
      })
      .to(root.current, { yPercent: -100, duration: 0.8, ease: 'expo.inOut' })
  }, { scope: root })

  return (
    <div className="preloader" ref={root} aria-hidden="true">
      <div className="preloader-brand">{company.logoFirst}<b>{company.logoSecond}</b></div>
      <div className="preloader-num"><span ref={num}>0</span><b>%</b></div>
    </div>
  )
}
