import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { company, navLinks } from '../data/content'
import { scrollToId } from '../lib/smooth'
import '../styles/navbar.css'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const go = (id) => { setOpen(false); scrollToId(id) }

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <button className="logo" onClick={() => go('top')} aria-label={company.name}>
          {company.logoFirst}<b>{company.logoSecond}</b>
          <small>Technologies</small>
        </button>

        <nav className={`nav-links ${open ? 'is-open' : ''}`} aria-label="Main">
          {navLinks.map((l) => (
            <button key={l.id} onClick={() => go(l.id)}>{l.label}</button>
          ))}
          <button className="btn nav-cta" onClick={() => go('contact')}><span>Get a quote</span></button>
        </nav>

        <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </header>
  )
}
