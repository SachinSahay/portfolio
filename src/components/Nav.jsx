import styles from './Nav.module.css'

const links = ['Skills', 'Projects', 'Experience', 'Achievements', 'Contact']

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>Sachin Sahay</div>
      <ul className={styles.links}>
        {links.map(l => (
          <li key={l}>
            <a href={`#${l.toLowerCase()}`}>{l}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
