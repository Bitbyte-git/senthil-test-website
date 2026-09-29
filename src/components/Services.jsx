import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { Code2, Smartphone, Fingerprint, Megaphone, WandSparkles, Radar, ArrowRight } from 'lucide-react'
import { services } from '../data/content'
import { prefersReducedMotion, scrollToId } from '../lib/smooth'
import '../styles/services.css'

const ICONS = {
  code: Code2,
  mobile: Smartphone,
  identity: Fingerprint,
  growth: Megaphone,
  prototype: WandSparkles,
  live: Radar,
}

function ServiceCard({ service }) {
  const card = useRef(null)
  const Icon = ICONS[service.icon] || Code2

  // 3D tilt + glare that follows the mouse
  const onMove = (e) => {
    if (!window.matchMedia('(pointer: fine)').matches || prefersReducedMotion()) return
    const r = card.current.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width
    const y = (e.clientY - r.top) / r.height
    card.current.style.transform = `perspective(900px) rotateY(${(x - 0.5) * 10}deg) rotateX(${(0.5 - y) * 10}deg) translateY(-6px)`
    card.current.style.setProperty('--gx', `${x * 100}%`)
    card.current.style.setProperty('--gy', `${y * 100}%`)
  }
  const onLeave = () => { card.current.style.transform = '' }

  return (
    <article className="service-card" ref={card} onPointerMove={onMove} onPointerLeave={onLeave}>
      <span className="service-glare" aria-hidden="true" />
      <div className="service-top">
        <span className="service-icon"><Icon size={22} strokeWidth={2} /></span>
        <span className="service-tag">{service.tag}</span>
      </div>
      <h3>{service.title}</h3>
      <p>{service.description}</p>
      <button className="service-cta" onClick={() => scrollToId('contact')}>
        {service.cta} <ArrowRight size={15} />
      </button>
      <span className="service-line" aria-hidden="true" />
    </article>
  )
}

export default function Services() {
  const root = useRef(null)

  useGSAP(() => {
    if (prefersReducedMotion()) return
    gsap.from('.section-head > *', {
      y: 40, opacity: 0, duration: 0.8, stagger: 0.12, ease: 'power3.out',
      scrollTrigger: { trigger: root.current, start: 'top 80%' },
    })
    gsap.from('.service-card', {
      y: 70, opacity: 0, duration: 0.9, stagger: 0.12, ease: 'power3.out',
      scrollTrigger: { trigger: '.services-grid', start: 'top 82%' },
    })
  }, { scope: root })

  return (
    <section className="section" id="services" ref={root}>
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">What we do</p>
          <h2 className="section-title">Services that turn ideas into <span>real results</span></h2>
          <p>From the first line of code to your first thousand customers, one team handles it end to end.</p>
        </div>
        <div className="services-grid">
          {services.map((s) => <ServiceCard key={s.title} service={s} />)}
        </div>
      </div>
    </section>
  )
}
