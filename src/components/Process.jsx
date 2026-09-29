import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { process } from '../data/content'
import { prefersReducedMotion } from '../lib/smooth'
import '../styles/process.css'

// Stacking cards: each card sticks, and the one below slides over it
export default function Process() {
  const root = useRef(null)

  useGSAP(() => {
    if (prefersReducedMotion()) return
    const cards = gsap.utils.toArray('.process-card', root.current)
    cards.forEach((card, i) => {
      if (i === cards.length - 1) return
      gsap.to(card, {
        scale: 0.92, filter: 'brightness(0.55)', ease: 'none',
        scrollTrigger: { trigger: cards[i + 1], start: 'top bottom', end: 'top 30%', scrub: true },
      })
    })
  }, { scope: root })

  return (
    <section className="section process" id="process" ref={root}>
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">How we work</p>
          <h2 className="section-title">A clear process, <span>start to launch</span></h2>
        </div>
        <div className="process-stack">
          {process.map((p, i) => (
            <article className="process-card" key={p.title} style={{ '--i': i }}>
              <span className="process-step">{p.step}</span>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
              <span className="process-index" aria-hidden="true">0{i + 1}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
