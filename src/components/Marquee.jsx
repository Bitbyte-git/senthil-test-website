import { marqueeItems } from '../data/content'
import '../styles/marquee.css'

// Two rows of running text moving in opposite directions (pure CSS)
export default function Marquee() {
  const row = [...marqueeItems, ...marqueeItems]
  return (
    <div className="marquee" aria-label="Technologies and services">
      <div className="marquee-track">
        {row.map((item, i) => <span key={i} aria-hidden={i >= marqueeItems.length}>{item}</span>)}
      </div>
      <div className="marquee-track reverse outline" aria-hidden="true">
        {row.map((item, i) => <span key={i}>{item}</span>)}
      </div>
    </div>
  )
}
