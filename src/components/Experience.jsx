import useReveal from '../hooks/useReveal'
import styles from './Experience.module.css'

const POINTS = [
  'Leveraged DALL-E and Adobe Firefly to produce 50+ digital design and branding assets',
  'Created 20+ educational and promotional materials using RunwayML for text-to-video generation',
  'Contributed to climate model simulations and Mars colonization projects through investor pitch deck design',
]

export default function Experience() {
  const { ref, visible } = useReveal()

  return (
    <section id="experience" className={styles.section}>
      <div className={styles.ey}>// professional</div>
      <h2 className={styles.title}>Experience</h2>
      <p className={styles.sub}>// building with AI tools professionally, not just in side projects</p>

      <div ref={ref} className={`${styles.wrap} ${visible ? styles.visible : ''}`}>
        <div className={styles.row}>
          <div className={styles.left}>
            <div className={styles.company}>Agnirva</div>
            <div className={styles.period}>May 2025 — Jul 2025</div>
          </div>
          <div className={styles.right}>
            <div className={styles.role}>AI Intern</div>
            <ul className={styles.points}>
              {POINTS.map(p => <li key={p}>{p}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
