import useReveal from '../hooks/useReveal'
import styles from './Skills.module.css'

const SKILLS = [
  { label: '// languages', items: ['C++', 'Python', 'JavaScript', 'SQL'] },
  { label: '// frontend', items: ['HTML', 'CSS', 'TailwindCSS', 'React.js'] },
  { label: '// backend', items: ['Node.js', 'Express.js', 'REST API Development'] },
  { label: '// AI / GenAI', items: ['LangChain', 'RAG', 'LangGraph', 'Vector Embeddings', 'FAISS'] },
  { label: '// databases', items: ['MongoDB', 'Supabase', 'ChromaDB'] },
  { label: '// tools & cloud', items: ['Git', 'GitHub', 'VS Code', 'Vercel', 'Docker'] },
]

export default function Skills() {
  const { ref, visible } = useReveal()

  return (
    <section id="skills" className={styles.section}>
      <div className={styles.ey}>// technical stack</div>
      <h2 className={styles.title}>Skills &amp;<br />Technologies</h2>
      <p className={styles.sub}>// a curated stack built through real projects — not just coursework</p>

      <div ref={ref} className={`${styles.grid} ${visible ? styles.visible : ''}`}>
        {SKILLS.map(({ label, items }) => (
          <div key={label} className={styles.block}>
            <div className={styles.blockLabel}>{label}</div>
            <div className={styles.list}>
              {items.map(item => (
                <div key={item} className={styles.item}>
                  <span className={styles.dot} />{item}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
