import { useRef, useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { Mail, Phone, MapPin, Copy, Check, ArrowRight } from 'lucide-react'
import { company } from '../data/content'
import { prefersReducedMotion } from '../lib/smooth'
import MagneticButton from './MagneticButton'
import '../styles/contact.css'

export default function Contact() {
  const root = useRef(null)
  const [copied, setCopied] = useState(false)

  useGSAP(() => {
    if (prefersReducedMotion()) return
    gsap.from('.contact-box > *', {
      y: 40, opacity: 0, duration: 0.8, stagger: 0.12, ease: 'power3.out',
      scrollTrigger: { trigger: root.current, start: 'top 75%' },
    })
  }, { scope: root })

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(company.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Clipboard can be blocked by the browser; the email stays visible as text
    }
  }

  return (
    <section className="section contact" id="contact" ref={root}>
      <div className="container">
        <div className="contact-box">
          <p className="eyebrow">Let's talk</p>
          <h2 className="contact-title">Have an idea? <span>Let's build it.</span></h2>
          <p className="contact-sub">Tell us what you want to build. We reply within one working day with a plan and a quote.</p>
          <div className="contact-actions">
            <MagneticButton href={`mailto:${company.email}`}>Email us <ArrowRight size={18} /></MagneticButton>
          </div>
          <ul className="contact-list">
            <li>
              <Mail size={18} /> <span>{company.email}</span>
              <button className="copy-btn" onClick={copyEmail} aria-label="Copy email">
                {copied ? <><Check size={14} /> Copied</> : <><Copy size={14} /> Copy</>}
              </button>
            </li>
            <li><Phone size={18} /> <span>{company.phone}</span></li>
            <li><MapPin size={18} /> <span>{company.location}</span></li>
          </ul>
        </div>
      </div>
    </section>
  )
}
