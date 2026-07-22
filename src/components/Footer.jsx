import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.left}>© 2026 Sachin Sahay · JUET Batch of 2026</div>
      <div className={styles.right}>
        <span className={styles.dot} />
        Open to work
      </div>
    </footer>
  )
}
