import useReveal from '../hooks/useReveal'
import styles from './Achievements.module.css'

const ITEMS = [
  {
    icon: '🌿',
    name: "L'Oréal Sustainability Challenge 2024",
    desc: '// selected participant — global sustainability-driven innovation',
  },
  {
    icon: '🏆',
    name: 'Top 10 — Kurukshetra Hackathon 2025',
    desc: '// competitive inter-university hackathon — top 10 finish',
  },
  {
    icon: '🏏',
    name: 'Winner — Cricket JUET Bidding League 2026',
    desc: '// championship win demonstrating strategy & team leadership',
  },
]

export default function Achievements() {
  const { ref, visible } = useReveal()

  return (
    <section id="achievements" className={styles.section}>
      <div className={styles.ey}>// recognition</div>
      <h2 className={styles.title}>Achievements</h2>
      <p className={styles.sub}>// selected highlights</p>

      <div ref={ref} className={`${styles.grid} ${visible ? styles.visible : ''}`}>
        {ITEMS.map(({ icon, name, desc }) => (
          <div key={name} className={styles.item}>
            <span className={styles.icon}>{icon}</span>
            <div className={styles.name}>{name}</div>
            <div className={styles.desc}>{desc}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
