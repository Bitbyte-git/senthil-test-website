import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ArrowDown, ArrowRight } from 'lucide-react'
import { company, typingWords } from '../data/content'
import { prefersReducedMotion, scrollToId } from '../lib/smooth'
import SplitText from './SplitText'
import Typing from './Typing'
import Particles from './Particles'
import MagneticButton from './MagneticButton'
import '../styles/hero.css'

export default function Hero({ start }) {
  const root = useRef(null)

  useGSAP(() => {
    if (prefersReducedMotion()) return
    const chars = gsap.utils.toArray('.split-char', root.current)
    const rest = gsap.utils.toArray('.hero-fade', root.current)

    // Keep content hidden while the preloader is on screen
    if (!start) {
      gsap.set(chars, { yPercent: 115, rotate: 6 })
      gsap.set(rest, { y: 24, opacity: 0 })
      return
    }
    gsap.timeline()
      .to(chars, { yPercent: 0, rotate: 0, duration: 0.9, ease: 'expo.out', stagger: 0.02 })
      .to(rest, { y: 0, opacity: 1, duration: 0.7, stagger: 0.1, ease: 'power3.out' }, '-=0.5')

    // Parallax on the floating badges while scrolling out of the hero
    gsap.utils.toArray('[data-speed]', root.current).forEach((el) => {
      gsap.to(el, {
        y: () => parseFloat(el.dataset.speed) * 160, ease: 'none',
        scrollTrigger: { trigger: root.current, start: 'top top', end: 'bottom top', scrub: true },
      })
    })
  }, { scope: root, dependencies: [start] })

  return (
    <section className="hero" id="top" ref={root}>
      <div className="hero-mesh" aria-hidden="true"><i /><i /><i /></div>
      <Particles />

      <span className="hero-badge" data-speed="-0.6" style={{ top: '20%', right: '8%' }}>Web · Mobile · Growth</span>
      <span className="hero-badge" data-speed="0.9" style={{ bottom: '18%', right: '16%' }}>{company.location}</span>

      <div className="container hero-inner">
        <p className="eyebrow hero-fade">{company.name}</p>
        <h1 className="hero-title">
          <SplitText text="Transforming Ideas" className="hero-line" />
          <SplitText text="into Digital Reality" className="hero-line accent" />
        </h1>
        <p className="hero-typing hero-fade">We build <Typing words={typingWords} /></p>
        <p className="hero-desc hero-fade">{company.description}</p>
        <div className="hero-actions hero-fade">
          <MagneticButton onClick={() => scrollToId('contact')}>Start your project <ArrowRight size={18} /></MagneticButton>
          <MagneticButton className="btn ghost" strength={0.25} onClick={() => scrollToId('services')}>Our services <ArrowDown size={18} /></MagneticButton>
        </div>
      </div>
    </section>
  )
}
