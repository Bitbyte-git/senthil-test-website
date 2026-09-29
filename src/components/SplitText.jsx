// Splits text into words and characters so each character can be animated
export default function SplitText({ text, className = '' }) {
  return (
    <span className={className} aria-label={text}>
      {text.split(' ').map((word, wi) => (
        <span className="split-word" key={wi} aria-hidden="true">
          {[...word].map((ch, ci) => (
            <span className="split-char" key={ci}>{ch}</span>
          ))}
          {wi < text.split(' ').length - 1 && ' '}
        </span>
      ))}
    </span>
  )
}
