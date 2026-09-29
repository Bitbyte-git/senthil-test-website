import { company } from '../data/content'

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid var(--line)', paddingBlock: 36, color: 'var(--muted)', fontSize: 14 }}>
      <div className="container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: 12 }}>
        <span>© {new Date().getFullYear()} {company.name}. All rights reserved.</span>
        <span>{company.tagline}</span>
      </div>
    </footer>
  )
}
