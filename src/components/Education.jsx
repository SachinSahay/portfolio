import useReveal from '../hooks/useReveal'
import styles from './Education.module.css'

export default function Education() {
  const { ref, visible } = useReveal()

  return (
    <section id="education" className={styles.section}>
      <div className={styles.ey}>// background</div>
      <h2 className={styles.title}>Education</h2>

      <div ref={ref} className={`${styles.wrap} ${visible ? styles.visible : ''}`}>
        <div className={styles.row}>
          <div className={styles.inst}>
            Jaypee University of<br />Engineering &amp; Technology
          </div>
          <div className={styles.meta}>
            <div className={styles.deg}>B.Tech — Computer Science &amp; Engineering</div>
            <div className={styles.yr}>2022 — 2026 · Final Year</div>
          </div>
        </div>
      </div>
    </section>
  )
}
