import { useEffect, useState } from 'react'
import { prefersReducedMotion } from '../lib/smooth'

// Types each word, pauses, deletes it, then moves to the next word
export default function Typing({ words }) {
  const [text, setText] = useState(prefersReducedMotion() ? words[0] : '')

  useEffect(() => {
    if (prefersReducedMotion()) return
    let wi = 0, ci = 0, deleting = false, timer
    const tick = () => {
      const word = words[wi]
      ci += deleting ? -1 : 1
      setText(word.slice(0, ci))
      let delay = deleting ? 45 : 90
      if (!deleting && ci === word.length) { deleting = true; delay = 1400 }
      else if (deleting && ci === 0) { deleting = false; wi = (wi + 1) % words.length; delay = 300 }
      timer = setTimeout(tick, delay)
    }
    timer = setTimeout(tick, 400)
    return () => clearTimeout(timer)
  }, [words])

  return <span className="typing-text">{text}<span className="typing-caret" /></span>
}
