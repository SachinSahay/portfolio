import useReveal from '../hooks/useReveal'
import styles from './Projects.module.css'

const PROJECTS = [
  {
    num: '01',
    name: 'Eduverse-School ERP Portal ',
    desc: 'AI-powered School ERP that streamlines academic and administrative operations through intelligent automation and AI-driven features.',
    metrics: [],
    tags: ['React.js', 'FastAPI', 'PostgreSQL', 'LangChain', 'Docker '],
    github: 'https://github.com/SachinSahay/Eduverse-AI',
  },
  {
    num: '02',
    name: 'MediQuery AI ',
    desc: 'Retrieval-Augmented Generation (RAG) system designed to answer medical queries accurately and concisely.',
    metrics: [],
    tags: ['Python', 'LangChain', 'FAISS', 'OpenAI API', 'FastAPI'],
    github: 'https://github.com/SachinSahay/MediQuery-AI',
  },

  {
    num: '03',
    name: 'MindSketch',
    desc: 'Prompt enhancement,image generation via Hugging Face model, Auth (email/password) with Supabase',
    metrics: [
    ],
    tags: ['React', 'Supabase', 'Hugging Face'],
    github: 'https://github.com/SachinSahay/MindSketch',
  },
]

export default function Projects() {
  const { ref, visible } = useReveal()

  return (
    <section id="projects" className={styles.section}>
      <div className={styles.ey}>// featured work</div>
      <h2 className={styles.title}>Projects</h2>
      <p className={styles.sub}>// real-world AI and full-stack systems — built, deployed, measured</p>

      <div ref={ref} className={`${styles.list} ${visible ? styles.visible : ''}`}>
        {PROJECTS.map((p) => (
          <a
            key={p.num}
            href={p.github}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.row}
          >
            <div className={styles.num}>{p.num}</div>

            <div className={styles.info}>
              <div className={styles.name}>{p.name}</div>
              <div className={styles.desc}>{p.desc}</div>
            </div>

            <div className={styles.metrics}>
              {p.metrics.map(m => (
                <div key={m.label} className={styles.metricLine}>
                  <span className={styles.metricVal}>{m.val}</span>
                  {m.label}
                </div>
              ))}
            </div>

            <div className={styles.tags}>
              {p.tags.map(t => (
                <span key={t} className={styles.tag}>{t}</span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
