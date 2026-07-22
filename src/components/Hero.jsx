import { useState, useEffect } from 'react'
import styles from './Hero.module.css'

const PHRASES = [
  'building AI that ships.',
  'RAG · LLMs · Full-Stack.',
  'open to 2026 placements.',
  'turning ideas into products.',
]

// strip removed — UI simplified per request

export default function Hero() {
  const [text, setText] = useState('')
  const [phraseIdx, setPhraseIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = PHRASES[phraseIdx]
    let timeout

    if (!deleting) {
      if (charIdx < current.length) {
        timeout = setTimeout(() => setCharIdx(i => i + 1), 72)
      } else {
        timeout = setTimeout(() => setDeleting(true), 2400)
      }
    } else {
      if (charIdx > 0) {
        timeout = setTimeout(() => setCharIdx(i => i - 1), 32)
      } else {
        setDeleting(false)
        setPhraseIdx(i => (i + 1) % PHRASES.length)
      }
    }

    setText(current.slice(0, charIdx))
    return () => clearTimeout(timeout)
  }, [charIdx, deleting, phraseIdx])

  return (
    <section className={styles.hero}>
      <div className={styles.glow} aria-hidden="true" />
      <div className={styles.lettermark} aria-hidden="true">SS</div>

      <div className={styles.content}>
        <div className={styles.avail}>
          <span className={styles.dot} />
          Available · 2026 Batch
        </div>

        <h1 className={styles.name}>
          Sachin<br />Sahay
        </h1>

        <div className={styles.term}>
          <span className={styles.gt}>&gt; _</span>&nbsp;
          <span>{text}</span>
          <span className={styles.cursor} />
        </div>

        <p className={styles.sub}>
          AI Engineer &amp; Full-Stack Developer<br />
          Building intelligent systems that ship.<br />
          RAG · LLMs · React · Node.js · Python
        </p>
      </div>

      {/* strip removed */}
    </section>
  )
}
