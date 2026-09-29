import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { stats } from '../data/content'
import { prefersReducedMotion } from '../lib/smooth'
import '../styles/stats.css'

// Numbers count up from 0 when the section enters the screen
export default function Stats() {
  const root = useRef(null)

  useGSAP(() => {
    if (prefersReducedMotion()) return
    gsap.utils.toArray('.stat-num', root.current).forEach((el) => {
      const target = Number(el.dataset.to)
      const obj = { v: 0 }
      el.textContent = '0'
      gsap.to(obj, {
        v: target, duration: 2, ease: 'power2.out',
        scrollTrigger: { trigger: el, start: 'top 88%' },
        onUpdate: () => { el.textContent = Math.round(obj.v) },
      })
    })
  }, { scope: root })

  return (
    <section className="stats-wrap" ref={root}>
      <div className="container">
        <div className="stats">
          {stats.map((s) => (
            <div className="stat" key={s.label}>
              <div className="stat-value"><span className="stat-num" data-to={s.value}>{s.value}</span><sup>{s.suffix}</sup></div>
              <p>{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
