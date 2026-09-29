import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { aboutText, aboutHighlight } from '../data/content'
import { prefersReducedMotion } from '../lib/smooth'
import '../styles/about.css'

// Words start dim and light up one by one as the user scrolls through
export default function About() {
  const root = useRef(null)

  useGSAP(() => {
    if (prefersReducedMotion()) return
    gsap.fromTo('.about-word', { opacity: 0.15 }, {
      opacity: 1, stagger: 0.1, ease: 'none',
      scrollTrigger: { trigger: '.about-text', start: 'top 80%', end: 'bottom 45%', scrub: true },
    })
  }, { scope: root })

  return (
    <section className="section about" id="about" ref={root}>
      <div className="container">
        <p className="eyebrow">About us</p>
        <p className="about-text">
          {aboutText.split(' ').map((word, i) => (
            <span key={i} className={`about-word ${aboutHighlight.includes(word) ? 'hl' : ''}`}>{word} </span>
          ))}
        </p>
      </div>
    </section>
  )
}
